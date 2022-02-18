import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center pb-5 lh-2'>
        <span className='lat-pri-bold-3'>Copyright &copy; 2022</span><br />
        <Link to="/about" className='lat-snd-bold-2'>About</Link>
    </div>
  )
}

export default Footer