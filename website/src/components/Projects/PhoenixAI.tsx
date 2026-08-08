import { useState } from "react";
import "./Projects.css";

function PhoenixAI() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="project-card">
      <h3>🤖 Phoenix AI</h3>

      <span className="status planning">Planning</span>

      <p>
        Intelligent AI platform focused on automation, reasoning, and future
        technologies.
      </p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="project-details">
          <h4>📋 Project Details</h4>

          <p>
            Phoenix AI is the artificial intelligence initiative of the MKB
            Universe & Phoenix Vision. It aims to develop intelligent systems,
            automation tools, advanced reasoning models, and AI technologies
            that empower people and solve real-world challenges.
          </p>
        </div>
      )}
    </article>
  );
}

export default PhoenixAI;