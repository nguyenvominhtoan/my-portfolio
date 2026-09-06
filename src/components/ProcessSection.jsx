import { useState } from "react";
import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { PROCESS, ME } from "../data/constants";

export default function ProcessSection() {
  const [open, setOpen] = useState(null);

  return (
    <Section>
      <Row>
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "3.8rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              data-h
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                fontWeight: 400,
                color: "#e0e0e0",
              }}
            >
              What I Do
            </h2>
            <a
              href={`mailto:${ME.email}`}
              data-h
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: "#3a3a3a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid #1e1e1e",
                paddingBottom: "2px",
              }}
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        {PROCESS.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.05}>
            <div
              data-h
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                borderTop: "1px solid #1a1a1a",
                padding: "1.7rem 0",
                cursor: "pointer",
                ...(i === PROCESS.length - 1 && {
                  borderBottom: "1px solid #1a1a1a",
                }),
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1.8rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#2a2a2a",
                      minWidth: "28px",
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "clamp(1.05rem, 1.9vw, 1.55rem)",
                      fontWeight: 400,
                      color: open === i ? "#e0e0e0" : "#666",
                      transition: "color 0.25s",
                    }}
                  >
                    {p.title}
                  </span>
                </div>
                <span
                  style={{
                    color: "#2a2a2a",
                    fontSize: "1.2rem",
                    display: "inline-block",
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  +
                </span>
              </div>

              <div
                style={{
                  maxHeight: open === i ? "220px" : "0",
                  overflow: "hidden",
                  opacity: open === i ? 1 : 0,
                  transition: "max-height 0.45s ease, opacity 0.35s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#555",
                    lineHeight: 1.9,
                    paddingTop: "1.1rem",
                    paddingLeft: "3rem",
                    maxWidth: "62ch",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </Row>
    </Section>
  );
}
