/** Türkçe ek yardımcıları (bulunma hâli: -da/-de/-ta/-te) */
const BACK = "aıou";
const FRONT = "eiöü";
const HARD = "fstkçşhp";

const OVERRIDES: Record<string, string> = {
  Beyoğlu: "Beyoğlu'nda",
  Zeytinburnu: "Zeytinburnu'nda",
};

export function locative(name: string): string {
  if (OVERRIDES[name]) return OVERRIDES[name];
  const lower = name.toLocaleLowerCase("tr-TR");
  let vowel = "e";
  for (let i = lower.length - 1; i >= 0; i--) {
    const c = lower[i];
    if (BACK.includes(c)) { vowel = "a"; break; }
    if (FRONT.includes(c)) { vowel = "e"; break; }
  }
  const last = lower[lower.length - 1];
  const cons = HARD.includes(last) ? "t" : "d";
  return `${name}'${cons}${vowel}`;
}

/** Deterministik küçük hash – sayfaya göre sabit metin varyasyonu seçmek için */
export function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function pick<T>(arr: T[], seed: string, offset = 0): T {
  return arr[(hash(seed) + offset) % arr.length];
}

export function listToText(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} ve ${items[items.length - 1]}`;
}
