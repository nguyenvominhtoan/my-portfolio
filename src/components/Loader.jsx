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
          setTimeout(onFinish, 700);
        }, 400);
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
        opacity: done ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <div
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(5rem, 18vw, 12rem)",
          fontWeight: 400,
          color: "#e8e8e8",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
        }}
      >
        {progress}%
      </div>

      <div
        style={{
          width: "min(280px, 60vw)",
          height: 1,
          background: "#1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${progress}%`,
            background: "#e0e0e0",
            transition: "width 0.15s ease",
          }}
        />
      </div>

      {/* <p
        style={{
          marginTop: "1.8rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          color: "#444",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}
      >
        Loading {progress}%
      </p> */}
    </div>
  );
}
