import { useState } from "react";
import "./Projects.css";

function PhoenixOS() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <h3>⚙️ Phoenix OS</h3>

      <span className="status development">In Development</span>

      <p>
        Next-generation operating system designed for the future of
        computing.
      </p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="project-details">
          <h4>📋 Project Details</h4>

          <p>
            Phoenix OS is one of the flagship technologies of the MKB Universe
            & Phoenix Vision. It is being designed as a modern, intelligent,
            secure, and scalable operating system for future computing,
            artificial intelligence, and advanced technologies.
          </p>
        </div>
      )}
    </div>
  );
}

export default PhoenixOS;