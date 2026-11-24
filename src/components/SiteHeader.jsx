import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';

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
        <Link className="wordmark" to="/" aria-label="Nicholas Rugani, home">
          <span className="monogram" aria-hidden="true">
            nr.
          </span>
          <span>Nicholas Rugani</span>
        </Link>
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
          <NavLink to="/work" onClick={() => setMenuOpen(false)}>
            Work
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink className="nav-contact" to="/contact" onClick={() => setMenuOpen(false)}>
            Get in touch <span aria-hidden="true">↗</span>
          </NavLink>
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
