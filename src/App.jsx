import { Navigate, Route, Routes } from 'react-router';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="index.html" element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<CaseStudyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* The static pages get deleted in Stage 5. These keep their URLs working. */}
        <Route path="projects.html" element={<Navigate to="/work" replace />} />
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route path="contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
