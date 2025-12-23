import React from 'react'
const DetailProjectPage = ({products,index}) => {
    if (!products) return null;
  return (
    <section className="pt-32 pb-16 px-4 md:px-6">
      <div className="conatiner mx-auto max-w-3xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Project <span className="text-primary">Details</span>
          </h2>
        </div>
        {/* image addition */}
        <div className='w-full flex justify-center my-10 px-4 md:px-6'>
    
    <div className='relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-border/40 bg-muted/20 aspect-video group'>
        {/* 2. Wrapper Improvements:
            - aspect-video: Forces a 16:9 ratio, perfect for banners. No need to guess heights.
            - rounded-2xl: Larger, smoother corners.
            - shadow-xl: Gives it depth.
            - border-border/40: Softer border.
            - bg-muted/20: A nice placeholder color while the image loads.
            - group: Added for the hover effect below.
        */}        
        <img 
            src={products.img}
         alt="Project Detail" 
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
        {/* 3. Image: Added a subtle, slow zoom effect on hover for interactivity. */}
    </div>
</div>
           {/* Header section*/ }
<div className='mt-12 px-4 md:px-0 flex flex-col gap-6'>
  
  {/* Optional: Category or Date Label */}
  <span className="text-primary font-semibold tracking-wider text-sm uppercase">
    Web Development
  </span>

  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
    {products.title}
  </h1>

  <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl'>
             {products.description}  </p>

  {/* Added: Tech Stack Tags (Optional) */}
  <div className="flex flex-wrap gap-2">
    {products.techstack.map((tech) => (
      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
        {tech}
      </span>
    ))}
  </div>

  {/* Added: Action Buttons (Optional) */}
  <div className="flex gap-4 pt-4">
      <a href={products.liveDemoLink} className="px-6 py-2.5 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
        Live Demo
      </a>
      <a href={products.sourceCodeLink} className="px-6 py-2.5 border border-border font-bold rounded-full hover:bg-muted transition-colors">
        Source Code
      </a>
  </div>

</div>
  <br />
    {/* Main Content Area */}
    <div className='mt-10 max-w-3xl mx-auto'>
      <h2 className='font-bold '>Project Overview</h2>
      <p className='text-muted-foreground mt-4 leading-relaxed'>
        {products.overview}
      </p>
      <div className='grid md:grid-cols-2 gap-16 mt-6'>
        <div >
             <h3 className='text-lg mt-6 font-bold'>Features</h3> 
        <ul className='list-disc list-inside mt-2'>
            {products.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
      </div>
      <div>
         <h1 className='text-lg mt-6 font-bold'>Challenges</h1>
         <ul className='list-disc list-inside mt-2'>
            {products.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
            ))}
         </ul>
        </div>
             
      </div>
         
        </div>
        {/* Additional Sections as needed */}
<div className='mt-24 max-w-5xl mx-auto px-4 md:px-6'>
  <div className='flex flex-col gap-16 bg-black px-16 py-12 rounded-3xl'>
    {/* LOOP STARTS HERE - wraps the ENTIRE card structure */}
      <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3">
            Highlights
          </span>
          <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight max-w-lg mx-auto">
            Showcasing Major Milestones and the Key Features
          </h3>
    {products.images?.map((imgSrc, index) => (
      
      /* ================= INDEPENDENT CARD FOR EACH IMAGE ================= */
      <div key={index} className='relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl'>
        
        {/* ================= 1. REPEATED HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center mb-10">
          
          {/* Star Icon Circle */}
          

          {/* Label & Title repeated for every card */}
        
        </div>

        {/* ================= 2. BROWSER WINDOW ================= */}
        <div className='rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm'>
            
            {/* Browser Header Bar */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-4 border-b border-white/5">
              {/* Traffic Lights */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
              </div>
              {/* Fake Address Bar */}
              <div className="flex-1 flex justify-center">
                <div className="bg-black/20 rounded-md px-4 py-1.5 text-xs text-zinc-500 font-mono flex items-center gap-2 w-full max-w-md justify-center">
                  storyspire.vercel.app
                </div>
              </div>
            </div>

            {/* The Image */}
            <div className="relative">
              <img
                src={imgSrc}
                alt={`Project Screenshot ${index + 1}`}
                className='w-full h-auto object-cover'
              />
            </div>
        </div>
        
        {/* Bottom Caption (Optional - from your reference image) */}
        <div className="mt-6 flex justify-end">
            <span className="text-[10px] text-zinc-600 uppercase tracking-wider font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                0.{index + 1} Robust Authentication & Authorization
            </span>
        </div>

      </div>
    ))}
  </div>
</div>
        </div>
    </section>
  )
}

export default DetailProjectPage