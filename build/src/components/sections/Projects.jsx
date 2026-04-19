import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/config';

// Each project gets a distinct card color palette
const CARD_THEMES = [
  {
    bg: '#ffffff',
    categoryColor: '#6b6b6b',
    titleColor: '#2563eb', // blue
    subtitleColor: '#2563eb',
    border: '#e5e7eb',
  },
  {
    bg: '#f0fdf4',
    categoryColor: '#4b7c5c',
    titleColor: '#15803d', // green
    subtitleColor: '#15803d',
    border: '#bbf7d0',
  },
  {
    bg: '#fff7ed',
    categoryColor: '#7c5a1e',
    titleColor: '#d97706', // amber
    subtitleColor: '#d97706',
    border: '#fde68a',
  },
  {
    bg: '#fef2f2',
    categoryColor: '#7f1d1d',
    titleColor: '#dc2626', // red
    subtitleColor: '#dc2626',
    border: '#fecaca',
  },
];

// Placeholder image that fills the correct aspect ratio
const PlaceholderImg = ({ color }) => (
  <div
    style={{
      width: '100%',
      aspectRatio: '16/9',
      background: `${color}22`,
      border: `1px solid ${color}44`,
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={`${color}88`} strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  </div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-background font-inter"
    >
      <div className="max-w-3xl mx-auto">

        {/* ─── SECTION LABEL ─── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-base font-bold tracking-widest uppercase text-foreground/80">WORK</span>
          <div className="w-6 h-6 rounded-full bg-secondary/60 border border-border/50" />
        </div>

        {/* ─── SUBTITLE ─── */}
        <p className="text-sm text-muted-foreground mb-14 max-w-md">
          Below are some select projects from the world of design and technology.
        </p>

        {/* ─── CARD GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_CONFIG.projects.map((project, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            const tag = project.tags?.[0] ?? 'FULL STACK';
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: theme.bg,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {/* Card inner padding */}
                <div className="p-6 flex flex-col gap-4">

                  {/* Category tag & Live Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* little pie icon */}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke={theme.categoryColor} strokeWidth="1.2" />
                        <path d="M7 7 L7 1 A6 6 0 0 1 13 7 Z" fill={theme.categoryColor} opacity="0.5" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: theme.categoryColor,
                        }}
                      >
                        {tag}
                      </span>
                    </div>

                    {/* LIVE BUTTON */}
                    {project.link && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.link, '_blank');
                        }}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-[9px] font-bold tracking-widest text-muted-foreground uppercase border border-border/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </button>
                    )}
                  </div>

                  {/* Project title — big pixel/retro look */}
                  <h3
                    style={{
                      fontFamily: "'Neuton', serif",
                      fontSize: 'clamp(24px, 3.5vw, 34px)',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: theme.titleColor,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Short subtitle / tags line */}
                  <p
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: theme.subtitleColor,
                    }}
                  >
                    {project.tags?.join(' · ')}
                  </p>

                  {/* Thumbnail placeholder (user will swap in their own images later) */}
                  <div className="mt-2">
                    {project.image ? (
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '16/9',
                          borderRadius: '6px',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      <PlaceholderImg color={theme.titleColor} />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};