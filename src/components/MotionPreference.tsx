"use client";
import { useEffect, useState } from "react";

export default function MotionPreference() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const system = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(document.documentElement.dataset.reduceMotion === "true" || system.matches);
    sync();
    system.addEventListener("change", sync);
    return () => system.removeEventListener("change", sync);
  }, []);
  return <label className="inline-flex items-center gap-2 text-sm text-white">
    <input type="checkbox" checked={reduced} onChange={event => {
      const next = event.target.checked || matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.documentElement.dataset.reduceMotion = String(next);
      setReduced(next);
      window.dispatchEvent(new Event("travel-motion-change"));
    }} /> Reduce page motion
  </label>;
}
