"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubpackageCard from "@/components/SubpackageCard";
import PackageInquiryModal from "@/components/PackageInquiryModal";

// Dubai subpackages based on the design reference
const dubaiPackages = [
  {
    id: 1,
    name: "Best of Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    nights: 3,
    itinerary: "Dubai (3N)",
    hotelRating: 4,
    activities: 3,
    hasSharedTransfer: true,
    has24x7Concierge: true,
    price: 47126,
    pricePerNight: true,
    isSooperHitPick: true,
    highlights: [
      "Burj Khalifa observation deck visit",
      "Desert Safari with BBQ dinner",
      "Dubai Mall & Fountain show",
      "Dubai Frame entry tickets"
    ],
    inclusions: [
      "3 Nights at 4-star hotel",
      "Daily breakfast",
      "Airport transfers",
      "City tour",
      "Visa assistance"
    ]
  },
  {
    id: 2,
    name: "Weekend Getaway to Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    nights: 3,
    itinerary: "Dubai (3N)",
    hotelRating: 4,
    activities: 4,
    hasSharedTransfer: true,
    has24x7Concierge: true,
    price: 57621,
    pricePerNight: true,
    isSooperHitPick: false,
    highlights: [
      "Marina Dhow Cruise dinner",
      "Miracle Garden visit",
      "Gold & Spice Souk tour",
      "Beach leisure time"
    ],
    inclusions: [
      "3 Nights at 4-star hotel",
      "Daily breakfast",
      "Airport transfers",
      "Half-day city tour",
      "Dhow cruise with dinner"
    ]
  },
  {
    id: 3,
    name: "Glimpses of Dubai",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    nights: 5,
    itinerary: "Dubai (4N) › Atlantis (1N)",
    hotelRating: 4,
    activities: 5,
    hasSharedTransfer: true,
    has24x7Concierge: true,
    price: 50171,
    pricePerNight: true,
    isSooperHitPick: false,
    highlights: [
      "Stay at Atlantis The Palm",
      "Aquaventure Waterpark access",
      "The Lost Chambers Aquarium",
      "Desert Safari with BBQ",
      "Burj Khalifa At The Top"
    ],
    inclusions: [
      "4 Nights in Dubai + 1 Night at Atlantis",
      "Daily breakfast",
      "All transfers included",
      "Desert Safari",
      "Theme park tickets"
    ]
  },
  {
    id: 4,
    name: "Dubai Essentials Getaway",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
    nights: 4,
    itinerary: "Dubai (4N)",
    hotelRating: 3,
    activities: 3,
    hasSharedTransfer: true,
    has24x7Concierge: true,
    price: 52176,
    pricePerNight: true,
    isSooperHitPick: false,
    highlights: [
      "Dubai City tour",
      "Desert Safari experience",
      "Shopping at Dubai Mall",
      "Burj Khalifa visit"
    ],
    inclusions: [
      "4 Nights at 3-star hotel",
      "Daily breakfast",
      "Shared airport transfers",
      "City tour",
      "Desert Safari"
    ]
  },
  {
    id: 5,
    name: "Dubai Luxury Escape",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    nights: 5,
    itinerary: "Dubai (5N)",
    hotelRating: 5,
    activities: 6,
    hasSharedTransfer: false,
    hasPrivateTransfer: true,
    has24x7Concierge: true,
    price: 89999,
    pricePerNight: true,
    isSooperHitPick: true,
    highlights: [
      "5-star luxury accommodation",
      "Private desert safari",
      "Burj Al Arab lunch experience",
      "Yacht cruise",
      "VIP Burj Khalifa access",
      "Shopping tour with personal shopper"
    ],
    inclusions: [
      "5 Nights at 5-star hotel",
      "All meals included",
      "Private airport transfers",
      "Private city tour",
      "All activities with skip-the-line access"
    ]
  },
  {
    id: 6,
    name: "Dubai Family Fun",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    nights: 6,
    itinerary: "Dubai (6N)",
    hotelRating: 4,
    activities: 7,
    hasSharedTransfer: true,
    has24x7Concierge: true,
    price: 75499,
    pricePerNight: true,
    isSooperHitPick: false,
    highlights: [
      "IMG Worlds of Adventure",
      "Legoland Dubai",
      "Aquaventure Waterpark",
      "Dubai Aquarium",
      "Global Village",
      "Desert Safari",
      "Dolphin Bay experience"
    ],
    inclusions: [
      "6 Nights at family-friendly 4-star hotel",
      "Daily breakfast",
      "All theme park tickets",
      "Shared transfers",
      "Kids activities included"
    ]
  }
];

export default function DubaiPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<typeof dubaiPackages[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterBudget, setFilterBudget] = useState<string>("all");
  const [filterNights, setFilterNights] = useState<string>("all");

  const filteredPackages = dubaiPackages
    .filter((pkg) => {
      let budgetMatch = true;
      let nightsMatch = true;

      if (filterBudget !== "all") {
        if (filterBudget === "budget") budgetMatch = pkg.price < 50000;
        else if (filterBudget === "mid") budgetMatch = pkg.price >= 50000 && pkg.price < 75000;
        else if (filterBudget === "luxury") budgetMatch = pkg.price >= 75000;
      }

      if (filterNights !== "all") {
        if (filterNights === "3") nightsMatch = pkg.nights === 3;
        else if (filterNights === "4-5") nightsMatch = pkg.nights >= 4 && pkg.nights <= 5;
        else if (filterNights === "6+") nightsMatch = pkg.nights >= 6;
      }

      return budgetMatch && nightsMatch;
    })
    .sort((a, b) => a.price - b.price);

  const handleCustomize = (pkg: typeof dubaiPackages[number]) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai skyline with Burj Khalifa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-4">
            🌴 Most Popular Destination
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dubai Vacation Packages
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Customise your Dubai holiday, get insider tips from real travellers!
          </p>
          <Link
            href="#packages"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore Packages
          </Link>
        </div>
        
      </section>

      {/* Trust Badges - Moved outside hero for better mobile layout */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-6 sm:gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base flex items-center gap-1">
                  4.8 <span className="text-yellow-400">★</span>
                </p>
                <p className="text-blue-200 text-[10px] sm:text-xs">1425+ reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg sm:text-xl font-bold text-blue-600">G</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base flex items-center gap-1">
                  4.6 <span className="text-yellow-400">★</span>
                </p>
                <p className="text-blue-200 text-[10px] sm:text-xs">8250+ reviews</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">Trusted</p>
                <p className="text-blue-200 text-[10px] sm:text-xs">50K+ customers</p>
              </div>
            </div>
          </div>
        </section>

      {/* Filters Section */}
      <section className="py-3 sm:py-4 md:py-6 bg-white border-b sticky top-16 md:top-20 lg:top-24 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <select
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
              className="flex-shrink-0 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-emerald-500 bg-white"
            >
              <option value="all">All Budgets</option>
              <option value="budget">Under ₹50K</option>
              <option value="mid">₹50K - ₹75K</option>
              <option value="luxury">Above ₹75K</option>
            </select>

            <select
              value={filterNights}
              onChange={(e) => setFilterNights(e.target.value)}
              className="flex-shrink-0 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-emerald-500 bg-white"
            >
              <option value="all">All Nights</option>
              <option value="3">3 Nights</option>
              <option value="4-5">4-5 Nights</option>
              <option value="6+">6+ Nights</option>
            </select>

            <div className="ml-auto hidden sm:flex items-center gap-2 text-gray-600 text-sm">
              <span className="font-medium text-emerald-600">{filteredPackages.length}</span>
              <span>packages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages List */}
      <section id="packages" className="py-10 pb-28 md:pb-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPackages.map((pkg) => (
              <SubpackageCard
                key={pkg.id}
                package={pkg}
                onCustomize={() => handleCustomize(pkg)}
              />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
              <button
                onClick={() => { setFilterBudget("all"); setFilterNights("all"); }}
                className="mt-4 text-emerald-600 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Itinerary CTA */}\n      <section className=\"relative py-16 mb-20 md:mb-0 overflow-hidden\">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Customise your own sooper hit itinerary
            </h2>
            <p className="text-gray-300">
              Build your dream Dubai trip exactly the way you want it
            </p>
          </div>
          <Link
            href="/quote?destination=Dubai"
            className="whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Create Now
          </Link>
        </div>
      </section>

      {/* Floating Request Callback Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-full text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
          <Link
            href="/quote?destination=Dubai"
            className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 rounded-full font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Request Callback
          </Link>
        </div>
      </div>

      {/* Package Inquiry Modal */}
      <PackageInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageData={selectedPackage}
      />
    </>
  );
}
