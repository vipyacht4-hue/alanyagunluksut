import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CONTACT_INFO } from "@/data/products";
import { LanguageProvider } from "@/context/LanguageContext";

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
    "mahmutlar süt siparişi",
    "oba çiğ süt siparişi",
    "alanyagunluksut.com",
    "фермерское молоко аланья",
    "доставка молока аланья",
    "fresh milk alanya"
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
        url: "/telefon.png",
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
    images: ["/telefon.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
  alternates: {
    canonical: "https://www.alanyagunluksut.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alanya Günlük Süt Pazaryeri",
    "image": "https://www.alanyagunluksut.com/telefon.png",
    "telephone": CONTACT_INFO.phone,
    "url": "https://www.alanyagunluksut.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alanya",
      "addressRegion": "Antalya",
      "addressCountry": "TR"
    },
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
      <body className="antialiased selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden w-full max-w-full">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
