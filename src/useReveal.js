import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Timing, tuned against the prototype. TRIGGER is what stops a reveal finishing before
// the reader has actually seen it: the element has to climb this far up the viewport
// before anything starts.
const TRIGGER = 40; // percent up from the bottom edge
const HOLD = 75; // ms before the first item in a group moves
const STEP = 120; // ms between items in the same group

export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Only now do the hidden rules in styles.css apply. If this line never runs, the
    // page renders fully visible rather than blank.
    document.documentElement.dataset.motion = 'on';

    const elements = [...document.querySelectorAll('[data-reveal]')];

    // Position among its revealing siblings, which is what staggers a row of cards
    // without having to number them in the markup.
    function orderOf(element) {
      const group = [...element.parentElement.children].filter((child) =>
        child.hasAttribute('data-reveal'),
      );
      return Math.max(0, group.indexOf(element));
    }

    function show(element) {
      element.style.transitionDelay = HOLD + orderOf(element) * STEP + 'ms';
      element.classList.add('is-in');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          // Unobserve is what makes this fire once. Without it every section
          // re-animates each time it scrolls back into view, which gets tiring.
          observer.unobserve(entry.target);
        }
      },
      // A negative bottom margin pulls the trigger line up from the bottom edge.
      // threshold stays 0 because the margin is already doing that job; setting both
      // makes them fight.
      { rootMargin: `0px 0px -${TRIGGER}% 0px`, threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));

    // With the trigger line 40% up, the last section can sit below it even when the
    // page is scrolled as far as it goes, and would never reveal at all.
    function sweepAtBottom() {
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY < doc.scrollHeight - 2) return;
      elements.forEach((element) => {
        if (!element.classList.contains('is-in')) show(element);
      });
    }

    window.addEventListener('scroll', sweepAtBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', sweepAtBottom);
      // data-motion is deliberately left in place. Removing it here would show every
      // hidden element for a frame on each route change, then hide them again.
    };
  }, [pathname]);
}
