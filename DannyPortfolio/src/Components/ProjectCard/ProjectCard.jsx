import React from 'react'
import './ProjectCard.css'
const ProjectCard = (props) => {
    const points = props.project.points
  return (
    <div className='Projectcard'>
        <div className='Project-Content-Container'>
            <h1 style={ { marginBottom:"10px"  } }> {props.project.title} </h1>
            { 
                points.map( (point) => (
                    <p className='point' style={ {  paddingBottom: "10px", maxWidth:"640px", lineHeight: '34px', fontSize: "18px" } }> &bull;  { point } </p>
                ) )           
            } 
        </div>
        <div className='Image-Container'>
            <img src= { props.project.projectImage } style={ { maxWidth: "520px" } } />
        </div>
    </div>
  )
}

export default ProjectCard