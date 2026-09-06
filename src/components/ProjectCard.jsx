import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function ProjectCard({ p, i }) {
  const [ref, v] = useInView(0.06);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(32px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${
          i * 0.12
        }s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.6rem",
          marginBottom: "1.3rem",
          paddingBottom: "1.3rem",
          borderBottom: "1px solid #181818",
        }}
      >
        {[
          ["Client /", p.client],
          ["Field /", p.field],
          ["Role /", p.role],
        ].map(([l, val]) => (
          <div key={l}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                color: "#2a2a2a",
                letterSpacing: "0.12em",
                marginBottom: "6px",
              }}
            >
              {l}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.76rem",
                color: "#666",
              }}
            >
              {val}
            </p>
          </div>
        ))}
      </div>

      <div
        data-h
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          width: "100%",
          paddingBottom: "52%",
          position: "relative",
          background: p.bg,
          border: `1px solid ${hov ? "#2a2a2a" : "#181818"}`,
          marginBottom: "1.5rem",
          transition: "border-color 0.3s",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 2.2vw, 2.1rem)",
              color: "#252525",
            }}
          >
            {p.client}
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "#1e1e1e",
              letterSpacing: "0.1em",
            }}
          >
            {p.stack}
          </p>
        </div>

        {hov && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(12,12,12,0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: "#ccc",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              View Project →
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "3rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              color: "#2a2a2a",
              marginBottom: "8px",
            }}
          >
            {p.num}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "#555",
              lineHeight: 1.85,
              maxWidth: "58ch",
            }}
          >
            {p.desc}
          </p>
        </div>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            color: "#2a2a2a",
            flexShrink: 0,
          }}
        >
          {p.year}
        </span>
      </div>
    </div>
  );
}
