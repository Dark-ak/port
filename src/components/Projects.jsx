import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
    return (
        <Box id="project" sx={{ textAlign: "center", mt: 10,mb:20, mx: { xs: 2, md: 20 } }}>
            <Box>
                <Typography sx={{ color: "#B1B493", fontSize: 20 }}>
                    Accomplishments
                </Typography>
                <Typography sx={{ fontSize: 40, fontWeight: 500 }}>
                    Projects
                </Typography>
            </Box>

            <Grid container rowSpacing={6} spacing={3} justifyContent={"center"} my={5}>
                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/aespop.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain",md:"fill" }}} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    Beauty Product Landing Page
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        React, TailwindCSS
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://aespop.vercel.app/' target='_blank' sx={{ backgroundColor: "#B1B493" }} variant='contained'>Live Demo</Button>
                            <Button component={Link} href='https://github.com/Dark-ak/aespop' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/ecommerce.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain",md:"fill" }}} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    E-commerce
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        Nextjs,Node,TailwindCSS, Stripe
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://github.com/Dark-ak/Shopping' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/iptracker.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain",md:"fill" }}} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    Ip Tracker
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        React, TailwindCSS, Leaflet Api
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://iptracker-eosin.vercel.app/' target='_blank' sx={{ backgroundColor: "#B1B493" }} variant='contained'>Live Demo</Button>
                            <Button component={Link} href='https://github.com/Dark-ak/ipTracker' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/4dots.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain",md:"fill" } }} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    4 dots
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        TypeScript,React, TailwindCSS
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://4dotz.netlify.app/' target='_blank' sx={{ backgroundColor: "#B1B493" }} variant='contained'>Live Demo</Button>
                            <Button component={Link} href='https://github.com/Dark-ak/4dots' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/landing.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain",md:"fill" } }} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    App Landing Page
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        TypeScript,React, TailwindCSS
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://magnificent-stardust-651214.netlify.app' target='_blank' sx={{ backgroundColor: "#B1B493" }} variant='contained'>Live Demo</Button>
                            <Button component={Link} href='https://github.com/Dark-ak/Landing' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={6}>
                    <Card>
                        <CardMedia src='../public/app.png' component="img" sx={{ width: "100%", height: {xs:250,md:350}, objectFit: {xs:"contain" } }} />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                                    Pomodoro App
                                </Typography>
                                <Box sx={{display:"flex", gap:1 }}>
                                    <Typography sx={{fontSize:18, color:"#B1B493", fontWeight:500}}>
                                        Tech: 
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:18}}>
                                        Flutter, Dart
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button component={Link} href='https://github.com/Dark-ak/prodiv' target='_blank' sx={{ borderColor: "#B1B493", color: "#B1B493" }} variant='outlined'>Code</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Projects