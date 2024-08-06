import { Box, Card, CardMedia, duration, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import {animate, motion} from "framer-motion"


const About = () => {

    const screen = {
        offScreen: {
            y:150,
            opacity:0,
            transition: {
                type: "ease-out",
                bounce: 0.4,
                duration: 0.8,
              },
        },
        onscreen: {
            y: 50,
            transition: {
              type: "ease-in",
              bounce: 0.4,
              duration: 0.8,
            },
            opacity:1
          }
    }

    return (
        <Card component={motion.div} initial="offScreen" whileInView="onscreen" variants={screen}  sx={{pb:10, display: 'flex', gap:{xs:0,sm:4,md:6}, flexDirection:{xs:"column", md:"row"}, mx:{xs:2, md:20},my:20, alignItems:"center"}}>
            <CardMedia component="img" image="../public/about.jpg" sx={{ width: 500 }} />
            <Box  sx={{ display: "flex", flexDirection: "column",mx:5 }}>
                <Typography sx={{ fontWeight: 400, color:"#B1B493" }}>
                    MY INTRO
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 40 }}>
                    About me
                </Typography>
                <Box sx={{display:"flex", flexDirection:"column", gap:5}}>
                    <Typography sx={{color:"grey"}}>
                        Passionate and detail-oriented software developer with expertise in modern web technologies and frameworks,
                        including React, HTML, CSS, and Next.js. Demonstrated proficiency in using Tailwind CSS for efficient UI
                        development and Redux for robust state management. Adept at designing and developing user-centric applications
                        that deliver exceptional experiences. Enthusiastic about leveraging new technologies to create innovative solutions
                        and drive impactful results
                    </Typography>

                    <Box sx={{display:'flex',gap:5}}>
                        <Box>
                            <Typography sx={{fontWeight:600, fontSize:22}}>Name:</Typography>
                            <Typography sx={{fontWeight:600, fontSize:22}}>Phone No:</Typography>
                            <Typography sx={{fontWeight:600, fontSize:22}}>Date of Birth:</Typography>
                            <Typography sx={{fontWeight:600, fontSize:22}}>Email:</Typography>
                            <Typography sx={{fontWeight:600, fontSize:22}}>Github:</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize:22,color:"#B1B493", fontWeight:600}}>Aakash Karki</Typography>
                            <Typography sx={{fontSize:22,color:"#B1B493", fontWeight:600}}>+91 9149159477</Typography>
                            <Typography sx={{fontSize:22,color:"#B1B493", fontWeight:600}}>17.06.2004</Typography>
                            <Typography sx={{fontSize:22,color:"#B1B493", fontWeight:600}}>ak9004729@gmail.com</Typography>
                            <Link sx={{fontSize:22,color:"#B1B493", fontWeight:600, cursor:"pointer"}} underline='none'>https://github.com/Dark-ak</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default About