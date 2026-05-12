import { useEffect, useRef } from "react";

export function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const move = (e: MouseEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
        frame = 0;
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
