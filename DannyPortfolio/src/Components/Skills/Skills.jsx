import React from 'react'
import './Skills.css'
import SkillsCard from '../SkillsCard/SkillsCard'
import { skills } from '../../Constants'

const Skills = () => {
  return (
    <div className='Skills'>
      <div className='Skills-Content-Container'>
        <div className='Header-Container'>
          <h1 style={ { marginBottom:"40px", fontSize: "55px", borderBottom:"2px solid #1c232c", paddingBottom:"20px", display:"inline-block", padding:"30px"} } >Skills</h1>
        </div>
        <div className='Skills-Content'>
          {
            skills.map(( skill, index ) =>  (
              <SkillsCard key = { index } skill = { skill } />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Skills