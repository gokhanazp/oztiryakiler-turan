import { site, disclaimer } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Sections";

export const metadata = buildMetadata({
  title: "Yasal Uyarı",
  description: "Öztiryakiler Servisi yasal uyarı: Firmamız Öztiryakiler'in yetkili servisi değildir, bağımsız özel teknik servistir.",
  path: "/yasal-uyari",
});

export default function LegalPage() {
  return (
    <>
      <PageHero title="Yasal Uyarı" lead="Bağımsız servis beyanı ve marka kullanımı hakkında bilgilendirme." crumbs={[{ name: "Anasayfa", path: "/" }, { name: "Yasal Uyarı", path: "/yasal-uyari" }]} badges={false} />
      <section className="section">
        <div className="container-x prose prose-lg prose-slate max-w-3xl prose-headings:text-navy-900">
          <h2>Bağımsız Servis Beyanı</h2>
          <p>{disclaimer}</p>
          <p>
            {site.legalName} (&quot;{site.name}&quot;), Öztiryakiler markasının sahibi olan firma ile herhangi bir ortaklık, bayilik, distribütörlük
            veya yetkili servis ilişkisi içinde değildir. Sitemizde yer alan &quot;Öztiryakiler&quot; ifadesi, yalnızca bakım ve onarım hizmeti verdiğimiz
            cihazların markasını tanımlamak amacıyla kullanılmaktadır.
          </p>
          <h2>Garanti Kapsamındaki Cihazlar</h2>
          <p>
            Üretici garantisi devam eden cihazlarda, üretici dışındaki bir servis tarafından yapılan müdahaleler garanti koşullarını etkileyebilir.
            Cihazınız garanti kapsamındaysa öncelikle üretici firmanın yetkili servisine başvurmanızı tavsiye ederiz.
          </p>
          <h2>Hizmet Garantisi</h2>
          <p>
            {site.warrantyText} Garanti süresi ve koşulları servis sonrası düzenlenen fatura / servis formu üzerinde belirtilir.
          </p>
          <h2>İçerik</h2>
          <p>
            Sitede yer alan arıza ve bakım bilgileri genel bilgilendirme amaçlıdır. Gaz ve elektrik bağlantılı cihazlarda müdahalelerin yetkin
            teknik personel tarafından yapılması gerekir.
          </p>
        </div>
      </section>
    </>
  );
}
