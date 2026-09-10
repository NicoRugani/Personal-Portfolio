import { Outlet } from 'react-router';
import SiteHeader from './SiteHeader.jsx';

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer section-shell">
        <a className="footer-name" href="/">
          Nicholas Rugani
        </a>
        <p>Built with love :&#x29;</p>
        <a href="https://github.com/NicoRugani">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  );
}
