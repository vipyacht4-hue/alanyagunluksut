"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  MessageCircle, 
  ChevronRight, 
  Phone,
  Milk,
  Share2,
  CheckCircle
} from "lucide-react";

import { BlogPost } from "@/data/blogPosts";
import { CONTACT_INFO } from "@/data/products";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import OrderModal from "@/components/OrderModal";
import Footer from "@/components/Footer";

interface BlogClientWrapperProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  articleSchema: any;
}

export default function BlogClientWrapper({
  post,
  relatedPosts,
  articleSchema,
}: BlogClientWrapperProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Paragrafları ve alt başlıkları formatlayarak HTML render
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-3" />;

      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-farm-950 mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-farm-950 mt-10 mb-4 pb-2 border-b border-farm-100">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={idx} className="text-lg font-bold text-farm-900 mt-6 mb-2">
            {trimmed.replace("#### ", "")}
          </h4>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={idx} className="ml-5 list-disc text-gray-700 my-1 text-sm sm:text-base leading-relaxed">
            {trimmed.replace("- ", "")}
          </li>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return (
          <div key={idx} className="flex gap-2 my-2 text-sm sm:text-base text-gray-750">
            <span className="font-bold text-farm-700 shrink-0">{trimmed.slice(0, 3)}</span>
            <p className="leading-relaxed">{trimmed.slice(3)}</p>
          </div>
        );
      }

      return (
        <p key={idx} className="text-gray-700 leading-relaxed my-3 text-sm sm:text-base">
          {trimmed}
        </p>
      );
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Yazı linki kopyalandı!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-farm-50/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main className="flex-1 py-8 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Geri Dönüş Linki */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-farm-700 hover:text-farm-900 mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Blog Yazılarına Dön</span>
          </Link>

          {/* Makale Başlık Alanı */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-farm-100 text-farm-800 text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-farm-950 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Kapak Görseli */}
          <div className="mt-8 relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-farm-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Makale Gövdesi */}
          <article className="mt-10 bg-white p-6 sm:p-10 rounded-3xl border border-farm-100 shadow-xs prose max-w-none">
            {renderFormattedContent(post.content)}

            {/* Makale İçi Sipariş Kutusu */}
            <div className="my-10 p-6 sm:p-8 bg-gradient-to-r from-farm-600 to-emerald-700 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-2 text-farm-100 text-xs font-bold uppercase tracking-wider mb-2">
                <Milk className="w-4 h-4" />
                <span>Taze Süt Kapınızda</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Alanya'da Çiftlik Sütünüzü Hemen Sipariş Edin
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-farm-100 max-w-xl">
                Oba, Mahmutlar, Tosmur, Kestel ve tüm Alanya geneline +4°C soğuk zincirle ücretsiz kapıya teslim ediyoruz.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-white text-farm-900 font-bold text-xs sm:text-sm hover:bg-farm-50 transition shadow-md"
                >
                  WhatsApp'tan Sipariş Ver
                </button>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-5 py-3 rounded-xl bg-farm-800/80 hover:bg-farm-800 text-white font-bold text-xs sm:text-sm transition border border-white/20"
                >
                  Hemen Ara: {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Paylaş Butonu */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500">Bu faydalı rehberi komşunuzla paylaşın:</span>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-farm-50 hover:bg-farm-100 text-farm-800 text-xs font-bold border border-farm-200 transition"
              >
                <Share2 className="w-3.5 h-3.5 text-farm-600" />
                <span>Paylaş</span>
              </button>
            </div>
          </article>

          {/* Diğer İlgili Yazılar */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-farm-950 mb-6">
              Diğer Faydalı Rehberler
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group bg-white p-4 rounded-2xl border border-farm-100 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-farm-600 block mb-1">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-farm-950 group-hover:text-farm-600 transition line-clamp-2">
                      {rPost.title}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-farm-600">
                    <span>Yazıyı Oku</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
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
