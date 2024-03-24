import './About.css'
import CookingMan from '../../assets/CookingMan.png'
import Music from '../../assets/Music.png'
import MorganState from '../../assets/MorganState.png'
import  ManLifting from '../../assets/ManLifting.png'
import Programming_BlackMan from '../../assets/Programing_BlackMan.png'
import Reading from '../../assets/Reading.png'
import DanielPicture  from '../../assets/DanielPictureAbout.png'


const About = () => {
  return (
    <div className="About-Container">
        <div className='About-Main-Content'>
        <div className= 'About-Content-Container' >
        <div className='About-Content'>
            <div className='About-Content-text'>

            
            <h1 id= "About-Title"  style = {{fontSize : "55px",  }}>About Me</h1>
            <h2 style={{ paddingTop: "40px", fontSize: "40px" }}>I am an Engineer</h2>
            <p style={{ paddingTop: "30px", fontSize: "20px", maxWidth: "700px", lineHeight: "1.8" }}>
                I am a Computer Science Major at Morgan State University (Class of 2025 🎉), with Experience
                in Web Development, Mobile Development, Backend Development and Game Development. I aspire to be an renowned Full
                Stack Developer in the future. When I&apos;m not coding I enjoy working out 🏋🏽, reading 📖, Playing the piano 🎹, and occasionally
                table tennis 🏓. (..O! ye Cooking! I enjoy cooking :D 👨🏽‍🍳. I am a true Culinary Expert. {">"}:3 )
            </p>
            </div>
            <div className='About-Image-Container'>
            <div className='About-Image-Container-Block1'>
                <div className='Aboout-MorganStateLogo-Container'><img id='MorganStateLogo'  src={MorganState} style={ { maxWidth: "65px", paddingTop: "20px", paddingRight: "20px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "16px" } } /> </div>
                <div className='About-Chef-Container'><img id='Chef'  src={CookingMan}  style={ { maxWidth: "65px", marginTop: "auto", marginBottom: "50px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "5px"} }/> </div>
            </div>
            <div className='About-Image-Container-Block2'> 
                <div className='About-Music-Container'> <img id=' Music'  src={Music} style={ { maxWidth: "65px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "5px"  } } /></div>
                <img id='DanielPictureAbout'  src={DanielPicture} style={ { maxWidth: "400px", paddingTop: "20px", paddingBottom: "20px", flexGrow: "2",  } } />
                <div className='About-Lifting-Container'>  <img   src={ ManLifting}  style={ { maxWidth: "65px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "5px" } }/>  </div>
            </div>
            <div className='About-Image-Container-Block3'>
                <div className='About-Reading-Container'> <img id='Reading'  src={Reading} style={ { maxWidth: "65px", paddingTop: "20px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "5px" }  } /> </div>
                <div  className='About-Programmer-Container'> <img id='Programmer'  src={Programming_BlackMan}  style={ { maxWidth: "65px", marginTop: "auto", marginBottom: "50px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "20px", padding: "5px"} }/> </div>
            </div>
        </div>
            
        </div>
        </div>
        

        </div>
        
        
        
        

    </div>
  )
}

export default About