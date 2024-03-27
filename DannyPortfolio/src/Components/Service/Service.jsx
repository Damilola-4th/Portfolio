import React from 'react'
import './Service.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import { services} from '../../Constants' 
const Service = () => {
  return (
    <div className='Service-Container'>
        <div className='Service-Card-Container'>
         < h1 style={ { marginBottom:"20px", fontSize: "55px"  } }>Service</h1>
          {
            services.map( ( service, index ) => (
              console.log(service),
              <ServiceCard
                key = { index }
                service = {service }
              /> 
              
             ) )
            
          }
            
        </div>
    </div>
  )
}

export default Service