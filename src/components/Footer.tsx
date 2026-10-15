import Link from "next/link";
import { site, disclaimer } from "@/config/site";
import { services } from "@/data/services";
import { districts, districtPath } from "@/data/districts";
import Logo from "./Logo";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 pb-24 text-navy-100 lg:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            İstanbul Avrupa Yakası&apos;nda Öztiryakiler marka endüstriyel mutfak ekipmanları için yerinde bakım, onarım ve yedek parça hizmeti.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex gap-2"><PhoneIcon className="h-4 w-4 shrink-0 text-brand-400" /><a href={`tel:${site.phoneHref}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-2"><MailIcon className="h-4 w-4 shrink-0 text-brand-400" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex gap-2"><PinIcon className="h-4 w-4 shrink-0 text-brand-400" /><span>{site.serviceArea} – yerinde servis</span></li>
            <li className="flex gap-2"><ClockIcon className="h-4 w-4 shrink-0 text-brand-400" /><span>{site.hours.label}</span></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Hizmetlerimiz</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}`} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-4 font-semibold text-white">Servis Bölgeleri</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
            {districts.map((d) => (
              <li key={d.slug}><Link href={districtPath(d)} className="hover:text-white">{d.name} Öztiryakiler Servisi</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6">
          <p className="rounded-lg bg-white/5 p-4 text-xs leading-relaxed text-navy-200">
            <strong className="text-white">Yasal Bilgilendirme: </strong>{disclaimer}{" "}
            <Link href="/yasal-uyari" className="underline hover:text-white">Detaylı bilgi</Link>
          </p>
          <div className="mt-5 flex flex-col items-start justify-between gap-3 text-xs text-navy-300 sm:flex-row sm:items-center">
            <p>© {year} {site.legalName}. Tüm hakları saklıdır.</p>
            <ul className="flex flex-wrap gap-4">
              <li><Link href="/yasal-uyari" className="hover:text-white">Yasal Uyarı</Link></li>
              <li><Link href="/kvkk" className="hover:text-white">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
