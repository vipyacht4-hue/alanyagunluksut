import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CONTACT_INFO } from "@/data/products";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2f6f52",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alanyagunluksut.com"),
  title: {
    default: "Alanya Günlük Süt | Taze Çiğ İnek & Manda Sütü Sipariş Hattı",
    template: "%s | Alanya Günlük Süt"
  },
  description: "Alanya'da günlük taze çiftlik çiğ sütü, doğal manda sütü ve köy yumurtası kapınıza gelsin. Oba, Mahmutlar, Tosmur, Kestel ve Alanya geneline soğuk zincirle ücretsiz teslimat!",
  keywords: [
    "alanya günlük süt",
    "alanya çiğ süt sipariş",
    "alanya süt sipariş hattı",
    "alanya doğal inek sütü",
    "alanya manda sütü",
    "alanya taze süt kapıda",
    "alanya köy yumurtası",
    "mahmutlar süt siparişi",
    "oba çiğ süt siparişi",
    "alanyagunluksut.com"
  ],
  authors: [{ name: "Alanya Günlük Süt" }],
  creator: "Alanya Günlük Süt",
  publisher: "Alanya Günlük Süt",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Alanya Günlük Süt | Taze Çiğ Süt Kapınızda",
    description: "Alanya içi soğuk zincirle kapınıza kadar teslim edilen katkısız çiğ süt ve mandıra lezzetleri.",
    url: "https://www.alanyagunluksut.com",
    siteName: "Alanya Günlük Süt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Alanya Günlük Çiğ Süt Dağıtımı",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alanya Günlük Süt | Taze Çiğ Süt Sipariş Hattı",
    description: "Alanya geneline ücretsiz kapıya teslimat ile katkısız, saf çiftlik sütü.",
    images: ["https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80"],
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
  // Schema.org LocalBusiness JSON-LD for local SEO in Alanya
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alanya Günlük Süt",
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    "telephone": CONTACT_INFO.phone,
    "url": "https://www.alanyagunluksut.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alanya",
      "addressRegion": "Antalya",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.5438,
      "longitude": 31.9998
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "₺₺",
    "servesCuisine": "Süt Ürünleri, Çiğ Süt, Doğal Gıda"
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-farm-100 selection:text-farm-900">
        {children}
      </body>
    </html>
  );
}
