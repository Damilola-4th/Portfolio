import React from 'react'
import './LandingPage.css'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
const LandingPage = () => {
  return (
    <div  style={{ height: '100%' }}>
        <Hero />
        <About />
        <Service />
        <Experience />
        <Projects />
        <Skills /> 
        
    </div>
  )
}

export default LandingPage