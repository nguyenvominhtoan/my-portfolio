import { STRIP } from "../data/constants";

export default function Marquee() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid #181818",
        borderBottom: "1px solid #181818",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 30s linear infinite",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "3rem",
              letterSpacing: "0.18em",
              color: "#222",
              paddingRight: "3.5rem",
            }}
          >
            {STRIP}
          </span>
        ))}
      </div>
    </div>
  );
}
