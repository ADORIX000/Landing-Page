import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Real-time Audience Detection",
    description:
      "Recognize every face in front of the kiosk to understand who is watching – in milliseconds.",
    icon: "👁️",
  },
  {
    title: "Attention Tracking",
    description:
      "Measure dwell time and focus to see which creatives truly capture attention.",
    icon: "⏱️",
  },
  {
    title: "AI Avatar Interaction",
    description:
      "A friendly avatar answers questions, explains offers and re-engages distracted viewers.",
    icon: "🤖",
  },
  {
    title: "Data-Driven Recommendations",
    description:
      "Ads are picked based on age group, gender rules and campaign priorities – automatically.",
    icon: "📊",
  },
];

const Features = () => {
  return (
    <section className="section">
      <div className="section__header">
        <p className="section__eyebrow">Core Capabilities</p>
        <h2 className="section__title">
          Data-Driven Strategies, Measurable Results
        </h2>
        <p className="section__subtitle">
          ADORIX combines computer vision, AI avatars and smart decision logic
          to make every kiosk behave like a digital brand ambassador.
        </p>
      </div>

      <div className="grid grid--features">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="feature-card__icon">{card.icon}</div>
            <h3 className="feature-card__title">{card.title}</h3>
            <p className="feature-card__description">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Features;
