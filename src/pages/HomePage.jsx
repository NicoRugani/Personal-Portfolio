import { useCallback, useState } from 'react';
import { Link } from 'react-router';
import CaseStudyOverlay from '../components/CaseStudyOverlay.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { caseStudies } from '../data/caseStudies.js';
import { projects } from '../data/projects.js';

export default function HomePage() {
  const [expanded, setExpanded] = useState(null);

  // The card's rect is captured at click time; the overlay grows out of exactly where
  // the card was sitting. cardId lets it re-measure on close, in case the page moved.
  const handleExpand = useCallback((slug, cardElement) => {
    const study = caseStudies.find((item) => item.slug === slug);
    if (!study) return;
    const rect = cardElement.getBoundingClientRect();
    setExpanded({
      study,
      originRect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        cardId: cardElement.id,
      },
    });
  }, []);

  const handleClose = useCallback(() => setExpanded(null), []);

  return (
    <>
      <section className="hero section-shell" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <h1 id="intro-heading">
            Nicholas Rugani:
            <br /> Building with <span>people in mind.</span>
          </h1>
          <p className="hero-description">
            Hello! I'm Nicholas, a Computer Science & Psychology student at Montana State University. I care about
            thoughtful code and making the web more useful, intuitive, and accessible.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" to="/about">
              A little about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <aside className="profile-note" aria-label="At a glance">
          <p className="profile-statement"> <span>Currently</span></p>
          <dl>
            <div>
              <dt>Studying</dt>
              <dd>
                Computer Science
                <br />
                Psychology
              </dd>
            </div>
            <div>
              <dt>Building with</dt>
              <dd>JavaScript, Java &amp; Python</dd>
            </div>
            <div>
              <dt>Graduating</dt>
              <dd>May 2028</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section
        id="selected-work"
        className="work-section section-shell"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <div data-reveal>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Ideas, put to code.</h2>
          </div>
          <Link className="text-link" to="/work" data-reveal>
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="featured-grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
                onExpand={handleExpand}
              />
            ))}
        </div>
      </section>

      <section className="approach-section section-shell" aria-labelledby="approach-heading">
        <div className="approach-intro" data-reveal>
          <p className="eyebrow">Problem Solving Phlisophy</p>
          <h2 id="approach-heading">
            Good software starts
            <br />
            with understanding.
          </h2>
          <p>
            My interests in computer science and psychology meet in how my systems work, and how someone experiences it.
          </p>
        </div>
        <ol className="approach-list">
          <li data-reveal="left">
            <span className="step-number" aria-hidden="true">
              01
            </span>
            <div>
              <h3>Understand the problem</h3>
              <p>Start with what people need to do and where the experience gets in their way.</p>
            </div>
          </li>
          <li data-reveal="left">
            <span className="step-number" aria-hidden="true">
              02
            </span>
            <div>
              <h3>Build intentionally</h3>
              <p>Choose structures and interactions that serve a purpose and solve the problem.</p>
            </div>
          </li>
          <li data-reveal="left">
            <span className="step-number" aria-hidden="true">
              03
            </span>
            <div>
              <h3>Keep learning and improving</h3>
              <p>
                Continuously learn and improve by listening to feedback, and make the next version better.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="contact-section section-shell" aria-labelledby="contact-heading">
        <div data-reveal>
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-heading">Have something in mind?</h2>
          <p>I’d love to hear about opportunities, collaborations, or anything else you have to share!</p>
        </div>
        <Link className="button button-primary" to="/contact" data-reveal>
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </section>

      {expanded && (
        <CaseStudyOverlay
          study={expanded.study}
          originRect={expanded.originRect}
          onClose={handleClose}
        />
      )}
    </>
  );
}
