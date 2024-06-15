import React from 'react'

const Footer = () => {
  const year = new Date()
  return (
    <footer className='Footer'>
        <h1>Copyright&copy;{year.getFullYear()}</h1>
        <p>All rights reserved</p>
    </footer>
  )
}

export default Footer
