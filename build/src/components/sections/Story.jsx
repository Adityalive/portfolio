import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Background Layer: Custom Image and Gradient Glow with Seamless Masking */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        {/* The provided Unsplash Image */}
        <img 
          src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdyYWlueSUyMEdyYWRpZW50fGVufDB8fDB8fHww" 
          alt="Atmospheric background"
          className="w-full h-full object-cover opacity-40 shadow-inner"
        />

        {/* Radial Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,197,253,0.3)_0%,_rgba(0,0,0,0)_80%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Top Line */}
          <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            I bring a sense of
          </p>

          {/* Main Statement */}
          <h2 
            className="text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50 leading-[1.1] mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Story, language & <br className="hidden md:block" /> visual awareness
          </h2>

          {/* Bottom Line */}
          <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            to my work
          </p>
        </motion.div>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
    </section>
  );
};

export default Story;
