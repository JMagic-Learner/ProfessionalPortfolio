import { Typography } from '@mui/material'
import React, { useEffect , useState} from 'react'
import Background1 from '../../img/intro-picture.jpg'

export default function Introduction() {
    const [currentTransition, setCurrentTransition] = useState("old")
   useEffect(()=>{
    setCurrentTransition("new")
   }, [])

    return  <div id="home" className={"route bg-image " + `${currentTransition}`} style={{ backgroundImage: `url(${Background1})` }}>
    <div className="overlay-intro"> 
    <div className="intro-content display-table ">
      <div className="table-cell">
        <div className="container">
          <Typography variant="h1" color="neutral">Jason Ma</Typography>
          <Typography variant="p" className={currentTransition}>Welcome</Typography>
         <Typography className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></Typography> 
        </div>
      </div>
    </div>
    </div>
  </div>
}