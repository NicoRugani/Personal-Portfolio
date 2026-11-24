import { useRef, useState } from 'react';

// Formspree takes the submission and emails it on. Posting with fetch instead of a plain
// form submit keeps the visitor on the page, which means this component owns the success
// and failure messaging that the browser would otherwise handle by navigating away.
const FORM_ENDPOINT = 'https://formspree.io/f/meobbnnq';

function messageForFailedResponse(response, body) {
  if (body?.errors?.length) return body.errors.map((error) => error.message).join(', ');
  if (body?.error) return body.error;
  if (response.status === 403) return 'The form rejected that. Please email me directly instead.';
  if (response.status === 429) return 'Too many messages just now. Please wait a moment and try again.';
  return 'Something went wrong sending that. Please try again.';
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const statusRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        // Content-Type is left unset on purpose: the browser adds it with the multipart
        // boundary that FormData needs.
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus({ ok: true, message: 'Message sent. I will get back to you soon.' });
        form.reset();
      } else {
        const body = await response.json().catch(() => null);
        setStatus({ ok: false, message: messageForFailedResponse(response, body) });
      }
    } catch {
      setStatus({ ok: false, message: 'Network error. Check your connection and try again.' });
    } finally {
      setSending(false);
      // Move focus to the result so it is announced rather than silently appearing.
      statusRef.current?.focus();
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required />
      </div>

      <button className="button button-primary" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>

      {/* aria-live announces the result for anyone not watching this corner of the page. */}
      <p
        className={status ? 'form-status is-' + (status.ok ? 'ok' : 'error') : 'form-status'}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        ref={statusRef}
      >
        {status?.message}
      </p>
    </form>
  );
}
