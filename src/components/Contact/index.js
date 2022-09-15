import React from 'react'
import ContactImage from '../../img/JasonMaBanner.jpg'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function Contact() {

    let IconInfo = [
      {
        id:1,
        information: "2826 44th ST CT NE 98422, TACOMA WA",
        icon: "ion-ios-location"
      },
      {
        id:2,
        information: "(253) 389-7521",
        icon: "ion-ios-telephone"
      },
      {
        id:3,
        information: "MaJason93@gmail.com",
        icon: "ion-email"
      }
    ]

    let InputBox = [
      {
        id:1,
        type:"text",
        name: "name",
        placeholder: "Your Name",
        rule: "minlen:4",
        message:"Please enter at least 4 chars"
      },
      {
        id:2,
        type:"email",
        name: "email",
        placeholder: "Your email",
        rule: "email",
        message:"Please enter a valid email"
      },
      {
        id:3,
        type:"text",
        name: "subject",
        placeholder: "Subject",
        rule: "minlen:4",
        message:"Please enter at least 8 chars of subject"
      }
    ]

    return<section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: `url(${ContactImage})`}}>
    <div className="overlay-mf"></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
                <div className="marginAUTO ">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <Typography variant="h4">
                      Get in Touch
                    </Typography>
                  </div>
                  <div className="more-info">
                    <Typography className="black justify">
                        Are you a vendor or a client looking for a third party solution? Need a website built? Application refractored?
                        Contact me today so we can schedule a preliminary business solution overview. I look forward to working with your firm.
                    </Typography>
                    <ul className="list-ico">
                    <List>
                      {IconInfo.map((item)=> {
                        return(
                          <ListItem disablePadding key={item.id}>
                            <ListItemButton>
                                <span className={item.icon}></span>
                                <ListItemText primary={item.information} />
                            </ListItemButton>
                          </ListItem>
                        )
                      })}
                  </List>
                    </ul>
                  </div>
                  <div className="socials">
                    <ul>
                      <li><a href=""><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                      <li><a href=""><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                    </ul>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
}