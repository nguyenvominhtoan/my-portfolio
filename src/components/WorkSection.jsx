import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { PROJECTS } from "../data/constants";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Section
      id="work"
      extraStyle={{
        paddingTop: "clamp(6rem, 10vw, 9rem)",
        paddingBottom: "clamp(7rem, 12vw, 11rem)",
      }}
    >
      <Row style={{ width: "100%" }}>
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            marginBottom: "clamp(4rem, 7vw, 6.5rem)",
          }}
        >
          <Reveal>
            <div
              className="work-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    color: "#444",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    margin: "0 0 1.2rem",
                  }}
                >
                  /Selected work
                </p>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(3.2rem, 6vw, 5rem)",
                    fontWeight: 400,
                    lineHeight: 0.9,
                    letterSpacing: "-0.035em",
                    color: "#d8d8d8",
                    margin: 0,
                  }}
                >
                  Selected Work
                </h2>
              </div>

              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.56rem",
                  color: "#333",
                  letterSpacing: "0.1em",
                  paddingBottom: "0.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                {String(PROJECTS.length).padStart(2, "0")} PROJECTS
              </span>
            </div>
          </Reveal>
        </div>

        {/* PROJECT GRID */}
        <div
          className="work-project-grid"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            columnGap: "clamp(1.5rem, 3.5vw, 4rem)",
            rowGap: "clamp(5rem, 8vw, 8rem)",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num || i} p={p} i={i} />
          ))}
        </div>

        {/* FOOTER */}
        <div
          style={{
            width: "100%",
            marginTop: "clamp(6rem, 10vw, 10rem)",
            paddingTop: "1.5rem",
            borderTop: "1px solid #181818",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            Selected projects
          </span>

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              color: "#333",
              letterSpacing: "0.1em",
            }}
          >
            2024 — 2026
          </span>
        </div>
      </Row>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 800px) {
            .work-project-grid {
              grid-template-columns: 1fr !important;
              row-gap: 5rem !important;
            }

            .work-header {
              align-items: flex-start !important;
            }
          }

          @media (max-width: 600px) {
            .work-project-grid {
              row-gap: 4.5rem !important;
            }

            .work-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem !important;
            }

            .work-header > span {
              align-self: flex-start;
            }

            article > div:first-child {
              aspect-ratio: 16 / 10 !important;
            }
          }
        `}
      </style>
    </Section>
  );
}
