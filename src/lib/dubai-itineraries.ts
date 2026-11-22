export type DubaiActivity =
  | "arrival" | "departure" | "sharedCity" | "sharedSafari" | "cityBurj"
  | "abuDhabi" | "safari" | "cruise" | "marinaDinner" | "garden";

export interface DubaiItinerary {
  id: string;
  enquiryId: number;
  name: string;
  hotel: string;
  description: string;
  accommodation: string[];
  days: { activities: DubaiActivity[]; title: string; details: string[] }[];
  notes: string[];
}

// Keep the two standalone applications' copies in sync (see the CRM package tests).
// Website enquiry IDs 1–6 belong to the previous Dubai collection.
export const DUBAI_ITINERARIES: DubaiItinerary[] = [
  {
    id: "dubai-budget-honeymoon",
    enquiryId: 7,
    name: "Dubai Budget Honeymoon",
    hotel: "3-star",
    description: "See Palm Jumeirah on a shared city tour, try dune bashing before a desert BBQ, and spend your last evening on a Marina dhow cruise.",
    accommodation: [
      "4 nights in Dubai with 3-star hotel options.",
      "Daily breakfast for 2 adults on all 4 mornings.",
      "Hotel selection as per your preference and budget.",
    ],
    days: [
      {
        activities: ["arrival"], title: "Arrival in Dubai",
        details: [
          "Arrive at Dubai International Airport.",
          "Private transfer to your hotel.",
          "Check in and relax after your journey.",
          "Spend the evening at leisure.",
        ],
      },
      {
        activities: ["sharedCity"], title: "Dubai City Tour",
        details: [
          "Explore the famous attractions of Dubai.",
          "Visit Jumeirah Mosque, Burj Al Arab photo stop and Palm Jumeirah.",
          "Enjoy photo stops at some of Dubai's iconic landmarks.",
          "Shared transfers as per the tour schedule.",
        ],
      },
      {
        activities: ["sharedSafari"], title: "Desert Safari Experience",
        details: [
          "Enjoy an exciting desert safari adventure.",
          "Experience dune bashing, sunset photography and traditional entertainment.",
          "BBQ dinner at the desert camp.",
          "Shared transfers included.",
        ],
      },
      {
        activities: ["cruise"], title: "Marina Dhow Cruise Dinner",
        details: [
          "Enjoy a relaxing day at leisure.",
          "Explore Dubai's shopping malls and local markets.",
          "In the evening, enjoy a Dhow Cruise Dinner at Dubai Marina.",
          "Enjoy dinner and beautiful waterfront views.",
        ],
      },
      {
        activities: ["departure"], title: "Departure",
        details: [
          "Breakfast at the hotel, followed by check-out.",
          "Private transfer to Dubai International Airport.",
        ],
      },
    ],
    notes: [
      "Hotel accommodation and breakfast included.",
      "Sightseeing transfers are shared wherever applicable.",
      "Personal expenses and optional activities are excluded.",
    ],
  },
  {
    id: "dubai-premium-honeymoon",
    enquiryId: 8,
    name: "Dubai Premium Honeymoon",
    hotel: "4-star",
    description: "Visit Burj Khalifa and Abu Dhabi’s Sheikh Zayed Grand Mosque. Your safari day includes a desert camp BBQ and a separate dinner at Dubai Marina.",
    accommodation: [
      "4 nights in Dubai with 4-star hotel options.",
      "Daily breakfast for 2 adults on all 4 mornings.",
      "Premium hotel selection as per your preference and budget.",
    ],
    days: [
      {
        activities: ["arrival"], title: "Welcome to Dubai",
        details: [
          "Arrive at Dubai International Airport.",
          "Private transfer to your premium hotel.",
          "Check in and relax.",
          "Enjoy a romantic evening at leisure.",
        ],
      },
      {
        activities: ["cityBurj"], title: "Dubai City Tour & Burj Khalifa",
        details: [
          "Discover the famous landmarks of Dubai.",
          "Explore Palm Jumeirah, Jumeirah Mosque and Burj Al Arab photo stop.",
          "Visit Burj Khalifa – At The Top, 124th/125th Floor.",
          "Capture beautiful memories together.",
        ],
      },
      {
        activities: ["abuDhabi"], title: "Abu Dhabi City Tour",
        details: [
          "Enjoy a full-day excursion to Abu Dhabi.",
          "Visit the magnificent Sheikh Zayed Grand Mosque.",
          "Explore the city's famous attractions and landmarks.",
          "Return to Dubai after the tour.",
        ],
      },
      {
        activities: ["safari", "marinaDinner"], title: "Desert Safari & Marina Dinner",
        details: [
          "Enjoy a relaxing morning together.",
          "Experience an exciting desert safari in the afternoon.",
          "Enjoy dune bashing, sunset views and traditional entertainment.",
          "BBQ dinner at the desert camp.",
          "Enjoy a separate dinner at Dubai Marina.",
        ],
      },
      {
        activities: ["departure"], title: "Departure",
        details: [
          "Breakfast at the hotel, followed by check-out.",
          "Private transfer to Dubai International Airport.",
        ],
      },
    ],
    notes: [
      "4-star hotel accommodation with breakfast.",
      "Burj Khalifa admission included.",
      "Abu Dhabi and desert safari tours included.",
      "Desert camp BBQ and a separate dinner at Dubai Marina included.",
      "Tour transfers subject to the selected activity arrangements.",
    ],
  },
  {
    id: "dubai-love-and-luxury",
    enquiryId: 9,
    name: "Dubai Love & Luxury",
    hotel: "4-star",
    description: "Take in the views from Burj Khalifa, visit Abu Dhabi and spend a day browsing Dubai’s shops before a dhow dinner cruise.",
    accommodation: [
      "5 nights in Dubai with 4-star hotel options.",
      "Daily breakfast for 2 adults on all 5 mornings.",
      "Hotel selection as per your preference and budget.",
    ],
    days: [
      {
        activities: ["arrival"], title: "Arrival in Dubai",
        details: [
          "Arrive at Dubai International Airport.",
          "Private transfer to your hotel.",
          "Check in and relax.",
          "Evening at leisure.",
        ],
      },
      {
        activities: ["cityBurj"], title: "Dubai City Tour & Burj Khalifa",
        details: [
          "Explore Dubai's famous landmarks.",
          "Visit Palm Jumeirah, Jumeirah Mosque and Burj Al Arab photo stop.",
          "Enjoy Burj Khalifa – At The Top, 124th/125th Floor.",
          "Spend the evening at leisure.",
        ],
      },
      {
        activities: ["safari"], title: "Desert Safari Adventure",
        details: [
          "Enjoy a relaxed morning together.",
          "Head out for an exciting desert safari.",
          "Experience dune bashing and sunset photography.",
          "Enjoy live entertainment and BBQ dinner at the desert camp.",
        ],
      },
      {
        activities: ["abuDhabi"], title: "Abu Dhabi City Tour",
        details: [
          "Explore the beautiful capital of the UAE.",
          "Visit Sheikh Zayed Grand Mosque.",
          "Discover popular city attractions and landmarks.",
          "Return to Dubai.",
        ],
      },
      {
        activities: ["cruise"], title: "Dubai Marina Dhow Cruise",
        details: [
          "Enjoy a free day for shopping and exploring Dubai.",
          "Spend quality time together.",
          "In the evening, enjoy a romantic Marina Dhow Cruise Dinner.",
          "Admire Dubai's illuminated waterfront skyline.",
        ],
      },
      {
        activities: ["departure"], title: "Departure",
        details: [
          "Breakfast at the hotel, followed by check-out.",
          "Private transfer to Dubai International Airport.",
        ],
      },
    ],
    notes: [
      "5 nights in a 4-star hotel with breakfast.",
      "Dubai city tour and Burj Khalifa admission included.",
      "Desert Safari with BBQ dinner included.",
      "Abu Dhabi city tour included.",
      "Marina Dhow Cruise Dinner included.",
    ],
  },
  {
    id: "dubai-grand-honeymoon",
    enquiryId: 10,
    name: "Dubai Grand Honeymoon",
    hotel: "Premium 4-star",
    description: "Give yourselves an extra day for Miracle Garden in season, alongside Burj Khalifa, a desert safari, Abu Dhabi and a Marina dhow dinner cruise.",
    accommodation: [
      "6 nights in Dubai with premium 4-star hotel options.",
      "Daily breakfast for 2 adults on all 6 mornings.",
      "Hotel selection as per your preference and budget.",
    ],
    days: [
      {
        activities: ["arrival"], title: "Arrival in Dubai",
        details: [
          "Arrive at Dubai International Airport.",
          "Private transfer to your hotel.",
          "Check in and relax.",
          "Enjoy your evening at leisure.",
        ],
      },
      {
        activities: ["cityBurj"], title: "Dubai City Tour & Burj Khalifa",
        details: [
          "Explore Dubai's iconic landmarks.",
          "Visit Palm Jumeirah, Jumeirah Mosque and Burj Al Arab photo stop.",
          "Enjoy Burj Khalifa – At The Top, 124th/125th Floor.",
          "Capture beautiful honeymoon memories.",
        ],
      },
      {
        activities: ["safari"], title: "Desert Safari Experience",
        details: [
          "Enjoy a relaxed morning.",
          "Experience an adventurous desert safari.",
          "Enjoy dune bashing, sunset photography and cultural entertainment.",
          "BBQ dinner at the desert camp.",
        ],
      },
      {
        activities: ["abuDhabi"], title: "Abu Dhabi City Tour",
        details: [
          "Discover the beautiful city of Abu Dhabi.",
          "Visit Sheikh Zayed Grand Mosque.",
          "Explore famous attractions and city landmarks.",
          "Return to Dubai.",
        ],
      },
      {
        activities: ["garden"], title: "Miracle Garden & Shopping",
        details: [
          "Visit Dubai Miracle Garden (seasonal opening).",
          "Explore the beautiful floral displays and themed attractions.",
          "Spend the rest of the day shopping or relaxing together.",
        ],
      },
      {
        activities: ["cruise"], title: "Marina Dhow Cruise Dinner",
        details: [
          "Enjoy a free day for leisure and shopping.",
          "Explore Dubai at your own pace.",
          "In the evening, enjoy a romantic Marina Dhow Cruise Dinner.",
          "Admire the beautiful skyline over dinner.",
        ],
      },
      {
        activities: ["departure"], title: "Departure",
        details: [
          "Breakfast at the hotel, followed by check-out.",
          "Private transfer to Dubai International Airport.",
        ],
      },
    ],
    notes: [
      "6 nights in a premium 4-star hotel with breakfast.",
      "Dubai city tour and Burj Khalifa admission included.",
      "Desert Safari with BBQ dinner included.",
      "Abu Dhabi city tour included.",
      "Miracle Garden visit subject to seasonal opening.",
      "Marina Dhow Cruise Dinner included.",
    ],
  },
];
