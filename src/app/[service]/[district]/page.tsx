import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { districts, getDistrict } from "@/data/districts";
import { breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { comboFaqs, comboIntro } from "@/lib/content";
import { locative } from "@/lib/tr";
import { CtaBanner, JsonLd, PageHero, SectionHead, ServiceGrid } from "@/components/Sections";
import ServiceBody from "@/components/ServiceBody";

type Params = { params: Promise<{ service: string; district: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.flatMap((s) => districts.map((d) => ({ service: s.slug, district: d.slug })));
}

export async function generateMetadata({ params }: Params) {
  const { service, district } = await params;
  const s = getService(service);
  const d = getDistrict(district);
  if (!s || !d) return {};
  const title = `${d.name} Öztiryakiler ${s.name} Servisi | Aynı Gün Yerinde Servis`;
  const description = `${locative(d.name)} Öztiryakiler ${s.name.toLocaleLowerCase("tr-TR")} arızalarına aynı gün yerinde servis. ${d.areas.slice(0, 3).join(", ")} ve tüm ${d.name} mahalleleri. Garantili işçilik, şeffaf fiyat.`;
  return buildMetadata({
    title,
    description,
    path: `/${s.slug}/${d.slug}`,
    absoluteTitle: true,
    keywords: [`${d.name.toLocaleLowerCase("tr-TR")} öztiryakiler ${s.name.toLocaleLowerCase("tr-TR")} servisi`, `${d.name.toLocaleLowerCase("tr-TR")} ${s.name.toLocaleLowerCase("tr-TR")} tamiri`, ...s.keywords.slice(0, 2)],
  });
}

export default async function ComboPage({ params }: Params) {
  const { service, district } = await params;
  const s = getService(service);
  const d = getDistrict(district);
  if (!s || !d) notFound();

  const path = `/${s.slug}/${d.slug}`;
  const crumbs = [
    { name: "Anasayfa", path: "/" },
    { name: s.title, path: `/${s.slug}` },
    { name: `${d.name} ${s.name} Servisi`, path },
  ];
  const faqs = comboFaqs(d, s);

  return (
    <>
      <JsonLd data={[serviceLd(s, path, d), breadcrumbLd(crumbs), faqLd(faqs)]} />
      <PageHero
        title={`${d.name} Öztiryakiler ${s.name} Servisi`}
        lead={`${locative(d.name)} Öztiryakiler ${s.name.toLocaleLowerCase("tr-TR")} arızalarına aynı gün yerinde servis. ${d.areas.slice(0, 4).join(", ")} ve ilçenin tüm mahallelerine hizmet veriyoruz.`}
        crumbs={crumbs}
      />
      <ServiceBody service={s} district={d} intro={comboIntro(d, s)} faqs={faqs} />

      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead
            eyebrow={`${d.name} servis hizmetleri`}
            title={`${locative(d.name)} Diğer Öztiryakiler Servis Hizmetlerimiz`}
          />
          <div className="mt-10"><ServiceGrid districtSlug={d.slug} districtName={d.name} exclude={s.slug} /></div>
        </div>
      </section>

      <CtaBanner title={`${d.name} Öztiryakiler ${s.name} Servisi`} text={`${locative(d.name)} arızalı cihazınız için hemen arayın, ekibimizi yönlendirelim.`} />
    </>
  );
}
