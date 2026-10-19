"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const KEY = "cerez-onayi"; // "kabul" | "red"

/** GA4'e olay gönderir (yalnızca çerez onayı verilmişse çalışır). */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", event, params);
}

/**
 * KVKK uyumlu çerez onayı + Google Analytics 4.
 * - GA, kullanıcı "Kabul et" demeden yüklenmez.
 * - Dönüşüm olayları: phone_click, whatsapp_click, generate_lead (form).
 */
export default function Analytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<string | null>("pending");

  useEffect(() => {
    let v: string | null = null;
    try { v = localStorage.getItem(KEY); } catch {}
    setConsent(v);
  }, []);

  // Telefon ve WhatsApp tıklamalarını tek yerden yakala
  useEffect(() => {
    if (consent !== "kabul") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;
      if (href.startsWith("tel:")) track("phone_click", { page, link_url: href });
      else if (href.includes("wa.me/")) track("whatsapp_click", { page });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [consent]);

  const decide = (v: "kabul" | "red") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setConsent(v);
  };

  return (
    <>
      {consent === "kabul" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Çerez tercihi"
          className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:bottom-6 sm:p-5 lg:left-6 lg:right-auto"
        >
          <p className="text-sm leading-relaxed text-slate-700">
            Sitemizi geliştirmek için ziyaret istatistiği çerezleri (Google Analytics) kullanmak istiyoruz. Onay vermezseniz bu çerezler
            kullanılmaz. <Link href="/kvkk" className="font-medium text-navy-600 underline">KVKK Aydınlatma Metni</Link>
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => decide("kabul")} className="btn bg-navy-600 px-4 py-2 text-white hover:bg-navy-700">Kabul et</button>
            <button onClick={() => decide("red")} className="btn border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Reddet</button>
          </div>
        </div>
      )}
    </>
  );
}
