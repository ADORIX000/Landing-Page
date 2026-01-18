export default function About() {
  return (
    <>
      <div className="sectionHead">
        <h2 className="h2">Built for privacy-aware, real-world marketing</h2>
        <p className="muted">
          ADORIX helps brands and venues deliver useful, timely messages on-site—without collecting unnecessary
          personal data.
        </p>
      </div>

      <div className="aboutGrid">
        <div className="glassCard aboutCard cardHover">
          <p className="eyebrow">Vision</p>
          <h3 className="h3">Adaptive on-site advertising that respects people.</h3>
          <p className="muted">
            Make on-site advertising as measurable and flexible as digital—while staying privacy-forward.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat__num">Real-time</div>
              <div className="stat__label">Attention insights</div>
            </div>
            <div className="stat">
              <div className="stat__num">Remote</div>
              <div className="stat__label">Kiosk management</div>
            </div>
            <div className="stat">
              <div className="stat__num">Fast</div>
              <div className="stat__label">Campaign setup</div>
            </div>
          </div>
        </div>

        <div className="glassCard aboutCard cardHover">
          <p className="eyebrow">Mission</p>
          <h3 className="h3">Help venues and brands convert foot traffic into outcomes.</h3>
          <p className="muted">
            Improve engagement and conversions using audience insights, smart delivery rules, and friendly interactive
            experiences.
          </p>

          <div className="bullets">
            <div className="bullet">Run rules-based campaigns that adapt instantly.</div>
            <div className="bullet">Measure what matters: attention, visits, responses.</div>
            <div className="bullet">Scale confidently across multiple locations.</div>
          </div>
        </div>
      </div>
    </>
  );
}
