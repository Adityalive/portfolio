import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const Card = ({ project, index }) => {
  return (
    <div
      className="group block bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-muted-foreground/40 hover:shadow-lg opacity-0 animate-fade-in w-full max-w-sm cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
        </div>
        <p className="text-muted-foreground text-sm mt-2 font-GeistMono leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Image */}
      <div className="mx-4 mb-4 rounded-md overflow-hidden border border-border/50">
        <div className="aspect-[16/10] bg-muted overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </div>

      {/* Tags and GitHub */}
      <div className="flex justify-around">
        {project.tags?.length > 0 && (
          <div className="px-5 pb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary px-2.5 py-1 rounded-md text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {SITE_CONFIG.socials.github && (
          <div className="px-5 pb-5 flex items-center gap-2">
            <Github className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;