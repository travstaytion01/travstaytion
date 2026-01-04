"use client";
import Link from "next/link";
import React from "react";
import DestinationModal from "./DestinationModal";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
  rating: number;
  days: string;
}

export default function DestinationCard({ name, image, description, price, rating, days }: DestinationCardProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Days badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
            <span className="text-xs sm:text-sm font-semibold text-gray-800">{days}</span>
          </div>
          
          {/* Rating and name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="flex items-center space-x-1 mb-1 sm:mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < rating ? "text-yellow-400" : "text-gray-400/50"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white text-xs sm:text-sm ml-1 font-medium">{rating}.0</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">{name}</h3>
          </div>
        </div>
        
        <div className="p-4 sm:p-5 lg:p-6">
          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-xs sm:text-sm text-gray-500 block">Starting from</span>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">{price}</p>
            </div>
            <Link
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <DestinationModal
        open={open}
        onClose={() => setOpen(false)}
        name={name}
        image={image}
        description={description}
        days={days}
        rating={rating}
        price={price}
      />
    </>
  );
}
