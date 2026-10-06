"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsTr = [
    {
      q: "Sütleriniz ne zaman sağılıyor ve ne kadar taze?",
      a: "Sütlerimiz her sabah erken saatlerde Alanya ve çevresindeki anlaşmalı temiz çiftliklerimizde sağılır. Sağımdan hemen sonra filtrelenerek +4°C'ye soğutulur ve aynı gün içerisinde soğutmalı araçlarımızla kapınıza ulaştırılır. Kesinlikle günlerce beklemiş süt dağıtımı yapılmaz."
    },
    {
      q: "Süt çiğ mi yoksa pastörize/işlenmiş mi?",
      a: "Sütlerimiz %100 doğal çiğ süttür. Yağı veya kaymağı alınmamıştır, herhangi bir kimyasal koruyucu veya katkı maddesi içermez. Doğrudan ineğin memesinden çıktığı saflıkta teslim edilir. Tüketmeden veya yoğurt yapmadan önce evinizde 5-7 dakika kaynatmanız önerilir."
    },
    {
      q: "Siparişi nasıl verebilirim ve ödemeyi nasıl yaparım?",
      a: "Sitemizdeki 'Hızlı Sipariş' veya 'WhatsApp ile Sipariş Ver' butonuna tıklayarak ürün adedini ve adresinizi seçmeniz yeterlidir. Mesajınız anında bize ulaşır ve dağıtım ekibimiz teyit eder. Ödemenizi kapıda sütü teslim alırken Nakit olarak veya anında IBAN / FAST ile kolayca yapabilirsiniz."
    },
    {
      q: "Teslimat ücreti var mı ve minimum sipariş tutarı nedir?",
      a: "Alanya Merkez, Oba, Cikcilli, Tosmur, Kestel ve Mahmutlar bölgelerinde kapıya teslimat ÜCRETSİZDİR."
    },
    {
      q: "Çiğ sütten taş gibi yoğurt nasıl tutturabilirim?",
      a: "Sütü kaynatıp parmağınızı yakmayacak ılıklığa (yaklaşık 43°C-45°C) getirdikten sonra kaliteli bir maya ile mayalayarak üzerini buhar tutacak bir bezle kapatıp 4-5 saat sarılı bekletin. Ardından dolapta 24 saat kaşık değdirmeden dinlendirin."
    },
    {
      q: "Haftalık düzenli abonelik veya sabit gün teslimatı var mı?",
      a: "Evet! Haftada 1, 2 veya 3 gün kapınıza otomatik olarak taze süt bırakılması için periyodik abonelik oluşturabilirsiniz. Bunun için WhatsApp sipariş hattımızdan bize 'Haftalık Düzenli Süt İstiyorum' demeniz yeterlidir."
    }
  ];

  const faqsRu = [
    {
      q: "Когда доится молоко и насколько оно свежее?",
      a: "Наше молоко доится каждое утро на чистых семейных фермах Аланьи. Сразу фильтруется, охлаждается до +4°C и развозится в тот же день в специальных холодильных камерах."
    },
    {
      q: "Молоко сырое или пастеризованное?",
      a: "Это 100% натуральное цельное парное сырое молоко. Сливки не снимаются, консерванты не добавляются. Перед употреблением или закваской йогурта рекомендуется прокипятить 5-7 минут."
    },
    {
      q: "Как оформить заказ и оплатить?",
      a: "Нажмите кнопку 'Заказать в WhatsApp', отправьте адрес и район в Аланье. Оплата наличными курьеру при получении или банковским переводом на карту."
    },
    {
      q: "Есть ли плата за доставку?",
      a: "Доставка до двери по всей Аланье (Центр, Оба, Махмутлар, Тосмур, Кестель) полностью БЕСПЛАТНАЯ."
    },
    {
      q: "Как приготовить густой домашний йогурт?",
      a: "Прокипятите молоко, остудите до 43-45°C, добавьте закваску, укутайте на 4-5 часов, затем поставьте в холодильник на 24 часа. Йогурт получится густым как греческий."
    },
    {
      q: "Есть ли регулярная еженедельная доставка?",
      a: "Да! Вы можете оформить доставку 1, 2 или 3 раза в неделю в фиксированные дни прямо к двери квартиры."
    }
  ];

  const faqsEn = [
    {
      q: "When is the milk milked and how fresh is it?",
      a: "Our milk is milked early every morning at hygienic partner farms in Alanya. Chilled to +4°C immediately and delivered to your door on the same day in refrigerated vehicles."
    },
    {
      q: "Is the milk raw or pasteurized?",
      a: "It is 100% natural pure raw cow milk. Never skimmed, no preservatives or additives. Boil for 5-7 minutes before drinking or making homemade yogurt."
    },
    {
      q: "How do I place an order and pay?",
      a: "Simply click 'Order via WhatsApp', select your quantity and share your address. Pay cash on delivery or via instant bank transfer."
    },
    {
      q: "Is there a delivery fee?",
      a: "Doorstep delivery is completely FREE across all Alanya districts (Center, Oba, Mahmutlar, Tosmur, Kestel)."
    },
    {
      q: "How to make thick farm yogurt at home?",
      a: "Boil the milk, let cool to 43°C-45°C, stir in natural yogurt starter, wrap warmly for 4-5 hours, then refrigerate for 24 hours without disturbing."
    },
    {
      q: "Is regular weekly subscription available?",
      a: "Yes! You can set up scheduled deliveries 1, 2, or 3 times a week on fixed days directly to your doorstep."
    }
  ];

  const faqs = language === "ru" ? faqsRu : language === "en" ? faqsEn : faqsTr;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section id="sss" className="py-16 sm:py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-farm-100 text-farm-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === "ru" ? "Вопросы и ответы" : language === "en" ? "Frequently Asked" : "Merak Edilenler"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-farm-950 tracking-tight">
            {language === "ru" ? "Часто задаваемые вопросы" : language === "en" ? "Frequently Asked Questions" : "Sıkça Sorulan Sorular"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            {language === "ru" ? "Ответы на самые популярные вопросы о фермерском молоке и доставке в Аланье." : language === "en" ? "Everything you need to know about fresh dairy and delivery in Alanya." : "Alanya Günlük Süt sipariş süreci ve ürünlerimiz hakkında en çok sorulan soruların yanıtları."}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-farm-100 rounded-2xl overflow-hidden transition-all bg-farm-50/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="font-bold text-sm sm:text-base text-farm-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-farm-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-farm-100/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
