import "./Projects.css";
import PhoenixAI from "./PhoenixAI";
import PhoenixOS from "./PhoenixOS";
import PhoenixSpace from "./PhoenixSpace";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>🚀 Projects</h2>

      <p>
        Explore the innovations that are part of the MKB Universe & Phoenix
        Vision.
      </p>

      <div className="projects-grid">
        <PhoenixAI />
        <PhoenixOS />
        <PhoenixSpace />
      </div>
    </section>
  );
}

export default Projects;