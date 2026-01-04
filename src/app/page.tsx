import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";

const destinations = [
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    description: "Experience the perfect blend of modern architecture, world-class shopping, and vibrant street food culture.",
    price: "₹74,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Discover tropical paradise with stunning temples, lush rice terraces, and pristine beaches.",
    price: "₹89,999",
    rating: 5,
    days: "7 Days / 6 Nights",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Indulge in luxury overwater villas, crystal-clear waters, and world-class diving experiences.",
    price: "₹1,99,999",
    rating: 5,
    days: "6 Days / 5 Nights",
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safe & Secure",
    description: "Your safety is our priority. All trips are fully insured and vetted for quality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Price Guarantee",
    description: "Get the best deals and lowest prices. We match any competitor's offer.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Our travel experts are available around the clock to assist you.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Personalized Trips",
    description: "Custom itineraries tailored to your preferences and travel style.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    text: "TravStaytion made our honeymoon absolutely magical! The attention to detail and personalized service exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "Best travel experience ever! From booking to return, everything was seamless. Highly recommend their Bali package.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    text: "The Maldives trip was a dream come true. TravStaytion's team went above and beyond to make it perfect.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced with particles and animation */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
            alt="Beautiful beach destination"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-teal-900/80" />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 border border-white/20 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Award-Winning Travel Agency 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Your Dream Vacation
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Awaits You
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 4 150 6C200 8 250 4 298 8" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#5eead4"/>
                    <stop offset="1" stopColor="#60a5fa"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking destinations, curated experiences, and unforgettable memories with TravStaytion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/destinations"
              className="group bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Explore Destinations
            </Link>
          </div>

          {/* Stats - Enhanced with glass effect */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "10K+", label: "Happy Travelers", icon: "😊" },
              { value: "50+", label: "Destinations", icon: "🌍" },
              { value: "15+", label: "Years Experience", icon: "⭐" },
              { value: "4.9", label: "Customer Rating", icon: "💎" },
            ].map((stat) => (
              <div key={stat.label} className="relative group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator - Enhanced */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with better cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel with <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Confidence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience world-class service and create memories that last a lifetime
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                <div className="relative text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-teal-200 rounded-full opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4">
                Popular Destinations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Explore Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Top Picks</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              View All Destinations
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-orange-700 font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Travelers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers who made their dreams come true
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-6 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Limited Time Offer - 20% Off
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your
            <br />
            <span className="text-teal-300">Adventure?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Get a personalized quote for your dream vacation today. Our travel experts are ready to help you plan the perfect trip.
          </p>
          <Link
            href="/quote"
            className="group inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote Now
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
