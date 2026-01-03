import type { Metadata } from "next";
import DestinationCard from "@/components/DestinationCard";

export const metadata: Metadata = {
  title: "Destinations | TravStaytion - Explore Amazing Travel Destinations",
  description: "Explore our handpicked travel destinations including Singapore, Bali, Maldives, Thailand, Japan, and more. Find your perfect vacation spot with TravStaytion.",
};

const destinations = [
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    description: "Marvel at the futuristic skyline of Marina Bay, enjoy thrilling attractions at Sentosa, and savor diverse cuisine in this vibrant city-state.",
    price: "₹54,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Hong Kong",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Explore dazzling skyscrapers, bustling street markets, Victoria Peak views, and a unique blend of Eastern and Western cultures.",
    price: "₹57,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Relax in luxury overwater villas, snorkel in turquoise lagoons, and enjoy romantic sunsets on pristine white-sand beaches.",
    price: "₹84,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    description: "Discover golden temples in Bangkok, relax on Phuket’s beaches, and taste world-famous Thai street food and hospitality.",
    price: "₹49,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Malaysia",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Visit the iconic Petronas Towers, explore lush rainforests, and enjoy a melting pot of cultures and cuisines in Malaysia.",
    price: "₹47,999",
    rating: 5,
    days: "6 Days / 5 Nights",
  },
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description: "See the Burj Khalifa, shop in grand malls, go desert dune bashing, and enjoy luxury in the Middle East’s most dynamic city.",
    price: "₹49,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Goa",
    image: "https://i.pinimg.com/736x/4a/6e/65/4a6e6598e8c9c1389d6b10fd08d836ab.jpg",
    description: "Unwind on sun-kissed beaches, party at beach clubs, and discover the unique blend of Indian and Portuguese culture in Goa.",
    price: "₹19,999",
    rating: 5,
    days: "5 Days / 4 Nights",
  },
  {
    name: "Sikkim",
    image: "https://i.pinimg.com/736x/82/0d/5f/820d5f79056469316e0bbe76134e70db.jpg",
    description: "Marvel at snow-capped mountains, visit peaceful monasteries, and enjoy the natural beauty and adventure of Sikkim.",
    price: "₹27,999",
    rating: 5,
    days: "6 Days / 5 Nights",
  },
  {
    name: "Rajasthan",
    image: "https://i.pinimg.com/1200x/9e/c0/dc/9ec0dcc384d6e8c437e3aecd2e7ac37d.jpg",
    description: "Tour majestic forts and palaces, ride camels in the Thar Desert, and experience the vibrant colors and traditions of Rajasthan.",
    price: "₹17,999",
    rating: 5,
    days: "4 Days / 3 Nights",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt="Travel destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore Our Destinations
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover handpicked destinations around the world, each offering unique experiences and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find Your Dream Destination?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We offer custom travel packages to over 100 destinations worldwide. Contact us to plan your perfect trip!
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Request Custom Package
          </a>
        </div>
      </section>
    </>
  );
}
