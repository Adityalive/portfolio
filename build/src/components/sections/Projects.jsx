import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { SITE_CONFIG } from "../../data/config";

export default function Projects() {
  return (
    <Container className="py-20">
      {/* Section Header */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Only animate once
        className="text-3xl font-bold mb-8 text-white"
      >
        Selected Projects
      </motion.h2>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SITE_CONFIG.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }} // Stagger effect
          >
            {/* We use our reusable Card component here */}
            <Card className="h-full hover:bg-zinc-900 transition-colors group">
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Links (Github / Live) */}
                <div className="flex gap-2 text-zinc-500">
                  <a href="#" target="_blank" className="hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} target="_blank" className="hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}