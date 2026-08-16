import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* -------------------------------- */}
      {/* ATMOSPHERIC ENVIRONMENT */}
      {/* -------------------------------- */}

      <div className="hero-stars" />
      <div className="hero-grid" />

      <div className="orbit orbit-1" />
      <div className="orbit orbit-2" />
      <div className="orbit orbit-3" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* -------------------------------- */}
      {/* MAIN ENTRY EXPERIENCE */}
      {/* -------------------------------- */}

      <div className="hero-content">
        {/* Future identity */}
        <div className="future-label">
          <span className="future-dot" />
          <span>MKB UNIVERSE · PHOENIX VISION</span>
          <span className="label-line" />
        </div>

        {/* Main statement */}
        <h1 className="hero-title">
          <span>BUILDING</span>

          <strong>
            WHAT COMES
            <em>NEXT.</em>
          </strong>
        </h1>

        {/* Civilization statement */}
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

        <div className="phoenix-core">
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