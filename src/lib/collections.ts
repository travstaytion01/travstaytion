import { THAILAND_ITINERARIES } from "./thailand-itineraries";

export const collections = {
  maldives: {
    name: "Maldives", image: "/couples-maldives.jpg", alt: "Illustration of a couple on a jetty beside Maldivian water villas at sunset",
    region: "Indian Ocean", intro: "Choose your island rhythm. Stay close to the reef, split your time between villas, or leave the days open for the lagoon.",
    trips: [
      {name: "The lagoon weekend", image: "/itineraries/lagoon.webp", alt: "Shallow turquoise lagoon beside a palm-lined beach", nights: 3, route: "Single resort island", description: "Settle into a beach villa and keep transfers simple.", days: ["Arrive in Malé and transfer to the island.", "Spend two days between the lagoon and a guided reef snorkel.", "Return to Malé for departure."]},
      {name: "Sand to overwater", image: "/itineraries/overwater.webp", alt: "Wooden walkway leading to thatched overwater villas", nights: 4, route: "Beach villa → water villa", description: "Try two sides of one island with a mid-stay villa change.", days: ["Begin with two nights by the beach.", "Move overwater for two nights and request a sunset dinner.", "Transfer to the airport."]},
      {name: "The slow island stay", image: "/itineraries/reef.webp", alt: "Tropical fish swimming above a coral reef", nights: 6, route: "Reef, spa and open days", description: "Leave time for a guided swim and a day with no excursions.", days: ["Settle in and explore the house reef with a guide.", "Choose a spa afternoon or a boat outing, subject to sea conditions.", "Keep the final days open before your return transfer."]},
    ],
  },
  thailand: {
    name: "Thailand", image: "/couples-thailand.jpg", alt: "Illustration of a couple in a longtail boat below limestone cliffs in Krabi",
    region: "Southeast Asia", intro: "Pair Bangkok’s food and riverside neighbourhoods with time on the Andaman coast, or make the islands the whole trip.",
    trips: THAILAND_ITINERARIES.map(trip => ({
      ...trip,
      days: trip.days.map(day => `${day.title}: ${day.details.join(" ")}`),
    })),
  },
} as const;
