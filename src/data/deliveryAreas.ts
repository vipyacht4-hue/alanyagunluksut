export interface DeliveryZone {
  name: string;
  days: string;
  minOrder: string;
  timeSlot: string;
  popular?: boolean;
}

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    name: "Alanya Merkez & Çarşı / Saray",
    days: "Hergün (Pazartesi - Pazar)",
    minOrder: "3 Litre",
    timeSlot: "09:00 - 12:30 & 17:00 - 20:30",
    popular: true
  },
  {
    name: "Oba & Cikcilli",
    days: "Hergün",
    minOrder: "3 Litre",
    timeSlot: "09:30 - 13:00 & 17:30 - 20:30",
    popular: true
  },
  {
    name: "Tosmur & Kestel",
    days: "Hergün",
    minOrder: "3 Litre",
    timeSlot: "10:00 - 13:30 & 17:30 - 21:00",
    popular: true
  },
  {
    name: "Mahmutlar & Kargıcak",
    days: "Pazartesi, Çarşamba, Cuma, Cumartesi",
    minOrder: "5 Litre",
    timeSlot: "11:00 - 15:00",
    popular: true
  },
  {
    name: "Konaklı & Payallar",
    days: "Salı, Perşembe, Pazar",
    minOrder: "5 Litre",
    timeSlot: "10:00 - 14:00"
  },
  {
    name: "Avsallar & İncekum & Okurcalar",
    days: "Salı & Cuma",
    minOrder: "5 Litre",
    timeSlot: "11:00 - 15:00"
  },
  {
    name: "Tepe & Bektaş & Sugözü",
    days: "Çarşamba & Cumartesi",
    minOrder: "5 Litre",
    timeSlot: "14:00 - 18:00"
  }
];

export const DELIVERY_PROMISES = [
  {
    icon: "Truck",
    title: "Soğuk Zincir Araçlar",
    description: "Sütler özel soğutmalı araçlarımızla +4°C derecede tazeliğini yitirmeden kapınıza gelir."
  },
  {
    icon: "Clock",
    title: "Kapıda Teslimat",
    description: "Siz evinizdeyken belirlenen saat aralığında kapınızın zili çalınarak elden teslim edilir."
  },
  {
    icon: "ShieldCheck",
    title: "Günlük Analiz & Güvence",
    description: "Her sağımda su katılma, asitlik ve antibiyotik testlerinden geçirilen temiz süt."
  },
  {
    icon: "CreditCard",
    title: "Kapıda Nakit veya Havale",
    description: "Ödemenizi kapıda teslim alırken nakit veya anında IBAN / FAST ile kolayca yapabilirsiniz."
  }
];
