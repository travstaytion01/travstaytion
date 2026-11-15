import CouplesFilm from "@/components/CouplesFilm";
import { destinationCards as destinations } from "@/lib/destinations";
import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[84svh] items-end overflow-hidden bg-stone-800 text-white">
        <CouplesFilm />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-52 sm:px-12 lg:pb-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.18em] text-rose-100">Dubai · Maldives · Thailand</p>
          <h1 className="max-w-2xl font-serif text-5xl leading-tight sm:text-7xl">Where to next?</h1>
          <p className="mt-5 max-w-lg text-lg text-white/95">Find your island escape, explore a new city, or plan a few days away together.</p>
          <Link href="/packages" className="mt-7 inline-block rounded-full bg-rose-50 px-6 py-3 font-semibold text-rose-950 hover:bg-white">Explore travel packages</Link>
          <Link href="/destinations" className="ml-5 inline-block py-3 text-white underline underline-offset-4">All destinations</Link>
        </div>
      </section>

      {/* Destinations Section - Fully Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 lg:mb-14 animate-on-scroll">
            <div>
              <p className="text-teal-800 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">TRAVEL COLLECTIONS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">Destinations</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-3 sm:mt-0 text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1.5 sm:gap-2 group text-sm sm:text-base"
            >
              View all destinations
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.name} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fully Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/couples-maldives.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready for Your Next Trip?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto">
            Get a personalized quote from our travel experts. We&apos;ll help you plan the perfect vacation within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/quote"
              className="group bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Request a quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
