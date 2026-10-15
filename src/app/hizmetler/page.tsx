import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaBanner, DisclaimerBox, JsonLd, PageHero, Process, SectionHead, ServiceGrid } from "@/components/Sections";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz – Öztiryakiler Endüstriyel Mutfak Servisi",
  description: "Öztiryakiler ocak, buzdolabı, fritöz, benmari, fırın, pizza fırını, makarna haşlama, ızgara ve bulaşık makinesi servisi. İstanbul Avrupa Yakası'nda yerinde onarım.",
  path: "/hizmetler",
});

const crumbs = [
  { name: "Anasayfa", path: "/" },
  { name: "Hizmetler", path: "/hizmetler" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <PageHero
        title="Öztiryakiler Servis Hizmetlerimiz"
        lead="Ticari mutfağınızdaki tüm Öztiryakiler ekipmanları için bakım, onarım ve yedek parça hizmeti."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="container-x">
          <ServiceGrid />
          <div className="mt-10"><DisclaimerBox /></div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead center title="Servis süreci" />
          <div className="mt-10"><Process /></div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
