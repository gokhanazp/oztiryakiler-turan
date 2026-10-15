import { site, whatsappLink } from "@/config/site";
import { PhoneIcon, WhatsappIcon } from "./Icons";

/** Mobilde sabit alt arama çubuğu – dönüşüm için kritik */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <a href={`tel:${site.phoneHref}`} className="btn-primary py-3.5 text-base" aria-label="Servisi telefonla ara">
        <PhoneIcon /> Hemen Ara
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp py-3.5 text-base" aria-label="WhatsApp ile yaz">
        <WhatsappIcon /> WhatsApp
      </a>
    </div>
  );
}
