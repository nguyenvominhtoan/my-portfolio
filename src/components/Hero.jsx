import { useEffect, useState } from "react";

import Row from "./layouts/Row";

import { ME } from "../data/constants";

export default function Hero() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 150);

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0c0c0c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SUBTLE HERO GRID */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",

          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "90px 90px",

          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 75%)",

          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 75%)",
        }}
      />

      {/* HERO DECORATIVE CIRCLE */}
      <div
        style={{
          position: "absolute",
          width: "clamp(280px, 38vw, 600px)",
          height: "clamp(280px, 38vw, 600px)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.025)",
          right: "-10%",
          top: "8%",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "15%",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.018)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "32%",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.015)",
          }}
        />
      </div>

      <Row
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* BADGE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "clamp(1.8rem, 3vw, 2.5rem)",
            opacity: on ? 1 : 0,
            transition: "opacity 0.8s ease 0.4s",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#e0e0e0",
              display: "inline-block",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              color: "#444",
              letterSpacing: "0.18em",
            }}
          >
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* HEADLINE */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "1.4rem",
          }}
        >
          <h1
            data-h
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.8rem, 7.5vw, 6.8rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#e8e8e8",
              animation: on
                ? "slideUp 1.15s cubic-bezier(0.16,1,0.3,1) 0.15s both"
                : "none",
            }}
          >
            {ME.hero}
          </h1>
        </div>

        {/* SUB */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "clamp(2.2rem, 4vw, 3.2rem)",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
              color: "#555",
              lineHeight: 1.85,
              maxWidth: "46ch",
              animation: on
                ? "slideUp 1.05s cubic-bezier(0.16,1,0.3,1) 0.32s both"
                : "none",
            }}
          >
            {ME.heroSub}
          </p>
        </div>

        {/* CTA — GIỮ NHƯ CŨ NHƯNG BỎ GẠCH */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            paddingTop: "1.8rem",
            opacity: on ? 1 : 0,
            transition: "opacity 0.9s ease 0.95s",
          }}
        >
          {/* 
          <a
            href={`mailto:${ME.email}`}
            data-h
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.09em",
              color: "#0c0c0c",
              background: "#e0e0e0",
              padding: "12px 26px",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#fff")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#e0e0e0")
            }
          >
            Request a call →
          </a>

          <a
            href="#work"
            data-h
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.09em",
              color: "#555",
              textTransform: "uppercase",
              borderBottom: "1px solid #282828",
              paddingBottom: "3px",
            }}
          >
            View work
          </a>
          */}
        </div>
      </Row>

      {/* SCROLL DOWN — GÓC PHẢI DƯỚI */}
      <span
        style={{
          position: "absolute",
          right: "clamp(2rem, 7vw, 7rem)",
          bottom: "clamp(2rem, 4vw, 3.5rem)",

          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8rem",
          color: "#2a2a2a",
          letterSpacing: "0.12em",

          opacity: on ? 1 : 0,
          transform: on ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.9s ease 1.1s, transform 0.9s ease 1.1s",
        }}
      >
        Scroll Down ↓
      </span>
    </section>
  );
}
