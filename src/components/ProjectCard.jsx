import { useState } from "react";
import { Reveal } from "../hooks/useInView";

export default function ProjectCard({ p, i }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal>
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
          minWidth: 0,
        }}
      >
        {/* IMAGE FRAME */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            background: p.bg || "#111",
            border: "none",
            outline: "none",
            boxShadow: isHovered
              ? "0 30px 70px -35px rgba(0,0,0,0.95)"
              : "none",
            transition: "box-shadow 0.6s ease",
          }}
        >
          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${p.client} project`}
              style={{
                position: "absolute",
                inset: 0,
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                textDecoration: "none",
                cursor: "none",
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.client} project preview`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: p.fit || "cover",
                    objectPosition: p.objectPosition || "center center",
                    display: "block",
                    transform: isHovered ? "scale(1.045)" : "scale(1)",
                    filter: isHovered
                      ? "brightness(1.02) contrast(1.05) saturate(1.02)"
                      : "brightness(0.84) contrast(1.03) saturate(0.94)",
                    transition:
                      "transform 1.1s cubic-bezier(0.16,1,0.3,1), filter 0.7s ease",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform, filter",
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                      radial-gradient(
                        circle at 30% 30%,
                        ${p.bg || "#222"},
                        #080808 72%
                      )
                    `,
                    transform: isHovered ? "scale(1.045)" : "scale(1)",
                    transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              )}

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isHovered
                    ? "rgba(0,0,0,0.04)"
                    : "rgba(0,0,0,0.15)",
                  transition: "background 0.6s ease",
                  pointerEvents: "none",
                }}
              />

              {/* Project number */}
              <span
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  left: "1.2rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.55rem",
                  color: isHovered
                    ? "rgba(255,255,255,0.82)"
                    : "rgba(255,255,255,0.48)",
                  letterSpacing: "0.1em",
                  opacity: isHovered ? 1 : 0.8,
                  transform: isHovered ? "translateY(0)" : "translateY(-5px)",
                  transition:
                    "opacity 0.4s ease, color 0.4s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                  pointerEvents: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Center arrow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "46px",
                  height: "46px",
                  border: "1px solid rgba(255,255,255,0.55)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? "translate(-50%, -50%) scale(1)"
                    : "translate(-50%, -50%) scale(0.7)",
                  transition:
                    "opacity 0.4s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.8rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  ↗
                </span>
              </div>

              {/* View Project */}
              <span
                style={{
                  position: "absolute",
                  right: "1.2rem",
                  bottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.58rem",
                  color: "#fff",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition:
                    "opacity 0.4s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                  pointerEvents: "none",
                }}
              >
                View Project
                <span style={{ fontSize: "0.8rem", lineHeight: 1 }}>↗</span>
              </span>
            </a>
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.client} project preview`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: p.fit || "cover",
                    objectPosition: p.objectPosition || "center center",
                    display: "block",
                    transform: isHovered ? "scale(1.045)" : "scale(1)",
                    filter: isHovered
                      ? "brightness(1.02) contrast(1.05) saturate(1.02)"
                      : "brightness(0.84) contrast(1.03) saturate(0.94)",
                    transition:
                      "transform 1.1s cubic-bezier(0.16,1,0.3,1), filter 0.7s ease",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform, filter",
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: p.bg || "#111",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.15)",
                  pointerEvents: "none",
                }}
              />
            </div>
          )}
        </div>

        {/* PROJECT INFORMATION */}
        <div style={{ marginTop: "1.4rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1.5rem",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.55rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.5rem",
                    color: isHovered ? "#888" : "#444",
                    letterSpacing: "0.08em",
                    transition: "color 0.4s ease",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>

                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.48rem",
                    color: "#3b3b3b",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.category}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: isHovered ? "#e5e5e5" : "#c5c5c5",
                  margin: 0,
                  transition: "color 0.45s ease",
                }}
              >
                {p.client}
              </h3>
            </div>

            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.5rem",
                color: "#3b3b3b",
                letterSpacing: "0.08em",
                paddingTop: "0.2rem",
                whiteSpace: "nowrap",
              }}
            >
              {p.year}
            </span>
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.75,
              fontWeight: 300,
              color: "#626262",
              maxWidth: "52ch",
              margin: "1rem 0 0",
            }}
          >
            {p.desc}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.6rem 1.2rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.5rem",
                color: "#3d3d3d",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {p.stack}
            </span>
          </div>

          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                color: "#777",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginTop: "1.1rem",
              }}
            >
              View Project ↗
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
