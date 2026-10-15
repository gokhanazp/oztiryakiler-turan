import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { districts, districtPath } from "@/data/districts";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/hizmetler", 0.8),
    entry("/servis-bolgeleri", 0.8),
    entry("/hakkimizda", 0.5, "yearly"),
    entry("/iletisim", 0.6, "yearly"),
    entry("/sikca-sorulan-sorular", 0.5),
    ...services.map((s) => entry(`/${s.slug}`, 0.9, "weekly")),
    ...districts.map((d) => entry(districtPath(d), 0.7)),
    ...services.flatMap((s) => districts.map((d) => entry(`/${s.slug}/${d.slug}`, 0.6))),
    entry("/yasal-uyari", 0.2, "yearly"),
    entry("/kvkk", 0.2, "yearly"),
  ];
}
