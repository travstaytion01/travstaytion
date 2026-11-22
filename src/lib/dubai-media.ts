const skylineFilm = {
  title: "Downtown Dubai and the Marina",
  action: "Watch skyline film",
  src: "/dubai/dubai-skyline.mp4",
  poster: "/dubai/dubai-skyline-poster.webp",
};

const desertFilm = {
  title: "A drive through the UAE desert",
  action: "Watch desert film",
  src: "/dubai/desert-drive.mp4",
  poster: "/dubai/desert-drive-poster.webp",
};

export interface DubaiMedia {
  photo: string;
  alt: string;
  film: typeof skylineFilm;
}

export const dubaiHeroMedia: DubaiMedia = {
  photo: "/dubai/burj-khalifa-sunset.webp",
  alt: "Burj Khalifa silhouetted against a golden sky across the water",
  film: skylineFilm,
};

const packageMedia: Record<string, DubaiMedia> = {
  "dubai-budget-honeymoon": {
    photo: "/dubai/desert-dunes.webp",
    alt: "Ridges of golden sand stretching across the Dubai desert",
    film: desertFilm,
  },
  "dubai-premium-honeymoon": {
    photo: "/dubai/downtown-at-dusk.webp",
    alt: "Burj Khalifa above the illuminated downtown skyline at dusk",
    film: skylineFilm,
  },
  "dubai-love-and-luxury": {
    photo: "/dubai/marina-waterfront.webp",
    alt: "Dubai Marina’s winding waterfront and towers in the evening light",
    film: skylineFilm,
  },
  "dubai-grand-honeymoon": {
    photo: "/dubai/miracle-garden.webp",
    alt: "Flower-covered arches beside a winding path in Dubai Miracle Garden",
    film: skylineFilm,
  },
};

export function getDubaiPackageMedia(id: string) {
  return packageMedia[id] ?? dubaiHeroMedia;
}
