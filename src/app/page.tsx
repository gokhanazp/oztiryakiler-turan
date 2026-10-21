import Link from "next/link";
import { site, whatsappLink } from "@/config/site";
import { buildMetadata, faqLd } from "@/lib/seo";
import {
  CtaBanner, DisclaimerBox, DistrictGrid, FaqList, HeroBackdrop, JsonLd, Process, SectionHead, ServiceGrid, TrustBadges, WhyUs,
} from "@/components/Sections";
import { ArrowIcon, PhoneIcon, ServiceIcon, WhatsappIcon } from "@/components/Icons";
import { services } from "@/data/services";
import type { Faq } from "@/data/services";

export const metadata = buildMetadata({
  title: "Öztiryakiler Servisi | Avrupa Yakası Endüstriyel Mutfak",
  description:
    "Öztiryakiler ocak, yer ocağı, fritöz, fırın, pizza fırını, benmari, ızgara, makarna haşlama, buzdolabı ve bulaşık makinesi arızalarında İstanbul Avrupa Yakası'nda aynı gün yerinde servis.",
  path: "/",
  absoluteTitle: true,
  keywords: ["öztiryakiler servisi", "öztiryakiler teknik servis", "öztiryakiler servis istanbul", "endüstriyel mutfak servisi", "öztiryakiler tamir"],
});

const homeFaqs: Faq[] = [
  { q: "Öztiryakiler yetkili servisi misiniz?", a: "Hayır. Öztiryakiler markasının yetkili servisi değiliz. Öztiryakiler marka endüstriyel mutfak ekipmanlarına bakım, onarım ve yedek parça hizmeti veren bağımsız özel bir teknik servisiz. Yaptığımız işçilik ve taktığımız parçalar firmamızın garantisi altındadır." },
  { q: "Hangi bölgelere servis veriyorsunuz?", a: "İstanbul Avrupa Yakası'nın 25 ilçesinin tamamına hizmet veriyoruz: Beşiktaş, Şişli, Beyoğlu, Fatih, Bakırköy, Bahçelievler, Bağcılar, Başakşehir, Esenyurt, Beylikdüzü, Sarıyer, Kağıthane ve diğer tüm ilçeler." },
  { q: "Aynı gün servis veriyor musunuz?", a: "Evet. Mobil ekiplerimiz sayesinde talebin saatine ve yoğunluğa bağlı olarak çoğu arızaya aynı gün yerinde müdahale ediyoruz. Soğutma ve acil gaz arızalarına öncelik veriyoruz." },
  { q: "Servis ücreti nasıl belirleniyor?", a: "Teknisyenimiz arızayı yerinde tespit eder, yapılacak işlem ve toplam ücreti size bildirir. Onayınız olmadan hiçbir işlem yapılmaz; işlem sonrası faturanız düzenlenir." },
  { q: "Orijinal yedek parça kullanıyor musunuz?", a: "Cihazınıza uyumlu, kaliteli yedek parçalar kullanıyoruz. Kullanılacak parçanın türü ve fiyatı onarım öncesinde sizinle paylaşılır." },
  { q: "Periyodik bakım anlaşması yapıyor musunuz?", a: "Evet. Restoran, otel, kafe ve yemekhaneler için aylık veya dönemsel bakım planları hazırlıyor, arızaları oluşmadan önlemeye yardımcı oluyoruz." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 text-white">
        <HeroBackdrop />
        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-navy-100">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              İstanbul Avrupa Yakası · Aynı gün yerinde servis
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] !text-white sm:text-5xl lg:text-6xl">
              <span className="mb-3 block text-xl font-bold text-brand-400 sm:text-2xl lg:text-3xl">İstanbul Avrupa Yakası</span>
              Öztiryakiler Endüstriyel Mutfak Servisi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              Öztiryakiler ocak, yer ocağı, fritöz, fırın, pizza fırını, benmari, ızgara, makarna haşlama, buzdolabı ve bulaşık makinesi arızalarında
              restoran, otel ve yemekhanelere hızlı, garantili ve şeffaf fiyatlı yerinde servis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneHref}`} className="btn-primary px-6 py-4 text-base"><PhoneIcon /> Hemen Ara: {site.phone}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp px-6 py-4 text-base"><WhatsappIcon /> WhatsApp</a>
            </div>
            <TrustBadges />
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-widest text-navy-200">Servis verdiğimiz ekipmanlar</p>
              <ul className="mt-5 grid grid-cols-5 gap-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="flex h-full flex-col items-center gap-2 rounded-xl bg-white/5 px-2 py-4 text-center text-[11px] font-medium leading-tight text-white ring-1 ring-white/10 transition hover:bg-brand-500">
                      <ServiceIcon name={s.icon} className="h-8 w-8" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <ul className="container-x grid grid-cols-2 divide-slate-200 py-8 lg:grid-cols-4 lg:divide-x">
          {site.stats.map((s) => (
            <li key={s.label} className="px-4 py-3 text-center">
              <p className="text-3xl font-extrabold text-navy-900 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Öztiryakiler Endüstriyel Mutfak Ekipmanları Servisi"
            lead="Ticari mutfağınızdaki tüm Öztiryakiler ekipmanları için tek adres. Gazlı, elektrikli ve soğutma sistemlerinde uzman teknisyenler."
          />
          <div className="mt-10"><ServiceGrid /></div>
        </div>
      </section>

      {/* ABOUT / SEO TEXT */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <p className="eyebrow">Neden biz?</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl">Mutfağınız durmasın diye buradayız</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Restoran, otel, kafe, pastane ve yemekhanelerde ekipman arızası doğrudan ciro kaybı demektir. Öztiryakiler Servisi olarak İstanbul
                Avrupa Yakası&apos;nda Öztiryakiler marka endüstriyel mutfak cihazlarının bakım ve onarımını yerinde yapıyor, işletmenizi en kısa
                sürede yeniden servise hazır hale getiriyoruz.
              </p>
              <p>
                Gaz hattı, elektrik ve soğutma sistemlerinde deneyimli teknisyenlerimiz arızayı ölçüm cihazlarıyla tespit eder; işlem ve fiyatı
                onayınıza sunar, onarım sonrası cihazı test ederek garantili teslim eder.
              </p>
            </div>
            <Link href="/hakkimizda" className="btn-outline mt-7">Hakkımızda <ArrowIcon /></Link>
          </div>
          <WhyUs compact />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead center eyebrow="Nasıl çalışıyoruz?" title="4 adımda hızlı ve şeffaf servis" />
          <div className="mt-10"><Process /></div>
        </div>
      </section>

      {/* DISTRICTS */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Servis bölgeleri"
            title="İstanbul Avrupa Yakası'nın Tüm İlçelerinde Öztiryakiler Servisi"
            lead="25 ilçede mobil ekiplerimizle yerinde servis veriyoruz. Bölgenizi seçerek detaylı bilgi alabilirsiniz."
          />
          <div className="mt-10"><DistrictGrid /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead eyebrow="S.S.S." title="Sıkça Sorulan Sorular" lead="Öztiryakiler servis hizmetimizle ilgili merak edilenler." />
            <Link href="/sikca-sorulan-sorular" className="btn-outline mt-6">Tüm sorular <ArrowIcon /></Link>
            <div className="mt-8"><DisclaimerBox /></div>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
