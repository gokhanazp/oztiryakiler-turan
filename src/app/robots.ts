import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/seo";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absUrl("/sitemap.xml"),
    host: site.url,
  };
}
