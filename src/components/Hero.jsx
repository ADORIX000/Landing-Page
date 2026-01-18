export default function Hero() {
  return (
    <div className="hero__grid">
      {/* Left */}
      <div>
        <p className="eyebrow">AI-Powered Advertising Kiosk</p>

        <h1 className="hero__title">
          Turn foot traffic into <span className="gradText">measurable demand</span>.
        </h1>

        <p className="hero__subtitle">
          ADORIX helps venues run on-site campaigns that adapt in real time etecting attention,
          learning audiences, and delivering the right creative at the right moment.
        </p>

        <div className="hero__cta">
          <button className="btn btn--primary" type="button">
            Get Free Consultation
          </button>
          <button className="btn btn--primary" type="button">
            Watch Kiosk Demo
          </button>
        </div>

        <div className="hero__meta">
          <span>Privacy-aware</span>
          <span className="dot" />
          <span>Real-time analytics</span>
          <span className="dot" />
          <span>Remote managed</span>
        </div>

        <div className="hero__chips">
          <span className="chip">Smart Ad Delivery</span>
          <span className="chip">Audience Insights</span>
          <span className="chip">AI Avatar Engagement</span>
          <span className="chip">Campaign Rules</span>
        </div>
      </div>

      {/* Right */}
      <div className="glassCard hero__card cardHover">
        <div className="hero__cardTop">
          <span className="hero__badge">Live Kiosk Preview</span>
          <span className="hero__mini">Replace with your demo video/image</span>
        </div>

        <div className="mediaFrame">
          <div className="mediaFrame__placeholder">
            <div className="mediaFrame__ring" />
            <p className="mediaFrame__text">
              Drop a video here later <br />
              <span>(16:9)</span>
            </p>
          </div>
        </div>

        <div className="hero__telemetry">
          <div className="telemetryRow">
            <span className="telemetryKey">Dwell</span>
            <span className="telemetryVal">18s</span>
          </div>
          <div className="telemetryRow">
            <span className="telemetryKey">Engagement</span>
            <span className="telemetryVal">High</span>
          </div>
          <div className="telemetryRow">
            <span className="telemetryKey">Audience</span>
            <span className="telemetryVal">20–35</span>
          </div>
          <div className="telemetryRow">
            <span className="telemetryKey">Mood</span>
            <span className="telemetryVal">Positive</span>
          </div>
        </div>

        <div className="hero__cardBottom">
          <div className="miniFeature">
            <h4>Smart Targeting</h4>
            <p>Ads adapt to audience signals in real time.</p>
          </div>
          <div className="miniFeature">
            <h4>Actionable Insights</h4>
            <p>Measure attention, visits, and conversions.</p>
          </div>
        </div>

        <p className="hero__note">
          Tip: you can later replace the preview box with a real <code>&lt;video&gt;</code> or kiosk render.
        </p>
      </div>
    </div>
  );
}
