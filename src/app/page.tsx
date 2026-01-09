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
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safe & Secure",
    description: "Fully insured trips with 24/7 emergency support.",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Price",
    description: "Guaranteed lowest prices with price match promise.",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Expert assistance available around the clock.",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Personalized",
    description: "Custom itineraries tailored to your preferences.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Fits exactly in viewport */}
      <section className="relative h-[100dvh] pt-14 sm:pt-16 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-blue-50 to-cyan-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sun glow - animated */}
          <div className="absolute -top-10 -right-10 sm:top-8 sm:right-8 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-yellow-200 via-orange-100 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow" />
          
          {/* Floating clouds with animations */}
          <div className="absolute top-[12%] left-[3%] w-20 h-8 sm:w-36 sm:h-14 lg:w-48 lg:h-18 bg-white/70 rounded-full blur-xl animate-float-slow" />
          <div className="absolute top-[8%] right-[5%] w-28 h-10 sm:w-44 sm:h-16 lg:w-60 lg:h-20 bg-white/60 rounded-full blur-2xl animate-float-slow-reverse" />
          <div className="absolute top-[25%] left-[12%] w-16 h-6 sm:w-28 sm:h-10 lg:w-40 lg:h-14 bg-white/50 rounded-full blur-xl animate-float-medium" />
          <div className="absolute top-[18%] right-[20%] w-14 h-5 sm:w-24 sm:h-8 lg:w-32 lg:h-12 bg-white/40 rounded-full blur-lg animate-float-slow" />
          
          {/* Wave silhouette at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[12%] sm:h-[15%] lg:h-[18%]">
            <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
              <path fill="rgba(30, 58, 138, 0.12)" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L0,320Z" />
              <path fill="rgba(20, 184, 166, 0.08)" d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,261.3C840,267,960,245,1080,224C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z" />
            </svg>
          </div>
        </div>

        {/* Main Content - Carefully sized to fit viewport */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)]">
          {/* Subtitle */}
          <p className="text-blue-600 font-semibold text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 animate-fade-in-down">
            ✈ EXPERIENCE THE WORLD
          </p>
          
          {/* Main heading */}
          <h1 className="mb-3 sm:mb-4 lg:mb-5 animate-fade-in-up">
            <span className="block text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 tracking-tight">YOUR JOURNEY</span>
            <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-0.5 sm:mt-1">BEGINS HERE</span>
          </h1>
          
          {/* Airplane Window - sized to fit */}
          <div className="relative w-32 h-40 sm:w-44 sm:h-56 md:w-52 md:h-64 lg:w-60 lg:h-[19rem] mb-3 sm:mb-4 lg:mb-5 animate-scale-in group">
            {/* Outer frame with shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-[45%] shadow-2xl group-hover:shadow-3xl transition-shadow duration-500" />
            {/* Inner bezel */}
            <div className="absolute inset-[3px] sm:inset-1 lg:inset-2 bg-gradient-to-b from-gray-50 to-gray-200 rounded-[44%] p-1 sm:p-1.5 lg:p-2">
              <div className="w-full h-full bg-gradient-to-b from-gray-500 to-gray-700 rounded-[42%] p-[2px] sm:p-1">
                {/* Window view with slow zoom */}
                <div className="relative w-full h-full rounded-[40%] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=800&q=85" 
                    alt="Tropical Paradise View" 
                    className="w-full h-full object-cover animate-slow-zoom" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-transparent to-blue-500/10" />
                </div>
              </div>
            </div>
            {/* Glass reflection - animated shimmer */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 lg:top-6 lg:left-7 w-4 h-10 sm:w-5 sm:h-14 lg:w-6 lg:h-18 bg-white/50 rounded-full blur-[2px] -rotate-12 animate-shimmer" />
          </div>
          
          {/* CTA Button with animations */}
          <Link href="/packages" className="group relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center mb-3 sm:mb-4 lg:mb-5 animate-bounce-gentle">
            {/* Pulse ring effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 animate-ping-slow opacity-25" />
            <span className="absolute inset-0 rounded-full ring-4 ring-white/40" />
            <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-light tracking-wide relative z-10">Let&apos;s</span>
            <span className="text-sm sm:text-base lg:text-lg font-bold relative z-10">GO</span>
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 mt-0.5 relative z-10 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </Link>
          
          {/* Tagline */}
          <p className="text-gray-600 text-[11px] sm:text-sm lg:text-base max-w-[260px] sm:max-w-sm lg:max-w-md mb-2 sm:mb-3 lg:mb-4 leading-relaxed animate-fade-in">
            Crafting <span className="text-blue-600 font-semibold">unforgettable journeys</span> to extraordinary destinations
          </p>
          
          {/* Trust Badges - compact */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3">
            {[{ icon: "⭐", text: "4.9 Rating" }, { icon: "✈️", text: "10K+ Trips" }, { icon: "🌍", text: "50+ Destinations" }].map((b, i) => (
              <div 
                key={b.text} 
                className="flex items-center gap-1 sm:gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-md border border-gray-100 text-[9px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <span className="text-xs sm:text-sm lg:text-base">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Flying planes - decorative */}
        <div className="absolute top-[15%] right-[6%] sm:top-[18%] sm:right-[10%] text-xl sm:text-2xl lg:text-3xl animate-fly-plane">✈️</div>
        <div className="hidden sm:block absolute top-[30%] left-[4%] text-lg sm:text-xl opacity-40 animate-fly-plane-reverse">✈️</div>
        
        {/* Scroll indicator - subtle bounce */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-50">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section - Fully Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">WHY TRAVELERS CHOOSE US</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Travel with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Confidence</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group text-center p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-5 bg-gradient-to-br from-blue-100 to-teal-100 group-hover:from-white/20 group-hover:to-white/20 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 group-hover:text-white mb-1 sm:mb-2 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-[10px] sm:text-xs md:text-sm leading-relaxed transition-colors hidden sm:block">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section - Fully Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 lg:mb-14">
            <div>
              <p className="text-teal-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">POPULAR DESTINATIONS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">Destinations</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-3 sm:mt-0 text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1.5 sm:gap-2 group text-sm sm:text-base"
            >
              View All
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Fully Responsive */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { value: "10K+", label: "Happy Travelers" },
              { value: "50+", label: "Destinations" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fully Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="Travel adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready for Your Next Trip?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto">
            Get a personalized quote from our travel experts. We&apos;ll help you plan the perfect vacation within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
