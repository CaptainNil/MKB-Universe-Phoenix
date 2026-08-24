import type { Dispatch, SetStateAction } from "react";
import "./Progress.css";

type ProgressProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

function Progress({ count, setCount }: ProgressProps) {
  const progress = Math.min(Math.max(count, 0), 100);

  const getSystemState = () => {
    if (progress === 0) return "INITIALIZING";
    if (progress < 25) return "FOUNDATION";
    if (progress < 50) return "CORE FORMING";
    if (progress < 75) return "SYSTEM EXPANSION";
    if (progress < 100) return "ECOSYSTEM ONLINE";
    return "PHOENIX CORE ACTIVE";
  };

  return (
    <section id="progress" className="progress-system">
      <div className="progress-orbit orbit-one" />

      <div className="progress-header">
        <div className="progress-kicker">
          <span className="kicker-pulse" />
          PHOENIX DEVELOPMENT MATRIX
        </div>

        <h2>Evolution State</h2>

        <p>
          A living intelligence ecosystem evolving toward its next
          architectural state.
        </p>
      </div>

      <div className="progress-core">
        <div className="core-ring core-ring-one" />

        <div className="core-inner">
          <span className="core-label">SYSTEM</span>
          <strong>{progress}%</strong>
          <span className="core-state">{getSystemState()}</span>
        </div>
      </div>

      <div className="progress-data">
        <div className="data-line">
          <span>EVOLUTION</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-track">
          <div className="progress-energy" style={{ width: `${progress}%` }}>
            <span className="energy-node" />
          </div>
        </div>

        <div className="data-line secondary">
          <span>PHOENIX CORE</span>
          <span>{getSystemState()}</span>
        </div>
      </div>

      <button
        type="button"
        className="progress-command"
        onClick={() => setCount((current) => Math.min(current + 1, 100))}
      >
        <span className="command-icon">✦</span>
        <span>ADVANCE EVOLUTION</span>
        <span className="command-arrow">→</span>
      </button>

      <div className="progress-footer">
        <span>AI ECOSYSTEM</span>
        <span className="footer-line" />
        <span>CONTINUOUS DEVELOPMENT</span>
      </div>
    </section>
  );
}

export default Progress;
