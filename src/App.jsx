import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
// import CssBaseline from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const theme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif"
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
      {/* <CssBaseline /> */}
        <Nav />
        <Home />
        <About />
        <Contact />
        <Skills />
        <Projects />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
