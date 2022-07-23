import React from 'react'

export default function Services() {

    let HTMLarray = [
      {
        icon:"ion-monitor",
        title:"REACT Applications",
        description:"Using modern, modular frameworks to build solutions."
      },
      {
        icon:"ion-android-checkbox",
        title:"Test Driven Development",
        description:" Integral in planning out behavior and expected end-user interaction."
      },
      {
        icon:"ion-android-phone-portrait",
        title:"Responsive Design",
        description:"Utlize MUI-REACT, SASS, Bootstrap to code responsive layouts."
      },
    ]
    
    return <section id="service" className="services-mf route">
    <div className="container">
      <div className="row">
       
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Services
            </h3>
            <p className="subtitle-a">
             Bringing efficient solutions to clients.
            </p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
        <div className="row" >
        {HTMLarray.map((item)=>{
          return(
            <div className="col-md-4">
          <div className="service-box">
            <div className="service-ico">
              <span className="ico-circle"><i className={item.icon}></i></span>
            </div>
            <div className="service-content">
              <h2 className="s-title">{item.title}</h2>
              <p className="s-description text-center">
                {item.description}
              </p>
            </div>
          </div>
        </div>
          )
        })}

        </div>
    </div>
  </section>
}