export type Language = 'tr' | 'ru' | 'en';

export interface Translations {
  nav: {
    home: string;
    farms: string;
    products: string;
    howItWorks: string;
    blog: string;
    searchPlaceholder: string;
    quickOrder: string;
    callNow: string;
  };
  hero: {
    verifiedBadge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    titleLine4: string;
    desc: string;
    instantOrderTitle: string;
    instantOrderDesc: string;
    transparentPriceTitle: string;
    transparentPriceDesc: string;
    coldChainTitle: string;
    coldChainDesc: string;
    compareTitle: string;
    seeAllFarms: string;
    activeProducers: string;
    orderNow: string;
    socialProofCount: string;
    socialProofText: string;
    socialProofQuote: string;
  };
  table: {
    farmProducer: string;
    origin: string;
    milkType: string;
    price5Lt: string;
    rating: string;
    order: string;
    orderBtn: string;
    familyBiz: string;
    localProd: string;
  };
  badges: {
    fresh: { title: string; desc: string };
    verified: { title: string; desc: string };
    local: { title: string; desc: string };
    natural: { title: string; desc: string };
    coldChain: { title: string; desc: string };
  };
  farmsSection: {
    tag: string;
    title: string;
    desc: string;
    orderWithPrice: string;
    sameDayDelivery: string;
    producerCallTitle: string;
    producerCallDesc: string;
    producerCallBtn: string;
  };
  howItWorks: {
    tag: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  stickyBar: {
    call: string;
    order: string;
  };
  orderModal: {
    title: string;
    subtitle: string;
    selectedFarm: string;
    unitPrice: string;
    otherFarmOption: string;
    nameLabel: string;
    namePlaceholder: string;
    neighborhoodLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    noteLabel: string;
    notePlaceholder: string;
    totalAmount: string;
    sendWhatsappBtn: string;
    paymentNote: string;
    whatsappOrderTitle: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      farms: "Çiftliklerimiz",
      products: "Ürünler & Fiyatlar",
      howItWorks: "Nasıl Çalışır?",
      blog: "Blog & Rehber",
      searchPlaceholder: "Ürün, çiftlik veya bölge ara...",
      quickOrder: "Hızlı Sipariş Ver",
      callNow: "Hemen Ara",
    },
    hero: {
      verifiedBadge: "Alanya'nın Doğrulanmış Yerel Çiftlikleri",
      titleLine1: "Alanya'nın En Taze",
      titleLine2: "Süt Ürünleri",
      titleLine3: "Doğrudan Çiftliklerden",
      titleLine4: "Kapınıza!",
      desc: "Alanya'daki yerel üreticilerin günlük Jersey inek sütlerini karşılaştırın, gerçek çiftlik fiyatlarını görün ve tek tıkla WhatsApp üzerinden kapınıza sipariş verin.",
      instantOrderTitle: "Anında Sipariş",
      instantOrderDesc: "WhatsApp ile hemen sipariş",
      transparentPriceTitle: "Şeffaf Fiyat",
      transparentPriceDesc: "Çiftlikleri karşılaştırın",
      coldChainTitle: "Soğuk Zincir",
      coldChainDesc: "Tazelik güvencesi",
      compareTitle: "En Popüler Çiftliklerin Süt Fiyatlarını Karşılaştırın",
      seeAllFarms: "Tüm Çiftlikleri Gör",
      activeProducers: "2 Aktif Üretici",
      orderNow: "Sipariş Ver",
      socialProofCount: "+5.000",
      socialProofText: "Alanya'da mutlu aile",
      socialProofQuote: "“Gerçek çiftliklerden, gerçek tazelik. Alanya'da böyle bir hizmet harika!”",
    },
    table: {
      farmProducer: "Çiftlik / Üretici",
      origin: "Memleket",
      milkType: "Süt Türü",
      price5Lt: "5 LT Fiyatı",
      rating: "Değerlendirme",
      order: "Sipariş",
      orderBtn: "Sipariş Ver",
      familyBiz: "Aile İşletmesi • 12 Yıllık Deneyim",
      localProd: "Yöresel Üretim • Katkısız",
    },
    badges: {
      fresh: { title: "%100 Taze", desc: "Günlük sağım" },
      verified: { title: "Doğrulanmış Çiftlik", desc: "Güvenilir üretici" },
      local: { title: "Yerel Üretici", desc: "Alanya çiftçisine katkı" },
      natural: { title: "Katkısız & Doğal", desc: "Sağlıklı lezzetli" },
      coldChain: { title: "Soğuk Zincir", desc: "Tazelik güvencesi" },
    },
    farmsSection: {
      tag: "Alanya Süt Üreticileri",
      title: "Anlaşmalı 2 Yerel Çiftliğimiz",
      desc: "Günübirlik sağılan 5 LT Jersey sütlerini doğrudan üretici fiyatıyla sipariş verin.",
      orderWithPrice: "WhatsApp ile Sipariş Ver",
      sameDayDelivery: "Aynı Gün Teslimat",
      producerCallTitle: "Siz de Alanya'da Süt Üreticisi misiniz?",
      producerCallDesc: "Çiftliğinizi platformumuza ekleyerek doğrudan Alanya'daki ailelere ulaşın.",
      producerCallBtn: "Çiftliğinizi Ekleyin",
    },
    howItWorks: {
      tag: "Basit & Şeffaf",
      title: "Sistem Nasıl Çalışır?",
      step1Title: "Çiftliği ve Fiyatı Seçin",
      step1Desc: "Toroslar Çiftliği (700 TL) veya Oba Mandırası (625 TL) sütünü seçin.",
      step2Title: "WhatsApp ile Tek Tıkla Sipariş",
      step2Desc: "Mahalle ve adresinizi girin, hazır sipariş mesajınız WhatsApp hattımıza iletilsin.",
      step3Title: "Kapıda Soğuk Teslimat & Ödeme",
      step3Desc: "Sütünüz bozulmadan kapınıza gelsin. Ödemenizi kapıda nakit veya IBAN ile tamamlayın.",
    },
    stickyBar: {
      call: "Hemen Ara",
      order: "Sipariş Ver",
    },
    orderModal: {
      title: "Çiftlik Süt Sipariş Formu",
      subtitle: "Alanya Geneline Ücretsiz Kapıda Teslimat",
      selectedFarm: "Seçtiğiniz Çiftlik & Süt",
      unitPrice: "Birim Fiyat",
      otherFarmOption: "Diğer Çiftliğin Sütünü de Ekleyebilirsiniz:",
      nameLabel: "Adınız Soyadınız",
      namePlaceholder: "Örn: Mehmet Yıldırım",
      neighborhoodLabel: "Alanya Mahalleniz / Bölgeniz *",
      addressLabel: "Teslimat Adresi (Sokak, Bina No, Kat / Daire) *",
      addressPlaceholder: "Örn: Saray Mah. Atatürk Cad. No:15 Kat:2",
      noteLabel: "Sipariş Notu (Opsiyonel)",
      notePlaceholder: "Örn: Kapıya bırakabilirsiniz",
      totalAmount: "Toplam Sipariş Tutarı:",
      sendWhatsappBtn: "Siparişi WhatsApp ile Gönder",
      paymentNote: "Kapıda nakit veya teslimatta IBAN ile ödeyebilirsiniz.",
      whatsappOrderTitle: "ALANYA GÜNLÜK SÜT SİPARİŞİ",
    }
  },
  ru: {
    nav: {
      home: "Главная",
      farms: "Наши фермы",
      products: "Цены и продукты",
      howItWorks: "Как это работает?",
      blog: "Блог и советы",
      searchPlaceholder: "Поиск фермы, молока или района...",
      quickOrder: "Быстрый заказ",
      callNow: "Позвонить",
    },
    hero: {
      verifiedBadge: "Проверенные фермы Аланьи",
      titleLine1: "Свежее фермерское",
      titleLine2: "молоко в Аланье",
      titleLine3: "Прямо с ферм",
      titleLine4: "К вашей двери!",
      desc: "Сравните цены на натуральное парное Джерси молоко от местных фермеров Аланьи и закажите в 1 клик через WhatsApp с бесплатной доставкой на дом.",
      instantOrderTitle: "Быстрый заказ",
      instantOrderDesc: "Заказ через WhatsApp",
      transparentPriceTitle: "Честные цены",
      transparentPriceDesc: "Прямо от фермеров",
      coldChainTitle: "Холодная цепь",
      coldChainDesc: "Доставка в холоде +4°C",
      compareTitle: "Сравните цены на молоко от ведущих ферм",
      seeAllFarms: "Все фермы",
      activeProducers: "2 проверенные фермы",
      orderNow: "Заказать",
      socialProofCount: "+5.000",
      socialProofText: "Довольных семей в Аланье",
      socialProofQuote: "«Настоящее парное молоко прямо с фермы! В Аланье такой сервис — просто находка!»",
    },
    table: {
      farmProducer: "Ферма / Производитель",
      origin: "Район",
      milkType: "Тип молока",
      price5Lt: "Цена 5 Л",
      rating: "Рейтинг",
      order: "Заказ",
      orderBtn: "Заказать",
      familyBiz: "Семейная ферма • 12 лет опыта",
      localProd: "Местное производство • Без добавок",
    },
    badges: {
      fresh: { title: "100% Свежее", desc: "Утренний удой" },
      verified: { title: "Проверено", desc: "Надежные фермы" },
      local: { title: "Поддержка фермеров", desc: "Фермы Аланьи" },
      natural: { title: "Без добавок", desc: "Натуральное и чистое" },
      coldChain: { title: "Холодная цепь", desc: "Гарантия свежести" },
    },
    farmsSection: {
      tag: "Производители молока Аланьи",
      title: "2 партнерские фермы",
      desc: "Заказывайте парное молоко Джерси 5 Л напрямую по честным ценам производителей.",
      orderWithPrice: "Заказать в WhatsApp",
      sameDayDelivery: "Доставка в день надоя",
      producerCallTitle: "Вы производитель молока в Аланье?",
      producerCallDesc: "Подключите вашу ферму к нашей платформе и продавайте напрямую семьям.",
      producerCallBtn: "Добавить ферму",
    },
    howItWorks: {
      tag: "Просто и прозрачно",
      title: "Как работает сервис?",
      step1Title: "Выберите ферму и цену",
      step1Desc: "Выберите ферму Toroslar (700 TL) или ферму Oba (625 TL).",
      step2Title: "Заказ в 1 клик через WhatsApp",
      step2Desc: "Укажите ваш адрес и район в Аланье, сообщение отправится в WhatsApp.",
      step3Title: "Доставка до двери и оплата",
      step3Desc: "Молоко доставят охлажденным. Оплата наличными курьеру или переводом на карту.",
    },
    stickyBar: {
      call: "Позвонить",
      order: "Заказать",
    },
    orderModal: {
      title: "Форма заказа фермерского молока",
      subtitle: "Бесплатная доставка до двери по всей Аланье",
      selectedFarm: "Выбранная ферма и молоко",
      unitPrice: "Цена",
      otherFarmOption: "Также можно добавить другую ферму:",
      nameLabel: "Ваше имя и фамилия",
      namePlaceholder: "Например: Анна Смирнова",
      neighborhoodLabel: "Ваш район в Аланье (Махмутлар, Оба, Центр...) *",
      addressLabel: "Адрес доставки (улица, дом, этаж, кв.) *",
      addressPlaceholder: "Например: Махмутлар, ул. Барбаросс, дом 12, кв. 5",
      noteLabel: "Примечание к заказу (необязательно)",
      notePlaceholder: "Например: Оставить у двери / позвонить в домофон",
      totalAmount: "Итого к оплате:",
      sendWhatsappBtn: "Отправить заказ в WhatsApp",
      paymentNote: "Оплата наличными при получении или переводом на карту.",
      whatsappOrderTitle: "ЗАКАЗ ФЕРМЕРСКОГО МОЛОКА В АЛАНЬЕ",
    }
  },
  en: {
    nav: {
      home: "Home",
      farms: "Our Farms",
      products: "Products & Prices",
      howItWorks: "How It Works",
      blog: "Blog & Guide",
      searchPlaceholder: "Search farm, milk or district...",
      quickOrder: "Quick Order",
      callNow: "Call Now",
    },
    hero: {
      verifiedBadge: "Verified Local Farms in Alanya",
      titleLine1: "Alanya's Freshest",
      titleLine2: "Dairy Products",
      titleLine3: "Directly From Farms",
      titleLine4: "To Your Door!",
      desc: "Compare daily Jersey cow milk from verified local Alanya farmers, check real farm prices, and order to your door in 1 click via WhatsApp.",
      instantOrderTitle: "Instant Order",
      instantOrderDesc: "Order via WhatsApp",
      transparentPriceTitle: "Transparent Prices",
      transparentPriceDesc: "Compare local farms",
      coldChainTitle: "Cold Chain",
      coldChainDesc: "Chilled +4°C delivery",
      compareTitle: "Compare Daily Milk Prices from Top Farms",
      seeAllFarms: "View All Farms",
      activeProducers: "2 Active Farms",
      orderNow: "Order",
      socialProofCount: "+5,000",
      socialProofText: "Happy families in Alanya",
      socialProofQuote: "“Real farms, true freshness. Having such a delivery service in Alanya is amazing!”",
    },
    table: {
      farmProducer: "Farm / Producer",
      origin: "Location",
      milkType: "Milk Type",
      price5Lt: "5 LT Price",
      rating: "Rating",
      order: "Order",
      orderBtn: "Order Now",
      familyBiz: "Family Farm • 12 Years Experience",
      localProd: "Local Harvest • 100% Additive-free",
    },
    badges: {
      fresh: { title: "100% Fresh", desc: "Daily morning milking" },
      verified: { title: "Verified Farms", desc: "Trusted local producers" },
      local: { title: "Support Local", desc: "Empowering Alanya farmers" },
      natural: { title: "Pure & Natural", desc: "Healthy and delicious" },
      coldChain: { title: "Cold Chain", desc: "Freshness guaranteed" },
    },
    farmsSection: {
      tag: "Alanya Milk Producers",
      title: "Our 2 Partnered Farms",
      desc: "Order 5 LT pure Jersey cow milk directly at real producer prices.",
      orderWithPrice: "Order via WhatsApp",
      sameDayDelivery: "Same-Day Delivery",
      producerCallTitle: "Are you a dairy farmer in Alanya?",
      producerCallDesc: "Join our platform and deliver your fresh products directly to thousands of families.",
      producerCallBtn: "Add Your Farm",
    },
    howItWorks: {
      tag: "Simple & Transparent",
      title: "How Does It Work?",
      step1Title: "Choose Farm & Price",
      step1Desc: "Pick Toroslar Farm (700 TL) or Oba Farm (625 TL).",
      step2Title: "Order in 1 Click via WhatsApp",
      step2Desc: "Enter your neighborhood & address; ready order message is sent to WhatsApp.",
      step3Title: "Cold Doorstep Delivery & Payment",
      step3Desc: "Milk arrives chilled. Pay cash on delivery or via bank transfer.",
    },
    stickyBar: {
      call: "Call Now",
      order: "Order Now",
    },
    orderModal: {
      title: "Farm Milk Order Form",
      subtitle: "Free Doorstep Delivery Across Alanya",
      selectedFarm: "Selected Farm & Milk",
      unitPrice: "Unit Price",
      otherFarmOption: "You can also add the other farm's milk:",
      nameLabel: "Your Full Name",
      namePlaceholder: "E.g.: John Miller",
      neighborhoodLabel: "Your Alanya District (Mahmutlar, Oba, Center...) *",
      addressLabel: "Delivery Address (Street, Building, Apt.) *",
      addressPlaceholder: "E.g.: Mahmutlar, Barbaros St. No:12 Apt:4",
      noteLabel: "Order Note (Optional)",
      notePlaceholder: "E.g.: Please leave at door",
      totalAmount: "Total Order Amount:",
      sendWhatsappBtn: "Send Order to WhatsApp",
      paymentNote: "Pay cash at the door or via online bank transfer.",
      whatsappOrderTitle: "ALANYA FRESH FARM MILK ORDER",
    }
  }
};
