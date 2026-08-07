import "./Hero.css";
import heroImg from '../../assets/hero.png'
function Hero() {
  return (
    <section id="home" className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <div className="hero-tags">
  <span>🤖 AI</span>
  <span>⚙️ Robotics</span>
  <span>🚀 Space Tech</span>
  <span>🔥 Phoenix</span>
</div>
      <h2>🚀 Building the future through innovation.</h2>
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