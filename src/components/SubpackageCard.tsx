"use client";
import React from "react";
import Link from "next/link";

interface SubpackageProps {
  package: {
    id: number;
    name: string;
    image: string;
    nights: number;
    itinerary: string;
    hotelRating: number;
    activities: number;
    hasSharedTransfer?: boolean;
    hasPrivateTransfer?: boolean;
    has24x7Concierge: boolean;
    price: number;
    pricePerNight: boolean;
    isSooperHitPick: boolean;
    highlights: string[];
    inclusions: string[];
  };
  onCustomize: () => void;
}

export default function SubpackageCard({ package: pkg, onCustomize }: SubpackageProps) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative md:w-[280px] lg:w-[360px] flex-shrink-0 overflow-hidden">
          <div className="aspect-[16/9] md:aspect-auto md:h-full">
            {pkg.isSooperHitPick && (
              <div className="absolute top-0 left-0 z-10">
                <div className="bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold flex items-center gap-1 rounded-br-lg shadow-md">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="hidden sm:inline">SOOPER HIT PICK</span>
                  <span className="sm:hidden">TOP PICK</span>
                </div>
              </div>
            )}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Mobile: Show price overlay on image */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 md:hidden">
              <p className="text-2xl font-bold text-white">
                ₹{pkg.price.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-gray-300">{pkg.nights} nights / person</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-5 md:p-6">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{pkg.name}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                <span className="font-semibold text-gray-800">{pkg.nights}N</span>
                <span className="mx-1.5 sm:mx-2">•</span>
                <span className="text-gray-500">{pkg.itinerary}</span>
              </p>
            </div>

            {/* Features - Compact grid on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-4 sm:gap-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
              <span className="flex items-center gap-1 sm:gap-1.5 text-gray-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{pkg.hotelRating}<span className="text-yellow-500">★</span> Hotels</span>
              </span>
              
              <span className="flex items-center gap-1 sm:gap-1.5 text-gray-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {pkg.activities} Activities
              </span>

              {(pkg.hasSharedTransfer || pkg.hasPrivateTransfer) && (
                <span className="flex items-center gap-1 sm:gap-1.5 text-gray-700">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {pkg.hasPrivateTransfer ? 'Private' : 'Shared'} Transfer
                </span>
              )}

              {pkg.has24x7Concierge && (
                <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-600">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24x7 Support
                </span>
              )}
            </div>

            {/* Highlights - Show 2 on mobile, 4 on desktop */}
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs">
                    {highlight}
                  </span>
                ))}
                <span className="hidden sm:inline-flex bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                  {pkg.highlights[2]}
                </span>
                {pkg.highlights.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs">
                    +{pkg.highlights.length - 2} more
                  </span>
                )}
              </div>
            </div>

            {/* Price and CTA - Desktop only price (mobile shows on image) */}
            <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <div className="hidden md:block">
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {pkg.nights} nights / person
                </p>
              </div>
              <button
                onClick={onCustomize}
                className="w-full md:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Customize Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
