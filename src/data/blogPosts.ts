export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  keywords: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "jersey-sutu-nedir-faydalari",
    title: "Jersey Sütü Nedir? A2 Protein ve Altın Sarısı Kaymağın Sırrı",
    excerpt: "Neden tüm dünyada gurmeler ve anneler Jersey sütünü tercih ediyor? Yüksek kalsiyum, A2 beta-kazein ve eşsiz krema dokusu hakkında her şey.",
    category: "Özel Rehber",
    readTime: "5 dk okuma",
    date: "20 Şubat 2026",
    image: "/blog/blog1.jpg",
    keywords: ["jersey sütü alanya", "a2 süt alanya", "jersey sütü faydaları", "altın kaymaklı süt"],
    content: `
## Sütlerin Kraliçesi: Safkan Jersey İnek Sütü

Son yıllarda sağlıklı beslenme dünyasında en çok konuşulan konulardan biri **Jersey ırkı inek sütü**. Standart siyah-beyaz Holstein inek sütlerine kıyasla çok daha yoğun, besleyici ve lezzetli olan bu süt, sofralara adeta bir tatlı kreması zenginliği getirir.

### Jersey Sütünün 4 Büyük Ayrıcalığı:

#### 1. Doğal A2 Protein Yapısı ve Kolay Sindirim
Pek çok insanın "laktoz hassasiyeti" sandığı şişkinlik ve hazımsızlık problemi, aslında endüstriyel ineklerde bulunan A1 beta-kazein proteininden kaynaklanır. Safkan Jersey inekleri ise insan anne sütüne en yakın protein olan **A2 beta-kazein** üretir. Bu sayede mideyi yormaz, şişkinlik yapmaz ve sindirimi çok kolaydır.

#### 2. %20 Daha Fazla Kalsiyum ve %18 Daha Fazla Protein
Bir bardak Jersey sütü, sıradan bir bardak süte göre vücuda çok daha fazla biyoyararlanımlı kalsiyum, fosfor ve protein sağlar. Çocukların kemik gelişimi ve sporcular için doğal bir güç deposudur.

#### 3. Altın Sarısı Rengi ve Doğal Beta-Karoten
Jersey sütünün en belirgin özelliklerinden biri kaynatıldığında sarımsı bir kaymak bağlamasıdır. Bu renk yapay değil, ineklerin taze otlardan aldığı yüksek orandaki **Beta-Karoten (A Vitamini öncülü)** sayesindedir.

#### 4. Taş Gibi Tatlı Yoğurt ve Efsanevi Kaymak
Jersey sütünün kuru madde oranı (%14-%15) ve süt yağı (%5.5 - %6.0) çok yüksektir. Bu sütle mayalanan yoğurt asla su salmaz, kaşıkla kestiğinizde kalıp gibi tabakta durur ve asitlenmeden tatlı kalır.

Alanya Günlük Süt platformundaki anlaşmalı yerel çiftliklerimizden Jersey sütünü soğuk zincirle haftanın her günü kapınıza ulaştırıyoruz.
    `
  },
  {
    slug: "gercek-soguk-sikim-zeytinyagi-nasil-anlasilir",
    title: "Gerçek Soğuk Sıkım Zeytinyağı Nasıl Anlaşılır? (Taş Baskı vs Sanayi)",
    excerpt: "Hakiki erken hasat sızma zeytinyağının kokusu, boğazdaki yakıcılığı ve düşük asit oranının sırları.",
    category: "Zeytin & Yağ",
    readTime: "4 dk okuma",
    date: "16 Şubat 2026",
    image: "/blog/blog2.jpg",
    keywords: ["soğuk sıkım zeytinyağı alanya", "erken hasat zeytinyağı", "gerçek zeytinyağı testi", "taş baskı zeytinyağı"],
    content: `
## Akdeniz'in Sıvı Altını: Hakiki Soğuk Sıkım Sızma Zeytinyağı

Zeytinyağı sadece bir yemeklik yağ değil, aynı zamanda binlerce yıllık doğal bir ilaçtır. Ancak marketlerde satılan pek çok zeytinyağı yüksek ısıyla (sıcak sıkım) işlendiği için içindeki şifalı polifenolleri ve antioksidanları kaybeder.

### Gerçek Soğuk Sıkım Zeytinyağını Ayıran 3 Test:

1. **Burun Testi (Taze Çimen Kokusu):** Kaliteli bir erken hasat zeytinyağının kapağını açıp kokladığınızda taze biçilmiş çimen, yeşil elma veya domates yaprağı kokusu almalısınız.
2. **Boğazda Hafif Yakıcılık:** Zeytinyağından bir yudum alıp ağzınızda gezdirdiğinizde ve yuttuğunuzda boğazınızın arkasında hafif bir biberimsi yakıcılık oluşmalıdır.
3. **24°C Sıkım Sıcaklığı:** "Soğuk sıkım" etiketi taşıması için zeytin hamurunun 27°C'nin (bizde 24°C) altında sıkılması şarttır.
    `
  },
  {
    slug: "alanya-cig-sut-nereden-alinir",
    title: "Alanya'da Doğal Çiğ Süt Nereden Alınır? Nelere Dikkat Edilmeli?",
    excerpt: "Alanya'da katkısız, taze ve güvenilir çiğ süt arayan aileler için doğru sütü seçme rehberi ve soğuk zincir teslimatının önemi.",
    category: "Alanya Rehberi",
    readTime: "4 dk okuma",
    date: "18 Şubat 2026",
    image: "/blog/blog3.jpg",
    keywords: ["alanya çiğ süt", "alanya günlük süt siparişi", "alanya doğal süt", "alanya taze inek sütü"],
    content: `
## Alanya'da Doğal ve Taze Süt Arayışı

Akdeniz'in gözbebeği Alanya'da yaşayan veya uzun süreli konaklayan ailelerin en çok aradığı şeylerin başında **çocukları ve kendileri için katkısız, doğal çiğ süt** geliyor. Market raflarında aylarca bozulmadan duran UHT paket sütlerin besin değerinin düşmesi, insanları yeniden geleneksel ve saf çiftlik sütüne yöneltti.

Peki Alanya'da çiğ süt alırken nelere dikkat etmelisiniz?

### 1. Sütün Soğuk Zincirle Taşınması Hayatidir
Çiğ süt sağıldığı andan itibaren bakteri üremesine açık bir üründür. Güvenilir bir üretici:
- Sağım hemen sonrasında sütü **+4°C'ye soğutmalı**,
- Dağıtım araçlarında mutlaka **özel soğutucu üniteler** kullanmalı,
- Açıkta güneşe maruz bırakılmadan doğrudan kapınıza teslim etmelidir.

### 2. Yağı ve Kaymağı Alınmamış Olmalı
Pek çok endüstriyel işletme, sütü işlemeden önce kremasını (yağını) alıp tereyağı veya krema olarak satar. Gerçek bir köy sütü kaynatıldığında üzerinde **parmak kalınlığında sarımsı doğal bir kaymak** tabakası oluşmalıdır.

### 3. Düzenli Veteriner Kontrolleri ve Analiz
Sağılan hayvanların sağlıklı olması, antibiyotik tedavisi gören ineklerin sütünün kesinlikle dağıtıma verilmemesi gerekir. **Alanya Günlük Süt** platformundaki üreticiler düzenli analizlerden geçirilen temiz sütleri dağıtır.
    `
  },
  {
    slug: "tas-gibi-ev-yogurdu-mayalama-rehberi",
    title: "Taş Gibi Ev Yoğurdu Nasıl Mayalanır? (Garantili Çiftlik Tarifi)",
    excerpt: "Sulu olmayan, kesildiğinde dağılmayan ve kaşık kaşık yenen lezzetli doğal köy yoğurdu mayalamanın tüm sırları.",
    category: "Yemek & Tarifler",
    readTime: "6 dk okuma",
    date: "05 Şubat 2026",
    image: "/blog/blog4.jpg",
    keywords: ["taş gibi yoğurt mayalama", "doğal ev yoğurdu tarifi", "çiğ sütten yoğurt", "köy yoğurdu yapımı"],
    content: `
## Evde Taş Gibi Doğal Yoğurt Mayalamanın Sırrı

Kendi sütünüzden mayaladığınız yoğurdun kokusu ve lezzeti, market yoğurtlarıyla kıyaslanamaz. İşte Alanya'nın taze sütüyle taş gibi yoğurt yapmanın garantili püf noktaları:

### Altın Kurallar:
- **Mayalama Sıcaklığı:** Serçe parmağınızı yakmayan 42°C - 45°C idealdir.
- **Buhar Önleme:** Tencere kapağının altına pamuklu bez yerleştirin.
- **24 Saat Dokunmama Kuralı:** Yoğurt 4-5 saat mayalandıktan sonra buzdolabına alınmalı ve ilk 24 saat kaşık vurulmamalıdır.
    `
  },
  {
    slug: "cig-sut-nasil-kaynatilir-saklanir",
    title: "Çiğ Süt Evde Nasıl Kaynatılır ve Saklanır? (Püf Noktaları)",
    excerpt: "Çiftlikten taze gelen çiğ sütün vitamin ve mineral değerini kaybetmeden doğru şekilde kaynatılması ve saklanması hakkında uzman önerileri.",
    category: "Püf Noktaları",
    readTime: "5 dk okuma",
    date: "12 Şubat 2026",
    image: "/blog/blog5.jpg",
    keywords: ["çiğ süt nasıl kaynatılır", "süt kaynatma derecesi", "çiğ süt saklama", "çiğ süt püf noktaları"],
    content: `
## Doğal Çiğ Sütü Besin Değerini Öldürmeden Kaynatmak

Doğal çiğ süt, kalsiyum, B vitaminleri ve faydalı yağ asitleri açısından adeta bir doğa mucizesidir.

### Adım Adım Doğru Çiğ Süt Kaynatma:
1. **Süzme İşlemi:** Sütü tencereye dökmeden önce temiz bir tülbent veya ince süzgeçten geçirin.
2. **Kısık-Orta Ateş ve Karıştırma:** Tahta kaşıkla havalandırarak karıştırın.
3. **Süre Kontrolü:** Süt kabarmaya başladığı an ateşi en kısığa getirin. **Kabardıktan sonra kısık ateşte 5 ila 7 dakika arası kaynatmak yeterlidir.**
4. **Hızlı Soğutma (Şoklama):** Tencereyi soğuk su dolu bir kaba oturtarak ılıklaştırın.
    `
  }
];
