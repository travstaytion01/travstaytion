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
  description: "Discover amazing destinations and get personalized travel packages. TravStaytion is your trusted partner for unforgettable travel experiences to Singapore, Bali, Maldives, and more.",
  keywords: "travel, vacation, holiday, Singapore, Bali, Maldives, travel packages, luxury travel, adventure travel, honeymoon destinations",
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
    description: "Discover amazing destinations and get personalized travel packages. Your trusted partner for unforgettable travel experiences.",
    url: "https://travstaytion.com",
    siteName: "TravStaytion",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="+919999959915" />
      </body>
    </html>
  );
}
