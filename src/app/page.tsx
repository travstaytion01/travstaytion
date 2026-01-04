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

const companyHighlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Reach",
    description: "Access to 50+ handpicked destinations across the globe",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trusted & Reliable",
    description: "15+ years of delivering exceptional travel experiences",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Customer First",
    description: "Personalized service tailored to your unique preferences",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
            alt="Beautiful beach destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-cyan-300 font-medium text-sm sm:text-base tracking-wide mb-4">
            ✦ TRUSTED BY 10,000+ TRAVELERS
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Discover Your Next
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Adventure</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Handcrafted travel experiences to the world&apos;s most stunning destinations. Let us turn your travel dreams into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:shadow-teal-500/25"
            >
              Get Free Quote
            </Link>
            <Link
              href="/packages"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
            >
              View Packages
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {[
              { value: "10K+", label: "Happy Travelers" },
              { value: "50+", label: "Destinations" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-teal-600 font-semibold text-sm tracking-wide mb-3">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Travel with Confidence
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-white hover:bg-teal-50 transition-all group shadow-sm hover:shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-gradient-to-br from-teal-100 to-cyan-100 group-hover:from-teal-500 group-hover:to-cyan-500 rounded-xl flex items-center justify-center text-teal-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed hidden sm:block">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-teal-600 font-semibold text-sm tracking-wide mb-3">POPULAR DESTINATIONS</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Trending Destinations
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-4 sm:mt-0 text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 group"
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

      {/* About TravStaytion Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-teal-600 font-semibold text-sm tracking-wide mb-3">ABOUT US</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Travel Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At <span className="font-semibold text-teal-600">TravStaytion</span>, we believe that travel is more than just visiting new places — it&apos;s about creating memories that last a lifetime.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in crafting personalized travel experiences, we&apos;ve helped thousands of travelers explore the world&apos;s most stunning destinations. From exotic beach getaways to thrilling adventure tours, our dedicated team ensures every journey is seamless, memorable, and tailored to your unique preferences.
              </p>
              
              {/* Highlights */}
              <div className="space-y-4">
                {companyHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center text-teal-600">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
                    alt="Beach destination"
                    className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop"
                    alt="Mountain adventure"
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop"
                    alt="Luxury resort"
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop"
                    alt="City exploration"
                    className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Next Trip?
          </h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Get a personalized quote from our travel experts. We&apos;ll help you plan the perfect vacation within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
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
