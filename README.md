# Öztiryakiler Servisi – Web Sitesi

Next.js 15 (App Router) + React 19 + Tailwind CSS 4. Tüm sayfalar build sırasında statik HTML olarak üretilir (SSG) → çok hızlı ve SEO dostu.

## Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi (275 sayfa)
```

## Yayına almadan önce

1. **`src/config/site.ts`** dosyasında `DEĞİŞTİR` yazan tüm alanları doldurun: alan adı, telefon, WhatsApp, e-posta, adres, koordinat, ticari ünvan, kuruluş yılı, istatistikler.
2. `src/app/kvkk/page.tsx` metnini hukuk danışmanınıza kontrol ettirin.

## Vercel'e yükleme

1. Projeyi GitHub'a gönderin → Vercel'de **Add New Project** → depoyu seçin (Framework: Next.js otomatik algılanır).
2. Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.alanadiniz.com`
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION` = Search Console doğrulama kodu (isteğe bağlı)
   - `NEXT_PUBLIC_GA_ID` = Google Analytics 4 ölçüm kimliği, ör. `G-XXXXXXX` (isteğe bağlı). Tanımlanınca KVKK çerez onayı çıkar; onay verilirse GA yüklenir ve `phone_click`, `whatsapp_click`, `generate_lead` olayları ölçülür.
3. Domains: hem `alanadiniz.com` hem `www.alanadiniz.com` ekleyin, birini diğerine **301 yönlendirin** (canonical ile aynı olmalı).

## Site yapısı (275 sayfa)

| Tür | URL örneği | Adet |
|---|---|---|
| Anasayfa | `/` | 1 |
| Hizmet | `/oztiryakiler-ocak-servisi` | 9 |
| İlçe | `/servis-bolgeleri/besiktas` | 25 |
| Hizmet × İlçe | `/oztiryakiler-ocak-servisi/besiktas` | 225 |
| Kurumsal | `/hizmetler`, `/servis-bolgeleri`, `/hakkimizda`, `/iletisim`, `/sikca-sorulan-sorular`, `/yasal-uyari`, `/kvkk` | 7 |

İçerik verisi: `src/data/services.ts` (hizmetler, arızalar, SSS) ve `src/data/districts.ts` (ilçeler, mahalleler, komşu ilçeler).

## SEO altyapısı

- Her sayfada benzersiz `title`, `description`, `canonical`, Open Graph ve Twitter etiketleri
- JSON-LD: `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`
- Otomatik `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Tek H1, anlamlı başlık hiyerarşisi, Türkçe `lang="tr"`
- Güçlü iç linkleme: hizmet ↔ ilçe ↔ komşu ilçe ↔ diğer hizmetler
- Self-hosted font, sıfır harici script → yüksek Core Web Vitals

## Yayın sonrası yapılacaklar (sıralamayı en çok etkileyenler)

1. **Google Search Console**: siteyi doğrulayın, `sitemap.xml` gönderin.
2. **Google İşletme Profili** açın (kategori: "Ticari mutfak ekipmanı tamiri" / "Cihaz tamir servisi"). Adres ve telefon sitedekiyle birebir aynı olmalı. Linkini `site.social` içine ekleyin.
3. Gerçek müşterilerden Google yorumu toplayın (sitede sahte yorum/puan **kullanmayın**).
4. Yapılan işlerin gerçek fotoğraflarını ekleyin (`public/` klasörü) – güven ve görsel aramada etkili.
5. Yerel dizinlere (Yandex Haritalar, Apple Business Connect, firma rehberleri) aynı NAP bilgisiyle kayıt olun.

## Marka / hukuk notu

Firma Öztiryakiler'in yetkili servisi değildir. Bu beyan üst bilgi çubuğunda, her sayfanın içeriğinde, footer'da ve `/yasal-uyari` sayfasında yer alır. Öztiryakiler logosu kullanılmamıştır. Metinlerde "yetkili servis" iddiası bulunmaz – bu yapıyı koruyun.

## SEO notları

- Hizmet × ilçe sayfalarından yalnızca `src/data/districts.ts` > `indexedComboDistricts` listesindeki ilçeler dizine eklenir; diğerleri `noindex, follow` ve sitemap dışıdır. Bir ilçeye özgün içerik ekledikçe listeye ekleyin.
- Sitemap `lastmod` değeri `src/config/site.ts` > `contentUpdated` tarihinden gelir; içerik değişince güncelleyin.
- `legalName` ve `email` boşsa sitede ve schema'da gösterilmez.
