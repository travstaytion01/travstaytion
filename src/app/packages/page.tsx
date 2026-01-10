 "use client";
import React from "react";
import PackageModal from "../../components/PackageModal";
import Link from "next/link";

// Removed metadata export to resolve Next.js error

// Destination-specific packages (subpackages)
const destinationPackages = [
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description: "Experience luxury, adventure, and world-class shopping in the City of Gold",
    startingPrice: "₹47,126",
    packageCount: 6,
    href: "/packages/dubai",
    isPopular: true,
  },
];

const packages = [
  {
    name: "Romantic Honeymoon",
    description: "Create unforgettable memories with your loved one in the world's most romantic destinations.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    destinations: ["Maldives", "Santorini", "Paris", "Bali"],
    startingPrice: "₹1,99,999",
    duration: "7-10 Days",
    includes: ["Luxury Accommodation", "Private Transfers", "Romantic Dinners", "Spa Treatments"],
  },
  {
    name: "Family Adventure",
    description: "Fun-filled vacations designed for the whole family with activities for all ages.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    destinations: ["Singapore", "Thailand", "Japan", "Dubai"],
    startingPrice: "₹99,999",
    duration: "5-7 Days",
    includes: ["Family Rooms", "Kid-Friendly Activities", "Theme Parks", "City Tours"],
  },
  {
    name: "Thrill Seeker",
    description: "For adrenaline junkies seeking action-packed adventures and extreme experiences.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
    destinations: ["New Zealand", "Costa Rica", "Switzerland", "Nepal"],
    startingPrice: "₹1,49,999",
    duration: "7-14 Days",
    includes: ["Adventure Activities", "Expert Guides", "Safety Equipment", "Accommodation"],
  },
  {
    name: "Luxury Escape",
    description: "Indulge in world-class luxury with 5-star accommodations and VIP experiences.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    destinations: ["Maldives", "Dubai", "Monaco", "Seychelles"],
    startingPrice: "₹3,99,999",
    duration: "5-10 Days",
    includes: ["5-Star Hotels", "Private Jets", "Personal Butler", "Fine Dining"],
  },
  {
    name: "Cultural Explorer",
    description: "Immerse yourself in rich traditions, history, and local experiences around the world.",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
    destinations: ["Japan", "India", "Morocco", "Peru"],
    startingPrice: "₹1,29,999",
    duration: "10-14 Days",
    includes: ["Local Guides", "Cultural Tours", "Traditional Stays", "Cooking Classes"],
  },
  {
    name: "Beach Bliss",
    description: "Relax on pristine beaches with crystal-clear waters and swaying palm trees.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    destinations: ["Maldives", "Bali", "Thailand", "Caribbean"],
    startingPrice: "₹74,999",
    duration: "5-7 Days",
    includes: ["Beachfront Resort", "Water Sports", "Island Hopping", "Sunset Cruises"],
  },
];

type PackageType = typeof packages[number];
export default function PackagesPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedPkg, setSelectedPkg] = React.useState<PackageType | null>(null);
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
            alt="Travel packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4">
            ✨ Curated Experiences
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Curated Travel Packages
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Choose from our carefully designed packages or let us create a custom itinerary just for you.
          </p>
        </div>
      </section>

      {/* Destination Packages Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Explore by Destination</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Destination-Specific Packages
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Handpicked vacation packages tailored for each destination with the best hotels, activities, and experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinationPackages.map((dest, index) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-on-scroll-stagger"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {dest.isPopular && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      🔥 Popular
                    </div>
                  )}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{dest.name} Packages</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{dest.description}</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-gray-900">{dest.startingPrice}</p>
                    <p className="text-xs text-gray-500">{dest.packageCount} packages available</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Package Types</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Travel By Interest
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Choose from our carefully designed packages based on your travel style and interests
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer animate-on-scroll-stagger hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => { setSelectedPkg(pkg); setOpen(true); }}
              >
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="mb-3 sm:mb-4">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1.5 sm:mb-2">Destinations</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {pkg.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="bg-blue-50 text-blue-700 px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1.5 sm:mb-2">Includes</p>
                    <ul className="grid grid-cols-2 gap-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t">
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-500">Starting from</span>
                      <p className="text-lg sm:text-2xl font-bold text-blue-600">{pkg.startingPrice}</p>
                    </div>
                    <Link
                      href="/quote"
                      className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Modal */}
      <PackageModal open={open} onClose={() => { setOpen(false); setSelectedPkg(null); }} pkg={selectedPkg} />

      {/* Custom Package CTA */}
      <section className="py-10 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Need Something Different?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Our travel experts can create a completely custom package tailored to your preferences, budget, and schedule.
          </p>
          <Link
            href="/quote"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Request Custom Package
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
