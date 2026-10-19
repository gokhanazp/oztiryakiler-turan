import { site } from "@/config/site";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaBanner, DisclaimerBox, JsonLd, PageHero, SectionHead, WhyUs } from "@/components/Sections";

export const metadata = buildMetadata({
  title: "Hakkımızda – Özel Teknik Servis",
  description: "İstanbul Avrupa Yakası'nda Öztiryakiler marka endüstriyel mutfak ekipmanlarına bakım ve onarım hizmeti veren bağımsız özel teknik servis.",
  path: "/hakkimizda",
});

const crumbs = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımızda", path: "/hakkimizda" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <PageHero title="Hakkımızda" lead={site.slogan} crumbs={crumbs} badges={false} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-navy-900">
            <h2>Ticari mutfakların teknik çözüm ortağı</h2>
            <p>
              {site.name}, {site.foundingYear} yılından bu yana İstanbul Avrupa Yakası&apos;nda restoran, otel, kafe, pastane, hastane ve
              fabrika yemekhanelerine endüstriyel mutfak ekipmanları teknik servisi vermektedir. Uzmanlık alanımız Öztiryakiler marka
              ocak, fritöz, fırın, pizza fırını, benmari, makarna haşlama, ızgara, buzdolabı ve bulaşık makinelerinin bakım ve onarımıdır.
            </p>
            <p>
              Gazlı cihazlar, elektrikli ısıtma sistemleri ve soğutma devreleri konusunda deneyimli teknisyenlerimiz, servis araçlarımızda
              bulunan ölçüm ekipmanları ve sık kullanılan yedek parçalar sayesinde arızaların büyük bölümünü ilk ziyarette çözmektedir.
            </p>
            <h2>Çalışma prensiplerimiz</h2>
            <ul>
              <li>Arıza tespiti yapılmadan fiyat verilmez, onay alınmadan işlem yapılmaz.</li>
              <li>Değiştirilen parçalar müşteriye gösterilir, işlem sonrası fatura düzenlenir.</li>
              <li>{site.warrantyText}</li>
              <li>Gaz bağlantılı cihazlarda kaçak testi yapılmadan teslim edilmez.</li>
            </ul>
            <h2>Bağımsız servis olduğumuzu açıkça belirtiyoruz</h2>
            <p>
              Firmamız Öztiryakiler markasının yetkili servisi değildir ve marka sahibi ile herhangi bir bağı bulunmamaktadır. Öztiryakiler
              marka cihazlara bağımsız, özel teknik servis olarak hizmet veriyoruz. Garanti süresi devam eden cihazlarınız için üretici
              firmanın yetkili servisine başvurmanızı öneririz.
            </p>
          </div>
          <div className="space-y-6">
            <ul className="grid grid-cols-2 gap-4">
              {site.stats.map((s) => (
                <li key={s.label} className="rounded-2xl bg-navy-600 p-6 text-white">
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="mt-1 text-sm text-navy-100">{s.label}</p>
                </li>
              ))}
            </ul>
            <DisclaimerBox />
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead center title="Neden bizi tercih ediyorlar?" />
          <div className="mt-10"><WhyUs /></div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
