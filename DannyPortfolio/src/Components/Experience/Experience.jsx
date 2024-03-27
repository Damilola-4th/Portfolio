import React from 'react'
import './Experience.css'
import { Express } from '../../assets'
import { experience } from '../../Constants'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

const Experience = ( props ) => {
  return (
    <div className='Experience-Container'>
        <div className='Experience-Card-Container' >
            <h1 style={ { marginBottom:"20px", fontSize: "55px"  } } >Experience</h1>
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