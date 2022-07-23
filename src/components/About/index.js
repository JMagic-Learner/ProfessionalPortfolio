import React from 'react';
import Image1 from "../../img/testimonial-2.jpg"
import { Typography } from '@mui/material';

export default function About(){
    return <section id="about" className="sect-pt4 ">
    <div className="container">
          <div className="box-shadow-full">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6 col-md-5">
                    <div className="about-img">
                      <img src={Image1} className="img-fluid rounded b-shadow-a" alt=""/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7">
                    <div className="about-info">
                      <Typography  className="title-s">Name: Jason Ma </Typography>
                      <Typography  className="title-s">Profile: Front End Developer </Typography>
                      <Typography  className="title-s">Email: jmaconsult59@gmail.com</Typography>
                      <Typography  className="title-s">Phone: (253) 389-7521 </Typography>
                    </div>
                  </div>
                </div>
                <div className="skill-mf">
                  <p className="title-s">Skill</p>
                  <span>HTML</span> <span className="pull-right">95%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="85" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>REACT</span> <span className="pull-right">85%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                  <span>CSS</span> <span className="pull-right">90%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0"
                  
                      aria-valuemax="100"></div>
                  </div>
                  <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                <span>MERN Stack</span> <span className="pull-right">70%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              </div>
              <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      About me
                    </h5>
                  </div>
                  <Typography variant="h5"> REAL ESTATE </Typography>
                  <Typography className="black justify">
                    Starting in 2009 , my father and I began to flip real estate. In addition to my academic studies at FWPA, 
                    I had the opportunity to experience and help my family in a little venture called Greenville Properties LLC. 
                    Since then, I studied Real Estate and obtained a WA Real Estate Broker License. 
                    I am currently an Windermere REALTOR, aiming to incorporate the Zillow API with my real estate background.
                  </Typography>
                  <Typography variant="h5"> Front-End Developer </Typography>
                  <Typography className="black justify">
                    Intermediate Front-End developer with background in economics / statistics. 
                    Certified in full-stsack development for Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
                    Prioritizes UI design and end-user interactivity. Experienced with team projects for coding, especially in regards to meeting deadlines for assigned tasks. Example projects include an calendar app to record and track nearby events, a project that uses Spotify API to display soundtracks and songs via search, and Historian, a project that utilizes MERN stack and database queries to dynamically render and store historic events. 
                    I am currently coding an application to streamline Warhammer 40k 9E Objective scoring via MERN and MUI. 
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
}