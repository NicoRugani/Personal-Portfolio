import { Route, Routes } from 'react-router';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import siteUrl from './siteUrl.js';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="index.html" element={<HomePage />} />
        <Route
          path="*"
          element={
            <section className="section-shell missing-page">
              <p className="eyebrow">Page not found</p>
              <h1>Let’s get you back to the work.</h1>
              <a className="button button-primary" href={siteUrl()}>
                Back to home
              </a>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
