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
    icon: "🛡️",
    title: "Safe & Secure",
    description: "Fully insured trips with 24/7 emergency support.",
  },
  {
    icon: "💰",
    title: "Best Price",
    description: "Guaranteed lowest prices with price match promise.",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    description: "Expert assistance available around the clock.",
  },
  {
    icon: "❤️",
    title: "Personalized",
    description: "Custom itineraries tailored to your preferences.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Innovative Animated Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Gradient */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
            alt="Beautiful beach destination"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-teal-900/70 animate-gradientFlow" />
          
          {/* Animated Floating Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-morphBlob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-morphBlob" style={{ animationDelay: '-5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-morphBlob" style={{ animationDelay: '-2.5s' }} />
          
          {/* Flying Plane Animation */}
          <div className="absolute top-1/4 left-0 text-4xl animate-flyPlane">✈️</div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-32 right-20 hidden lg:block animate-floatUp" style={{ animationDelay: '0s' }}>
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center text-3xl rotate-12">
            🌴
          </div>
        </div>
        <div className="absolute bottom-40 left-20 hidden lg:block animate-floatUp" style={{ animationDelay: '-2s' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-2xl flex items-center justify-center text-2xl -rotate-12">
            🏖️
          </div>
        </div>
        <div className="absolute top-1/2 right-32 hidden lg:block animate-floatUp" style={{ animationDelay: '-4s' }}>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-xl">
            🌊
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge with Animation */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-heroReveal">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium">TRUSTED BY 10,000+ TRAVELERS</span>
          </div>
          
          {/* Main Headline with Staggered Animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05]">
            <span className="block animate-heroReveal" style={{ animationDelay: '0.1s' }}>
              Discover Your
            </span>
            <span className="block mt-2 animate-heroReveal" style={{ animationDelay: '0.3s' }}>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-textGradient bg-[length:200%_auto]">
                  Dream Journey
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#underlineGradient)" strokeWidth="4" strokeLinecap="round" className="animate-slideInLeft" style={{ animationDelay: '0.8s' }}/>
                  <defs>
                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA"/>
                      <stop offset="50%" stopColor="#A78BFA"/>
                      <stop offset="100%" stopColor="#2DD4BF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-heroReveal" style={{ animationDelay: '0.5s' }}>
            Handcrafted travel experiences to the world&apos;s most breathtaking destinations. 
            <span className="text-white font-semibold"> Let us turn your travel dreams into reality.</span>
          </p>
          
          {/* CTA Buttons with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-heroReveal" style={{ animationDelay: '0.7s' }}>
            <Link
              href="/quote"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-3">
                Get Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/60 px-10 py-5 rounded-2xl text-lg font-bold transition-all backdrop-blur-md"
            >
              <span className="text-2xl group-hover:animate-bounce">✈️</span>
              Explore Packages
            </Link>
          </div>

          {/* Animated Stats Cards */}
          <div className="mt-20 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto stagger-children">
            {[
              { value: "10K+", label: "Happy Travelers", icon: "😊", color: "from-blue-500 to-cyan-500" },
              { value: "50+", label: "Destinations", icon: "🌍", color: "from-purple-500 to-pink-500" },
              { value: "15+", label: "Years Experience", icon: "⭐", color: "from-orange-500 to-yellow-500" },
              { value: "4.9★", label: "Rating", icon: "🏆", color: "from-teal-500 to-green-500" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all hover:scale-105 hover:border-white/40 animate-bounceIn"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator with Animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-heroReveal" style={{ animationDelay: '1.2s' }}>
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Features Section with Card Animations */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              ✨ WHY CHOOSE US
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Travel with
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Confidence</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We make your travel experience seamless, safe, and unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative text-center p-6 sm:p-8 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent hover:-translate-y-3"
              >
                <div className="text-5xl sm:text-6xl mb-5 group-hover:scale-125 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors hidden sm:block">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                🌍 POPULAR DESTINATIONS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Trending
                <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent"> Destinations</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-all"
            >
              View All
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Effect */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="Travel adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-teal-900/95" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 text-6xl animate-floatUp opacity-20">✈️</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-floatUp opacity-20" style={{ animationDelay: '-3s' }}>🌴</div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-6xl mb-6 animate-bounce">🎒</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready for Your
            <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Next Adventure?
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a personalized quote from our travel experts. We&apos;ll help you plan the perfect vacation within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              Get Free Quote
              <span className="group-hover:rotate-12 transition-transform">🚀</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-2xl text-lg font-bold transition-all"
            >
              <span>📞</span>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
