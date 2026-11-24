// The body of a case study, with no opinion about where it is being shown. The /work
// route renders it as a page and the overlay renders it inside a dialog, so there is
// only ever one copy of this markup to keep correct.
export default function CaseStudyContent({ study, headingLevel = 'h1', idPrefix = '' }) {
  const Title = headingLevel;
  // Ids have to stay unique when the overlay and a page both exist in the document.
  const id = (name) => idPrefix + name;

  return (
    <>
      <header className="case-study-header">
        <p className="eyebrow">Case study {study.number}</p>
        <Title>{study.title}</Title>
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

      <section className="screens-section" aria-labelledby={id('screens-heading')}>
        <h2 className="visually-hidden" id={id('screens-heading')}>
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

      <section aria-labelledby={id('problem-heading')}>
        <h2 id={id('problem-heading')}>The problem</h2>
        <p className="lead">{study.problem}</p>
      </section>

      <section aria-labelledby={id('approach-heading')}>
        <h2 id={id('approach-heading')}>How I approached it</h2>
        {study.approach.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>

      <section aria-labelledby={id('solution-heading')}>
        <h2 id={id('solution-heading')}>How I solved it</h2>
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
    </>
  );
}
