export const DESTINATIONS = ["Dubai", "Maldives", "Thailand"] as const;

export function isDestination(value: unknown): value is (typeof DESTINATIONS)[number] {
  return typeof value === "string" && DESTINATIONS.some((destination) => destination === value);
}

export const DESTINATION_ERROR = "Choose Dubai, Maldives, or Thailand.";

export const destinationCards = [
  {
    name: DESTINATIONS[0],
    image: "/dubai-skyline.jpg",
    description: "See the Burj Khalifa, shop in grand malls, go desert dune bashing, and enjoy a luxury city escape.",
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
