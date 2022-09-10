import { Typography } from '@mui/material'

import React from 'react'
import Image1 from '../../img/work-1.jpg'
import Image2 from '../../img/work-2.jpg'
import Image3 from '../../img/work-3.jpg'


export default function Projects(){

    let HTMLarray = [
      {
        title:"Stepper",
        imageSource: `${Image3}`,
        category:"Internal Component Library",
        date:"13 June. 2022",
        link:"https://github.com/JMagic-Learner/pat-ui"
      },
        {
          title: "Zenith Highlight",
          imageSource: `${Image1}`,
          category:"A hobby website",
          date:"26 October. 2021",
          link:"https://zenithhighlight.herokuapp.com/"
        },
        {
          title:"Exquisite Unlimited",
          imageSource: `${Image2}`,
          category:"A ecommerce website",
          date:"3 August. 2022",
          link:"https://exquisite-unlimited-website.herokuapp.com/"
        }
    ]

    
    return <section id="work" className="portfolio-mf sect-pt4 route" >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Portfolio
            </h3>
            <p className="subtitle-a">
              A collection of prior works
            </p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {HTMLarray.map((item) => {
            return(
                <div className="col-md-4">
          <div className="work-box">
          <a href={item.imageSource} data-lightbox="gallery-mf">
              <div className="work-img">
                <img src={item.imageSource} alt="" className="img-fluid"/>
              </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div >
                    <Typography variant="h5" align="center">  <a href={item.link} > {item.title}</a></Typography>
                    <Typography variant="h6" align="center">  <a href={item.link} >  -- Demo Link -- </a></Typography>
                    <div className="w-more">
                      <span className="w-ctegory">{item.category}</span> / <span className="w-date">{item.date}</span>
                    </div>
                  </div>
                  
                    <div className="w-like">
                    <span className="ion-ios-plus-outline" ></span>
                    </div>
                  
                </div>
              </div>
             
          </div>
        </div>
            )
        })}
      </div>
    </div>
  </section>
}