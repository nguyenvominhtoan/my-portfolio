import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          setDone(true);

          setTimeout(() => {
            onFinish();
          }, 700);
        }, 450);
      }

      setProgress(Math.min(100, Math.floor(current)));
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,

        background: "#0c0c0c",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden",

        opacity: done ? 0 : 1,
        transform: done ? "scale(1.025)" : "scale(1)",

        transition:
          "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",

        pointerEvents: done ? "none" : "auto",
      }}
    >
      {/* SUBTLE GRID */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "90px 90px",

          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",

          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",

          pointerEvents: "none",
        }}
      />

      {/* LARGE BACKGROUND CIRCLE */}
      <div
        style={{
          position: "absolute",

          width: "clamp(360px, 55vw, 760px)",
          height: "clamp(360px, 55vw, 760px)",

          borderRadius: "50%",

          border: "1px solid rgba(255,255,255,0.025)",

          transform: `scale(${0.85 + progress / 650})`,

          transition: "transform 1s cubic-bezier(0.16,1,0.3,1)",

          pointerEvents: "none",
        }}
      >
        {/* INNER CIRCLE */}
        <div
          style={{
            position: "absolute",
            inset: "18%",

            borderRadius: "50%",

            border: "1px solid rgba(255,255,255,0.018)",
          }}
        />

        {/* INNER CIRCLE */}
        <div
          style={{
            position: "absolute",
            inset: "38%",

            borderRadius: "50%",

            border: "1px solid rgba(255,255,255,0.015)",
          }}
        />
      </div>

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "min(520px, 72vw)",
        }}
      >
        {/* SMALL INDEX */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.55rem",
            color: "#3a3a3a",
            letterSpacing: "0.2em",

            marginBottom: "1.4rem",

            opacity: progress > 0 ? 1 : 0,

            transition: "opacity 0.5s ease",
          }}
        >
          00 / 100
        </div>

        {/* NUMBER */}
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",

            fontSize: "clamp(6rem, 19vw, 14rem)",

            fontWeight: 400,

            lineHeight: 0.8,

            letterSpacing: "-0.045em",

            color: "#e8e8e8",

            minWidth: "2.8ch",

            textAlign: "center",

            fontVariantNumeric: "tabular-nums",

            transform: progress === 100 ? "translateY(-8px)" : "translateY(0)",

            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {progress}%
        </div>

        {/* PROGRESS */}
        <div
          style={{
            position: "relative",

            width: "100%",

            height: "1px",

            background: "#1c1c1c",

            marginTop: "2.4rem",

            overflow: "visible",
          }}
        >
          {/* PROGRESS LINE */}
          <div
            style={{
              position: "absolute",

              left: 0,
              top: 0,

              height: "1px",

              width: `${progress}%`,

              background: "#e0e0e0",

              transition: "width 0.15s ease",

              boxShadow:
                progress > 0 ? "0 0 12px rgba(255,255,255,0.18)" : "none",
            }}
          />

          {/* PROGRESS DOT */}
          <div
            style={{
              position: "absolute",

              left: `${progress}%`,
              top: "50%",

              width: "5px",
              height: "5px",

              borderRadius: "50%",

              background: "#fff",

              transform: "translate(-50%, -50%)",

              opacity: progress > 0 ? 1 : 0,

              boxShadow: "0 0 12px rgba(255,255,255,0.45)",

              transition: "left 0.15s ease, opacity 0.3s ease",
            }}
          />
        </div>

        {/* BOTTOM MARK */}
        <div
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "space-between",

            marginTop: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              color: "#2d2d2d",
              letterSpacing: "0.14em",
            }}
          >
            0
          </span>

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              color: "#2d2d2d",
              letterSpacing: "0.14em",
            }}
          >
            100
          </span>
        </div>
      </div>
    </div>
  );
}
