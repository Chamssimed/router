
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
      
    </div>
  )
}

export default Navbar
