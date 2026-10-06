"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Search } from "lucide-react";
import { CONTACT_INFO } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <header className="sticky top-0 z-40 bg-[#07140F]/95 backdrop-blur-md border-b border-emerald-900/40 shadow-sm w-full text-white">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Marka */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <Image
                src="/logo-emblem.png"
                alt="Alanya Günlük Süt Logosu"
                width={48}
                height={48}
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="font-black text-sm sm:text-lg text-white tracking-tight block whitespace-nowrap">
                Alanya Günlük Süt
              </span>
              <span className="text-[9px] sm:text-xs text-amber-400 font-bold tracking-wider uppercase block whitespace-nowrap">
                Doğal Çiftlik Sütü
              </span>
            </div>
          </Link>

          {/* Masaüstü Menü Linkleri */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-semibold text-gray-300 shrink-0">
            <Link href="/" className="text-amber-400 font-bold transition whitespace-nowrap">
              {t.nav.home}
            </Link>
            <Link href="/#ciftlikler" className="hover:text-white transition whitespace-nowrap">
              {t.nav.farms}
            </Link>
            <Link href="/#nasil-calisir" className="hover:text-white transition whitespace-nowrap">
              {t.nav.howItWorks}
            </Link>
            <Link href="/#bolgeler" className="hover:text-white transition whitespace-nowrap">
              Dağıtım Bölgeleri
            </Link>
            <Link href="/blog" className="hover:text-white transition whitespace-nowrap">
              {t.nav.blog}
            </Link>
          </nav>

          {/* Sağ Alan: Dil Seçici + Telefon + WhatsApp Butonu */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <LanguageSelector />

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-1.5 h-10 px-3.5 text-xs lg:text-sm font-bold text-gray-200 bg-white/10 hover:bg-white/15 rounded-full transition border border-white/15 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Merhaba, Alanya Günlük Süt sipariş hattından ulaşıyorum. Günlük Jersey sütü hakkında bilgi ve sipariş vermek istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 text-xs lg:text-sm font-black text-gray-950 bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] rounded-full transition shadow-lg shadow-amber-500/20 hover:shadow-xl whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-gray-950 text-gray-950 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp Sipariş Hattı →</span>
            </a>
          </div>

          {/* Mobilde Sağ Alan (Dil Seçici + Menü Butonu) */}
          <div className="flex items-center gap-1.5 sm:hidden shrink-0">
            <LanguageSelector />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-200 hover:bg-white/10 rounded-xl"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-5 space-y-2.5 shadow-xl animate-fadeIn text-gray-900">
          <div className="flex items-center gap-2.5 pb-3 mb-2 border-b border-gray-100">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/logo-emblem.png"
                alt="Alanya Günlük Süt"
                width={40}
                height={40}
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div>
              <span className="font-black text-sm text-gray-900 block">Alanya Günlük Süt</span>
              <span className="text-[11px] text-amber-600 font-bold block">Çiftlikten Kapınıza Taze</span>
            </div>
          </div>

          <div className="relative mb-2">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.nav.searchPlaceholder}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-hidden"
            />
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-emerald-800"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/#ciftlikler"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800"
          >
            {t.nav.farms}
          </Link>
          <Link
            href="/#urunler"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800"
          >
            {t.nav.products}
          </Link>
          <Link
            href="/#nasil-calisir"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800"
          >
            {t.nav.howItWorks}
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800"
          >
            {t.nav.blog}
          </Link>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <div>
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider block mb-1.5">
                Dil Seçimi / Select Language / Выберите язык
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { code: "tr" as const, label: "Türkçe", flag: "🇹🇷" },
                  { code: "ru" as const, label: "Русский", flag: "🇷🇺" },
                  { code: "en" as const, label: "English", flag: "🇬🇧" },
                ].map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      language === item.code
                        ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                        : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 text-xs whitespace-nowrap mt-1"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.nav.callNow}: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
