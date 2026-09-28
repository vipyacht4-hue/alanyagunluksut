"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { Globe, ChevronDown } from "lucide-react";

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
        className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-2.5 sm:px-3 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-800 transition shrink-0 select-none shadow-2xs"
        aria-label="Dil Seçimi"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="uppercase text-[11px] sm:text-xs font-extrabold">{current.code}</span>
        <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50 animate-fadeIn">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-bold transition text-left ${
                language === item.code
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-base">{item.flag}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
