import type { Metadata } from "next";
import DubaiFilmPreview from "@/components/DubaiFilmPreview";
import { dubaiHeroMedia } from "@/lib/dubai-media";
import Link from "next/link";
import DubaiPackageList from "@/components/DubaiPackageList";

export const metadata: Metadata = {
  title: "Dubai honeymoon packages | TravStaytion",
  description: "Compare four Dubai honeymoons of four to six nights, with hotel options, breakfast for two and day-by-day itineraries.",
  alternates: { canonical: "/packages/dubai" },
};

export default function DubaiPackagesPage() {
  return (
    <article className="collection">
      <header className="collection-hero">
        <div>
          <Link href="/packages#couples-special">← Couples Special</Link>
          <h1 className="text-balance" style={{ hyphens: "none" }}>Dubai honeymoon packages</h1>
          <p>Choose a city tour and Marina dinner, visit Abu Dhabi, or stay longer for a day at Miracle Garden in season. All four itineraries include a hotel stay, breakfast for two and private airport transfers.</p>
        </div>
        <DubaiFilmPreview media={dubaiHeroMedia} hero />
      </header>
      <DubaiPackageList />
      <nav aria-label="Dubai package actions" className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t bg-white p-3 text-center text-sm font-semibold md:hidden">
        <a href="#packages" className="flex-1 rounded-lg border border-stone-300 px-3 py-3">Filter packages</a>
        <Link href="/quote?destination=Dubai&trip=honeymoon" className="flex-1 rounded-lg bg-teal-900 px-3 py-3 text-white">Request callback</Link>
      </nav>
      <section className="collection-list">
        <h2>Plan your own Dubai trip</h2>
        <Link className="trip-link" href="/quote?destination=Dubai&trip=honeymoon">Request a custom quote</Link>
        <details className="mt-6 text-sm text-stone-600">
          <summary className="cursor-pointer">Photography and film credits</summary>
          <p className="mt-2">Photography from Pexels by <a className="underline" href="https://www.pexels.com/photo/skyline-of-dubai-with-burj-khalifa-at-golden-hour-19894545/">Yassen Kounchev</a> (Burj Khalifa), <a className="underline" href="https://www.pexels.com/photo/a-desert-landscape-with-sand-dunes-and-a-sky-14750492/">Kadir Avşar</a> (desert dunes), <a className="underline" href="https://www.pexels.com/photo/stunning-twilight-view-of-dubai-skyline-with-burj-khalifa-32696882/">AJ Ahamad</a> (Downtown Dubai), <a className="underline" href="https://www.pexels.com/photo/dubai-cityscape-at-sunset-5075784/">Max Avans</a> (Dubai Marina) and <a className="underline" href="https://www.pexels.com/photo/enchanting-floral-pathways-at-dubai-garden-35155878/">Magda Ehlers</a> (Miracle Garden).</p>
          <p className="mt-2">Footage by <a className="underline" href="https://www.pexels.com/video/skyscraper-in-dubai-11557602/">Henry</a> (Downtown Dubai), <a className="underline" href="https://www.pexels.com/video/skyline-of-a-city-7169060/">Tima Miroshnichenko</a> (Dubai Marina) and <a className="underline" href="https://www.pexels.com/video/drone-footage-of-a-motor-vehicle-driving-in-a-desert-road-8865806/">MART PRODUCTION</a> (desert drive). <a className="underline" href="https://www.pexels.com/license/">Pexels license</a>.</p>
        </details>
      </section>
    </article>
  );
}
