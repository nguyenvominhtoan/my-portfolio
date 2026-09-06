import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const el = useRef(null);
  const glow = useRef(null);
  const grid = useRef(null);

  const m = useRef({
    x: -200,
    y: -200,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    let lx = -200;
    let ly = -200;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    const mv = (e) => {
      m.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", mv);

    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    const tick = () => {
      // Smooth cursor movement
      lx = lerp(lx, m.current.x, 0.12);
      ly = lerp(ly, m.current.y, 0.12);

      // Global mouse light
      if (glow.current) {
        glow.current.style.transform = `
          translate(${lx}px, ${ly}px)
          translate(-50%, -50%)
        `;
      }

      // Global grid revealed by light
      if (grid.current) {
        const mask = `
          radial-gradient(
            circle 360px at ${lx}px ${ly}px,
            black 0%,
            black 18%,
            rgba(0,0,0,0.65) 40%,
            transparent 75%
          )
        `;

        grid.current.style.maskImage = mask;
        grid.current.style.webkitMaskImage = mask;
      }

      // Small cursor - fixed size
      if (el.current) {
        el.current.style.transform = `
          translate(${lx}px, ${ly}px)
          translate(-50%, -50%)
          scale(0.55)
        `;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", mv);
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* GLOBAL GRID */}
      <div
        ref={grid}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9996,

          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.045) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "80px 80px",

          maskImage:
            "radial-gradient(circle 360px at -200px -200px, black, transparent 75%)",

          WebkitMaskImage:
            "radial-gradient(circle 360px at -200px -200px, black, transparent 75%)",

          opacity: show ? 1 : 0,

          transition: "opacity 0.8s ease",

          willChange: "mask-image",
        }}
      />

      {/* GLOBAL MOUSE LIGHT */}
      <div
        ref={glow}
        style={{
          position: "fixed",
          top: 0,
          left: 0,

          width: 520,
          height: 520,

          borderRadius: "50%",

          pointerEvents: "none",
          zIndex: 9997,

          background:
            "radial-gradient(circle, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.028) 32%, transparent 72%)",

          filter: "blur(35px)",

          opacity: show ? 1 : 0,

          transition: "opacity 0.8s ease",

          willChange: "transform",
        }}
      />

      {/* CUSTOM CURSOR */}
      <div
        ref={el}
        style={{
          position: "fixed",
          top: 0,
          left: 0,

          zIndex: 9999,

          width: 36,
          height: 36,

          borderRadius: "50%",

          background: "#fff",

          mixBlendMode: "difference",

          pointerEvents: "none",

          willChange: "transform",

          opacity: show ? 1 : 0,

          transition: "opacity 0.5s",
        }}
      />
    </>
  );
}
