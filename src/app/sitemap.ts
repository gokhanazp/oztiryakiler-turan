import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { districts, districtPath, isComboIndexed } from "@/data/districts";
import { site } from "@/config/site";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod: içeriğin gerçek son güncellenme tarihi (build zamanı değil) – site.ts > contentUpdated
  const lastModified = new Date(site.contentUpdated);
  const entry = (path: string) => ({ url: absUrl(path), lastModified });

  return [
    entry("/"),
    entry("/hizmetler"),
    entry("/servis-bolgeleri"),
    entry("/hakkimizda"),
    entry("/iletisim"),
    entry("/sikca-sorulan-sorular"),
    ...services.map((s) => entry(`/${s.slug}`)),
    ...districts.map((d) => entry(districtPath(d))),
    // Yalnızca dizine eklenen hizmet × ilçe sayfaları
    ...services.flatMap((s) => districts.filter((d) => isComboIndexed(d.slug)).map((d) => entry(`/${s.slug}/${d.slug}`))),
    entry("/yasal-uyari"),
    entry("/kvkk"),
  ];
}
