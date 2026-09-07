import { useState } from "react";

import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { PROCESS } from "../data/constants";

export default function ProcessSection() {
  const [active, setActive] = useState(null);

  return (
    <Section
      id="process"
      extraStyle={{
        minHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Row
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* ================= HEADER ================= */}

        <div
          style={{
            width: "100%",
            marginBottom: "3.5rem",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(2.6rem, 4vw, 4rem)",
                  fontWeight: 400,
                  color: "#d8d8d8",
                  margin: 0,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                }}
              >
                What I Do
              </h2>

              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.55rem",
                  color: "#333",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Process
              </span>
            </div>
          </Reveal>
        </div>

        {/* ================= PROCESS LIST ================= */}

        <div
          style={{
            width: "100%",
            borderTop: "1px solid #1b1b1b",
          }}
        >
          {PROCESS.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  position: "relative",
                  borderBottom: "1px solid #1b1b1b",
                  overflow: "hidden",
                  cursor: "none",
                  background: isActive
                    ? "rgba(255,255,255,0.018)"
                    : "transparent",
                  transition: "background 0.45s ease",
                }}
              >
                {/* ACTIVE LINE */}

                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: "1px",
                    background: "linear-gradient(90deg, #555, transparent)",
                    transition: "width 0.75s cubic-bezier(0.16,1,0.3,1)",
                    pointerEvents: "none",
                  }}
                />

                {/* MAIN ROW */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr 40px",
                    alignItems: "center",
                    minHeight: "clamp(82px, 7vw, 105px)",
                    transform: isActive ? "translateX(10px)" : "translateX(0)",
                    transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* NUMBER */}

                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      color: isActive ? "#999" : "#333",
                      letterSpacing: "0.08em",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {item.num}
                  </span>

                  {/* TITLE */}

                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "clamp(1.7rem, 2.8vw, 2.8rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                      color: isActive ? "#e5e5e5" : "#555",
                      letterSpacing: "-0.015em",
                      transition: "color 0.5s ease",
                    }}
                  >
                    {item.title}
                  </span>

                  {/* ARROW - CHỈ HIỆN KHI HOVER */}

                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.9rem",
                      color: "#aaa",
                      textAlign: "right",

                      opacity: isActive ? 1 : 0,

                      transform: isActive
                        ? "translateX(-4px)"
                        : "translateX(6px)",

                      transition:
                        "opacity 0.35s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    ↗
                  </span>
                </div>

                {/* ================= DESCRIPTION ================= */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    transition:
                      "grid-template-rows 0.6s cubic-bezier(0.16,1,0.3,1)",
                    paddingLeft: "60px",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        paddingBottom: "1.7rem",
                        paddingRight: "3rem",

                        opacity: isActive ? 1 : 0,

                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(-12px)",

                        transition:
                          "opacity 0.45s ease 0.08s, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.82rem",
                          lineHeight: 1.8,
                          color: "#777",
                          maxWidth: "650px",
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= FOOTER ================= */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.8rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              color: "#333",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            How I work
          </span>

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              color: "#333",
              letterSpacing: "0.1em",
            }}
          >
            {active !== null
              ? `${String(active + 1).padStart(2, "0")} / ${String(
                  PROCESS.length
                ).padStart(2, "0")}`
              : `01 — ${String(PROCESS.length).padStart(2, "0")}`}
          </span>
        </div>
      </Row>
    </Section>
  );
}
