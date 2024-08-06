import React from 'react'
import { Box, Typography } from '@mui/material'



const Contact = () => {
    return (
        <Box id="contact" sx={{ textAlign: "left",backgroundColor:"#B1B493",py:3, px: { xs: 2, md: 20 }, my:10    }}>
            <Box sx={{display:"flex",flexDirection:{xs:"column", md:"row"}, justifyContent:"space-between", alignItems:"center"}}>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: 18, color: "white" }}>
                        Want to Connect ?
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
                        Contact me
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap:3 }}>
                    <Box
                        component="a"
                        href="https://github.com/Dark-ak"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'inline-block' }}
                    >
                        <img
                            src="../../public/github.png"
                            alt="Description"
                            style={{ width: '100%', height: '50px', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box
                        component="a"
                        href="https://www.linkedin.com/in/aakash-karki-647652190/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'inline-block' }}
                    >
                        <img
                            src="../../public/linkedin.png"
                            alt="Description"
                            style={{ width: '100%', height: '50px', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact