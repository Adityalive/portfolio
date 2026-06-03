import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-label">Featured Projects</h2>
        <div className="projects__grid">
          {SITE_CONFIG.projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__preview">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card__body">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <a href={project.link} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="Open live project">
                    <ArrowUpRight size={15} />
                  </a>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {(project.tags || []).map((tag) => (
                    <span key={tag} className="project-tag">
                      <span className="project-tag__dot" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--primary"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <Link
                    to={`/project/${project.id}`}
                    className="project-card__btn project-card__btn--secondary"
                  >
                    View Project <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
