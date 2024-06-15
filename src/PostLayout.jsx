import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link  } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <Link to='/postpage/1'>Post 1</Link> 
        <Link to='/postpage/2'>Post 2</Link>
        <Link to='/postpage/3'>Post 3</Link>
        <Link to='/postpage/newpost'>Newpost</Link>
        <Outlet />
    </div>
  )
}

export default PostLayout
