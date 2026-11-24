import ContactForm from '../components/ContactForm.jsx';
import usePageTitle from '../usePageTitle.js';

export default function ContactPage() {
  usePageTitle('Contact');

  return (
    <div className="contact-page section-shell">
      <header className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch.</h1>
        <p className="page-intro">
          Internships, collaborations, or a question about something on this site. I read
          everything that comes through here.
        </p>
      </header>

      <div className="contact-layout">
        <ContactForm />

        <aside className="contact-aside" aria-label="Other ways to reach me">
          <h2>Elsewhere</h2>
          <ul className="link-list">
            <li>
              <a href="https://github.com/NicoRugani" target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.credly.com/users/nico-rugani"
                target="_blank"
                rel="noopener noreferrer"
              >
                Credly <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
