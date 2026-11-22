"use client";

import { useState } from "react";
import PackageInquiryModal from "./PackageInquiryModal";
import { DUBAI_ITINERARIES, type DubaiItinerary } from "@/lib/dubai-itineraries";

export default function DubaiPackageList() {
  const [selected, setSelected] = useState<DubaiItinerary | null>(null);
  const [nights, setNights] = useState("");
  const [hotel, setHotel] = useState("");
  const packages = DUBAI_ITINERARIES.filter(trip =>
    (!nights || trip.days.length - 1 === Number(nights)) && (!hotel || trip.hotel === hotel)
  );
  const selectClass = "rounded-lg border border-stone-300 bg-white px-3 py-2";

  return (
    <section id="packages" className="collection-list scroll-mt-24">
      <h2>Choose an itinerary</h2>
      <div className="flex flex-wrap items-center gap-3">
        <select aria-label="Filter by number of nights" className={selectClass} value={nights} onChange={e => setNights(e.target.value)}>
          <option value="">All lengths</option>
          {[...new Set(DUBAI_ITINERARIES.map(trip => trip.days.length - 1))].map(n => <option key={n} value={n}>{n} nights</option>)}
        </select>
        <select aria-label="Filter by hotel option" className={selectClass} value={hotel} onChange={e => setHotel(e.target.value)}>
          <option value="">All hotel options</option>
          {[...new Set(DUBAI_ITINERARIES.map(trip => trip.hotel))].map(label => <option key={label}>{label}</option>)}
        </select>
        <span className="text-sm" aria-live="polite">{packages.length} {packages.length === 1 ? "package" : "packages"}</span>
      </div>
      {packages.length === 0 && <div className="mt-6">
        <p>No itineraries match these filters.</p>
        <button className="trip-link" onClick={() => { setNights(""); setHotel(""); }}>Clear filters</button>
      </div>}
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {packages.map(trip => (
          <article key={trip.id} id={trip.id} className="rounded-2xl border border-stone-300 bg-white p-6 sm:p-8">
            <p className="eyebrow">{trip.days.length - 1} nights / {trip.days.length} days · {trip.hotel} hotel</p>
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
            <details className="mt-5 border-y border-stone-200">
              <summary className="cursor-pointer py-3 font-semibold">View day-by-day itinerary</summary>
              <h4 className="mt-2 font-semibold">Your stay</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5">{trip.accommodation.map(line => <li key={line}>{line}</li>)}</ul>
              <ol className="my-5 space-y-4 border-l border-stone-200 pl-4">
                {trip.days.map((day, index) => <li key={day.title}>
                  <h4 className="font-semibold">Day {index + 1} · {day.title}</h4>
                  <p>{day.details.join(" ")}</p>
                </li>)}
              </ol>
              <h4 className="font-semibold">Good to know</h4>
              <ul className="mb-5 mt-1 list-disc space-y-1 pl-5">{trip.notes.map(note => <li key={note}>{note}</li>)}</ul>
            </details>
            <button className="trip-link" onClick={() => setSelected(trip)}>Request a quote<span className="sr-only"> for {trip.name}</span></button>
          </article>
        ))}
      </div>
      {selected && <PackageInquiryModal key={selected.id} packageData={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
