import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/config';
import Card from '../ui/Card';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 min-h-screen bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* --- HEADER: Left aligned, bold, minimal --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-gray-100 pb-12">
          
          <div className="max-w-2xl">
            {/* Small Tech Label */}
            <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
               <span className="text-xl font-mono font-medium text-gray-500 uppercase tracking-widest">
                 Selected Projects (0{SITE_CONFIG.projects.length})
               </span>
            </div>       
           
      </div>
        </div>

        {/* --- GRID: Clean, spacious, tech-focused --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          
          {SITE_CONFIG.projects.map((project, index) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id} 
              className="group block"
            >
              {/* Card Container - No tilt, just clean zoom */}
              <div className="relative overflow-hidden rounded-md bg-gray-50">
                 <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <Card project={project} index={index} />
                 </div>
              </div>

              {/* Minimal Tech Info Below Card */}
              <div className="mt-8 flex justify-between items-start">
                 <div>
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 text-sm text-gray-500 font-medium">
                       {/* Display first 2 tags only for cleaner look */}
                       {project.tags?.slice(0, 2).map(tag => (
                          <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                            {tag}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* Arrow Icon that appears on hover */}
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};