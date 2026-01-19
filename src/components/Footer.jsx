export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section */}
        <div className="footer__section footer__brand-section">
          <div className="footer__brand">
            <img src="/logo.png" alt="ADORIX Logo" className="nav__logo" />
            <div>
              <div className="footer__title">ADORIX</div>
              <div className="footer__subtitle">AI Kiosk for smarter on-site advertising</div>
            </div>
          </div>
          <p className="footer__description">
            Privacy-aware on-site intelligence platform for real venues. Transforming how businesses engage with their audience.
          </p>
        </div>

        {/* Links Sections */}
        <div className="footer__section">
          <h4 className="footer__heading">Product</h4>
          <ul className="footer__list">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">How it works</a></li>
            <li><a href="#contact">Get Started</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Legal</h4>
          <ul className="footer__list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__copyright">
          <span>© {year} ADORIX. All rights reserved.</span>
        </div>
        <div className="footer__social">
          <a href="#" title="Twitter" aria-label="Twitter">𝕏</a>
          <a href="#" title="LinkedIn" aria-label="LinkedIn">in</a>
          <a href="#" title="GitHub" aria-label="GitHub">⚙</a>
        </div>
      </div>
    </footer>
  );
}
