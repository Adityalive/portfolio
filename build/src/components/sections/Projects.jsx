import React from 'react';
import { SITE_CONFIG } from '../../data/config';

export const Projects = () => {
  return (
    <section className="py-10 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-sm text-muted-foreground">Featured</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">Projects</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-colors animate-slide-up text-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-4xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-3">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-xs">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};