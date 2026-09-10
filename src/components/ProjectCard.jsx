import ProjectPreview from './ProjectPreview.jsx';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={project.id + '-title'}>
      <ProjectPreview kind={project.preview} />
      <div className="project-card-body">
        <p className="project-category">
          <span>{project.number}</span> {project.category}
        </p>
        <h3 id={project.id + '-title'}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.sourceUrl} aria-label={'View code for ' + project.title}>
            View code <span aria-hidden="true">↗</span>
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} aria-label={'View live site for ' + project.title}>
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
