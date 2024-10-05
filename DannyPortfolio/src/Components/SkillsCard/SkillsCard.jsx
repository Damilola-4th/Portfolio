import React, { useState } from 'react'
import './SkillsCard.css'
const SkillsCard = (props) => {

  const [ isHovered, setIsHovered ] = useState(false)
  console.log('true + index is:', 'truecase'+ props.index)

  return (
    <div className='Skillcard'>
        <div className={ isHovered != `truecase${props.index}`? 'SkillCard-Content': 'SkillsCard-ContentHovered' } onMouseEnter = { () => setIsHovered('truecase' + props.index)}
          onMouseLeave={ () => setIsHovered(false) }>
         <img src= { props.skill.icon } style={ { maxWidth:"150px" } } />
        </div>
        
    </div>
  )
}

export default SkillsCard