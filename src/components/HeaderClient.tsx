"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Kaydırınca gölge kazanan sticky header kabuğu */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(10,47,96,0.25)]" : ""}`}>
      {children}
    </header>
  );
}

/** Aktif sayfayı vurgulayan menü linki */
export function NavLink({ href, match, children }: { href: string; match?: string; children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const active = pathname === href || pathname.startsWith(href + "/") || (match ? pathname.startsWith(match) : false);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 xl:px-3.5 transition ${
        active ? "text-navy-600" : "text-navy-900 hover:bg-navy-50 hover:text-navy-600"
      }`}
    >
      {children}
      <span
        aria-hidden
        className={`absolute inset-x-2.5 xl:inset-x-3.5 -bottom-[18px] h-[3px] rounded-full bg-navy-600 transition ${active ? "opacity-100" : "opacity-0"}`}
      />
    </Link>
  );
}
