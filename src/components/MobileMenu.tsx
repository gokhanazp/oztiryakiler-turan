"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  items: { href: string; label: string }[];
  services: { slug: string; title: string }[];
};

export default function MobileMenu({ items, services }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-navy-900 transition hover:border-navy-200 hover:bg-navy-50"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[100px] z-40 overflow-y-auto bg-white px-4 pb-28 pt-4">
          <nav aria-label="Mobil menü">
            <p className="px-2 pb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Hizmetler</p>
            <ul className="mb-4 grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="block rounded-lg px-3 py-2.5 font-medium text-navy-900 hover:bg-navy-50">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="grid gap-1 border-t border-slate-200 pt-4">
              <li><Link href="/" className="block rounded-lg px-3 py-2.5 font-medium text-navy-900 hover:bg-navy-50">Anasayfa</Link></li>
              {items.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block rounded-lg px-3 py-2.5 font-medium text-navy-900 hover:bg-navy-50">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
