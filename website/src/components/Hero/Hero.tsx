import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 14;
      const rotateX = (0.5 - y) * 10;

      const lightX = x * 100;
      const lightY = y * 100;

      hero.style.setProperty("--hero-mouse-x", `${lightX}%`);
      hero.style.setProperty("--hero-mouse-y", `${lightY}%`);
      hero.style.setProperty("--hero-rotate-x", `${rotateX}deg`);
      hero.style.setProperty("--hero-rotate-y", `${rotateY}deg`);

      hero.style.setProperty(
        "--hero-parallax-x",
        `${(x - 0.5) * 28}px`,
      );

      hero.style.setProperty(
        "--hero-parallax-y",
        `${(y - 0.5) * 22}px`,
      );
    };

    const handlePointerLeave = () => {
      hero.style.setProperty("--hero-mouse-x", "50%");
      hero.style.setProperty("--hero-mouse-y", "45%");
      hero.style.setProperty("--hero-rotate-x", "0deg");
      hero.style.setProperty("--hero-rotate-y", "0deg");
      hero.style.setProperty("--hero-parallax-x", "0px");
      hero.style.setProperty("--hero-parallax-y", "0px");
    };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >
      {/* -------------------------------- */}
      {/* ATMOSPHERIC ENVIRONMENT */}
      {/* -------------------------------- */}

      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="orbit orbit-1" aria-hidden="true" />
      <div className="orbit orbit-2" aria-hidden="true" />
      <div className="orbit orbit-3" aria-hidden="true" />

      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      {/* -------------------------------- */}
      {/* DYNAMIC 3D LIGHT */}
      {/* -------------------------------- */}

      <div className="hero-mouse-light" aria-hidden="true" />

      {/* -------------------------------- */}
      {/* MAIN ENTRY EXPERIENCE */}
      {/* -------------------------------- */}

      <div className="hero-content">
        <div className="future-label">
          <span className="future-dot" />
          <span>MKB UNIVERSE · PHOENIX VISION</span>
          <span className="label-line" />
        </div>

        <h1 className="hero-title">
          <span>BUILDING</span>

          <strong>
            <span className="hero-title-main">WHAT COMES</span>
            <em>NEXT.</em>
          </strong>
        </h1>

        <p className="hero-description">
          A vision beyond the present.
          <br />
          Intelligence. Autonomy. Exploration. Evolution.
          <br />
          <span>
            Engineering the technologies of a civilization yet to come.
          </span>
        </p>

        {/* -------------------------------- */}
        {/* PHOENIX CORE */}
        {/* -------------------------------- */}

        <div
          className="phoenix-core"
          aria-label="Phoenix Core"
          role="img"
        >
          <div className="core-depth-field" />

          <div className="core-outer-ring" />
          <div className="core-middle-ring" />
          <div className="core-inner-ring" />

          <div className="core-energy-line energy-line-one" />
          <div className="core-energy-line energy-line-two" />

          <div className="core">
            <div className="core-inner">
              <small>PHOENIX</small>
              <span>CORE</span>
              <strong>∞</strong>
            </div>
          </div>

          <div className="core-orbit-dot dot-one" />
          <div className="core-orbit-dot dot-two" />
          <div className="core-orbit-dot dot-three" />
          <div className="core-orbit-dot dot-four" />
        </div>

        {/* -------------------------------- */}
        {/* TECHNOLOGICAL DOMAINS */}
        {/* -------------------------------- */}

        <div className="hero-sectors">
          <a href="#ai" className="hero-sector sector-ai">
            <span className="sector-number">01</span>
            <span className="sector-icon">◈</span>

            <div>
              <small>INTELLIGENCE</small>
              <strong>PHOENIX AI</strong>
            </div>
          </a>

          <a href="#robotics" className="hero-sector sector-robotics">
            <span className="sector-number">02</span>
            <span className="sector-icon">◉</span>

            <div>
              <small>AUTONOMY</small>
              <strong>ROBOTICS</strong>
            </div>
          </a>

          <a href="#space-tech" className="hero-sector sector-space">
            <span className="sector-number">03</span>
            <span className="sector-icon">✦</span>

            <div>
              <small>EXPLORATION</small>
              <strong>PHOENIX SPACE</strong>
            </div>
          </a>

          <a href="#phoenix" className="hero-sector sector-evolution">
            <span className="sector-number">04</span>
            <span className="sector-icon">◇</span>

            <div>
              <small>EVOLUTION</small>
              <strong>PHOENIX VISION</strong>
            </div>
          </a>
        </div>

        {/* -------------------------------- */}
        {/* ENTRY CONTROLS */}
        {/* -------------------------------- */}

        <div className="hero-actions">
          <a href="#vision" className="future-primary">
            <span>ENTER THE UNIVERSE</span>
            <strong>→</strong>
          </a>

          <a href="#projects" className="future-secondary">
            <span>EXPLORE SYSTEMS</span>
            <strong>↗</strong>
          </a>
        </div>
      </div>

      {/* -------------------------------- */}
      {/* LOWER SYSTEM TELEMETRY */}
      {/* -------------------------------- */}

      <div className="hero-system">
        <span>
          <i />
          SYSTEM ONLINE
        </span>

        <span>NODE : PHOENIX-01</span>

        <span>INTELLIGENCE : ACTIVE</span>

        <span>NETWORK : ∞</span>
      </div>

      {/* -------------------------------- */}
      {/* DISCOVERY INDICATOR */}
      {/* -------------------------------- */}

      <div className="hero-scroll">
        <span>INITIATE DESCENT</span>
        <small>SCROLL TO DISCOVER</small>
        <i />
      </div>
    </section>
  );
}

export default Hero;