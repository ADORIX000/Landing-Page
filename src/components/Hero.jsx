import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero-demo.mp4"; // your local demo video

const YOUTUBE_URL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"; // <- put your real link here

const Hero = () => {
  const handleWatchDemo = () => {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero">
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />
      <div className="hero__content">
        {/* LEFT TEXT SIDE */}
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="hero__eyebrow">AI-Powered Advertising Kiosk</p>
          <h1 className="hero__title">
            Amplify Your Brand with{" "}
            <span className="hero__title-highlight">Intelligent On-Site</span>{" "}
            Advertising
          </h1>
          <p className="hero__subtitle">
            ADORIX uses computer vision, demographics and an AI avatar to turn
            every passerby into a measurable opportunity – in real time.
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary">Get Free Consultation</button>

            {/* Watch demo opens YouTube in new tab */}
            <button className="btn btn--ghost" onClick={handleWatchDemo}>
              <span className="btn__icon">▶</span> Watch Kiosk Demo
            </button>
          </div>

          <div className="hero__metrics">
            <div className="metric">
              <span className="metric__label">24/7</span>
              <span className="metric__value">Smart ad delivery</span>
            </div>
            <div className="metric">
              <span className="metric__label">21+</span>
              <span className="metric__value">Industries ready</span>
            </div>
            <div className="metric">
              <span className="metric__label">Real-time</span>
              <span className="metric__value">Analytics & engagement</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VIDEO CARD SIDE */}
        <motion.div
          className="hero__card"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <div className="hero__card-inner">
            <div className="hero__video-wrapper">
              <video
                className="hero__video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="hero__card-text">
              “This is what an ADORIX kiosk looks like in action – adaptive ads,
              live analytics and an AI avatar greeting every passerby.”
            </div>
            <div className="hero__card-footer">
              Tip: We recommend a short 15–30s loop that shows your kiosk in a
              real location.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
