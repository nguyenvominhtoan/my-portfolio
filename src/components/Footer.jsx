import Row from "./layouts/Row";
import { ME } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{ width: "100%", borderTop: "1px solid #141414" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.2rem",
          paddingTop: "1.6rem",
          paddingBottom: "1.6rem",
        }}
      >
        <a
          href="#"
          data-h
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "0.95rem",
            color: "#252525",
          }}
        >
          {ME.handle}
        </a>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.55rem",
            color: "#1e1e1e",
            letterSpacing: "0.12em",
          }}
        >
          © {new Date().getFullYear()} {ME.name.toUpperCase()}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.55rem",
            color: "#1e1e1e",
            letterSpacing: "0.12em",
          }}
        >
          BUILT WITH REACT
        </span>
      </Row>
    </footer>
  );
}
