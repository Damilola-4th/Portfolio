import React from 'react';
import DanielLogo from '../../assets/Logo/DanielLogo.png'
import { NavLink, Link, useNavigate} from "react-router-dom"
import { useState, useEffect} from 'react'
import "./Navbar.css"

const Navbar = () => {
  
  const [IsSticky, setIsSticky] = useState(false)
  console.log(IsSticky)
  console.log(window.scrollY)
    useEffect(() => {
      const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          if (navbar) {
              const top = navbar.offsetTop;
              if (window.scrollY >= 302) {
                  setIsSticky(true);
              }else {
                setIsSticky(false)
              }
          }
      };

      const handleScrollUp = () => {
        // If user scrolls up to the top of the page, unstick the navbar
        if (window.scrollY === 0) {
            setIsSticky(false);
        }
    };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollUp);
      return () => {
          window.removeEventListener('scroll', handleScroll);
          window.addEventListener('scroll', handleScrollUp);
      };
  }, []);

  return (
    <div className={IsSticky? 'navbar-sticky' :'navbar' } >
        <img className='Logo' src ={DanielLogo} alt = "Daniel Oluwarotimi Logo"  />
        <ul className= "nav-links">
            <li>Services</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Interest</li>
            <li><NavLink to={"/"}  className="NavLinks">About</NavLink></li>
        </ul>

        <button id='Contact'> Contact Me </button> 
    </div>
  )
}

export default Navbar