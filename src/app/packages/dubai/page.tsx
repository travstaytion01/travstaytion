import type { Metadata } from "next";
import Image from "next/image";
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
          <h1>Dubai honeymoon packages</h1>
          <p>Choose a city tour and Marina dinner, visit Abu Dhabi, or stay longer for a day at Miracle Garden in season. All four itineraries include a hotel stay, breakfast for two and private airport transfers.</p>
        </div>
        <Image src="/dubai-skyline.jpg" alt="Dubai skyline" width={1000} height={650} sizes="(max-width: 760px) 100vw, 52vw" priority />
      </header>
      <DubaiPackageList />
      <nav aria-label="Dubai package actions" className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t bg-white p-3 text-center text-sm font-semibold md:hidden">
        <a href="#packages" className="flex-1 rounded-lg border border-stone-300 px-3 py-3">Filter packages</a>
        <Link href="/quote?destination=Dubai&trip=honeymoon" className="flex-1 rounded-lg bg-teal-900 px-3 py-3 text-white">Request callback</Link>
      </nav>
      <section className="collection-list">
        <h2>Plan your own Dubai trip</h2>
        <Link className="trip-link" href="/quote?destination=Dubai&trip=honeymoon">Request a custom quote</Link>
      </section>
    </article>
  );
}
