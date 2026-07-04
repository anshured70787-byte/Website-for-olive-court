import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://theolivecourt.example.com"),
  title: {
    default: "The Olive Court | Best Multi-Cuisine Restaurant in Jodhpur",
    template: "%s | The Olive Court",
  },
  description: "Premium rooftop, fine-dining, multi-cuisine restaurant in Jodhpur serving North Indian, Chinese, Italian, Mexican, Thai, Lebanese dishes and mocktails.",
  keywords: [
    "The Olive Court",
    "Best Multi-Cuisine Restaurant in Jodhpur",
    "Rooftop Restaurant in Jodhpur",
    "Fine Dining Restaurant in Jodhpur",
    "Multi-Cuisine Restaurant in Jodhpur",
  ],
  openGraph: {
    title: "The Olive Court, Jodhpur",
    description: "Luxury rooftop dining, live music and multi-cuisine food in Jodhpur.",
    type: "website",
    locale: "en_IN",
    images: ["/images/hero.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    servesCuisine: ["North Indian", "Chinese", "Italian", "Mexican", "Thai", "Lebanese", "Fast food"],
    priceRange: site.price,
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: "1900" },
    telephone: "+91 88245 19693",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Airport Rd, near Jeet Apartment, Ratanada",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      postalCode: "342011",
      addressCountry: "IN",
    },
    sameAs: [site.instagramUrl, site.swiggyUrl],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
