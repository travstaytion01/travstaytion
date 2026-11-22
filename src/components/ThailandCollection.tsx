"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { THAILAND_ITINERARIES, type ThailandItinerary } from "@/lib/thailand-itineraries";

type FilmSelection = { trip: ThailandItinerary; rockBeach: boolean };
function PlayIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 4.5v15l12-7.5z" /></svg>;
}

export default function ThailandCollection() {
  const [film, setFilm] = useState<FilmSelection | null>(null);
  const [loadExternal, setLoadExternal] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (film && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [film]);
  function watch(trip: ThailandItinerary, rockBeach = false) {
    setLoadExternal(false);
    setFilm({ trip, rockBeach });
  }

  return <article className="thailand-collection">
    <header className="thailand-hero">
      <div className="thailand-hero-copy">
        <Link className="thailand-back" href="/packages#couples-special">← Couples Special</Link>
        <p className="thailand-kicker">Southeast Asia · Made for two</p>
        <h1>Thailand<br /><em>for two.</em></h1>
        <p className="thailand-intro">Island mornings. River-lit evenings. A little more time together.</p>
        <p>Four journeys through Phuket, Krabi, Bangkok and Pattaya, with hotel options and the day-by-day details already mapped out.</p>
        <a className="thailand-explore" href="#thailand-itineraries">Find your itinerary <span aria-hidden="true">↘</span></a>
        <div className="thailand-hero-facts"><span>4 couple escapes</span><span>4–6 nights</span><span>3★ / 4★ hotel options</span></div>
      </div>
      <button className="destination-hero-visual" onClick={() => watch(THAILAND_ITINERARIES[0])} aria-label="Watch Phuket coastline film">
        <Image src="/thailand/phuket-beach.webp" alt="Longtail boats and palms beside a beach in Phuket, photographed from above" width={1200} height={2133} sizes="(max-width: 800px) 100vw, 55vw" priority />
        <span className="thailand-visual-top">A glimpse of your getaway</span>
        <span className="destination-hero-play"><span className="destination-play-circle"><PlayIcon /></span><span>Phuket, from above<small>Watch the destination film</small></span></span>
      </button>
    </header>

    <section className="thailand-itineraries" id="thailand-itineraries" aria-labelledby="thailand-itinerary-heading">
      <div className="thailand-section-heading"><div><p className="thailand-kicker">Pick your pace</p><h2 id="thailand-itinerary-heading">Choose an itinerary</h2></div><p>Start with a journey you love. We’ll confirm your hotels, dates, availability and written quote with you.</p></div>
      <div className="thailand-trip-grid">{THAILAND_ITINERARIES.map((trip, index) => <article className="thailand-trip" key={trip.id} id={trip.id}>
        <button className="destination-trip-picture" onClick={() => watch(trip)} aria-label={`Watch destination film for ${trip.name}`}>
          <Image src={trip.image} alt={trip.alt} width={1200} height={750} sizes="(max-width: 580px) 100vw, 50vw" loading="lazy" />
          <span className="thailand-duration">{trip.nights} nights / {trip.days.length} days</span>
          <span className="destination-picture-play"><PlayIcon /> Watch film</span>
        </button>
        <div className="thailand-trip-content">
          <div className="thailand-trip-topline"><p className="thailand-kicker">{trip.route}</p><span aria-hidden="true">0{index + 1}</span></div>
          <h3>{trip.name}</h3><p className="thailand-trip-description">{trip.description}</p>
          <ul className="thailand-highlights" aria-label="Package highlights">{trip.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
          {trip.rockBeachSwing && <button className="thailand-rock-preview" onClick={() => watch(trip, true)}><Image src="/thailand/rock-beach-video-preview.jpg" alt="" width={88} height={64} sizes="64px" loading="lazy" /><span>Rock Beach Swing<small>See the Phuket photo spot <span aria-hidden="true">↗</span></small></span><PlayIcon /></button>}
          <details className="thailand-trip-details"><summary><span>Explore all {trip.days.length} days</span><span className="thailand-details-plus" aria-hidden="true">+</span></summary>
            <div className="thailand-stay"><h4>Your stay</h4><ul>{trip.accommodation.map(line => <li key={line}>{line}</li>)}</ul></div>
            <ol className="thailand-timeline">{trip.days.map((day, dayIndex) => <li key={day.title}><span className="thailand-day-number" aria-hidden="true">{String(dayIndex + 1).padStart(2, "0")}</span><div><h4>Day {dayIndex + 1} · {day.title}</h4><ul>{day.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></li>)}</ol>
            <div className="thailand-package-notes"><h4>Good to know</h4><ul>{trip.notes.map(note => <li key={note}>{note}</li>)}</ul></div>
          </details>
          <Link className="thailand-quote-link" href={"/quote?" + new URLSearchParams({ destination: "Thailand", trip: "couples", itinerary: trip.name })}>Request this itinerary <span aria-hidden="true">↗</span><span className="sr-only">: {trip.name}</span></Link>
        </div>
      </article>)}</div>
      <div className="thailand-booking-note"><span className="thailand-kicker">A trip that fits you</span><p>Hotel choices depend on your dates, preference and budget. Excursions are subject to operating schedules, weather and availability. Ask for a written quote covering inclusions, exclusions, transfers and cancellation terms before booking.</p></div>
      <details className="thailand-media-credits"><summary>Photography &amp; film credits</summary><p>Destination photography and aerial footage from <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">Pexels</a>: <a href="https://www.pexels.com/video/aerial-view-of-the-coastline-of-phuket-12762055/" target="_blank" rel="noopener noreferrer">Maksim Romashkin</a> (Phuket film), <a href="https://www.pexels.com/photo/aerial-view-of-phuket-beach-with-boats-and-forest-34429705/" target="_blank" rel="noopener noreferrer">Phuket beach photograph</a>, <a href="https://www.pexels.com/video/aerial-view-of-bangkok-s-chao-phraya-river-32587783/" target="_blank" rel="noopener noreferrer">LayG Traveller</a> (Bangkok), <a href="https://www.pexels.com/photo/pristine-beach-at-maya-bay-thailand-31311672/" target="_blank" rel="noopener noreferrer">Maya Bay photograph</a> and <a href="https://www.pexels.com/photo/wat-arun-temple-in-bangkok-thailand-11392617/" target="_blank" rel="noopener noreferrer">Wat Arun photograph</a>. Rock Beach Swing video by <a href="https://www.youtube.com/watch?v=EeFx9_4_bFw" target="_blank" rel="noopener noreferrer">Zabzaa พาเที่ยว</a>. Destination films show the area and do not depict every included service or hotel.</p></details>
    </section>

    <dialog className="destination-film-dialog" ref={dialog} aria-labelledby="thailand-film-title" onClose={() => { setFilm(null); setLoadExternal(false); }} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {film && <div className="destination-film-inner">
        <div className="destination-film-header"><div><p className="thailand-kicker">{film.trip.name}</p><h2 id="thailand-film-title">{film.rockBeach ? "Rock Beach Swing, Phuket" : film.trip.filmLabel}</h2></div><button className="destination-film-close" onClick={() => dialog.current?.close()} autoFocus>Close <span aria-hidden="true">×</span></button></div>
        {film.rockBeach ? loadExternal ? <iframe src="https://www.youtube-nocookie.com/embed/EeFx9_4_bFw?rel=0" title="Rock Beach Swing Phuket — video by Zabzaa พาเที่ยว" allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <div className="thailand-external-preview"><Image src="/thailand/rock-beach-video-preview.jpg" alt="Preview of the Rock Beach Swing video in Phuket" width={480} height={360} sizes="(max-width: 580px) 100vw, 50vw" /><div><p>See the swings, sea views and photo spots at Rock Beach Swing.</p><button className="thailand-load-video" onClick={() => setLoadExternal(true)}><PlayIcon /> Play Rock Beach Swing video</button><small>Loads an external YouTube player when you choose to play.</small></div></div> : <video key={film.trip.film} controls autoPlay muted playsInline preload="none" poster={film.trip.filmPoster} aria-label={film.trip.filmLabel}><source src={film.trip.film} type="video/mp4" /><p>Your browser cannot play this video. <a href={film.trip.film}>Open the destination film</a>.</p></video>}
        <p className="destination-film-caption">{film.rockBeach ? <>Video by Zabzaa พาเที่ยว. <a href="https://www.youtube.com/watch?v=EeFx9_4_bFw" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></> : "A short destination preview. Your hotels and included experiences are confirmed in your quote."}</p>
      </div>}
    </dialog>
  </article>;
}
