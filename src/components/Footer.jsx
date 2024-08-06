import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{display:"flex",width:"100%",margin:0,py:1, bgcolor:"gray", justifyContent:"center"}}>
        <Typography sx={{color:"white"}}>
            Copyright &copy; Aakash
        </Typography>
    </Box>
  )
}

export default Footer