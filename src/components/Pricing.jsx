const PLANS = [
  {
    name: "Starter",
    price: "$199",
    cadence: "per month",
    badge: null,
    desc: "Single-kiosk pilots and quick validation.",
    features: ["Basic audience analytics", "Scheduling rules", "Weekly summary", "Email support"],
    cta: "Start Pilot",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$499",
    cadence: "per month",
    badge: "Most Popular",
    desc: "For high-traffic locations and better insights.",
    features: ["Real-time dashboard", "Advanced targeting rules", "A/B creative testing", "Priority support"],
    cta: "Talk to Sales",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    badge: null,
    desc: "Multi-venue rollouts & integrations.",
    features: ["Fleet management", "Custom integrations", "Dedicated success", "SLA + security review"],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <div className="sectionHead">
        <h2 className="h2">Simple plans that scale with your venues</h2>
        <p className="muted">
          Start small, prove results, then expand no complicated setup.
        </p>
      </div>

      <div className="grid grid--3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`glassCard pricing cardHover ${p.highlight ? "pricing--highlight" : ""}`}
          >
            <div className="pricing__top">
              <h3 className="h3">{p.name}</h3>
              {p.badge ? <span className="badge badge--hot">{p.badge}</span> : <span className="badge">Plan</span>}
            </div>

            <div className="pricing__priceRow">
              <div className="pricing__price">{p.price}</div>
              <div className="pricing__cadence">{p.cadence}</div>
            </div>

            <p className="tiny">{p.desc}</p>

            <ul className="list">
              {p.features.map((x) => (
                <li key={x} className="list__item">
                  <span className="tick">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn--primary btn--full" type="button">
                {p.cta}
            </button>

          </div>
        ))}
      </div>
    </>
  );
}
