import "./Hero.css";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src={heroImg}
        className="base"
        width="170"
        height="179"
        alt="MKB Universe & Phoenix"
      />

      <div className="hero-tags">
        <a href="#ai">🤖 AI</a>
        <a href="#robotics">⚙️ Robotics</a>
        <a href="#space-tech">🚀 Space Tech</a>
        <a href="#phoenix">🔥 Phoenix</a>
      </div>

      <h1>🚀 Building the future through innovation.</h1>

      <p className="hero-description">
        Exploring Artificial Intelligence, Robotics, Space Technology, and the
        Phoenix Vision to create the technologies of tomorrow.
      </p>

      <div className="hero-buttons">
        <a href="#vision" className="primary-btn">
          🚀 Explore Vision
        </a>

        <a href="#projects" className="secondary-btn">
          📂 View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;