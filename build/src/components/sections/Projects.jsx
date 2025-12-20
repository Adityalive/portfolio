import React from 'react';
import { SITE_CONFIG } from '../../data/config';
// Optional: Import an icon if you want to indicate external links
import { ExternalLink } from 'lucide-react'; 

export const Projects = () => {
  return (
    <section className="py-10 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-m text-muted-foreground">Featured</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">Projects</h2>
        </div>

        {/* Grid Layout */}
        {/* UX FIX: Changed gap-36 to gap-6. gap-36 (9rem) creates too much whitespace, disconnecting the items. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SITE_CONFIG.projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link || "#"} // UX: Makes the entire card clickable
              target="_blank"            // UX: Opens in new tab so user stays on your portfolio
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-muted-foreground/50 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-4">
                <div className="flex justify-between font-semibold items-start">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    {/* Optional: Visual cue that this is a link */}
                    {/* <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" /> */}
                </div>
                
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                    {project.description}
                </p>

                {/* UX: Tech Stack Tags (Optional - helps users scan for relevant tech) */}
                {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-secondary/50 px-2 py-1 rounded-md text-secondary-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};