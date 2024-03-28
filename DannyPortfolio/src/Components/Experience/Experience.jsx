import React from 'react'
import './Experience.css'
import { Express } from '../../assets'
import { experience } from '../../Constants'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

const Experience = ( props ) => {
  return (
    <div className='Experience-Container'>
        <div className='Experience-Card-Container' >
            <h1 style={ { marginBottom:"40px", fontSize: "55px", borderBottom:"2px solid white", paddingBottom:"20px", display:"inline-block"} } >Experience</h1>
            {
                experience.map( ( experience, index ) => (
                    console.log(experience),
                    <ExperienceCard experience = { experience } index = { index } key = { index } />
                ))
            }
        </div>
    </div>
  )
}

export default Experience