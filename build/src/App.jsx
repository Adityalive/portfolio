import React from 'react'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import Me from './components/sections/Me'
import Navbar from './components/sections/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailroute from './components/sections/Projects2/Detailroute'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
  <Route
    path="/"
    element={      <>
        <Hero />
        <Projects />
        <Me />
      </>
    }
  />
  <Route path="/projects" element={<Detailroute />} />
</Routes>
      
    </div>
  )
}

export default App