"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Milk, Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogPosts";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-farm-950 text-farm-100 pt-16 pb-24 md:pb-16 border-t border-farm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marka & Tanıtım */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo-emblem.png"
                  alt="Alanya Günlük Süt Logosu"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  Alanya Günlük Süt
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  {language === "ru" ? "Фермерское молоко" : language === "en" ? "Fresh Farm Milk" : "Doğal Çiftlik Sütü"}
                </span>
              </div>
            </div>
            <p className="text-xs text-farm-200 leading-relaxed">
              {language === "ru" ? "Натуральное парное цельное молоко и деревенские продукты прямо с ферм Аланьи с бесплатной доставкой на дом." : language === "en" ? "Fresh morning raw farm milk delivered chilled across Alanya directly to your doorstep. 100% pure and additive-free." : "Alanya'nın yayla ve çiftliklerinden günübirlik sağılan, katkısız, yağı alınmamış hakiki çiğ süt ve doğal köy ürünlerini soğuk zincirle kapınıza ulaştırıyoruz."}
            </p>
            <div className="pt-2 text-xs text-farm-300">
              <p>{language === "ru" ? "📍 Бесплатная доставка по всей Аланье" : language === "en" ? "📍 Free doorstep delivery across Alanya" : "📍 Alanya / Antalya geneli ücretsiz kapıya teslimat."}</p>
            </div>
          </div>

          {/* Hızlı Menü */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === "ru" ? "Быстрое меню" : language === "en" ? "Quick Menu" : "Hızlı Menü"}
            </h4>
            <ul className="space-y-2.5 text-xs text-farm-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {language === "ru" ? "Главная" : language === "en" ? "Home" : "Ana Sayfa"}
                </Link>
              </li>
              <li>
                <Link href="/#urunler" className="hover:text-white transition-colors">
                  {language === "ru" ? "Свежее молоко и продукты" : language === "en" ? "Fresh Milk & Products" : "Taze Süt & Ürünlerimiz"}
                </Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-white transition-colors">
                  {language === "ru" ? "Зоны доставки" : language === "en" ? "Delivery Zones" : "Alanya Dağıtım Bölgeleri"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {language === "ru" ? "Блог и гид по здоровью" : language === "en" ? "Blog & Health Guide" : "Blog & Sağlıklı Yaşam Rehberi"}
                </Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-white transition-colors">
                  {language === "ru" ? "Частые вопросы (FAQ)" : language === "en" ? "FAQ" : "Sıkça Sorulan Sorular"}
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Blog Makaleleri */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === "ru" ? "Полезные статьи и Блог" : language === "en" ? "Helpful Articles & Blog" : "Faydalı Bilgiler & Blog"}
            </h4>
            <ul className="space-y-2.5 text-xs text-farm-200">
              {BLOG_POSTS.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    • {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim & Sipariş Hattı */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === "ru" ? "Заказ и Контакты" : language === "en" ? "Order & Contact" : "Sipariş & İletişim"}
            </h4>
            <div className="space-y-3 text-xs text-farm-200">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors p-2 rounded-xl bg-farm-900/60 border border-farm-800"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-farm-400">
                    {language === "ru" ? "Заказ по телефону" : language === "en" ? "Order by Phone" : "Telefonla Sipariş"}
                  </div>
                  <div className="font-bold text-sm text-white">{CONTACT_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors p-2 rounded-xl bg-farm-900/60 border border-farm-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-farm-400">
                    {language === "ru" ? "Линия заказов WhatsApp" : language === "en" ? "WhatsApp Order Line" : "WhatsApp Sipariş Hattı"}
                  </div>
                  <div className="font-bold text-sm text-white">{CONTACT_INFO.phoneDisplay}</div>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-farm-300">
                <Clock className="w-3.5 h-3.5 text-farm-400 shrink-0 mt-0.5" />
                <span>
                  {language === "ru" ? "Прием заказов и доставка: 08:00 - 20:00" : language === "en" ? "Delivery & Orders: 08:00 - 20:00 Every day" : CONTACT_INFO.deliveryHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Çizgi & Telif */}
        <div className="mt-12 pt-8 border-t border-farm-900 text-center sm:flex sm:justify-between sm:items-center text-xs text-farm-400">
          <p>
            © {new Date().getFullYear()} www.alanyagunluksut.com — {language === "ru" ? "Все права защищены." : language === "en" ? "All Rights Reserved." : "Tüm Hakları Saklıdır."}
          </p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <span>
              {language === "ru" ? "Сделано с любовью для здоровья в Аланье" : language === "en" ? "Crafted with care in Alanya for natural health" : "Alanya'da doğallık ve sağlık için sevgiyle üretildi"}
            </span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
