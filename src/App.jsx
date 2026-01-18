import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <section id="home" className="section section--hero">
          <Hero />
        </section>

        <section id="features" className="section">
          <Features />
        </section>

        <section id="pricing" className="section">
          <Pricing />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="team" className="section">
          <Team />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <Footer />
      </main>

      <ScrollToTopButton />
    </div>
  );
}
