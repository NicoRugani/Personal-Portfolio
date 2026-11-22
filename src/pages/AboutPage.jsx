import usePageTitle from '../usePageTitle.js';

export default function AboutPage() {
    usePageTitle('About');
    return (
        <section className="section-shell">
            <p className="eyebrow">About</p>
            <h1>About me</h1>
        </section>
    );
}
