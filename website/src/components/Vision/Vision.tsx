import {
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

import "./Vision.css";

type SystemId =
  | "ai"
  | "robotics"
  | "space"
  | "phoenix";

type SystemConfig = {
  id: SystemId;
  number: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  signal: string;
  ariaLabel: string;
};

const systems: SystemConfig[] = [
  {
    id: "ai",
    number: "01",
    category: "INTELLIGENCE",
    title: "Phoenix AI",
    description:
      "Reasoning · Automation · Intelligence",
    icon: "🤖",
    signal: "INTELLIGENCE",
    ariaLabel: "Phoenix AI system",
  },
  {
    id: "robotics",
    number: "02",
    category: "AUTONOMY",
    title: "Robotics",
    description:
      "Machines · Control · Autonomous Systems",
    icon: "⚙️",
    signal: "AUTONOMY",
    ariaLabel: "Robotics system",
  },
  {
    id: "space",
    number: "03",
    category: "EXPLORATION",
    title: "Phoenix Space",
    description:
      "Space · Propulsion · Exploration",
    icon: "🚀",
    signal: "EXPLORATION",
    ariaLabel: "Phoenix Space system",
  },
  {
    id: "phoenix",
    number: "04",
    category: "EVOLUTION",
    title: "Phoenix Vision",
    description:
      "Innovation · Resilience · Human Progress",
    icon: "🔥",
    signal: "EVOLUTION",
    ariaLabel: "Phoenix Vision system",
  },
];

function Vision() {
  const [selectedSystem, setSelectedSystem] =
    useState<SystemId | null>(null);

  const [hoveredSystem, setHoveredSystem] =
    useState<SystemId | null>(null);

  /*
   * Hover temporarily previews a system.
   *
   * Click permanently selects a system until:
   * - the same system is clicked again
   * - another system is selected
   * - Phoenix Core is clicked to reset
   */
  const activeSystem =
    hoveredSystem ?? selectedSystem;

  const handleSystemEnter = (
    system: SystemId,
  ) => {
    setHoveredSystem(system);
  };

  const handleSystemLeave = () => {
    setHoveredSystem(null);
  };

  const handleSystemSelect = (
    system: SystemId,
  ) => {
    setSelectedSystem((current) =>
      current === system ? null : system,
    );
  };

  const handleSystemKeyDown = (
    event: KeyboardEvent,
    system: SystemId,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      handleSystemSelect(system);
    }
  };

  const handleCoreReset = () => {
    setSelectedSystem(null);
    setHoveredSystem(null);
  };

  const getNodeStyle = (
    system: SystemId,
  ): CSSProperties => {
    const isActive =
      activeSystem === system;

    const hasActiveSystem =
      activeSystem !== null;

    return {
      transform: isActive
        ? "translateY(-8px) scale(1.04)"
        : "scale(1)",

      opacity:
        hasActiveSystem && !isActive
          ? 0.45
          : 1,

      filter:
        hasActiveSystem && !isActive
          ? "brightness(0.7)"
          : isActive
            ? "brightness(1.25)"
            : "brightness(1)",

      transition:
        "transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease",

      zIndex: isActive ? 10 : 2,
    };
  };

  const getConnectionStyle = (
    system: SystemId,
  ): CSSProperties => {
    const isActive =
      activeSystem === system;

    return {
      opacity:
        activeSystem === null
          ? 0.35
          : isActive
            ? 1
            : 0.08,

      transform: isActive
        ? "scale(1.02)"
        : "scale(1)",

      transition:
        "opacity 0.35s ease, transform 0.35s ease",
    };
  };

  const activeConfig =
    systems.find(
      (system) =>
        system.id === activeSystem,
    );

  return (
    <section
      className="vision"
      id="vision"
      aria-labelledby="vision-title"
    >
      {/* =====================================================
          VISION HEADER
      ===================================================== */}

      <div className="vision-header">
        <div className="vision-label">
          MKB UNIVERSE · LIVING TECHNOLOGY ECOSYSTEM
        </div>

        <h2 id="vision-title">
          Our Vision
        </h2>

        <p>
          A connected technological ecosystem
          designed to push the boundaries of
          intelligence, autonomy, exploration,
          and human progress.
        </p>
      </div>

      {/* =====================================================
          SYSTEM ARCHITECTURE
      ===================================================== */}

      <div
        className={`vision-system ${
          activeSystem
            ? `system-active-${activeSystem}`
            : ""
        }`}
      >
        {/* ===================================================
            CENTRAL PHOENIX CORE
        =================================================== */}

        <button
          type="button"
          className={`vision-core ${
            activeSystem
              ? `core-active-${activeSystem}`
              : ""
          }`}
          onClick={handleCoreReset}
          aria-label={
            activeSystem
              ? "Reset Phoenix Core selection"
              : "Phoenix Core"
          }
          title={
            activeSystem
              ? "Reset Phoenix Core"
              : "Phoenix Core"
          }
        >
          {/* Animated architectural rings */}

          <div
            className="core-ring ring-one"
            aria-hidden="true"
          />

          <div
            className="core-ring ring-two"
            aria-hidden="true"
          />

          <div
            className="core-ring ring-three"
            aria-hidden="true"
          />

          {/* Core center */}

          <div className="core-center">
            <span>
              PHOENIX
            </span>

            <strong>
              CORE
            </strong>

            {activeConfig ? (
              <small className="core-signal">
                {activeConfig.signal}
              </small>
            ) : (
              <small className="core-signal core-signal-idle">
                ∞
              </small>
            )}
          </div>
        </button>

        {/* ===================================================
            SYSTEM NODES
        =================================================== */}

        {systems.map((system) => {
          const isSelected =
            selectedSystem === system.id;

          const isActive =
            activeSystem === system.id;

          return (
            <article
              key={system.id}
              id={`vision-${system.id}`}
              className={`vision-node node-${system.id} ${
                isActive
                  ? "node-active"
                  : ""
              } ${
                isSelected
                  ? "node-selected"
                  : ""
              }`}
              style={getNodeStyle(
                system.id,
              )}
              onMouseEnter={() =>
                handleSystemEnter(
                  system.id,
                )
              }
              onMouseLeave={
                handleSystemLeave
              }
              onFocus={() =>
                handleSystemEnter(
                  system.id,
                )
              }
              onBlur={
                handleSystemLeave
              }
              onClick={() =>
                handleSystemSelect(
                  system.id,
                )
              }
              onKeyDown={(event) =>
                handleSystemKeyDown(
                  event,
                  system.id,
                )
              }
              tabIndex={0}
              role="button"
              aria-label={
                system.ariaLabel
              }
              aria-pressed={
                isSelected
              }
            >
              <span className="node-icon">
                {system.icon}
              </span>

              <small>
                {system.number} ·{" "}
                {system.category}
              </small>

              <h3>
                {system.title}
              </h3>

              <p>
                {system.description}
              </p>

              {isSelected && (
                <span className="node-status">
                  SYSTEM SELECTED
                </span>
              )}
            </article>
          );
        })}

        {/* ===================================================
            CONNECTING ENERGY LINES
        =================================================== */}

        {systems.map((system) => (
          <div
            key={`connection-${system.id}`}
            className={`connection connection-${system.id}`}
            style={getConnectionStyle(
              system.id,
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* =====================================================
          SYSTEM FOOTER
      ===================================================== */}

      <div className="vision-footer">
        <span>
          <i aria-hidden="true" />
          SYSTEM ARCHITECTURE
        </span>

        <span>
          INTELLIGENCE → AUTONOMY → EXPLORATION → EVOLUTION
        </span>
      </div>
    </section>
  );
}

export default Vision;