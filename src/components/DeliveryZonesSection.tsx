"use client";

import React, { useState } from "react";
import { MapPin, Truck, Calendar, Clock, Search, ShieldCheck } from "lucide-react";
import { DELIVERY_ZONES, DELIVERY_PROMISES } from "@/data/deliveryAreas";
import { useLanguage } from "@/context/LanguageContext";

interface DeliveryZonesProps {
  onOpenOrderModal: () => void;
}

export default function DeliveryZonesSection({ onOpenOrderModal }: DeliveryZonesProps) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredZones = DELIVERY_ZONES.filter((zone) =>
    zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    zone.days.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="bolgeler" className="py-16 sm:py-24 bg-farm-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık ve Açıklama */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-farm-100 text-farm-800 text-xs font-bold mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>{language === "ru" ? "Доставка до двери по всей Аланье" : language === "en" ? "Doorstep Delivery Across Alanya" : "Alanya Genelinde Kapıya Teslimat"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-farm-950 tracking-tight">
            {language === "ru" ? "Когда мы доставляем в ваш район?" : language === "en" ? "When Do We Deliver to Your Area?" : "Mahallenize Ne Zaman Geliyoruz?"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            {language === "ru" ? "Наше парное молоко доставляется в холоде +4°C по графику прямо к вашей двери." : language === "en" ? "Our fresh milk is delivered chilled at +4°C across all Alanya neighborhoods right to your door." : "Sütlerimiz +4°C soğuk zincir donanımlı araçlarımızla Alanya'nın dört bir yanına belirlenen gün ve saat aralıklarında kapınıza kadar getirilir."}
          </p>
        </div>

        {/* Mahalle Arama Kutusu (Mobilde Çok Kullanışlı) */}
        <div className="mt-8 max-w-md mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder={language === "ru" ? "Поиск вашего района (Оба, Махмутлар, Центр)..." : language === "en" ? "Search your area (Oba, Mahmutlar, Center)..." : "Mahallenizi arayın (Örn: Oba, Mahmutlar, Saray)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-farm-200 text-sm focus:border-farm-600 focus:ring-2 focus:ring-farm-200 outline-hidden shadow-xs"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Bölgeler Kart Izgarası */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredZones.map((zone, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white border transition-all hover:shadow-md ${
                zone.popular
                  ? "border-farm-300 ring-1 ring-farm-200"
                  : "border-gray-100"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-farm-100 text-farm-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-farm-950 text-base">{zone.name}</h3>
                </div>
                {zone.popular && (
                  <span className="text-[10px] font-bold text-farm-700 bg-farm-100 px-2 py-0.5 rounded-md shrink-0">
                    {language === "ru" ? "Каждый день" : language === "en" ? "Daily" : "Hergün"}
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-farm-600 shrink-0" />
                  <span><strong>{language === "ru" ? "Дни:" : language === "en" ? "Days:" : "Günler:"}</strong> {zone.days}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-farm-600 shrink-0" />
                  <span><strong>{language === "ru" ? "Время:" : language === "en" ? "Hours:" : "Saatler:"}</strong> {zone.timeSlot}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-farm-600 shrink-0" />
                  <span><strong>{language === "ru" ? "Мин. заказ:" : language === "en" ? "Min Order:" : "Min. Sipariş:"}</strong> {zone.minOrder}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenOrderModal}
                className="mt-4 w-full py-2 px-3 rounded-xl bg-farm-50 hover:bg-farm-100 text-farm-800 text-xs font-bold transition-colors text-center border border-farm-200"
              >
                {language === "ru" ? "Заказать в этот район" : language === "en" ? "Order for This Area" : "Bu Bölge İçin Sipariş Ver"}
              </button>
            </div>
          ))}

          {filteredZones.length === 0 && (
            <div className="col-span-full text-center py-8 bg-white rounded-2xl border border-dashed border-gray-300 p-6">
              <p className="text-sm text-gray-500 font-medium">
                Aradığınız bölge listede görünmüyor olabilir. Özel güzergah veya toplu sipariş için bizi arayabilirsiniz.
              </p>
              <button
                onClick={onOpenOrderModal}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-farm-600 text-white text-xs font-bold"
              >
                WhatsApp ile Danış
              </button>
            </div>
          )}
        </div>

        {/* 4 Önemli Hizmet Güvencesi */}
        <div className="mt-14 pt-12 border-t border-farm-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_PROMISES.map((promise, i) => (
            <div key={i} className="flex gap-3.5 items-start">
              <div className="w-10 h-10 rounded-2xl bg-white border border-farm-200 text-farm-700 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-farm-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-farm-950">{promise.title}</h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
