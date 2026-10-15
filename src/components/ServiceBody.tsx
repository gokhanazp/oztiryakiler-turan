import Link from "next/link";
import type { Service } from "@/data/services";
import type { District } from "@/data/districts";
import { getDistrict } from "@/data/districts";
import { locative } from "@/lib/tr";
import { CheckList, ContactCard, DisclaimerBox, FaqList, Process } from "./Sections";
import type { Faq } from "@/data/services";
import { PinIcon, WrenchIcon } from "./Icons";

type Props = { service: Service; district?: District; intro: string[]; faqs: Faq[] };

export default function ServiceBody({ service: s, district: d, intro, faqs }: Props) {
  const where = d ? `${d.name} ` : "";
  return (
    <div className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_340px]">
      <article className="min-w-0 space-y-14">
        <section>
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            {d ? `${locative(d.name)} Öztiryakiler ${s.name} Tamiri ve Bakımı` : `Öztiryakiler ${s.name} Tamiri ve Bakımı`}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700">
            {intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">Sık Karşılaşılan Öztiryakiler {s.name} Arızaları</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.faults.map((f) => (
              <li key={f.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />{f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">{where}{s.title} Kapsamında Yapılan İşlemler</h2>
          <div className="mt-6"><CheckList items={s.work} /></div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">Servis Verdiğimiz Öztiryakiler {s.name} Modelleri</h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {s.types.map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-800">
                <WrenchIcon className="h-4 w-4 text-brand-500" />{t}
              </li>
            ))}
          </ul>
        </section>

        {d && (
          <section>
            <h2 className="text-2xl font-extrabold">{d.name} İlçesinde Hizmet Verdiğimiz Bölgeler</h2>
            <p className="mt-3 text-slate-600">
              {locative(d.name)} aşağıdaki mahalle ve semtlerin yanı sıra ilçenin tamamına Öztiryakiler {s.name.toLocaleLowerCase("tr-TR")} servisi veriyoruz.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {d.areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-slate-700"><PinIcon className="h-4 w-4 text-brand-500" />{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Komşu ilçelerde de hizmet veriyoruz:{" "}
              {d.near.map((n, i) => {
                const nd = getDistrict(n)!;
                return (
                  <span key={n}>
                    <Link href={`/${s.slug}/${nd.slug}`} className="font-medium text-navy-700 underline decoration-navy-200 underline-offset-2 hover:text-brand-600">
                      {nd.name} Öztiryakiler {s.name} Servisi
                    </Link>
                    {i < d.near.length - 1 ? ", " : "."}
                  </span>
                );
              })}
            </p>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-extrabold">Öztiryakiler {s.name} Bakım Önerileri</h2>
          <p className="mt-3 text-slate-600">Düzenli bakım, arıza riskini azaltır ve cihaz ömrünü uzatır. Teknisyenlerimizin önerileri:</p>
          <div className="mt-5"><CheckList items={s.maintenance} cols={1} /></div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">Servis Süreci Nasıl İşler?</h2>
          <div className="mt-6"><Process /></div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">{where}Öztiryakiler {s.name} Servisi Hakkında Sık Sorulan Sorular</h2>
          <div className="mt-6"><FaqList faqs={faqs} /></div>
        </section>

        <DisclaimerBox />
      </article>

      <aside className="lg:sticky lg:top-32 lg:self-start">
        <ContactCard heading={`${where}Öztiryakiler ${s.name} Servisi`} />
      </aside>
    </div>
  );
}
