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
    <>
      <Reveal>
  <Header />
</Reveal>

<main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Vision />
        </Reveal>

        <Reveal>
          <Progress
            count={count}
            setCount={setCount}
          />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}

export default App;