import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { useState } from 'react';





const Nav = () => {

    const [active, setActive] = useState("home")

    useEffect(() => {
        const sections = document.querySelectorAll('.sections')
        console.log('Sections found:', sections.length)

        const options = {
            root: null,
            rootMargin: '-50% 0px',  // Consider the middle 50% of the viewport
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log('Intersection triggered for:', entry.target.id, 'isIntersecting:', entry.isIntersecting, 'intersectionRatio:', entry.intersectionRatio)
                if (entry.isIntersecting) {
                    console.log('Setting active to:', entry.target.id)
                    setActive(entry.target.id)
                }
            })
        }, options)

        sections.forEach((section) => {
            console.log('Observing section:', section.id)
            observer.observe(section)
        })

        // Log when scrolling occurs
        const scrollHandler = () => {
            console.log('Scroll event detected')
        }
        window.addEventListener('scroll', scrollHandler)

        return () => {
            sections.forEach((section) => observer.unobserve(section))
            window.removeEventListener('scroll', scrollHandler)
            console.log('Cleanup function called')
        }
    }, [])

    const [nav, setNav] = useState(false)

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setNav(!nav)
    }

    console.log(active)

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ my: 2, color: 'white', mx: 3 }}>
                Aakash
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: 'none', sm: "flex"},gap:20,flexDirection:"column" }}>
                <Link href="#home" sx={{ color: active == "home" ? "blueviolet" : "white", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Home</Link>
                <Link href="#about" sx={{ color: active == "about" ? "blueviolet" : "white", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>About</Link>
                <Link href="#skills" sx={{ color: active == "skills" ? "blueviolet" : "white", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Skills</Link>
                <Link href="#project" sx={{ color: active == "project" ? "blueviolet" : "white", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Projects</Link>
                <Link href="#contact" sx={{ color: active == "contact" ? "white" : "white", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Contact</Link>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ padding: { xs: 1 }, backgroundColor: { xs: "black", sm: "#E0D6CD" }, boxShadow: "none" }}>
                <Toolbar sx={{ mx: { xs: 0, md: 20 } }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: { xs: "white", sm: "black" } }}
                    >
                        Aakash
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: "flex", gap: 20 } }}>
                        <Link href="#home" sx={{ color: active == "home" ? "blueviolet" : "black", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Home</Link>
                        <Link href="#about" sx={{ color: active == "about" ? "blueviolet" : "black", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>About</Link>
                        <Link href="#skills" sx={{ color: active == "skills" ? "blueviolet" : "black", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Skills</Link>
                        <Link href="#project" sx={{ color: active == "project" ? "blueviolet" : "black", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Projects</Link>
                        <Link href="#contact" sx={{ color: active == "contact" ? "blueviolet" : "black", fontFamily: "Rubik sans-serif", textDecoration: "none", fontSize: 22 }} className='sections'>Contact</Link>

                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={(handleDrawerToggle)}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="persistent"
                    ModalProps={{ keepMounted: true }}
                    open={nav}
                    onClose={handleDrawerToggle}
                    anchor='top'
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', height: 350, backgroundColor: "black", },
                        mt: 10
                    }}>
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Nav