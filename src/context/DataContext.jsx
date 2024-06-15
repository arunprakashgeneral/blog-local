import { createContext, useState,useEffect } from "react";
import {format} from 'date-fns'
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({children})=>{
  const [posts,setPosts]= useState(JSON.parse(localStorage.getItem('social-media'))||[])
  const [searchResults,setSearchResults] = useState([])
  const [postBody,setPostBody] = useState('')
  const [postTitle,setPostTitle] = useState('')
  const [editBody,setEditBody] = useState('')
  const [editTitle,setEditTitle] = useState('')
  const [search,setSearch]= useState('')
  const navigate = useNavigate()
  
  useEffect(()=>{
    const filteredResults = posts.filter(post=>((post.body).toLowerCase().includes(search.toLowerCase())) || ((post.title).toLowerCase().includes(search.toLowerCase())))
    setSearchResults(filteredResults.reverse())
  },[posts,search])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id+1 : 1
    const datetime = format(new Date(),'MMMM dd,yyyy pp')
    const newPost = {id,title:postTitle, datetime, body:postBody}
    const allPosts = [...posts,newPost]
    setPosts(allPosts)
    localStorage.setItem('social-media',JSON.stringify(allPosts))
    setPostTitle('')
    setPostBody('')
    navigate('/')
    }

  const handleEdit= (id)=>{
    const datetime = format(new Date(),'MMMM dd,yyyy pp')
    const updatedPost = {id,title:editTitle, datetime, body:editBody} 
    const newPost =  posts.map(post=> post.id===id ?{...updatedPost} : post)
    setPosts(newPost)
    localStorage.setItem('social-media',JSON.stringify(newPost))
    setEditTitle('')
    setEditBody('')
    navigate('/')    
    }

  const handleDelete = (id)=>{  
    const postList = posts.filter(post=>post.id!==id)
    setPosts(postList)
    localStorage.setItem('social-media',JSON.stringify(postList))
    navigate('/')
  }
    return(
        <DataContext.Provider value={{
            search,setSearch,searchResults,handleSubmit,postTitle,setPostTitle,postBody,setPostBody,posts,setPosts,handleDelete, handleEdit,editTitle,setEditTitle,editBody,setEditBody
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext