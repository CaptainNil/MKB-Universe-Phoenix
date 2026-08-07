import { useState } from "react";

function PhoenixSpace() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
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
          <h3>Project Details</h3>

          <p>
            Phoenix Space is a long-term initiative within the MKB Universe &
            Phoenix Vision. It focuses on space research, future missions,
            advanced propulsion concepts, and technologies that can shape the
            next generation of exploration.
          </p>
        </div>
      )}
    </div>
  );
}

export default PhoenixSpace;