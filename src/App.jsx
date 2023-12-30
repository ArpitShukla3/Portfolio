import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import AboutMe from './Components/Aboutme'
import TechStack from './Components/TechStack'
import Contact from './Components/Contact'
import Project from './Components/Project'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Intro />
      <AboutMe />
      <TechStack />
      <Project />
      <Contact />
    </div>
  )
}

export default App
