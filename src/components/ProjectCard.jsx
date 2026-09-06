import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function ProjectCard({ p, i }) {
  const [ref, v] = useInView(0.06);
  const [hov, setHov] = useState(false);

  // Inject CSS cho responsive meta-data và các hiệu ứng nâng cao
  const injectStyles = `
    .meta-grid-${i} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.6rem;
    }

    .project-desc-box-${i} {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
    }

    /* FIX MỜ: Đưa ảnh về tâm, dùng contain và giới hạn kích thước để giữ nguyên pixel gốc */
    .img-transform-${i} {
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      max-width: 82%;   /* Tạo khoảng đệm bao quanh giúp ảnh trông như một mockup đặt trong khung */
      max-height: 82%;
      object-fit: contain;
      transform: translate(-50%, -50%) scale(1);
      transition:
        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.5s ease;
    }

    @media (max-width: 640px) {
      .meta-grid-${i} {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }

      .project-desc-box-${i} {
        flex-direction: column !important;
        gap: 1rem !important;
      }

      .img-transform-${i} {
        max-width: 90%;
        max-height: 90%;
      }
    }
  `;

  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(32px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${
          i * 0.12
        }s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
        marginBottom: "4.5rem",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: injectStyles }} />

      {/* ─── METADATA (CLIENT / FIELD / ROLE) ─── */}
      <div
        className={`meta-grid-${i}`}
        style={{
          marginBottom: "1.3rem",
          paddingBottom: "1.3rem",
          borderBottom: "1px solid #141414",
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
                color: "#444",
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
                color: "#888",
              }}
            >
              {val}
            </p>
          </div>
        ))}
      </div>

      {/* ─── VISUAL IMAGE CONTAINER ─── */}
      <div
        data-h="project"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          width: "100%",
          paddingBottom: "52%",
          position: "relative",
          background: p.bg || "#0a0a0a", // Nền card sáng hơn nền web #000 một chút để đổ khối tương phản

          border: `1px solid ${hov ? "rgba(255,255,255,0.18)" : "#141414"}`,

          boxShadow: hov ? "0 25px 50px -12px rgba(0,0,0,0.85)" : "none",

          marginBottom: "1.5rem",

          transition: "border-color 0.4s ease, box-shadow 0.4s ease",

          overflow: "hidden",
          borderRadius: "6px",
        }}
      >
        {/* 1. ẢNH DỰ ÁN (ĐÃ FIX MỜ) */}
        {p.image ? (
          <img
            src={p.image}
            alt={p.client}
            className={`img-transform-${i}`}
            style={{
              // Zoom nhẹ tinh tế (1.03) để ảnh không bị vỡ hạt điểm ảnh khi hover
              transform: hov
                ? "translate(-50%, -50%) scale(1.03)"
                : "translate(-50%, -50%) scale(1)",
              // Hiện rõ nét 100% màu gốc căng chi tiết khi di chuột vào
              filter: hov
                ? "grayscale(0%) brightness(1) contrast(1)"
                : "grayscale(25%) brightness(0.7) contrast(0.95)",
            }}
          />
        ) : (
          /* Backup fallback */
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(
                135deg,
                ${p.bg} 0%,
                #080808 100%
              )`,
              opacity: hov ? 0.9 : 0.6,
              transition: "opacity 0.4s",
            }}
          />
        )}

        {/* 2. TEXT LAYER TRÊN ẢNH (Tự động ẩn hẳn khi hover để khoe ảnh nét) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            zIndex: 2,
            pointerEvents: "none",

            opacity: hov ? 0 : 1,

            transform: hov ? "translateY(-15px)" : "translateY(0px)",

            transition:
              "opacity 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 2.5vw, 2.3rem)",
              color: "#fff",
              textShadow: "0 2px 10px rgba(0,0,0,0.55)",
            }}
          >
            {p.client}
          </p>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "#888",
              letterSpacing: "0.1em",
            }}
          >
            {p.stack}
          </p>
        </div>

        {/* 3. HOVER ACTION */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hov ? "rgba(0, 0, 0, 0.3)" : "transparent",

            opacity: hov ? 1 : 0,

            transform: hov ? "translateY(0px)" : "translateY(15px)",

            transition:
              "opacity 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",

            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              color: "#fff",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              borderBottom: "1px solid #fff",
              paddingBottom: "4px",
            }}
          >
            View Project →
          </span>
        </div>
      </div>

      {/* ─── BOTTOM DATA (DESC / NUM / YEAR) ─── */}
      <div className={`project-desc-box-${i}`}>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              color: "#444",
              marginBottom: "8px",
            }}
          >
            {p.num}
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#999",
              lineHeight: 1.8,
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
            color: "#555",
            flexShrink: 0,
          }}
        >
          {p.year}
        </span>
      </div>
    </div>
  );
}
