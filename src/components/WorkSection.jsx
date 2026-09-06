import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { PROJECTS } from "../data/constants";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Section id="work">
      <Row>
        <Reveal>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#2a2a2a",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "3.8rem",
            }}
          >
            /Selected work
          </p>
        </Reveal>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "5.5rem" }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} />
          ))}
        </div>
      </Row>
    </Section>
  );
}
