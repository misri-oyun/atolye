import { BilsemQuestion } from '../types';

export const GRADE_2_EXAM_40_QUESTIONS: BilsemQuestion[] = [
  {
    num: 1,
    cat: 'Görsel Matris (İki Kademeli Kural)',
    prompt: 'Satırdaki kuralı bulunuz: Şekil 90° dönerken rengi tersine çevrilmektedir. Soru işareti (?) yerine hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <polygon points="30,10 10,48 50,48" fill="#EF4444"/>
        </svg>
        <span class="text-slate-400 font-bold">➔</span>
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <polygon points="48,30 10,10 10,50" fill="#3B82F6"/>
        </svg>
        <span class="text-slate-400 font-bold">➔</span>
        <div class="w-14 h-14 border-2 border-dashed border-purple-500 rounded-xl flex items-center justify-center text-purple-600 font-black text-2xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa bakan Mavi Üçgen', isCorrect: false },
      { label: 'B', text: 'Aşağı bakan Kırmızı Üçgen', isCorrect: true },
      { label: 'C', text: 'Yukarı bakan Sarı Daire', isCorrect: false },
      { label: 'D', text: 'Sola bakan Mavi Kare', isCorrect: false }
    ]
  },
  {
    num: 2,
    cat: '3D Küp Sayma (İki Katmanlı L Blok)',
    prompt: 'Görünmeyen taşıyıcı taban blokları dahil toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 160 120" class="w-44 h-32">
          <rect x="20" y="70" width="35" height="35" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="55" y="70" width="35" height="35" fill="#C4B5FD" stroke="#6D28D9" stroke-width="2"/>
          <rect x="90" y="70" width="35" height="35" fill="#A78BFA" stroke="#6D28D9" stroke-width="2"/>
          <rect x="90" y="35" width="35" height="35" fill="#8B5CF6" stroke="#6D28D9" stroke-width="2"/>
          <rect x="90" y="0" width="35" height="35" fill="#7C3AED" stroke="#6D28D9" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '5 (3 basamak + 2 üst kat)', isCorrect: true },
      { label: 'C', text: '6', isCorrect: false },
      { label: 'D', text: '7', isCorrect: false }
    ]
  },
  {
    num: 3,
    cat: 'Kağıt Katlama (Köşeden 2 Kat)',
    prompt: 'Kare kağıt sol üstten ve sağ alttan üçgen şeklinde içe katlanıyor. Kağıt açıldığında kat çizgileri nasıl görünür?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24">
          <rect x="10" y="10" width="80" height="80" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <line x1="10" y1="50" x2="50" y2="10" stroke="#EF4444" stroke-width="3" stroke-dasharray="4,4"/>
          <line x1="50" y1="90" x2="90" y2="50" stroke="#EF4444" stroke-width="3" stroke-dasharray="4,4"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Ortada artı işareti (+)', isCorrect: false },
      { label: 'B', text: 'Karşılıklı iki köşede paralel çapraz kat çizgileri', isCorrect: true },
      { label: 'C', text: 'Ortada tek tam daire', isCorrect: false },
      { label: 'D', text: 'Kağıdın dört kenarında dik çizgiler', isCorrect: false }
    ]
  },
  {
    num: 4,
    cat: 'Terazi & İkili Eşitlik',
    prompt: '1 Kare = 2 Üçgen ve 1 Daire = 1 Kare + 1 Üçgen olduğuna göre 1 Daire kaç Üçgene eşittir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>1 Kare = 2 Üçgen</div>
        <div>1 Daire = 1 Kare + 1 Üçgen ➔ <span class="text-purple-700 font-black">1 Daire = ? Üçgen</span></div>
      </div>
    `,
    options: [
      { label: 'A', text: '2', isCorrect: false },
      { label: 'B', text: '4', isCorrect: false },
      { label: 'C', text: '3 Üçgen (2 + 1 = 3)', isCorrect: true },
      { label: 'D', text: '5', isCorrect: false }
    ]
  },
  {
    num: 5,
    cat: 'Dişli Çarklar (3\'lü Sistem)',
    prompt: '1. Çark saat yönünde dönerse, 3. Çark hangi yönde döner?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 70" class="w-56 h-20">
          <circle cx="30" cy="35" r="22" fill="#FEF08A" stroke="#CA8A04" stroke-width="2"/>
          <text x="30" y="39" font-size="11" font-weight="bold" fill="#854D0E" text-anchor="middle">1 ↻</text>
          <circle cx="75" cy="35" r="22" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <text x="75" y="39" font-size="11" font-weight="bold" fill="#1E40AF" text-anchor="middle">2</text>
          <circle cx="120" cy="35" r="22" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
          <text x="120" y="39" font-size="11" font-weight="bold" fill="#15803D" text-anchor="middle">3 ?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Saat Yönünün Tersine (↺)', isCorrect: false },
      { label: 'B', text: 'Saat Yönünde (↻ Sağa)', isCorrect: true },
      { label: 'C', text: 'Dönmez, kilitlenir', isCorrect: false },
      { label: 'D', text: 'Sağa-sola titreşir', isCorrect: false }
    ]
  },
  {
    num: 6,
    cat: '3x3 Matris (Şekil İçi Sembol)',
    prompt: 'Her satırda dış çerçeve (Kare, Üçgen, Daire) ve iç sembol (+, ×, •) birer kez bulunur. Eksik şekil hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs shadow-sm">
        3. Satır: [Daire •] [Üçgen +] [ ? ]
      </div>
    `,
    options: [
      { label: 'A', text: 'Daire içinde nokta', isCorrect: false },
      { label: 'B', text: 'Kare içinde çarpı (×)', isCorrect: true },
      { label: 'C', text: 'Üçgen içinde artı (+)', isCorrect: false },
      { label: 'D', text: 'Kare içinde nokta', isCorrect: false }
    ]
  },
  {
    num: 7,
    cat: 'Uzamsal Rotasyon (180° Dönüş)',
    prompt: 'Sol üst köşesinde siyah nokta bulunan kare 180° döndürülürse nokta nerede olur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <rect x="10" y="10" width="60" height="60" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <circle cx="25" cy="25" r="7" fill="#0F172A"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sol alt köşe', isCorrect: false },
      { label: 'B', text: 'Sağ üst köşe', isCorrect: false },
      { label: 'C', text: 'Sağ alt köşe', isCorrect: true },
      { label: 'D', text: 'Karenin tam ortası', isCorrect: false }
    ]
  },
  {
    num: 8,
    cat: 'Şekil Analojisi (Eksiltme & Dolgu)',
    prompt: 'Dolu kare ➔ Boş kareye dönüşüyor ve içine nokta geliyor. Dolu üçgene aynı kural uygulanırsa ne olur?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs shadow-sm">
        [Dolu Kare] ➔ [Boş Kare + Nokta] | [Dolu Üçgen] ➔ [ ? ]
      </div>
    `,
    options: [
      { label: 'A', text: 'İçi boş üçgen, içinde nokta', isCorrect: true },
      { label: 'B', text: 'İçi dolu üçgen', isCorrect: false },
      { label: 'C', text: 'İçi boş daire', isCorrect: false },
      { label: 'D', text: 'Üçgen içinde kare', isCorrect: false }
    ]
  },
  {
    num: 9,
    cat: '3D Küp (Görünmeyen Destek Blokları)',
    prompt: 'Önden bakıldığında 3 basamaklı merdiven gibi duran yapının en üst basamağı 3 birim yüksekliğindedir. Toplam küp sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        1. Basamak: 1 | 2. Basamak: 2 | 3. Basamak: 3 küp ➔ Toplam ?
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (1 + 2 + 3 = 6)', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '8', isCorrect: false }
    ]
  },
  {
    num: 10,
    cat: 'Aritmetik Örüntü (Değişken Adım)',
    prompt: 'Sayılar arasındaki artış kuralını bulunuz: 3 (+2)➔ 5 (+3)➔ 8 (+4)➔ 12 (+5)➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-purple-800 shadow-sm">
        3 ➔ 5 ➔ 8 ➔ 12 ➔ <span class="text-rose-600 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '15', isCorrect: false },
      { label: 'B', text: '16', isCorrect: false },
      { label: 'C', text: '17 (12 + 5 = 17)', isCorrect: true },
      { label: 'D', text: '18', isCorrect: false }
    ]
  },
  {
    num: 11,
    cat: 'Ayna Simetrisi (Yatay Eksen - Suya Yansıma)',
    prompt: 'E harfinin altındaki suya (yatay eksene) yansıması hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 60 70" class="w-16 h-18">
          <text x="30" y="32" font-size="28" font-weight="black" fill="#1E293B" text-anchor="middle">E</text>
          <line x1="5" y1="40" x2="55" y2="40" stroke="#3B82F6" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="30" y="62" font-size="16" font-weight="bold" fill="#94A3B8" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Birebir aynı E (Yatay simetriktir)', isCorrect: true },
      { label: 'B', text: '3 rakamı', isCorrect: false },
      { label: 'C', text: 'M harfi', isCorrect: false },
      { label: 'D', text: 'Ters dönmüş açık C', isCorrect: false }
    ]
  },
  {
    num: 12,
    cat: 'Perspektif (Sağdan Görünüm)',
    prompt: 'Sol sütunda 2 küp, sağ sütunda 1 küp olan yapıya sağdan bakılırsa kaç küp yüksekliğinde tek sütun görünür?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Sol Sütun: 2 Küp | Sağ Sütun: 1 Küp ➔ Sağdan Bakış (?)
      </div>
    `,
    options: [
      { label: 'A', text: '1 küp', isCorrect: false },
      { label: 'B', text: '2 küp (Arkadaki yüksek küp görünür)', isCorrect: true },
      { label: 'C', text: '3 küp', isCorrect: false },
      { label: 'D', text: 'Küp görünmez', isCorrect: false }
    ]
  },
  {
    num: 13,
    cat: 'Şeffaf Levha Birleştirme',
    prompt: '1. Levha: Sol üst köşe siyah. 2. Levha: Sağ alt köşe siyah. Bu iki şeffaf levha üst üste konursa ne oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24">
          <rect x="10" y="10" width="80" height="80" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <rect x="10" y="10" width="40" height="40" fill="#0F172A"/>
          <rect x="50" y="50" width="40" height="40" fill="#0F172A"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Tamamen siyah kare', isCorrect: false },
      { label: 'B', text: 'Çapraz iki köşesi siyah olan kare', isCorrect: true },
      { label: 'C', text: 'Sol kenarı siyah şerit', isCorrect: false },
      { label: 'D', text: 'Ortası siyah daire', isCorrect: false }
    ]
  },
  {
    num: 14,
    cat: 'Terazi & 3 Bilinmeyen',
    prompt: '1 Üçgen = 3 kg, 2 Üçgen = 1 Kare ve 1 Kare + 1 Üçgen = 1 Daire olduğuna göre 1 Daire kaç kg\'dır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>Üçgen = 3 kg ➔ Kare = 6 kg</div>
        <div>Daire = Kare (6) + Üçgen (3) = ? kg</div>
      </div>
    `,
    options: [
      { label: 'A', text: '6 kg', isCorrect: false },
      { label: 'B', text: '8 kg', isCorrect: false },
      { label: 'C', text: '9 kg (6 + 3 = 9)', isCorrect: true },
      { label: 'D', text: '12 kg', isCorrect: false }
    ]
  },
  {
    num: 15,
    cat: 'Görsel Matris (Parça Eksiltme)',
    prompt: 'Dış kare + İç daire + Merkez artı ➔ Daire kaybolur ➔ Artı kaybolur... Son şekilde ne kalır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Kare + Daire + Artı] ➔ [Kare + Artı] ➔ [ ? ]
      </div>
    `,
    options: [
      { label: 'A', text: 'Yalnızca Boş Dış Kare', isCorrect: true },
      { label: 'B', text: 'Merkezdeki Artı', isCorrect: false },
      { label: 'C', text: 'İç Daire', isCorrect: false },
      { label: 'D', text: 'Hiçbir şey (Boşluk)', isCorrect: false }
    ]
  },
  {
    num: 16,
    cat: '3D Küp (U Blok - Havuz Yapısı)',
    prompt: 'Tabanda 3x3 (9 küp) ızgara vardır. Ortadaki 1 küp çıkarılmıştır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 90 90" class="w-22 h-22">
          <rect x="0" y="0" width="90" height="90" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
          <rect x="30" y="30" width="30" height="30" fill="#FFFFFF" stroke="#475569" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '7', isCorrect: false },
      { label: 'B', text: '8 (9 - 1 = 8)', isCorrect: true },
      { label: 'C', text: '9', isCorrect: false },
      { label: 'D', text: '10', isCorrect: false }
    ]
  },
  {
    num: 17,
    cat: 'Kağıt Katlama & Delme (2 Delik)',
    prompt: 'Kare kağıt ortadan ikiye katlanıp iki kenarından deliniyor. Kağıt açıldığında toplam kaç delik oluşur?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        2 Katlı Kağıt × 2 Kenar Deliği = ? Delik
      </div>
    `,
    options: [
      { label: 'A', text: '2', isCorrect: false },
      { label: 'B', text: '3', isCorrect: false },
      { label: 'C', text: '4 (2 × 2 = 4)', isCorrect: true },
      { label: 'D', text: '6', isCorrect: false }
    ]
  },
  {
    num: 18,
    cat: 'Çark & Dönüş Sayısı',
    prompt: 'Büyük çarkın 12 dişi, küçük çarkın 6 dişi vardır. Büyük çark 1 tam tur attığında küçük çark kaç tur atar?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs shadow-sm">
        12 Diş (1 Tur) ➔ 6 Diş (? Tur) | 12 ÷ 6 = 2
      </div>
    `,
    options: [
      { label: 'A', text: '1 tur', isCorrect: false },
      { label: 'B', text: '2 tur (12 ÷ 6 = 2)', isCorrect: true },
      { label: 'C', text: 'Yarım tur', isCorrect: false },
      { label: 'D', text: '3 tur', isCorrect: false }
    ]
  },
  {
    num: 19,
    cat: 'Uzamsal Mantık (Küp Açınımı)',
    prompt: 'Küpün karşılıklı yüzlerinin toplamı 7\'dir. 1\'in tam karşısında hangi sayı olmalıdır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        Zar Kuralı: Karşılıklı Yüzler Toplamı = 7 ➔ 1 + ? = 7
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (7 - 1 = 6)', isCorrect: true },
      { label: 'C', text: '4', isCorrect: false },
      { label: 'D', text: '2', isCorrect: false }
    ]
  },
  {
    num: 20,
    cat: 'Görsel Örüntü (İki İleri Bir Geri)',
    prompt: '1 ➔ 3 ➔ 2 ➔ 4 ➔ 3 ➔ 5 ➔ 4 ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-purple-800 shadow-sm">
        1 (+2)➔ 3 (-1)➔ 2 (+2)➔ 4 (-1)➔ 3 (+2)➔ 5 (-1)➔ 4 ➔ <span class="text-rose-600 font-black">[ +2 ] = ?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (+2 eklenir)', isCorrect: true },
      { label: 'C', text: '3', isCorrect: false },
      { label: 'D', text: '7', isCorrect: false }
    ]
  },
  {
    num: 21,
    cat: 'Şekil Analojisi (Boyut Orantısı)',
    prompt: 'Büyük Daire ➔ İç içe iki Küçük Daire oluyorsa; Büyük Üçgen ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Büyük Şekil] ➔ [İç İçe İki Küçük Şekil]
      </div>
    `,
    options: [
      { label: 'A', text: 'İç içe iki Küçük Kare', isCorrect: false },
      { label: 'B', text: 'İç içe iki Küçük Üçgen', isCorrect: true },
      { label: 'C', text: 'Yan yana iki Üçgen', isCorrect: false },
      { label: 'D', text: 'Bir Daire bir Üçgen', isCorrect: false }
    ]
  },
  {
    num: 22,
    cat: 'Mantıksal Çıkarım (Tartı Karşılaştırması)',
    prompt: 'A kutusu B\'den ağır, B kutusu C\'den ağırdır. En hafif olan hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        A > B > C
      </div>
    `,
    options: [
      { label: 'A', text: 'A', isCorrect: false },
      { label: 'B', text: 'B', isCorrect: false },
      { label: 'C', text: 'C (En hafiftir)', isCorrect: true },
      { label: 'D', text: 'A ve C eşittir', isCorrect: false }
    ]
  },
  {
    num: 23,
    cat: '3D Küp (T Blok)',
    prompt: 'Üst sırada yan yana 3 küp, ortadaki küpün tam altında 2 küp daha vardır. Toplam küp sayısı kaçtır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 120 100" class="w-30 h-25">
          <rect x="15" y="15" width="30" height="30" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="45" y="15" width="30" height="30" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="75" y="15" width="30" height="30" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="45" y="45" width="30" height="30" fill="#A78BFA" stroke="#6D28D9" stroke-width="2"/>
          <rect x="45" y="75" width="30" height="20" fill="#7C3AED" stroke="#6D28D9" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '5 (3 üst + 2 alt = 5)', isCorrect: true },
      { label: 'C', text: '6', isCorrect: false },
      { label: 'D', text: '7', isCorrect: false }
    ]
  },
  {
    num: 24,
    cat: 'Görsel Dikkat (Farklı Yön)',
    prompt: 'Dört oktan üçü sağa bakmaktadır, biri farklı yöne bakmaktadır. Farklı olan hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border flex items-center justify-center gap-4 text-xl font-black text-slate-800 shadow-sm">
        <span>➔</span><span>➔</span><span class="text-rose-600">⬅</span><span>➔</span>
      </div>
    `,
    options: [
      { label: 'A', text: '1. Ok (→)', isCorrect: false },
      { label: 'B', text: '2. Ok (→)', isCorrect: false },
      { label: 'C', text: '3. Ok (← sola bakan)', isCorrect: true },
      { label: 'D', text: '4. Ok (→)', isCorrect: false }
    ]
  },
  {
    num: 25,
    cat: 'Aritmetik Şifreler',
    prompt: '▲ + ▲ + ▲ = 12 ve ▲ + ■ = 9 olduğuna göre ■ kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>3▲ = 12 ➔ ▲ = 4</div>
        <div>4 + ■ = 9 ➔ ■ = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '5 (9 - 4 = 5)', isCorrect: true },
      { label: 'C', text: '6', isCorrect: false },
      { label: 'D', text: '3', isCorrect: false }
    ]
  },
  {
    num: 26,
    cat: 'Koordinat ve Izgara Rotası',
    prompt: 'Karınca (0,0) noktasından başlayıp: 3 birim Doğuya, 2 birim Kuzeye, 1 birim Batıya gidiyor. Karınca hangi noktadadır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        X ekseni: 3 Doğu - 1 Batı = 2 | Y ekseni: 2 Kuzey
      </div>
    `,
    options: [
      { label: 'A', text: '(1, 2)', isCorrect: false },
      { label: 'B', text: '(2, 2)', isCorrect: true },
      { label: 'C', text: '(3, 1)', isCorrect: false },
      { label: 'D', text: '(0, 2)', isCorrect: false }
    ]
  },
  {
    num: 27,
    cat: 'Şekil Örtüşmesi (Dış Hat Çıkarma)',
    prompt: 'İçi dolu kare ile içi dolu daire üst üste gelirse hangi şekil dış hatları belirler?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 60" class="w-24 h-15">
          <circle cx="40" cy="30" r="22" fill="none" stroke="#334155" stroke-width="1.5"/>
          <circle cx="60" cy="30" r="22" fill="none" stroke="#334155" stroke-width="1.5"/>
          <path d="M50,11 A22,22 0 0,1 50,49 A22,22 0 0,1 50,11" fill="#0F172A"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'En dıştaki şeklin çevresi', isCorrect: true },
      { label: 'B', text: 'İkisi birbirini yok eder', isCorrect: false },
      { label: 'C', text: 'Üçgen oluşur', isCorrect: false },
      { label: 'D', text: 'Noktaya dönüşür', isCorrect: false }
    ]
  },
  {
    num: 28,
    cat: 'Terazi (Kaldıraç Dengesi)',
    prompt: 'Sol koldaki 2 kg\'lık ağırlık destek noktasına 2 birim uzaktadır (2 × 2 = 4). Sağ koldaki ağırlık 1 birim uzaklıktaysa denge için kaç kg olmalıdır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        Sol: 2 kg × 2 br = 4 ➔ Sağ: ? kg × 1 br = 4
      </div>
    `,
    options: [
      { label: 'A', text: '2 kg', isCorrect: false },
      { label: 'B', text: '3 kg', isCorrect: false },
      { label: 'C', text: '4 kg (4 ÷ 1 = 4)', isCorrect: true },
      { label: 'D', text: '5 kg', isCorrect: false }
    ]
  },
  {
    num: 29,
    cat: 'Kağıt Katlama (Çeyrek Katlama)',
    prompt: 'Kare kağıt önce dikey, sonra yatay katlanarak 4 katlı küçük kare yapılıyor. Tam merkezinden 1 delik delinip açılırsa kaç delik görünür?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        4 Katlı Kağıt × 1 Delik = ? Delik
      </div>
    `,
    options: [
      { label: 'A', text: '1', isCorrect: false },
      { label: 'B', text: '2', isCorrect: false },
      { label: 'C', text: '4 delik', isCorrect: true },
      { label: 'D', text: '8 delik', isCorrect: false }
    ]
  },
  {
    num: 30,
    cat: '3D Küp (Köprü Yapı)',
    prompt: 'İki yanda ikişer küplük kule vardır (4 küp). Bu kulelerin en üstlerinin arasına 1 küp köprü gibi yerleştirilmiştir. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 140 80" class="w-36 h-20">
          <rect x="20" y="20" width="25" height="50" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="95" y="20" width="25" height="50" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="45" y="20" width="50" height="25" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '5 (4 kule + 1 köprü = 5)', isCorrect: true },
      { label: 'B', text: '6', isCorrect: false },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '8', isCorrect: false }
    ]
  },
  {
    num: 31,
    cat: 'Uzamsal Rotasyon (Saat İbresi)',
    prompt: 'Saat 12\'yi gösteren akrep 90° saat yönünde dönerse hangi sayıyı gösterir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Saat 12 + 90° Saat Yönü ➔ Saat ?
      </div>
    `,
    options: [
      { label: 'A', text: '6', isCorrect: false },
      { label: 'B', text: '3', isCorrect: true },
      { label: 'C', text: '9', isCorrect: false },
      { label: 'D', text: '1', isCorrect: false }
    ]
  },
  {
    num: 32,
    cat: 'Şekil Analojisi (Köşe Çarpımı)',
    prompt: 'Üçgen (3) ➔ 6, Kare (4) ➔ 8 ise; Beşgen (5) ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        Kural: Köşe Sayısı × 2 | 5 × 2 = ?
      </div>
    `,
    options: [
      { label: 'A', text: '9', isCorrect: false },
      { label: 'B', text: '10 (Köşe sayısı × 2)', isCorrect: true },
      { label: 'C', text: '12', isCorrect: false },
      { label: 'D', text: '15', isCorrect: false }
    ]
  },
  {
    num: 33,
    cat: 'Perspektif (Tepeden Görünüm)',
    prompt: 'Koni şeklindeki bir nesneye tam tepeden (kuşbakışı) bakılırsa ne görünür?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <circle cx="40" cy="40" r="30" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <circle cx="40" cy="40" r="4" fill="#EF4444"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Üçgen', isCorrect: false },
      { label: 'B', text: 'Ortasında nokta olan bir daire', isCorrect: true },
      { label: 'C', text: 'Kare', isCorrect: false },
      { label: 'D', text: 'Düz çizgi', isCorrect: false }
    ]
  },
  {
    num: 34,
    cat: 'Aritmetik Örüntü (Çarpma Mantığı)',
    prompt: '2 ➔ 4 ➔ 8 ➔ 16 ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-purple-800 shadow-sm">
        2 (×2)➔ 4 (×2)➔ 8 (×2)➔ 16 (×2)➔ <span class="text-rose-600 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '24', isCorrect: false },
      { label: 'B', text: '28', isCorrect: false },
      { label: 'C', text: '32 (16 × 2 = 32)', isCorrect: true },
      { label: 'D', text: '30', isCorrect: false }
    ]
  },
  {
    num: 35,
    cat: 'Görsel Matris (Renk Geçişi)',
    prompt: '1. Sütun: Kırmızı ➔ Mor ➔ Mavi. 2. Sütun: Sarı ➔ Yeşil ➔ Mavi. 3. Sütun: Kırmızı ➔ Turuncu ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Renk Karışımları: Kırmızı + Sarı = Turuncu ➔ Kırmızı ➔ Turuncu ➔ ?
      </div>
    `,
    options: [
      { label: 'A', text: 'Mavi', isCorrect: false },
      { label: 'B', text: 'Sarı (Renk karışım kuralı)', isCorrect: true },
      { label: 'C', text: 'Mor', isCorrect: false },
      { label: 'D', text: 'Yeşil', isCorrect: false }
    ]
  },
  {
    num: 36,
    cat: 'Şekil Döndürme (270° Saat Yönü)',
    prompt: 'Sağa bakan ok saat yönünde 270° döndürülürse nereye bakar?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        270° Saat Yönü = 90° Saat Yönü Tersi (↺)
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa', isCorrect: false },
      { label: 'B', text: 'Sola', isCorrect: false },
      { label: 'C', text: 'Aşağı', isCorrect: false },
      { label: 'D', text: 'Yukarı (270° saat yönü = 90° tersi)', isCorrect: true }
    ]
  },
  {
    num: 37,
    cat: '3D Küp (3x3 Taban Kule)',
    prompt: 'Alt katta 9 küp (3x3), orta katta 4 küp (2x2), en üst katta 1 küp olan piramitte toplam kaç küp vardır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-purple-800 shadow-sm">
        9 + 4 + 1 = ? Küp
      </div>
    `,
    options: [
      { label: 'A', text: '12', isCorrect: false },
      { label: 'B', text: '13', isCorrect: false },
      { label: 'C', text: '14 (9 + 4 + 1 = 14)', isCorrect: true },
      { label: 'D', text: '16', isCorrect: false }
    ]
  },
  {
    num: 38,
    cat: 'Şekil Tamamlama (Eksik Çeyrek)',
    prompt: 'Tam bir dairenin 3 çeyreği doludur, 1 çeyreği boştur. Boşluğu hangisi tamamlar?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <path d="M40,40 L40,10 A30,30 0 1,1 10,40 Z" fill="#8B5CF6"/>
          <path d="M40,40 L10,40 A30,30 0 0,1 40,10 Z" fill="none" stroke="#D1D5DB" stroke-width="2" stroke-dasharray="3,3"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Yarım daire', isCorrect: false },
      { label: 'B', text: 'Çeyrek daire dilimi', isCorrect: true },
      { label: 'C', text: 'Tam daire', isCorrect: false },
      { label: 'D', text: 'Üçgen', isCorrect: false }
    ]
  },
  {
    num: 39,
    cat: 'Sayısal Eşitlik (Sembolik)',
    prompt: 'A + B = 10 ve A - B = 4 olduğuna göre A sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>2A = 14 ➔ A = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '6', isCorrect: false },
      { label: 'B', text: '7 (7 + 3 = 10, 7 - 3 = 4)', isCorrect: true },
      { label: 'C', text: '8', isCorrect: false },
      { label: 'D', text: '5', isCorrect: false }
    ]
  },
  {
    num: 40,
    cat: 'Büyük Final Matrisi (3 Özellik)',
    prompt: '3x3 matriste her satırda: Şekil (Kare, Daire, Üçgen), Renk (Kırmızı, Mavi, Sarı), Çizgi (Düz, Kesikli, Çift Çizgi) bulunur. 3. satırda eksik olan şekil hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Eksik Özellikler: [Sarı] + [Üçgen] + [Çift Çizgili]
      </div>
    `,
    options: [
      { label: 'A', text: 'Düz Mavi Daire', isCorrect: false },
      { label: 'B', text: 'Kesikli Kırmızı Kare', isCorrect: false },
      { label: 'C', text: 'Çift Çizgili Sarı Üçgen', isCorrect: true },
      { label: 'D', text: 'Düz Sarı Kare', isCorrect: false }
    ]
  }
];
