import type { IconKey } from "@/data/services";

type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const paths: Record<IconKey, React.ReactNode> = {
  ocak: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="8.5" cy="13.5" r="2.5" />
      <circle cx="15.5" cy="13.5" r="2.5" />
      <path d="M8 3.5c.8.8.8 1.7 0 2.5M12 3c.8.8.8 1.9 0 2.8M16 3.5c.8.8.8 1.7 0 2.5" />
    </>
  ),
  buzdolabi: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <path d="M5 10h14M8.5 5.5v2M8.5 13v3" />
    </>
  ),
  fritoz: (
    <>
      <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M7 10V7h10v3M2 7h5M9 14h6M9 17h6" />
    </>
  ),
  benmari: (
    <>
      <path d="M2 11h20M3 11l1.5 8h15L21 11" />
      <path d="M6 11V8h5v3M13 11V8h5v3M7 5c.6.6.6 1.4 0 2M15 5c.6.6.6 1.4 0 2" />
    </>
  ),
  firin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 8h18" />
      <rect x="6" y="11" width="12" height="7" rx="1" />
      <circle cx="7" cy="5.5" r=".6" fill="currentColor" />
      <circle cx="10" cy="5.5" r=".6" fill="currentColor" />
    </>
  ),
  pizza: (
    <>
      <path d="M12 3 3 20h18z" />
      <path d="M5.5 15.5c4-1.5 9-1.5 13 0" />
      <circle cx="11" cy="11" r="1" />
      <circle cx="13.5" cy="16.5" r="1" />
      <circle cx="9" cy="17" r=".8" />
    </>
  ),
  makarna: (
    <>
      <path d="M4 9h16v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
      <path d="M2 9h20M9 5c.7.7.7 1.6 0 2.3M12 4c.7.7.7 1.9 0 2.6M15 5c.7.7.7 1.6 0 2.3M8 13h8M8 16h8" />
    </>
  ),
  izgara: (
    <>
      <rect x="3" y="9" width="18" height="9" rx="1.5" />
      <path d="M6 9v9M10 9v9M14 9v9M18 9v9M7 21h10" />
      <path d="M8 3c.8.8.8 2 0 3M12 2.5c.8.8.8 2.2 0 3.5M16 3c.8.8.8 2 0 3" />
    </>
  ),
  bulasik: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <path d="M4 7h16" />
      <circle cx="12" cy="14" r="4.5" />
      <path d="M10 13.5c1-1 3-1 4 0" />
      <circle cx="7" cy="4.8" r=".6" fill="currentColor" />
    </>
  ),
};

export function ServiceIcon({ name, className = "h-7 w-7" }: { name: IconKey } & P) {
  return <svg {...base} className={className}>{paths[name]}</svg>;
}

export const PhoneIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const WhatsappIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.8 13.8 0 0 0 5.3 4.7c2 .8 2.7.9 3.7.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" />
  </svg>
);

export const CheckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M20 6 9 17l-5-5" /></svg>
);
export const ClockIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const ShieldIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const WrenchIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13a6 6 0 0 1-7.6 1.6L6 22a2.1 2.1 0 0 1-3-3l7.4-7.4A6 6 0 0 1 12 4l1.7 1.3z" /></svg>
);
export const PinIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const TruckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M1 4h14v12H1zM15 9h4l3 3v4h-7" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>
);
export const BoxIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="m3 8 9 5 9-5M12 13v8" /></svg>
);
export const InfoIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);
export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>
);
