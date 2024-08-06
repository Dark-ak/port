
import { Box, Typography } from '@mui/material'

import "../../public/bg.jpg"


const Home = () => {



    return (
        <Box id="home" sx={{ pt: '80px', height: {xs:"80vh", md:"100vh"}, backgroundImage:'url(../../public/bg.jpg)', backgroundSize:"cover"}}>
            <Box sx={{ mx: { xs: 1, md: 20 }, mt: { xs: 8, sm: 20 }, textAlign: { xs: "center", sm: "left" }, width: { xs: "100%", sm: "80%", md:"40%" } }}>
                <Typography sx={{ color: { sm: "black" }, fontSize: 25, fontWeight: 400 }}>
                    Hi! I am <span>Aakash</span>
                </Typography>
                <Typography sx={{ color: { sm: "black" }, fontSize: {xs: 30,sm:40,md:60}, lineHeight:1, fontWeight: 700 }}>
                    I am a <span style={{color:"white"}}>Full Stack Developer</span>
                </Typography>
                <Typography sx={{ color: "gray", my:1 }}>
                    I bridge the gap between pixels and logic, weaving code into functional wonders. Backend maestro + UI sculptor, I bring ideas to life, pixel by pixel.
                </Typography>
            </Box>
        </Box>
    )
}

export default Home