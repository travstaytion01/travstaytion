"use client";

import { useEffect, useRef } from "react";

export default function CouplesFilm() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (preference.matches || document.documentElement.dataset.reduceMotion === "true") video.current?.pause();
      else video.current?.play().catch(() => {});
    };
    apply();
    preference.addEventListener("change", apply);
    window.addEventListener("travel-motion-change", apply);
    return () => {
      preference.removeEventListener("change", apply);
      window.removeEventListener("travel-motion-change", apply);
    };
  }, []);

  return (
    <video
      ref={video}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      poster="/couples-journey-poster.jpg?v=5"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center]"
    >
      <source src="/couples-journey.mp4?v=5" type="video/mp4" />
    </video>
  );
}
