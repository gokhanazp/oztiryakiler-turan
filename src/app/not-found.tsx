import Link from "next/link";
import { site } from "@/config/site";

export const metadata = { title: "Sayfa bulunamadı", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-4 text-slate-600">Servis talebiniz için bizi doğrudan arayabilirsiniz.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={`tel:${site.phoneHref}`} className="btn-primary">{site.phone}</a>
        <Link href="/" className="btn-outline">Anasayfaya dön</Link>
      </div>
    </section>
  );
}
