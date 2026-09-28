"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

interface MobileStickyBarProps {
  onOpenOrderModal: () => void;
}

export default function MobileStickyBar({ onOpenOrderModal }: MobileStickyBarProps) {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.12)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        
        {/* Telefon ile Ara Butonu */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gray-50 active:bg-gray-100 text-gray-800 font-extrabold text-xs rounded-xl border border-gray-200 transition-colors shadow-2xs whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{t.stickyBar.call}</span>
        </a>

        {/* WhatsApp Hızlı Sipariş Butonu */}
        <button
          onClick={onOpenOrderModal}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-700/30 transition-transform active:scale-[0.98] whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>{t.stickyBar.order}</span>
        </button>

      </div>
    </div>
  );
}
