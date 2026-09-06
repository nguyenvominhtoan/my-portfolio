import Row from "./layouts/Row";
import { ME } from "../data/constants";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        borderBottom: "1px solid #181818",
        background: "rgba(12,12,12,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <a
          href="#"
          data-h
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.05rem",
            color: "#e0e0e0",
          }}
        >
          {ME.handle}
        </a>

        <div style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}>
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              data-h
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "#555",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#e0e0e0")}
              onMouseOut={(e) => (e.target.style.color = "#555")}
            >
              {l}
            </a>
          ))}

          {/* <a
            href={`mailto:${ME.email}`}
            data-h
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "#0c0c0c",
              background: "#e0e0e0",
              padding: "8px 20px",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#fff")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#e0e0e0")}
          >
            Get in touch
          </a> */}
        </div>
      </Row>
    </nav>
  );
}
