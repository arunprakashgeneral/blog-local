import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {posts , handleEdit,editTitle,setEditTitle,editBody,setEditBody} = useContext(DataContext)
  const {id}= useParams()
  const post = posts.find(post=>(post.id).toString()===id)
  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post,setEditTitle,setEditBody])
  return (
    <main className='NewPost'>
       {editTitle && 
       <>
         <h2>Edit Post</h2>
         <form className='newPostForm' onClick={(e)=> e.preventDefault()} >
          <label htmlFor="postTitle">Title:</label>
          <input 
            type="text" 
            required
            id='postTitle'
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
           required
           id='postBody'
           type='text'
           value={editBody}
           onChange={(e)=>setEditBody(e.target.value)}
          > </textarea> 
          <button type='submit'
          onClick={()=>handleEdit(post.id)}
          >Submit</button>         
         </form>
       </>
}
       {!editTitle && 
         <>
           <h2>Post not found</h2>
           <p>Well that's disappointing</p>
           <Link to='/'>Visit our Homepage</Link>
         </>
      }

       
    </main>
  )
}

export default EditPost
