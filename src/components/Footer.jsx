import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} ADORIX AI Kiosk. All rights reserved.</p>
        <p className="footer__small">
          Designed for intelligent, privacy-aware on-site advertising.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
