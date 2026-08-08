import "./Vision.css";

function Vision() {
  return (
    <section id="vision" className="vision">
      <h2>🌌 Our Vision</h2>

      <p className="vision-intro">
        MKB Universe & Phoenix Vision is dedicated to building future
        technologies that inspire innovation, empower humanity, and push the
        boundaries of what is possible.
      </p>

      <div className="vision-grid">
        <article id="ai" className="vision-card">
          <h3>🤖 Artificial Intelligence</h3>
          <p>
            Building intelligent systems that assist, learn, and empower
            humanity.
          </p>
        </article>

        <article id="robotics" className="vision-card">
          <h3>⚙️ Robotics</h3>
          <p>
            Designing autonomous machines for industry, research, and everyday
            life.
          </p>
        </article>

        <article id="space-tech" className="vision-card">
          <h3>🚀 Space Technology</h3>
          <p>
            Exploring the future of space through advanced engineering and
            innovation.
          </p>
        </article>

        <article id="phoenix" className="vision-card">
          <h3>🔥 Phoenix Vision</h3>
          <p>
            Rebuilding the future through creativity, resilience, and limitless
            imagination.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Vision;