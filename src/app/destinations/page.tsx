import { destinationCards as destinations } from "@/lib/destinations";
import type { Metadata } from "next";
import DestinationCard from "@/components/DestinationCard";

export const metadata: Metadata = {
  title: "Destinations | TravStaytion - Explore Amazing Travel Destinations",
  description: "Explore our handpicked travel destinations: Dubai, Maldives, and Thailand. Find your perfect vacation spot with TravStaytion.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/couples-thailand.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4">
            🌍 Explore the World
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Explore Our Destinations
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover handpicked destinations around the world, each offering unique experiences and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Destinations</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">Choose from our handpicked selection of amazing places</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.name} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3 animate-pulse-slow" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Plan Your Perfect Getaway
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We offer custom travel packages to Dubai, Maldives, and Thailand. Contact us to plan your perfect trip!
          </p>
          <a
            href="/quote"
            className="group inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Request Custom Package
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
