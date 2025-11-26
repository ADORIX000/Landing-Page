import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Launch",
    price: "$199",
    cadence: "per month",
    badge: "Best for pilots",
    description: "Perfect for testing a single ADORIX kiosk in one location.",
    features: [
      "1 AI kiosk license",
      "Real-time audience detection",
      "Standard analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Scale",
    price: "$499",
    cadence: "per month",
    badge: "Most popular",
    highlight: true,
    description:
      "Unlock data-driven campaigns across multiple high-traffic venues.",
    features: [
      "Up to 5 kiosk licenses",
      "Advanced demographics & dwell-time metrics",
      "A/B creative testing tools",
      "Priority chat & email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    cadence: "",
    badge: "Custom",
    description:
      "Designed for city-wide deployments, agencies and multi-country brands.",
    features: [
      "Unlimited kiosks & custom SLAs",
      "Private cloud or on-prem options",
      "Custom integrations & APIs",
      "Dedicated success manager",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="section section--pricing">
      <div className="section__header">
        <p className="section__eyebrow">Plans & Subscriptions</p>
        <h2 className="section__title">Choose the Right ADORIX Plan</h2>
        <p className="section__subtitle">
          Whether you’re running a single flagship kiosk or hundreds of screens,
          ADORIX gives you transparent, subscription-based pricing with
          enterprise options when you’re ready to scale.
        </p>
      </div>

      <div className="grid grid--pricing">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            className={`pricing-card ${
              plan.highlight ? "pricing-card--highlight" : ""
            }`}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="pricing-card__header">
              <div className="pricing-card__top">
                <h3 className="pricing-card__name">{plan.name}</h3>
                {plan.badge && (
                  <span className="pricing-card__badge">{plan.badge}</span>
                )}
              </div>

              <div className="pricing-card__price-row">
                <span className="pricing-card__price">{plan.price}</span>
                {plan.cadence && (
                  <span className="pricing-card__cadence">
                    {plan.cadence}
                  </span>
                )}
              </div>

              <p className="pricing-card__description">{plan.description}</p>
            </div>

            <ul className="pricing-card__features">
              {plan.features.map((feature) => (
                <li key={feature} className="pricing-card__feature">
                  <span className="pricing-card__bullet">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn--primary btn--full pricing-card__cta">
              {plan.name === "Enterprise" ? "Book a strategy call" : "Get started"}
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
