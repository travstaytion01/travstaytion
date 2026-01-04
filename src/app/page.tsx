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
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safe & Secure",
    description: "Fully insured trips with 24/7 emergency support.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Price",
    description: "Guaranteed lowest prices with price match promise.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Expert assistance available around the clock.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      {/* Hero Section - Airplane Window Concept */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        {/* Animated Background Clouds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-16 bg-white/60 rounded-full blur-xl animate-floatUp" style={{ animationDuration: '8s' }} />
          <div className="absolute top-40 right-20 w-48 h-20 bg-white/50 rounded-full blur-xl animate-floatUp" style={{ animationDuration: '10s', animationDelay: '-3s' }} />
          <div className="absolute bottom-40 left-1/4 w-40 h-16 bg-white/40 rounded-full blur-xl animate-floatUp" style={{ animationDuration: '12s', animationDelay: '-5s' }} />
          <div className="absolute top-1/3 right-1/3 w-56 h-24 bg-white/30 rounded-full blur-2xl animate-floatUp" style={{ animationDuration: '15s', animationDelay: '-7s' }} />
          
          {/* Mountain silhouettes at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
              <path fill="rgba(30, 58, 138, 0.15)" d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,250.7C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
              <path fill="rgba(20, 184, 166, 0.1)" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,197.3C672,192,768,224,864,234.7C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          {/* Animated Text */}
          <p className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-[0.3em] mb-6 animate-heroReveal">
            E X P E R I E N C E
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] animate-heroReveal" style={{ animationDelay: '0.2s' }}>
            <span className="text-blue-900 block">EXTRAORDINARY</span>
          </h1>
          
          {/* Airplane Window */}
          <div className="relative mx-auto w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] my-8 animate-heroReveal" style={{ animationDelay: '0.4s' }}>
            {/* Window Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[40%] shadow-2xl p-3 sm:p-4">
              {/* Inner Window */}
              <div className="relative w-full h-full rounded-[38%] overflow-hidden shadow-inner">
                {/* View through window - animated destination */}
                <div className="absolute inset-0 animate-slow-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                    alt="Tropical beach destination"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Aurora/Northern lights effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 via-transparent to-blue-600/20 animate-gradientFlow" />
                
                {/* Stars twinkling effect */}
                <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full animate-sparkle" />
                <div className="absolute top-8 right-10 w-1.5 h-1.5 bg-white rounded-full animate-sparkle" style={{ animationDelay: '-1s' }} />
                <div className="absolute top-12 left-1/3 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '-2s' }} />
              </div>
            </div>
            
            {/* Window glare effect */}
            <div className="absolute top-6 left-8 sm:top-8 sm:left-10 w-16 h-24 sm:w-20 sm:h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm transform -rotate-12" />
          </div>
          
          {/* CTA Button - Circular like reference */}
          <div className="animate-heroReveal" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/packages"
              className="group relative inline-flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-110 mb-8"
            >
              <span className="text-xs font-light">Let&apos;s</span>
              <span className="text-lg font-bold">Go</span>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-heroReveal flex flex-col items-center gap-2" style={{ animationDelay: '0.8s' }}>
            <svg className="w-6 h-6 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Flying plane animation */}
        <div className="absolute top-1/4 left-0 text-3xl sm:text-4xl animate-flyPlane opacity-60">✈️</div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Travel with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Confidence</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 transition-all duration-300 group shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-gradient-to-br from-blue-100 to-teal-100 group-hover:from-white/20 group-hover:to-white/20 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed hidden sm:block transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">POPULAR DESTINATIONS</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">Destinations</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-4 sm:mt-0 text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group"
            >
              View All
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Happy Travelers" },
              { value: "50+", label: "Destinations" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm sm:text-base mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="Travel adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Next Trip?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Get a personalized quote from our travel experts. We&apos;ll help you plan the perfect vacation within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
