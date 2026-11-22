export const DESTINATIONS = ["Dubai", "Maldives", "Thailand"] as const;

export function isDestination(value: unknown): value is (typeof DESTINATIONS)[number] {
  return typeof value === "string" && DESTINATIONS.some((destination) => destination === value);
}

export const DESTINATION_ERROR = "Choose Dubai, Maldives, or Thailand.";

export const destinationCards = [
  {
    name: DESTINATIONS[0],
    image: "/dubai-skyline.jpg",
    description: "Compare four Dubai honeymoons of four to six nights, with desert safaris, city tours and breakfast for two.",
  },
  {
    name: DESTINATIONS[1],
    image: "/couples-maldives.jpg",
    description: "Relax in luxury overwater villas, snorkel in turquoise lagoons, and enjoy sunsets on white-sand beaches.",
  },
  {
    name: DESTINATIONS[2],
    image: "/couples-thailand.jpg",
    description: "Discover golden temples in Bangkok, relax on Phuket’s beaches, and enjoy Thai food and hospitality.",
  },
];
