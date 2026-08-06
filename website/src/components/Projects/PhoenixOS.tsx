import { useState } from "react";

function PhoenixOS() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <h3>Phoenix OS</h3>

      <p>Status: In Development</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div>
          <h3>Project Details</h3>

          <p>
            Phoenix OS is one of the core innovations of the MKB Universe &
            Phoenix Vision. It is currently under active development.
          </p>
        </div>
      )}
    </div>
  );
}

export default PhoenixOS;