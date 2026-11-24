import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router';
import CaseStudyContent from './CaseStudyContent.jsx';

const OPEN_MS = 460;
const CLOSE_MS = 320;

// A case study shown over the page, growing out of the card that opened it. Rendered
// through a portal so it sits outside #root, which lets the whole app be marked inert
// while it is open.
export default function CaseStudyOverlay({ study, originRect, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const closingRef = useRef(false);

  // Measures the card again at close time rather than reusing the opening rect, because
  // the page may have been resized or scrolled while the overlay was up.
  const currentOriginRect = useCallback(() => {
    if (!originRect?.cardId) return originRect;
    const card = document.getElementById(originRect.cardId);
    return card ? card.getBoundingClientRect() : originRect;
  }, [originRect]);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    const panel = panelRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!panel || reduced) {
      onClose();
      return;
    }

    const from = panel.getBoundingClientRect();
    const to = currentOriginRect();
    panel.classList.remove('is-settled');
    panel.parentElement?.classList.add('is-closing');

    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const sx = to.width / from.width;
    const sy = to.height / from.height;

    panel.animate(
      [
        { transform: 'none', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: 0.4 },
      ],
      { duration: CLOSE_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' },
    );

    // A timer, not the animation's finish event. If a frame is dropped or the tab is
    // backgrounded the overlay must still come down.
    setTimeout(onClose, CLOSE_MS);
  }, [currentOriginRect, onClose]);

  useEffect(() => {
    const panel = panelRef.current;
    const appRoot = document.getElementById('root');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const previouslyFocused = document.activeElement;

    // Lock the page behind. The padding stops the layout jumping sideways as the
    // scrollbar disappears.
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add('has-overlay');
    if (gap > 0) document.body.style.paddingRight = gap + 'px';
    if (appRoot) appRoot.inert = true;

    if (!reduced && originRect && panel) {
      const to = panel.getBoundingClientRect();
      const dx = originRect.left - to.left;
      const dy = originRect.top - to.top;
      const sx = originRect.width / to.width;
      const sy = originRect.height / to.height;
      panel.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, borderRadius: '8px' },
          { transform: 'none', borderRadius: '14px' },
        ],
        { duration: OPEN_MS, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      );
    }

    // The content fade runs on its own clock. Gating it on the morph animation's finish
    // event means a dropped frame leaves the panel blank.
    const settle = setTimeout(() => panel?.classList.add('is-settled'), reduced ? 0 : 280);
    closeRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        requestClose();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;

      // inert on #root already keeps focus out of the page, but the browser can still
      // land on the address bar and come back in at the wrong end. This keeps the cycle
      // inside the dialog.
      const focusable = [...panel.querySelectorAll('a[href], button:not([disabled])')].filter(
        (el) => el.offsetParent !== null,
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(settle);
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('has-overlay');
      document.body.style.paddingRight = '';
      // Lift inert before restoring focus, or the focus call lands on nothing.
      if (appRoot) appRoot.inert = false;
      // Aim at the card's own link rather than trusting whatever held focus when the
      // overlay opened: Safari does not focus a link on click, so that can be <body>,
      // which would drop the reader back at the top of the page.
      const card = originRect?.cardId ? document.getElementById(originRect.cardId) : null;
      const target = card?.querySelector('.project-actions a') ?? previouslyFocused;
      if (target instanceof HTMLElement) target.focus();
    };
  }, [originRect, requestClose]);

  return createPortal(
    <div className="overlay">
      <div className="overlay-scrim" onClick={requestClose} />
      <div
        className="overlay-panel"
        role="dialog"
        aria-modal="true"
        aria-label={study.title + ' case study'}
        ref={panelRef}
      >
        <button className="overlay-close" type="button" onClick={requestClose} ref={closeRef}>
          <span aria-hidden="true">✕</span>
          <span className="visually-hidden">Close case study</span>
        </button>
        <div className="overlay-scroll">
          <article className="case-study overlay-body">
            <CaseStudyContent study={study} headingLevel="h2" idPrefix={study.slug + '-ov-'} />
            <Link className="text-link" to={'/work/' + study.slug}>
              Open as a page <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </div>,
    document.body,
  );
}
