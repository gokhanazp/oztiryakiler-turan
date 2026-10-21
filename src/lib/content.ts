import type { District } from "@/data/districts";
import type { Faq, Service } from "@/data/services";
import { listToText, locative, pick } from "./tr";

/** Hizmet × ilçe sayfası için ilçeye özel giriş paragrafları */
export function comboIntro(s: District, sv: Service): string[] {
  const loc = locative(s.name);
  const areas = listToText(s.areas.slice(0, 4));
  const seed = `${sv.slug}-${s.slug}`;

  const openers = [
    `${loc} Öztiryakiler ${sv.name.toLocaleLowerCase("tr-TR")} arızası yaşayan işletmeler için yerinde teknik servis sunuyoruz. ${areas} başta olmak üzere ilçenin tüm mahallelerine mobil servis araçlarımızla ulaşıyor, arızayı çoğu zaman ilk ziyarette gideriyoruz.`,
    `${s.name} genelinde ${s.profile} için ${sv.name.toLocaleLowerCase("tr-TR")} kesintisiz çalışmalıdır. ${loc} Öztiryakiler ${sv.name.toLocaleLowerCase("tr-TR")} cihazlarınız arızalandığında servis ekibimiz ${areas} dahil tüm bölgeye aynı gün yönlendirilir.`,
    `${s.name} Öztiryakiler ${sv.name} Servisi olarak ${areas} ve çevresindeki restoran, otel, kafe ve yemekhanelere hizmet veriyoruz. Yedek parça stoklu araçlarımız sayesinde ${loc} yapılan onarımların büyük bölümü aynı gün tamamlanır.`,
    `${loc} faaliyet gösteren ${s.profile}, Öztiryakiler ${sv.name.toLocaleLowerCase("tr-TR")} servis ihtiyaçları için ekibimize güveniyor. ${areas} gibi mahallelere düzenli olarak servis veriyor, arıza tespitini yerinde ölçümle yapıyoruz.`,
  ];

  const closers = [
    `${sv.short} Servis öncesinde arıza tespiti yapılır, işlem ve fiyat sizinle paylaşılmadan onarıma başlanmaz.`,
    `Uzmanlık alanımız: ${sv.short.charAt(0).toLocaleLowerCase("tr-TR") + sv.short.slice(1)} Onay vermediğiniz hiçbir işlem yapılmaz, fiyat önceden bildirilir.`,
    `Teknisyenlerimiz ${sv.types.slice(0, 3).join(", ").toLocaleLowerCase("tr-TR")} gibi modellerde deneyimlidir. Onarım sonrası cihaz test edilerek teslim edilir.`,
  ];

  const fault = pick(sv.faults, seed, 2);
  const otherAreas = s.areas.slice(4);
  const locals = [
    `${s.name} bölgesinde bu cihazı en çok ${sv.customers} kullanıyor. ${loc} en sık karşılaştığımız sorunlardan biri "${fault.title.toLocaleLowerCase("tr-TR")}" arızası: ${fault.text.charAt(0).toLocaleLowerCase("tr-TR") + fault.text.slice(1)}`,
    `${s.profile.charAt(0).toLocaleUpperCase("tr-TR") + s.profile.slice(1)} ${s.name} ilçesindeki müşterilerimizin önemli bir kısmını oluşturuyor. Bu işletmelerde "${fault.title.toLocaleLowerCase("tr-TR")}" şikâyetiyle sık çağrılıyoruz; ${fault.text.charAt(0).toLocaleLowerCase("tr-TR") + fault.text.slice(1)}`,
    `${otherAreas.length ? `${listToText(otherAreas)} dahil` : "İlçenin"} tüm ${s.name} mahallelerinde ${sv.customers} için Öztiryakiler ${sv.name.toLocaleLowerCase("tr-TR")} bakım ve onarımı yapıyoruz. Örneğin "${fault.title.toLocaleLowerCase("tr-TR")}" durumunda: ${fault.text.charAt(0).toLocaleLowerCase("tr-TR") + fault.text.slice(1)}`,
  ];

  return [pick(openers, seed), pick(locals, seed, 3), pick(closers, seed, 1)];
}

export function comboFaqs(s: District, sv: Service): Faq[] {
  const loc = locative(s.name);
  const nm = sv.name.toLocaleLowerCase("tr-TR");
  const seed = `${sv.slug}-${s.slug}`;
  const fault = pick(sv.faults, seed, 5);
  const svFaq = pick(sv.faqs, seed, 7);
  return [
    {
      q: `${loc} Öztiryakiler ${nm} servisi aynı gün geliyor mu?`,
      a: `Evet. ${s.name} ve komşu ilçelerde mobil ekiplerimiz bulunur; talebinizin saatine ve yoğunluğa bağlı olarak çoğu zaman aynı gün yerinde servis sağlıyoruz. Acil arızalar önceliklendirilir.`,
    },
    {
      q: `${s.name} hangi mahallelere ${nm} servisi veriyorsunuz?`,
      a: `${listToText(s.areas)} başta olmak üzere ${s.name} ilçesinin tüm mahallelerine hizmet veriyoruz.`,
    },
    {
      q: `${loc} hangi işletmelere ${nm} servisi veriyorsunuz?`,
      a: `${s.name} bölgesinde ağırlıklı olarak ${s.profile} için çalışıyoruz. ${sv.name} tarafında en çok ${sv.customers} bizi arıyor.`,
    },
    {
      q: `${s.name} – "${fault.title}" sorunu yerinde çözülür mü?`,
      a: `Çoğu durumda evet. ${fault.text} Gerekli parça servis aracımızda varsa onarım aynı ziyarette tamamlanır.`,
    },
    svFaq,
  ];
}

export function districtIntro(s: District): string[] {
  const loc = locative(s.name);
  return [
    `${loc} Öztiryakiler marka endüstriyel mutfak ekipmanlarına özel teknik servis hizmeti veriyoruz. Ocak, yer ocağı, fritöz, fırın, pizza fırını, benmari, makarna haşlama, ızgara, buzdolabı ve bulaşık makinesi arızalarında ${listToText(s.areas.slice(0, 5))} dahil ilçenin tüm mahallelerine yerinde servis sağlıyoruz.`,
    `Müşterilerimizin büyük bölümünü ${s.profile} oluşturuyor. Ticari mutfakta bir cihazın durmasının ne anlama geldiğini biliyor, ${s.name} bölgesindeki çağrılara hızlı yanıt veriyoruz.`,
  ];
}
