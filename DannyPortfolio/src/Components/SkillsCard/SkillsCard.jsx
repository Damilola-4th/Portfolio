import React from 'react'
import './SkillsCard.css'
const SkillsCard = (props) => {

  return (
    <div className='Skillcard'>
        <div className='SkillCard-Content'>
         <img src= { props.skill.icon } style={ { maxWidth:"150px" } } />
        </div>
        
    </div>
  )
}

export default SkillsCard