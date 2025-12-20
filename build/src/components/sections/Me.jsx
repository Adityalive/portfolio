import React from 'react';
import pic from "../../images/profile.png";
import { SITE_CONFIG } from '../../data/config';
import Button from '../ui/Button'; // Assuming your Button is in the same folder

const Me = () => {
  return (
    <section className='py-10 px-4 md:px-6'>
      <div className='container mx-auto max-w-3xl'>
        
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">About</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">Me</h2>
        </div>

        {/* Content Wrapper */}
        <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
          
          {/* 1. Image Container */}
          {/* shrink-0 ensures the image doesn't get squashed */}
          <div className='shrink-0 overflow-hidden border-2 border-zinc-900 rounded-xl w-full max-w-[220px] aspect-[3/4] shadow-md'>
            <img 
              src={pic} 
              alt="Profile" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* 2. Text Content Wrapper */}
          {/* This div was missing in your original code */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            
            <h1 className="text-3xl md:text-4xl font-bold animate-slide-up">
              {SITE_CONFIG.name.toUpperCase()} <span className="text-muted-foreground">KUMAR</span>
            </h1>
            
            <p className='text-muted-foreground leading-relaxed'>
              {SITE_CONFIG.description}
            </p>

            {/* Added your custom button here */}
            <div className="pt-2">
                <Button>Project</Button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Me;