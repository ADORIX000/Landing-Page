export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__mark">A</div>
          <div>
            <div className="footer__title">ADORIX</div>
            <div className="footer__sub">AI Kiosk for smarter on-site advertising</div>
          </div>
        </div>

        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__bottom">
          <span>© {year} ADORIX. All rights reserved.</span>
          <span className="footer__dot">•</span>
          <span>Privacy-aware by design</span>
        </div>
      </div>
    </footer>
  );
}
