import React from 'react';
import './About.css'
import CookingMan from '../../assets/CookingMan.png'
import Music from '../../assets/Music.png'
import MorganState from '../../assets/MorganState.png'
import  ManLifting from '../../assets/ManLifting.png'
import Programming_BlackMan from '../../assets/Programing_BlackMan.png'
import Reading from '../../assets/Reading.png'
import DanielPicture  from '../../assets/DanielPictureAbout.png'
import { useState } from 'react'


const About = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="About-Container">
        <div className='About-Main-Content'>
        <div className= 'About-Content-Container' >
        <div className='About-Content'>
            <div className='About-Content-text'>

            
            <h1 id= "About-Title"  style = {{fontSize : "55px",  } }    >About Me</h1>
            <h2 style={{ paddingTop: "40px", fontSize: "40px" }}>I am an Engineer</h2>
            <p style={{ paddingTop: "30px", fontSize: "20px", maxWidth: "700px", lineHeight: "1.8" }}>
                I am a Computer Science Major at Morgan State University (Class of 2025 🎉), with Experience
                in Web Development, Backend Development and Game Development. I aspire to be an renowned Full
                Stack Developer in the future. When I&apos;m not coding I enjoy working out 🏋🏽, reading 📖, Playing the piano 🎹, and occasionally
                table tennis 🏓. (..O! ye Cooking! I enjoy cooking :D 👨🏽‍🍳. I am a true Culinary Expert. {">"}:3 )
            </p>
            <button id='About-Connect-Button' style={{ maxWidth: "500px" } } > Lets Connect</button>
            </div>
            <div className='About-Image-Container'>
            <div className='About-Image-Container-Block1'>
                <div className='Aboout-MorganStateLogo-Container'  ><img id= { isHovered == 'MorganStateLogoHover'? 'MorganStateLogoHover': "MorganStateLogo" } src={MorganState} onMouseEnter={ () => setIsHovered( 'MorganStateLogoHover') } onMouseLeave={() => setIsHovered('MorganStateLogo')} /> </div>
                <div className='About-Chef-Container'><img id= {isHovered =='Chef-Hover'? 'Chef-Hover': "Chef"}  src={CookingMan} onMouseEnter={ () => setIsHovered( 'Chef-Hover') } onMouseLeave={() => setIsHovered('Chef')}  /> </div>
            </div>
            <div className='About-Image-Container-Block2'> 
                <div className='About-Music-Container'> <img id= {isHovered =='Music-Hover'? 'Music-Hover': "Music"}   src={Music} onMouseEnter={ () => setIsHovered( 'Music-Hover') } onMouseLeave={() => setIsHovered('Music')} /></div>
                <img id='DanielPictureAbout'  src={DanielPicture} style={ { maxWidth: "400px", paddingTop: "20px", paddingBottom: "20px", flexGrow: "2",  } } />
                <div className='About-Lifting-Container'>  <img id = {isHovered == "Lifting-Hover"? "Lifting-Hover": 'Lifting'}  src={ ManLifting} onMouseEnter={ () => setIsHovered( 'Lifting-Hover') } onMouseLeave={() => setIsHovered('Lifting')}  />  </div>
            </div>
            <div className='About-Image-Container-Block3'>
                <div className='About-Reading-Container'> <img id={ isHovered == "Reading-Hover"? 'Reading-Hover': "Reading"}  src={Reading} onMouseEnter={ () => { setIsHovered("Reading-Hover") } }  onMouseLeave={ () => { setIsHovered("Reading") } } /> </div>
                <div  className='About-Programmer-Container'> <img id={ isHovered == "Programming-Hover"? 'Programming-Hover': "Programming"} src={Programming_BlackMan} onMouseEnter={ () => setIsHovered( 'Programming-Hover') } onMouseLeave={() => setIsHovered('Programming')} /> </div>
            </div>
        </div>
            
        </div>
        </div>
        

        </div>
        
        
        
        

    </div>
  )
}

export default About