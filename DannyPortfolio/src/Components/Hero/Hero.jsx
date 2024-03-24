import React from 'react'
import './Hero.css'
import  DanielPicture  from '../../assets/DanielPicture.png'
import Linkedin from '../../assets/Linkedin.png'
import { Github } from '../../assets/Index'
// import {GoogleCloud} from '../../assets'
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero-Main-Content'>
        <div className='Hero-Content-Container'> 
        <div className='Hero-Content'>
          <div className='Hero-Content-Line'>
            
          </div>
          <div className='Hero-Content-text'> 
            <h2 className = "Hero-Name" style={{fontSize: "33px" , marginBottom: "10px"}}>Hello My Name is</h2>
            <h1 className = "Hero-Name" style={{fontSize: "80px"}} >Daniel Oluwarotimi</h1>
            <h1 id= "Hero-Title" style = {{fontSize : "53px", marginTop: "10px"}}>Full Stack Developer</h1>
            <button id='Hero-About-Me-Button' style={{ maxWidth: "500px" } } > About me</button>
          </div>
           
        </div>
        
        </div>
        
         
        

      
        <div className='Hero-Socials'>
          <a href='https://github.com/Damilola-4th' target='_blank' rel = "noopener noreferrer"> <img src= {Github} style={ { marginRight: '25px' }}/> </a>
          <a href='https://www.linkedin.com/in/daniel-oluwarotimi' target='_blank' rel = "noopener noreferrer"><img src= {Linkedin} /></a>
        </div>
        </div>
        <div className='Hero-Image'>
          <img id= "Hero-Profile-Picture" src= {DanielPicture} />
        </div>

        
    </div>
  )
}

export default Hero