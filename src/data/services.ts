export type Fault = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // "Ocak"
  title: string; // "Öztiryakiler Ocak Servisi"
  icon: IconKey;
  metaTitle: string;
  metaDescription: string;
  short: string;
  intro: string[];
  types: string[];
  faults: Fault[];
  work: string[];
  maintenance: string[];
  faqs: Faq[];
  keywords: string[];
};

export type IconKey =
  | "ocak"
  | "buzdolabi"
  | "fritoz"
  | "benmari"
  | "firin"
  | "pizza"
  | "makarna"
  | "izgara"
  | "bulasik";

export const services: Service[] = [
  {
    slug: "oztiryakiler-ocak-servisi",
    name: "Ocak",
    title: "Öztiryakiler Ocak Servisi",
    icon: "ocak",
    metaTitle: "Öztiryakiler Ocak Servisi | Gazlı & Elektrikli Ocak Tamiri",
    metaDescription:
      "Öztiryakiler gazlı ve elektrikli endüstriyel ocak arızalarında aynı gün yerinde servis. Brülör, termokupl, gaz valfi, rezistans onarımı. İstanbul Avrupa Yakası.",
    short: "Gazlı, elektrikli ve indüksiyonlu endüstriyel ocaklarda brülör, valf, termokupl ve rezistans onarımı.",
    intro: [
      "Restoran, otel ve yemek fabrikası mutfaklarında en yoğun çalışan ekipman ocaktır. Öztiryakiler gazlı ocak, elektrikli ocak ve indüksiyon ocak modellerinde alev sönmesi, düzensiz yanma, gaz kokusu ya da ısınmama gibi sorunlar servisin tamamını durdurabilir. Ekibimiz bu arızalara aynı gün içinde yerinde müdahale eder.",
      "Gaz hattına bağlı cihazlarda güvenlik her şeyden önce gelir. Teknisyenlerimiz brülör, gaz valfi, termokupl ve pilot alev sistemini kontrol eder, sızdırmazlık testini yapmadan cihazı teslim etmez. Elektrikli modellerde rezistans, termostat ve kumanda şalterlerini ölçerek arızanın kaynağını kesin olarak tespit ederiz.",
    ],
    types: [
      "Gazlı ocaklar (2, 4 ve 6 gözlü)",
      "Elektrikli ocaklar (döküm plakalı)",
      "İndüksiyon ocaklar",
      "Wok ocakları",
      "Tabure (kazan) ocakları",
      "Fırınlı ocak kombinasyonları",
    ],
    faults: [
      { title: "Ocak alevi sönüyor", text: "Termokupl veya emniyet ventili arızası en sık nedendir. Termokupl değişimi ve ventil ayarı ile giderilir." },
      { title: "Sarı, isli veya düzensiz alev", text: "Brülör deliklerinin tıkanması ya da yanlış hava-gaz oranı. Brülör temizliği ve hava ayarı yapılır." },
      { title: "Gaz kokusu", text: "Rakor, valf veya hortum bağlantısında kaçak olabilir. Cihazı kapatın, gaz vanasını kesin ve servis çağırın." },
      { title: "Çakmak (ateşleme) çalışmıyor", text: "Piezo ateşleyici, buji veya kablo arızası. Ateşleme seti değiştirilir." },
      { title: "Elektrikli plaka ısınmıyor", text: "Rezistans kopukluğu, kumanda şalteri veya termostat arızası ölçümle tespit edilip onarılır." },
      { title: "Düğme dönmüyor / gaz ayarı tutmuyor", text: "Gaz musluğu (valf) sertleşmiş veya aşınmıştır. Musluk bakımı ya da değişimi yapılır." },
    ],
    work: [
      "Brülör sökümü, temizliği ve hava ayarı",
      "Termokupl, pilot ve emniyet ventili değişimi",
      "Gaz musluğu bakımı ve kaçak testi",
      "Rezistans, termostat ve şalter değişimi",
      "LPG / doğalgaz dönüşümü ve meme değişimi",
      "Izgara ayağı, tencere taşıyıcı ve gövde onarımı",
    ],
    maintenance: [
      "Brülörleri haftada bir sökerek sıcak su ve yağ çözücüyle temizleyin.",
      "Taşan yemek ve yağın brülör deliklerini tıkamasına izin vermeyin.",
      "Gaz hortumlarını yılda bir kontrol ettirin, kullanım ömrü dolanları değiştirin.",
      "Alev rengi sarıya döndüğünde vakit kaybetmeden ayar yaptırın.",
    ],
    faqs: [
      { q: "Öztiryakiler ocağım neden sürekli sönüyor?", a: "En yaygın sebep termokupl arızası ya da termokuplun alevin dışında kalmasıdır. Termokupl uygun konuma getirilir veya değiştirilir; çoğu durumda onarım yerinde aynı gün tamamlanır." },
      { q: "Doğalgaz ocağı LPG'ye dönüştürülebilir mi?", a: "Evet. Meme (enjektör) değişimi ve valf ayarı ile gaz tipi dönüşümü yapılabilir. Dönüşüm sonrası kaçak testi ve alev ayarı mutlaka yapılır." },
      { q: "Ocak tamiri ne kadar sürer?", a: "Termokupl, ateşleme ve brülör temizliği gibi işlemler genellikle 1–2 saatte biter. Parça siparişi gerektiren durumlarda süre önceden bildirilir." },
      { q: "Gaz kokusu geldiğinde ne yapmalıyım?", a: "Ocağı kullanmayı bırakın, ana gaz vanasını kapatın, elektrik anahtarlarına dokunmadan ortamı havalandırın ve servis çağırın. Ciddi kaçaklarda 187 Doğalgaz Acil hattını arayın." },
    ],
    keywords: ["öztiryakiler ocak servisi", "öztiryakiler ocak tamiri", "endüstriyel ocak servisi", "gazlı ocak tamiri", "öztiryakiler termokupl"],
  },
  {
    slug: "oztiryakiler-buzdolabi-servisi",
    name: "Buzdolabı",
    title: "Öztiryakiler Buzdolabı Servisi",
    icon: "buzdolabi",
    metaTitle: "Öztiryakiler Buzdolabı Servisi | Endüstriyel Buzdolabı Tamiri",
    metaDescription:
      "Öztiryakiler dik tip, tezgah tipi ve teşhir buzdolaplarında soğutmama, buzlanma, gaz kaçağı ve kompresör arızalarına aynı gün servis. İstanbul Avrupa Yakası.",
    short: "Dik tip, tezgah tipi ve saladette buzdolaplarında soğutma, kompresör, gaz ve fan arızaları.",
    intro: [
      "Endüstriyel buzdolabındaki bir arıza yalnızca cihazı değil, içindeki tüm ürünü riske atar. Öztiryakiler dik tip buzdolabı, tezgah tipi buzdolabı, saladette ve derin dondurucu modellerinde soğutmama, buzlanma ya da sürekli çalışma sorunlarını hızlıca tespit ediyor, gıda kaybını önlemek için önceliklendiriyoruz.",
      "Teknisyenlerimiz soğutma devresinin tamamını kontrol eder: kompresör, kondenser, evaporatör, fan motorları, termostat ve dijital kontrol kartı. Gaz kaçağı tespiti, kaynak, vakum ve doğru miktarda soğutucu gaz şarjı uygun ekipmanlarla yapılır.",
    ],
    types: [
      "Dik tip endüstriyel buzdolapları (tek ve çift kapılı)",
      "Tezgah tipi buzdolapları",
      "Saladette ve pizza hazırlık tezgahları",
      "Derin dondurucular",
      "Şok soğutucular",
      "Teşhir ve pasta dolapları",
    ],
    faults: [
      { title: "Buzdolabı soğutmuyor", text: "Gaz kaçağı, kompresör arızası, kirli kondenser veya fan motoru arızası olabilir. Basınç ve akım ölçümüyle tespit edilir." },
      { title: "Evaporatör buz tutuyor", text: "Defrost rezistansı, defrost termostatı veya zaman ayarlayıcı arızası. Defrost devresi onarılır." },
      { title: "Kompresör durmadan çalışıyor", text: "Kapı contası kaçağı, termostat hatası ya da az gaz. Conta değişimi ve gaz kontrolü yapılır." },
      { title: "Kapı contası kapatmıyor", text: "Yırtılmış veya sertleşmiş conta soğuk kaybına ve buzlanmaya yol açar. Ölçüye uygun conta takılır." },
      { title: "Dolaptan su akıyor", text: "Drenaj borusu tıkanıklığı veya tahliye tavası sorunu. Hat temizlenir, tava kontrol edilir." },
      { title: "Ekranda hata kodu / sıcaklık yanlış", text: "Sensör (prob) veya kontrol kartı arızası. Prob değişimi veya kart onarımı yapılır." },
    ],
    work: [
      "Gaz kaçağı tespiti, kaynak, vakum ve gaz şarjı",
      "Kompresör ve kondenser fan motoru değişimi",
      "Evaporatör fanı ve defrost rezistansı değişimi",
      "Termostat, prob ve dijital kontrol kartı onarımı",
      "Kapı contası, menteşe ve kilit değişimi",
      "Kondenser temizliği ve periyodik bakım",
    ],
    maintenance: [
      "Kondenser peteğini ayda bir fırça ve vakumla tozdan arındırın.",
      "Dolabı ocak ve fırın gibi ısı kaynaklarının hemen yanına yerleştirmeyin.",
      "Kapı contalarını haftalık silin; yırtık görürseniz değiştirin.",
      "Hava dolaşımı için raflarda ürünleri sık istiflemeyin.",
    ],
    faqs: [
      { q: "Öztiryakiler buzdolabım çalışıyor ama soğutmuyor, sebebi ne?", a: "Genellikle gaz kaçağı, kirli kondenser veya fan motoru arızasıdır. Teknisyenimiz basınç ve sıcaklık ölçümüyle sebebi tespit eder; gaz kaçağıysa kaçak noktası bulunup kaynak yapıldıktan sonra gaz şarjı yapılır." },
      { q: "Buzdolabı gaz dolumu ne kadar sürer?", a: "Kaçak tespiti, onarım, vakum ve şarj dahil işlem genellikle 2–4 saat sürer. Vakum işlemi atlanmaz; aksi halde sistemde nem kalır ve arıza tekrarlar." },
      { q: "Ürünleri kaybetmemek için ne yapmalıyım?", a: "Kapıyı mümkün olduğunca kapalı tutun ve bizi hemen arayın. Soğutma arızalarına öncelik veriyoruz; gerekirse ürünleri başka dolaba aktarmanızı öneririz." },
      { q: "Kompresör değişimi mantıklı mı yoksa yeni dolap mı almalıyım?", a: "Kasa ve soğutma devresi sağlamsa kompresör değişimi çoğu zaman ekonomiktir. Yerinde inceleme sonrası maliyet karşılaştırmasını şeffaf şekilde paylaşırız." },
    ],
    keywords: ["öztiryakiler buzdolabı servisi", "öztiryakiler buzdolabı tamiri", "endüstriyel buzdolabı servisi", "tezgah tipi buzdolabı tamiri", "buzdolabı gaz dolumu"],
  },
  {
    slug: "oztiryakiler-fritoz-servisi",
    name: "Fritöz",
    title: "Öztiryakiler Fritöz Servisi",
    icon: "fritoz",
    metaTitle: "Öztiryakiler Fritöz Servisi | Gazlı & Elektrikli Fritöz Tamiri",
    metaDescription:
      "Öztiryakiler gazlı ve elektrikli fritöz arızalarında yerinde servis. Isıtmama, termostat, emniyet termostatı, rezistans ve brülör onarımı. İstanbul Avrupa Yakası.",
    short: "Gazlı ve elektrikli fritözlerde ısıtmama, aşırı ısınma, termostat ve rezistans arızaları.",
    intro: [
      "Fritöz; fast food, restoran ve otel mutfaklarının servis hızını belirleyen kritik bir ekipmandır. Öztiryakiler elektrikli fritöz ve gazlı fritöz modellerinde yağın ısınmaması, geç ısınması, aşırı ısınıp köpürmesi ya da emniyetin sürekli atması hem verimi düşürür hem de yangın riski doğurur.",
      "Servis ekibimiz rezistans, çalışma termostatı, emniyet (limit) termostatı, kontaktör ve gazlı modellerde brülör ile gaz valfini test eder. Yağ haznesi sızıntılarına kaynak ve tahliye musluğu değişimiyle kalıcı çözüm sunarız.",
    ],
    types: [
      "Elektrikli fritözler (tek ve çift hazneli)",
      "Gazlı fritözler",
      "Tezgah üstü fritözler",
      "Ayaklı / dolaplı fritözler",
      "Basınçlı fritözler",
    ],
    faults: [
      { title: "Fritöz ısıtmıyor", text: "Rezistans, kontaktör veya termostat arızası en yaygın nedendir. Ölçümle tespit edilip ilgili parça değiştirilir." },
      { title: "Emniyet termostatı sürekli atıyor", text: "Çalışma termostatı arızası nedeniyle yağ aşırı ısınıyor olabilir. Termostat kalibrasyonu ya da değişimi yapılır." },
      { title: "Yağ çok geç ısınıyor", text: "Rezistanslardan biri kopmuş veya brülör tıkalı olabilir. Isıtıcı grup kontrol edilir." },
      { title: "Hazneden yağ sızıyor", text: "Tahliye musluğu contası veya hazne kaynağında çatlak. Musluk değişimi ya da paslanmaz kaynak yapılır." },
      { title: "Gazlı fritözde alev sönüyor", text: "Termokupl, pilot alev veya gaz valfi arızası. Ateşleme ve emniyet sistemi onarılır." },
      { title: "Sigorta / kaçak akım rölesi atıyor", text: "Nem almış rezistans veya kablo izolasyon hatası. İzolasyon ölçümü yapılarak arızalı parça değiştirilir." },
    ],
    work: [
      "Rezistans ve rezistans grubu değişimi",
      "Çalışma ve emniyet termostatı değişimi",
      "Kontaktör, şalter ve sinyal lambası değişimi",
      "Gazlı modellerde brülör, termokupl ve valf onarımı",
      "Tahliye musluğu ve hazne kaynak onarımı",
      "Sepet, kapak ve gövde parçaları temini",
    ],
    maintenance: [
      "Yağı düzenli süzün ve kullanım yoğunluğuna göre zamanında değiştirin.",
      "Hazneyi boşaltıp ılık su ve uygun temizleyiciyle kaynatarak temizleyin.",
      "Rezistansları metal aletlerle kazımayın, yüzeylerini çizmeyin.",
      "Hazneyi yağsız iken asla çalıştırmayın.",
    ],
    faqs: [
      { q: "Öztiryakiler fritöz ısıtmıyor, ne yapmalıyım?", a: "Önce sigortayı ve emniyet termostatının reset butonunu kontrol edin. Sorun devam ederse rezistans veya termostat arızası olabilir; teknisyenimiz yerinde ölçüm yaparak arızayı giderir." },
      { q: "Fritöz termostatı değişimi aynı gün yapılır mı?", a: "Yaygın modellerin termostat ve rezistansları araçlarımızda bulunur; bu sayede çoğu onarım aynı gün tamamlanır." },
      { q: "Yağ köpürmesi bir arıza mı?", a: "Çoğunlukla yağın eskimesi veya deterjan kalıntısından kaynaklanır; ancak aşırı ısınma da köpürmeye yol açabilir. Termostat ölçümüyle arıza olup olmadığını netleştiririz." },
      { q: "Gazlı fritöz bakımı ne sıklıkla yapılmalı?", a: "Yoğun kullanımda 6 ayda bir brülör, termokupl ve gaz bağlantılarının kontrol edilmesini öneririz." },
    ],
    keywords: ["öztiryakiler fritöz servisi", "öztiryakiler fritöz tamiri", "endüstriyel fritöz servisi", "fritöz termostat değişimi", "gazlı fritöz tamiri"],
  },
  {
    slug: "oztiryakiler-benmari-servisi",
    name: "Benmari",
    title: "Öztiryakiler Benmari Servisi",
    icon: "benmari",
    metaTitle: "Öztiryakiler Benmari Servisi | Benmari Tamiri ve Bakımı",
    metaDescription:
      "Öztiryakiler benmari ve sıcak teşhir arızalarında yerinde servis. Isıtmama, rezistans, termostat, su sızıntısı ve kireç sorunları. İstanbul Avrupa Yakası.",
    short: "Sulu ve kuru benmarilerde rezistans, termostat, su sızıntısı ve kireçlenme sorunları.",
    intro: [
      "Benmari, pişmiş yemeğin servis boyunca güvenli sıcaklıkta kalmasını sağlar. Öztiryakiler benmari ve self-servis sıcak teşhir ünitelerinde ısınmama, dengesiz ısınma veya su haznesinden sızıntı, yemeklerin hem lezzetini hem de gıda güvenliğini olumsuz etkiler.",
      "Ekibimiz rezistans, termostat, enerji regülatörü, su giriş-çıkış vanaları ve hazne kaynaklarını kontrol eder. Kireçlenmeye bağlı verim kaybında hazne ve ısıtıcı temizliği yaparak cihazınızı ilk günkü performansına döndürürüz.",
    ],
    types: [
      "Sulu benmariler (tezgah üstü ve dolaplı)",
      "Kuru benmariler",
      "Self-servis sıcak teşhir hatları",
      "Sos ve çorba benmarileri",
      "Sıcak dolaplar (bekletme dolabı)",
    ],
    faults: [
      { title: "Benmari ısıtmıyor", text: "Rezistans kopukluğu, termostat veya enerji regülatörü arızası. Ölçüm sonrası ilgili parça değiştirilir." },
      { title: "Dengesiz ısınma", text: "Bölmelerden birinin rezistansı zayıflamış ya da kireçle kaplanmış olabilir. Temizlik ve rezistans kontrolü yapılır." },
      { title: "Haznede su sızıntısı", text: "Tahliye vanası contası veya hazne kaynağında çatlak. Vana değişimi ya da paslanmaz kaynak yapılır." },
      { title: "Su kaynamadan buharlaşıyor / kuru çalışıyor", text: "Su seviyesi yetersiz kalınca rezistans yanabilir. Seviye kontrolü ve gerekiyorsa koruma termostatı eklenir." },
      { title: "Kaçak akım rölesi atıyor", text: "Nem almış rezistans veya bağlantı sorunu. İzolasyon testi yapılarak arızalı bölüm onarılır." },
    ],
    work: [
      "Rezistans ve termostat değişimi",
      "Enerji regülatörü ve şalter değişimi",
      "Su tahliye vanası ve conta değişimi",
      "Paslanmaz hazne kaynağı ve onarımı",
      "Kireç temizliği ve bakım",
      "Lamba, cam ve aksesuar temini",
    ],
    maintenance: [
      "Sulu benmaride her gün suyu değiştirin, mümkünse yumuşatılmış su kullanın.",
      "Haznede kireç oluştuğunda uygun kireç çözücüyle temizleyin.",
      "Hazneyi susuz şekilde asla çalıştırmayın.",
      "Gün sonunda tahliye vanasını açarak hazneyi tamamen boşaltın.",
    ],
    faqs: [
      { q: "Öztiryakiler benmari neden ısıtmıyor?", a: "Rezistans, termostat veya enerji regülatörü arızası en yaygın sebeplerdir. Susuz çalıştırma da rezistansı yakabilir. Yerinde ölçümle sorunlu parçayı tespit edip değiştiriyoruz." },
      { q: "Benmari haznesindeki sızıntı onarılabilir mi?", a: "Evet. Sızıntı vanadan geliyorsa vana veya conta değişir; hazne çatlamışsa paslanmaz çeliğe uygun kaynakla onarılır." },
      { q: "Kireç benmariye zarar verir mi?", a: "Kireç, rezistansın ısısını suya aktarmasını zorlaştırır; bu da enerji tüketimini artırır ve rezistans ömrünü kısaltır. Düzenli kireç temizliği önerilir." },
    ],
    keywords: ["öztiryakiler benmari servisi", "öztiryakiler benmari tamiri", "benmari rezistans değişimi", "endüstriyel benmari servisi"],
  },
  {
    slug: "oztiryakiler-firin-servisi",
    name: "Fırın",
    title: "Öztiryakiler Fırın Servisi",
    icon: "firin",
    metaTitle: "Öztiryakiler Fırın Servisi | Konveksiyonel & Kombi Fırın Tamiri",
    metaDescription:
      "Öztiryakiler konveksiyonel, kombi (buharlı) ve pastane fırınlarında yerinde servis. Fan motoru, rezistans, buhar jeneratörü, kart arızaları. İstanbul Avrupa Yakası.",
    short: "Konveksiyonel, kombi buharlı ve katlı fırınlarda fan motoru, rezistans, kart ve buhar arızaları.",
    intro: [
      "Endüstriyel fırınlar; pişirme kalitesini, menü çeşitliliğini ve mutfak verimini doğrudan belirler. Öztiryakiler konveksiyonel fırın, kombi (buharlı) fırın ve katlı pastane fırını modellerinde ısınmama, dengesiz pişirme, fanın dönmemesi ya da buhar üretmeme gibi sorunlara uzman çözüm sunuyoruz.",
      "Teknisyenlerimiz fan motoru, rezistanslar, gazlı modellerde brülör ve ateşleme sistemi, buhar jeneratörü, sensörler ve elektronik kontrol kartını test eder. Kart arızalarında mümkünse onarım, gerekmiyorsa değişim yoluna gideriz; böylece gereksiz maliyetten kaçınırsınız.",
    ],
    types: [
      "Konveksiyonel fırınlar (elektrikli ve gazlı)",
      "Kombi buharlı fırınlar",
      "Katlı pastane ve unlu mamul fırınları",
      "Ocak altı fırınlar",
      "Döner raflı fırınlar",
    ],
    faults: [
      { title: "Fırın ısıtmıyor", text: "Rezistans, kontaktör, termostat ya da gazlı modelde ateşleme arızası. Ölçümle sebep tespit edilir." },
      { title: "Fan dönmüyor veya ses yapıyor", text: "Fan motoru rulmanı, kondansatör veya motor sargısı arızası. Motor onarılır ya da değiştirilir." },
      { title: "Ürünler dengesiz pişiyor", text: "Fanın yavaş dönmesi, rezistans zayıflaması ya da kapı contası kaçağı. İlgili parçalar yenilenir." },
      { title: "Buhar üretmiyor (kombi fırın)", text: "Buhar jeneratörü kireçlenmesi, solenoid valf veya seviye sensörü arızası. Kireç sökümü ve parça değişimi yapılır." },
      { title: "Ekranda hata kodu", text: "Sensör, prob veya elektronik kart arızası. Hata kodu analiz edilerek doğru parça müdahalesi yapılır." },
      { title: "Kapıdan ısı / buhar kaçağı", text: "Kapı contası yıpranmış veya menteşe ayarı bozulmuş. Conta değişimi ve kapı ayarı yapılır." },
    ],
    work: [
      "Fan motoru ve kondansatör değişimi",
      "Rezistans ve termostat değişimi",
      "Buhar jeneratörü kireç sökümü ve solenoid valf değişimi",
      "Elektronik kontrol kartı onarımı ve değişimi",
      "Gazlı modellerde brülör, ateşleme ve valf onarımı",
      "Kapı contası, cam, menteşe ve lamba değişimi",
    ],
    maintenance: [
      "Fırın iç hazneyi gün sonunda soğuduktan sonra temizleyin.",
      "Kombi fırınlarda su yumuşatma filtresi kullanın ve düzenli kireç sökümü yaptırın.",
      "Fan kapağının arkasında biriken yağı periyodik olarak temizletin.",
      "Kapı contasının hasarsız olduğunu düzenli kontrol edin.",
    ],
    faqs: [
      { q: "Öztiryakiler fırının fanı dönmüyor, tamir edilir mi?", a: "Evet. Sorun çoğunlukla fan motoru rulmanı veya kondansatördür. Motor test edilir, onarılabilir durumdaysa onarılır; değilse uyumlu motor takılır." },
      { q: "Kombi fırın buhar yapmıyor, sebebi nedir?", a: "En yaygın neden buhar jeneratöründe biriken kireçtir. Solenoid valf veya seviye sensörü arızası da buhar üretimini durdurur. Kireç sökümü ve parça kontrolü ile çözülür." },
      { q: "Fırın elektronik kartı onarılabilir mi?", a: "Birçok kart arızası komponent seviyesinde onarılabilir. Onarım mümkün değilse uyumlu kart değişimi için fiyatı önceden bildiririz." },
      { q: "Fırın bakımı yılda kaç kez yapılmalı?", a: "Yoğun kullanılan konveksiyonel ve kombi fırınlarda yılda en az iki kez periyodik bakım önerilir." },
    ],
    keywords: ["öztiryakiler fırın servisi", "öztiryakiler fırın tamiri", "konveksiyonel fırın servisi", "kombi fırın tamiri", "endüstriyel fırın servisi"],
  },
  {
    slug: "oztiryakiler-pizza-firin-servisi",
    name: "Pizza Fırını",
    title: "Öztiryakiler Pizza Fırın Servisi",
    icon: "pizza",
    metaTitle: "Öztiryakiler Pizza Fırın Servisi | Pizza Fırını Tamiri",
    metaDescription:
      "Öztiryakiler elektrikli, gazlı ve konveyörlü pizza fırınlarında yerinde servis. Taban taşı, rezistans, termostat, brülör ve konveyör arızaları. İstanbul Avrupa Yakası.",
    short: "Elektrikli, gazlı ve konveyörlü pizza fırınlarında taban, rezistans, termostat ve brülör arızaları.",
    intro: [
      "Pizza fırınındaki küçük bir sıcaklık sapması bile hamurun pişmesini, tabanın çıtırlığını ve servis süresini etkiler. Öztiryakiler elektrikli pizza fırını, gazlı pizza fırını ve konveyörlü pizza fırını modellerinde ısınma, sıcaklık dengesizliği ve konveyör sorunlarını hızla gideriyoruz.",
      "Alt ve üst rezistanslar, termostatlar, ateşleme ve gaz valfi, refrakter taban taşı ile konveyör motoru ve hız kontrol ünitesi ekibimizin kontrol listesinde yer alır. Çatlak taban taşlarını uygun ölçüde yenisiyle değiştiririz.",
    ],
    types: [
      "Elektrikli katlı pizza fırınları",
      "Gazlı pizza fırınları",
      "Konveyörlü (bantlı) pizza fırınları",
      "Taş tabanlı pide ve lahmacun fırınları",
    ],
    faults: [
      { title: "Fırın istenen sıcaklığa çıkmıyor", text: "Alt veya üst rezistans kopukluğu, termostat ya da kontaktör arızası. Ölçümle tespit edilir." },
      { title: "Alt pişiyor, üst pişmiyor (veya tersi)", text: "Bölgelerden birinin rezistansı veya termostatı arızalı. İlgili ısıtıcı grubu yenilenir." },
      { title: "Taban taşı çatladı", text: "Termal şok veya darbe sonucu oluşur. Ölçüye uygun refrakter taş ile değiştirilir." },
      { title: "Konveyör bant durdu / hız değişiyor", text: "Konveyör motoru, dişli veya hız kontrol kartı arızası. Motor ve sürücü onarılır." },
      { title: "Gazlı fırında ateşleme sorunu", text: "Ateşleme elektrodu, termokupl veya gaz valfi arızası. Ateşleme sistemi yenilenir." },
    ],
    work: [
      "Alt / üst rezistans ve termostat değişimi",
      "Refrakter taban taşı değişimi",
      "Konveyör motoru, zincir ve hız kontrol onarımı",
      "Gazlı modellerde brülör, ateşleme ve valf bakımı",
      "Kapı yayı, menteşe, cam ve lamba değişimi",
      "Termometre ve kontrol paneli onarımı",
    ],
    maintenance: [
      "Taban taşını ıslak bezle silmeyin; soğuk su termal şok ile çatlatabilir.",
      "Taşı fırın sıcakken pirinç fırça ile temizleyin.",
      "Fırını kademeli ısıtın, ani sıcaklık değişimlerinden kaçının.",
      "Konveyörlü fırınlarda bant ve zinciri düzenli temizletin.",
    ],
    faqs: [
      { q: "Öztiryakiler pizza fırını taban taşı değişir mi?", a: "Evet. Fırınınızın iç ölçüsüne uygun refrakter taban taşı temin edilip yerinde değiştirilir." },
      { q: "Pizza fırını neden dengesiz pişiriyor?", a: "Genellikle alt veya üst bölgedeki rezistanslardan biri zayıflamış ya da termostat sapma yapıyordur. Bölgesel ölçümle tespit edip onarıyoruz." },
      { q: "Konveyörlü pizza fırını tamiri yapıyor musunuz?", a: "Evet. Konveyör motoru, zincir, hız kontrol ünitesi ve ısıtma grubu dahil tüm onarımları yapıyoruz." },
    ],
    keywords: ["öztiryakiler pizza fırın servisi", "öztiryakiler pizza fırını tamiri", "pizza fırını servisi", "pizza fırını taban taşı", "konveyörlü pizza fırını tamiri"],
  },
  {
    slug: "oztiryakiler-makarna-haslama-servisi",
    name: "Makarna Haşlama",
    title: "Öztiryakiler Makarna Haşlama Servisi",
    icon: "makarna",
    metaTitle: "Öztiryakiler Makarna Haşlama Servisi | Makarna Pişirici Tamiri",
    metaDescription:
      "Öztiryakiler makarna haşlama (makarna pişirici) cihazlarında yerinde servis. Isıtmama, su girişi, taşma, rezistans ve brülör arızaları. İstanbul Avrupa Yakası.",
    short: "Elektrikli ve gazlı makarna pişiricilerde ısıtma, su girişi, tahliye ve taşma sorunları.",
    intro: [
      "İtalyan restoranları, oteller ve toplu yemek mutfakları için makarna haşlama cihazı, servisin ritmini belirler. Öztiryakiler makarna pişirici modellerinde suyun kaynamaması, su girişinin durması veya hazneden taşma, yoğun saatlerde ciddi gecikmelere yol açar.",
      "Ekibimiz rezistans veya brülör grubunu, su giriş solenoid valfini, tahliye vanasını, taşma kanalını ve termostatları kontrol eder. Kireçlenen hazne ve ısıtıcıları temizleyerek kaynama süresini yeniden kısaltırız.",
    ],
    types: [
      "Elektrikli makarna haşlama cihazları",
      "Gazlı makarna haşlama cihazları",
      "Tezgah üstü ve ayaklı modeller",
      "Tek ve çift hazneli modeller",
    ],
    faults: [
      { title: "Su kaynamıyor / geç kaynıyor", text: "Rezistans zayıflaması, kireçlenme veya brülör tıkanması. Temizlik ve ısıtıcı kontrolü yapılır." },
      { title: "Su girişi yok", text: "Su giriş solenoid valfi veya musluk arızası. Valf değişimi ile giderilir." },
      { title: "Hazneden su taşıyor", text: "Taşma kanalı tıkalı veya su giriş valfi kapanmıyor. Kanal temizlenir, valf değiştirilir." },
      { title: "Tahliye vanası sızdırıyor", text: "Vana contası aşınmış. Conta ya da vana değişimi yapılır." },
      { title: "Gazlı modelde alev sönüyor", text: "Termokupl veya emniyet ventili arızası. Emniyet sistemi onarılır." },
    ],
    work: [
      "Rezistans ve termostat değişimi",
      "Su giriş solenoid valfi değişimi",
      "Tahliye vanası ve conta yenileme",
      "Brülör, termokupl ve gaz valfi onarımı",
      "Hazne kireç temizliği",
      "Sepet ve aksesuar temini",
    ],
    maintenance: [
      "Haznedeki nişastalı suyu her gün boşaltın ve hazneyi durulayın.",
      "Taşma kanalını tıkanmaya karşı düzenli kontrol edin.",
      "Kireçli bölgelerde yumuşatılmış su kullanın.",
      "Hazneyi susuz çalıştırmayın.",
    ],
    faqs: [
      { q: "Öztiryakiler makarna haşlama cihazı neden geç kaynıyor?", a: "En sık sebep kireçlenme ve zayıflamış rezistanstır. Hazne temizliği ve rezistans ölçümü ile sorun giderilir." },
      { q: "Su girişi olmuyor, ne yapmalıyım?", a: "Ana su vanasının açık olduğunu kontrol edin. Su geliyor ancak cihaza girmiyorsa solenoid valf arızası olabilir; yerinde değiştiriyoruz." },
      { q: "Gazlı makarna pişirici bakımı yapıyor musunuz?", a: "Evet. Brülör temizliği, termokupl kontrolü ve gaz kaçak testi dahil periyodik bakım hizmeti veriyoruz." },
    ],
    keywords: ["öztiryakiler makarna haşlama servisi", "öztiryakiler makarna pişirici tamiri", "makarna haşlama cihazı servisi", "makarna haşlama tamiri"],
  },
  {
    slug: "oztiryakiler-izgara-servisi",
    name: "Izgara",
    title: "Öztiryakiler Izgara Servisi",
    icon: "izgara",
    metaTitle: "Öztiryakiler Izgara Servisi | Gazlı, Elektrikli & Lav Taşlı Izgara Tamiri",
    metaDescription:
      "Öztiryakiler lav taşlı, gazlı, elektrikli ızgara ve kontakt ızgaralarda yerinde servis. Brülör, rezistans, termostat ve ateşleme arızaları. İstanbul Avrupa Yakası.",
    short: "Lav taşlı, gazlı, elektrikli, düz ve kontakt ızgaralarda brülör, rezistans ve termostat onarımı.",
    intro: [
      "Kebapçı, steakhouse, burger ve kafe mutfaklarında ızgara, ürünün karakterini belirleyen ekipmandır. Öztiryakiler lav taşlı ızgara, gazlı ızgara, elektrikli ızgara, düz (plaka) ızgara ve kontakt ızgara modellerinde ısınmama, dengesiz ısı dağılımı ve ateşleme sorunlarını yerinde onarıyoruz.",
      "Gazlı modellerde brülör, gaz valfi, termokupl ve ateşleme sistemini; elektrikli modellerde ise rezistans, termostat ve enerji regülatörünü test ederiz. Yıpranan ızgara telleri, lav taşları ve yağ tahliye kanalları için yedek parça desteği sunarız.",
    ],
    types: [
      "Lav taşlı ızgaralar",
      "Gazlı ızgaralar",
      "Elektrikli ızgaralar",
      "Düz ve oluklu plaka ızgaralar",
      "Kontakt (tost / panini) ızgaralar",
      "Salamander ızgaralar",
    ],
    faults: [
      { title: "Izgara yeterince ısınmıyor", text: "Tıkalı brülör, zayıf rezistans veya termostat arızası. Isıtıcı grup temizlenir ya da değiştirilir." },
      { title: "Plakanın bir bölümü soğuk kalıyor", text: "Bölgesel rezistans kopukluğu veya brülör tıkanıklığı. Bölge bazlı ölçümle onarılır." },
      { title: "Gazlı ızgarada alev sönüyor", text: "Termokupl, pilot veya emniyet ventili arızası. Emniyet sistemi yenilenir." },
      { title: "Lav taşları dağıldı / alev patlaması yapıyor", text: "Yağ doymuş veya kırılmış lav taşları yenilenir, brülör ayarı yapılır." },
      { title: "Kontakt ızgara üst kapak ısıtmıyor", text: "Üst rezistans veya bağlantı kablosu arızası. Rezistans ve kablo değişimi yapılır." },
    ],
    work: [
      "Brülör temizliği, ayarı ve değişimi",
      "Termokupl, pilot ve gaz valfi onarımı",
      "Rezistans, termostat ve regülatör değişimi",
      "Lav taşı ve ızgara teli yenileme",
      "Yağ tahliye kanalı ve çekmece onarımı",
      "Kontakt ızgara menteşe ve yay değişimi",
    ],
    maintenance: [
      "Izgara tellerini her gün sıcakken fırçalayın.",
      "Yağ toplama çekmecesini düzenli boşaltın; yangın riskini azaltır.",
      "Lav taşlarını yağa doyduğunda ters çevirin veya yenileyin.",
      "Brülör deliklerinin tıkanmamasına dikkat edin.",
    ],
    faqs: [
      { q: "Öztiryakiler lav taşlı ızgara servisi veriyor musunuz?", a: "Evet. Brülör bakımı, lav taşı yenileme, termokupl ve gaz valfi onarımı dahil tüm servis işlemlerini yapıyoruz." },
      { q: "Izgara plakası neden her yerde aynı ısıyı vermiyor?", a: "Elektrikli modellerde bir rezistans grubu, gazlı modellerde bir brülör hattı arızalı olabilir. Bölgesel kontrolle tespit edilip onarılır." },
      { q: "Kontakt ızgara tamiri yapıyor musunuz?", a: "Evet. Üst ve alt rezistans, termostat, menteşe ve kablo değişimi dahil onarım yapıyoruz." },
    ],
    keywords: ["öztiryakiler ızgara servisi", "öztiryakiler ızgara tamiri", "lav taşlı ızgara servisi", "gazlı ızgara tamiri", "endüstriyel ızgara servisi"],
  },
  {
    slug: "oztiryakiler-bulasik-makinesi-servisi",
    name: "Bulaşık Makinesi",
    title: "Öztiryakiler Bulaşık Makinesi Servisi",
    icon: "bulasik",
    metaTitle: "Öztiryakiler Bulaşık Makinesi Servisi | Endüstriyel Bulaşık Makinesi Tamiri",
    metaDescription:
      "Öztiryakiler tezgah altı, giyotin (kapaklı) ve konveyörlü bulaşık makinelerinde yerinde servis. Pompa, rezistans, boyler, dozaj ve su arızaları. İstanbul Avrupa Yakası.",
    short: "Tezgah altı, giyotin ve konveyörlü bulaşık makinelerinde pompa, boyler, rezistans ve dozaj arızaları.",
    intro: [
      "Endüstriyel bulaşık makinesi durduğunda mutfak dakikalar içinde tıkanır. Öztiryakiler tezgah altı bulaşık makinesi, giyotin (kapaklı) bulaşık makinesi, bardak yıkama ve konveyörlü modellerde yıkamama, ısıtmama, su almama ya da su boşaltmama sorunlarını hızla çözüyoruz.",
      "Teknisyenlerimiz yıkama pompası, durulama pompası, boyler ve tank rezistansları, seviye presostatı, su giriş valfi, deterjan ve parlatıcı dozaj pompalarını kontrol eder. Kireçlenmeye bağlı arızalarda boyler ve kollar dahil tam kireç sökümü yapılır.",
    ],
    types: [
      "Tezgah altı bulaşık makineleri",
      "Giyotin (kapaklı) bulaşık makineleri",
      "Bardak yıkama makineleri",
      "Konveyörlü (tünel) bulaşık makineleri",
      "Kazan ve tepsi yıkama makineleri",
    ],
    faults: [
      { title: "Bulaşıklar temiz çıkmıyor", text: "Tıkalı yıkama kolları, zayıf pompa, düşük su sıcaklığı veya dozaj sorunu. Kol temizliği ve pompa kontrolü yapılır." },
      { title: "Su ısınmıyor", text: "Boyler veya tank rezistansı, termostat ya da kontaktör arızası. Rezistans ve termostat değiştirilir." },
      { title: "Makine su almıyor", text: "Su giriş solenoid valfi, filtresi veya seviye presostatı arızası. Valf ve presostat yenilenir." },
      { title: "Su boşaltmıyor", text: "Tahliye pompası arızası veya tahliye hattında tıkanma. Pompa ve hat onarılır." },
      { title: "Deterjan / parlatıcı çekmiyor", text: "Dozaj pompası hortumu çatlamış veya pompa arızalı. Dozaj pompası onarılır." },
      { title: "Bardaklarda leke ve beyazlık", text: "Kireçli su, parlatıcı ayarı veya durulama sıcaklığı sorunu. Yumuşatıcı ve dozaj ayarı yapılır." },
    ],
    work: [
      "Yıkama ve durulama pompası değişimi",
      "Boyler ve tank rezistansı değişimi",
      "Su giriş valfi ve seviye presostatı değişimi",
      "Deterjan ve parlatıcı dozaj pompası onarımı",
      "Tahliye pompası ve hat onarımı",
      "Kireç sökümü ve su yumuşatma sistemi kurulumu",
    ],
    maintenance: [
      "Tank filtrelerini her vardiya sonunda temizleyin.",
      "Yıkama ve durulama kollarını haftada bir söküp delikleri açın.",
      "Gün sonunda tankı boşaltıp kapağı açık bırakarak kurumasını sağlayın.",
      "Kireçli suya karşı mutlaka su yumuşatma cihazı kullanın.",
    ],
    faqs: [
      { q: "Öztiryakiler bulaşık makinesi suyu ısıtmıyor, sebebi ne?", a: "Boyler veya tank rezistansı, termostat ya da kontaktör arızası olabilir. Kireçlenme de rezistansın yanmasına yol açar. Ölçümle tespit edip yerinde değiştiriyoruz." },
      { q: "Endüstriyel bulaşık makinesinde kireç sorunu nasıl çözülür?", a: "Boyler ve tanka kireç sökümü yapılır, ardından su yumuşatma cihazı kurulumu önerilir. Yumuşatıcı olmadan kireç kısa sürede yeniden birikir." },
      { q: "Konveyörlü bulaşık makinesi servisi veriyor musunuz?", a: "Evet. Konveyör tahrik sistemi, perdeler, pompalar ve ısıtma grupları dahil tünel tipi makinelerin servisini yapıyoruz." },
      { q: "Deterjan dozaj pompası ayarı yapıyor musunuz?", a: "Evet. Dozaj pompası onarımı ve su sertliğine göre deterjan / parlatıcı miktarının ayarlanması hizmetimiz kapsamındadır." },
    ],
    keywords: ["öztiryakiler bulaşık makinesi servisi", "öztiryakiler bulaşık makinesi tamiri", "endüstriyel bulaşık makinesi servisi", "giyotin bulaşık makinesi tamiri", "tezgah altı bulaşık makinesi servisi"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
