import Link from "next/link";
import { notFound } from "next/navigation";
import { DISTRICT_SUFFIX, districtPath, districts, getDistrictByPageSlug } from "@/data/districts";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";
import { districtIntro } from "@/lib/content";
import { listToText, locative } from "@/lib/tr";
import {
  ContactCard, CtaBanner, DisclaimerBox, DistrictGrid, FaqList, JsonLd, PageHero, Process, SectionHead, ServiceGrid,
} from "@/components/Sections";
import { PinIcon } from "@/components/Icons";
import type { Faq } from "@/data/services";

type Params = { params: Promise<{ district: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return districts.map((d) => ({ district: `${d.slug}${DISTRICT_SUFFIX}` }));
}

export async function generateMetadata({ params }: Params) {
  const { district } = await params;
  const d = getDistrictByPageSlug(district);
  if (!d) return {};
  return buildMetadata({
    title: `${d.name} Öztiryakiler Servisi | Endüstriyel Mutfak`,
    description: `${locative(d.name)} Öztiryakiler ocak, fritöz, fırın, benmari, ızgara, buzdolabı ve bulaşık makinesi için aynı gün yerinde servis. ${d.areas.slice(0, 3).join(", ")} ve tüm mahalleler.`,
    path: districtPath(d),
    absoluteTitle: true,
    keywords: [`${d.name.toLocaleLowerCase("tr-TR")} öztiryakiler servisi`, `${d.name.toLocaleLowerCase("tr-TR")} endüstriyel mutfak servisi`],
  });
}

export default async function DistrictPage({ params }: Params) {
  const { district } = await params;
  const d = getDistrictByPageSlug(district);
  if (!d) notFound();

  const path = districtPath(d);
  const crumbs = [
    { name: "Anasayfa", path: "/" },
    { name: "Servis Bölgeleri", path: "/servis-bolgeleri" },
    { name: `${d.name} Öztiryakiler Servisi`, path },
  ];
  const faqs: Faq[] = [
    { q: `${locative(d.name)} Öztiryakiler servisi aynı gün geliyor mu?`, a: `Evet. ${d.name} ve çevresinde mobil ekiplerimiz bulunur; çoğu arızaya aynı gün yerinde müdahale ediyoruz.` },
    { q: `${d.name} hangi mahallelere servis veriyorsunuz?`, a: `${listToText(d.areas)} başta olmak üzere ${d.name} ilçesinin tamamına hizmet veriyoruz.` },
    { q: `${locative(d.name)} hangi Öztiryakiler cihazlarına servis veriyorsunuz?`, a: "Ocak, buzdolabı, fritöz, benmari, fırın, pizza fırını, makarna haşlama, ızgara ve bulaşık makinesi dahil tüm Öztiryakiler endüstriyel mutfak ekipmanlarına servis veriyoruz." },
    { q: "Öztiryakiler yetkili servisi misiniz?", a: "Hayır. Öztiryakiler'in yetkili servisi değiliz; Öztiryakiler marka cihazlara hizmet veren bağımsız özel bir teknik servisiz." },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faqs)]} />
      <PageHero
        title={`${d.name} Öztiryakiler Servisi`}
        lead={`${locative(d.name)} Öztiryakiler endüstriyel mutfak ekipmanlarına aynı gün yerinde bakım ve onarım. ${d.areas.slice(0, 4).join(", ")} ve tüm mahalleler.`}
        crumbs={crumbs}
      />

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_340px]">
        <article className="min-w-0 space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">{locative(d.name)} Endüstriyel Mutfak Teknik Servisi</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700">
              {districtIntro(d).map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">{d.name} Hizmet Verdiğimiz Mahalleler</h2>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {d.areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-slate-700"><PinIcon className="h-4 w-4 text-brand-500" />{a}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">Servis Süreci</h2>
            <div className="mt-6"><Process /></div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">{d.name} Öztiryakiler Servisi – Sık Sorulan Sorular</h2>
            <div className="mt-6"><FaqList faqs={faqs} /></div>
          </section>

          <DisclaimerBox />
        </article>
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <ContactCard heading={`${d.name} Öztiryakiler Servisi`} />
        </aside>
      </div>

      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHead eyebrow={`${d.name} hizmetleri`} title={`${locative(d.name)} Verdiğimiz Öztiryakiler Servis Hizmetleri`} />
          <div className="mt-10"><ServiceGrid districtSlug={d.slug} districtName={d.name} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Yakın bölgeler" title={`${d.name} Çevresindeki Servis Bölgelerimiz`} />
          <div className="mt-8"><DistrictGrid only={d.near} /></div>
          <p className="mt-6 text-sm"><Link href="/servis-bolgeleri" className="font-semibold text-brand-600 hover:underline">Tüm servis bölgelerini görün →</Link></p>
        </div>
      </section>

      <CtaBanner title={`${d.name} Öztiryakiler Servisi`} text={`${locative(d.name)} arızalı cihazınız için hemen arayın.`} />
    </>
  );
}
