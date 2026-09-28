"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, Store } from "lucide-react";
import { PRODUCTS, CONTACT_INFO, Product } from "@/data/products";

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
      alert("Lütfen teslimat adresinizi giriniz.");
      return;
    }

    const itemsSummary = items
      .map((item) => {
        const prod = PRODUCTS.find((p) => p.id === item.productId);
        return `• ${item.quantity} Adet 5 LT Jersey Süt\n   ↳ Çiftlik: ${prod?.vendorName}\n   ↳ Tutar: ${item.price * item.quantity} TL`;
      })
      .join("\n\n");

    const message = `🥛 *ALANYA GÜNLÜK SÜT SİPARİŞİ* 🥛\n\n` +
      `*Müşteri Adı:* ${customerName.trim() || "Belirtilmedi"}\n` +
      `*Mahalle/Bölge:* ${customerNeighborhood}\n` +
      `*Teslimat Adresi:* ${customerAddress.trim()}\n` +
      (customerNote.trim() ? `*Sipariş Notu:* ${customerNote.trim()}\n` : "") +
      `\n🛒 *SEÇİLEN ÇİFTLİK VE SÜTLER:*\n${itemsSummary}\n\n` +
      `💰 *GENEL TOPLAM:* ${totalPrice} TL\n` +
      `📦 *Ödeme Türü:* Kapıda Nakit / IBAN Havale\n\n` +
      `_Lütfen siparişimi onaylayıp teslimat saatini paylaşır mısınız?_`;

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
        <div className="bg-emerald-900 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-snug">Çiftlik Süt Sipariş Formu</h3>
              <p className="text-xs text-emerald-200">Alanya Geneline Ücretsiz Kapıda Teslimat</p>
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
        <div className="overflow-y-auto p-5 space-y-5 flex-1">
          
          {/* Siparişteki Kalemler */}
          <div>
            <label className="text-xs font-bold text-gray-950 uppercase tracking-wider block mb-2">
              Seçtiğiniz Çiftlik & Süt
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

                      <span className="text-base font-black text-emerald-900 whitespace-nowrap">
                        {item.price * item.quantity} TL
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-emerald-100">
                      <span className="text-xs text-gray-600 font-semibold">
                        Birim Fiyat: {item.price} TL
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
              Diğer Çiftliğin Sütünü de Ekleyebilirsiniz:
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
                    {prod.options[0].price} TL +
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
                Adınız Soyadınız
              </label>
              <input
                type="text"
                placeholder="Örn: Mehmet Yıldırım"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">
                Alanya Mahalleniz / Bölgeniz *
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
                Teslimat Adresi (Sokak, Bina No, Kat / Daire) *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Örn: Saray Mah. Atatürk Cad. Çiçek Apt. No:15 Kat:2"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-hidden transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Sipariş Notu (Opsiyonel)
              </label>
              <input
                type="text"
                placeholder="Örn: Kapıya bırakabilirsiniz / Öğleden önce teslim edilsin"
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:border-emerald-600 outline-hidden"
              />
            </div>
          </form>

        </div>

        {/* Alt Toplam & Buton */}
        <div className="p-4 bg-emerald-50/50 border-t border-emerald-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium text-gray-600">Toplam Sipariş Tutarı:</span>
            <span className="text-2xl font-black text-emerald-950">{totalPrice} TL</span>
          </div>

          <button
            type="submit"
            form="order-form"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Siparişi WhatsApp ile Gönder</span>
          </button>

          <p className="text-[11px] text-center text-gray-500 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kapıda nakit veya teslimatta IBAN ile ödeyebilirsiniz.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
