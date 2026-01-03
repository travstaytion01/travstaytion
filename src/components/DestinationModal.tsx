import React, { useRef, useEffect, useState } from "react";

interface DestinationModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  image: string;
  description: string;
  days: string;
  rating: number;
  price: string;
}

const detailedOptions = [
  {
    label: "With Flights & Hotels",
    priceKey: "withFlightsHotels",
    description: "Includes round-trip flights and premium hotel stay."
  },
  {
    label: "With Hotels Only",
    priceKey: "withHotels",
    description: "Includes premium hotel stay only."
  },
  {
    label: "Without Flights & Hotels",
    priceKey: "withoutFlightsHotels",
    description: "Excludes flights and hotels. Only local experiences and tours included."
  }
];
export default function DestinationModal({ open, onClose, name, image, description, days, rating, price }: DestinationModalProps) {
  const [selected, setSelected] = useState("withFlightsHotels");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 py-6 sm:py-12" style={{backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.7)'}}>
      <div
        ref={modalRef}
        className="backdrop-blur-xl bg-white/70 border border-blue-100 rounded-3xl shadow-2xl max-w-lg w-full p-0 sm:p-0 relative animate-fadeIn overflow-hidden"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 sm:h-56 object-cover rounded-t-3xl border-b border-blue-100"
            style={{ objectPosition: 'center' }}
          />
          <button
            className="absolute top-3 right-3 bg-gradient-to-br from-blue-100 to-teal-100 hover:from-blue-200 hover:to-teal-200 rounded-full p-2 shadow transition-colors border border-blue-100"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight drop-shadow">{name}</h2>
          <div className="flex items-center justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 font-medium text-sm">{days}</span>
          </div>
          <p className="text-gray-800 mb-5 text-center text-base sm:text-lg leading-relaxed bg-white/80 rounded-xl px-3 py-2 shadow-sm border border-blue-100">{description}</p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-blue-600 text-center">Choose your package:</h3>
            <div className="space-y-3">
              {detailedOptions.map(option => (
                <label
                  key={option.priceKey}
                  className={`flex flex-row items-center gap-4 cursor-pointer rounded-xl px-4 py-3 border border-blue-100 bg-white/90 shadow-sm transition-all duration-200 ${selected === option.priceKey ? 'ring-2 ring-blue-400 scale-[1.03] bg-gradient-to-r from-blue-50 to-teal-50' : 'hover:bg-blue-50'}`}
                  style={{ minHeight: '64px' }}
                >
                  <input
                    type="radio"
                    name="packageOption"
                    value={option.priceKey}
                    checked={selected === option.priceKey}
                    onChange={() => setSelected(option.priceKey)}
                    className="accent-blue-600 mt-0.5"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-semibold text-blue-900 leading-tight">{option.label}</span>
                    <span className="text-xs text-gray-500 leading-tight">{option.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-center sm:text-left">
              <span className="text-gray-500 text-sm">Price:</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 ml-2">{price}</span>
            </div>
            <a
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 drop-shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
