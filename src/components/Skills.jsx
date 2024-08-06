import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import {motion} from 'framer-motion'

const Skills = () => {

    const title = {
        y:0,
        transition:{
            type:"ease",
            duration:0.8,
        },
        opacity:1,
    }

    const anim = {
        first: {
            x:0,
            transition:{
                type:"ease",
                duration:0.8
            },
            opacity:1
        },
        sec: {
            y:0,
            transition:{
                type:"ease",
                duration:0.8
            },
            opacity:1

        },
        third: {
            x:0,
            transition:{
                type:"ease",
                duration:0.8
            },
            opacity:1

        }
    }

    return (
        <Box id="skills" sx={{ backgroundColor: "#F8F9FA",pt:6, pb:10, mt: 10, px: {xs:3, md:10, lg: 20 } }}>
            <Box component={motion.div} initial={{opacity:0, y:100}} whileInView={title} sx={{ textAlign: "center", mb:10}}>
                <Box>
                    <Typography sx={{ fontWeight: 400, fontSize: 25, color: "#B1B493" }}>
                        Skills
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: 40 }}>
                        My Skills
                    </Typography>
                </Box>

                <Typography sx={{ color: "gray", fontSize: 20 }}>
                    My toolkit to change idea into reality
                </Typography>
            </Box>

            <Grid container spacing={5} justifyContent={"center"}>
                <Grid component={motion.div} initial={{opacity:0,x:-100}} whileInView={anim.first} viewport={{amount:0.5}} item xs={12} sm={6} md={4}>
                    <Card width="100vw">
                        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
                            <CardMedia component="img" image="../public/mern.png" sx={{ width: "100%", objectFit: "contain", height: 200 }} />
                            <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#B1B493" }}>MERN Stack</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid component={motion.div} initial={{opacity:0,y:-100}} whileInView={anim.sec} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
                            <CardMedia component="img" image="../public/python.png" sx={{ width: "50%", objectFit: "contain", height: 200 }} />
                            <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#B1B493" }}>Python</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid component={motion.div} initial={{opacity:0,x:100}} whileInView={anim.third} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
                            <CardMedia component="img" image="../public/mysqlc.png" sx={{ width: "70%", objectFit: "contain", height: 200 }} />
                            <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#B1B493" }}>MySQL</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid component={motion.div} initial={{opacity:0,x:-100}} whileInView={anim.first} viewport={{amount:0.5}} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
                            <CardMedia component="img" image="../public/flutter.png" sx={{ width: "70%", objectFit: "contain", height: 200 }} />
                            <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#B1B493" }}>Flutter</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid component={motion.div} initial={{opacity:0,x:100}} whileInView={anim.first} viewport={{amount:0.5}} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
                            <CardMedia component="img" image="../public/django.png" sx={{ width: "70%", objectFit: "contain", height: 200 }} />
                            <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#B1B493" }}>Django</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills