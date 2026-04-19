import React from 'react';
import { SITE_CONFIG } from '../../data/config';

const Me = () => {
  return (
    <section id="experience" className="py-24 px-6 font-inter bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Experience</h2>
        
        <div className="space-y-12">
          {SITE_CONFIG.experience?.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  {exp.isCurrent && (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Working
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground/60">
                  <span>{exp.date}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground font-medium">
                {exp.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Me;