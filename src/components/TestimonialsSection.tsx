import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Elif K.",
      location: "Oba Mahallesi",
      stars: 5,
      comment: "İki küçük çocuğum için haftada 10 litre alıyorum. Kaynattığımızda oluşan kaymağın kalınlığına inanamadık, yoğurdumuz taş gibi tutuyor. Getiren arkadaş da çok nazik ve dakik.",
      date: "3 gün önce"
    },
    {
      name: "Mustafa B.",
      location: "Alanya Merkez / Saray",
      stars: 5,
      comment: "Market sütü almayı tamamen bıraktık. WhatsApp'tan yazıyorum, ertesi sabah kapımda soğuk soğuk teslim ediliyor. Manda sütü ile inek sütünü karıştırıp yoğurt yapmanızı kesinlikle tavsiye ederim.",
      date: "1 hafta önce"
    },
    {
      name: "Ayşe T.",
      location: "Mahmutlar",
      stars: 5,
      comment: "Mahmutlar'a kadar soğuk zincirle servis yapmaları bizim için büyük lüks. Köy yumurtaları da sapsarı ve kokusuz. Emeğinize sağlık Alanya Günlük Süt!",
      date: "2 hafta önce"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-farm-600 uppercase tracking-wider block mb-2">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-farm-950">
            Alanyalı Aileler Ne Diyor?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Yüzlerce memnun komşumuz sofralarına her gün taze çiftlik sütü koyuyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-farm-50/50 border border-farm-100 relative flex flex-col justify-between"
            >
              <div>
                {/* Yıldızlar */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-farm-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-farm-950">{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-farm-600" />
                  </div>
                  <span className="text-xs text-farm-700 font-medium">{item.location}</span>
                </div>
                <span className="text-[11px] text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
