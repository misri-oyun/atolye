import { BilsemQuestion } from '../types';

export const GRADE_3_EXAM_40_QUESTIONS: BilsemQuestion[] = [
  {
    num: 1,
    cat: 'Görsel Matris (Şekil Kesişimi / XOR Mantığı)',
    prompt: '1. ve 2. kutudaki çizgiler üst üste bindiğinde ortak olan çizgiler silinmekte, yalnızca tek kutuda bulunan çizgiler kalmaktadır. Soru işareti (?) yerine hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <line x1="30" y1="5" x2="30" y2="55" stroke="#3B82F6" stroke-width="3"/>
          <line x1="5" y1="30" x2="55" y2="30" stroke="#3B82F6" stroke-width="3"/>
        </svg>
        <span class="text-base font-bold text-slate-400">⊕</span>
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <line x1="30" y1="5" x2="30" y2="55" stroke="#EF4444" stroke-width="3"/>
          <line x1="5" y1="5" x2="55" y2="55" stroke="#EF4444" stroke-width="3"/>
        </svg>
        <span class="text-base font-bold text-slate-400">=</span>
        <div class="w-14 h-14 border-2 border-dashed border-teal-500 rounded-xl flex items-center justify-center text-teal-600 font-black text-2xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Tam artı ve çapraz çizgi', isCorrect: false },
      { label: 'B', text: 'Yatay çizgi ile çapraz çizgi ', isCorrect: true },
      { label: 'C', text: 'Sadece dikey çizgi', isCorrect: false },
      { label: 'D', text: 'Boş kare', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: Yatay çizgi ile çapraz çizgi. Gerekçe: Ortak dikey çizgi elenir.'
  },
  {
    num: 2,
    cat: '3D Küp Sayma (İçi Oyuk Tünel Blok)',
    prompt: 'Tabanı 3x3 (9 küp) ve 2 kat yüksekliğinde olan yapının merkezindeki dikey kolon baştan başa boştur (tünel). Toplam kaç küp vardır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>3x3 tabanlı 2 katlı blok: 3 × 3 × 2 = 18 küp</div>
        <div>Merkezdeki dikey tünel boşluğu: 2 küp boş ➔ <span class="text-teal-700 font-black">Kalan ?</span></div>
      </div>
    `,
    options: [
      { label: 'A', text: '18', isCorrect: false },
      { label: 'B', text: '16 ', isCorrect: true },
      { label: 'C', text: '14', isCorrect: false },
      { label: 'D', text: '15', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 16. Gerekçe: 2 kat × 8 küp = 16.'
  },
  {
    num: 3,
    cat: 'Kağıt Katlama & Delme (3 Aşamalı)',
    prompt: 'Kare kağıt: 1. Soldan sağa ikiye ➔ 2. Aşağıdan yukarıya ikiye (4 kat) ➔ 3. Çapraz köşegeninden katlanıyor (8 kat). Ortasından tek bir delik delinirse açıldığında kaç delik oluşur?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Kat sayısı: 2 × 2 × 2 = 8 kat ➔ 1 delik × 8 = ?
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '6', isCorrect: false },
      { label: 'C', text: '8 delik', isCorrect: true },
      { label: 'D', text: '16', isCorrect: false }
    ]
  },
  {
    num: 4,
    cat: 'Terazi & 3\'lü Denklem Sistemi',
    prompt: '● + ● = ■ + ▲, ■ = ▲ + ▲ ve ● = 6 kg olduğuna göre, ▲ kaç kg\'dır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>1. Terazi: 2● = 12 kg</div>
        <div>2. Terazi: ■ + ▲ = 2●</div>
        <div>3. Terazi: ■ = 2▲</div>
        <div class="text-teal-700 font-black">▲ = ? kg</div>
      </div>
    `,
    options: [
      { label: 'A', text: '2 kg', isCorrect: false },
      { label: 'B', text: '3 kg', isCorrect: false },
      { label: 'C', text: '4 kg ', isCorrect: true },
      { label: 'D', text: '5 kg', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 4 kg. Gerekçe: 3▲ = 12 ➔ ▲ = 4.'
  },
  {
    num: 5,
    cat: 'Kasnak & Kayış Aktarımı',
    prompt: 'A çarkı saat yönünde dönmektedir. A ile B düz kayışla, B ile C ise çapraz bağlı kayışla bağlıdır. C çarkı hangi yönde döner?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 60" class="w-56 h-18">
          <circle cx="30" cy="30" r="20" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <text x="30" y="34" font-size="10" font-weight="bold" fill="#1E40AF" text-anchor="middle">A ↻</text>
          <circle cx="95" cy="30" r="20" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <text x="95" y="34" font-size="10" font-weight="bold" fill="#1E40AF" text-anchor="middle">B</text>
          <circle cx="160" cy="30" r="20" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
          <text x="160" y="34" font-size="10" font-weight="bold" fill="#15803D" text-anchor="middle">C ?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Saat Yönünde ', isCorrect: false },
      { label: 'B', text: 'Saat Yönünün Tersine ', isCorrect: true },
      { label: 'C', text: 'Dönmez, kayış kayar', isCorrect: false },
      { label: 'D', text: 'Önce sağa sonra sola döner', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: Saat Yönünün Tersine. Gerekçe: ↺ Çapraz kayış ters çevirir.'
  },
  {
    num: 6,
    cat: '3x3 Matris (İki Aşamalı Rotasyon)',
    prompt: 'Her satırda dış çember saat yönünde 45°, içindeki ok ise saat yönünün tersine 90° dönmektedir. Eksik hücre hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-teal-800 shadow-sm">
        Dış Çember: +45° ↻ | İç Ok: -90° ↺
      </div>
    `,
    options: [
      { label: 'A', text: 'Sola bakan Ok, Çemberin üstünde nokta', isCorrect: true },
      { label: 'B', text: 'Sağa bakan Ok, Çemberin altında nokta', isCorrect: false },
      { label: 'C', text: 'Yukarı bakan Ok, Boş çember', isCorrect: false },
      { label: 'D', text: 'Aşağı bakan Ok, Çift çizgili çember', isCorrect: false }
    ]
  },
  {
    num: 7,
    cat: 'Küp Açınımı (Karşılıklı Yüzler)',
    prompt: 'Bir küp açınımında karşılıklı yüzlerin toplamı 10\'dur. Taban yüzeyinde 3 varsa, tavan yüzeyinde hangi sayı yer alır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Kural: Karşılıklı (zıt) yüzlerdeki sayıların toplamı daima 10'dur. [Üst Yüz: 3] ➔ Alt Yüz = ?
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6', isCorrect: false },
      { label: 'C', text: '7 ', isCorrect: true },
      { label: 'D', text: '4', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 7. Gerekçe: 10 - 3 = 7.'
  },
  {
    num: 8,
    cat: 'Şekil Analojisi (Eksenel Boyut)',
    prompt: 'Yatay Elips ➔ Dikey Daire oluyorsa; Geniş Dikdörtgen ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Basık / Geniş Şekil] ➔ [Eşit Eksenli Dik Şekil]
      </div>
    `,
    options: [
      { label: 'A', text: 'Yatay Uzun Şerit', isCorrect: false },
      { label: 'B', text: 'Dikey Kare / Eşit Kenar', isCorrect: true },
      { label: 'C', text: 'Üçgen', isCorrect: false },
      { label: 'D', text: 'Paralelkenar', isCorrect: false }
    ]
  },
  {
    num: 9,
    cat: '3D Küp (Kuşbakışı / Yükseklik Haritası)',
    prompt: 'Bir yapının üstten görünümünde karelerin içindeki sayılar o sütunun küp yüksekliğini göstermektedir: [3, 1] ve [2, 2]. Bu blokta toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <div class="grid grid-cols-2 gap-1 bg-slate-200 p-2 rounded-2xl border-2 border-slate-400 font-black text-teal-800 text-lg">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">3</div>
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">1</div>
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">2</div>
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">2</div>
        </div>
      </div>
    `,
    options: [
      { label: 'A', text: '7', isCorrect: false },
      { label: 'B', text: '8 ', isCorrect: true },
      { label: 'C', text: '9', isCorrect: false },
      { label: 'D', text: '10', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 8. Gerekçe: 3 + 1 + 2 + 2 = 8.'
  },
  {
    num: 10,
    cat: 'Aritmetik Dizi (Fibonacci Mantığı)',
    prompt: 'Her sayı kendinden önceki iki sayının toplamıdır: 1 ➔ 2 ➔ 3 ➔ 5 ➔ 8 ➔ 13 ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-teal-800 shadow-sm">
        1 ➔ 2 ➔ 3 ➔ 5 ➔ 8 ➔ 13 ➔ <span class="text-rose-600 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '19', isCorrect: false },
      { label: 'B', text: '20', isCorrect: false },
      { label: 'C', text: '21 ', isCorrect: true },
      { label: 'D', text: '24', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 21. Gerekçe: 8 + 13 = 21.'
  },
  {
    num: 11,
    cat: 'Ayna Simetrisi (Köşegen Eksen)',
    prompt: 'y = x köşegen aynasına göre sol alttan sağ üste giden okun yansıması hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24 border border-slate-300 bg-slate-50 rounded-xl">
          <line x1="10" y1="90" x2="90" y2="10" stroke="#0D9488" stroke-width="2" stroke-dasharray="4,4"/>
          <line x1="20" y1="40" x2="40" y2="20" stroke="#EF4444" stroke-width="3"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağ alttan sağ üste dikleşen simetrik yansıma', isCorrect: true },
      { label: 'B', text: 'Sol alta dönen ok', isCorrect: false },
      { label: 'C', text: 'Birebir aynı kalan ok', isCorrect: false },
      { label: 'D', text: 'Merkeze doğru bakan ok', isCorrect: false }
    ]
  },
  {
    num: 12,
    cat: 'Çoklu Perspektif (Sol ve Sağdan Bakış)',
    prompt: 'Önden bakıldığında simetrik duran piramit blok yapısına soldan bakıldığında 3 küp yüksekliğinde sütun görülüyor. Sağdan bakıldığında kaç küp görülür?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Simetrik yapı ➔ Sol: 3 küp tepe | Sağ: ?
      </div>
    `,
    options: [
      { label: 'A', text: '1 küp', isCorrect: false },
      { label: 'B', text: '2 küp', isCorrect: false },
      { label: 'C', text: '3 küp ', isCorrect: true },
      { label: 'D', text: '4 küp', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 3 küp. Gerekçe: Simetrik tepe görünür.'
  },
  {
    num: 13,
    cat: 'Şeffaf Asetat (Negatif Çakışma)',
    prompt: 'Siyah daireli asetat ile beyaz haç desenli asetat çakışınca ortak bölge şeffaf (beyaz) kalmaktadır. Ortaya hangi şekil çıkar?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <circle cx="40" cy="40" r="30" fill="#0F172A"/>
          <line x1="40" y1="15" x2="40" y2="65" stroke="#FFFFFF" stroke-width="6"/>
          <line x1="15" y1="40" x2="65" y2="40" stroke="#FFFFFF" stroke-width="6"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Tamamen siyah daire', isCorrect: false },
      { label: 'B', text: 'İçinde beyaz artı oyuğu olan siyah daire', isCorrect: true },
      { label: 'C', text: 'Dört küçük siyah kare', isCorrect: false },
      { label: 'D', text: 'Boş beyaz zemin', isCorrect: false }
    ]
  },
  {
    num: 14,
    cat: 'Kaldıraç Dengesi (Tork = Kuvvet × Kol)',
    prompt: 'Sol kolda 3 birim uzaklıkta 4 kg ağırlık vardır (3 × 4 = 12). Sağ kolda destek noktasına 2 birim uzaklıkta bir kefe varsa, denge için kaç kg konmalıdır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>Destek Noktasına Uzaklıklar: Sol = 3 birim, Sağ = 2 birim</div>
        <div>Sol kefedeki yük: 4 kg</div>
        <div class="text-teal-700 font-black">Kaldıracın dengede kalması için Sağ kefe = ? kg</div>
      </div>
    `,
    options: [
      { label: 'A', text: '5 kg', isCorrect: false },
      { label: 'B', text: '6 kg ', isCorrect: true },
      { label: 'C', text: '8 kg', isCorrect: false },
      { label: 'D', text: '4 kg', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6 kg. Gerekçe: 12 ÷ 2 = 6.'
  },
  {
    num: 15,
    cat: 'Görsel Matris (Katman Örtüşmesi)',
    prompt: '1. Satır: Daire ➔ Kare ➔ Daire içinde Kare. 2. Satır: Üçgen ➔ Daire ➔ Üçgen içinde Daire. 3. Satır: Altıgen ➔ Üçgen ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        1. Şekil dış çerçeve, 2. Şekil iç göbek ➔ Altıgen + Üçgen = ?
      </div>
    `,
    options: [
      { label: 'A', text: 'Üçgen içinde Altıgen', isCorrect: false },
      { label: 'B', text: 'Altıgen içinde Üçgen', isCorrect: true },
      { label: 'C', text: 'Yan yana Altıgen ve Üçgen', isCorrect: false },
      { label: 'D', text: 'Daire içinde Üçgen', isCorrect: false }
    ]
  },
  {
    num: 16,
    cat: '3D Küp (Ters U Köprüsü)',
    prompt: 'Solda 3 katlı kule, sağda 3 katlı kule vardır. İki kulenin en üst basamakları arasında 2 küplük köprü bağlantısı yapılmıştır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 160 80" class="w-40 h-20">
          <rect x="20" y="10" width="25" height="60" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="115" y="10" width="25" height="60" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="45" y="10" width="70" height="20" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '6', isCorrect: false },
      { label: 'B', text: '7', isCorrect: false },
      { label: 'C', text: '8 ', isCorrect: true },
      { label: 'D', text: '9', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 8. Gerekçe: 3 + 3 + 2 = 8.'
  },
  {
    num: 17,
    cat: 'Kağıt Katlama (Köşe Üçgen Kesimi)',
    prompt: 'Kare kağıt 4\'e katlanıp dış kapalı köşesinden üçgen parça kesilip atılıyor. Kağıt açıldığında ortasında hangi şekil oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <rect x="10" y="10" width="60" height="60" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <polygon points="40,25 55,40 40,55 25,40" fill="#FFFFFF" stroke="#EF4444" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Üçgen delik', isCorrect: false },
      { label: 'B', text: 'Eşkenar Dörtgen / Baklava şeklinde delik', isCorrect: true },
      { label: 'C', text: 'Daire delik', isCorrect: false },
      { label: 'D', text: 'Yıldız delik', isCorrect: false }
    ]
  },
  {
    num: 18,
    cat: 'Dişli Çark (Oran Hesabı)',
    prompt: 'A çarkı 18 dişlidir. B çarkı 6 dişlidir. A çarkı 2 tam tur döndüğünde B çarkı kaç tur döner?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>A Dişlisi: 18 diş (2 tam tur atıyor)</div>
        <div>B Dişlisi: 6 diş</div>
        <div class="text-teal-700 font-black">B Dişlisi = ? Tur döner</div>
      </div>
    `,
    options: [
      { label: 'A', text: '3 tur', isCorrect: false },
      { label: 'B', text: '4 tur', isCorrect: false },
      { label: 'C', text: '6 tur ', isCorrect: true },
      { label: 'D', text: '8 tur', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6 tur. Gerekçe: 2 × 3 = 6.'
  },
  {
    num: 19,
    cat: 'Zihinsel Küp Döndürme',
    prompt: 'Küpün ön yüzünde Yıldız, üst yüzünde Daire vardır. Küp öne doğru 90° yuvarlanırsa üst yüze hangi sembol gelir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Üst: Daire, Ön: Yıldız] ➔ Öne 90° Yuvarlama ➔ Üst Yüz (?)
      </div>
    `,
    options: [
      { label: 'A', text: 'Yıldız', isCorrect: false },
      { label: 'B', text: 'Daire', isCorrect: false },
      { label: 'C', text: 'Arka yüzdeki sembol ', isCorrect: true },
      { label: 'D', text: 'Sağ yüzdeki sembol', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: Arka yüzdeki sembol. Gerekçe: Daire ön yüze iner.'
  },
  {
    num: 20,
    cat: 'Sayısal Örüntü (Çift Kural)',
    prompt: '1 (+2)➔ 3 (×3)➔ 6 (+2)➔ 18 (×3)➔ 21 (+2)➔ 63 ➔ ? Sıradaki işlem +2 olduğuna göre sonuç kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-teal-800 shadow-sm">
        63 ➔ <span class="text-rose-600 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '126', isCorrect: false },
      { label: 'B', text: '65 ', isCorrect: true },
      { label: 'C', text: '67', isCorrect: false },
      { label: 'D', text: '189', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 65. Gerekçe: 63 + 2 = 65.'
  },
  {
    num: 21,
    cat: 'Şekil Analojisi (Köşe/Yüzey Oranı)',
    prompt: 'Üçgen (3) ➔ Prizma. Kare (4) ➔ Küp. Daire ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Dairenin 3 boyutlu tam simetrik formu
      </div>
    `,
    options: [
      { label: 'A', text: 'Küre', isCorrect: true },
      { label: 'B', text: 'Silindir', isCorrect: false },
      { label: 'C', text: 'Koni', isCorrect: false },
      { label: 'D', text: 'Halka', isCorrect: false }
    ]
  },
  {
    num: 22,
    cat: 'Mantıksal Çıkarım (Çoklu Karşılaştırma)',
    prompt: 'Ali, Burak\'tan hızlıdır. Can, Ali\'den hızlıdır. Deniz ise Can\'dan hızlıdır. Yarışı 2. sırada kim bitirir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Hız Sıralaması: Deniz > Can > Ali > Burak
      </div>
    `,
    options: [
      { label: 'A', text: 'Deniz', isCorrect: false },
      { label: 'B', text: 'Can ', isCorrect: true },
      { label: 'C', text: 'Ali', isCorrect: false },
      { label: 'D', text: 'Burak', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: Can. Gerekçe: Sıralama: Deniz > Can > Ali > Burak.'
  },
  {
    num: 23,
    cat: '3D Küp (Merdivenli Piramit)',
    prompt: 'Tabanda 3x3 (9 küp), ortada 2x2 (4 küp) ve en tepede 1 küp olan yapıda en alt katın merkezindeki 1 küp boştur. Toplam küp sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-teal-800 shadow-sm">
        Kare Piramit Blokta Toplam Küp Sayısı = ?
      </div>
    `,
    options: [
      { label: 'A', text: '14', isCorrect: false },
      { label: 'B', text: '13 ', isCorrect: true },
      { label: 'C', text: '12', isCorrect: false },
      { label: 'D', text: '11', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 13. Gerekçe: 8 + 4 + 1 = 13.'
  },
  {
    num: 24,
    cat: 'Görsel Dikkat & Örüntü İhlali',
    prompt: 'Aşağıdaki dizilimde kuralı bozan tek eleman hangisidir? [→, ↓, ←, ↑, →, ↑, ←]',
    visual: `
      <div class="p-3 bg-white rounded-2xl border flex items-center justify-center gap-3 text-lg font-black text-slate-800 shadow-sm">
        <span>→</span><span>↓</span><span>←</span><span>↑</span><span>→</span><span class="text-rose-600">↑</span><span>←</span>
      </div>
    `,
    options: [
      { label: 'A', text: '1. Ok', isCorrect: false },
      { label: 'B', text: '4. Ok', isCorrect: false },
      { label: 'C', text: '6. Ok ', isCorrect: true },
      { label: 'D', text: '7. Ok', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6. Ok. Gerekçe: Aşağı bakması gerekirken yukarı bakıyor.'
  },
  {
    num: 25,
    cat: 'Aritmetik Şifreli Matris',
    prompt: '■ × ● = 24, ■ + ● = 11 ve ■ > ● olduğuna göre ■ - ● kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>■ × ● = 24</div>
        <div>■ + ● = 11 (■ > ●)</div>
        <div class="text-teal-700 font-black">■ - ● = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '3', isCorrect: false },
      { label: 'B', text: '5 ', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '2', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 5. Gerekçe: 8 - 3 = 5.'
  },
  {
    num: 26,
    cat: 'Koordinat Gezintisi (Vektörel Yol)',
    prompt: 'A noktasından yola çıkan robot: (3 Doğu, 4 Kuzey) gidip duruyor. Başlangıç noktasına en kısa kuş uçuşu mesafe kaç birimdir? (3-4-5 kuralı)',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 80" class="w-28 h-20">
          <line x1="20" y1="60" x2="80" y2="60" stroke="#3B82F6" stroke-width="2"/>
          <text x="50" y="73" font-size="9" font-weight="bold" fill="#1E40AF" text-anchor="middle">3 Doğu</text>
          <line x1="80" y1="60" x2="80" y2="20" stroke="#10B981" stroke-width="2"/>
          <text x="92" y="42" font-size="9" font-weight="bold" fill="#065F46" text-anchor="middle">4 K</text>
          <line x1="20" y1="60" x2="80" y2="20" stroke="#EF4444" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="45" y="35" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">? br</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '5 ', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '6', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 5. Gerekçe: 3² + 4² = 25 ➔ √25 = 5.'
  },
  {
    num: 27,
    cat: 'Şekil Çıkartma (Boş Küme Kuralı)',
    prompt: 'Büyük Dolu Daireden eş merkezli Küçük Daire kesilip çıkarılırsa hangi şekil kalır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <circle cx="40" cy="40" r="30" fill="#0F172A"/>
          <circle cx="40" cy="40" r="15" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Yarım Daire', isCorrect: false },
      { label: 'B', text: 'Halka / Simit Şekli ', isCorrect: true },
      { label: 'C', text: 'Nokta', isCorrect: false },
      { label: 'D', text: 'Üçgen', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: Halka / Simit Şekli. Gerekçe: Annulus.'
  },
  {
    num: 28,
    cat: 'Çift Kefeli Terazi Eşitleme',
    prompt: 'Sol kefede 18 kg, sağ kefede 6 kg vardır. Terazinin dengelenmesi için sol kefeden sağ kefeye kaç kg aktarılmalıdır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>Sol Kefe: 18 kg ağırlık</div>
        <div>Sağ Kefe: 6 kg ağırlık</div>
        <div class="text-teal-700 font-black">Terazinin yatay dengede durması için soldan sağa kaç kg aktarılmalı?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '12 kg', isCorrect: false },
      { label: 'B', text: '6 kg ', isCorrect: true },
      { label: 'C', text: '8 kg', isCorrect: false },
      { label: 'D', text: '4 kg', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6 kg. Gerekçe: 18 - 6 = 12 kg fark ➔ 12 / 2 = 6.'
  },
  {
    num: 29,
    cat: 'Kağıt Katlama (Zikzak Akordeon)',
    prompt: 'Şerit kağıt 4 kez zikzak katlanıp ortasından üçgen delik açılıyor. Açıldığında kaç adet üçgen delik yan yana sıralanır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        4 Kat Zikzak × 1 Üçgen Delik = ? Delik
      </div>
    `,
    options: [
      { label: 'A', text: '2', isCorrect: false },
      { label: 'B', text: '3', isCorrect: false },
      { label: 'C', text: '4 delik', isCorrect: true },
      { label: 'D', text: '8 delik', isCorrect: false }
    ]
  },
  {
    num: 30,
    cat: '3D Küp (Kule & Köprü)',
    prompt: 'Üç adet 3\'er küplük kule vardır (3 × 3 = 9). Bu kulelerin arasına 2 adet tekli bağlantı köprüsü konursa toplam kaç küp olur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 180 80" class="w-44 h-20">
          <rect x="20" y="20" width="20" height="50" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="80" y="20" width="20" height="50" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="140" y="20" width="20" height="50" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="40" y="20" width="40" height="15" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
          <rect x="100" y="20" width="40" height="15" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '10', isCorrect: false },
      { label: 'B', text: '11 ', isCorrect: true },
      { label: 'C', text: '12', isCorrect: false },
      { label: 'D', text: '13', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 11. Gerekçe: 9 + 2 = 11.'
  },
  {
    num: 31,
    cat: 'Uzamsal Rotasyon (3B Yön Değişimi)',
    prompt: 'Yukarı ve sağa bakan bir L bloğu zemin üzerinde 90° sağa devrilirse hangi yönlere bakar?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-teal-800 shadow-sm">
        [Yukarı, Sağa] ➔ 90° Sağa Devrilme (↻)
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa ve Aşağı', isCorrect: true },
      { label: 'B', text: 'Sola ve Yukarı', isCorrect: false },
      { label: 'C', text: 'Sağa ve Yukarı', isCorrect: false },
      { label: 'D', text: 'Aşağı ve Sola', isCorrect: false }
    ]
  },
  {
    num: 32,
    cat: 'Şekil Analojisi (İç İçe Katlama)',
    prompt: 'Daire içinde Kare ➔ Kare içinde Daire (Ters çevirme). Üçgen içinde Altıgen ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Dış: Üçgen, İç: Altıgen] ➔ Ters Çevirme = ?
      </div>
    `,
    options: [
      { label: 'A', text: 'Üçgen içinde Daire', isCorrect: false },
      { label: 'B', text: 'Altıgen içinde Üçgen', isCorrect: true },
      { label: 'C', text: 'Kare içinde Altıgen', isCorrect: false },
      { label: 'D', text: 'İki adet Altıgen', isCorrect: false }
    ]
  },
  {
    num: 33,
    cat: 'Perspektif Kesit (Küp Dilimi)',
    prompt: 'Bir küp tam ortasından çapraz bir düzlemle kesilirse kesit yüzeyinde hangi geometrik şekil oluşur?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Küpün karşılıklı çapraz köşelerinden geçen arakesit
      </div>
    `,
    options: [
      { label: 'A', text: 'Daire', isCorrect: false },
      { label: 'B', text: 'Dikdörtgen', isCorrect: true },
      { label: 'C', text: 'Üçgen', isCorrect: false },
      { label: 'D', text: 'Yamuk', isCorrect: false }
    ]
  },
  {
    num: 34,
    cat: 'Aritmetik Örüntü (Kare Sayılar)',
    prompt: '1 ➔ 4 (2²) ➔ 9 (3²) ➔ 16 (4²) ➔ 25 (5²) ➔ ? (6²)',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-teal-800 shadow-sm">
        1 ➔ 4 ➔ 9 ➔ 16 ➔ 25 ➔ <span class="text-rose-600 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '30', isCorrect: false },
      { label: 'B', text: '32', isCorrect: false },
      { label: 'C', text: '36 ', isCorrect: true },
      { label: 'D', text: '49', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 36. Gerekçe: 6² = 36.'
  },
  {
    num: 35,
    cat: 'Görsel Matris (Gölge & Saydamlık)',
    prompt: '1. Sütun: %100 Siyah. 2. Sütun: %50 Gri Tarama. 3. Sütun: %0 Beyaz Boşluk. 3. satırda eksik olan şekil hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        3. Sütun Kuralı: %0 Doluluk (Tamamen Beyaz / Boşluk)
      </div>
    `,
    options: [
      { label: 'A', text: 'Dolu Siyah Üçgen', isCorrect: false },
      { label: 'B', text: 'Tamamen Boş Beyaz Daire', isCorrect: true },
      { label: 'C', text: 'Gri Kare', isCorrect: false },
      { label: 'D', text: 'Noktalı Daire', isCorrect: false }
    ]
  },
  {
    num: 36,
    cat: 'Saat & Açı Mantığı',
    prompt: 'Saat 12:00\'de üst üste olan akrep ve yelkovandan yelkovan 1 tam tur (360°) attığında akrep kaç derece ilerler?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>1 Tam Saat = 12 dilimden 1 tanesi</div>
        <div>360° ÷ 12 = ? Derece</div>
      </div>
    `,
    options: [
      { label: 'A', text: '15°', isCorrect: false },
      { label: 'B', text: '30° ', isCorrect: true },
      { label: 'C', text: '45°', isCorrect: false },
      { label: 'D', text: '60°', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 30°. Gerekçe: 360° ÷ 12 = 30°.'
  },
  {
    num: 37,
    cat: '3D Küp (Asimetrik Bloklar)',
    prompt: 'Önden bakıldığında 4 sütun: yükseklikleri 1, 3, 2, 4 olan yapıda her sütunun arkasında 1\'er küp daha bulunmaktadır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-teal-800 shadow-sm">
        İki sıra halinde dizilmiş blok yapıda toplam kaç küp vardır?
      </div>
    `,
    options: [
      { label: 'A', text: '10', isCorrect: false },
      { label: 'B', text: '12', isCorrect: false },
      { label: 'C', text: '14 ', isCorrect: true },
      { label: 'D', text: '16', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 14. Gerekçe: 10 önde + 4 arkada = 14.'
  },
  {
    num: 38,
    cat: 'Simetri Eksen Sayısı',
    prompt: 'Düzgün bir altıgenin kaç adet simetri ekseni (katlama çizgisi) vardır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Düzgün n-genin simetri eksen sayısı n adettir (Altıgen = 6)
      </div>
    `,
    options: [
      { label: 'A', text: '3', isCorrect: false },
      { label: 'B', text: '4', isCorrect: false },
      { label: 'C', text: '6 ', isCorrect: true },
      { label: 'D', text: '8', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6. Gerekçe: 3 köşe çifti + 3 kenar çifti.'
  },
  {
    num: 39,
    cat: 'Sayısal Eşitlik Mantığı',
    prompt: '3A + 2B = 22 ve B = 2 olduğuna göre A kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm font-mono">
        <div>3A + 2B = 22</div>
        <div>B = 2</div>
        <div class="text-teal-700 font-black">A = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 ', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '4', isCorrect: false }
    ],
    explanation: 'Doğru Çözüm: 6. Gerekçe: 3A = 18 ➔ A = 6.'
  },
  {
    num: 40,
    cat: 'Büyük Final Matrisi (3 Kural Bir Arada)',
    prompt: '3x3 matriste her satırda: Şekil (Kare, Daire, Eşkenar Dörtgen), İç Dolgu (Dikey, Yatay, Çapraz Çizgili), Nokta Konumu (Sol Üst, Merkez, Sağ Alt). Eksik olan hücre hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-teal-800 shadow-sm">
        3×3 Matriste Soru İşareti (?) Yerine Hangi Kombinasyon Gelmelidir?
      </div>
    `,
    options: [
      { label: 'A', text: 'Dikey Çizgili Kare, Merkezde Nokta', isCorrect: false },
      { label: 'B', text: 'Çapraz Çizgili Eşkenar Dörtgen, Sağ Altta Nokta', isCorrect: true },
      { label: 'C', text: 'Yatay Çizgili Daire, Sol Üstte Nokta', isCorrect: false },
      { label: 'D', text: 'Boş Kare', isCorrect: false }
    ]
  }
];
