"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const packagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (packagesRef.current && !packagesRef.current.contains(event.target as Node)) {
        setIsPackagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const destinationPackages = [
    { name: "Dubai Packages", href: "/packages/dubai", icon: "🏙️", badge: "Popular" },
    // Add more destinations here as needed
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-1">
              {/* Logo Icon with Roof */}
              <div className="relative">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wide">TRAV</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wide relative">
                  <span className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2">
                    <svg width="28" height="12" viewBox="0 0 28 12" className="w-5 h-2 sm:w-7 sm:h-3">
                      <path d="M2 10 L14 2 L26 10" stroke="#C4915A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  S
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wide">TAYTI</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wide relative">
                  O
                  <span className="absolute -top-1 -right-3 sm:-right-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E3A5F]">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
                    </svg>
                  </span>
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wide">N</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Home
            </Link>
            <Link href="/destinations" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Destinations
            </Link>
            
            {/* Packages Dropdown */}
            <div className="relative" ref={packagesRef}>
              <button
                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                onMouseEnter={() => setIsPackagesOpen(true)}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50 flex items-center gap-1"
              >
                Packages
                <svg className={`w-4 h-4 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${isPackagesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseLeave={() => setIsPackagesOpen(false)}
              >
                <div className="p-2">
                  <Link
                    href="/packages"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsPackagesOpen(false)}
                  >
                    All Packages
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">By Destination</p>
                  {destinationPackages.map((dest) => (
                    <Link
                      key={dest.href}
                      href={dest.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setIsPackagesOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span>{dest.icon}</span>
                        <span>{dest.name}</span>
                      </span>
                      {dest.badge && (
                        <span className="text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-0.5 rounded-full">
                          {dest.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Contact
            </Link>
            <Link
              href="/quote"
              className="ml-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-1 pt-4 border-t">
            <Link href="/" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/destinations" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
            
            {/* Mobile Packages Section */}
            <div className="px-4 py-3">
              <p className="text-gray-700 font-medium mb-2">Packages</p>
              <div className="pl-4 space-y-1">
                <Link href="/packages" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                  All Packages
                </Link>
                {destinationPackages.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{dest.icon}</span>
                    <span>{dest.name}</span>
                    {dest.badge && (
                      <span className="text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-0.5 rounded-full">
                        {dest.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/quote"
                className="block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
