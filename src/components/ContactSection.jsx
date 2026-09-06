import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { ME } from "../data/constants";

export default function ContactSection() {
  return (
    <Section id="contact" extraStyle={{ paddingBottom: "8rem" }}>
      <Row>
        <Reveal>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.62rem",
              color: "#2a2a2a",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "2.2rem",
            }}
          >
            Let's work together
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            data-h
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1px #303030",
              marginBottom: "5rem",
              transition: "color 0.35s, -webkit-text-stroke 0.35s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.WebkitTextStroke = "0px";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "transparent";
              e.target.style.WebkitTextStroke = "1px #303030";
            }}
          >
            Let's build
            <br />
            something great.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2.5rem",
              borderTop: "1px solid #181818",
              paddingTop: "3.2rem",
            }}
          >
            {[
              ["Email", ME.email, `mailto:${ME.email}`],
              ["Website", ME.website, `https://${ME.website}`],
              ["Phone", ME.phone, `tel:${ME.phone}`],
              ["Location", ME.location, null],
            ].map(([l, val, h]) => (
              <div key={l}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#2a2a2a",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {l}
                </p>
                {h ? (
                  <a
                    href={h}
                    data-h
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#555",
                      borderBottom: "1px solid #1e1e1e",
                      paddingBottom: "3px",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#e0e0e0";
                      e.target.style.borderBottomColor = "#555";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#555";
                      e.target.style.borderBottomColor = "#1e1e1e";
                    }}
                  >
                    {val}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#333",
                    }}
                  >
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </Section>
  );
}
