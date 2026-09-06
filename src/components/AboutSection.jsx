import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { ME, SKILLS, EXPERIENCE, EDU } from "../data/constants";

export default function AboutSection() {
  return (
    <Section id="about">
      <Row>
        <Reveal>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.62rem",
              color: "#2a2a2a",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "3.8rem",
            }}
          >
            About
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6vw",
            alignItems: "start",
          }}
        >
          <div>
            <Reveal delay={0.08}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: 1.95,
                  marginBottom: "2.8rem",
                }}
              >
                {ME.about}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <blockquote
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
                  color: "#666",
                  lineHeight: 1.7,
                  paddingLeft: "1.4rem",
                  borderLeft: "1px solid #282828",
                }}
              >
                "{ME.aboutQuote}"
              </blockquote>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.12}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  color: "#2a2a2a",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "1.3rem",
                }}
              >
                Technical Skills
              </p>

              {SKILLS.map((s) => (
                <div
                  key={s.cat}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90px 1fr",
                    gap: "1.1rem",
                    padding: "0.9rem 0",
                    borderBottom: "1px solid #141414",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.55rem",
                      color: "#2a2a2a",
                      paddingTop: "3px",
                    }}
                  >
                    {s.cat}
                  </span>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                  >
                    {s.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          color: "#666",
                          border: "1px solid #1e1e1e",
                          padding: "3px 9px",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  color: "#2a2a2a",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "2.8rem 0 1.3rem",
                }}
              >
                Experience
              </p>

              {EXPERIENCE.map((e) => (
                <div
                  key={e.company}
                  style={{
                    borderBottom: "1px solid #141414",
                    paddingBottom: "1.5rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        color: "#888",
                      }}
                    >
                      {e.company}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#2a2a2a",
                      }}
                    >
                      {e.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      color: "#333",
                      letterSpacing: "0.06em",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {e.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "#444",
                      lineHeight: 1.85,
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              ))}

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  color: "#2a2a2a",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "2.2rem 0 1.3rem",
                }}
              >
                Education
              </p>

              {EDU.map((ed) => (
                <div
                  key={ed.school}
                  style={{
                    borderBottom: "1px solid #141414",
                    padding: "0.9rem 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        color: "#666",
                      }}
                    >
                      {ed.school}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#2a2a2a",
                      }}
                    >
                      {ed.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      color: "#2a2a2a",
                    }}
                  >
                    {ed.degree}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Row>
    </Section>
  );
}
