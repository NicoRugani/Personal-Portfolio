import { Link } from 'react-router';
import { certifications, education, skillGroups } from '../data/about.js';
import usePageTitle from '../usePageTitle.js';

export default function AboutPage() {
  usePageTitle('About');

  return (
    <div className="about-page section-shell">
      <header className="page-header">
        <h1>Computer science, with Psychology.</h1>
        <p className="page-intro">
          I am a Computer Science student at Montana State University, pairing the degree with a
          dual major in Psychology.
        </p>
      </header>

      <section aria-labelledby="story-heading" data-reveal>
        <h2 id="story-heading">My story</h2>
        <p>
          I came to computer science for the building and stayed for the people using what gets
          built. Through this pairing of CS and Psych, I'm able to focus on Human-Computer Interaction, and approach it using behavioral analysis, cognitive psychology, and statistics to measure and improve user experience.
        </p>

        <p>
          Outside class I am usually outdoors, hiking, biking or climbing, or still inside, playing video games with friends.
        </p>
      </section>

      <section aria-labelledby="skills-heading" data-reveal>
        <h2 id="skills-heading">Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} data-reveal="left">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading" data-reveal>
        <h2 id="education-heading">Education</h2>
        <p className="lead">{education.school}</p>
        <p>
          {education.degree}
          <br />
          <span className="muted-line">{education.detail}</span>
        </p>
        <h3>Relevant coursework</h3>
        <ul className="course-list">
          {education.coursework.map((course) => (
            <li key={course.name}>
              {course.name} <span className="course-code">{course.code}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="certifications-heading" data-reveal>
        <h2 id="certifications-heading">Certifications</h2>
        <p>
          Pearson Certiport in {certifications.certiport.join(', ')}. Cisco certifications in{' '}
          {certifications.cisco.join(' and ')}.
        </p>
        <p>
          <a href={certifications.profileUrl} target="_blank" rel="noopener noreferrer">
            Full list on Credly <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-heading" data-reveal>
        <h2 id="about-cta-heading">Want to see the work?</h2>
        <div className="about-cta-actions">
          <Link className="button button-primary" to="/work">
            View my work <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" to="/contact">
            Or get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
