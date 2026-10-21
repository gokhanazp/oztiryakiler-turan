import Link from "next/link";
import { site, disclaimer, whatsappLink } from "@/config/site";
import { services, type Faq } from "@/data/services";
import { districts, districtPath } from "@/data/districts";
import {
  ArrowIcon, BoxIcon, CheckIcon, ClockIcon, InfoIcon, PhoneIcon, ServiceIcon, ShieldIcon, TruckIcon, WhatsappIcon, WrenchIcon,
} from "./Icons";

/* ---------- JSON-LD ---------- */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="text-sm text-navy-200">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden className="text-navy-400">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-white">{it.name}</span>
            ) : (
              <Link href={it.path} className="hover:text-white">{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Page hero ---------- */
export function PageHero({
  title, lead, crumbs, badges = true,
}: { title: string; lead: string; crumbs: { name: string; path: string }[]; badges?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 text-white">
      <HeroBackdrop />
      <div className="container-x relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight !text-white sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-navy-100">{lead}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`tel:${site.phoneHref}`} className="btn-primary text-base"><PhoneIcon /> {site.phone}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp text-base"><WhatsappIcon /> WhatsApp&apos;tan Yazın</a>
        </div>
        {badges && <TrustBadges />}
      </div>
    </section>
  );
}

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-navy-400/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "44px 44px" }}
      />
    </div>
  );
}

export function TrustBadges() {
  const items = [
    { icon: <ClockIcon className="h-5 w-5" />, t: "Aynı gün servis" },
    { icon: <ShieldIcon className="h-5 w-5" />, t: "Garantili işçilik" },
    { icon: <BoxIcon className="h-5 w-5" />, t: "Stoklu yedek parça" },
    { icon: <TruckIcon className="h-5 w-5" />, t: "Yerinde onarım" },
  ];
  return (
    <ul className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((i) => (
        <li key={i.t} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium">
          <span className="text-brand-400">{i.icon}</span>{i.t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow?: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-slate-600">{lead}</p>}
    </div>
  );
}

/* ---------- Service grid ---------- */
export function ServiceGrid({ districtSlug, exclude, districtName }: { districtSlug?: string; exclude?: string; districtName?: string }) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${list.length % 3 === 0 ? "lg:grid-cols-3" : "xl:grid-cols-5"}`}>
      {list.map((s) => {
        const href = districtSlug ? `/${s.slug}/${districtSlug}` : `/${s.slug}`;
        return (
          <li key={s.slug}>
            <Link href={href} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-brand-500 group-hover:text-white">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{districtName ? `${districtName} ${s.title}` : s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Detaylı bilgi <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- District grid ---------- */
export function DistrictGrid({ serviceSlug, label = "Öztiryakiler Servisi", only }: { serviceSlug?: string; label?: string; only?: string[] }) {
  const list = only ? districts.filter((d) => only.includes(d.slug)) : districts;
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
      {list.map((d) => (
        <li key={d.slug}>
          <Link
            href={serviceSlug ? `/${serviceSlug}/${d.slug}` : districtPath(d)}
            className="flex h-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-navy-900 transition hover:border-brand-500 hover:text-brand-600"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z" /></svg>
            <span>{d.name} <span className="sr-only sm:not-sr-only sm:text-slate-500">{label}</span></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Process ---------- */
export function Process() {
  const steps = [
    { t: "Bizi arayın", d: "Telefon veya WhatsApp ile cihazınızı ve arızayı kısaca anlatın, adres bilgisini iletin." },
    { t: "Yerinde tespit", d: "Teknisyenimiz işletmenize gelir, ölçüm cihazlarıyla arızanın kaynağını kesin olarak belirler." },
    { t: "Şeffaf fiyat", d: "Yapılacak işlem ve ücret onayınıza sunulur. Onay vermeden hiçbir işlem yapılmaz." },
    { t: "Onarım ve test", d: "Onarım yapılır, cihaz çalışır durumda test edilerek garantili olarak teslim edilir." },
  ];
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.t} className="relative rounded-2xl border border-slate-200 bg-white p-6">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-lg font-extrabold text-white">{i + 1}</span>
          <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Why us ---------- */
export function WhyUs({ compact = false }: { compact?: boolean }) {
  const items = [
    { icon: <WrenchIcon className="h-6 w-6" />, t: "Endüstriyel mutfak uzmanlığı", d: "Yalnızca ticari mutfak ekipmanlarıyla çalışıyoruz; gazlı, elektrikli ve soğutma sistemlerinde deneyimliyiz." },
    { icon: <ClockIcon className="h-6 w-6" />, t: "Hızlı müdahale", d: "Avrupa Yakası'na yayılmış mobil ekiplerle çoğu arızaya aynı gün yerinde müdahale ediyoruz." },
    { icon: <BoxIcon className="h-6 w-6" />, t: "Yedek parça desteği", d: "Sık kullanılan termostat, rezistans, termokupl, valf ve pompalar servis araçlarımızda hazır bulunur." },
    { icon: <ShieldIcon className="h-6 w-6" />, t: "Garantili hizmet", d: site.warrantyText + " İşlem sonrası fatura düzenlenir." },
    { icon: <CheckIcon className="h-6 w-6" />, t: "Şeffaf fiyatlandırma", d: "Arıza tespitinden sonra fiyat bildirilir; sürpriz ücret ve onaysız işlem yoktur." },
    { icon: <TruckIcon className="h-6 w-6" />, t: "Periyodik bakım anlaşmaları", d: "Restoran, otel ve yemekhaneler için planlı bakım ile arızaları oluşmadan önlüyoruz." },
  ];
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${compact ? "" : "lg:grid-cols-3"}`}>
      {items.map((i) => (
        <li key={i.t} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-600 text-white">{i.icon}</span>
          <div>
            <h3 className="font-bold">{i.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{i.d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- FAQ ---------- */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((f, i) => (
        <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy-900">
            <h3 className="text-base sm:text-lg">{f.q}</h3>
            <span className="faq-icon mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 transition">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- CTA ---------- */
export function CtaBanner({ title = "Cihazınız mı arızalandı? Hemen arayın.", text = "İstanbul Avrupa Yakası'nın tüm ilçelerinde Öztiryakiler endüstriyel mutfak ekipmanlarına yerinde servis." }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-14">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-600 to-navy-900 p-8 text-white sm:p-12">
        <HeroBackdrop />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold !text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-2xl text-navy-100">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-primary text-base"><PhoneIcon /> {site.phone}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp text-base"><WhatsappIcon /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Disclaimer ---------- */
export function DisclaimerBox() {
  return (
    <aside className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
      <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
      <p><strong>Bilgilendirme:</strong> {disclaimer}</p>
    </aside>
  );
}

/* ---------- Check list ---------- */
export function CheckList({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-slate-700">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon className="h-3.5 w-3.5" /></span>
          {i}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Sticky side contact card ---------- */
export function ContactCard({ heading }: { heading: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 p-6 text-white shadow-xl">
      <p className="text-lg font-bold">{heading}</p>
      <p className="mt-1 text-sm text-navy-200">{site.hours.label}</p>
      <a href={`tel:${site.phoneHref}`} className="btn-primary mt-5 w-full text-base"><PhoneIcon /> {site.phone}</a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp mt-3 w-full text-base"><WhatsappIcon /> WhatsApp&apos;tan Yazın</a>
      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-navy-100">
        <li className="flex gap-2"><CheckIcon className="h-4 w-4 text-brand-400" /> Aynı gün yerinde servis</li>
        <li className="flex gap-2"><CheckIcon className="h-4 w-4 text-brand-400" /> Fiyat onayınız olmadan işlem yok</li>
        <li className="flex gap-2"><CheckIcon className="h-4 w-4 text-brand-400" /> Garantili işçilik ve parça</li>
        <li className="flex gap-2"><CheckIcon className="h-4 w-4 text-brand-400" /> Faturalı hizmet</li>
      </ul>
    </div>
  );
}
