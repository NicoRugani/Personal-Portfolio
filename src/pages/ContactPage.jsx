import usePageTitle from '../usePageTitle.js';

export default function ContactPage() {
    usePageTitle('Contact');
    return (
        <section className="section-shell">
            <p className="eyebrow">Contact</p>
            <h1>Get in touch</h1>
        </section>
    );
}
