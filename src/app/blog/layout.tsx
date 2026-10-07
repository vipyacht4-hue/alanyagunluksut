import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alanya Süt Rehberi & Blog | Sağlıklı Yaşam ve Süt Tüyoları",
  description: "Alanya çiğ süt rehberi, taze süt kaynatma yöntemleri, taş gibi ev yoğurdu mayalama püf noktaları ve süt ürünleri hakkında faydalı bilgiler.",
  alternates: {
    canonical: "https://www.alanyagunluksut.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
