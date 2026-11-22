import usePageTitle from '../usePageTitle.js';

export default function WorkPage() {
    usePageTitle('Work');
    return(
        <section className="section-shell">
            <p className="eyebrow">Work</p>
            <h1>Case Studies</h1>
        </section>
    );
}