"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { DubaiMedia } from "@/lib/dubai-media";

export default function DubaiFilmPreview({ media, hero = false }: { media: DubaiMedia; hero?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [playing, setPlaying] = useState(false);
  const playIcon = <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="currentColor"><path d="M5 3.5v13l11-6.5z" /></svg>;

  return <>
    <button
      type="button"
      className={hero ? "destination-hero-visual" : "destination-trip-picture"}
      aria-label={`Watch film: ${media.film.title}`}
      aria-haspopup="dialog"
      onClick={() => { setPlaying(true); dialog.current?.showModal(); }}
    >
      <Image src={media.photo} alt={media.alt} width={1200} height={hero ? 1200 : 750} className={hero ? "object-top" : undefined}
        priority={hero} sizes={hero ? "(max-width: 760px) 100vw, 52vw" : "(max-width: 767px) 100vw, 50vw"} />
      {hero
        ? <span className="destination-hero-play"><span className="destination-play-circle">{playIcon}</span><span>{media.film.title}<small>Watch the destination film</small></span></span>
        : <span className="destination-picture-play">{playIcon}{media.film.action}</span>}
    </button>
    <dialog className="destination-film-dialog" aria-labelledby={titleId} ref={dialog} onClose={() => setPlaying(false)}
      onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {playing && <div className="destination-film-inner">
        <div className="destination-film-header">
          <h2 id={titleId}>{media.film.title}</h2>
          <button type="button" autoFocus className="destination-film-close" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
        </div>
        <video controls autoPlay muted playsInline preload="none" poster={media.film.poster} aria-label={media.film.title}>
          <source src={media.film.src} type="video/mp4" />
          <a href={media.film.src}>Open the destination film</a>
        </video>
      </div>}
    </dialog>
  </>;
}
