"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogIndexPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Alanya Rehberi", "Püf Noktaları", "Yemek & Tarifler", "Sağlıklı Yaşam"];

  const filteredPosts = selectedCategory === "Tümü"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-farm-50/20">
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Üst Başlık */}
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-farm-600 hover:text-farm-800 mb-4 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ana Sayfaya Dön</span>
            </Link>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-farm-100 text-farm-800 text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Alanya Süt Rehberi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-farm-950 tracking-tight">
              Doğal Süt, Yoğurt ve Sağlıklı Yaşam Bloğu
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Alanya'da katkısız çiğ süt seçimi, evde taş gibi yoğurt mayalama tüyoları, sütün doğru kaynatılması ve saklama yöntemleri üzerine uzman rehberler.
            </p>
          </div>

          {/* Kategori Filtreleri */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-farm-600 text-white shadow-md shadow-farm-600/20"
                    : "bg-white text-gray-600 hover:bg-farm-50 border border-farm-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Yazılar Izgarası */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-farm-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-farm-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-farm-800 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 text-xs text-gray-400 mb-2.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-farm-950 group-hover:text-farm-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-farm-600 group-hover:text-farm-800 transition-colors"
                  >
                    <span>Yazının Tamamını Oku</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <MobileStickyBar onOpenOrderModal={() => setIsOrderModalOpen(true)} />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
