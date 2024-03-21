import DanielLogo from '../../assets/Logo/DanielLogo.png'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='Logo' src ={DanielLogo} alt = "Daniel Oluwarotimi Logo" />
        <ul className= "nav-links">
            <li>Services</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Experience</li>
            <li>Interest</li>
            <li>About</li>
        </ul>

        <p  id='Contact'>Contact Me</p>
    </div>
  )
}

export default Navbar