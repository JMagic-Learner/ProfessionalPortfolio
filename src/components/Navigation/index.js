import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, ThemeProvider } from '@mui/material';



export default function Navigation() {
  const [ChangePalette, setChangePalette] = useState("primary")
  const [VerticalLocation, setVerticalLocation] = useState("Initial")

  useEffect(() => {
    console.log('navigation has loaded');
  }, [])

  useEffect(() => {
    setChangePalette("secondary")
  }, [VerticalLocation])

  window.onscroll = console.log("Scrolling")

  let HTMLarray = [
    {
      title: "Home",
      link: "#home"
    },
    {
      title: "About",
      link: "#about"
    },
    {
      title: "Services",
      link: "#services"
    },
    {
      title: "Projects",
      link: "#work"
    },
    {
      title: "Contact",
      link: "#contact"
    }
  ]

  return (

    <nav className=" fixed-top" id="mainNav">

      <AppBar position="relative">


        <Toolbar elevation={0}>
          {/* <IconButton
            size="large"
            edge="start"
            color={ChangePalette}
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton> */}

       
          <Grid container spacing={1} align="center">
            <br></br>
            {/* flexgrow specifically applies to the following buttons */}
            {HTMLarray.map((item) => {
              return (
                <Grid className="nav-item" item xs={6} sm={3} md={2.4}>
                  <Button color={ChangePalette} variant="h6" sx={{ flexGrow: 1 }} href={item.link}>{item.title}</Button>
                </Grid>
              )
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  )
}