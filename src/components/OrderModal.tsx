"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Send, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, Store } from "lucide-react";
import { PRODUCTS, CONTACT_INFO, Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductId?: string;
}

interface OrderItem {
  productId: string;
  size: string;
  price: number;
  quantity: number;
}

export default function OrderModal({ isOpen, onClose, selectedProductId }: OrderModalProps) {
  const { t, language } = useLanguage();

  const [items, setItems] = useState<OrderItem[]>([
    {
      productId: "toroslar-jersey-5lt",
      size: "5 LT",
      price: 700,
      quantity: 1,
    }
  ]);

  const [customerName, setCustomerName] = useState("");
  const [customerNeighborhood, setCustomerNeighborhood] = useState("Alanya Merkez (Saray, Çarşı, Şekerhane)");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  useEffect(() => {
    if (selectedProductId) {
      const prod = PRODUCTS.find((p) => p.id === selectedProductId);
      if (prod) {
        setItems([
          {
            productId: prod.id,
            size: prod.options[0].size,
            price: prod.options[0].price,
            quantity: 1,
          }
        ]);
      }
    }
  }, [selectedProductId]);

  if (!isOpen) return null;

  const neighborhoods = [
    "Alanya Merkez (Saray, Çarşı, Şekerhane)",
    "Güller Pınarı & Hacet",
    "Oba Mahallesi",
    "Cikcilli & Çıplaklı",
    "Tosmur",
    "Kestel",
    "Mahmutlar",
    "Kargıcak",
    "Konaklı",
    "Payallar & Türkler",
    "Avsallar & İncekum",
    "Dim Çayı & Yayla",
    "Tepe & Bektaş & Sugözü",
    "Diğer / Özel Bölge"
  ];

  const updateQuantity = (index: number, delta: number) => {
    setItems((prev) => {
      const next = [...prev];
      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        if (next.length > 1) {
          next.splice(index, 1);
        } else {
          next[index].quantity = 1;
        }
      } else {
        next[index].quantity = newQty;
      }
      return next;
    });
  };

  const handleSelectProduct = (prod: Product) => {
    const existingIndex = items.findIndex((item) => item.productId === prod.id);
    if (existingIndex > -1) {
      updateQuantity(existingIndex, 1);
    } else {
      setItems((prev) => [
        ...prev,
        { productId: prod.id, size: prod.options[0].size, price: prod.options[0].price, quantity: 1 }
      ]);
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerAddress.trim()) {
      alert(language === "ru" ? "Пожалуйста, введите адрес доставки." : language === "en" ? "Please enter your delivery address." : "Lütfen teslimat adresinizi giriniz.");
      return;
    }

    const itemsSummary = items
      .map((item) => {
        const prod = PRODUCTS.find((p) => p.id === item.productId);
        const milkName = language === "ru" ? "5 Л Молоко Джерси" : language === "en" ? "5 LT Jersey Milk" : "5 LT Jersey İnek Sütü";
        const farmLabel = language === "ru" ? "Ферма" : language === "en" ? "Farm" : "Çiftlik";
        const pieceLabel = language === "ru" ? "шт." : language === "en" ? "pcs" : "Adet";
        return `• ${item.quantity} ${pieceLabel} ${milkName}\n   ↳ ${farmLabel}: ${prod?.vendorName}`;
      })
      .join("\n\n");

    let message = "";
    if (language === "ru") {
      message = `🥛 *${t.orderModal.whatsappOrderTitle}* 🥛\n\n` +
        `*Имя клиента:* ${customerName.trim() || "Не указано"}\n` +
        `*Район в Аланье:* ${customerNeighborhood}\n` +
        `*Адрес доставки:* ${customerAddress.trim()}\n` +
        (customerNote.trim() ? `*Примечание:* ${customerNote.trim()}\n` : "") +
        `\n🛒 *ВЫБРАННЫЕ ФЕРМЫ И МОЛОКО:*\n${itemsSummary}\n\n` +
        `_Подтвердите, пожалуйста, актуальную цену и ориентировочное время доставки._`;
    } else if (language === "en") {
      message = `🥛 *${t.orderModal.whatsappOrderTitle}* 🥛\n\n` +
        `*Customer Name:* ${customerName.trim() || "Not specified"}\n` +
        `*District / Area:* ${customerNeighborhood}\n` +
        `*Delivery Address:* ${customerAddress.trim()}\n` +
        (customerNote.trim() ? `*Order Note:* ${customerNote.trim()}\n` : "") +
        `\n🛒 *SELECTED FARMS & PRODUCTS:*\n${itemsSummary}\n\n` +
        `_Please confirm current price and estimated delivery time._`;
    } else {
      message = `🥛 *${t.orderModal.whatsappOrderTitle}* 🥛\n\n` +
        `*Müşteri Adı:* ${customerName.trim() || "Belirtilmedi"}\n` +
        `*Mahalle/Bölge:* ${customerNeighborhood}\n` +
        `*Teslimat Adresi:* ${customerAddress.trim()}\n` +
        (customerNote.trim() ? `*Sipariş Notu:* ${customerNote.trim()}\n` : "") +
        `\n🛒 *SEÇİLEN ÇİFTLİK VE SÜTLER:*\n${itemsSummary}\n\n` +
        `_Lütfen güncel fiyatı ve teslimat saatini paylaşır mısınız?_`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Başlık Barı */}
        <div className="bg-[#0b1b16] text-white px-5 py-4 flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-0.5 border border-white/20 shrink-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Alanya Günlük Süt Logo"
                fill
                sizes="40px"
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-snug">{t.orderModal.title}</h3>
              <p className="text-xs text-emerald-200">{t.orderModal.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gövde */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-5 flex-1">
          
          {/* Siparişteki Kalemler */}
          <div>
            <label className="text-xs font-bold text-gray-950 uppercase tracking-wider block mb-2">
              {t.orderModal.selectedFarm}
            </label>
            <div className="space-y-2.5">
              {items.map((item, idx) => {
                const prod = PRODUCTS.find((p) => p.id === item.productId);
                return (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <Store className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{prod?.vendorName}</span>
                        </div>
                        <p className="font-black text-sm text-gray-950 mt-0.5">
                          5 LT Jersey İnek Sütü
                        </p>
                        <p className="text-xs text-gray-500">
                          {prod?.vendorLocation}
                        </p>
                      </div>

                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        Günlük Taze
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-emerald-100">
                      <span className="text-xs text-gray-600 font-semibold">
                        Adet / Miktar
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(idx, -1)}
                          className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-black text-gray-950">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(idx, 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diğer Çiftliği Ekleme Seçeneği */}
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2">
              {t.orderModal.otherFarmOption}
            </p>
            <div className="grid grid-cols-1 gap-2">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => handleSelectProduct(prod)}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-emerald-50/50 text-left font-medium text-gray-950 flex items-center justify-between transition-colors shadow-2xs"
                >
                  <div>
                    <span className="font-extrabold text-xs block">{prod.vendorName}</span>
                    <span className="text-xs text-gray-500">{prod.vendorLocation} • 5 LT Jersey Süt</span>
                  </div>
                  <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    + Ekle
                  </span>
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Müşteri Formu */}
          <form onSubmit={handleSendWhatsapp} id="order-form" className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">
                {t.orderModal.nameLabel}
              </label>
              <input
                type="text"
                placeholder={t.orderModal.namePlaceholder}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">
                {t.orderModal.neighborhoodLabel}
              </label>
              <div className="relative">
                <select
                  value={customerNeighborhood}
                  onChange={(e) => setCustomerNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden appearance-none bg-white transition"
                >
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <MapPin className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">
                {t.orderModal.addressLabel}
              </label>
              <textarea
                rows={2}
                required
                placeholder={t.orderModal.addressPlaceholder}
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                {t.orderModal.noteLabel}
              </label>
              <input
                type="text"
                placeholder={t.orderModal.notePlaceholder}
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:border-emerald-600 outline-hidden"
              />
            </div>
          </form>

        </div>

        {/* Alt Sipariş Onay & Buton */}
        <div className="p-4 bg-emerald-50/50 border-t border-emerald-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-gray-700">Hızlı WhatsApp Doğrulama:</span>
            <span className="text-xs font-black text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full">Ücretsiz Kapıda Teslimat</span>
          </div>

          <button
            type="submit"
            form="order-form"
            className="w-full py-3.5 px-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-gray-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4 text-gray-950" />
            <span>{t.orderModal.sendWhatsappBtn}</span>
          </button>

          <p className="text-[11px] text-center text-gray-500 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.orderModal.paymentNote}</span>
          </p>
        </div>

      </div>
    </div>
  );
}
