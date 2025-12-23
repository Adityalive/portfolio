import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import Card from '../ui/Card';

export const Projects = () => {
  return (
    <section className="py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-wrap justify-center gap-10">
          {SITE_CONFIG.projects.map((project, index) => (
            <Card key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};