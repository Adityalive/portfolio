import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
// 1. Import icons
import { SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

import pic from "../../images/profile.png";
import { SITE_CONFIG } from '../../data/config';
import Button from '../ui/Button'; 

const Me = () => {
  return (
    <section id="about" className='py-24 px-6 md:px-12 bg-white text-gray-900 border-t border-gray-100'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-16 lg:gap-24 items-start'>
          
          {/* IMAGE SECTION */}
          <div className='shrink-0 w-full md:w-auto flex flex-col gap-6'>
            <div className='overflow-hidden rounded-lg w-[280px] aspect-[3/4] bg-gray-100 border border-gray-200'>
              <img src={pic} alt="Aditya Kumar" className="w-full h-full object-cover" />
            </div>
            {/* Socials */}
            <div className="flex gap-5 justify-center md:justify-start px-2">
              {SITE_CONFIG.socials.github && (
                <a href={SITE_CONFIG.socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><Github className="w-5 h-5" /></a>
              )}
              {SITE_CONFIG.socials.linkedin && (
                <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors"><Linkedin className="w-5 h-5" /></a>
              )}
              {SITE_CONFIG.socials.twitter && (
                <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
              )}
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1 flex flex-col pt-2">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">About Me</span>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Available for work</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-2">{SITE_CONFIG.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-10">Full Stack Developer & Designer</p>
            
            <div className="prose prose-lg text-gray-500 leading-loose mb-10 max-w-2xl">
              <p>{SITE_CONFIG.description}</p>
            </div>

            {/* --- UPDATED TECH STACK (Always Colored + Hover Name) --- */}
            <div className="mb-12">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Tech Stack</h3>
               
               <div className="flex flex-wrap items-center gap-8">
                  {[
                    { name: "Javascript", color: "text-[#F7DF1E]", icon: SiJavascript },
                    { name: "React",      color: "text-[#61DAFB]", icon: SiReact },
                    { name: "Node.js",    color: "text-[#339933]", icon: SiNodedotjs },
                    { name: "Tailwind",   color: "text-[#06B6D4]", icon: SiTailwindcss },
                    { name: "MongoDB",    color: "text-[#47A248]", icon: SiMongodb }
                  ].map((tech) => (
                    <div key={tech.name} className="group relative flex flex-col items-center">
                      
                      {/* Icon: Always colored, no transition to gray */}
                      <div className={`text-4xl ${tech.color} cursor-pointer`}>
                         <tech.icon />
                      </div>
                      
                      {/* Tooltip: Shows Name on Hover */}
                      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                         <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider whitespace-nowrap">
                            {tech.name}
                         </span>
                         {/* Tiny Triangle Pointer */}
                         <div className="w-2 h-2 bg-gray-900 transform rotate-45 mx-auto -mt-1"></div>
                      </div>

                    </div>
                  ))}
               </div>
            </div>

            <div>
               <a href="#projects"><Button>View My Work</Button></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Me;