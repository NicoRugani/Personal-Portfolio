import { Link, useParams } from 'react-router';
import { caseStudies } from '../data/caseStudies.js';
import usePageTitle from '../usePageTitle.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  
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
        {study.status && <p className="case-study-status">{study.status}</p>}
      </header>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">The problem</h2>
        <p className="lead">{study.problem.statement}</p>
        <p>{study.problem.context}</p>
      </section>

      <section aria-labelledby="discovery-heading">
        <h2 id="discovery-heading">Discovery</h2>
        <ol className="discovery-list">
          {study.discovery.map((phase) => (
            <li key={phase.title}>
              <p className="eyebrow">{phase.phase}</p>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
              <div className="artifact-grid">
                {phase.artifacts.map((artifact) => (
                  <figure key={artifact.caption} className="artifact">
                    {artifact.src ? (
                      <img src={artifact.src} alt={artifact.alt} loading="lazy" />
                    ) : (
                      <div className="artifact-pending">Screenshot to add</div>
                    )}
                    <figcaption>{artifact.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="testing-heading">
        <h2 id="testing-heading">User testing</h2>
        <p>{study.testing.approach}</p>
        <div className="table-scroll">
          <table className="case-study-table">
            <caption>The five tasks every participant attempted</caption>
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">What the participant was asked to do</th>
                <th scope="col">Goal</th>
              </tr>
            </thead>
            <tbody>
              {study.testing.tasks.map((task) => (
                <tr key={task.id}>
                  <th scope="row">{task.id}</th>
                  <td>{task.prompt}</td>
                  <td>{task.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {study.testing.note && <p>{study.testing.note}</p>}
      </section>

      <section aria-labelledby="heuristics-heading">
        <h2 id="heuristics-heading">Usability heuristics applied</h2>
        <dl className="heuristic-list">
          {study.heuristics.map((item) => (
            <div key={item.principle}>
              <dt>{item.principle}</dt>
              <dd>{item.applied}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="outcome-heading">
        <h2 id="outcome-heading">Where it stands</h2>
        <p>{study.outcome.body}</p>
        <ul className="next-steps">
          {study.outcome.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <Link className="text-link" to="/work">
        <span aria-hidden="true">←</span> All work
      </Link>
    </article>
  );
}
