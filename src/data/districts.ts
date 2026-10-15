export type District = {
  slug: string;
  name: string;
  /** Hizmet verilen başlıca mahalle ve semtler */
  areas: string[];
  /** İlçenin işletme profili – yerel içerik için */
  profile: string;
  /** Komşu ilçeler (slug) – iç linkleme için */
  near: string[];
};

export const districts: District[] = [
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    areas: ["Hadımköy", "Bolluca", "Taşoluk", "Haraççı", "Boğazköy İstiklal", "Deliklikaya", "Mareşal Fevzi Çakmak"],
    profile: "Hadımköy sanayi bölgesindeki fabrika yemekhaneleri, catering firmaları ve hızla büyüyen yerleşim alanlarındaki restoranlar",
    near: ["basaksehir", "esenyurt", "eyupsultan", "sultangazi", "catalca"],
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    areas: ["Ambarlı", "Denizköşkler", "Cihangir", "Firuzköy", "Gümüşpala", "Merkez", "Üniversite", "Yeşilkent", "Tahtakale"],
    profile: "üniversite çevresindeki kafe ve fast food işletmeleri, sahil hattındaki restoranlar ve Ambarlı liman bölgesindeki yemekhaneler",
    near: ["kucukcekmece", "esenyurt", "beylikduzu"],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    areas: ["Güneşli", "Mahmutbey", "Kirazlı", "Yenimahalle", "Demirkapı", "Evren", "Göztepe", "Bağlar", "Yıldıztepe"],
    profile: "Güneşli ve Mahmutbey'deki plaza ve sanayi yemekhaneleri, toplu yemek üreticileri ve yoğun cadde restoranları",
    near: ["bahcelievler", "esenler", "gungoren", "kucukcekmece", "basaksehir"],
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    areas: ["Yenibosna", "Şirinevler", "Bahçelievler Merkez", "Siyavuşpaşa", "Kocasinan", "Soğanlı", "Çobançeşme", "Zafer", "Cumhuriyet"],
    profile: "Yenibosna'daki otel ve iş merkezleri, Şirinevler meydanındaki restoran, pastane ve fast food işletmeleri",
    near: ["bakirkoy", "bagcilar", "gungoren", "kucukcekmece"],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    areas: ["Ataköy", "Yeşilköy", "Florya", "Yeşilyurt", "Zeytinlik", "Kartaltepe", "Osmaniye", "Cevizlik", "Şenlikköy"],
    profile: "Ataköy ve Yeşilköy'deki oteller, AVM yemek katları, sahil restoranları ve hastane mutfakları",
    near: ["zeytinburnu", "bahcelievler", "kucukcekmece", "gungoren"],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    areas: ["Kayabaşı", "Bahçeşehir", "Başak", "Ziya Gökalp", "Altınşehir", "Güvercintepe", "Şamlar", "İkitelli OSB"],
    profile: "İkitelli Organize Sanayi Bölgesi'ndeki fabrika yemekhaneleri, şehir hastanesi çevresi ve Bahçeşehir'deki restoran ve kafeler",
    near: ["kucukcekmece", "arnavutkoy", "esenyurt", "bagcilar", "sultangazi"],
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    areas: ["Altıntepsi", "Kartaltepe", "Yenidoğan", "Kocatepe", "Muratpaşa", "Yıldırım", "İsmetpaşa", "Cevatpaşa", "Terazidere"],
    profile: "hal ve otogar çevresindeki lokantalar, AVM yemek katları ve toplu yemek hazırlayan mutfaklar",
    near: ["esenler", "eyupsultan", "gaziosmanpasa", "zeytinburnu", "fatih"],
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    areas: ["Levent", "Etiler", "Ortaköy", "Bebek", "Ulus", "Gayrettepe", "Dikilitaş", "Sinanpaşa", "Vişnezade"],
    profile: "Levent ve Etiler'deki fine dining restoranlar, Ortaköy ve Bebek sahilindeki kafeler, oteller ve plaza mutfakları",
    near: ["sisli", "sariyer", "beyoglu", "kagithane"],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    areas: ["Adnan Kahveci", "Barış", "Büyükşehir", "Cumhuriyet", "Kavaklı", "Yakuplu", "Gürpınar", "Marmara", "Dereağzı"],
    profile: "AVM'ler, Yakuplu sanayi bölgesindeki yemekhaneler ve sahil şeridindeki restoran ve kafeler",
    near: ["esenyurt", "buyukcekmece", "avcilar"],
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    areas: ["Taksim", "Cihangir", "Karaköy", "Galata", "Asmalımescit", "Kasımpaşa", "Tarlabaşı", "Sütlüce", "Hasköy"],
    profile: "Taksim ve İstiklal çevresindeki oteller, Karaköy ve Galata'daki restoranlar, barlar ve yoğun turistik işletmeler",
    near: ["sisli", "besiktas", "fatih", "kagithane"],
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    areas: ["Mimarsinan", "Kumburgaz", "Celaliye", "Alkent", "Kamiloba", "Dizdariye", "Pınartepe", "Tepecik", "Fatih"],
    profile: "sahil boyundaki balık restoranları, düğün salonları, yazlık bölge işletmeleri ve otel mutfakları",
    near: ["beylikduzu", "esenyurt", "silivri", "catalca"],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    areas: ["Ferhatpaşa", "Kaleiçi", "Muratbey", "Elbasan", "Binkılıç", "Karacaköy", "Kestanelik"],
    profile: "et ve süt ürünleri işletmeleri, yol üstü restoranlar, organizasyon tesisleri ve fabrika yemekhaneleri",
    near: ["buyukcekmece", "arnavutkoy", "silivri"],
  },
  {
    slug: "esenler",
    name: "Esenler",
    areas: ["Atışalanı", "Çiftehavuzlar", "Davutpaşa", "Havaalanı", "Kemer", "Menderes", "Namık Kemal", "Oruçreis", "Turgutreis"],
    profile: "otogar ve Davutpaşa çevresindeki lokantalar, kebapçılar, fırınlar ve sanayi yemekhaneleri",
    near: ["bagcilar", "bayrampasa", "gungoren", "sultangazi", "gaziosmanpasa"],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    areas: ["Kıraç", "Akçaburgaz", "Pınar", "Yenikent", "Cumhuriyet", "Örnek", "Mehterçeşme", "Turgut Özal", "Fatih"],
    profile: "Akçaburgaz sanayi bölgesindeki yemekhaneler, toplu yemek firmaları ve yoğun nüfuslu bölgedeki restoran ve pastaneler",
    near: ["beylikduzu", "avcilar", "basaksehir", "buyukcekmece", "arnavutkoy"],
  },
  {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    areas: ["Alibeyköy", "Göktürk", "Kemerburgaz", "Rami", "Topçular", "Akşemsettin", "Silahtarağa", "Nişancı", "Emniyettepe"],
    profile: "Göktürk ve Kemerburgaz'daki restoran ve kafeler, Eyüp Sultan çevresindeki lokantalar ve Alibeyköy'deki toplu yemek mutfakları",
    near: ["gaziosmanpasa", "bayrampasa", "kagithane", "sariyer", "sultangazi"],
  },
  {
    slug: "fatih",
    name: "Fatih",
    areas: ["Sultanahmet", "Aksaray", "Laleli", "Eminönü", "Balat", "Fener", "Vefa", "Kumkapı", "Çapa"],
    profile: "Sultanahmet ve Laleli'deki oteller, Kumkapı meyhaneleri, Eminönü esnaf lokantaları ve hastane mutfakları",
    near: ["beyoglu", "zeytinburnu", "bayrampasa", "eyupsultan"],
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    areas: ["Karadeniz", "Yıldıztabya", "Bağlarbaşı", "Merkez", "Sarıgöl", "Karayolları", "Küçükköy", "Mevlana", "Pazariçi"],
    profile: "cadde boyundaki lokantalar, pide ve kebap salonları, pastaneler ve okul yemekhaneleri",
    near: ["bayrampasa", "esenler", "sultangazi", "eyupsultan"],
  },
  {
    slug: "gungoren",
    name: "Güngören",
    areas: ["Merter", "Haznedar", "Gençosman", "Tozkoparan", "Güneştepe", "Sanayi", "Akıncılar", "Mareşal Çakmak"],
    profile: "Merter tekstil bölgesindeki iş yeri yemekhaneleri, otel mutfakları ve esnaf lokantaları",
    near: ["bagcilar", "bahcelievler", "esenler", "zeytinburnu", "bakirkoy"],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    areas: ["Seyrantepe", "Çağlayan", "Gültepe", "Sanayi", "Hamidiye", "Talatpaşa", "Nurtepe", "Gürsel", "Emniyetevleri"],
    profile: "yeni ofis projelerindeki kurumsal mutfaklar, Çağlayan çevresindeki lokantalar ve restoran zincirleri",
    near: ["sisli", "besiktas", "eyupsultan", "sariyer", "beyoglu"],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    areas: ["Halkalı", "Sefaköy", "Atakent", "Cennet", "Kanarya", "Tevfikbey", "İnönü", "Sultanmurat", "Yarımburgaz"],
    profile: "Halkalı ve Sefaköy'deki restoranlar, göl çevresindeki işletmeler, hastane ve fabrika yemekhaneleri",
    near: ["bakirkoy", "avcilar", "basaksehir", "bagcilar", "bahcelievler"],
  },
  {
    slug: "sariyer",
    name: "Sarıyer",
    areas: ["Maslak", "İstinye", "Tarabya", "Yeniköy", "Emirgan", "Rumelihisarı", "Ayazağa", "Zekeriyaköy", "Rumeli Kavağı"],
    profile: "Maslak plazalarındaki kurumsal mutfaklar, İstinye ve Tarabya'daki oteller, Boğaz hattındaki balık restoranları",
    near: ["besiktas", "sisli", "kagithane", "eyupsultan"],
  },
  {
    slug: "silivri",
    name: "Silivri",
    areas: ["Selimpaşa", "Değirmenköy", "Gümüşyaka", "Kavaklı", "Ortaköy", "Alibey", "Mimar Sinan", "Piri Mehmet Paşa", "Cumhuriyet"],
    profile: "sahil restoranları, köfteciler, düğün ve organizasyon salonları ile kurum yemekhaneleri",
    near: ["buyukcekmece", "catalca"],
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    areas: ["Cebeci", "Habibler", "Uğur Mumcu", "Esentepe", "50. Yıl", "İsmetpaşa", "Zübeyde Hanım", "Gazi", "Malkoçoğlu"],
    profile: "mahalle lokantaları, pide ve kebap salonları, unlu mamul fırınları ve okul yemekhaneleri",
    near: ["gaziosmanpasa", "esenler", "basaksehir", "eyupsultan", "arnavutkoy"],
  },
  {
    slug: "sisli",
    name: "Şişli",
    areas: ["Mecidiyeköy", "Nişantaşı", "Esentepe", "Fulya", "Bomonti", "Kurtuluş", "Feriköy", "Harbiye", "Pangaltı"],
    profile: "Mecidiyeköy ve Esentepe'deki plaza mutfakları, Nişantaşı restoranları, Harbiye'deki oteller ve hastane mutfakları",
    near: ["besiktas", "beyoglu", "kagithane", "sariyer"],
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    areas: ["Merkezefendi", "Kazlıçeşme", "Beştelsiz", "Seyitnizam", "Telsiz", "Sümer", "Nuripaşa", "Veliefendi", "Yeşiltepe"],
    profile: "Kazlıçeşme ve sahil hattındaki oteller, tekstil atölyesi yemekhaneleri ve AVM yemek katları",
    near: ["bakirkoy", "fatih", "gungoren", "bayrampasa"],
  },
];

export const getDistrict = (slug: string) => districts.find((d) => d.slug === slug);

/** İlçe sayfası URL eki: /servis-bolgeleri/esenler-oztiryakiler-servisi */
export const DISTRICT_SUFFIX = "-oztiryakiler-servisi";
export const districtPath = (d: District) => `/servis-bolgeleri/${d.slug}${DISTRICT_SUFFIX}`;
export const getDistrictByPageSlug = (pageSlug: string) =>
  pageSlug.endsWith(DISTRICT_SUFFIX) ? getDistrict(pageSlug.slice(0, -DISTRICT_SUFFIX.length)) : undefined;
