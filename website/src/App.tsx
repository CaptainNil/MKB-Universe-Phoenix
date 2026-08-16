import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Vision from "./components/Vision/Vision";
import Progress from "./components/Progress/Progress";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Reveal from "./components/Reveal/Reveal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="universe-app">
      {/* Primary Interface */}
      <Reveal>
        <Header />
      </Reveal>

      {/* Entry Layer */}
      <main className="universe-main">
        <section className="universe-layer universe-hero-layer">
          <Reveal>
            <Hero />
          </Reveal>
        </section>

        {/* Phoenix Core / Vision Layer */}
        <section className="universe-layer universe-vision-layer">
          <Reveal>
            <Vision />
          </Reveal>
        </section>

        {/* Development State Layer */}
        <section className="universe-layer universe-progress-layer">
          <Reveal>
            <Progress count={count} setCount={setCount} />
          </Reveal>
        </section>

        {/* Universal Ecosystem Layer */}
        <section className="universe-layer universe-about-layer">
          <Reveal>
            <About />
          </Reveal>
        </section>

        {/* Intelligence / Autonomy / Exploration Systems */}
        <section className="universe-layer universe-systems-layer">
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        {/* Connection Layer */}
        <section className="universe-layer universe-contact-layer">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>

      {/* System Foundation */}
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;