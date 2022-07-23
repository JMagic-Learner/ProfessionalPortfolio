import { Typography } from '@mui/material'
import React from 'react'
import ContactImage from '../../img/overlay-bg.jpg'

export default function Footer() {
    
    return  <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: `url(${ContactImage})`}}>
        <div className="overlay-mf"></div>
        <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            {/* <Typography className="credits"> */}
                {/* All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio */}
              {/* Original Template designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            {/* </Typography> */}
            <Typography  className="credits">
              Refractored to REACT by JASON MA 2022
            </Typography>
            <Typography  className="credits">
              REACT | Node.JS | MUI-REACT | Bootstrap CDN | owlCarousel | ION-ICONS | lightbox
            </Typography>
          </div>
        </div>
      </div>
    </div>
    </footer>
    </section>
  
  
}