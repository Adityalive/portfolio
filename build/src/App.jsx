import React from 'react'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import Me from './components/sections/Me'
import Navbar from './components/sections/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <main >
        <Hero />
        <Projects />
        <Me />
      </main>
      
    </div>
  )
}

export default App