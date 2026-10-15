import Link from "next/link";
import { site, disclaimerShort, whatsappLink } from "@/config/site";
import { services } from "@/data/services";
import { ClockIcon, PhoneIcon, ServiceIcon, ShieldIcon, WhatsappIcon, ArrowIcon } from "./Icons";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { NavLink, HeaderShell } from "./HeaderClient";

export const navItems = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/servis-bolgeleri", label: "Servis Bölgeleri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sikca-sorulan-sorular", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  return (
    <HeaderShell>
      {/* Üst bilgi çubuğu */}
      <div className="bg-navy-950 text-[13px] text-navy-100">
        <div className="container-x flex h-9 items-center justify-between gap-4">
          <p className="flex min-w-0 items-center gap-2">
            <ShieldIcon className="h-4 w-4 shrink-0 text-navy-300" />
            <span className="truncate">{disclaimerShort}</span>
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <p className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4 text-navy-300" />
              {site.hours.label}
            </p>
            <span className="h-4 w-px bg-white/15" aria-hidden />
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-1.5 font-semibold text-white hover:text-navy-200">
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Ana bar */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[76px]">
          <Logo />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 text-[15px] font-semibold">
              <li className="group relative">
                <NavLink href="/hizmetler" match="/oztiryakiler-">
                  Hizmetler
                  <svg className="h-4 w-4 opacity-60 transition group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06z" />
                  </svg>
                </NavLink>

                {/* Mega menü */}
                <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-12px_rgba(10,47,96,0.25)]">
                    <ul className="grid grid-cols-3 gap-1 p-3">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} className="group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-50">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600 ring-1 ring-navy-100 transition group-hover/item:bg-navy-600 group-hover/item:text-white group-hover/item:ring-navy-600">
                              <ServiceIcon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-navy-900">{s.name} Servisi</span>
                              <span className="mt-0.5 line-clamp-2 text-xs font-normal leading-snug text-slate-500">{s.short}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-navy-600 to-navy-800 px-5 py-4 text-white">
                      <p className="text-sm">
                        <span className="font-semibold">Arızanız mı var?</span>
                        <span className="text-navy-100"> Aynı gün yerinde servis için hemen arayın.</span>
                      </p>
                      <a href={`tel:${site.phoneHref}`} className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-bold text-navy-700 transition hover:bg-navy-50">
                        <PhoneIcon className="h-4 w-4" /> {site.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {navItems.slice(1).map((n) => (
                <li key={n.href}>
                  <NavLink href={n.href}>{n.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp ile yazın"
              title="WhatsApp ile yazın"
              className="hidden h-12 w-12 place-items-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#1faa53] transition hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 sm:grid"
            >
              <WhatsappIcon className="h-6 w-6" />
            </a>

            <a
              href={`tel:${site.phoneHref}`}
              className="group/cta hidden items-center gap-3 whitespace-nowrap rounded-xl bg-gradient-to-br from-navy-500 via-navy-600 to-navy-800 py-2 pl-2 pr-5 text-white lg:pr-2 xl:pr-5 shadow-lg shadow-navy-600/30 ring-1 ring-inset ring-white/15 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-600/40 sm:flex"
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-white/15">
                <span className="absolute inset-0 animate-ping rounded-lg bg-white/20 [animation-duration:2.2s]" aria-hidden />
                <PhoneIcon className="relative h-[18px] w-[18px]" />
              </span>
              <span className="leading-tight lg:hidden xl:inline">
                <span className="block text-[11px] font-medium uppercase tracking-wider text-navy-100">7/24 Servis Hattı</span>
                <span className="block text-[15px] font-bold tracking-tight">{site.phone}</span>
              </span>
              <ArrowIcon className="hidden h-4 w-4 opacity-70 transition group-hover/cta:translate-x-0.5 xl:block" />
            </a>

            <MobileMenu items={navItems} services={services.map((s) => ({ slug: s.slug, title: s.title }))} />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
