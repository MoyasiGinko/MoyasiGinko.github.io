import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import PortfolioMotion from '../components/PortfolioMotion';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <main className="app-shell">
      <PortfolioMotion />
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}