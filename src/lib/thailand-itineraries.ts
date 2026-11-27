export interface ThailandItinerary {
  id: string;
  name: string;
  nights: number;
  route: string;
  description: string;
  image: string;
  alt: string;
  film?: string;
  filmPoster?: string;
  filmLabel?: string;
  rockBeachSwing: boolean;
  highlights: string[];
  accommodation: string[];
  notes: string[];
  days: { title: string; details: string[] }[];
}

// Package details supplied in “THAILAND ITINERARIES FOR WEBSITE.docx”.
// Display names follow the supplied packages; route labels follow actual day order.
export const THAILAND_ITINERARIES: ThailandItinerary[] = [
  {
    id: "phuket-couples-4n",
    name: "Phuket special for couples",
    nights: 4,
    route: "Phuket",
    description: "Island days, a sea-view swing and time just for the two of you.",
    image: "/thailand/phuket-beach.webp",
    alt: "Aerial photograph of longtail boats and palm trees beside a beach in Phuket",
    film: "/thailand/phuket-coast.mp4",
    filmPoster: "/thailand/phuket-coast.webp",
    filmLabel: "Phuket from above",
    rockBeachSwing: true,
    highlights: ["Rock Beach Swing", "Phi Phi by speedboat", "City tour & Tiger Park"],
    accommodation: ["4 nights in Phuket, with 3-star or 4-star hotel options.", "Daily breakfast for 2 adults on all 4 mornings.", "Hotel selection to suit your preference and budget."],
    notes: ["National park fees are excluded from the island excursion."],
    days: [
      { title: "Arrival in Phuket", details: ["Arrive at Phuket (HKT) Airport and take a private sedan transfer to your hotel.", "Check in and enjoy time at leisure."] },
      { title: "Phuket City Tour & Tiger Park", details: ["Phuket City Tour with Big Buddha and Tiger Park.", "Seat-in-coach transfers included."] },
      { title: "Phi Phi Island adventure", details: ["Visit Phi Phi Island, Maya Bay and Khai Island by shared speedboat.", "Local lunch and seat-in-coach transfers included; national park fees excluded."] },
      { title: "Rock Beach Swing", details: ["Visit Rock Beach Swing with private sedan transfers.", "Spend the rest of the day at leisure together."] },
      { title: "Departure", details: ["Breakfast at the hotel, followed by check-out.", "Private sedan transfer to Phuket (HKT) Airport."] },
    ],
  },
  {
    id: "phuket-krabi-5n",
    name: "Phuket + Krabi",
    nights: 5,
    route: "Phuket → Krabi",
    description: "Two coastal escapes, from Maya Bay to Krabi’s island-studded sea.",
    image: "/thailand/maya-bay.webp",
    alt: "Photograph of Maya Bay’s pale sand, turquoise water and limestone cliffs",
    film: "/thailand/phuket-coast.mp4",
    filmPoster: "/thailand/phuket-coast.webp",
    filmLabel: "A glimpse of Phuket’s coastline",
    rockBeachSwing: true,
    highlights: ["Rock Beach Swing", "Phi Phi & Maya Bay", "Krabi 4 Islands"],
    accommodation: ["5 nights across Phuket and Krabi, with 3-star or 4-star hotel options.", "Daily breakfast for 2 adults on all 5 mornings.", "Hotel selection to suit your preference and budget."],
    notes: ["National park fees are excluded from the Phi Phi and Krabi island excursions."],
    days: [
      { title: "Arrival in Phuket", details: ["Private sedan transfer from Phuket Airport to your hotel.", "Check in and enjoy time at leisure."] },
      { title: "Phi Phi Island excursion", details: ["Explore Phi Phi Island, Maya Bay and Khai Island by shared speedboat.", "Local lunch and seat-in-coach transfers included; national park fees excluded."] },
      { title: "Rock Beach Swing", details: ["Visit Rock Beach Swing with private sedan transfers.", "Leave time to relax together."] },
      { title: "Phuket to Krabi", details: ["Private sedan transfer from your Phuket hotel to your Krabi hotel.", "Check in and relax."] },
      { title: "Krabi 4 Islands Tour", details: ["Explore the 4 Islands by shared longtail boat.", "Local lunch and seat-in-coach transfers included; national park fees excluded."] },
      { title: "Departure from Krabi", details: ["Breakfast at the hotel and check-out.", "Private sedan transfer to Krabi Airport."] },
    ],
  },
  {
    id: "bangkok-phuket-6n",
    name: "Bangkok + Phuket",
    nights: 6,
    route: "Phuket → Bangkok",
    description: "Begin by the Andaman Sea, then trade island skies for Bangkok’s temples and markets.",
    image: "/thailand/bangkok-temple.webp",
    alt: "Photograph of Wat Arun beside the Chao Phraya River in Bangkok at dusk",
    film: "/thailand/bangkok-river.mp4",
    filmPoster: "/thailand/bangkok-river.webp",
    filmLabel: "Bangkok on the river",
    rockBeachSwing: true,
    highlights: ["Rock Beach Swing", "Phi Phi by speedboat", "Bangkok temples"],
    accommodation: ["6 nights across Phuket and Bangkok, with 3-star or 4-star hotel options.", "Daily breakfast for 2 adults on all 6 mornings.", "Hotel selection to suit your preference and budget."],
    notes: ["This itinerary begins in Phuket and ends in Bangkok.", "Phuket–Bangkok airfare is not included unless specified in your quote.", "National park fees are excluded from the island excursion."],
    days: [
      { title: "Arrival in Phuket", details: ["Arrive at Phuket (HKT) Airport and take a private sedan transfer to your hotel.", "Check in and enjoy time at leisure."] },
      { title: "Phi Phi Island excursion", details: ["Visit Phi Phi Island, Maya Bay and Khai Island by shared speedboat, 8:00 am–5:00 pm.", "Local lunch and seat-in-coach transfers included; national park fees excluded."] },
      { title: "Phuket City Tour & Rock Beach Swing", details: ["Explore Phuket City with Big Buddha and visit Rock Beach Swing, 10:00 am–5:00 pm.", "Private sedan transfers included."] },
      { title: "Phuket to Bangkok", details: ["Private sedan transfer to Phuket Airport for your flight to Bangkok; airfare excluded unless specified.", "Private sedan transfer from Bangkok Airport to your hotel, followed by check-in and relaxation."] },
      { title: "Bangkok City Tour", details: ["Guided tour of the Golden Temple and Marble Temple, 8:30 am–12:30 pm.", "Seat-in-coach transfers included."] },
      { title: "Shopping & leisure", details: ["A free day to explore Bangkok’s markets, shopping malls and city attractions at your own pace."] },
      { title: "Departure from Bangkok", details: ["Breakfast at the hotel and check-out.", "Private sedan transfer to Bangkok (BKK) Airport."] },
    ],
  },
  {
    id: "bangkok-pattaya-5n",
    name: "Bangkok + Pattaya",
    nights: 5,
    route: "Bangkok → Pattaya",
    description: "A river-lit evening in Bangkok, city discoveries and an island day off Pattaya.",
    image: "/thailand/bangkok-river.webp",
    alt: "Aerial photograph of Bangkok’s skyline and the Chao Phraya River at dusk",
    film: "/thailand/bangkok-river.mp4",
    filmPoster: "/thailand/bangkok-river.webp",
    filmLabel: "Bangkok on the river",
    rockBeachSwing: false,
    highlights: ["Chao Phraya dinner cruise", "Safari World & Marine Park", "Coral Island"],
    accommodation: ["5 nights across Bangkok and Pattaya.", "3-star or 4-star hotel options to suit your preference and budget."],
    notes: ["Safari World’s Monday closure may require a change in day order.", "The dinner cruise includes an Indian menu; Coral Island includes Indian lunch."],
    days: [
      { title: "Arrival in Bangkok & dinner cruise", details: ["Arrive at Bangkok (BKK) Airport and take a private sedan transfer to your Bangkok hotel.", "In the evening, enjoy the Chao Phraya Princess Dinner Cruise with an Indian menu and seat-in-coach transfers."] },
      { title: "Safari World & Marine Park", details: ["Full-day excursion with wildlife attractions and marine shows.", "Buffet lunch and seat-in-coach transfers included. Safari World is closed on Mondays."] },
      { title: "Bangkok shopping & leisure", details: ["Spend a free day exploring shopping malls and local markets at your own pace."] },
      { title: "Bangkok to Pattaya", details: ["Check out and take a private sedan transfer to your Pattaya hotel.", "Enjoy the rest of the day at leisure."] },
      { title: "Coral Island Tour", details: ["Travel to Coral Island by shared speedboat for a day on the beach.", "Indian lunch and seat-in-coach transfers included."] },
      { title: "Departure", details: ["Check out of your Pattaya hotel.", "Private sedan transfer to Bangkok (BKK) Airport for your onward journey."] },
    ],
  },
  {
    id: "koh-samui-4n",
    name: "Koh Samui",
    nights: 4,
    route: "Koh Samui",
    description: "Stay near Chaweng Beach, snorkel and kayak at Ang Thong Marine Park, and head to Koh Phangan for the Full Moon Party.",
    image: "/thailand/chaweng-beach.webp",
    alt: "Chaweng Beach on Koh Samui",
    rockBeachSwing: false,
    highlights: ["Ang Thong by speedboat", "Full Moon Party on Koh Phangan", "Free day in Koh Samui"],
    accommodation: ["4 nights at a hotel in the Chaweng Beach area for 2 adults."],
    notes: ["Ang Thong Marine Park entrance fees and Full Moon Party entry tickets are excluded."],
    days: [
      { title: "Arrival in Koh Samui", details: ["Private transfer in one sedan for 2 adults from Koh Samui Airport (USM) to your Chaweng Beach hotel."] },
      { title: "Ang Thong Marine Park by speedboat", details: ["Speedboat excursion from 7:30 am to 4:30 pm, with snorkelling, kayaking and lunch.", "Private transfer in one sedan for 2 adults. National park fees are excluded."] },
      { title: "Full Moon Party on Koh Phangan", details: ["Evening trip from 8:00 pm to 5:00 am the next morning. Boat tickets from Koh Samui are included. Party entry tickets are excluded.", "Private transfer in one sedan for 2 adults."] },
      { title: "Free day in Koh Samui", details: ["Spend the day at leisure."] },
      { title: "Departure from Koh Samui", details: ["Private transfer in one sedan for 2 adults from your Chaweng Beach hotel to Koh Samui Airport (USM)."] },
    ],
  },
];
