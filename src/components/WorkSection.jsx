import { useEffect, useRef, useState } from "react";

import Section from "./layouts/Section";
import Row from "./layouts/Row";
import { Reveal } from "../hooks/useInView";
import { PROJECTS } from "../data/constants";

export default function WorkSection() {
  const workRef = useRef(null);

  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  const projects = PROJECTS.slice(0, 4);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!workRef.current) return;

      const rect = workRef.current.getBoundingClientRect();

      const insideWork = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;

      if (!insideWork) return;

      if (locked) {
        e.preventDefault();
        return;
      }

      // ================= SCROLL DOWN =================

      if (e.deltaY > 0) {
        if (active < projects.length - 1) {
          e.preventDefault();

          setLocked(true);
          setActive((prev) => prev + 1);
          setImageHover(false);

          setTimeout(() => {
            setLocked(false);
          }, 900);
        }

        return;
      }

      // ================= SCROLL UP =================

      if (e.deltaY < 0) {
        if (active > 0) {
          e.preventDefault();

          setLocked(true);
          setActive((prev) => prev - 1);
          setImageHover(false);

          setTimeout(() => {
            setLocked(false);
          }, 900);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [active, locked, projects.length]);

  return (
    <div
      ref={workRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background: "#0c0c0c",
        }}
      >
        <Section
          id="work"
          extraStyle={{
            width: "100%",
            height: "100vh",
            minHeight: "100vh",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Row
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* ==================================================
                HEADER
            ================================================== */}

            <div
              style={{
                position: "absolute",
                top: "clamp(2rem, 5vw, 4rem)",
                left: "4%",
                right: "4%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <Reveal>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.64rem",
                    color: "#444",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  /Selected work
                </p>
              </Reveal>

              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  color: "#333",
                  letterSpacing: "0.08em",
                }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* ==================================================
                MAIN
            ================================================== */}

            <div
              style={{
                width: "96%",
                maxWidth: "1500px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: "clamp(2.5rem, 5vw, 7rem)",
                alignItems: "center",
              }}
            >
              {/* ==================================================
                  LEFT — PROJECT LIST
              ================================================== */}

              <div
                style={{
                  width: "100%",
                }}
              >
                {projects.map((p, i) => {
                  const isActive = i === active;

                  return (
                    <div
                      key={p.num}
                      onClick={() => {
                        if (!locked) {
                          setActive(i);
                        }
                      }}
                      style={{
                        position: "relative",
                        borderTop: i === 0 ? "1px solid #1b1b1b" : "none",
                        borderBottom: "1px solid #1b1b1b",
                        cursor: "none",
                        padding: "clamp(1.2rem, 2vw, 1.7rem) 0",
                        opacity: isActive ? 1 : 0.28,
                        transform: isActive
                          ? "translateX(10px)"
                          : "translateX(0)",
                        transition:
                          "opacity 0.55s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      {/* ACTIVE LINE */}

                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: isActive ? "100%" : "0%",
                          height: "1px",
                          background:
                            "linear-gradient(90deg, #555, transparent)",
                          transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* PROJECT ROW */}

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "50px 1fr 30px",
                          alignItems: "center",
                        }}
                      >
                        {/* NUMBER */}

                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.6rem",
                            color: isActive ? "#999" : "#333",
                            letterSpacing: "0.08em",
                            transition: "color 0.4s ease",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* TITLE */}

                        <h3
                          style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: "clamp(2rem, 3.4vw, 3.6rem)",
                            fontWeight: 400,
                            color: isActive ? "#e5e5e5" : "#555",
                            lineHeight: 1,
                            margin: 0,
                            letterSpacing: "-0.025em",
                            transition: "color 0.5s ease",
                          }}
                        >
                          {p.client}
                        </h3>

                        {/* ARROW */}

                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.85rem",
                            color: isActive ? "#aaa" : "#333",
                            textAlign: "right",
                            transform: isActive
                              ? "translateX(-3px)"
                              : "translateX(0)",
                            transition: "color 0.4s ease, transform 0.5s ease",
                          }}
                        >
                          {isActive ? "↗" : ""}
                        </span>
                      </div>

                      {/* DESCRIPTION */}

                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                          transition:
                            "grid-template-rows 0.55s cubic-bezier(0.16,1,0.3,1)",
                          paddingLeft: "50px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              paddingTop: "1.1rem",
                              paddingRight: "2rem",
                              opacity: isActive ? 1 : 0,
                              transform: isActive
                                ? "translateY(0)"
                                : "translateY(-8px)",
                              transition:
                                "opacity 0.45s ease 0.1s, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                            }}
                          >
                            <p
                              style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.82rem",
                                lineHeight: 1.8,
                                color: "#777",
                                margin: "0 0 1.1rem",
                                maxWidth: "48ch",
                              }}
                            >
                              {p.desc}
                            </p>

                            {/* STACK */}

                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "6px 16px",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: "0.52rem",
                                  color: "#444",
                                  letterSpacing: "0.08em",
                                }}
                              >
                                {p.stack}
                              </span>

                              <span
                                style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: "0.52rem",
                                  color: "#444",
                                  letterSpacing: "0.08em",
                                }}
                              >
                                {p.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ==================================================
                  RIGHT — PROJECT IMAGE
              ================================================== */}

              <div
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1.25 / 1",
                  overflow: "hidden",

                  background: "#101010",

                  border: imageHover
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid #181818",

                  boxShadow: imageHover
                    ? "0 30px 70px -25px rgba(0,0,0,0.9)"
                    : "none",

                  transition: "border-color 0.5s ease, box-shadow 0.6s ease",
                }}
              >
                {projects.map((p, i) => {
                  const isActive = i === active;

                  return (
                    <div
                      key={p.num}
                      style={{
                        position: "absolute",
                        inset: 0,

                        opacity: isActive ? 1 : 0,

                        transform: isActive ? "scale(1)" : "scale(1.06)",

                        transition:
                          "opacity 0.7s ease, transform 1s cubic-bezier(0.16,1,0.3,1)",

                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {/* ==================================================
                          IMAGE
                      ================================================== */}

                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.client}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: "block",

                            transform: imageHover ? "scale(1.045)" : "scale(1)",

                            filter: imageHover
                              ? "brightness(1.05) contrast(1.04) saturate(1.02)"
                              : "brightness(0.9) contrast(1.02) saturate(0.96)",

                            transition:
                              "transform 1s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease",

                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",

                            willChange: "transform, filter",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,

                            background: `
                              radial-gradient(
                                circle at 30% 30%,
                                ${p.bg || "#222"},
                                #080808 70%
                              )
                            `,

                            transform: imageHover ? "scale(1.045)" : "scale(1)",

                            transition:
                              "transform 1s cubic-bezier(0.16,1,0.3,1)",
                          }}
                        />
                      )}

                      {/* ==================================================
                          HOVER OVERLAY
                      ================================================== */}

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,

                          background: imageHover
                            ? "rgba(0,0,0,0.22)"
                            : "rgba(0,0,0,0.05)",

                          transition: "background 0.5s ease",

                          pointerEvents: "none",
                        }}
                      />

                      {/* ==================================================
                          IMAGE NUMBER
                      ================================================== */}

                      <span
                        style={{
                          position: "absolute",
                          top: "1.4rem",
                          left: "1.4rem",

                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.58rem",

                          color: imageHover
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(255,255,255,0.5)",

                          letterSpacing: "0.1em",

                          transform: imageHover
                            ? "translateY(0)"
                            : "translateY(-4px)",

                          transition:
                            "color 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",

                          pointerEvents: "none",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* ==================================================
                          PROJECT NAME
                      ================================================== */}

                      <span
                        style={{
                          position: "absolute",
                          left: "1.4rem",
                          bottom: "1.4rem",

                          fontFamily: "'Instrument Serif', serif",
                          fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                          fontStyle: "italic",
                          color: "#fff",

                          opacity: imageHover ? 1 : 0.7,

                          transform: imageHover
                            ? "translateY(0)"
                            : "translateY(6px)",

                          textShadow: "0 2px 15px rgba(0,0,0,0.65)",

                          transition:
                            "opacity 0.4s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",

                          pointerEvents: "none",
                        }}
                      >
                        {p.client}
                      </span>

                      {/* ==================================================
                          VIEW PROJECT
                      ================================================== */}

                      <a
                        href={p.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          if (!p.url) {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          position: "absolute",
                          right: "1.4rem",
                          bottom: "1.4rem",

                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.64rem",

                          color: "#fff",

                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          textDecoration: "none",

                          borderBottom: "1px solid rgba(255,255,255,0.7)",

                          paddingBottom: "5px",

                          opacity: imageHover ? 1 : 0,

                          transform: imageHover
                            ? "translateY(0)"
                            : "translateY(10px)",

                          transition:
                            "opacity 0.4s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",

                          pointerEvents: imageHover ? "auto" : "none",
                        }}
                      >
                        View Project ↗
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ==================================================
                BOTTOM LEFT
            ================================================== */}

            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.8rem, 4vw, 3rem)",
                left: "4%",

                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                color: "#333",

                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Scroll to explore
            </div>

            {/* ==================================================
                PROGRESS
            ================================================== */}

            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.8rem, 4vw, 3rem)",
                right: "4%",

                width: "90px",
                height: "1px",

                background: "#222",
              }}
            >
              <div
                style={{
                  width: `${((active + 1) / projects.length) * 100}%`,

                  height: "1px",

                  background: "#777",

                  transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </div>
          </Row>
        </Section>
      </div>
    </div>
  );
}
