import React from 'react';
import { SITE_CONFIG } from '../../data/config';

const Footer = () => {
  return (
    <footer className="w-full bg-background py-12 px-6 font-inter border-t border-border/50">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
        <p>
          Design & Developed by <span className="text-foreground font-semibold">{SITE_CONFIG.name}</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
           <span>Inspired by Ramx</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;