import { Link, useParams } from 'react-router';
import { caseStudies } from '../data/caseStudies.js';
import usePageTitle from '../usePageTitle.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  // Hooks cannot be called conditionally, so this runs before the early return below.
  usePageTitle(study ? study.title : 'Page not found');

  if (!study) return <NotFoundPage />;

  return (
    <article className="case-study section-shell">
      <header className="case-study-header">
        <p className="eyebrow">Case study {study.number}</p>
        <h1>{study.title}</h1>
        <p className="case-study-tagline">{study.tagline}</p>
        <dl className="case-study-meta">
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{study.timeline}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{study.tools.join(', ')}</dd>
          </div>
        </dl>
      </header>

      <section className="screens-section" aria-labelledby="screens-heading">
        <h2 className="visually-hidden" id="screens-heading">
          The product
        </h2>
        <div className="screens">
          {study.screens.map((screen) => (
            <figure key={screen.caption} className={screen.wide ? 'is-wide' : undefined}>
              <img src={screen.src} alt={screen.alt} loading="lazy" />
              <figcaption>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">The problem</h2>
        <p className="lead">{study.problem}</p>
      </section>

      <section aria-labelledby="approach-heading">
        <h2 id="approach-heading">How I approached it</h2>
        {study.approach.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>

      <section aria-labelledby="solution-heading">
        <h2 id="solution-heading">How I solved it</h2>
        <p>{study.solution.body}</p>
        <dl className="heuristic-list">
          {study.solution.heuristics.map((item) => (
            <div key={item.principle}>
              <dt>{item.principle}</dt>
              <dd>{item.applied}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Link className="text-link" to="/work">
        <span aria-hidden="true">←</span> All work
      </Link>
    </article>
  );
}
