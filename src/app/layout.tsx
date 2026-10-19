import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Analytics from "@/components/Analytics";
import { JsonLd } from "@/components/Sections";
import { site } from "@/config/site";
import { localBusinessLd, websiteLd } from "@/lib/seo";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Öztiryakiler Servisi | Avrupa Yakası Endüstriyel Mutfak",
    template: "%s | Öztiryakiler Servisi",
  },
  description:
    "Öztiryakiler ocak, fritöz, fırın, pizza fırını, benmari, ızgara, makarna haşlama, buzdolabı ve bulaşık makinesi için İstanbul Avrupa Yakası'nda aynı gün yerinde özel teknik servis.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  formatDetection: { telephone: true, address: false, email: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
  other: { "geo.region": "TR-34", "geo.placename": "İstanbul" },
};

export const viewport: Viewport = {
  themeColor: "#105bbc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:p-3">
          İçeriğe geç
        </a>
        <JsonLd data={[localBusinessLd(), websiteLd()]} />
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileCallBar />
        {site.gaId && <Analytics gaId={site.gaId} />}
      </body>
    </html>
  );
}
