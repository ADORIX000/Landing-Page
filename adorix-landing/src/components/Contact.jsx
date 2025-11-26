import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // here you would normally POST to your backend
  };

  return (
    <section className="section section--contact">
      <div className="section__header">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Let’s Talk About Your Kiosk</h2>
        <p className="section__subtitle">
          Ready to bring intelligent, on-site advertising into your space? Drop
          us a message and we’ll get back with a tailored walkthrough.
        </p>
      </div>

      <div className="contact">
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required placeholder="John Doe" />
            </div>

            <div className="contact__field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                required
                placeholder="Brand / Organization"
              />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (62) 987 7543"
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              rows="4"
              required
              placeholder="Tell us about where you’d like to deploy ADORIX..."
            />
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>

          {submitted && (
            <p className="contact__success">
              Thank you! We’ll reach out to you shortly.
            </p>
          )}
        </motion.form>

        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contact__card">
            <h3>Talk to us</h3>
            <p className="contact__highlight">+1 (62) 987 7543</p>
            <p className="contact__highlight">hello@adorix.ai</p>
          </div>
          <div className="contact__card">
            <h3>Perfect for</h3>
            <ul>
              <li>Shopping malls & retail chains</li>
              <li>Airports & transport hubs</li>
              <li>Hotels, gyms & co-working spaces</li>
              <li>Events, exhibitions & showrooms</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
