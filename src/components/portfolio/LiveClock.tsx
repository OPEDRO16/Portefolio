import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Lisbon",
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground tabular-nums">
      Lisbon · {time || "--:--:--"}
    </span>
  );
}
