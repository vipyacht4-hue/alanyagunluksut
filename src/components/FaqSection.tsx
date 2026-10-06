"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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
      a: "Alanya Merkez, Oba, Cikcilli, Tosmur ve Kestel bölgelerinde minimum 3 litre süt siparişlerinde kapıya teslimat ÜCRETSİZDİR. Mahmutlar, Kargıcak ve Konaklı gibi bölgelerde ise minimum sipariş 5 litredir."
    },
    {
      q: "Çiğ sütten taş gibi yoğurt nasıl tutturabilirim?",
      a: "Sütü kaynatıp parmağınızı yakmayacak ılıklığa (yaklaşık 43°C-45°C) getirdikten sonra kaliteli bir maya ile mayalayarak üzerini buhar tutacak bir bezle kapatıp 4-5 saat sarılı bekletin. Ardından dolapta 24 saat kaşık değdirmeden dinlendirin. Blog köşemizde adım adım resimli anlatımımızı bulabilirsiniz!"
    },
    {
      q: "Haftalık düzenli abonelik veya sabit gün teslimatı var mı?",
      a: "Evet! Haftada 1, 2 veya 3 gün kapınıza otomatik olarak taze süt bırakılması için periyodik abonelik oluşturabilirsiniz. Bunun için WhatsApp sipariş hattımızdan bize 'Haftalık Düzenli Süt İstiyorum' demeniz yeterlidir."
    }
  ];

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
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-farm-950 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Alanya Günlük Süt sipariş süreci ve ürünlerimiz hakkında en çok sorulan soruların yanıtları.
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
