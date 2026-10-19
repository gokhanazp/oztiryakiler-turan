import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Sections";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Öztiryakiler Servisi KVKK aydınlatma metni: servis talebinde hangi kişisel verilerin, hangi amaçla işlendiği ve haklarınız hakkında bilgilendirme.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <>
      <PageHero title="KVKK Aydınlatma Metni" lead="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme." crumbs={[{ name: "Anasayfa", path: "/" }, { name: "KVKK", path: "/kvkk" }]} badges={false} />
      <section className="section">
        <div className="container-x prose prose-slate max-w-3xl prose-headings:text-navy-900">
          <p><em>Not: Bu metin genel bir şablondur; yayına almadan önce hukuk danışmanınıza kontrol ettiriniz.</em></p>
          <h2>Veri Sorumlusu</h2>
          <p>{site.legalName || site.name} – Telefon: {site.phone}{site.email ? ` · E-posta: ${site.email}` : ""}</p>
          <h2>İşlenen Kişisel Veriler</h2>
          <p>Ad-soyad / işletme adı, telefon numarası, adres ve servis talebine ilişkin cihaz ve arıza bilgileri.</p>
          <h2>İşleme Amaçları</h2>
          <p>Servis talebinizin alınması, randevu oluşturulması, servis hizmetinin yürütülmesi, faturalandırma ve yasal yükümlülüklerin yerine getirilmesi.</p>
          <h2>Hukuki Sebep ve Toplama Yöntemi</h2>
          <p>Veriler; telefon, WhatsApp ve web sitesi formu aracılığıyla, KVKK m.5/2 (c) sözleşmenin kurulması ve ifası ile (ç) hukuki yükümlülük sebeplerine dayanılarak toplanır.</p>
          <h2>Aktarım</h2>
          <p>Kişisel verileriniz yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. WhatsApp üzerinden iletilen mesajlar ilgili platformun gizlilik koşullarına tabidir.</p>
          <h2>Çerezler</h2>
          <p>Sitemizde, yalnızca onay vermeniz hâlinde ziyaret istatistiklerini ölçmek için Google Analytics çerezleri kullanılır. Onay vermezseniz bu çerezler yüklenmez. Tercihinizi tarayıcınızın site verilerini temizleyerek değiştirebilirsiniz.</p>
          <h2>Haklarınız</h2>
          <p>KVKK m.11 kapsamındaki haklarınıza ilişkin taleplerinizi {site.email ? `${site.email} adresine veya ` : ""}{site.phone} numaralı telefona iletebilirsiniz.</p>
        </div>
      </section>
    </>
  );
}
