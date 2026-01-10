import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | TravStaytion - Your Trusted Travel Partner",
  description: "Learn about TravStaytion - over 15 years of experience crafting unforgettable travel experiences. Discover our mission to make your dream vacation a reality.",
};

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Passion for Travel",
    description: "We live and breathe travel. Our team has explored every corner of the globe.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Transparency",
    description: "No hidden fees, no surprises. We believe in honest, upfront communication.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Excellence in Service",
    description: "From first inquiry to return home, we deliver exceptional service at every step.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sustainable Tourism",
    description: "We promote responsible travel that benefits local communities and environments.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1920&q=80"
            alt="Travel adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4">
            ✨ Since 2009
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About TravStaytion
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences since 2009.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">
                Crafting Dreams Into Journeys
              </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                TravStaytion was born from a simple belief: everyone deserves to experience the magic of travel. What started as a small team of passionate travelers in 2009 has grown into one of the most trusted names in the travel industry.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                We&apos;ve helped over 10,000 travelers explore more than 50 destinations worldwide. From intimate honeymoon getaways to grand family adventures, we take pride in crafting each journey with meticulous attention to detail.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our success is measured not by the number of trips we book, but by the smiles on our travelers&apos; faces and the memories they bring back home.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80"
                alt="Travel adventure"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <p className="text-2xl sm:text-4xl font-bold">15+</p>
                <p className="text-xs sm:text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] animate-on-scroll-stagger touch-manipulation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-teal-500 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3 animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "10,000+", label: "Happy Travelers", icon: "😊" },
              { value: "50+", label: "Destinations", icon: "🌍" },
              { value: "15+", label: "Years Experience", icon: "🏆" },
              { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-on-scroll-stagger group cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-blue-100 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
            Let us help you plan the vacation of your dreams.
          </p>
          <Link
            href="/quote"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Get Your Free Quote
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
