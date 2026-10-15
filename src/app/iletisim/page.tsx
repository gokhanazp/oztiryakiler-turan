import { site, whatsappLink } from "@/config/site";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { DisclaimerBox, JsonLd, PageHero } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "İletişim – Öztiryakiler Servisi Servis Talebi",
  description: "Öztiryakiler endüstriyel mutfak ekipmanları servis talebi için bizi arayın veya WhatsApp'tan yazın. İstanbul Avrupa Yakası'nda aynı gün yerinde servis.",
  path: "/iletisim",
});

const crumbs = [
  { name: "Anasayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export default function ContactPage() {
  const items = [
    { icon: <PhoneIcon />, label: "Telefon", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: <WhatsappIcon />, label: "WhatsApp", value: site.mobile, href: whatsappLink() },
    { icon: <MailIcon />, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
    { icon: <PinIcon />, label: "Hizmet bölgesi", value: `${site.serviceArea} – 25 ilçede yerinde servis` },
    { icon: <ClockIcon />, label: "Çalışma saatleri", value: site.hours.label },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <PageHero title="İletişim ve Servis Talebi" lead="Arızalı cihazınız için hemen arayın ya da formu doldurun, ekibimiz en kısa sürede dönüş yapsın." crumbs={crumbs} badges={false} />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {items.map((i) => (
              <div key={i.label} className="flex gap-4 rounded-xl border border-slate-200 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-600 text-white">{i.icon}</span>
                <div>
                  <p className="text-sm text-slate-500">{i.label}</p>
                  {i.href ? (
                    <a href={i.href} className="font-semibold text-navy-900 hover:text-brand-600">{i.value}</a>
                  ) : (
                    <p className="font-semibold text-navy-900">{i.value}</p>
                  )}
                </div>
              </div>
            ))}
            <DisclaimerBox />
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-extrabold">Online Servis Talebi</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
