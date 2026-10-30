import { BilsemQuestion } from '../types';

export const GRADE_4_EXAM_40_QUESTIONS: BilsemQuestion[] = [
  {
    num: 1,
    cat: 'Görsel Matris (İkili Mantık / XOR ve Katman Rotasyonu)',
    prompt: '3x3 matriste her satırda 1. ve 2. kutu birleştiğinde ortak çizgiler elenmekte (XOR), kalan çizgiler 90° saat yönünde döndürülerek 3. kutu oluşmaktadır. Soru işareti (?) yerine hangisi gelmelidir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm">
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <line x1="30" y1="5" x2="30" y2="55" stroke="#3B82F6" stroke-width="3"/>
          <line x1="5" y1="30" x2="55" y2="30" stroke="#3B82F6" stroke-width="3"/>
          <line x1="5" y1="5" x2="30" y2="30" stroke="#3B82F6" stroke-width="3"/>
        </svg>
        <span class="text-base font-bold text-slate-400">⊕</span>
        <svg viewBox="0 0 60 60" class="w-14 h-14 bg-slate-50 border border-slate-300 rounded-xl">
          <line x1="30" y1="5" x2="30" y2="55" stroke="#EF4444" stroke-width="3"/>
          <line x1="5" y1="30" x2="55" y2="30" stroke="#EF4444" stroke-width="3"/>
          <line x1="30" y1="30" x2="55" y2="55" stroke="#EF4444" stroke-width="3"/>
        </svg>
        <span class="text-base font-bold text-slate-400">➔ 90° ➔</span>
        <div class="w-14 h-14 border-2 border-dashed border-indigo-500 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl">?</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Tam artı ve çift çapraz', isCorrect: false },
      { label: 'B', text: '90° dönmüş olarak sol üstten merkeze ve merkezden sağ alta inen çapraz çizgiler', isCorrect: true },
      { label: 'C', text: 'Yalnızca yatay çizgi', isCorrect: false },
      { label: 'D', text: 'Boş kare', isCorrect: false }
    ]
  },
  {
    num: 2,
    cat: '3D Küp Sayma (İç Boşluklu & Asimetrik Kule)',
    prompt: 'Taban alanı 3x4 (12 küp) olan yapının yüksekliği 3 kattır (3 × 12 = 36). Yapının tam ortasında tabandan tavana kadar 1x2\'lik bir dikey boşluk (şaft) açılmış, ayrıca üst katın 4 köşesindeki 1\'er küp kaldırılmıştır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>Toplam Küp Hacmi: 3 × 4 × 3 = 36 küp</div>
        <div>Çıkarılanlar: 1x2 Şaft (2 × 3 kat = 6 küp) + 4 Köşe (4 küp) ➔ <span class="text-indigo-700 font-black">Kalan ?</span></div>
      </div>
    `,
    options: [
      { label: 'A', text: '30', isCorrect: false },
      { label: 'B', text: '28', isCorrect: false },
      { label: 'C', text: '26 (36 - 6 - 4 = 26)', isCorrect: true },
      { label: 'D', text: '24', isCorrect: false }
    ]
  },
  {
    num: 3,
    cat: 'Kağıt Katlama & Çift Eksenli Delme (4 Kat)',
    prompt: 'Kare kağıt: Önce dikey olarak ikiye, sonra yatay olarak ikiye katlanıp 4 katlı küçük bir kare elde ediliyor. Katlanmış kağıdın kapalı merkez köşesinden çeyrek daire, açık olan dış kenarından ise üçgen bir parça kesilip atılıyor. Kağıt tamamen açıldığında ortasında ve kenarlarında ne oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24">
          <rect x="10" y="10" width="80" height="80" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <circle cx="50" cy="50" r="16" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
          <polygon points="50,10 40,20 60,20" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <polygon points="50,90 40,80 60,80" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <polygon points="10,50 20,40 20,60" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <polygon points="90,50 80,40 80,60" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Ortada kare delik, 4 köşede üçgen delik', isCorrect: false },
      { label: 'B', text: 'Ortada tam daire delik, 4 dış kenarda eşkenar dörtgen oyuklar', isCorrect: true },
      { label: 'C', text: 'Ortada 4 ayrı üçgen delik', isCorrect: false },
      { label: 'D', text: 'Dış kenarlarda yarım daire oyuklar', isCorrect: false }
    ]
  },
  {
    num: 4,
    cat: 'Kaldıraç & Dağıtılmış Tork Dengesi',
    prompt: 'Destek noktası ortadadır. Sol kolda: 4 birim uzakta 2 kg ve 2 birim uzakta 5 kg asılıdır. Toplam sol tork: (4 × 2) + (2 × 5) = 18 Nm. Sağ kolda yalnızca 3 birim uzaklıkta tek bir ağırlık asılacaktır. Denge için bu ağırlık kaç kg olmalıdır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 240 80" class="w-64 h-20">
          <line x1="20" y1="40" x2="220" y2="40" stroke="#334155" stroke-width="4"/>
          <polygon points="120,40 105,65 135,65" fill="#475569"/>
          <rect x="30" y="25" width="20" height="15" fill="#3B82F6" rx="2"/>
          <text x="40" y="36" font-size="8" fill="#FFF" font-weight="bold" text-anchor="middle">2kg</text>
          <rect x="70" y="25" width="20" height="15" fill="#3B82F6" rx="2"/>
          <text x="80" y="36" font-size="8" fill="#FFF" font-weight="bold" text-anchor="middle">5kg</text>
          <rect x="180" y="25" width="24" height="15" fill="#F59E0B" rx="2"/>
          <text x="192" y="36" font-size="9" fill="#FFF" font-weight="bold" text-anchor="middle">? kg</text>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '4 kg', isCorrect: false },
      { label: 'B', text: '5 kg', isCorrect: false },
      { label: 'C', text: '6 kg (18 ÷ 3 = 6)', isCorrect: true },
      { label: 'D', text: '8 kg', isCorrect: false }
    ]
  },
  {
    num: 5,
    cat: 'Bileşik Dişli Sistemi & Dönüş Oranı',
    prompt: 'A çarkı 24 dişlidir ve saat yönünde 1 tam tur dönmektedir. A çarkı 12 dişli B çarkını döndürmektedir. B çarkı ile aynı mil üzerinde kilitli olan 8 dişli C çarkı ise 16 dişli D çarkını çevirmektedir. D çarkının dönüş yönü ve tur sayısı nedir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>A (24 diş, 1 tur ↻) ➔ B (12 diş, 2 tur ↺)</div>
        <div>B ile kilitli C (8 diş, 2 tur ↺) ➔ D (16 diş, ? tur ?)</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Saat yönü tersine, 2 tur', isCorrect: false },
      { label: 'B', text: 'Saat yönünde (↻ Sağa), 1 tam tur', isCorrect: true },
      { label: 'C', text: 'Saat yönü tersine, 1 tam tur', isCorrect: false },
      { label: 'D', text: 'Saat yönünde, 0.5 tur', isCorrect: false }
    ]
  },
  {
    num: 6,
    cat: '3x3 Matris (Çift Sayısal & Geometrik Kural)',
    prompt: 'Matrisin satırlarında şekillerin köşe sayıları ile içlerindeki sayılar arasında bir kural vardır: 1. Satır: Üçgen(3) içinde 4 ➔ Kare(4) içinde 6 ➔ Beşgen(5) içinde 8. 2. Satır: Kare(4) içinde 3 ➔ Beşgen(5) içinde 5 ➔ Altıgen(6) içinde 7. 3. Satır: Beşgen(5) içinde 2 ➔ Altıgen(6) içinde 4 ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-indigo-800 shadow-sm">
        3. Satır: [Beşgen: 2] ➔ [Altıgen: 4] ➔ [ ? ] (Köşe +1, İç Sayı +2)
      </div>
    `,
    options: [
      { label: 'A', text: 'Altıgen içinde 5', isCorrect: false },
      { label: 'B', text: 'Yedigen (7 köşe) içinde 6', isCorrect: true },
      { label: 'C', text: 'Sekizgen içinde 6', isCorrect: false },
      { label: 'D', text: 'Beşgen içinde 8', isCorrect: false }
    ]
  },
  {
    num: 7,
    cat: 'Küp Açınımı & Yüzey Yönelimi',
    prompt: 'Açık halde verilen küpte karşılıklı yüzlerdeki semboller katlandığında birbirini tamamlamaktadır. Ön yüzde yukarı bakan Ok (↑), üst yüzde sağa bakan Ok (→) varsa, arka yüzde hangi ok yer alır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Ön Yüz (↑) ➔ Tam Zıt Arka Yüz (?)
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa bakan Ok', isCorrect: false },
      { label: 'B', text: 'Aşağı bakan Ok (↓ - Öne zıt yüzey)', isCorrect: true },
      { label: 'C', text: 'Yukarı bakan Ok', isCorrect: false },
      { label: 'D', text: 'Sola bakan Ok', isCorrect: false }
    ]
  },
  {
    num: 8,
    cat: 'Soyut Şekil Analojisi (Topolojik Değişim)',
    prompt: 'Tek parçalı kapalı eğri ➔ İki parçaya bölünmüş kesişen eğriler. Dolu küp ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [1 Parça Dolu Hacim] ➔ [Kesişen 2 Eşit Parça]
      </div>
    `,
    options: [
      { label: 'A', text: 'Tek parça küre', isCorrect: false },
      { label: 'B', text: 'Birbirine geçmiş iki eşit prizma blok', isCorrect: true },
      { label: 'C', text: 'Düz bir kare levha', isCorrect: false },
      { label: 'D', text: 'Nokta', isCorrect: false }
    ]
  },
  {
    num: 9,
    cat: '3D Küp (İz Düşüm / Sayısal Yükseklik Matrisi)',
    prompt: 'Bir mimari küp yapısının üstten görünüm yükseklik haritası verilmiştir. Bu blok yapıda toplam kaç adet küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <div class="grid grid-cols-3 gap-1 bg-slate-200 p-2 rounded-2xl border-2 border-slate-400 font-black text-indigo-900 text-lg">
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">3</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">1</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">4</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">2</div>
          <div class="w-10 h-10 bg-slate-300 rounded-lg flex items-center justify-center text-slate-500">0</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">2</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">1</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">3</div>
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">1</div>
        </div>
      </div>
    `,
    options: [
      { label: 'A', text: '16', isCorrect: false },
      { label: 'B', text: '17 (3+1+4+2+0+2+1+3+1 = 17)', isCorrect: true },
      { label: 'C', text: '18', isCorrect: false },
      { label: 'D', text: '19', isCorrect: false }
    ]
  },
  {
    num: 10,
    cat: 'Aritmetik Dizi (Karesel Artış Kuralı)',
    prompt: 'Sayı dizisindeki terimler arasındaki artış miktarları ardışık tek sayılardır (+3, +5, +7, +9, +11...): 2 ➔ 5 ➔ 10 ➔ 17 ➔ 26 ➔ 37 ➔ ? (+13)',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-indigo-800 shadow-sm">
        2 ➔ 5 ➔ 10 ➔ 17 ➔ 26 ➔ 37 ➔ <span class="text-rose-600 font-black">[ +13 ] = ?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '48', isCorrect: false },
      { label: 'B', text: '49', isCorrect: false },
      { label: 'C', text: '50 (37 + 13 = 50 = 7² + 1)', isCorrect: true },
      { label: 'D', text: '52', isCorrect: false }
    ]
  },
  {
    num: 11,
    cat: 'Ayna Simetrisi (Çapraz Eksen y = -x)',
    prompt: 'Sol üst köşeden sağ alta uzanan aynaya göre (y = -x) sağ üstteki bir üçgenin yansıması nereye ve nasıl düşer?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" class="w-24 h-24 border border-slate-300 bg-slate-50 rounded-xl">
          <line x1="10" y1="10" x2="90" y2="90" stroke="#4F46E5" stroke-width="2" stroke-dasharray="4,4"/>
          <polygon points="60,20 85,20 85,45" fill="#EF4444"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağ altta dik üçgen', isCorrect: false },
      { label: 'B', text: 'Sol altta ters dönmüş dik üçgen', isCorrect: true },
      { label: 'C', text: 'Sol üstte aynı üçgen', isCorrect: false },
      { label: 'D', text: 'Merkeze yapışık kare', isCorrect: false }
    ]
  },
  {
    num: 12,
    cat: 'Çoklu Perspektif (Ön, Üst ve Sol Görünüm)',
    prompt: 'Bir yapının önden görünümü 3 sütun (2, 3, 1 yüksekliğinde), soldan görünümü 2 sütun (3, 2 yüksekliğinde) ise bu yapıyı inşa etmek için en az kaç küp gereklidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Ön: [2, 3, 1] | Sol: [3, 2] ➔ Minimum Küp Sayısı (?)
      </div>
    `,
    options: [
      { label: 'A', text: '5', isCorrect: false },
      { label: 'B', text: '6 (Maksimumların ortak paylaşımı)', isCorrect: true },
      { label: 'C', text: '7', isCorrect: false },
      { label: 'D', text: '8', isCorrect: false }
    ]
  },
  {
    num: 13,
    cat: 'Şeffaf Asetat (3 Katmanlı Çakışma)',
    prompt: '1. Asetat: Ana köşegen çizgisi (/). 2. Asetat: Ters köşegen çizgisi (\\). 3. Asetat: Merkezden geçen dikey çizgi (|). Üçü üst üste konduğunda hangi simetrik yıldız deseni oluşur?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <line x1="10" y1="70" x2="70" y2="10" stroke="#0F172A" stroke-width="3"/>
          <line x1="10" y1="10" x2="70" y2="70" stroke="#0F172A" stroke-width="3"/>
          <line x1="40" y1="5" x2="40" y2="75" stroke="#0F172A" stroke-width="3"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Dört köşeli kare', isCorrect: false },
      { label: 'B', text: '6 kollu simetrik kar tanesi / haç deseni (× ve | birleşimi)', isCorrect: true },
      { label: 'C', text: 'Sekizgen', isCorrect: false },
      { label: 'D', text: 'İki paralel çizgi', isCorrect: false }
    ]
  },
  {
    num: 14,
    cat: 'Terazilerde 4\'lü Değişken Sistemi',
    prompt: '2A = 3B, 1B = 2C ve 1A + 1C = 8 kg olduğuna göre 1B kaç kg\'dır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>2A = 6C ➔ A = 3C</div>
        <div>3C + C = 8 kg ➔ C = 2 kg ➔ B = 2C = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '2 kg', isCorrect: false },
      { label: 'B', text: '3 kg', isCorrect: false },
      { label: 'C', text: '4 kg (C = 2 ➔ B = 4)', isCorrect: true },
      { label: 'D', text: '6 kg', isCorrect: false }
    ]
  },
  {
    num: 15,
    cat: 'Görsel Matris (Negatif Alan Çıkarma)',
    prompt: 'Büyük Şekilden Küçük Şeklin kesişim alanı atılınca geriye kalan parça bir sonraki hücreye yazılmaktadır. Çember ve eşkenar dörtgen kesişiminde ortak alan silinirse ne kalır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Dolu Çember] - [Ortak Eşkenar Dörtgen Kesişimi] = ?
      </div>
    `,
    options: [
      { label: 'A', text: 'Tam çember', isCorrect: false },
      { label: 'B', text: 'Dört ayrı yay ve dört küçük üçgen kanat (Merkezi oyuk)', isCorrect: true },
      { label: 'C', text: 'Tam kare', isCorrect: false },
      { label: 'D', text: 'Düz çizgi', isCorrect: false }
    ]
  },
  {
    num: 16,
    cat: '3D Küp (Köprü & Kule Kombinasyonu)',
    prompt: 'Tabanda yan yana 4 kule: Yükseklikleri sırasıyla 4, 1, 1, 4\'tür. 1. ve 4. kulelerin en üst basamakları arasına 2 küplük tavan köprüsü atılmıştır. Toplam kaç küp vardır?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 200 100" class="w-52 h-26">
          <rect x="25" y="10" width="25" height="80" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="55" y="70" width="25" height="20" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="85" y="70" width="25" height="20" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
          <rect x="115" y="10" width="25" height="80" fill="#93C5FD" stroke="#1E40AF" stroke-width="2"/>
          <rect x="50" y="10" width="65" height="20" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '10', isCorrect: false },
      { label: 'B', text: '11', isCorrect: false },
      { label: 'C', text: '12 (4 + 1 + 1 + 4 + 2 = 12)', isCorrect: true },
      { label: 'D', text: '14', isCorrect: false }
    ]
  },
  {
    num: 17,
    cat: 'Kağıt Katlama (Akordeon & Çift Delik)',
    prompt: 'Kağıt 3 kez zikzak (akordeon) katlanarak 4 kat haline getiriliyor. Katlı şeridin sağ kenarından 1 üçgen oyuk, sol kenarından 1 daire oyuk açılıyor. Kağıt açıldığında toplam kaç oyuk oluşur?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        4 Kat × (1 Üçgen + 1 Daire) = ? Oyuk
      </div>
    `,
    options: [
      { label: 'A', text: '4 oyuk', isCorrect: false },
      { label: 'B', text: '6 oyuk', isCorrect: false },
      { label: 'C', text: '8 oyuk (4 üçgen + 4 daire)', isCorrect: true },
      { label: 'D', text: '12 oyuk', isCorrect: false }
    ]
  },
  {
    num: 18,
    cat: 'Kasnak & Yön & Hız İlişkisi',
    prompt: 'Yarıçapı 2r olan X kasnağı saat yönünde 60 devir/dakika ile dönmektedir. Çapraz kayışla bağlı olduğu yarıçapı r olan Y kasnağının dönüş yönü ve hızı nedir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>X (2r, 60 d/d ↻) ➔ Çapraz Kayış ➔ Y (r, ? d/d ?)</div>
        <div>Yarıçap yarıya inerse devir sayısı 2 katına çıkar!</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Saat yönünde, 30 d/d', isCorrect: false },
      { label: 'B', text: 'Saat yönünün tersine (↺), 120 devir/dakika', isCorrect: true },
      { label: 'C', text: 'Saat yönünün tersine, 60 d/d', isCorrect: false },
      { label: 'D', text: 'Saat yönünde, 120 d/d', isCorrect: false }
    ]
  },
  {
    num: 19,
    cat: 'Zihinsel Küp Rotasyonu (Çift Eksen)',
    prompt: 'Zar masada durmaktadır: Üstte 6, önde 2, sağda 3 vardır. Küp önce öne doğru 90° yuvarlanıyor, ardından sağa doğru 90° yuvarlanıyor. En üst yüze hangi sayı gelir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        [Üst: 6, Ön: 2, Sağ: 3] ➔ Öne 90° ➔ Sağa 90° ➔ Üst Yüz (?)
      </div>
    `,
    options: [
      { label: 'A', text: '6', isCorrect: false },
      { label: 'B', text: '2', isCorrect: false },
      { label: 'C', text: '4 (Zar kuralı: Karşılıklı yüzler toplamı 7\'dir)', isCorrect: true },
      { label: 'D', text: '1', isCorrect: false }
    ]
  },
  {
    num: 20,
    cat: 'Sayısal Dizi (İç İçe İki Farklı Dizi)',
    prompt: 'Dizideki tek ve çift sıradaki terimler farklı kurallara sahiptir: 1. Dizi: 2, 5, 8, 11 (+3) | 2. Dizi: 20, 18, 16, 14 (-2). Dizilim: 2, 20, 5, 18, 8, 16, 11, 14, ?, ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-indigo-800 shadow-sm">
        Tekler (+3): 11 ➔ <span class="text-rose-600 font-black">14</span> | Çiftler (-2): 14 ➔ <span class="text-rose-600 font-black">12</span>
      </div>
    `,
    options: [
      { label: 'A', text: '13, 13', isCorrect: false },
      { label: 'B', text: '14 ve 12', isCorrect: true },
      { label: 'C', text: '12 ve 14', isCorrect: false },
      { label: 'D', text: '15 ve 10', isCorrect: false }
    ]
  },
  {
    num: 21,
    cat: 'Şekil Analojisi (Boyutsal Projeksiyon)',
    prompt: '2 Boyutlu Kare ➔ 3 Boyutlu Küp. 2 Boyutlu Daire ➔ 3 Boyutlu Küre. 2 Boyutlu Eşkenar Üçgen ➔ ?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        2 Boyuttan 3 Boyutlu Platonik Katıya Geçiş
      </div>
    `,
    options: [
      { label: 'A', text: 'Silindir', isCorrect: false },
      { label: 'B', text: 'Düzgün Dörtyüzlü (Tetrahedron) / Üçgen Piramit', isCorrect: true },
      { label: 'C', text: 'Koni', isCorrect: false },
      { label: 'D', text: 'Prizma', isCorrect: false }
    ]
  },
  {
    num: 22,
    cat: 'Mantıksal Matris (Doğruluk Tablosu)',
    prompt: 'Dört arkadaşın boy sıralaması: Efe en uzun değildir ancak Can\'dan uzundur. Arda, Berk\'ten kısadır ama Efe\'den uzundur. Bu grupta boyu en kısa olan kişi kimdir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Boy Sıralaması: Berk > Arda > Efe > Can
      </div>
    `,
    options: [
      { label: 'A', text: 'Arda', isCorrect: false },
      { label: 'B', text: 'Berk', isCorrect: false },
      { label: 'C', text: 'Efe', isCorrect: false },
      { label: 'D', text: 'Can (Sıralama: Berk > Arda > Efe > Can)', isCorrect: true }
    ]
  },
  {
    num: 23,
    cat: '3D Küp (Tam Küpten Eksilen Parça)',
    prompt: '4x4x4 boyutlarında büyük bir dolu küp vardır (toplam 64 birim küp). Bu küpün 8 köşesindeki 1\'er birim küp çıkarılıyor. Kalan küp sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-indigo-800 shadow-sm">
        64 Birim Küp - 8 Köşe Küpü = ?
      </div>
    `,
    options: [
      { label: 'A', text: '60', isCorrect: false },
      { label: 'B', text: '58', isCorrect: false },
      { label: 'C', text: '56 (64 - 8 = 56)', isCorrect: true },
      { label: 'D', text: '54', isCorrect: false }
    ]
  },
  {
    num: 24,
    cat: 'Görsel Örüntü İhlali (Açı & Yön)',
    prompt: 'Beş şeklin rotasyon açıları şöyledir: 1. Şekil: 45° ➔ 2. Şekil: 90° ➔ 3. Şekil: 135° ➔ 4. Şekil: 170° ➔ 5. Şekil: 225°. Kuralı bozan hatalı eleman hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Her adımda +45° artış kuralı: 135° + 45° = 180° olmalıydı!
      </div>
    `,
    options: [
      { label: 'A', text: '2. Şekil', isCorrect: false },
      { label: 'B', text: '3. Şekil', isCorrect: false },
      { label: 'C', text: '4. Şekil (180° olması gerekirken 170° çizilmiş)', isCorrect: true },
      { label: 'D', text: '5. Şekil', isCorrect: false }
    ]
  },
  {
    num: 25,
    cat: 'Sayısal Matris Bulmacası',
    prompt: 'Her satır ve sütundaki sayıların çarpımı 72\'dir. Ortadaki karede 2, solunda 4, sağında 9 varsa; üst ve alt karelerin çarpımı kaç olmalıdır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>Merkez Sütun: Üst × 2 × Alt = 72</div>
        <div>Üst × Alt = 72 ÷ 2 = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '18', isCorrect: false },
      { label: 'B', text: '36 (72 ÷ 2 = 36)', isCorrect: true },
      { label: 'C', text: '24', isCorrect: false },
      { label: 'D', text: '12', isCorrect: false }
    ]
  },
  {
    num: 26,
    cat: 'Vektörel Rota & Başlangıca Uzaklık',
    prompt: 'Bir keşif dronu: 6 km Kuzey, 8 km Doğu, ardından 2 km Güney ve 8 km Batı uçuyor. Dronun başlangıç noktasına olan en kısa son mesafesi kaç km\'dir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Doğu-Batı: 8 - 8 = 0 | Kuzey-Güney: 6 - 2 = 4 km Kuzey
      </div>
    `,
    options: [
      { label: 'A', text: '2 km', isCorrect: false },
      { label: 'B', text: '4 km (6 - 2 = 4 km Kuzeyde)', isCorrect: true },
      { label: 'C', text: '6 km', isCorrect: false },
      { label: 'D', text: '10 km', isCorrect: false }
    ]
  },
  {
    num: 27,
    cat: 'Şekil Operasyonları (AND - Kesişim)',
    prompt: 'İki şekil üst üste geldiğinde yalnızca her ikisinde de ortak olan dolgulu alanlar siyah kalmakta, diğer kısımlar silinmektedir. İki dairenin kesişiminden ne elde edilir?',
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
      { label: 'A', text: 'İki ayrı daire', isCorrect: false },
      { label: 'B', text: 'Lens / Badem şeklinde (vesica piscis) siyah alan', isCorrect: true },
      { label: 'C', text: 'Hilal şekli', isCorrect: false },
      { label: 'D', text: 'Boş alan', isCorrect: false }
    ]
  },
  {
    num: 28,
    cat: 'İki Kademeli Terazi Dengesi',
    prompt: '1. Terazi: 3K = 2L + 1M. 2. Terazi: 1L = 2M olduğuna göre K ile M arasındaki denge bağıntısı hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>3K = 2(2M) + M = 4M + M = 5M ➔ 3K = 5M</div>
      </div>
    `,
    options: [
      { label: 'A', text: '3K = 5M dengesi', isCorrect: true },
      { label: 'B', text: '1K = 1M', isCorrect: false },
      { label: 'C', text: '1K = 3M', isCorrect: false },
      { label: 'D', text: '2K = 3M', isCorrect: false }
    ]
  },
  {
    num: 29,
    cat: 'Kağıt Katlama (Köşegen + Orta Kat)',
    prompt: 'Kare kağıt: Önce köşegeninden üçgen katlanıyor, sonra dik kenarından ikiye katlanıyor (4 kat). En sivri köşesi makasla düz kesilip atılıyor. Kağıt açıldığında ortasında hangi delik oluşur?',
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
      { label: 'B', text: 'Kare / Eşkenar Dörtgen delik', isCorrect: true },
      { label: 'C', text: 'Daire delik', isCorrect: false },
      { label: 'D', text: 'Sekizgen delik', isCorrect: false }
    ]
  },
  {
    num: 30,
    cat: '3D Küp (İzometrik Piramit)',
    prompt: '4 katlı bir kare basamak piramidinde katmanlar: 4x4 (16), 3x3 (9), 2x2 (4) ve 1x1 (1) küptür. Piramidin en alt katının merkezindeki 4 küp tünel için boşaltılmıştır. Kalan küp sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-indigo-800 shadow-sm">
        Toplam: 16 + 9 + 4 + 1 = 30 küp ➔ 30 - 4 (tünel) = ?
      </div>
    `,
    options: [
      { label: 'A', text: '30', isCorrect: false },
      { label: 'B', text: '28', isCorrect: false },
      { label: 'C', text: '26 (30 - 4 = 26 küp)', isCorrect: true },
      { label: 'D', text: '24', isCorrect: false }
    ]
  },
  {
    num: 31,
    cat: '3B Uzamsal Döndürme',
    prompt: 'Sağ el kuralına göre: Başparmak yukarı (+Z), işaret parmağı ileri (+X), orta parmak sola (+Y) bakmaktadır. El bilekten 90° sağa çevrilirse başparmak hangi yönü gösterir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        3 Boyutlu Kartezyen Eksen Döndürme
      </div>
    `,
    options: [
      { label: 'A', text: 'Sağa (+Y yönüne)', isCorrect: true },
      { label: 'B', text: 'Aşağı', isCorrect: false },
      { label: 'C', text: 'İleri', isCorrect: false },
      { label: 'D', text: 'Sola', isCorrect: false }
    ]
  },
  {
    num: 32,
    cat: 'Şekil Analojisi (İç İçe Ölçekleme)',
    prompt: 'Kare içinde Daire ➔ Alanlar Oranı π/4 ≈ 0.78. Küp içinde Küre ➔ Hacimler Oranı π/6 ≈ 0.52. Buna göre boyutsal geçişte doluluk oranı nasıl değişir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs space-y-1 shadow-sm">
        <div>2 Boyutlu Doluluk: %78 ➔ 3 Boyutlu Doluluk: %52</div>
      </div>
    `,
    options: [
      { label: 'A', text: 'Artar', isCorrect: false },
      { label: 'B', text: 'Azalır (Köşelerdeki boşluk 3 boyutta daha çok artar)', isCorrect: true },
      { label: 'C', text: 'Değişmez', isCorrect: false },
      { label: 'D', text: 'Sıfıra eşitlenir', isCorrect: false }
    ]
  },
  {
    num: 33,
    cat: 'Perspektif Kesit (Küpün Altıgen Kesiti)',
    prompt: 'Bir küp, komşu 3 kenarın orta noktalarından geçen eğik bir düzlemle kesilirse oluşan arakesit yüzeyi hangi düzgün çokgen olabilir?',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <polygon points="40,15 65,28 65,58 40,71 15,58 15,28" fill="#DDD6FE" stroke="#6D28D9" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: 'Kare', isCorrect: false },
      { label: 'B', text: 'Düzgün Altıgen (Küpün 6 kenarını kesen tam simetrik kesit)', isCorrect: true },
      { label: 'C', text: 'Daire', isCorrect: false },
      { label: 'D', text: 'Dikdörtgen', isCorrect: false }
    ]
  },
  {
    num: 34,
    cat: 'Aritmetik Örüntü (Küp Sayılar Dizisi)',
    prompt: '1 (1³) ➔ 8 (2³) ➔ 27 (3³) ➔ 64 (4³) ➔ ? (5³)',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-sm text-indigo-800 shadow-sm">
        1 ➔ 8 ➔ 27 ➔ 64 ➔ <span class="text-rose-600 font-black">[ 5³ = 5×5×5 ] = ?</span>
      </div>
    `,
    options: [
      { label: 'A', text: '100', isCorrect: false },
      { label: 'B', text: '125 (5³ = 125)', isCorrect: true },
      { label: 'C', text: '128', isCorrect: false },
      { label: 'D', text: '144', isCorrect: false }
    ]
  },
  {
    num: 35,
    cat: 'Görsel Matris (Doku & Gradyan)',
    prompt: 'Satırlarda soldan sağa: Siyah ➔ Çizgili ➔ Beyaz. Sütunlarda yukarıdan aşağı: Kare ➔ Daire ➔ Üçgen. 3. satır 3. sütundaki eksik eleman nedir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        3. Satır (Üçgen) + 3. Sütun (Beyaz / İçi Boş) = ?
      </div>
    `,
    options: [
      { label: 'A', text: 'Siyah Üçgen', isCorrect: false },
      { label: 'B', text: 'Çizgili Daire', isCorrect: false },
      { label: 'C', text: 'Beyaz (İçi Boş) Üçgen', isCorrect: true },
      { label: 'D', text: 'Beyaz Kare', isCorrect: false }
    ]
  },
  {
    num: 36,
    cat: 'Akrep ve Yelkovan Açı Hesabı',
    prompt: 'Saat tam 03:30 olduğunda akrep ile yelkovan arasındaki küçük açı kaç derecedir? (Akrep 3 ile 4\'ün tam ortasındadır)',
    visual: `
      <div class="p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 80 80" class="w-20 h-20">
          <circle cx="40" cy="40" r="35" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="40" x2="60" y2="46" stroke="#EF4444" stroke-width="3"/>
          <line x1="40" y1="40" x2="40" y2="70" stroke="#0F172A" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      { label: 'A', text: '90°', isCorrect: false },
      { label: 'B', text: '80°', isCorrect: false },
      { label: 'C', text: '75° (90° - 15° = 75°)', isCorrect: true },
      { label: 'D', text: '70°', isCorrect: false }
    ]
  },
  {
    num: 37,
    cat: '3D Küp (Simetrik Çapraz Köprü)',
    prompt: 'Birbirine dik kesişen iki adet 5\'er küplük şerit blok vardır (merkezdeki 1 küp ortaktır). Bu yapının toplam küp sayısı kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-indigo-800 shadow-sm">
        5 Yatay + 5 Dikey - 1 Ortak Merkez = ?
      </div>
    `,
    options: [
      { label: 'A', text: '10', isCorrect: false },
      { label: 'B', text: '9 (5 + 5 - 1 = 9)', isCorrect: true },
      { label: 'C', text: '8', isCorrect: false },
      { label: 'D', text: '11', isCorrect: false }
    ]
  },
  {
    num: 38,
    cat: 'Çokgen Köşegen Formülü Mantığı',
    prompt: 'Bir köşesinden (n-3) adet köşegen çizilen düzgün bir sekizgenin (8 kenar) toplam kaç adet köşegeni vardır? Formül: n(n-3) / 2',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-slate-700 shadow-sm">
        Sekizgen (n = 8) ➔ [8 × (8 - 3)] ÷ 2 = [8 × 5] ÷ 2 = ?
      </div>
    `,
    options: [
      { label: 'A', text: '16', isCorrect: false },
      { label: 'B', text: '20 (40 ÷ 2 = 20)', isCorrect: true },
      { label: 'C', text: '24', isCorrect: false },
      { label: 'D', text: '18', isCorrect: false }
    ]
  },
  {
    num: 39,
    cat: 'Cebirsel Şifreli Matris',
    prompt: '■² = 36, ● × ■ = 42 ve ▲ = ●² - ■ olduğuna göre ▲ kaçtır?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-mono font-bold text-xs space-y-1 shadow-sm">
        <div>■ = 6 ➔ ● = 42 ÷ 6 = 7</div>
        <div>▲ = 7² - 6 = 49 - 6 = ?</div>
      </div>
    `,
    options: [
      { label: 'A', text: '40', isCorrect: false },
      { label: 'B', text: '43 (49 - 6 = 43)', isCorrect: true },
      { label: 'C', text: '45', isCorrect: false },
      { label: 'D', text: '37', isCorrect: false }
    ]
  },
  {
    num: 40,
    cat: 'Büyük Final Matrisi (4 Kural Birlikte)',
    prompt: '3x3 matriste her satırda: Dış Geometri (Kare, Daire, Altıgen), İç Sembol (Yıldız, Eşkenar Dörtgen, Daire), Dönüş Açısı (0°, 45°, 90°), Çizgi Kalınlığı (İnce, Normal, Kalın) kuralları uygulanmaktadır. Eksik olan hücre hangisidir?',
    visual: `
      <div class="p-3 bg-white rounded-2xl border text-center font-bold text-xs text-indigo-800 shadow-sm">
        Eksik Özellikler: [Altıgen] + [Eşkenar Dörtgen (90°)] + [Kalın Çerçeve]
      </div>
    `,
    options: [
      { label: 'A', text: 'İnce çizgili Kare içinde 0° Yıldız', isCorrect: false },
      { label: 'B', text: 'Kalın çizgili Altıgen içinde 90° dönmüş Eşkenar Dörtgen', isCorrect: true },
      { label: 'C', text: 'Normal çizgili Daire içinde Daire', isCorrect: false },
      { label: 'D', text: 'Çift çizgili Üçgen', isCorrect: false }
    ]
  }
];
