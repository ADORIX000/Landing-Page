import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },   // <-- new
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__brand" onClick={() => handleNavClick("home")}>
          <img src={logo} alt="ADORIX logo" className="navbar__logo" />
          <div>
            <div className="navbar__title">ADORIX</div>
            <div className="navbar__subtitle">AI Kiosk</div>
          </div>
        </div>

        <nav className="navbar__nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="navbar__link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <nav className="navbar__nav-mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="navbar__link-mobile"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
