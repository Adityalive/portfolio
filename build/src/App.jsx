import React from 'react'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import Me from './components/sections/Me'
const App = () => {
  return (
    <div>
      <main >
        <Hero />
        <Projects />
        <Me />
      </main>
      
    </div>
  )
}

export default App