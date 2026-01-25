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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
            <img 
              src="/image.png" 
              alt="TravStaytion Logo" 
              className="max-h-full w-auto object-contain"
              style={{ maxWidth: '280px', height: 'auto', maxHeight: '100%' }}
            />
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
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col pt-4 pb-2 border-t border-gray-100">
            {/* Mobile Menu Items */}
            <Link 
              href="/" 
              className="flex items-center gap-3 mx-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 group" 
              onClick={() => setIsOpen(false)}
            >
              <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </span>
              Home
            </Link>
            
            <Link 
              href="/destinations" 
              className="flex items-center gap-3 mx-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 group" 
              onClick={() => setIsOpen(false)}
            >
              <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              Destinations
            </Link>
            
            {/* Mobile Packages Section */}
            <div className="mx-2 px-4 py-3">
              <div className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </span>
                Packages
              </div>
              <div className="ml-11 space-y-1 border-l-2 border-gray-100 pl-4">
                <Link 
                  href="/packages" 
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-sm font-medium" 
                  onClick={() => setIsOpen(false)}
                >
                  All Packages
                </Link>
                {destinationPackages.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    className="flex items-center gap-2 py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{dest.icon}</span>
                    <span>{dest.name}</span>
                    {dest.badge && (
                      <span className="text-[10px] bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-0.5 rounded-full font-medium">
                        {dest.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/about" 
              className="flex items-center gap-3 mx-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 group" 
              onClick={() => setIsOpen(false)}
            >
              <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              About Us
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center gap-3 mx-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 group" 
              onClick={() => setIsOpen(false)}
            >
              <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              Contact
            </Link>
            
            {/* CTA Button */}
            <div className="mx-2 mt-3 pt-3 border-t border-gray-100">
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
