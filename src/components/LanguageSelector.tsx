"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { ChevronDown, Check } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-2.5 sm:px-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 active:border-emerald-600 text-xs font-bold text-gray-800 transition shrink-0 select-none shadow-xs cursor-pointer"
        aria-label="Dil Seçimi"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="uppercase text-[11px] sm:text-xs font-black">{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-gray-200 py-1.5 z-[100] animate-fadeIn">
          <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
            Dil / Language / Язык
          </div>
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold transition text-left cursor-pointer ${
                language === item.code
                  ? "bg-emerald-50 text-emerald-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-lg leading-none">{item.flag}</span>
                <span className="font-extrabold">{item.label}</span>
              </div>
              {language === item.code && (
                <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
