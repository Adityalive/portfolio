import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import Me from './components/sections/Me';
import Navbar from './components/sections/Navbar';
import Detailroute from './components/sections/Projects2/Detailroute';
import Footer from './components/sections/footer';

const App = () => {
  return (
    // UPDATED LINE BELOW:
    // 1. bg-white dark:bg-black -> Handles background color switching
    // 2. text-gray-900 dark:text-white -> Handles text color switching
    // 3. min-h-screen -> Ensures the background covers the whole page height
    // 4. transition-colors -> Makes the switch smooth instead of instant
    <div >
      
      <Navbar />
      
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div id="projects">
                <Projects />
              </div>
              <Me />
            </>
          }
        />

        {/* Detail Route */}
        <Route path="/project/:id" element={<Detailroute />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;