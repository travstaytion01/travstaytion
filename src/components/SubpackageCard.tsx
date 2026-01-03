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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative lg:w-[360px] h-64 lg:h-auto flex-shrink-0">
          {pkg.isSooperHitPick && (
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 px-4 py-1.5 text-sm font-bold flex items-center gap-1 rounded-br-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                SOOPER HIT PICK
              </div>
            </div>
          )}
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay for mobile */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">{pkg.nights} nights</span>
                <span className="mx-2">:</span>
                <span>{pkg.itinerary}</span>
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <span className="flex items-center gap-1.5 text-gray-700">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{pkg.hotelRating}</span>
                <span className="text-yellow-500">★</span>
                <span>Hotels</span>
              </span>
              
              <span className="flex items-center gap-1.5 text-gray-700">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {pkg.activities} activities
              </span>

              {pkg.hasSharedTransfer && (
                <span className="flex items-center gap-1.5 text-gray-700">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Shared Transfer
                </span>
              )}

              {pkg.hasPrivateTransfer && (
                <span className="flex items-center gap-1.5 text-gray-700">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Private Transfer
                </span>
              )}

              {pkg.has24x7Concierge && (
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24x7 concierge
                </span>
              )}
            </div>

            {/* Highlights - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Highlights</p>
              <div className="flex flex-wrap gap-2">
                {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-500">
                  {pkg.nights} nights / person
                </p>
              </div>
              <button
                onClick={onCustomize}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
