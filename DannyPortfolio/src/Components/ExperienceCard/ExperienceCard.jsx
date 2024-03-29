import React from 'react'
import './ExperienceCard.css'
const ExperienceCard = ( props ) => {
  const points = props.experience.points
  console.log(props.experience)
  console.log('index', props.index+1 , (( props.index+1) % 2) == 0 ? true: false    )
  return (
    <div className= {  (( props.index+1) % 2) == 0 ? 'ExperienceCard-RightContainer': 'ExperienceCard-LeftContainer' }>
        <div className='ExperienceCard-MainContent-Container'>
            <div className={ (( props.index+1) % 2) == 0 ? 'ExperienceCard-Content-RightContainer': "ExperienceCard-Content-LeftContainer" } >
                <h1 className='Experience-Title' style={ { marginBottom:"20px"  } }> { props.experience.Company } </h1>
                <h2 style={ { marginBottom:"10px"  } } >
                    { props.experience.title } 
                    <span>  (
                        {   props.experience.date }
                    )
                    </span> 
                    
                </h2>
                
                { points.map( (point , index) => (
                    <p key = { index } style={ { paddingBottom: "10px", maxWidth:"600px", lineHeight: " 25px", fontSize: "17px"} } > &bull;  { point } </p>
                ) ) 
    }
            </div>
            <span  className={ (( props.index+1) % 2) == 0 ? "RightArrow": "LeftArrow" }  style={ {   width: "60px"} }></span>
        </div>
        
        <div id='TimeLine-line' >

        </div> 
        <div className={  props.experience.Company == 'Google' ?  ' Google-Image-Container': 'Company-Image-Container'   } >  
            <img src={props.experience.icon} style={ { maxWidth: '100px'  }  } />
        </div>
        
 
    </div>
  )
}

export default ExperienceCard