import {
  useEffect,
  useMemo,
  useRef,
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
  colorClass: string;
  href: string;
};

const systems: SystemConfig[] = [
  {
    id: "ai",
    number: "01",
    category: "INTELLIGENCE",
    title: "Phoenix AI",
    description:
      "Reasoning · Automation · Intelligence",
    icon: "◈",
    signal: "INTELLIGENCE",
    ariaLabel: "Phoenix AI system",
    colorClass: "energy-ai",
    href: "#vision-ai",
  },
  {
    id: "robotics",
    number: "02",
    category: "AUTONOMY",
    title: "Robotics",
    description:
      "Machines · Control · Autonomous Systems",
    icon: "◇",
    signal: "AUTONOMY",
    ariaLabel: "Robotics system",
    colorClass: "energy-robotics",
    href: "#vision-robotics",
  },
  {
    id: "space",
    number: "03",
    category: "EXPLORATION",
    title: "Phoenix Space",
    description:
      "Space · Propulsion · Exploration",
    icon: "△",
    signal: "EXPLORATION",
    ariaLabel: "Phoenix Space system",
    colorClass: "energy-space",
    href: "#vision-space",
  },
  {
    id: "phoenix",
    number: "04",
    category: "EVOLUTION",
    title: "Phoenix Vision",
    description:
      "Innovation · Resilience · Human Progress",
    icon: "✦",
    signal: "EVOLUTION",
    ariaLabel: "Phoenix Vision system",
    colorClass: "energy-phoenix",
    href: "#vision-phoenix",
  },
];

/*
 * Orbital architecture is now synchronized
 * with the actual Phoenix system architecture.
 *
 * No unrelated NEURAL / QUANTUM / ORBITAL
 * terminology remains in the visible system.
 */
const orbitalLabels = [
  "INTELLIGENCE",
  "AUTONOMY",
  "EXPLORATION",
  "EVOLUTION",
  "PHOENIX",
  "CORE",
];

const orbitParticles = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

const orbitMarkers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
];

function Vision() {
  const [selectedSystem, setSelectedSystem] =
    useState<SystemId | null>(null);

  const [hoveredSystem, setHoveredSystem] =
    useState<SystemId | null>(null);

  const [corePulse, setCorePulse] =
    useState(false);

  const [systemCycle, setSystemCycle] =
    useState(0);

  const [orbitAngle, setOrbitAngle] =
    useState(0);

  const [isCoreFocused, setIsCoreFocused] =
    useState(false);

  const pulseTimeoutRef =
    useRef<number | null>(null);

  const activeSystem =
    hoveredSystem ?? selectedSystem;

  const activeConfig = useMemo(
    () =>
      systems.find(
        (system) =>
          system.id === activeSystem,
      ),
    [activeSystem],
  );

  /*
   * Phoenix system telemetry cycle.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSystemCycle(
        (current) => current + 1,
      );
    }, 1800);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * Orbital telemetry.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setOrbitAngle(
        (current) =>
          (current + 1) % 360,
      );
    }, 80);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * Cleanup pulse timer.
   */
  useEffect(() => {
    return () => {
      if (
        pulseTimeoutRef.current !== null
      ) {
        window.clearTimeout(
          pulseTimeoutRef.current,
        );
      }
    };
  }, []);

  const triggerCorePulse = (
    duration = 900,
  ) => {
    setCorePulse(true);

    if (
      pulseTimeoutRef.current !== null
    ) {
      window.clearTimeout(
        pulseTimeoutRef.current,
      );
    }

    pulseTimeoutRef.current =
      window.setTimeout(() => {
        setCorePulse(false);
        pulseTimeoutRef.current = null;
      }, duration);
  };

  const handleSystemEnter = (
    system: SystemId,
  ) => {
    setHoveredSystem(system);
    triggerCorePulse(700);
  };

  const handleSystemLeave = () => {
    setHoveredSystem(null);
  };

  const handleSystemFocus = (
    system: SystemId,
  ) => {
    setHoveredSystem(system);
    triggerCorePulse(700);
  };

  const handleSystemBlur = () => {
    setHoveredSystem(null);
  };

  const handleSystemSelect = (
    system: SystemId,
  ) => {
    setSelectedSystem(
      (current) =>
        current === system
          ? null
          : system,
    );

    triggerCorePulse(1000);
  };

  const handleSystemKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    system: SystemId,
  ) => {
    if (event.key === " ") {
      event.preventDefault();
      handleSystemSelect(system);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      handleCoreReset();
    }
  };

  const handleCoreReset = () => {
    setSelectedSystem(null);
    setHoveredSystem(null);
    setIsCoreFocused(false);
    triggerCorePulse(1200);
  };

  const handleCoreKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleCoreReset();
      return;
    }

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      triggerCorePulse(1200);
    }
  };

  const getNodeStyle = (
    system: SystemId,
  ): CSSProperties => {
    const isActive =
      activeSystem === system;

    const hasActiveSystem =
      activeSystem !== null;

    return {
      opacity:
        hasActiveSystem && !isActive
          ? 0.38
          : 1,

      filter:
        hasActiveSystem && !isActive
          ? "brightness(0.55) saturate(0.7)"
          : isActive
            ? "brightness(1.35) saturate(1.2)"
            : "brightness(1)",

      transition:
        "transform 0.45s cubic-bezier(.2,.8,.2,1), opacity 0.45s ease, filter 0.45s ease",

      zIndex: isActive ? 30 : 10,
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
          ? 0.42
          : isActive
            ? 1
            : 0.07,

      transform: isActive
        ? "scale(1.04)"
        : "scale(1)",

      transition:
        "opacity 0.45s ease, transform 0.45s ease",

      zIndex: isActive ? 8 : 3,
    };
  };

  /*
   * Live Phoenix telemetry values.
   */
  const telemetryValue =
    String(
      (systemCycle * 37) % 10000,
    ).padStart(4, "0");

  const orbitTelemetry =
    String(orbitAngle).padStart(3, "0");

  const networkStatus =
    activeSystem
      ? "LINKED"
      : "STANDBY";

  /*
   * The architecture always belongs
   * to the Phoenix evolution chain.
   */
  const architectureState =
    activeConfig?.signal ??
    "EVOLUTION";

  return (
    <section
      id="vision"
      className={`vision ${
        activeSystem
          ? `vision-active-${activeSystem}`
          : ""
      } ${
        corePulse
          ? "vision-core-pulse"
          : ""
      } ${
        isCoreFocused
          ? "vision-core-focused"
          : ""
      }`}
      aria-labelledby="vision-title"
    >
      {/* =====================================================
          VISION INTRO
          ===================================================== */}

      <div className="vision-header">
        <div className="vision-label">
          MKB UNIVERSE · PHOENIX VISION
        </div>

        <h2 id="vision-title">
          Our Vision
        </h2>

        <p>
          A living technological ecosystem
          where intelligence, autonomy,
          exploration and evolution operate
          as one continuously advancing
          Phoenix system.
        </p>
      </div>

      {/* =====================================================
          PHOENIX SYSTEM ARCHITECTURE
          ===================================================== */}

      <div
        className={`vision-system ${
          activeSystem
            ? `system-active-${activeSystem}`
            : ""
        }`}
        style={
          {
            "--vision-orbit-angle": `${orbitAngle}deg`,
          } as CSSProperties
        }
      >
        {/* =================================================
            ENVIRONMENT
            ================================================= */}

        <div
          className="vision-space-field"
          aria-hidden="true"
        />

        <div
          className="vision-grid"
          aria-hidden="true"
        />

        <div
          className="vision-grid-grid"
          aria-hidden="true"
        />

        {/* =================================================
            ORBITAL ARCHITECTURE
            ================================================= */}

        <div
          className="vision-orbit orbit-outer"
          aria-hidden="true"
        />

        <div
          className="vision-orbit orbit-middle"
          aria-hidden="true"
        />

        <div
          className="vision-orbit orbit-inner"
          aria-hidden="true"
        />

        <div
          className="vision-orbit orbit-quantum"
          aria-hidden="true"
        />

        {orbitalLabels.map(
          (label, index) => (
            <div
              key={label}
              className={`orbit-label orbit-label-${index + 1}`}
              aria-hidden="true"
            >
              <span>{label}</span>
            </div>
          ),
        )}

        {orbitParticles.map(
          (particle) => (
            <div
              key={particle}
              className={`orbit-particle particle-${particle}`}
              aria-hidden="true"
            />
          ),
        )}

        {/* =================================================
            PHOENIX CORE
            ================================================= */}

        <button
          type="button"
          className="vision-core"
          onClick={handleCoreReset}
          onKeyDown={handleCoreKeyDown}
          onFocus={() =>
            setIsCoreFocused(true)
          }
          onBlur={() =>
            setIsCoreFocused(false)
          }
          aria-label={
            activeSystem
              ? "Reset Phoenix Core selection"
              : "Phoenix Core"
          }
          aria-pressed={
            activeSystem !== null
          }
          title={
            activeSystem
              ? "Reset Phoenix Core"
              : "Phoenix Core"
          }
        >
          <div
            className="core-energy-field"
            aria-hidden="true"
          />

          <div
            className="core-energy-field core-energy-field-two"
            aria-hidden="true"
          />

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

          <div
            className="core-ring ring-four"
            aria-hidden="true"
          />

          <div
            className="core-energy-orbit"
            aria-hidden="true"
          >
            <span />
          </div>

          <div
            className="core-energy-orbit core-energy-orbit-two"
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="core-center">
            <span>
              PHOENIX
            </span>

            <strong>
              CORE
            </strong>

            <small className="core-signal">
              {activeConfig
                ? activeConfig.signal
                : "EVOLUTION"}
            </small>
          </div>

          <div
            className="core-pulse pulse-one"
            aria-hidden="true"
          />

          <div
            className="core-pulse pulse-two"
            aria-hidden="true"
          />

          <div
            className="core-pulse pulse-three"
            aria-hidden="true"
          />
        </button>

        {/* =================================================
            TELEMETRY
            ================================================= */}

        <div
          className="core-telemetry telemetry-top"
          aria-hidden="true"
        >
          <span>
            PHOENIX CORE
          </span>

          <b>
            ONLINE
          </b>
        </div>

        <div
          className="core-telemetry telemetry-left"
          aria-hidden="true"
        >
          <span>
            ENERGY FLOW
          </span>

          <b>
            {telemetryValue}
          </b>
        </div>

        <div
          className="core-telemetry telemetry-right"
          aria-hidden="true"
        >
          <span>
            SYSTEMS
          </span>

          <b>
            04 / 04
          </b>
        </div>

        <div
          className="core-telemetry telemetry-bottom"
          aria-hidden="true"
        >
          <span>
            EVOLUTION MATRIX
          </span>

          <b>
            {architectureState}
          </b>
        </div>

        <div
          className="core-telemetry telemetry-orbit"
          aria-hidden="true"
        >
          <span>
            ORBIT
          </span>

          <b>
            {orbitTelemetry}°
          </b>
        </div>

        <div
          className="core-telemetry telemetry-node"
          aria-hidden="true"
        >
          <span>
            NETWORK
          </span>

          <b>
            {networkStatus}
          </b>
        </div>

        {/* =================================================
            FOUR PHOENIX SYSTEM NODES
            ================================================= */}

        {systems.map((system) => {
          const isSelected =
            selectedSystem ===
            system.id;

          const isActive =
            activeSystem ===
            system.id;

          return (
            <a
              key={system.id}
              id={`vision-${system.id}`}
              href={system.href}
              className={`vision-node node-${system.id} ${system.colorClass} ${
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
                handleSystemFocus(
                  system.id,
                )
              }
              onBlur={
                handleSystemBlur
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
              aria-label={
                system.ariaLabel
              }
            >
              <span
                className="node-icon"
                aria-hidden="true"
              >
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

              <span
                className="node-energy-line"
                aria-hidden="true"
              />

              

              <span
                className="node-scan-line"
                aria-hidden="true"
              />

              <span
                className="node-data-stream"
                aria-hidden="true"
              >
                {system.number}
                {" // "}
                {system.category}
              </span>
            </a>
          );
        })}

        {/* =================================================
            ENERGY CONNECTIONS
            ================================================= */}

        {systems.map((system) => (
          <div
            key={`connection-${system.id}`}
            className={`connection connection-${system.id} ${
              activeSystem ===
              system.id
                ? "connection-active"
                : ""
            }`}
            style={getConnectionStyle(
              system.id,
            )}
            aria-hidden="true"
          >
            <span className="energy-particle" />

            <span className="energy-particle energy-particle-two" />

            <span className="energy-particle energy-particle-three" />
          </div>
        ))}

        {/* =================================================
            ORBITAL MARKERS
            ================================================= */}

        {orbitMarkers.map(
          (marker) => (
            <div
              key={marker}
              className={`orbit-marker marker-${marker}`}
              aria-hidden="true"
            >
              <span />
            </div>
          ),
        )}

        {/* =================================================
            PHOENIX NETWORK STATUS
            ================================================= */}

        <div
          className="system-status-rail"
          aria-hidden="true"
        >
          <span>
            <i />
            LIVE
          </span>

          <span>
            PHOENIX NETWORK
          </span>

          <span>
            NODE 04
          </span>
        </div>

        {/* =================================================
            DATA RAILS
            ================================================= */}

        <div
          className="core-data-rail rail-left"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className="core-data-rail rail-right"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        
      </div>

      {/* =====================================================
          ARCHITECTURE FOOTER
          ===================================================== */}

      <div className="vision-footer">
        <span>
          <i aria-hidden="true" />
          SYSTEM ARCHITECTURE
        </span>

        <span>
          INTELLIGENCE → AUTONOMY → EXPLORATION → EVOLUTION
        </span>

        <span>
          PHOENIX NETWORK · ETERNAL
        </span>
      </div>
    </section>
  );
}

export default Vision;