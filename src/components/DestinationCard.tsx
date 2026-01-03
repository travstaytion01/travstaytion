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
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-800">{days}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white text-sm ml-1">{rating}.0</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">Starting from</span>
              <p className="text-2xl font-bold text-blue-600">{price}</p>
            </div>
            <Link
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
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
