import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='Logo'>Daniel Oluwarotimi</p>
        <ul className= "nav-links">
            <li>Services</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>About</li>
            
        </ul>

        <p  id='Contact'>Contact Me</p>
    </div>
  )
}

export default Navbar