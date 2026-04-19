import React from 'react';
import { SITE_CONFIG } from '../../data/config';

const Footer = () => {
  return (
    <footer className="w-full bg-background pt-24 pb-12 px-6 font-inter border-t border-border/50">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
        
        {/* Animated Quote */}
        <div className="text-center group italic">
          <p className="text-xl md:text-2xl text-muted-foreground/80 font-serif leading-relaxed mb-4 transition-all duration-500 group-hover:text-foreground">
            "{SITE_CONFIG.footer[0]?.Quote}"
          </p>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/40">
            — {SITE_CONFIG.footer[0]?.author}
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/30 font-bold border-t border-border/10 pt-8">
          <p>
            Design & Developed by <span className="text-muted-foreground/60">{SITE_CONFIG.name}</span> © {new Date().getFullYear()}
          </p>
          <div className="flex gap-4">
             <span>Inspired by Ramx</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;