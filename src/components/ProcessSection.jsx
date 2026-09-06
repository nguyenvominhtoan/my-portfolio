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
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.2rem, 3.2vw, 3rem)",
              fontWeight: 400,
              color: "#d8d8d8",
              marginBottom: "3.8rem",
              textAlign: "left",
            }}
          >
            What I Do
          </h2>
        </Reveal>

        <div
          style={{
            borderTop: "1px solid #181818",
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
                  borderBottom: "1px solid #181818",
                  cursor: "none",
                  overflow: "hidden",

                  background: isActive
                    ? "rgba(255,255,255,0.018)"
                    : "transparent",

                  transition: "background 0.45s ease",
                }}
              >
                {/* TOP LINE */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "1px",
                    width: isActive ? "100%" : "0%",

                    background:
                      "linear-gradient(90deg, transparent, #555, transparent)",

                    transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",

                    pointerEvents: "none",
                  }}
                />

                {/* MAIN ROW */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr 40px",
                    alignItems: "center",

                    minHeight: "78px",

                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",

                    transform: isActive ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  {/* NUMBER */}
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      color: isActive ? "#777" : "#2a2a2a",
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
                      fontSize: "clamp(1.2rem, 1.7vw, 1.5rem)",
                      fontWeight: 400,
                      color: isActive ? "#d0d0d0" : "#555",
                      transition: "color 0.45s ease",
                    }}
                  >
                    {item.title}
                  </span>

                  {/* ARROW */}
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.8rem",
                      color: isActive ? "#aaa" : "#2a2a2a",
                      textAlign: "right",

                      transform: isActive
                        ? "translateX(-4px)"
                        : "translateX(0)",

                      transition:
                        "color 0.4s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {isActive ? "→" : "+"}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",

                    transition:
                      "grid-template-rows 0.55s cubic-bezier(0.16,1,0.3,1)",

                    paddingLeft: "60px",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        lineHeight: 1.8,
                        color: "#666",
                        maxWidth: "650px",

                        paddingBottom: "1.5rem",

                        opacity: isActive ? 1 : 0,

                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(-8px)",

                        transition:
                          "opacity 0.45s ease 0.05s, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Row>
    </Section>
  );
}
