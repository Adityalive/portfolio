import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const email = SITE_CONFIG.socials.mail?.replace('mailto:', '') || 'your.email@example.com';

  return (
    <section id="contact" className="relative py-40 px-6 bg-black text-white text-center overflow-hidden font-inter">
      {/* ─── VIDEO BACKGROUND ─── */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://videos.pexels.com/video-files/27462830/12170366_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback for the redirect link provided by user */}
          <source src="https://www.pexels.com/download/video/27462830/" type="video/mp4" />
        </video>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/5 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
          Contact
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-6">
          Let's Get in <span className="font-bold">Touch</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/40 mb-12 max-w-md">
          Let's connect and start with your project ASAP.
        </p>

        {/* CTA Button */}
        <a 
          href={SITE_CONFIG.socials.mail}
          className="group flex items-center gap-3 px-10 py-5 rounded-full font-bold text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(45deg, #bef264, #a3e635)',
            boxShadow: '0 15px 40px -12px rgba(163, 230, 53, 0.5)'
          }}
        >
          Drop me a message
          <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Secondary Email Link */}
        <div className="mt-12 text-sm text-white/40">
          Or email me at <a href={SITE_CONFIG.socials.mail} className="text-white hover:underline transition-all">{email}</a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
