"use client";
import { useState } from "react";
import { whatsappLink } from "@/config/site";
import { services } from "@/data/services";
import { districts } from "@/data/districts";
import { track } from "./Analytics";

/** Sunucu gerektirmeyen servis talep formu: bilgileri WhatsApp mesajı olarak iletir. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Merhaba, servis talebim var.",
      `Ad Soyad: ${f.get("name")}`,
      `Telefon: ${f.get("phone")}`,
      `İlçe: ${f.get("district")}`,
      `Cihaz: ${f.get("device")}`,
      `Arıza: ${f.get("note") || "-"}`,
    ].join("\n");
    track("generate_lead", { method: "whatsapp_form", device: String(f.get("device")), district: String(f.get("district")) });
    window.open(whatsappLink(msg), "_blank", "noopener");
    setSent(true);
  }

  const input = "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-medium text-navy-900">Ad Soyad / İşletme
        <input name="name" required autoComplete="name" className={input} />
      </label>
      <label className="text-sm font-medium text-navy-900">Telefon
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={input} />
      </label>
      <label className="text-sm font-medium text-navy-900">İlçe
        <select name="district" required className={input} defaultValue="">
          <option value="" disabled>Seçiniz</option>
          {districts.map((d) => <option key={d.slug}>{d.name}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-navy-900">Cihaz
        <select name="device" required className={input} defaultValue="">
          <option value="" disabled>Seçiniz</option>
          {services.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>Diğer</option>
        </select>
      </label>
      <label className="text-sm font-medium text-navy-900 sm:col-span-2">Arıza açıklaması
        <textarea name="note" rows={4} className={input} placeholder="Örn: Fritöz ısıtmıyor, emniyet termostatı atıyor." />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-whatsapp w-full py-4 text-base sm:w-auto">WhatsApp ile Servis Talebi Gönder</button>
        <p className="mt-3 text-xs text-slate-500">
          Formu gönderdiğinizde bilgileriniz WhatsApp üzerinden firmamıza iletilir. Kişisel verileriniz yalnızca servis talebinizin karşılanması amacıyla kullanılır.
        </p>
        {sent && <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">WhatsApp açıldı. Mesajı gönderdiğinizde talebiniz bize ulaşacaktır.</p>}
      </div>
    </form>
  );
}
