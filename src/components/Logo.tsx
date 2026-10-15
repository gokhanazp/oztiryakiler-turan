import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect width="200" height="200" rx="16" fill="#105bbc" />
      <rect x="62" y="18" width="76" height="14" fill="#fff" />
      <circle cx="100" cy="114" r="70" fill="#fff" />
      <circle cx="100" cy="114" r="17" fill="#105bbc" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap" aria-label="Öztiryakiler Servisi anasayfa">
      <LogoMark className={`h-10 w-10 shrink-0 ${light ? "ring-1 ring-white/20 rounded" : ""}`} />
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          Öztiryakiler <span className={light ? "text-navy-300" : "text-navy-600"}>Servisi</span>
        </span>
        <span className={`block text-[11px] font-medium uppercase tracking-[0.14em] ${light ? "text-navy-200" : "text-slate-500"}`}>
          Özel Teknik Servis
        </span>
      </span>
    </Link>
  );
}
