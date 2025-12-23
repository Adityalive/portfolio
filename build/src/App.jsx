import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here

import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import Me from './components/sections/Me';
import Navbar from './components/sections/Navbar';
import Detailroute from './components/sections/Projects2/Detailroute';
import Footer from './components/sections/footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* Add an ID here so you can scroll to it if needed */}
              <div id="projects">
                <Projects />
              </div>
              <Me />
            </>
          }
        />

        {/* Detail Route 
           Matches: /projects/CheckOff
           Does NOT Match: /projects (without an ID)
        */}
        <Route path="/project/:id" element={<Detailroute />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;