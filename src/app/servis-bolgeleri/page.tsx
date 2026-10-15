import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaBanner, DistrictGrid, JsonLd, PageHero, SectionHead } from "@/components/Sections";

export const metadata = buildMetadata({
  title: "Servis Bölgeleri – İstanbul Avrupa Yakası Öztiryakiler Servisi",
  description: "İstanbul Avrupa Yakası'nın 25 ilçesinde Öztiryakiler endüstriyel mutfak ekipmanlarına aynı gün yerinde servis. Hizmet verdiğimiz tüm ilçeler.",
  path: "/servis-bolgeleri",
});

const crumbs = [
  { name: "Anasayfa", path: "/" },
  { name: "Servis Bölgeleri", path: "/servis-bolgeleri" },
];

export default function DistrictsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <PageHero
        title="Servis Bölgelerimiz"
        lead="İstanbul Avrupa Yakası'nın tüm ilçelerinde Öztiryakiler marka endüstriyel mutfak ekipmanlarına yerinde servis veriyoruz."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="container-x">
          <SectionHead title="Avrupa Yakası'nda Hizmet Verdiğimiz 25 İlçe" lead="İlçenizi seçerek o bölgedeki servis hizmetlerimiz ve hizmet verdiğimiz mahalleler hakkında detaylı bilgi alın." />
          <div className="mt-10"><DistrictGrid /></div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
