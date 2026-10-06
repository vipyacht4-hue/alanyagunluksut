"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Heart, 
  BookOpen,
  Star
} from "lucide-react";

import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import OrderModal from "@/components/OrderModal";
import DeliveryZonesSection from "@/components/DeliveryZonesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

import { VENDORS, PRODUCTS, CONTACT_INFO } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogPosts";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const handleOpenOrder = (prodId?: string) => {
    setSelectedProductId(prodId);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-950 pb-20 md:pb-0 overflow-x-hidden w-full">
      
      {/* Üst Menü */}
      <Navbar onOpenOrderModal={() => handleOpenOrder()} />

      <main className="flex-1">
        
        {/* ========================================================= */}
        {/* HERO BÖLÜMÜ - SCREENSHOT STİLİ MODERN FLOATING DARK CONTAINER */}
        {/* ========================================================= */}
        <section className="pt-3 sm:pt-6 pb-6 sm:pb-12 max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] sm:rounded-[44px] bg-[#0A1612] border border-emerald-800/30 shadow-[0_25px_80px_rgba(4,20,14,0.45)] overflow-hidden p-6 sm:p-10 lg:p-14 text-white">
            
            {/* Arka plan radyal ışık efekti */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* SOL SÜTUN */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                
                {/* Üst Rozet Barı */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black shadow-xs">
                    <span className="text-sm">🏆</span>
                    <span>Alanya'nın Doğrulanmış Yerel Çiftlikleri</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Alanya Geneli Ücretsiz Kapıda Teslimat</span>
                  </div>
                </div>

                {/* Büyük Başlık */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.15] sm:leading-[1.18]">
                  <span>Tüm Doğal Süt</span>
                  <span className="block mt-1 sm:mt-1.5">İhtiyacınız</span>
                  <span className="block mt-1 sm:mt-1.5 text-[#F59E0B]">
                    Tek Platformda
                  </span>
                </h1>

                {/* Açıklama */}
                <p className="text-xs sm:text-base text-gray-300 max-w-xl leading-relaxed">
                  Alanya'daki yerel üreticilerin günlük Jersey inek sütleri, soğuk zincirle el değmeden doğrudan kapınıza teslim. Günlük taze sağım, %100 katkısız. Güncel fiyat ve hızlı teslimat için doğrudan sipariş hattımıza ulaşın.
                </p>

                {/* Aksiyon Butonları */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Alanya Günlük Süt sipariş hattından ulaşıyorum. Günlük taze Jersey sütü hakkında bilgi ve sipariş vermek istiyorum.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-gray-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/20 active:scale-95 transition cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-gray-950 text-gray-950 shrink-0" />
                    <span>WhatsApp Sipariş Hattı →</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>0533 252 66 20 Ara</span>
                  </a>
                </div>

                {/* Alt Güven Onay Maddeleri */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Günlük Taze Sağım</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>+4°C Soğuk Zincir</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Kapıda Kolay Ödeme</span>
                  </div>
                </div>

              </div>


              {/* SAĞ SÜTUN (Modern UI Mockup Kompozisyonu) */}
              <div className="lg:col-span-5 relative flex flex-col items-center">
                
                <div className="w-full max-w-[460px] bg-gradient-to-b from-[#10241D] to-[#0A1713] rounded-3xl border border-emerald-800/40 p-4 sm:p-5 shadow-2xl space-y-3.5">
                  
                  {/* Marka Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 border border-white/20 shrink-0 flex items-center justify-center">
                        <Image
                          src="/logo.png"
                          alt="Alanya Günlük Süt Logo"
                          fill
                          sizes="32px"
                          className="object-contain p-0.5"
                        />
                      </div>
                      <span className="text-xs font-black text-white tracking-wide">
                        ALANYA GÜNLÜK SÜT
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                      Doğrulanmış Dağıtım
                    </span>
                  </div>

                  {/* Üst 2'li Mini Kart */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                        <span>🥛</span>
                        <span>Bugünkü Sağım</span>
                      </div>
                      <div className="text-lg font-black text-white">5 LT Jersey</div>
                      <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">Aynı Gün Teslimat</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                        <span>🌿</span>
                        <span>Doğallık Oranı</span>
                      </div>
                      <div className="text-lg font-black text-emerald-400">%100 Saf</div>
                      <span className="text-[10px] text-gray-400 block mt-0.5">Katkısız Çiğ Süt</span>
                    </div>
                  </div>

                  {/* Görsel Çerçevesi (Telefon Görseli) */}
                  <div 
                    onClick={() => {
                      window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Alanya Günlük Süt sipariş hattından ulaşıyorum. Günlük Jersey sütü siparişi vermek istiyorum.")}`, "_blank");
                    }}
                    className="relative rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer group shadow-lg"
                  >
                    <Image
                      src="/telefon.png"
                      alt="Alanya Günlük Süt Mobil Sipariş Hattı"
                      width={1122}
                      height={1402}
                      priority
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5 sm:p-4">
                      <div className="w-full flex items-center justify-between text-white">
                        <div>
                          <span className="text-[11px] font-bold text-amber-400 block">Alanya Süt Hattı</span>
                          <span className="text-xs font-black">Toroslar & Oba Çiftlikleri</span>
                        </div>
                        <span className="text-xs font-black bg-[#F59E0B] text-gray-950 px-3 py-1.5 rounded-xl shadow-md">
                          Sipariş Ver →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2 Çiftlik Seçim Önizlemesi */}
                  <div className="space-y-2 pt-1">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Toroslar Doğal Çiftliği 5 LT Jersey sütü siparişi vermek istiyorum.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-gray-800 shrink-0">
                          <Image src="/toroslar.jpg" alt="Toroslar Doğal Çiftliği" fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-white block group-hover:text-amber-400 transition">Toroslar Doğal Çiftliği</span>
                          <span className="text-[10px] text-gray-400">Alanya Oba • Jersey Sütü</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-lg">
                        Sipariş Yaz →
                      </span>
                    </a>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Oba Yayla Mandırası 5 LT Jersey sütü siparişi vermek istiyorum.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-gray-800 shrink-0">
                          <Image src="/oba.jpg" alt="Oba Yayla Mandırası" fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-white block group-hover:text-amber-400 transition">Oba Yayla Mandırası</span>
                          <span className="text-[10px] text-gray-400">Alanya Oba • Jersey Sütü</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-lg">
                        Sipariş Yaz →
                      </span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 4 MODERN FLOATING ÖZELLİK KARTI (SCREENSHOT REFERANSI)    */}
        {/* ========================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* 1. Günlük Taze Sağım */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  🥛
                </div>
                <h3 className="font-black text-base text-gray-950 mb-1.5">Günlük Taze Sağım</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sabah erken saatlerde sağılan Jersey inek sütleri bekletilmeden soğuk tanklara alınır.
                </p>
              </div>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, günlük taze Jersey sütü hakkında bilgi ve sipariş vermek istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-amber-600 transition"
              >
                <span>Bilgi Al</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 2. Doğrulanmış 2 Çiftlik */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  🛡️
                </div>
                <h3 className="font-black text-base text-gray-950 mb-1.5">Doğrulanmış 2 Çiftlik</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Toroslar Doğal Çiftliği ve Oba Yayla Mandırası garantisiyle güvenilir yerel üretim.
                </p>
              </div>
              <a 
                href="#ciftlikler" 
                className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-amber-600 transition"
              >
                <span>Çiftlikleri İncele</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 3. Soğuk Zincir +4°C */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  ❄️
                </div>
                <h3 className="font-black text-base text-gray-950 mb-1.5">Soğuk Zincir +4°C</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Özel soğutmalı araçlarımızla sütünüz bozulmadan, tazeliğini koruyarak kapınıza gelir.
                </p>
              </div>
              <a 
                href="#bolgeler" 
                className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-amber-600 transition"
              >
                <span>Dağıtım Saatleri</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 4. Kapıda Kolay Ödeme */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  🚚
                </div>
                <h3 className="font-black text-base text-gray-950 mb-1.5">Kapıda Kolay Ödeme</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Alanya geneli kapınıza teslim edilir. Ödemenizi kapıda nakit veya IBAN ile tamamlayın.
                </p>
              </div>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, kapıda teslimat için sipariş vermek istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-amber-600 transition"
              >
                <span>Sipariş Hattı</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* ÇİFTLİKLERİMİZ (2 FİRMA DETAY KARTLARI - FİYATSIZ DİREKT SİPARİŞ) */}
        {/* ========================================================= */}
        <section id="ciftlikler" className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1.5">
              PORTFÖYÜMÜZ & ÜRETİCİLER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Anlaşmalı 2 Yerel Çiftliğimiz
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Günübirlik sağılan 5 LT Jersey sütlerini doğrudan sipariş hattımızdan talep edin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* 1. Toroslar Doğal Çiftliği */}
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-56 sm:h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/toroslar.jpg"
                    alt="Toroslar Doğal Çiftliği"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-emerald-900 text-xs font-black px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Doğrulanmış Üretici</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-xs text-rose-500 w-9 h-9 rounded-full flex items-center justify-center shadow-xs">
                    <Heart className="w-4 h-4 fill-rose-500" />
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-bold bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Alanya Oba</span>
                    </div>
                    <span className="text-amber-400 font-black">★ 4.9 (128 yorum)</span>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 group-hover:text-emerald-700 transition">
                    Toroslar Doğal Çiftliği
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Aile İşletmesi • 12 Yıllık Deneyim
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg">Jersey İnek Sütü</span>
                    <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg">5 LT Taze Dolum</span>
                    <span className="text-[11px] font-bold bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg">Günlük Sağım</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                    <span className="font-semibold">Teslimat: Aynı Gün Kapıda</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">+4°C Soğuk Zincir</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 pt-0">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Toroslar Doğal Çiftliği 5 LT Jersey sütü için güncel fiyat bilgisi almak ve sipariş vermek istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-gray-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-gray-950 text-gray-950" />
                  <span>WhatsApp'tan Sipariş Ver →</span>
                </a>
              </div>
            </div>

            {/* 2. Oba Yayla Mandırası */}
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-56 sm:h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/oba.jpg"
                    alt="Oba Yayla Mandırası"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-emerald-900 text-xs font-black px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Doğal Üretim</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-xs text-rose-500 w-9 h-9 rounded-full flex items-center justify-center shadow-xs">
                    <Heart className="w-4 h-4 fill-rose-500" />
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-bold bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Alanya Oba</span>
                    </div>
                    <span className="text-amber-400 font-black">★ 4.8 (95 yorum)</span>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 group-hover:text-emerald-700 transition">
                    Oba Yayla Mandırası
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Yöresel Üretim • Katkısız
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg">Jersey İnek Sütü</span>
                    <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg">5 LT Taze Dolum</span>
                    <span className="text-[11px] font-bold bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg">Katkısız Çiğ Süt</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                    <span className="font-semibold">Teslimat: Aynı Gün Kapıda</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">+4°C Soğuk Zincir</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 pt-0">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Oba Yayla Mandırası 5 LT Jersey sütü için güncel fiyat bilgisi almak ve sipariş vermek istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-gray-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-gray-950 text-gray-950" />
                  <span>WhatsApp'tan Sipariş Ver →</span>
                </a>
              </div>
            </div>

          </div>

          {/* Çiftlik Katılım Başvurusu */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-10 bg-gradient-to-r from-[#091812] to-[#040e0b] border border-emerald-900/40 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-gray-950 text-xs font-black">
                Yeni Çiftlik Katılımı
              </span>
              <h3 className="text-lg sm:text-2xl font-black">
                Siz de Alanya'da Süt Üreticisi misiniz?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-lg">
                Çiftliğinizi platformumuza ekleyerek doğrudan Alanya'daki binlerce aileye ulaşın.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, ben Alanya'da süt üreticisiyim. Çiftliğimi platforma eklemek istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-gray-950 font-black text-sm shrink-0 shadow-lg shadow-amber-500/20 transition active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Çiftliğinizi Ekleyin →
            </a>
          </div>

        </section>


        {/* ========================================================= */}
        {/* NASIL ÇALIŞIR? BÖLÜMÜ                                     */}
        {/* ========================================================= */}
        <section id="nasil-calisir" className="py-12 sm:py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
                {t.howItWorks.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-950">
                {t.howItWorks.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-gray-100 text-center space-y-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400 text-gray-950 flex items-center justify-center mx-auto font-black text-lg sm:text-xl shadow-md shadow-amber-400/20">
                  1
                </div>
                <h3 className="font-black text-base sm:text-lg text-gray-950">{t.howItWorks.step1Title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t.howItWorks.step1Desc}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-gray-100 text-center space-y-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F59E0B] text-gray-950 flex items-center justify-center mx-auto font-black text-lg sm:text-xl shadow-md shadow-amber-400/20">
                  2
                </div>
                <h3 className="font-black text-base sm:text-lg text-gray-950">{t.howItWorks.step2Title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t.howItWorks.step2Desc}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-gray-100 text-center space-y-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center mx-auto font-black text-lg sm:text-xl shadow-md shadow-emerald-800/20">
                  3
                </div>
                <h3 className="font-black text-base sm:text-lg text-gray-950">{t.howItWorks.step3Title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t.howItWorks.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* DAĞITIM BÖLGELERİ & MAHALLELER */}
        <DeliveryZonesSection onOpenOrderModal={() => handleOpenOrder()} />


        {/* SEO BLOG BÖLÜMÜ */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Alanya Süt Rehberi & Blog</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
                Faydalı Bilgiler & Çiftlik Yazıları
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
                Jersey sütünün sırları, çiğ süt kaynatma ve ev yoğurdu mayalama rehberleri.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition"
            >
              <span>Tüm Yazıları Gör ({BLOG_POSTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-emerald-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-2xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-gray-950 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:underline"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* SIKÇA SORULAN SORULAR */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobilde Altta Sabit Kalan WhatsApp & Arama Barı */}
      <MobileStickyBar onOpenOrderModal={() => handleOpenOrder()} />

      {/* Sipariş Modalı */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProductId={selectedProductId}
      />

    </div>
  );
}
