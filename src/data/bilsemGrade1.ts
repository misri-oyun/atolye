import { BilsemQuestion } from '../types';

export const GRADE_1_EXAM_40_QUESTIONS: BilsemQuestion[] = [
  {
    num: 1,
    cat: 'Görsel Matris (Boyut Değişimi)',
    prompt: 'İlk sıradaki kuralı bulunuz. Soru işareti (?) yerine hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 240 110" class="w-60 h-28">
          <rect x="10" y="10" width="42" height="42" fill="#F8FAFC" stroke="#CBD5E1" rx="6"/>
          <circle cx="31" cy="31" r="8" fill="#EF4444"/>
          <path d="M60,31 L80,31 M75,26 L80,31 L75,36" stroke="#64748B" stroke-width="2" fill="none"/>
          <rect x="90" y="10" width="42" height="42" fill="#F8FAFC" stroke="#CBD5E1" rx="6"/>
          <circle cx="111" cy="31" r="16" fill="#EF4444"/>
          <rect x="10" y="60" width="42" height="42" fill="#F8FAFC" stroke="#CBD5E1" rx="6"/>
          <polygon points="31,71 21,91 41,91" fill="#3B82F6"/>
          <path d="M60,81 L80,81 M75,76 L80,81 L75,86" stroke="#64748B" stroke-width="2" fill="none"/>
          <rect x="90" y="60" width="42" height="42" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3,3" rx="6"/>
          <text x="111" y="88" font-size="20" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Küçük Mavi Kare', isCorrect: false },
      { label: 'B', text: 'Büyük Kırmızı Üçgen', isCorrect: false },
      { label: 'C', text: 'Büyük Mavi Üçgen', isCorrect: true },
      { label: 'D', text: 'Küçük Sarı Daire', isCorrect: false }
    ]
  },
  {
    num: 2,
    cat: 'Parça - Bütün (Kayıp Dilim)',
    prompt: 'Dairenin sağ alt köşesindeki eksik çeyrek dilim hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24">
          <path d="M50,50 L90,50 A40,40 0 0,0 50,10 Z" fill="#10B981"/>
          <path d="M50,50 L50,10 A40,40 0 0,0 10,50 Z" fill="#F59E0B"/>
          <path d="M50,50 L10,50 A40,40 0 0,0 50,90 Z" fill="#3B82F6"/>
          <path d="M50,50 L50,90 A40,40 0 0,0 90,50 Z" fill="#F8FAFC" stroke="#64748B" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="68" y="74" font-size="16" font-weight="black" fill="#0F172A" text-anchor="middle">?</text>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#334155" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Mavi Daire Dilimi', isCorrect: false },
      { label: 'B', text: 'Kırmızı Çeyrek Dilim (4. Ana Renk)', isCorrect: true },
      { label: 'C', text: 'Mor Tam Daire', isCorrect: false },
      { label: 'D', text: 'Sarı Çizgili Kare', isCorrect: false }
    ]
  },
  {
    num: 3,
    cat: '3D Küp Sayma (Görünmeyen Taban)',
    prompt: 'Görünmeyen taban blokları dahil toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 140 100" class="w-36 h-26">
          <polygon points="35,45 55,35 75,45 55,55" fill="#FDE68A" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="35,45 55,55 55,75 35,65" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="55,55 75,45 75,65 55,75" fill="#D97706" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="75,25 95,15 115,25 95,35" fill="#FDE68A" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="75,25 95,35 95,55 75,45" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="95,35 115,25 115,45 95,55" fill="#D97706" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="75,45 95,55 95,75 75,65" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
          <polygon points="95,55 115,45 115,65 95,75" fill="#D97706" stroke="#B45309" stroke-width="1.5"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '3 Küp (1 + 2 = 3)', isCorrect: true },
      { label: 'B', text: '4 Küp', isCorrect: false },
      { label: 'C', text: '2 Küp', isCorrect: false },
      { label: 'D', text: '5 Küp', isCorrect: false }
    ]
  },
  {
    num: 4,
    cat: 'Gölge & Silüet Eşleme',
    prompt: 'Soldaki figürün birebir tam siyah gölgesi hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20 bg-amber-50 rounded-xl border border-amber-200">
          <rect x="25" y="30" width="18" height="36" fill="#F59E0B" rx="3"/>
          <rect x="33" y="12" width="10" height="24" fill="#F59E0B"/>
          <circle cx="42" cy="14" r="8" fill="#F59E0B"/>
          <path d="M25,40 Q12,32 16,22" stroke="#EF4444" stroke-width="3" fill="none"/>
          <rect x="26" y="66" width="5" height="10" fill="#B45309"/>
          <rect x="36" y="66" width="5" height="10" fill="#B45309"/>
        </svg>
        <span class="text-xl font-bold text-slate-400">➔</span>
        <div class="w-20 h-20 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Kuyruğu sola sarkan gölge', isCorrect: false },
      { label: 'B', text: 'Kafası kare olan silüet', isCorrect: false },
      { label: 'C', text: 'Kuyruğu yukarı kıvrık tam silüet', isCorrect: true },
      { label: 'D', text: 'Boynu kısa at silüeti', isCorrect: false }
    ]
  },
  {
    num: 5,
    cat: 'Görsel Örüntü (Döngü)',
    prompt: 'Kuralı takip ediniz: Daire ➔ Kare ➔ Üçgen ➔ Daire ➔ Kare ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 240 50" class="w-64 h-14">
          <circle cx="20" cy="25" r="14" fill="#EF4444"/>
          <rect x="52" y="11" width="28" height="28" fill="#3B82F6" rx="3"/>
          <polygon points="112,11 98,39 126,39" fill="#F59E0B"/>
          <circle cx="152" cy="25" r="14" fill="#EF4444"/>
          <rect x="184" y="11" width="28" height="28" fill="#3B82F6" rx="3"/>
          <rect x="222" y="11" width="16" height="28" fill="#FEF3C7" stroke="#F59E0B" stroke-dasharray="2,2"/>
          <text x="230" y="31" font-size="14" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Kırmızı Daire', isCorrect: false },
      { label: 'B', text: 'Mor Yıldız', isCorrect: false },
      { label: 'C', text: 'Mavi Kare', isCorrect: false },
      { label: 'D', text: 'Sarı Üçgen', isCorrect: true }
    ]
  },
  {
    num: 6,
    cat: 'Kağıt Katlama (1 Kat Simetrisi)',
    prompt: 'Kare kağıt ortadan sağa katlanıp dış kenarından yarım daire oyuluyor. Kağıt açıldığında ne görünür?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 70 70" class="w-16 h-16">
          <rect x="5" y="5" width="60" height="60" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <line x1="35" y1="5" x2="35" y2="65" stroke="#64748B" stroke-width="2" stroke-dasharray="3,3"/>
          <path d="M22,35 L48,35 M42,30 L48,35 L42,40" stroke="#3B82F6" stroke-width="2" fill="none"/>
        </svg>
        <span class="text-base font-bold text-slate-400">➔</span>
        <svg viewBox="0 0 45 70" class="w-10 h-16">
          <path d="M5,5 L40,5 L40,23 A12,12 0 0,0 40,47 L40,65 L5,65 Z" fill="#E2E8F0" stroke="#334155" stroke-width="2"/>
        </svg>
        <span class="text-base font-bold text-slate-400">➔</span>
        <div class="w-16 h-16 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Ortasında tam daire deliği', isCorrect: false },
      { label: 'B', text: 'Sol ve sağ kenarında karşılıklı iki yarım oyuk', isCorrect: true },
      { label: 'C', text: 'Sadece sağında tek oyuk', isCorrect: false },
      { label: 'D', text: 'Dört köşesi kesik kağıt', isCorrect: false }
    ]
  },
  {
    num: 7,
    cat: 'Terazi & Denge',
    prompt: '1 Elma = 2 Çilek dengededir. Sol kefeye 2 Elma konulursa denge için sağ kefeye kaç Çilek gerekir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 90" class="w-56 h-24">
          <line x1="20" y1="40" x2="180" y2="40" stroke="#334155" stroke-width="3"/>
          <polygon points="100,40 85,75 115,75" fill="#475569"/>
          <line x1="30" y1="40" x2="30" y2="55" stroke="#64748B" stroke-width="2"/>
          <rect x="15" y="55" width="30" height="6" fill="#94A3B8" rx="2"/>
          <circle cx="24" cy="50" r="6" fill="#EF4444"/>
          <circle cx="36" cy="50" r="6" fill="#EF4444"/>
          <text x="30" y="72" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">2 Elma</text>
          <line x1="170" y1="40" x2="170" y2="55" stroke="#64748B" stroke-width="2"/>
          <rect x="155" y="55" width="30" height="6" fill="#94A3B8" rx="2"/>
          <text x="170" y="50" font-size="14" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
          <text x="170" y="72" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">? Çilek</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '3 Çilek', isCorrect: false },
      { label: 'B', text: '4 Çilek (2 × 2 = 4)', isCorrect: true },
      { label: 'C', text: '5 Çilek', isCorrect: false },
      { label: 'D', text: '2 Çilek', isCorrect: false }
    ]
  },
  {
    num: 8,
    cat: 'Uzamsal Rotasyon (90° Saat Yönü)',
    prompt: 'Yukarı bakan ok saat yönünde 90° döndürülürse nereye bakar?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-16 h-16">
          <path d="M30,50 L30,15 M20,25 L30,15 L40,25" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M42,22 A16,16 0 0,1 50,38" stroke="#F59E0B" stroke-width="2" fill="none"/>
          <polygon points="50,42 46,36 53,36" fill="#F59E0B"/>
          <text x="48" y="18" font-size="10" font-weight="bold" fill="#D97706">90°</text>
        </svg>
        <span class="text-xl font-bold text-slate-400">➔</span>
        <div class="w-16 h-16 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa bakan ok (→)', isCorrect: true },
      { label: 'B', text: 'Aşağı bakan ok (↓)', isCorrect: false },
      { label: 'C', text: 'Sola bakan ok (←)', isCorrect: false },
      { label: 'D', text: 'Çapraz bakan ok', isCorrect: false }
    ]
  },
  {
    num: 9,
    cat: 'Görsel Matris (Renk Takası)',
    prompt: 'Kurala göre soru işareti yerine hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 100" class="w-52 h-26">
          <rect x="20" y="10" width="36" height="36" fill="#EF4444" stroke="#3B82F6" stroke-width="4" rx="4"/>
          <path d="M70,28 L90,28 M85,23 L90,28 L85,33" stroke="#64748B" stroke-width="2" fill="none"/>
          <rect x="100" y="10" width="36" height="36" fill="#3B82F6" stroke="#EF4444" stroke-width="4" rx="4"/>
          <rect x="20" y="55" width="36" height="36" fill="#10B981" stroke="#F59E0B" stroke-width="4" rx="4"/>
          <path d="M70,73 L90,73 M85,68 L90,73 L85,78" stroke="#64748B" stroke-width="2" fill="none"/>
          <rect x="100" y="55" width="36" height="36" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3,3" rx="4"/>
          <text x="118" y="79" font-size="18" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'İçi Sarı - Dışı Mor Çerçeve', isCorrect: false },
      { label: 'B', text: 'İçi Yeşil - Dışı Sarı Çerçeve', isCorrect: true },
      { label: 'C', text: 'Tamamı Yeşil Kare', isCorrect: false },
      { label: 'D', text: 'Tamamı Sarı Daire', isCorrect: false }
    ]
  },
  {
    num: 10,
    cat: '3D Küp Sayma (L Blok)',
    prompt: 'L biçiminde dizilmiş yapıda toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 160 100" class="w-44 h-26">
          <rect x="20" y="60" width="28" height="28" fill="#93C5FD" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
          <rect x="48" y="60" width="28" height="28" fill="#93C5FD" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
          <rect x="76" y="60" width="28" height="28" fill="#93C5FD" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
          <rect x="76" y="32" width="28" height="28" fill="#60A5FA" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
          <rect x="76" y="4" width="28" height="28" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" rx="3"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '6', isCorrect: false },
      { label: 'C', text: '5 (3 taban + 2 kule)', isCorrect: true },
      { label: 'D', text: '7', isCorrect: false }
    ]
  },
  {
    num: 11,
    cat: 'Farklı Olanı Bulma',
    prompt: 'Geometrik şekillerden hangisi diğerlerinden farklıdır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm">
        <svg viewBox="0 0 220 50" class="w-60 h-14">
          <polygon points="25,10 10,40 40,40" fill="none" stroke="#334155" stroke-width="2"/>
          <rect x="65" y="10" width="30" height="30" fill="none" stroke="#334155" stroke-width="2"/>
          <rect x="115" y="15" width="40" height="25" fill="none" stroke="#334155" stroke-width="2"/>
          <circle cx="190" cy="25" r="16" fill="none" stroke="#EF4444" stroke-width="2.5"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Kare', isCorrect: false },
      { label: 'B', text: 'Üçgen', isCorrect: false },
      { label: 'C', text: 'Dikdörtgen', isCorrect: false },
      { label: 'D', text: 'Daire (Köşesi ve kenarı yoktur)', isCorrect: true }
    ]
  },
  {
    num: 12,
    cat: 'Dişli Çark Yön Mantığı',
    prompt: '1. Çark saat yönünde dönerse, 2. Çark hangi yönde döner?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 160 80" class="w-44 h-22">
          <circle cx="45" cy="40" r="28" fill="#FEF08A" stroke="#CA8A04" stroke-width="2"/>
          <text x="45" y="44" font-size="12" font-weight="black" fill="#854D0E" text-anchor="middle">1 ↻</text>
          <circle cx="95" cy="40" r="24" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <text x="95" y="44" font-size="12" font-weight="black" fill="#1E40AF" text-anchor="middle">2 ?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Saat Yönünün Tersine (Sola ↺)', isCorrect: true },
      { label: 'B', text: 'Saat Yönünde (Sağa ↻)', isCorrect: false },
      { label: 'C', text: 'Dönmez, kilitlenir', isCorrect: false },
      { label: 'D', text: 'Yukarı-aşağı kayar', isCorrect: false }
    ]
  },
  {
    num: 13,
    cat: 'Şeffaf Asetat Çakışması',
    prompt: 'İki şeffaf kare üst üste konulduğunda hangi şekil oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 50 50" class="w-12 h-12">
          <rect x="2" y="2" width="46" height="46" fill="#F8FAFC" stroke="#64748B" stroke-width="1.5" rx="3"/>
          <line x1="25" y1="5" x2="25" y2="45" stroke="#EF4444" stroke-width="3"/>
        </svg>
        <span class="text-xl font-bold text-slate-400">+</span>
        <svg viewBox="0 0 50 50" class="w-12 h-12">
          <rect x="2" y="2" width="46" height="46" fill="#F8FAFC" stroke="#64748B" stroke-width="1.5" rx="3"/>
          <line x1="5" y1="25" x2="45" y2="25" stroke="#3B82F6" stroke-width="3"/>
        </svg>
        <span class="text-xl font-bold text-slate-400">=</span>
        <div class="w-12 h-12 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Çarpı işareti (×)', isCorrect: false },
      { label: 'B', text: 'Artı işareti (+)', isCorrect: true },
      { label: 'C', text: 'İçi boş kare', isCorrect: false },
      { label: 'D', text: 'Tek dikey çizgi', isCorrect: false }
    ]
  },
  {
    num: 14,
    cat: 'Görsel Matris (Eksilme)',
    prompt: 'Sembol eksilme kuralına göre soru işareti yerine ne gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 40" class="w-56 h-12">
          <circle cx="20" cy="20" r="5" fill="#334155"/>
          <circle cx="35" cy="20" r="5" fill="#334155"/>
          <circle cx="50" cy="20" r="5" fill="#334155"/>
          <path d="M68,20 L84,20 M79,16 L84,20 L79,24" stroke="#64748B" stroke-width="1.5" fill="none"/>
          <circle cx="100" cy="20" r="5" fill="#334155"/>
          <circle cx="115" cy="20" r="5" fill="#334155"/>
          <path d="M133,20 L149,20 M144,16 L149,20 L144,24" stroke="#64748B" stroke-width="1.5" fill="none"/>
          <rect x="165" y="5" width="28" height="28" fill="#FEF3C7" stroke="#F59E0B" stroke-dasharray="2,2" rx="4"/>
          <text x="179" y="24" font-size="14" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '3 Daire', isCorrect: false },
      { label: 'B', text: 'Kare', isCorrect: false },
      { label: 'C', text: '1 Daire (3 ➔ 2 ➔ 1)', isCorrect: true },
      { label: 'D', text: 'Boş Kutu', isCorrect: false }
    ]
  },
  {
    num: 15,
    cat: 'Perspektif (Üstten Görünüm)',
    prompt: 'Bir silindire (konserve kutusu) tam tepeden bakılırsa ne görünür?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 80" class="w-26 h-20">
          <ellipse cx="50" cy="30" rx="30" ry="12" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
          <line x1="20" y1="30" x2="20" y2="60" stroke="#475569" stroke-width="2"/>
          <line x1="80" y1="30" x2="80" y2="60" stroke="#475569" stroke-width="2"/>
          <path d="M20,60 A30,12 0 0,0 80,60" fill="none" stroke="#475569" stroke-width="2"/>
          <path d="M50,5 L50,18 M45,13 L50,18 L55,13" stroke="#EF4444" stroke-width="2" fill="none"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Daire', isCorrect: true },
      { label: 'B', text: 'Dikdörtgen', isCorrect: false },
      { label: 'C', text: 'Üçgen', isCorrect: false },
      { label: 'D', text: 'Kare', isCorrect: false }
    ]
  },
  {
    num: 16,
    cat: 'Aritmetik Örüntü (+2 İleri)',
    prompt: 'Vagonlardaki sayı örüntüsünü takip ediniz: 2 ➔ 4 ➔ 6 ➔ 8 ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm font-mono font-bold">
        <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">2</span> ➔
        <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">4</span> ➔
        <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">6</span> ➔
        <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700">8</span> ➔
        <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 rounded-lg text-amber-700 font-black">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '9', isCorrect: false },
      { label: 'B', text: '11', isCorrect: false },
      { label: 'C', text: '12', isCorrect: false },
      { label: 'D', text: '10 (8 + 2 = 10)', isCorrect: true }
    ]
  },
  {
    num: 17,
    cat: 'Şekil Analojisi (Dış Katman Çıkarma)',
    prompt: 'Üçgen içindeki kırmızı üçgen dışarı çıkıyor. Kare içindeki mavi daire için sonuç ne olur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <span class="text-xs font-bold text-slate-700">[Üçgen içinde Kırmızı Üçgen] ➔ [Kırmızı Üçgen]</span>
        <span class="text-slate-400">|</span>
        <span class="text-xs font-bold text-slate-700">[Kare içinde Mavi Daire] ➔ [ ? ]</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Mavi Daire', isCorrect: true },
      { label: 'B', text: 'Boş Kare', isCorrect: false },
      { label: 'C', text: 'Daire içinde Kare', isCorrect: false },
      { label: 'D', text: 'İki adet Kare', isCorrect: false }
    ]
  },
  {
    num: 18,
    cat: '3D Küp (Merdiven Blok)',
    prompt: '1. basamakta 1, 2. basamakta 2, 3. basamakta 3 küp vardır. Toplam küp sayısı kaçtır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 140 90" class="w-38 h-24">
          <rect x="15" y="55" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="2"/>
          <rect x="45" y="55" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="2"/>
          <rect x="45" y="27" width="28" height="28" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" rx="2"/>
          <rect x="75" y="55" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="2"/>
          <rect x="75" y="27" width="28" height="28" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" rx="2"/>
          <rect x="75" y="-1" width="28" height="28" fill="#D97706" stroke="#B45309" stroke-width="1.5" rx="2"/>
        </svg>
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
    num: 19,
    cat: 'Ayna Simetrisi',
    prompt: 'C harfinin dikey aynadaki doğru yansıması hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm">
        <svg viewBox="0 0 100 60" class="w-28 h-18">
          <text x="25" y="42" font-size="34" font-weight="black" fill="#1E293B" text-anchor="middle">C</text>
          <line x1="50" y1="5" x2="50" y2="55" stroke="#3B82F6" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="75" y="42" font-size="28" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Açık ağzı sola bakan ters C (Ͻ)', isCorrect: true },
      { label: 'B', text: 'U harfi', isCorrect: false },
      { label: 'C', text: 'Düz C harfi', isCorrect: false },
      { label: 'D', text: 'O harfi', isCorrect: false }
    ]
  },
  {
    num: 20,
    cat: 'Köşe Sayısı Artışı',
    prompt: 'Köşe sayısına göre sıradaki şekil hangisidir? Üçgen (3) ➔ Kare (4) ➔ Beşgen (5) ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <span class="text-xs font-bold text-slate-700">Üçgen (3) ➔ Kare (4) ➔ Beşgen (5) ➔ <b class="text-indigo-600">[ 6 Köşe = ? ]</b></span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Daire', isCorrect: false },
      { label: 'B', text: 'Altıgen (6 köşe)', isCorrect: true },
      { label: 'C', text: 'Çizgi', isCorrect: false },
      { label: 'D', text: 'Yıldız', isCorrect: false }
    ]
  },
  {
    num: 21,
    cat: 'Şekil Birleştirme',
    prompt: 'İki eşit dik üçgen uzun kenarlarından (hipotenüs) birleşirse ne oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-14 h-14">
          <polygon points="10,10 50,10 10,50" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <polygon points="50,50 10,50 50,10" fill="#C4B5FD" stroke="#6D28D9" stroke-width="2"/>
        </svg>
        <span class="text-xl font-bold text-slate-400">➔</span>
        <div class="w-14 h-14 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Daire', isCorrect: false },
      { label: 'B', text: 'Yamuk', isCorrect: false },
      { label: 'C', text: 'Kare / Dikdörtgen', isCorrect: true },
      { label: 'D', text: 'Beşgen', isCorrect: false }
    ]
  },
  {
    num: 22,
    cat: 'Mantıksal Çıkarım (Boy)',
    prompt: 'Yeşil kalem Kırmızıdan uzundur. Kırmızı kalem de Maviden uzundur. En uzun kalem hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm font-bold text-xs gap-3">
        <span class="text-blue-600">Mavi</span> < <span class="text-red-600">Kırmızı</span> < <span class="text-emerald-600">Yeşil</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Mavi Kalem', isCorrect: false },
      { label: 'B', text: 'Kırmızı Kalem', isCorrect: false },
      { label: 'C', text: 'Yeşil Kalem (Yeşil > Kırmızı > Mavi)', isCorrect: true },
      { label: 'D', text: 'Hepsi eşit boydadır', isCorrect: false }
    ]
  },
  {
    num: 23,
    cat: '3D Küp (2x2 Taban)',
    prompt: 'Tabanında 4 küp (2x2) ve üstünde 2 küp olan yapıda toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <span class="text-xs font-bold text-slate-700">Taban: 4 küp (2x2) + Üst Kat: 2 küp = ?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (4 + 2 = 6)', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '8', isCorrect: false }
    ]
  },
  {
    num: 24,
    cat: 'Görsel Dikkat (Tek Olan)',
    prompt: 'Kutuda 2 Kedi, 2 Köpek, 2 Kuş ve 1 Balık vardır. Eşi (çifti) olmayan hayvan hangisidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 text-2xl shadow-sm">
        <span>🐱</span><span>🐱</span><span>🐶</span><span>🐶</span><span>🐦</span><span>🐦</span><span class="text-3xl drop-shadow">🐟</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Köpek', isCorrect: false },
      { label: 'B', text: 'Kedi', isCorrect: false },
      { label: 'C', text: 'Balık (Tek kalmıştır)', isCorrect: true },
      { label: 'D', text: 'Kuş', isCorrect: false }
    ]
  },
  {
    num: 25,
    cat: 'Aritmetik Şifreler',
    prompt: '★ + ★ = 6 olduğuna göre, tek bir ★ kaçtır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 text-xl font-black text-amber-500 shadow-sm">
        <span>★</span> <span class="text-slate-400">+</span> <span>★</span> <span class="text-slate-400">=</span> <span class="text-slate-800">6</span>
      </div>
    `,
    options: [
      { label: 'A', text: '2', isCorrect: false },
      { label: 'B', text: '3 (3 + 3 = 6)', isCorrect: true },
      { label: 'C', text: '4', isCorrect: false },
      { label: 'D', text: '5', isCorrect: false }
    ]
  },
  {
    num: 26,
    cat: 'Koordinat ve Rota',
    prompt: 'Tavşan: 2 kare İLERİ, 1 kare SAĞA, 1 kare İLERİ gidiyor. Hangi hedefe varır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 120 120" class="w-28 h-28">
          <rect x="0" y="0" width="120" height="120" fill="#F8FAFC" stroke="#CBD5E1"/>
          <line x1="40" y1="0" x2="40" y2="120" stroke="#E2E8F0"/>
          <line x1="80" y1="0" x2="80" y2="120" stroke="#E2E8F0"/>
          <line x1="0" y1="40" x2="120" y2="40" stroke="#E2E8F0"/>
          <line x1="0" y1="80" x2="120" y2="80" stroke="#E2E8F0"/>
          <text x="20" y="110" font-size="16" text-anchor="middle">🐰</text>
          <text x="60" y="70" font-size="14" font-weight="black" fill="#10B981" text-anchor="middle">4 🎯</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '1. Kutu', isCorrect: false },
      { label: 'B', text: '2. Kutu', isCorrect: false },
      { label: 'C', text: '3. Kutu', isCorrect: false },
      { label: 'D', text: '4. Kutu (Hedef 🎯)', isCorrect: true }
    ]
  },
  {
    num: 27,
    cat: 'Doku & İç Dolgu',
    prompt: 'Boş Daire ➔ Çizgili Daire ➔ Sırada ne olmalıdır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 50 50" class="w-12 h-12">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#334155" stroke-width="2"/>
        </svg>
        <span class="text-base font-bold text-slate-400">➔</span>
        <svg viewBox="0 0 50 50" class="w-12 h-12">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#334155" stroke-width="2"/>
          <line x1="12" y1="20" x2="38" y2="20" stroke="#334155" stroke-width="2"/>
          <line x1="8" y1="25" x2="42" y2="25" stroke="#334155" stroke-width="2"/>
        </svg>
        <span class="text-base font-bold text-slate-400">➔</span>
        <div class="w-12 h-12 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Tam Dolu Siyah Daire', isCorrect: true },
      { label: 'B', text: 'Boş Üçgen', isCorrect: false },
      { label: 'C', text: 'Çizgili Kare', isCorrect: false },
      { label: 'D', text: 'Noktalı Daire', isCorrect: false }
    ]
  },
  {
    num: 28,
    cat: 'Terazi (Hafiflik)',
    prompt: 'Terazinin sol kefesi Taş ile aşağı inmiştir. Sağ kefedeki Tüy yukarıda kalmıştır. Hangisi daha HAFİF\'tir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 180 80" class="w-52 h-24">
          <line x1="20" y1="55" x2="160" y2="25" stroke="#334155" stroke-width="3"/>
          <polygon points="90,40 80,75 100,75" fill="#475569"/>
          <circle cx="30" cy="58" r="10" fill="#475569"/>
          <text x="30" y="76" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">Taş</text>
          <ellipse cx="150" cy="22" rx="10" ry="4" fill="#93C5FD"/>
          <text x="150" y="40" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">Tüy</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Taş', isCorrect: false },
      { label: 'B', text: 'Tüy (Yukarıda kalan kefedir)', isCorrect: true },
      { label: 'C', text: 'İkisi eşit', isCorrect: false },
      { label: 'D', text: 'Bilinemez', isCorrect: false }
    ]
  },
  {
    num: 29,
    cat: 'Köşegen Katlama',
    prompt: 'Kare kağıt tam çapraz köşegeninden katlanırsa hangi şekil oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-14 h-14">
          <rect x="5" y="5" width="50" height="50" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <line x1="5" y1="55" x2="55" y2="5" stroke="#EF4444" stroke-width="2" stroke-dasharray="3,3"/>
        </svg>
        <span class="text-xl font-bold text-slate-400">➔</span>
        <div class="w-14 h-14 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Dikdörtgen', isCorrect: false },
      { label: 'B', text: 'Küçük Kare', isCorrect: false },
      { label: 'C', text: 'Üçgen', isCorrect: true },
      { label: 'D', text: 'Daire', isCorrect: false }
    ]
  },
  {
    num: 30,
    cat: '3D Küp (Köşe Yapı)',
    prompt: 'Alt sırada 3 küp ve köşedeki küpün üstünde 1 küp vardır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 140 80" class="w-36 h-20">
          <rect x="20" y="45" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="3"/>
          <rect x="50" y="45" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="3"/>
          <rect x="80" y="45" width="28" height="28" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" rx="3"/>
          <rect x="80" y="15" width="28" height="28" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" rx="3"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '3', isCorrect: false },
      { label: 'B', text: '4 (3 alt + 1 üst)', isCorrect: true },
      { label: 'C', text: '5', isCorrect: false },
      { label: 'D', text: '6', isCorrect: false }
    ]
  },
  {
    num: 31,
    cat: 'Yön Örüntüsü',
    prompt: 'Yukarı (↑) ➔ Aşağı (↓) ➔ Yukarı (↑) ➔ Aşağı (↓) ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 text-2xl font-black text-indigo-600 shadow-sm">
        <span>↑</span><span>↓</span><span>↑</span><span>↓</span><span class="text-rose-600">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa (→)', isCorrect: false },
      { label: 'B', text: 'Sola (←)', isCorrect: false },
      { label: 'C', text: 'Yukarı (↑)', isCorrect: true },
      { label: 'D', text: 'Aşağı (↓)', isCorrect: false }
    ]
  },
  {
    num: 32,
    cat: 'Renk Negatifi',
    prompt: 'Beyaz Daire ➔ Siyah Daire ise; Beyaz Üçgen ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm text-xs font-bold">
        <span>[Beyaz Daire] ➔ [Siyah Daire]</span>
        <span class="text-slate-400">|</span>
        <span>[Beyaz Üçgen] ➔ [ ? ]</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Siyah Üçgen', isCorrect: true },
      { label: 'B', text: 'Siyah Kare', isCorrect: false },
      { label: 'C', text: 'Kırmızı Daire', isCorrect: false },
      { label: 'D', text: 'Çizgili Üçgen', isCorrect: false }
    ]
  },
  {
    num: 33,
    cat: 'Perspektif (Örtüşme)',
    prompt: 'Kırmızı küpün tam arkasında aynı boyda Mavi küp vardır. Önden bakılınca Mavi küp görünür mü?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <div class="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow">Ön: Kırmızı</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Evet, görünür', isCorrect: false },
      { label: 'B', text: 'Hayır, öndeki küp onu tamamen kapatır', isCorrect: true },
      { label: 'C', text: 'Yarısı görünür', isCorrect: false },
      { label: 'D', text: 'Üstünde görünür', isCorrect: false }
    ]
  },
  {
    num: 34,
    cat: 'Geriye Ritmik Sayma',
    prompt: '10 ➔ 9 ➔ 8 ➔ 7 ➔ ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 font-mono font-bold text-sm shadow-sm">
        <span class="px-2.5 py-1 bg-slate-100 rounded">10</span>➔
        <span class="px-2.5 py-1 bg-slate-100 rounded">9</span>➔
        <span class="px-2.5 py-1 bg-slate-100 rounded">8</span>➔
        <span class="px-2.5 py-1 bg-slate-100 rounded">7</span>➔
        <span class="px-2.5 py-1 bg-amber-100 text-amber-700 font-black rounded">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (Geriye 1 eksilerek)', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '4', isCorrect: false }
    ]
  },
  {
    num: 35,
    cat: 'Çerçeve Analojisi',
    prompt: 'Daire içinde Artı (+) şekli ➔ Kare içinde Artı (+) oluyor. Daire içinde Çarpı (×) şekli neye dönüşür?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold shadow-sm">
        <span>[Dairede +] ➔ [Karede +]</span>
        <span class="text-slate-400">|</span>
        <span>[Dairede ×] ➔ [ ? ]</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Kare içinde Çarpı (×)', isCorrect: true },
      { label: 'B', text: 'Üçgen içinde Daire', isCorrect: false },
      { label: 'C', text: 'Boş Kare', isCorrect: false },
      { label: 'D', text: 'Daire içinde Eksi (-)', isCorrect: false }
    ]
  },
  {
    num: 36,
    cat: '180° Ters Çevirme',
    prompt: 'Gülümseyen yüz tam 180° baş aşağı çevrilirse ağız nereye bakar?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 text-3xl shadow-sm">
        <span>🙂</span> <span class="text-slate-400 text-sm">➔ 180° ➔</span> <span class="text-2xl font-black text-indigo-600">?</span>
      </div>
    `,
    options: [
      { label: 'A', text: 'Yan bakar', isCorrect: false },
      { label: 'B', text: 'Yukarı bakar (Baş aşağı yüz)', isCorrect: true },
      { label: 'C', text: 'Normal durur', isCorrect: false },
      { label: 'D', text: 'Değişmez', isCorrect: false }
    ]
  },
  {
    num: 37,
    cat: '3D Küp Sayma',
    prompt: 'Tabanda 6 küp vardır. Ortadaki 2 küpün üstünde 1\'er küp daha vardır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <span class="text-xs font-bold text-slate-700">Taban: 6 küp + Üst sıra: 2 küp = ?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '7', isCorrect: false },
      { label: 'B', text: '8 (6 + 2 = 8)', isCorrect: true },
      { label: 'C', text: '9', isCorrect: false },
      { label: 'D', text: '10', isCorrect: false }
    ]
  },
  {
    num: 38,
    cat: 'Kelebek Kanadı Simetrisi',
    prompt: 'Kelebeğin sol kanadı mavi beneklidir. Sağ kanadı ayna kuralına göre nasıl olmalıdır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 70" class="w-26 h-18">
          <line x1="50" y1="10" x2="50" y2="60" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
          <path d="M50,20 Q15,5 20,35 Q15,55 50,45" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <circle cx="30" cy="28" r="4" fill="#1D4ED8"/>
          <path d="M50,20 Q85,5 80,35 Q85,55 50,45" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="66" y="38" font-size="14" font-weight="black" fill="#D97706" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Birebir aynı mavi benekli simetrik kanat', isCorrect: true },
      { label: 'B', text: 'Beneksiz yeşil kanat', isCorrect: false },
      { label: 'C', text: 'Yuvarlak sarı kanat', isCorrect: false },
      { label: 'D', text: 'Kanatsız', isCorrect: false }
    ]
  },
  {
    num: 39,
    cat: 'Sayısal Değer Eşleştirme',
    prompt: 'Üçgen = 3 puan, Kare = 2 puan ise; Üçgen + Kare = ?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold text-slate-800 shadow-sm">
        <span class="text-indigo-600">▲ = 3</span> | <span class="text-indigo-600">■ = 2</span> ➔ <span>▲ + ■ = <b class="text-rose-600">?</b></span>
      </div>
    `,
    options: [
      { label: 'A', text: '4', isCorrect: false },
      { label: 'B', text: '5 (3 + 2 = 5)', isCorrect: true },
      { label: 'C', text: '6', isCorrect: false },
      { label: 'D', text: '7', isCorrect: false }
    ]
  },
  {
    num: 40,
    cat: '3x3 Büyük Final Matrisi',
    prompt: '3. satırda eksik olan renk Kırmızı, eksik olan şekil Kare\'dir. Boş kutuya hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 120 120" class="w-32 h-32">
          <rect x="0" y="0" width="120" height="120" fill="#F8FAFC" stroke="#CBD5E1"/>
          <line x1="40" y1="0" x2="40" y2="120" stroke="#CBD5E1"/>
          <line x1="80" y1="0" x2="80" y2="120" stroke="#CBD5E1"/>
          <line x1="0" y1="40" x2="120" y2="40" stroke="#CBD5E1"/>
          <line x1="0" y1="80" x2="120" y2="80" stroke="#CBD5E1"/>
          <circle cx="20" cy="20" r="10" fill="#EF4444"/>
          <rect x="50" y="10" width="20" height="20" fill="#3B82F6" rx="2"/>
          <polygon points="100,10 90,30 110,30" fill="#F59E0B"/>
          <rect x="10" y="50" width="20" height="20" fill="#F59E0B" rx="2"/>
          <polygon points="60,50 50,70 70,70" fill="#EF4444"/>
          <circle cx="100" cy="60" r="10" fill="#3B82F6"/>
          <polygon points="20,90 10,110 30,110" fill="#3B82F6"/>
          <circle cx="60" cy="100" r="10" fill="#F59E0B"/>
          <text x="100" y="106" font-size="18" font-weight="black" fill="#EF4444" text-anchor="middle">?</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sarı Üçgen', isCorrect: false },
      { label: 'B', text: 'Mavi Kare', isCorrect: false },
      { label: 'C', text: 'Kırmızı Kare', isCorrect: true },
      { label: 'D', text: 'Kırmızı Daire', isCorrect: false }
    ]
  }
];
