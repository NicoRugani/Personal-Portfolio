import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import usePageTitle from '../usePageTitle.js';

export default function WorkPage() {
  usePageTitle('Work');

  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <div className="work-page section-shell">
      <header className="page-header">
        <p className="eyebrow">Work</p>
        <h1>Things I have built.</h1>
        <p className="page-intro">
          Coursework, side projects, and other miscellaneous work, all presented for your enjoyment.
        </p>
      </header>

      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured</h2>
        <div className="featured-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      <section aria-labelledby="other-heading">
        <h2 id="other-heading">Other projects</h2>
        <div className="project-grid">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
