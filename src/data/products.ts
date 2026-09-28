export interface Vendor {
  id: string;
  name: string;
  subTitle: string;
  badge: string;
  location: string;
  rating: number;
  reviewsCount: number;
  deliveryTime: string;
  verified: boolean;
  image: string;
  price5Lt: number;
}

export interface Product {
  id: string;
  name: string;
  vendorId: string;
  vendorName: string;
  vendorSubTitle: string;
  vendorLocation: string;
  rating: number;
  reviewsCount: number;
  shortDesc: string;
  category: 'jersey-sut' | 'cig-sut';
  options: {
    size: string;
    price: number;
    popular?: boolean;
  }[];
  features: string[];
  image: string;
  badge?: string;
  fatRatio?: string;
}

export const VENDORS: Vendor[] = [
  {
    id: "toroslar-dogal-ciftligi",
    name: "Toroslar Doğal Çiftliği",
    subTitle: "Aile İşletmesi • 12 Yıllık Deneyim",
    badge: "Doğrulanmış Üretici",
    location: "Alanya Oba",
    rating: 4.9,
    reviewsCount: 128,
    deliveryTime: "Aynı Gün Teslimat",
    verified: true,
    image: "/toroslar.jpg",
    price5Lt: 700
  },
  {
    id: "oba-yayla-mandirasi",
    name: "Oba Yayla Mandırası",
    subTitle: "Yöresel Üretim • Katkısız",
    badge: "Doğal Üretim",
    location: "Alanya Oba",
    rating: 4.8,
    reviewsCount: 95,
    deliveryTime: "Aynı Gün Teslimat",
    verified: true,
    image: "/oba.jpg",
    price5Lt: 625
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "toroslar-jersey-5lt",
    name: "Jersey İnek Sütü",
    vendorId: "toroslar-dogal-ciftligi",
    vendorName: "Toroslar Doğal Çiftliği",
    vendorSubTitle: "Aile İşletmesi • 12 Yıllık Deneyim",
    vendorLocation: "Alanya Oba",
    rating: 4.9,
    reviewsCount: 128,
    shortDesc: "Yüksek rakımlı yayla otlarıyla beslenen safkan Jersey ineklerinden %6.0 doğal yağlı A2 süt.",
    category: "jersey-sut",
    badge: "Doğrulanmış Üretici",
    fatRatio: "%6.0 Altın Kaymak",
    features: [
      "Safkan tescilli Jersey inekleri",
      "Parmak kalınlığında altın kaymak",
      "A2 sindirimi kolay protein yapısı",
      "+4°C soğuk zincir teslimat"
    ],
    options: [
      { size: "5 LT", price: 700, popular: true }
    ],
    image: "/toroslar.jpg"
  },
  {
    id: "oba-jersey-5lt",
    name: "Jersey İnek Sütü",
    vendorId: "oba-yayla-mandirasi",
    vendorName: "Oba Yayla Mandırası",
    vendorSubTitle: "Yöresel Üretim • Katkısız",
    vendorLocation: "Alanya Oba",
    rating: 4.8,
    reviewsCount: 95,
    shortDesc: "Oba vadisinin taze yoncalarıyla beslenen Jersey ineklerinden taze sağılmış, katkısız çiğ süt.",
    category: "jersey-sut",
    badge: "Doğal Üretim",
    fatRatio: "%5.4 Doğal Kaymak",
    features: [
      "Oba çiftliklerinde yerel sağım",
      "Taş gibi yoğurt garantisi",
      "Doğal yonca & tahıl beslenmesi",
      "Kapıda teslimat"
    ],
    options: [
      { size: "5 LT", price: 625, popular: true }
    ],
    image: "/oba.jpg"
  }
];

export const CONTACT_INFO = {
  brandName: "Alanya Günlük Süt",
  phone: "+90 533 252 66 20",
  phoneDisplay: "0533 252 66 20",
  whatsapp: "905332526620",
  address: "Alanya / Antalya Geneli Üretici Dağıtım Ağı",
  workHours: "Her gün: 07:00 - 21:00",
  deliveryHours: "Sabah: 08:30 - 13:00 | Akşamüstü: 16:30 - 20:30",
  siteUrl: "https://www.alanyagunluksut.com"
};
