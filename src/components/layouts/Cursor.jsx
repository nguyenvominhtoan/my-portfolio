import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const el = useRef(null);
  const m = useRef({ x: -200, y: -200 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    let lx = -200;
    let ly = -200;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    const mv = (e) => {
      m.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mv);
    setTimeout(() => setShow(true), 500);

    const tick = () => {
      lx = lerp(lx, m.current.x, 0.12);
      ly = lerp(ly, m.current.y, 0.12);
      if (el.current) {
        const h = !!document.querySelector(
          "a:hover, button:hover, [data-h]:hover"
        );
        el.current.style.transform = `translate(${lx}px,${ly}px) translate(-50%,-50%) scale(${
          h ? 1.15 : 0.55
        })`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", mv);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
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
  );
}
