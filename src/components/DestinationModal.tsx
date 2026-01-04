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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto" style={{backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.7)'}}>
      <div
        ref={modalRef}
        className="backdrop-blur-xl bg-white/90 border border-blue-100 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-lg relative animate-fadeIn overflow-hidden my-auto"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', maxHeight: '90vh' }}
      >
        {/* Scrollable content wrapper */}
        <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-36 sm:h-44 md:h-48 object-cover"
              style={{ objectPosition: 'center' }}
            />
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all border border-blue-100"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 md:p-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1.5 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight">{name}</h2>
            
            {/* Rating and Days */}
            <div className="flex items-center justify-center gap-1 mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5 sm:ml-2 text-gray-600 font-medium text-xs sm:text-sm">{days}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 sm:mb-5 text-center text-sm sm:text-base leading-relaxed bg-gray-50 rounded-xl px-3 py-2 sm:py-2.5 border border-gray-100">{description}</p>
            
            {/* Package Options */}
            <div className="mb-4 sm:mb-5">
              <h3 className="font-semibold mb-2 sm:mb-3 text-blue-600 text-center text-sm sm:text-base">Choose your package:</h3>
              <div className="space-y-2 sm:space-y-3">
                {detailedOptions.map(option => (
                  <label
                    key={option.priceKey}
                    className={`flex items-start gap-3 cursor-pointer rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border transition-all duration-200 ${selected === option.priceKey ? 'border-blue-400 ring-2 ring-blue-400/50 bg-gradient-to-r from-blue-50 to-teal-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                  >
                    <input
                      type="radio"
                      name="packageOption"
                      value={option.priceKey}
                      checked={selected === option.priceKey}
                      onChange={() => setSelected(option.priceKey)}
                      className="accent-blue-600 mt-0.5 w-4 h-4 flex-shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">{option.label}</span>
                      <span className="text-xs text-gray-500 leading-snug mt-0.5">{option.description}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="text-center sm:text-left">
                <span className="text-gray-500 text-xs sm:text-sm">Price:</span>
                <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 ml-1.5 sm:ml-2">{price}</span>
              </div>
              <a
                href="/quote"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
