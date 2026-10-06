import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Milk, Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function Footer() {
  return (
    <footer className="bg-farm-950 text-farm-100 pt-16 pb-24 md:pb-16 border-t border-farm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marka & Tanıtım */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white/10 p-1 border border-white/15 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Alanya Günlük Süt Logosu"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  Alanya Günlük Süt
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  Doğal Çiftlik Sütü
                </span>
              </div>
            </div>
            <p className="text-xs text-farm-200 leading-relaxed">
              Alanya'nın yayla ve çiftliklerinden günübirlik sağılan, katkısız, yağı alınmamış hakiki çiğ süt ve doğal köy ürünlerini soğuk zincirle kapınıza ulaştırıyoruz.
            </p>
            <div className="pt-2 text-xs text-farm-300">
              <p>📍 Alanya / Antalya geneli ücretsiz kapıya teslimat.</p>
            </div>
          </div>

          {/* Hızlı Menü */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hızlı Menü
            </h4>
            <ul className="space-y-2.5 text-xs text-farm-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/#urunler" className="hover:text-white transition-colors">
                  Taze Süt & Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-white transition-colors">
                  Alanya Dağıtım Bölgeleri
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Sağlıklı Yaşam Rehberi
                </Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Blog Makaleleri */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Faydalı Bilgiler & Blog
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
              Sipariş & İletişim
            </h4>
            <div className="space-y-3 text-xs text-farm-200">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors p-2 rounded-xl bg-farm-900/60 border border-farm-800"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-farm-400">Telefonla Sipariş</div>
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
                  <div className="text-[10px] text-farm-400">WhatsApp Sipariş Hattı</div>
                  <div className="font-bold text-sm text-white">{CONTACT_INFO.phoneDisplay}</div>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-farm-300">
                <Clock className="w-3.5 h-3.5 text-farm-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.deliveryHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Çizgi & Telif */}
        <div className="mt-12 pt-8 border-t border-farm-900 text-center sm:flex sm:justify-between sm:items-center text-xs text-farm-400">
          <p>© {new Date().getFullYear()} www.alanyagunluksut.com — Tüm Hakları Saklıdır.</p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <span>Alanya'da doğallık ve sağlık için sevgiyle üretildi</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
