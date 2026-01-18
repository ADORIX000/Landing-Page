function Icon({ type }) {
  // simple “graphic” icons (stroke only) — no emojis
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "featureSvg",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (type) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18" />
          <path d="M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "focus":
      return (
        <svg {...common}>
          <path d="M4 9V6h3" />
          <path d="M20 9V6h-3" />
          <path d="M4 15v3h3" />
          <path d="M20 15v3h-3" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "avatar":
      return (
        <svg {...common}>
          <path d="M7 20c0-3 2.2-5 5-5s5 2 5 5" />
          <circle cx="12" cy="10" r="3.2" />
          <path d="M6.5 6.5 5 5" />
          <path d="M17.5 6.5 19 5" />
        </svg>
      );
    default: // "rules"
      return (
        <svg {...common}>
          <path d="M7 7h10" />
          <path d="M7 12h6" />
          <path d="M7 17h10" />
          <path d="M17 12l2 2 3-3" />
        </svg>
      );
  }
}

const FEATURES = [
  {
    title: "Instant Audience Recognition",
    desc: "Recognize viewers in milliseconds to understand who’s watching and when engagement peaks.",
    icon: "globe",
  },
  {
    title: "Dwell + Focus Measurement",
    desc: "Track dwell time and attention quality to learn which creatives truly perform.",
    icon: "focus",
  },
  {
    title: "AI Avatar Engagement",
    desc: "A friendly on-screen avatar answers questions, explains offers, and re-engages distracted viewers.",
    icon: "avatar",
  },
  {
    title: "Rule-Based Smart Delivery",
    desc: "Serve ads by time, location, or audience rules—automatically prioritizing what matters most.",
    icon: "rules",
  },
];

export default function Features() {
  return (
    <>
      <div className="sectionHead">
        <h2 className="h2">Everything you need to run smarter on-site campaigns</h2>
        <p className="muted">
          Built for malls, airports, retail, events—anywhere foot traffic matters.
        </p>
      </div>

      <div className="featuresGrid">
        {FEATURES.map((f) => (
          <div key={f.title} className="featureCard cardHover">
            <div className="featureIcon" aria-hidden="true">
              <Icon type={f.icon} />
            </div>

            <h3 className="featureTitle">{f.title}</h3>
            <p className="featureDesc">{f.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
