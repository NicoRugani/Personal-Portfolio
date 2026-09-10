import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow">Computer science · Human-computer interaction</p>
          <h1 id="intro-heading">
            Nicholas Rugani:
            <br /> Building with <span>people in mind.</span>
          </h1>
          <p className="hero-description">
            I'm Nicholas, a Computer Science student at Montana State University. I care about
            thoughtful code and making the web more useful, intuitive, and accessible.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="/about.html">
              A little about me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="profile-note" aria-label="At a glance">
          <p className="eyebrow">The person behind the code</p>
          <p className="profile-statement">
            Engineering foundations.
            <br />
            <span>A human perspective.</span>
          </p>
          <dl>
            <div>
              <dt>Studying</dt>
              <dd>
                Computer Science
                <br />
                Psychology minor
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
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Ideas, put into practice.</h2>
          </div>
          <a className="text-link" href="/projects.html">
            All projects <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="approach-section section-shell" aria-labelledby="approach-heading">
        <div className="approach-intro">
          <p className="eyebrow">How I approach the work</p>
          <h2 id="approach-heading">
            Good software starts
            <br />
            with understanding.
          </h2>
          <p>
            My interests in computer science and psychology meet in the details: how a system works,
            and how someone experiences it.
          </p>
        </div>
        <ol className="approach-list">
          <li>
            <span className="step-number" aria-hidden="true">
              01
            </span>
            <div>
              <h3>Understand the problem</h3>
              <p>Start with what people need to do and where the experience gets in their way.</p>
            </div>
          </li>
          <li>
            <span className="step-number" aria-hidden="true">
              02
            </span>
            <div>
              <h3>Build with intention</h3>
              <p>Choose clear structures, readable code, and interactions that serve a purpose.</p>
            </div>
          </li>
          <li>
            <span className="step-number" aria-hidden="true">
              03
            </span>
            <div>
              <h3>Keep learning and improving</h3>
              <p>
                Question the first solution, listen to feedback, and make the next version better.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about-strip section-shell" aria-labelledby="about-heading">
        <p className="eyebrow">Away from the keyboard</p>
        <div>
          <h2 id="about-heading">Curiosity carries over.</h2>
          <p>
            Outside of class and coding, I enjoy biking, climbing, and playing games with friends.
          </p>
          <a className="text-link" href="/about.html">
            More about me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-section section-shell" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-heading">Have something in mind?</h2>
          <p>I’d love to hear about opportunities, collaborations, or what you’re building.</p>
        </div>
        <a className="button button-primary" href="/contact.html">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
