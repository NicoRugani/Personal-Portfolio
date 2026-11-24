import { Outlet } from 'react-router';
import SiteHeader from './SiteHeader.jsx';
import useScrollToTop from '../useScrollToTop.js';
import useReveal from '../useReveal.js';
import siteUrl from '../siteUrl.js';

export default function SiteLayout() {
  useScrollToTop();
  useReveal();

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
        <a className="footer-name" href={siteUrl()}>
          Nicholas Rugani
        </a>
        <p>Built with React, and Love :&#x29;</p>
        {/* Grouped so space-between treats the two as one item. Loose in the footer
            they were spread as far apart as every other child. */}
        <div className="footer-links">
          <a href="https://github.com/NicoRugani">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/nicholas-rugani">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
