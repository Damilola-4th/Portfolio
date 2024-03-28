import React from 'react'
import './LandingPage.css'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
const LandingPage = () => {
  return (
    <div  style={{ height: '100%' }}>
        <Hero />
        <About />
        <Service />
        <Experience />
        <Projects />
        
    </div>
  )
}

export default LandingPage