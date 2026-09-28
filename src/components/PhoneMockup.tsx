"use client";

import React from "react";
import Image from "next/image";
import { 
  Search, 
  MapPin, 
  Menu, 
  ChevronDown, 
  Heart, 
  Star, 
  ShieldCheck, 
  Snowflake, 
  MessageCircle,
  Milk,
  Check
} from "lucide-react";
import { VENDORS } from "@/data/products";

interface PhoneMockupProps {
  onOpenOrder: (vendorId?: string) => void;
}

export default function PhoneMockup({ onOpenOrder }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[310px] sm:w-[335px] rounded-[44px] p-3.5 bg-gray-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-4 border-gray-700/80 select-none">
      
      {/* iPhone Dynamic Island / Ahize */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] ml-auto mr-3"></div>
      </div>

      {/* Ekran Alanı */}
      <div className="relative w-full rounded-[34px] overflow-hidden bg-white text-gray-900 border border-gray-100 flex flex-col font-sans">
        
        {/* iOS Üst Durum Çubuğu */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-gray-800">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            {/* Wi-Fi & Pil Simgeleri */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.32c3.84 0 7.34 1.5 9.94 3.96L12 19.34 2.06 11.28C4.66 8.82 8.16 7.32 12 7.32z"/>
            </svg>
            <div className="w-5 h-2.5 rounded-xs border border-gray-800 p-0.5 flex items-center">
              <div className="w-full h-full bg-gray-800 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Mobil Header */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-50">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
              <Milk className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-black tracking-tight text-gray-950">
              Alanya Günlük Süt
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
              <MapPin className="w-2.5 h-2.5 text-emerald-700" />
              <span>Alanya</span>
              <ChevronDown className="w-2.5 h-2.5" />
            </div>
            <Menu className="w-4 h-4 text-gray-700" />
          </div>
        </div>

        {/* Mobil Arama Çubuğu */}
        <div className="px-3.5 pt-2.5 pb-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              readOnly
              placeholder="Ürün, çiftlik veya bölge ara..."
              className="w-full pl-8 pr-3 py-1.5 bg-gray-100/90 rounded-full text-[10px] text-gray-600 outline-hidden pointer-events-none"
            />
          </div>
        </div>

        {/* Kategoriler Yatay Barı (Görseldeki: Süt [yeşil], Yoğurt, Peynir, Tereyağı, Diğer) */}
        <div className="px-3.5 py-1.5 flex items-center justify-between text-[10px] font-bold text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
              <Milk className="w-4 h-4" />
            </div>
            <span className="text-emerald-800 font-extrabold text-[9px]">Süt</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
              <span className="text-xs">🥣</span>
            </div>
            <span className="text-gray-500 text-[9px]">Yoğurt</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
              <span className="text-xs">🧀</span>
            </div>
            <span className="text-gray-500 text-[9px]">Peynir</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
              <span className="text-xs">🧈</span>
            </div>
            <span className="text-gray-500 text-[9px]">Tereyağı</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
              <span className="text-xs">▦</span>
            </div>
            <span className="text-gray-500 text-[9px]">Diğer</span>
          </div>
        </div>

        {/* Öne Çıkan Çiftlikler Başlığı */}
        <div className="px-3.5 pt-3 pb-1.5 flex items-center justify-between">
          <span className="text-xs font-black text-gray-950">Öne Çıkan Çiftlikler</span>
          <span className="text-[10px] font-bold text-emerald-700">Tümünü Gör →</span>
        </div>

        {/* 1. Çiftlik Kartı (Toroslar Doğal Çiftliği - 700 TL) */}
        <div className="px-3.5 pb-2">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-xs p-2.5 space-y-2">
            
            {/* Görsel + Kalp */}
            <div className="relative h-24 w-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=500&q=80"
                alt="Toroslar Doğal Çiftliği"
                fill
                className="object-cover"
              />
              <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center shadow-xs">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              </div>
            </div>

            {/* İsim ve Konum */}
            <div>
              <h4 className="text-[11px] font-black text-gray-950 leading-tight">
                Toroslar Doğal Çiftliği
              </h4>
              <div className="flex items-center gap-1 text-[9px] text-gray-500 mt-0.5">
                <span className="flex items-center text-amber-500 font-bold">
                  ★ 4.9
                </span>
                <span>(128 yorum)</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-gray-600">
                  <MapPin className="w-2.5 h-2.5 text-emerald-700" />
                  Oba, Alanya
                </span>
              </div>
            </div>

            {/* Rozetler */}
            <div className="flex items-center gap-1.5 text-[8px] font-bold">
              <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <Check className="w-2 h-2 text-emerald-600" />
                Doğrulanmış Üretici
              </span>
              <span className="bg-sky-50 text-sky-800 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <Snowflake className="w-2 h-2 text-sky-600" />
                Soğuk Zincir
              </span>
            </div>

            {/* Fiyat ve Buton */}
            <div className="pt-1 flex items-center justify-between border-t border-gray-100 text-[10px]">
              <div>
                <span className="text-gray-500 text-[9px]">Jersey İnek Sütü</span>
                <span className="text-[9px] text-gray-400 ml-1">5 LT</span>
              </div>
              <span className="font-black text-emerald-800 text-xs">700 TL</span>
            </div>

            <button
              onClick={() => onOpenOrder("toroslar-dogal-ciftligi")}
              className="w-full py-2 bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-[10px] font-extrabold flex items-center justify-center gap-1 shadow-xs"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>WhatsApp ile Sipariş Ver</span>
            </button>

          </div>
        </div>

        {/* 2. Çiftlik Kartı (Oba Yayla Mandırası - 625 TL - Kısmi) */}
        <div className="px-3.5 pb-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-2.5 space-y-1.5 opacity-95">
            <div className="flex items-center justify-between text-[11px]">
              <div>
                <h4 className="font-black text-gray-950 leading-tight text-[10px]">
                  Oba Yayla Mandırası
                </h4>
                <div className="flex items-center gap-1 text-[8px] text-gray-500">
                  <span className="text-amber-500 font-bold">★ 4.8</span>
                  <span>(95 yorum)</span>
                  <span>•</span>
                  <span>Oba, Alanya</span>
                </div>
              </div>
              <span className="font-black text-emerald-800 text-xs">625 TL</span>
            </div>

            <div className="flex items-center justify-between text-[8px]">
              <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded-md font-bold">
                Doğal Üretim
              </span>
              <span className="text-gray-400">Jersey 5 LT</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
