/**
 * ============================================================
 *  TÜM FİRMA BİLGİLERİ BURADAN YÖNETİLİR
 *  Yayına almadan önce "DEĞİŞTİR" yazan alanları güncelleyin.
 * ============================================================
 */
export const site = {
  // Alan adı (sonunda / olmadan). Vercel'de bağladığınız domain ile aynı olmalı.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oztiryakiler-servisi.com",

  name: "Öztiryakiler Servisi",
  shortName: "Öztiryakiler Servis",
  // Ticari ünvanınız (fatura / vergi levhasındaki ad). Boş bırakılırsa sitede ve schema'da gösterilmez.
  legalName: "",
  slogan: "Endüstriyel Mutfak Ekipmanlarında Uzman Özel Teknik Servis",

  phone: "+90 536 931 96 67",
  phoneHref: "+905369319667",
  mobile: "+90 536 931 96 67",
  whatsapp: "905369319667", // WhatsApp numarası (ülke koduyla, + olmadan)
  // E-posta: kurulu ve çalışan bir adres yazın (ör. info@oztiryakiler-servisi.com). Boşsa gösterilmez.
  email: "",

  // Açık adres yok: hizmet bölgesi esaslı (mobil) servis.
  serviceArea: "İstanbul Avrupa Yakası",
  city: "İstanbul",

  // Google İşletme Profili linki (varsa) – sameAs olarak eklenir
  social: [
    // "https://g.page/r/XXXX",
    // "https://www.instagram.com/xxxx",
  ] as string[],

  hours: {
    label: "Pazartesi – Cumartesi 08:00 – 20:00 · Pazar acil servis",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" },
      { days: ["Sunday"], opens: "10:00", closes: "18:00" },
    ],
  },

  foundingYear: 2010, // DEĞİŞTİR
  // Yalnızca gerçek ve doğrulanabilir rakamlar yazın.
  stats: [
    { value: "15+", label: "Yıllık sektör deneyimi" }, // DEĞİŞTİR
    { value: "25", label: "Avrupa Yakası ilçesinde hizmet" },
    { value: "10", label: "Ekipman grubunda uzmanlık" },
    { value: "7/24", label: "Acil arıza hattı" },
  ],
  warrantyText: "Yapılan işçilik ve değiştirilen parçalar garantilidir.", // Garanti koşullarınıza göre güncelleyin

  // Google Analytics 4 ölçüm kimliği (G-XXXXXXX). Vercel'de NEXT_PUBLIC_GA_ID olarak tanımlayın.
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",

  /** İçeriğin son güncellenme tarihi – sitemap lastmod için. İçerik değiştikçe güncelleyin. */
  contentUpdated: "2026-10-19",

  // Google Search Console doğrulama kodu (meta etiketi içeriği)
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
} as const;

/** Her sayfada görünen bağımsız servis beyanı */
export const disclaimer =
  "Firmamız Öztiryakiler markasının yetkili servisi değildir. Öztiryakiler marka endüstriyel mutfak ekipmanlarına bakım, onarım ve yedek parça hizmeti veren bağımsız, özel bir teknik servistir. “Öztiryakiler” adı ve markası hak sahibine aittir; sitede yalnızca hizmet verilen ürünleri tanımlamak amacıyla kullanılmaktadır.";

export const disclaimerShort = "Öztiryakiler endüstriyel mutfak ekipmanları özel teknik servisi";

export const whatsappLink = (text = "Merhaba, Öztiryakiler cihazım için servis talebim var.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
