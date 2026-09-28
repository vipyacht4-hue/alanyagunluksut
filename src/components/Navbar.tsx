"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Search } from "lucide-react";
import { CONTACT_INFO } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Marka */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
                <path d="M9 2h6v2h-1v2.18c2.83.69 4 2.82 4 5.82v9c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3v-9c0-3 1.17-5.13 4-5.82V4H9V2zm1 4v.5c0 .28-.22.5-.5.5-2.02.43-2.5 1.93-2.5 3.82v1.18h10V10.82c0-1.89-.48-3.39-2.5-3.82-.28 0-.5-.22-.5-.5V6h-4zm-2 7v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6H8z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-base sm:text-lg text-gray-900 tracking-tight block whitespace-nowrap">
                Alanya Günlük Süt
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold tracking-wide block whitespace-nowrap">
                Çiftlikten Kapınıza Taze
              </span>
            </div>
          </Link>

          {/* Masaüstü Menü Linkleri */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-semibold text-gray-700 shrink-0">
            <Link href="/" className="text-emerald-800 font-bold hover:text-emerald-700 transition whitespace-nowrap">
              {t.nav.home}
            </Link>
            <Link href="/#ciftlikler" className="hover:text-emerald-800 transition whitespace-nowrap">
              {t.nav.farms}
            </Link>
            <Link href="/#urunler" className="hover:text-emerald-800 transition whitespace-nowrap">
              {t.nav.products}
            </Link>
            <Link href="/#nasil-calisir" className="hover:text-emerald-800 transition whitespace-nowrap">
              {t.nav.howItWorks}
            </Link>
            <Link href="/blog" className="hover:text-emerald-800 transition whitespace-nowrap">
              {t.nav.blog}
            </Link>
          </nav>

          {/* Arama Kutusu */}
          <div className="hidden lg:flex items-center relative flex-1 max-w-xs mx-2">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={t.nav.searchPlaceholder}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-full border border-gray-200 bg-gray-50/80 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden transition placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Sağ Alan: Dil Seçici + Telefon + WhatsApp Butonu */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <LanguageSelector />

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-1.5 h-10 px-3.5 text-xs lg:text-sm font-bold text-emerald-800 bg-white hover:bg-emerald-50/60 rounded-full transition border border-emerald-300 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="whitespace-nowrap">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 h-10 px-4 text-xs lg:text-sm font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-full transition shadow-md shadow-emerald-700/25 hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span className="whitespace-nowrap">{t.nav.quickOrder}</span>
            </button>
          </div>

          {/* Mobilde Sağ Alan (Dil Seçici + Menü Butonu) */}
          <div className="flex items-center gap-1.5 sm:hidden shrink-0">
            <LanguageSelector />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-800 hover:bg-gray-100 rounded-xl"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-2.5 shadow-xl animate-fadeIn">
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

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 text-xs whitespace-nowrap"
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
