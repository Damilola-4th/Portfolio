import React from 'react'
import './Projects.css'
import { project } from '../../Constants'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div className='Projects'>
        <div className='Project-Card-Container'>
            <h1 style={ { marginBottom:"20px", fontSize: "55px",   paddingTop:"40px" } } >Projects</h1>
            {
                project.map( (project,index ) => (
                    console.log(project),
                    <ProjectCard 
                        project = { project }
                        key={ index }
                        index = { index } 

                    />
                ) )
            }
        </div>
    </div>
  )
}

export default Projects