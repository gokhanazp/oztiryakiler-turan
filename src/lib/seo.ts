import type { Metadata } from "next";
import { site } from "@/config/site";
import { districts } from "@/data/districts";
import type { Faq, Service } from "@/data/services";
import type { District } from "@/data/districts";

export const absUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, keywords, absoluteTitle, noindex }: MetaInput): Metadata {
  const url = absUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: absUrl("/og.png"), width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [absUrl("/og.png")] },
  };
}

/* ---------------- JSON-LD ---------------- */

const BUSINESS_ID = `${site.url}/#business`;

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    description: `${site.slogan}. Öztiryakiler marka endüstriyel mutfak ekipmanları için bağımsız özel teknik servis (yetkili servis değildir).`,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    image: absUrl("/og.png"),
    logo: absUrl("/logo.png"),
    priceRange: "₺₺",
    foundingDate: String(site.foundingYear),
    // Açık adres yok → hizmet bölgesi işletmesi (service-area business)
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.city,
      addressCountry: "TR",
    },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: districts.map((d) => ({
      "@type": "AdministrativeArea",
      name: `${d.name}, İstanbul`,
    })),
    sameAs: site.social.length ? site.social : undefined,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function serviceLd(service: Service, path: string, district?: District) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: district ? `${district.name} ${service.title}` : service.title,
    serviceType: `${service.name} tamiri ve bakımı`,
    description: service.metaDescription,
    url: absUrl(path),
    provider: { "@id": BUSINESS_ID },
    brand: { "@type": "Brand", name: "Öztiryakiler" },
    areaServed: district
      ? { "@type": "AdministrativeArea", name: `${district.name}, İstanbul` }
      : districts.map((d) => ({ "@type": "AdministrativeArea", name: `${d.name}, İstanbul` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} servis işlemleri`,
      itemListElement: service.work.map((w) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: w },
      })),
    },
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
