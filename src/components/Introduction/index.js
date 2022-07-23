import { Typography } from '@mui/material'
import React, { useEffect , useState} from 'react'
import Background1 from '../../img/intro-picture.jpg'
import Background2 from '../../img/intro-picture2.jpg'



export default function Introduction() {

    const [currentText,setCurrentText] = useState("Welcome")
    const [currentTransition, setCurrentTransition] = useState("new")
  //  useEffect(()=>{
  //   setCurrentTransition("new")
  //   setCurrentText("Frontend Developer")
  //  }, [])
  
 
        
     
    
    return  <div id="home" className={"route bg-image " + `${currentTransition}`} style={{ backgroundImage: `url(${Background2})` }}>
    <div className="overlay-intro"> 
    <div className="intro-content display-table ">
      <div className="table-cell">
        <div className="container">
          <Typography variant="h1" color="neutral">Jason Ma</Typography>
          <Typography variant="p" className={`${currentTransition}` + " black"}>{currentText}</Typography>
         <Typography className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></Typography> 
        </div>
      </div>
    </div>
    </div>
  </div>
}