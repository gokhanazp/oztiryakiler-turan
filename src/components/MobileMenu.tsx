"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { IconKey } from "@/data/services";
import { ServiceIcon } from "./Icons";

type Props = {
  items: { href: string; label: string }[];
  services: { slug: string; title: string; icon: IconKey }[];
};

/**
 * Mobil menü. Panel, header'daki backdrop-blur'un "fixed" konumlandırmayı bozmaması için
 * document.body'ye portal ile render edilir.
 */
export default function MobileMenu({ items, services }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const panel = (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 bottom-0 top-[100px] z-[45] lg:hidden ${open ? "visible" : "invisible"}`}
      aria-hidden={!open}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-navy-950/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <nav
        aria-label="Mobil menü"
        className={`absolute inset-x-0 top-0 max-h-full overflow-y-auto overscroll-contain bg-white px-4 pb-28 pt-3 shadow-xl transition duration-200 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <p className="px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-widest text-slate-500">Hizmetler</p>
        <ul className="grid grid-cols-1 gap-1 min-[420px]:grid-cols-2">
          {services.map((s) => {
            const active = pathname === `/${s.slug}` || pathname?.startsWith(`/${s.slug}/`);
            return (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className={`flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-[15px] font-medium ${
                    active ? "bg-navy-50 text-navy-600" : "text-navy-900 active:bg-navy-50"
                  }`}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600 ring-1 ring-navy-100">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  {s.title.replace("Öztiryakiler ", "")}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="mt-3 grid gap-1 border-t border-slate-200 pt-3">
          {[{ href: "/", label: "Anasayfa" }, ...items].map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname?.startsWith(n.href);
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`block rounded-xl px-3 py-3 text-base font-semibold ${active ? "bg-navy-50 text-navy-600" : "text-navy-900 active:bg-navy-50"}`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

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
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
