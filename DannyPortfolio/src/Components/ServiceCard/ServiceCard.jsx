import React from 'react'
import './ServiceCard.css'
const ServiceCard = (props) => {
  console.log(props.service.title)
  return (
    <div className='ServiceCard'>
        <div className='ServiceCard-Content'>
            <h1 style={ { marginBottom:"20px"  } }> { props.service.title } </h1>
            <p style={ { lineHeight: '34px',maxWidth: "780px", fontSize: "18px" } }> { props.service.description } </p>
 
        </div>
        <div className='ServiceCard-Image-Container'  >
            <img className= {props.service.title} src= {props.service.icon} style={ { maxWidth: '200px'} } />
        </div>


    </div>
  )
}

export default ServiceCard