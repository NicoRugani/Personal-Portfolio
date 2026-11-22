import {useParams} from 'react-router';
import usePageTitle from '../usePageTitle.js';

export default function CaseStudyPage(){
    const {slug} = useParams();
    usePageTitle(slug)
    return (
        <section className="section-shell">
            <p className="eyebrow">Case study</p>
            <h1>{slug}</h1>
        </section>
    );
}

