import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cls = useMemo(() => {
    return `nav ${scrolled ? "nav--scrolled" : ""}`;
  }, [scrolled]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className={cls}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => scrollTo("home")} type="button">
          <div className="nav__mark">A</div>
          <div className="nav__text">
            <div className="nav__title">ADORIX</div>
          </div>
        </button>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              className="nav__link"
              type="button"
              onClick={() => scrollTo(it.id)}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="btn btn--ghost" type="button" onClick={() => scrollTo("home")}>
            Watch Demo
          </button>
          <button className="btn btn--primary" type="button" onClick={() => scrollTo("contact")}>
            Free Consultation
          </button>

          <button
            className={`nav__burger ${open ? "nav__burger--open" : ""}`}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {open && (
          <div className="nav__mobile" role="dialog" aria-label="Mobile menu">
            {NAV_ITEMS.map((it) => (
              <button
                key={it.id}
                className="nav__mobileLink"
                type="button"
                onClick={() => scrollTo(it.id)}
              >
                {it.label}
              </button>
            ))}

            <div className="nav__mobileCtas">
              <button className="btn btn--ghost btn--full" type="button" onClick={() => scrollTo("home")}>
                Watch Demo
              </button>
              <button className="btn btn--primary btn--full" type="button" onClick={() => scrollTo("contact")}>
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
