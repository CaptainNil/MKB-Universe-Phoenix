import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          ✦
        </div>

        <div className="brand-content">
          <h1>MKB UNIVERSE</h1>

          <p>PHOENIX CORE // INTELLIGENCE ECOSYSTEM</p>
        </div>
      </div>

      <div
        className="header-system"
        aria-label="Phoenix intelligence ecosystem system status"
      >
        <span className="system-dot" />

        <span>PHOENIX SYSTEM</span>

        <span className="system-line" aria-hidden="true" />

        <span>ONLINE</span>
      </div>

      <nav className="future-nav" aria-label="Main navigation">
        <a href="#home" className="nav-link active">
          Home
        </a>

        <a href="#vision" className="nav-link">
          Vision
        </a>

        <a href="#progress" className="nav-link">
          Progress
        </a>

        <a href="#about" className="nav-link">
          About
        </a>

        <a href="#projects" className="nav-link">
          Projects
        </a>

        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;