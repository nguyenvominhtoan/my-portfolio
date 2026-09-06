import { useState, useEffect, useRef } from "react";

export function useInView(thresh = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: thresh }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [thresh]);

  return [ref, v];
}

export function Reveal({ children, delay = 0 }) {
  const [ref, v] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(24px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
