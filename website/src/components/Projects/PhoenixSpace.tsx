import { useState } from "react";
import "./Projects.css";

function PhoenixSpace() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="project-card">
      <h3>🚀 Phoenix Space</h3>

      <span className="status research">Research</span>

      <p>
        Advancing the future of space technology through research,
        exploration, and next-generation innovations.
      </p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="project-details">
          <h4>📋 Project Details</h4>

          <p>
            Phoenix Space is a long-term initiative within the MKB Universe &
            Phoenix Vision. It focuses on space research, future missions,
            advanced propulsion concepts, and technologies that can shape the
            next generation of exploration.
          </p>
        </div>
      )}
    </article>
  );
}

export default PhoenixSpace;