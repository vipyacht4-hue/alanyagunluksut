import Image from "next/image";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen min-h-[100svh] items-center justify-center bg-[#f5f8f3] px-5 py-12">
      <section
        aria-labelledby="maintenance-title"
        className="w-full max-w-xl rounded-[32px] border border-emerald-900/10 bg-white px-6 py-12 text-center shadow-[0_20px_80px_rgba(20,60,40,0.06)] sm:px-12 sm:py-16"
      >
        <Image
          src="/logo.png"
          alt="Alanya Günlük Süt"
          width={128}
          height={128}
          priority
          className="mx-auto mb-10 h-28 w-28 object-contain"
        />
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
          <Wrench aria-hidden="true" size={26} strokeWidth={1.5} />
        </div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Alanya Günlük Süt
        </p>
        <h1
          id="maintenance-title"
          className="text-3xl font-bold tracking-tight text-[#163c2d] sm:text-4xl"
        >
          Kısa bir bakım arasındayız.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          Sizlere daha iyi hizmet verebilmek için sitemizi güncelliyoruz.
          Çok yakında yeniden buradayız.
        </p>
        <p className="mt-8 text-sm text-slate-500">
          Anlayışınız için teşekkür ederiz.
        </p>
      </section>
    </main>
  );
}
