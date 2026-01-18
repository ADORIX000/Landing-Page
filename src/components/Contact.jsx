import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <>
      <div className="sectionHead">
        <h2 className="h2">Ready to test a kiosk in your venue?</h2>
        <p className="muted">
          Tell us where you plan to deploy—we’ll recommend a pilot setup.
        </p>
      </div>

      <div className="contactGrid">
        <form className="glassCard form cardHover" onSubmit={onSubmit}>
          <div className="row">
            <div className="field">
              <span>Name</span>
              <input placeholder="Your name" required />
            </div>
            <div className="field">
              <span>Company / Venue</span>
              <input placeholder="Company or venue name" required />
            </div>
          </div>

          <div className="field">
            <span>Email</span>
            <input type="email" placeholder="you@company.com" required />
          </div>

          <div className="field">
            <span>Message</span>
            <textarea
              rows="4"
              placeholder="Number of locations, estimated foot traffic, and your campaign goal…"
              required
            />
          </div>

          <button className="btn btn--primary btn--full" type="submit">
            Send Message
          </button>

          {sent && <div className="success">Thanks! We’ll get back to you within 24–48 hours.</div>}
        </form>

        <div className="stack">
          <div className="glassCard infoCard cardHover">
            <h3 className="h3">What happens next?</h3>
            <p className="tiny">
              We’ll review your venue details and propose a pilot plan with recommended setup.
            </p>

            <div className="kv">
              <span className="kv__k">Response time</span>
              <span className="kv__v">24–48 hours</span>
            </div>
            <div className="kv">
              <span className="kv__k">Pilot options</span>
              <span className="kv__v">Single / Multi-venue</span>
            </div>
            <div className="kv">
              <span className="kv__k">Support</span>
              <span className="kv__v">Onboarding + setup</span>
            </div>
          </div>

          <div className="glassCard infoCard cardHover">
            <h3 className="h3">Email</h3>
            <p className="tiny">hello@adorixit.com</p>

            <h3 className="h3" style={{ marginTop: 12 }}>
              Location
            </h3>
            <p className="tiny">Colombo • Remote-ready deployments</p>
          </div>
        </div>
      </div>
    </>
  );
}
