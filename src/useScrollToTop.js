import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

function scrollToHash(hash) {
  // 'instant' rather than inheriting `scroll-behavior: smooth` from styles.css. A smooth
  // scroll animates over several hundred milliseconds, and the re-render that follows the
  // URL change cancels it partway, which is why this link used to do nothing at all.
  if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
}

// A routed navigation swaps the page content but leaves the scroll position alone, so
// following a link from halfway down one page opens the next one halfway down too.
export default function useScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
      return;
    }

    // POP is the back and forward buttons, where the browser restores the previous
    // position itself and jumping to the top would lose the reader's place.
    if (navigationType === 'POP') return;

    // 'instant' overrides the smooth scrolling for this one call. Without it the jump
    // animates, and swapping the page out from under the animation cancels it partway.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, navigationType]);

  useEffect(() => {
    // A plain <a href="#section"> click is a same-document fragment navigation. It fires
    // hashchange, not popstate, so the router never learns about it and the effect above
    // does not re-run. This catches those links wherever they appear.
    function handleHashChange() {
      scrollToHash(window.location.hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
}
