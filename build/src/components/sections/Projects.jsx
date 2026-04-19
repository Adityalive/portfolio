import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/config';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// ─── Stagger Variants ───────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const cardVariants = {
  hidden:   { opacity: 0, y: 60 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 14 }
  }
};

// ─── Component ──────────────────────────────────────────
export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white font-inter">
      <div className="max-w-4xl mx-auto">

        {/* Section Label */}
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-10">
          Selected Work
        </p>

        {/* Staggered Card List */}
        <motion.div
          className="flex flex-col gap-16 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SITE_CONFIG.projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={cardVariants}
              className="group relative h-[200px] grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-none overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              {/* ─── LEFT: TEXT ─── */}
              <div className="flex flex-col justify-between p-6 md:p-8 bg-white h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-mono text-gray-200 tracking-widest">
                    {project.year || '2025'}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 border border-black text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
                    >
                      Live Demo
                      <ArrowUpRight size={12} />
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 px-5 py-2 border border-black text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
                    >
                      View Project
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT: IMAGE ─── */}
              <div className="relative h-full overflow-hidden bg-gray-50">
                <img
                  src={project.image || 'https://via.placeholder.com/800x600'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 text-white/40 text-[9px] font-mono">+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};