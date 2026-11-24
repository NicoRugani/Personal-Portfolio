import { Link, useParams } from 'react-router';
import CaseStudyContent from '../components/CaseStudyContent.jsx';
import { caseStudies } from '../data/caseStudies.js';
import usePageTitle from '../usePageTitle.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  // Hooks cannot be called conditionally, so this runs before the early return below.
  usePageTitle(study ? study.title : 'Page not found');

  if (!study) return <NotFoundPage />;

  return (
    <article className="case-study section-shell">
      <CaseStudyContent study={study} />
      <Link className="text-link" to="/work">
        <span aria-hidden="true">←</span> All work
      </Link>
    </article>
  );
}
