interface PackageModalProps {
  open: boolean;
  onClose: () => void;
  pkg: {
    image: string;
    name: string;
    description: string;
    destinations: string[];
    includes: string[];
    startingPrice: string;
    [key: string]: any;
  } | null;
}
import React, { useRef, useEffect } from "react";

export default function PackageModal({ open, onClose, pkg }: PackageModalProps) {
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
  if (!open || !pkg) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div ref={modalRef} className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-fadein">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 group"
          aria-label="Close"
        >
          <span className="block w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 shadow hover:from-blue-200 hover:to-teal-200 flex items-center justify-center transition-all border border-blue-200 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
        <div className="mb-6">
          <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{pkg.name}</h2>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Destinations</p>
            <div className="flex flex-wrap gap-2">
              {pkg.destinations.map((dest: string) => (
                <span key={dest} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">{dest}</span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Includes</p>
            <ul className="grid grid-cols-2 gap-1">
              {pkg.includes.map((item: string) => (
                <li key={item} className="flex items-center text-xs text-gray-600">
                  <svg className="w-3 h-3 text-teal-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-xs text-gray-500">Starting from</span>
              <p className="text-2xl font-bold text-blue-600">{pkg.startingPrice}</p>
            </div>
            <a
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
