import React from 'react'
import { SITE_CONFIG } from '../../../data/config'; // Ensure this path is correct

const DetailProjectPage = ({ products }) => {
  if (!products) return null;

  return (
    // MAIN CONTAINER: White background, Dark text
    <section className="pt-32 pb-24 px-4 md:px-6 bg-white text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        
        {/* --- SECTION HEADING --- */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-['DM_Serif_Display'] font-normal tracking-tighter leading-[0.9] text-gray-900 mb-6 drop-shadow-sm">
  {products.title}
</h2>
        </div>

        {/* --- HERO IMAGE --- */}
        <div className='w-full flex justify-center my-10'>
          <div className='relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80 border border-gray-100 bg-gray-50 aspect-video group'>
            <img 
              src={products.img}
              alt={products.title} 
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            />
          </div>
        </div>

        {/* --- TITLE & TECH STACK --- */}
        <div className='mt-12 flex flex-col gap-6 text-center md:text-left'>
          
          <div className="space-y-2">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
              Web Development
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
              {products.title}
            </h1>
          </div>

          <p className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl'>
            {products.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 md:justify-start justify-center">
            {products.techstack.map((tech) => (
              <span key={tech} className="px-4 py-1.5 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 md:justify-start justify-center">
             <a href={products.liveDemoLink} className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
               Live Demo
             </a>
             <a href={products.sourceCodeLink} className="px-8 py-3 bg-white border border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors">
               Source Code
             </a>
          </div>
        </div>

        {/* --- OVERVIEW, FEATURES, CHALLENGES --- */}
        <div className='mt-16 max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4'>Project Overview</h2>
          <p className='text-gray-600 mt-6 leading-loose text-lg'>
            {products.overview}
          </p>

          <div className='grid md:grid-cols-2 gap-12 mt-12'>
            {/* Features */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                 <span className="w-2 h-2 rounded-full bg-green-500"></span> Features
               </h3> 
               <ul className='space-y-3'>
                  {products.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                        {feature}
                      </li>
                  ))}
               </ul>
            </div>

            {/* Challenges */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                 <span className="w-2 h-2 rounded-full bg-red-500"></span> Challenges
               </h3>
               <ul className='space-y-3'>
                  {products.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                        {challenge}
                      </li>
                  ))}
               </ul>
            </div>     
          </div>
        </div>

        {/* --- GALLERY / HIGHLIGHTS SECTION --- */}
        <div className='mt-32'>
          <div className='flex flex-col gap-20'>
            
            {/* Section Title */}
            <div className="text-center mb-4">
              <span className="text-xs font-extrabold tracking-[0.2em] text-gray-400 uppercase mb-3 block">Highlights</span>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Major Milestones</h3>
            </div>

            {products.images?.map((imgSrc, index) => (
              /* CARD CONTAINER: Light Gray background for contrast against white page */
              <div key={index} className='bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-12 shadow-sm'>
                
                {/* Header within Card */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Key Feature Showcase</h3>
                </div>

                {/* BROWSER WINDOW (Light Mode Style) */}
                <div className='rounded-xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-200 bg-white'>
                    {/* Browser Header Bar */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-4 border-b border-gray-200">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      {/* Address Bar */}
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white border border-gray-200 rounded-md px-4 py-1.5 text-xs text-gray-400 font-mono flex items-center gap-2 w-full max-w-md justify-center shadow-sm">
                          storyspire.vercel.app
                        </div>
                      </div>
                    </div>

                    {/* The Image */}
                    <div className="relative">
                      <img
                        src={imgSrc}
                        alt={`Screenshot ${index + 1}`}
                        className='w-full h-auto object-cover'
                      />
                    </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                        0.{index + 1} Visualization
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* --- CONTACT SECTION (Dark Footer Style for Contrast) --- */}
        <div className="w-full mt-32 bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl relative">
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gray-800 rounded-full opacity-20 blur-3xl"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  Give your brand a voice.
                </h2>
                <p className="text-gray-400 mb-8 text-sm font-medium">
                  Connect with us today
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="mailto:peerbuild@gmail.com" className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    <span>✉️</span> peerbuild@gmail.com
                  </a>
                  <a href="https://peerbuildstudios.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-700 transition-colors">
                    <span>🔗</span> peerbuildstudios.com
                  </a>
                </div>
              </div>

              <div className="hidden md:block opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                 <h3 className="text-white font-black text-4xl tracking-tighter uppercase">
                    PEERBUILD
                 </h3>
              </div>
            </div>
        </div>


        {/* --- NEXT PROJECT SECTION --- */}
        <div className="mt-16">
        {(() => {
          const currentIndex = SITE_CONFIG.projects.findIndex(p => p.id === products.id);
          const nextProject = SITE_CONFIG.projects[(currentIndex + 1) % SITE_CONFIG.projects.length];

          if (!nextProject) return null;

          return (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">Up Next</h2>

              <a href={`/project/${nextProject.id}`} className="block group">
                {/* Card: White background, subtle border, hover lift */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                    <div className="max-w-2xl">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {nextProject.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base line-clamp-2">
                        {nextProject.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Browser Preview (Small) */}
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white relative">
                      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                         <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                         </div>
                      </div>
                      <div className="relative aspect-[21/9]">
                         <img 
                           src={nextProject.image} 
                           alt={nextProject.title} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                         />
                      </div>
                  </div>

                </div>
              </a>
            </div>
          );
        })()}
        </div>

      </div>
    </section>
  )
}

export default DetailProjectPage