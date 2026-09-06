import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";

export default function IntroStatement() {
  return (
    <Section>
      <Row>
        <Reveal>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.62rem",
              color: "#2a2a2a",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "2.8rem",
            }}
          >
            For developers who need their work to speak clearly
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#555",
              maxWidth: "52ch",
            }}
          >
            Most developers build things that work. The challenge is building
            things that are also clear, maintainable, and aligned with what the
            product actually needs.{" "}
            <span style={{ color: "#e0e0e0" }}>
              I focus on both — clean code and deliberate architecture — so
              products can grow without breaking.
            </span>
          </p>
        </Reveal>
      </Row>
    </Section>
  );
}
