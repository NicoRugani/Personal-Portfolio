import { useEffect, useRef, useState } from 'react';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  ); 

  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(
      document.documentElement,
    )
      .getPropertyValue('--page')
      .trim();
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current.focus();
      }
    }

    function handlePointerDown(event) {
      if (!header.current.contains(event.target)) setMenuOpen(false);
    }

    // A disclosure menu stays in normal tab order; it does not trap focus.
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner section-shell">
        <a className="wordmark" href="/" aria-label="Nicholas Rugani, home">
          <span className="monogram" aria-hidden="true">
            nr.
          </span>
          <span>Nicholas Rugani</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuButton}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="primary-navigation"
          className={'primary-navigation' + (menuOpen ? ' is-open' : '')}
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!header.current.contains(event.relatedTarget)) setMenuOpen(false);
          }}
        >
          <a href="/projects.html" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="/about.html" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a className="nav-contact" href="/contact.html" onClick={() => setMenuOpen(false)}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
