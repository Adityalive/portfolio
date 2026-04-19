import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Hero } from './components/sections/Hero';
import Story from './components/sections/Story';
import { Projects } from './components/sections/Projects';
import About from './components/sections/About';
import Quote from './components/sections/Quote';
import Contact from './components/sections/Contact';
import CursorCat from './components/ui/CursorCat';
import Navbar from './components/sections/Navbar';
import Detailroute from './components/sections/Projects2/Detailroute';
import Footer from './components/sections/Footer';
import Preloader from './components/ui/Preloader';
import SearchPalette from './components/ui/SearchPalette';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // 1. Hide the native black screen instantly once React mounts
    const nativeLoader = document.getElementById('global-loader');
    if (nativeLoader) {
      nativeLoader.classList.add('fade-out');
      setTimeout(() => nativeLoader.remove(), 500);
    }

    // 2. Logic for the Lottie Preloader
    const handleLoad = () => {
      // Small artificial delay to appreciate the animation if it's too fast
      setTimeout(() => setLoading(false), 2400); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const safetyTimer = setTimeout(handleLoad, 4000); // 4s max safety
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(safetyTimer);
      };
    }
  }, []);

  // Keyboard shortcut for Search Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="lottie-loader" />}
      </AnimatePresence>

      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <CursorCat />
      <SearchPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Story />
              <div id="projects">
                <Projects />
              </div>
              <Quote />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<Detailroute />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;