import { Link } from 'react-router';
import usePageTitle from '../usePageTitle.js';

export default function NotFoundPage(){
    usePageTitle('Page not found');
    return(
        <section className="section-shell missing-page">
            <p className = "eyebrow">Page not found</p>
            <h1>Oops, it seems this page doesn't exist</h1>
            <Link className="button button-primary" to="/">
                Back Home
            </Link>
        </section>
    );
}