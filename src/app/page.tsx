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
  Zap, 
  Tag, 
  Store, 
  Users, 
  Heart, 
  Snowflake, 
  Leaf, 
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
  const { t, language } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const handleOpenOrder = (prodId?: string) => {
    setSelectedProductId(prodId);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FBFA] text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-20 md:pb-0 overflow-x-hidden w-full">
      
      {/* Üst Menü */}
      <Navbar onOpenOrderModal={() => handleOpenOrder()} />

      <main className="flex-1">
        
        {/* ========================================================= */}
        {/* HERO BÖLÜMÜ - MOBİL ÖNCELİKLİ (MOBILE FIRST) DİZAYN       */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden pt-3 pb-6 sm:pt-8 sm:pb-16 bg-gradient-to-b from-[#F2F8F5] via-white to-[#F7FAF8]">
          
          <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
              
              {/* SOL SÜTUN */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-6">
                
                {/* Rozet */}
                <div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-[10.5px] sm:text-xs font-bold shadow-2xs">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 fill-emerald-600 shrink-0" />
                    <span>{t.hero.verifiedBadge}</span>
                  </div>
                </div>

                {/* Büyük Başlık - Mobilde Ekrana Kusursuz Sığan Ölçekleme */}
                <h1 className="text-[21px] xs:text-2xl sm:text-4xl xl:text-[46px] 2xl:text-[50px] font-black text-gray-950 tracking-tight leading-[1.2] sm:leading-[1.25]">
                  <span className="block">{t.hero.titleLine1}</span>
                  <span className="block mt-0.5 sm:mt-1">{t.hero.titleLine2}</span>
                  <span className="block mt-0.5 sm:mt-1 text-[#D97706]">
                    {t.hero.titleLine3}
                  </span>
                  <span className="block mt-0.5 sm:mt-1">{t.hero.titleLine4}</span>
                </h1>

                {/* Açıklama */}
                <p className="text-[11.5px] sm:text-base text-gray-600 max-w-xl leading-snug sm:leading-relaxed">
                  {t.hero.desc}
                </p>

                {/* 3 Özellik İkonu - Mobilde Kompakt */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-0.5 sm:pt-1">
                  
                  {/* Anında Sipariş */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white border border-gray-100 shadow-2xs">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-amber-100/90 flex items-center justify-center text-amber-600 shrink-0">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-gray-900 leading-tight">{t.hero.instantOrderTitle}</h4>
                      <p className="hidden sm:block text-[11px] text-gray-500 leading-tight">{t.hero.instantOrderDesc}</p>
                    </div>
                  </div>

                  {/* Şeffaf Fiyatlar */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white border border-gray-100 shadow-2xs">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-100/90 flex items-center justify-center text-emerald-700 shrink-0">
                      <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-gray-900 leading-tight">{t.hero.transparentPriceTitle}</h4>
                      <p className="hidden sm:block text-[11px] text-gray-500 leading-tight">{t.hero.transparentPriceDesc}</p>
                    </div>
                  </div>

                  {/* Soğuk Zincir Teslimat */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white border border-gray-100 shadow-2xs">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-100/90 flex items-center justify-center text-emerald-700 shrink-0">
                      <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-gray-900 leading-tight">{t.hero.coldChainTitle}</h4>
                      <p className="hidden sm:block text-[11px] text-gray-500 leading-tight">{t.hero.coldChainDesc}</p>
                    </div>
                  </div>

                </div>

                {/* ========================================================= */}
                {/* 2 FİRMANIN KARŞILAŞTIRMASI                                 */}
                {/* ========================================================= */}
                
                {/* MOBİL ÖZEL KART GÖRÜNÜMÜ */}
                <div className="block sm:hidden space-y-2.5 pt-1">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-xs font-black text-gray-900">{t.hero.compareTitle}</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold">{t.hero.activeProducers}</span>
                  </div>

                  {/* 1. Toroslar Çiftliği Mobil Kart */}
                  <div className="p-3 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                          <Image src="/toroslar.jpg" alt="Toroslar Doğal Çiftliği" fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h4 className="text-xs font-black text-gray-950">Toroslar Doğal Çiftliği</h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 text-white" />
                          </div>
                          <span className="text-[10px] text-gray-500 block leading-tight">{t.table.familyBiz}</span>
                          <span className="text-[10px] text-amber-500 font-bold">★ 4.9 (128)</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-gray-400 block font-bold">5 LT</span>
                        <span className="text-lg font-black text-emerald-800">700 TL</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenOrder("toroslar-jersey-5lt")}
                      className="w-full py-2 bg-emerald-700 active:bg-emerald-800 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>{t.table.orderBtn} (700 TL)</span>
                    </button>
                  </div>

                  {/* 2. Oba Mandırası Mobil Kart */}
                  <div className="p-3 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                          <Image src="/oba.jpg" alt="Oba Yayla Mandırası" fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h4 className="text-xs font-black text-gray-950">Oba Yayla Mandırası</h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 text-white" />
                          </div>
                          <span className="text-[10px] text-gray-500 block leading-tight">{t.table.localProd}</span>
                          <span className="text-[10px] text-amber-500 font-bold">★ 4.8 (95)</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-gray-400 block font-bold">5 LT</span>
                        <span className="text-lg font-black text-emerald-800">625 TL</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenOrder("oba-jersey-5lt")}
                      className="w-full py-2 bg-emerald-700 active:bg-emerald-800 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>{t.table.orderBtn} (625 TL)</span>
                    </button>
                  </div>
                </div>

                {/* MASAÜSTÜ & TABLET TABLO GÖRÜNÜMÜ */}
                <div className="hidden sm:block bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
                  
                  {/* Kart Başlığı */}
                  <div className="px-5 py-3.5 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4 text-emerald-700" />
                      <h3 className="text-xs sm:text-sm font-extrabold text-gray-900">
                        {t.hero.compareTitle}
                      </h3>
                    </div>
                    <a
                      href="#ciftlikler"
                      className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition"
                    >
                      <span>{t.hero.seeAllFarms}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Tablo Gövdesi */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-gray-100 text-[10px] uppercase font-bold text-gray-400 bg-gray-50/40">
                          <th className="py-2.5 px-4">{t.table.farmProducer}</th>
                          <th className="py-2.5 px-3">{t.table.origin}</th>
                          <th className="py-2.5 px-3">{t.table.milkType}</th>
                          <th className="py-2.5 px-3">{t.table.price5Lt}</th>
                          <th className="py-2.5 px-3">{t.table.rating}</th>
                          <th className="py-2.5 px-4 text-right">{t.table.order}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-medium">
                        
                        {/* 1. Toroslar Doğal Çiftliği - 700 TL */}
                        <tr className="hover:bg-emerald-50/30 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                                <Image
                                  src="/toroslar.jpg"
                                  alt="Toroslar Doğal Çiftliği"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className="font-extrabold text-gray-950 text-xs sm:text-sm">
                                    Toroslar Doğal Çiftliği
                                  </span>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 text-white" />
                                </div>
                                <span className="text-[11px] text-gray-500 block leading-tight">
                                  {t.table.familyBiz}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <div className="flex items-center gap-1 text-gray-600 text-xs">
                              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>Alanya Oba</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-gray-700 whitespace-nowrap text-xs">
                            Jersey İnek Sütü
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <span className="font-black text-emerald-800 text-sm sm:text-base">
                              700 TL
                            </span>
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <div className="flex items-center gap-1 text-xs">
                              <span className="text-amber-500 font-bold flex items-center">
                                ★ 4.9
                              </span>
                              <span className="text-gray-400 text-[10px]">(128)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleOpenOrder("toroslar-jersey-5lt")}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs transition shadow-xs"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-white" />
                              <span>{t.table.orderBtn}</span>
                            </button>
                          </td>
                        </tr>

                        {/* 2. Oba Yayla Mandırası - 625 TL */}
                        <tr className="hover:bg-emerald-50/30 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                                <Image
                                  src="/oba.jpg"
                                  alt="Oba Yayla Mandırası"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className="font-extrabold text-gray-950 text-xs sm:text-sm">
                                    Oba Yayla Mandırası
                                  </span>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 text-white" />
                                </div>
                                <span className="text-[11px] text-gray-500 block leading-tight">
                                  {t.table.localProd}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <div className="flex items-center gap-1 text-gray-600 text-xs">
                              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>Alanya Oba</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-gray-700 whitespace-nowrap text-xs">
                            Jersey İnek Sütü
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <span className="font-black text-emerald-800 text-sm sm:text-base">
                              625 TL
                            </span>
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <div className="flex items-center gap-1 text-xs">
                              <span className="text-amber-500 font-bold flex items-center">
                                ★ 4.8
                              </span>
                              <span className="text-gray-400 text-[10px]">(95)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleOpenOrder("oba-jersey-5lt")}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs transition shadow-xs"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-white" />
                              <span>{t.table.orderBtn}</span>
                            </button>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                </div>

              </div>


              {/* SAĞ SÜTUN (Mobilde ve Masaüstünde Mükemmel Orantılı Görsel) */}
              <div className="lg:col-span-5 relative flex flex-col items-center mt-1 lg:mt-0">
                
                {/* Orijinal Yüksek Çözünürlüklü Telefon Renderı - Mobilde Ekrana Sığacak Şekilde Ölçekli */}
                <div 
                  className="relative w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[420px] lg:max-w-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200/80 cursor-pointer group bg-white mx-auto"
                  onClick={() => handleOpenOrder()}
                >
                  <Image
                    src="/telefon.png"
                    alt="Alanya Günlük Süt Mobil Uygulama ve Doğal Çiftlik Sütleri"
                    width={1122}
                    height={1402}
                    priority
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Sosyal Kanıt Kartı */}
                <div className="mt-2.5 sm:mt-4 w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[420px] lg:max-w-[480px] bg-white rounded-2xl border border-gray-200/90 shadow-xs p-2.5 sm:p-3.5 flex items-center justify-between gap-2 sm:gap-3 mx-auto">
                  
                  {/* Avatarlar + Yıldızlar */}
                  <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                    <div className="flex -space-x-1.5 sm:-space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-emerald-700 text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center">
                        EK
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-amber-500 text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center">
                        MY
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-sky-600 text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center">
                        AT
                      </div>
                    </div>

                    <div>
                      <span className="text-[10.5px] sm:text-xs font-black text-gray-950 block leading-tight">
                        {t.hero.socialProofCount}
                      </span>
                      <span className="text-[8.5px] sm:text-[10px] text-gray-500 font-medium block">
                        {t.hero.socialProofText}
                      </span>
                      <div className="flex items-center text-amber-400 text-[8.5px] sm:text-[10px] mt-0.5">
                        ★★★★★
                      </div>
                    </div>
                  </div>

                  {/* Alıntı */}
                  <div className="text-[9.5px] sm:text-[11px] text-gray-600 italic border-l border-gray-100 pl-2 sm:pl-3 leading-snug">
                    <p>{t.hero.socialProofQuote}</p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 5'Lİ GÜVEN ROZETİ ÇUBUĞU (Mobilde 2 Kolon, Masaüstü 5)     */}
        {/* ========================================================= */}
        <section className="bg-white border-y border-gray-200/70 py-4 sm:py-6">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 items-center">
              
              {/* 1. %100 Taze */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-gray-950">{t.badges.fresh.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{t.badges.fresh.desc}</p>
                </div>
              </div>

              {/* 2. Doğrulanmış Çiftlikler */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-gray-950">{t.badges.verified.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{t.badges.verified.desc}</p>
                </div>
              </div>

              {/* 3. Yerel Üreticiyi Destekle */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-gray-950">{t.badges.local.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{t.badges.local.desc}</p>
                </div>
              </div>

              {/* 4. Katkısız & Doğal */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-gray-950">{t.badges.natural.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{t.badges.natural.desc}</p>
                </div>
              </div>

              {/* 5. Soğuk Zincir Teslimat */}
              <div className="flex items-center gap-2 sm:gap-3 col-span-2 md:col-span-1 justify-center md:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-gray-950">{t.badges.coldChain.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{t.badges.coldChain.desc}</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* ÇİFTLİKLERİMİZ (2 FİRMA DETAY KARTLARI)                   */}
        {/* ========================================================= */}
        <section id="ciftlikler" className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest block mb-1.5">
              {t.farmsSection.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              {t.farmsSection.title}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
              {t.farmsSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {VENDORS.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-56 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={vendor.image}
                      alt={vendor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-emerald-900 text-xs font-black px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{vendor.badge}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold bg-black/45 backdrop-blur-xs px-3 py-1.5 rounded-xl">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{vendor.location}</span>
                      </div>
                      <span className="text-amber-400 font-black">★ {vendor.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-black text-gray-950 group-hover:text-emerald-700 transition">
                      {vendor.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-medium">
                      {vendor.subTitle}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">5 LT Jersey Süt</span>
                        <span className="text-2xl sm:text-3xl font-black text-emerald-800">{vendor.price5Lt} TL</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl">
                        {t.farmsSection.sameDayDelivery}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => handleOpenOrder(PRODUCTS.find((p) => p.vendorId === vendor.id)?.id)}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.farmsSection.orderWithPrice} ({vendor.price5Lt} TL)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Çiftlik Katılım Başvurusu */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-8 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 text-[10px] sm:text-xs font-black">
                {t.farmsSection.producerCallBtn}
              </span>
              <h3 className="text-base sm:text-xl font-black">
                {t.farmsSection.producerCallTitle}
              </h3>
              <p className="text-emerald-200 text-xs max-w-lg">
                {t.farmsSection.producerCallDesc}
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, ben Alanya'da süt üreticisiyim. Çiftliğimi platforma eklemek istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs shrink-0 shadow-md transition active:scale-95 whitespace-nowrap"
            >
              {t.farmsSection.producerCallBtn}
            </a>
          </div>

        </section>


        {/* ========================================================= */}
        {/* NASIL ÇALIŞIR? BÖLÜMÜ                                     */}
        {/* ========================================================= */}
        <section id="nasil-calisir" className="py-12 sm:py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1.5">
                {t.howItWorks.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950">
                {t.howItWorks.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7FAF8] border border-gray-100 text-center space-y-2.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto font-black text-base sm:text-lg shadow-xs">
                  1
                </div>
                <h3 className="font-black text-sm sm:text-base text-gray-950">{t.howItWorks.step1Title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t.howItWorks.step1Desc}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7FAF8] border border-gray-100 text-center space-y-2.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto font-black text-base sm:text-lg shadow-xs">
                  2
                </div>
                <h3 className="font-black text-sm sm:text-base text-gray-950">{t.howItWorks.step2Title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t.howItWorks.step2Desc}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7FAF8] border border-gray-100 text-center space-y-2.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto font-black text-base sm:text-lg shadow-xs">
                  3
                </div>
                <h3 className="font-black text-sm sm:text-base text-gray-950">{t.howItWorks.step3Title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
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
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
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
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 transition"
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:underline"
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
