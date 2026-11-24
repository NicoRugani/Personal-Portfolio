import { Link } from 'react-router';
import { caseStudies } from '../data/caseStudies.js';

export default function ProjectCard({ project, featured = false }) {
  // The card offers a case study only once one actually exists, so adding an entry to
  // caseStudies.js is all it takes to switch a project over from linking out to GitHub.
  const hasCaseStudy = caseStudies.some((study) => study.slug === project.id);

  return (
    <article
      className={featured ? 'project-card is-featured' : 'project-card'}
      aria-labelledby={project.id + '-title'}
    >
      {featured && project.image && (
        <img className="project-shot" src={project.image} alt={project.imageAlt} loading="lazy" />
      )}
      <div className="project-card-body">
        <p className="project-category">{project.category}</p>
        <h3 id={project.id + '-title'}>{project.title}</h3>
        <p className="project-description">{project.blurb}</p>
        <ul className="project-tags" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          {hasCaseStudy && (
            <Link to={'/work/' + project.id}>
              Read case study <span aria-hidden="true">→</span>
            </Link>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'View the code for ' + project.title}
            >
              View code <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'View the live site for ' + project.title}
            >
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
