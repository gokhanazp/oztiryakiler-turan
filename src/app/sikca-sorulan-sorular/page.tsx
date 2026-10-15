import Link from "next/link";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";
import { CtaBanner, DisclaimerBox, FaqList, JsonLd, PageHero } from "@/components/Sections";
import { services, type Faq } from "@/data/services";

export const metadata = buildMetadata({
  title: "Sıkça Sorulan Sorular – Öztiryakiler Servisi",
  description: "Öztiryakiler ocak, fritöz, fırın, buzdolabı, bulaşık makinesi ve diğer endüstriyel mutfak ekipmanları servisiyle ilgili sıkça sorulan sorular ve yanıtları.",
  path: "/sikca-sorulan-sorular",
});

const crumbs = [
  { name: "Anasayfa", path: "/" },
  { name: "Sıkça Sorulan Sorular", path: "/sikca-sorulan-sorular" },
];

const general: Faq[] = [
  { q: "Öztiryakiler yetkili servisi misiniz?", a: "Hayır. Öztiryakiler markasının yetkili servisi değiliz. Öztiryakiler marka endüstriyel mutfak ekipmanlarına hizmet veren bağımsız özel bir teknik servisiz. Garanti süresi devam eden cihazlar için üreticinin yetkili servisine başvurmanızı öneririz." },
  { q: "Hangi ilçelere servis veriyorsunuz?", a: "İstanbul Avrupa Yakası'ndaki 25 ilçenin tamamına yerinde servis veriyoruz." },
  { q: "Servis ücretini önceden öğrenebilir miyim?", a: "Arıza yerinde tespit edildikten sonra işlem ve ücret size bildirilir; onayınız olmadan işlem yapılmaz. Telefonda arızayı tarif ederseniz yaklaşık bilgi de verebiliriz." },
  { q: "Yaptığınız işlemler garantili mi?", a: "Evet. Yapılan işçilik ve değiştirilen parçalar firmamızın garantisi altındadır. Garanti süresi ve koşulları fatura üzerinde belirtilir." },
  { q: "Fatura kesiyor musunuz?", a: "Evet, tüm servis ve parça işlemleri için fatura düzenliyoruz." },
];

export default function FaqPage() {
  const all = [...general, ...services.flatMap((s) => s.faqs)];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(all)]} />
      <PageHero title="Sıkça Sorulan Sorular" lead="Öztiryakiler servis hizmetlerimiz hakkında en çok sorulan sorular." crumbs={crumbs} badges={false} />
      <section className="section">
        <div className="container-x max-w-4xl space-y-14">
          <div>
            <h2 className="mb-5 text-2xl font-extrabold">Genel Sorular</h2>
            <FaqList faqs={general} />
          </div>
          {services.map((s) => (
            <div key={s.slug}>
              <h2 className="mb-5 text-2xl font-extrabold">
                <Link href={`/${s.slug}`} className="hover:text-brand-600">{s.title}</Link>
              </h2>
              <FaqList faqs={s.faqs} />
            </div>
          ))}
          <DisclaimerBox />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
