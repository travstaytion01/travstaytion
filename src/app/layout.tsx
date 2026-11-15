import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravStaytion | Your Dream Vacation Awaits",
  description: "Discover amazing destinations and get personalized travel packages. Compare sample itineraries for Dubai, Maldives, and Thailand.",
  keywords: "travel, vacation, holiday, Dubai, Maldives, Thailand, travel packages, luxury travel, adventure travel, honeymoon destinations",
  authors: [{ name: "TravStaytion" }],
  creator: "TravStaytion",
  publisher: "TravStaytion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://travstaytion.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TravStaytion | Your Dream Vacation Awaits",
    description: "Discover amazing destinations and get personalized travel packages. Explore Dubai, Maldives and Thailand.",
    url: "https://travstaytion.com",
    siteName: "TravStaytion",
    images: [
      {
        url: "/couples-maldives.jpg",
        width: 1200,
        height: 630,
        alt: "TravStaytion - Your Dream Vacation Awaits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravStaytion | Your Dream Vacation Awaits",
    description: "Discover amazing destinations and get personalized travel packages.",
    images: ["/couples-maldives.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 overflow-x-clip`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:p-3">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="+919999959915" />
      </body>
    </html>
  );
}
