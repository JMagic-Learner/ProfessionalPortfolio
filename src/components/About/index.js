import React from 'react';

import Background2 from '../../img/intro-picture2.jpg'
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
                      <img src={Background2} className="img-fluid rounded b-shadow-a" alt=""/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7">
                    <div className="about-info">
                      <Typography  className="title-s">Name: Jason Ma </Typography>
                      <Typography  className="title-s">Field: Front End Developer </Typography>
                      <Typography  className="title-s">Email: MaJason93@gmail.com </Typography>
                      <Typography  className="title-s">Phone: (253) 389-7521 </Typography>
                    </div>
                  </div>
                </div>
                <div className="skill-mf">
                  <Typography className=" credits black ">Skill</Typography>
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
                      About
                    </h5>
                  </div>
                  <Typography variant="h5"> Front-End Developer </Typography>
                  <Typography className="black justify">
                    Junior Front-End developer certified in full-stack development with  Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
                    Prioritizes UI design and end-user interactivity. 
                    Experienced in following AGILE methodology and working with other developers in team projects. 
                    Projects are built on a foundation of REACT, JS ES6, and a wide assortment of CSS libraries (MUI-REACT, CSS Grid, Bootstrap). 
                    Prioritizes UI design and end-user interactivity. Experienced with team projects for coding, especially in regards to meeting deadlines for assigned tasks. 
                    Familiar with global state management tools such as Redux-Toolkit and Context-API
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
}