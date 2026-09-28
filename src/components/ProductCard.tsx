"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Sparkles, MessageCircle, MapPin, Store, ShieldCheck } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOrderClick: (productId: string, size: string, price: number) => void;
}

export default function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const [selectedOption, setSelectedOption] = useState(
    product.options.find((o) => o.popular) || product.options[0]
  );

  return (
    <div className="bg-white rounded-3xl border border-farm-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Ürün Görseli & Rozetler */}
      <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-farm-50">
        <Image
          src={product.image}
          alt={`${product.vendorName} - ${product.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Üretici Rozeti */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <div className="bg-farm-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md border border-white/10">
            <Store className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[180px]">{product.vendorName}</span>
          </div>

          {product.badge && (
            <div className="bg-amber-500 text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-md shrink-0">
              {product.badge}
            </div>
          )}
        </div>

        {/* Yağ Oranı ve Konum Vurgusu */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-farm-100 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{product.vendorLocation}</span>
          </div>

          {product.fatRatio && (
            <span className="bg-amber-400 text-farm-950 text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-xs">
              {product.fatRatio}
            </span>
          )}
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-xs font-bold text-farm-700 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Doğrulanmış Üretici Çiftlik</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-farm-950 group-hover:text-farm-700 transition-colors">
            {product.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Özellikler Maddeleri */}
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-farm-900 font-medium">
                <div className="w-4 h-4 rounded-full bg-farm-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-farm-700" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fiyat & Sipariş Butonu */}
        <div className="mt-6 pt-5 border-t border-farm-100 space-y-3.5">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              {selectedOption.size} Bidon Fiyatı:
            </span>
            <div className="text-right">
              <span className="text-3xl font-black text-farm-950">{selectedOption.price} TL</span>
              <span className="text-[11px] text-gray-500 block">Kapıya teslimat dahil</span>
            </div>
          </div>

          {/* Sipariş Butonu */}
          <button
            type="button"
            onClick={() => onOrderClick(product.id, selectedOption.size, selectedOption.price)}
            className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:shadow-xl active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Bu Firmadan Sipariş Ver ({selectedOption.price} TL)</span>
          </button>
        </div>

      </div>

    </div>
  );
}
