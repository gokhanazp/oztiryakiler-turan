import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { CtaBanner, DistrictGrid, JsonLd, PageHero, SectionHead, ServiceGrid } from "@/components/Sections";
import ServiceBody from "@/components/ServiceBody";
import type { Faq } from "@/data/services";

type Params = { params: Promise<{ service: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}`, keywords: s.keywords, absoluteTitle: true });
}

export default async function ServicePage({ params }: Params) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();

  const path = `/${s.slug}`;
  const crumbs = [
    { name: "Anasayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: s.title, path },
  ];
  const faqs: Faq[] = [
    ...s.faqs,
    {
      q: `Öztiryakiler ${s.name.toLocaleLowerCase("tr-TR")} yetkili servisi misiniz?`,
      a: "Hayır, Öztiryakiler'in yetkili servisi değiliz. Öztiryakiler marka cihazlara bakım ve onarım hizmeti veren bağımsız özel bir teknik servisiz; işçilik ve parçalarımız firmamızın garantisi altındadır.",
    },
  ];

  return (
    <>
      <JsonLd data={[serviceLd(s, path), breadcrumbLd(crumbs), faqLd(faqs)]} />
      <PageHero
        title={`${s.title} – İstanbul Avrupa Yakası`}
        lead={`${s.short} Restoran, otel ve yemekhanelere aynı gün yerinde servis.`}
        crumbs={crumbs}
      />
      <ServiceBody service={s} intro={s.intro} faqs={faqs} />

      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead
            eyebrow="Servis bölgeleri"
            title={`İlçelere Göre ${s.title}`}
            lead={`İstanbul Avrupa Yakası'ndaki tüm ilçelere Öztiryakiler ${s.name.toLocaleLowerCase("tr-TR")} servisi veriyoruz. İlçenizi seçin.`}
          />
          <div className="mt-10"><DistrictGrid serviceSlug={s.slug} label={`${s.name} Servisi`} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Diğer hizmetler" title="Diğer Öztiryakiler Servis Hizmetlerimiz" />
          <div className="mt-10"><ServiceGrid exclude={s.slug} /></div>
        </div>
      </section>

      <CtaBanner title={`${s.title} için hemen arayın`} />
    </>
  );
}
