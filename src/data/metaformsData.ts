import { MetaPiece } from '../types';

export const METAFORMS_PIECES: MetaPiece[] = [
  { id: 'rc', color: 'red', shape: 'circle', colorHex: '#EF4444', label: 'Kırmızı Daire', icon: 'Circle' },
  { id: 'rs', color: 'red', shape: 'square', colorHex: '#EF4444', label: 'Kırmızı Kare', icon: 'Square' },
  { id: 'rt', color: 'red', shape: 'triangle', colorHex: '#EF4444', label: 'Kırmızı Üçgen', icon: 'Triangle' },
  { id: 'bc', color: 'blue', shape: 'circle', colorHex: '#3B82F6', label: 'Mavi Daire', icon: 'Circle' },
  { id: 'bs', color: 'blue', shape: 'square', colorHex: '#3B82F6', label: 'Mavi Kare', icon: 'Square' },
  { id: 'bt', color: 'blue', shape: 'triangle', colorHex: '#3B82F6', label: 'Mavi Üçgen', icon: 'Triangle' },
  { id: 'yc', color: 'yellow', shape: 'circle', colorHex: '#F59E0B', label: 'Sarı Daire', icon: 'Circle' },
  { id: 'ys', color: 'yellow', shape: 'square', colorHex: '#F59E0B', label: 'Sarı Kare', icon: 'Square' },
  { id: 'yt', color: 'yellow', shape: 'triangle', colorHex: '#F59E0B', label: 'Sarı Üçgen', icon: 'Triangle' },
];

export interface PedagogicalStep {
  stepNum: number;
  title: string;
  deduction: string;
  resultPlacement: { cell: number; pieceId: string };
}

export interface PedagogicalMetaformsLevel {
  id: 'easy' | 'medium' | 'hard';
  name: string;
  targetSkill: string; // Pedagojik kazanım açıklaması
  clues: {
    type: 'direct' | 'column' | 'row' | 'relation' | 'negative' | 'color';
    text: string;
    icon: string;
  }[];
  deductionGuide: PedagogicalStep[]; // Adım adım tümdengelim ispatı
  solution: string[]; // 9 hücrelik kesin tekil çözüm
}

export const PEDAGOGICAL_METAFORMS_LEVELS: Record<string, PedagogicalMetaformsLevel> = {
  easy: {
    id: 'easy',
    name: '🌱 Seviye 1: Kesişen Nitelikler & Eleme',
    targetSkill: 'Tekil Şekil/Renk İpuçlarını Birleştirme ve Kalan Hücreyi Mantıkla Çıkarma (Sıfır Tahmin)',
    clues: [
      { type: 'direct', text: '1. Hücrede (Sol Üst) Kırmızı Daire yer alır.', icon: 'CheckCircle' },
      { type: 'direct', text: '5. Hücrede (Merkez) Mavi Daire yer alır.', icon: 'CheckCircle' },
      { type: 'direct', text: '9. Hücrede (Sağ Alt) Kırmızı Kare yer alır.', icon: 'CheckCircle' },
      { type: 'column', text: 'Tüm Daireler ana köşegendedir (Sol Üst, Merkez, Sağ Alt).', icon: 'Maximize2' },
      { type: 'relation', text: 'Mavi Kare, 1. satırın ortasındadır ve hemen sağında Sarı Üçgen vardır.', icon: 'ArrowRight' },
      { type: 'direct', text: 'Mavi Üçgen 7. hücrededir (Sol Alt köşe).', icon: 'CornerDownLeft' },
      { type: 'column', text: 'Sarı Kare, 1. sütunun ortasındadır (4. Hücre).', icon: 'Square' },
      { type: 'relation', text: 'Kırmızı Üçgen en sağ sütunun ortasındadır (6. Hücre).', icon: 'Triangle' },
      { type: 'relation', text: 'Kalan son hücreye (8. Hücre) havuzda kalan tek parça olan Sarı Daire yerleşir.', icon: 'HelpCircle' },
    ],
    deductionGuide: [
      {
        stepNum: 1,
        title: 'Doğrudan Verilen Köşe ve Merkez Taşları',
        deduction: '1. hücreye Kırmızı Daire, 5. hücreye Mavi Daire, 9. hücreye Kırmızı Kare yerleşir.',
        resultPlacement: { cell: 0, pieceId: 'rc' },
      },
      {
        stepNum: 2,
        title: '1. Satırın Doldurulması',
        deduction: '1. satır ortasına Mavi Kare, sağına Sarı Üçgen konur. 1. Satır tamamlanır: [Kırmızı Daire, Mavi Kare, Sarı Üçgen].',
        resultPlacement: { cell: 1, pieceId: 'bs' },
      },
      {
        stepNum: 3,
        title: 'Köşeler ve Kenarların Kilitlenmesi',
        deduction: '7. hücre Mavi Üçgen, 4. hücre Sarı Kare, 6. hücre Kırmızı Üçgen olarak belirlenir.',
        resultPlacement: { cell: 6, pieceId: 'bt' },
      },
      {
        stepNum: 4,
        title: 'Zorunlu Son Parça Çıkarımı',
        deduction: '9 parçadan 8\'i yerleştiğinde 8. hücreye yalnızca Sarı Daire kalır. Hiçbir tahmin yapılmadan %100 ispatlanır.',
        resultPlacement: { cell: 7, pieceId: 'yc' },
      },
    ],
    // 0: rc, 1: bs, 2: yt
    // 3: ys, 4: bc, 5: rt
    // 6: bt, 7: yc, 8: rs
    solution: ['rc', 'bs', 'yt', 'ys', 'bc', 'rt', 'bt', 'yc', 'rs'],
  },
  medium: {
    id: 'medium',
    name: '🌿 Seviye 2: Bağıl Konum & Negatif Kısıtlar',
    targetSkill: 'Komşuluk Kuralı ile Olasılıkları Eleme ve Çapraz Eksen Çıkarımı',
    clues: [
      { type: 'direct', text: 'Kırmızı Daire tam merkezdedir (5. Hücre).', icon: 'Dot' },
      { type: 'column', text: 'Sol sütunun köşelerinde: 1\'de Mavi Üçgen, 7\'de Kırmızı Üçgen vardır.', icon: 'Split' },
      { type: 'direct', text: 'Sarı Üçgen sağ alt köşededir (9. Hücre).', icon: 'Triangle' },
      { type: 'relation', text: 'Kırmızı Kare, Sarı Dairenin hemen SAĞINDADIR ve en üst satırdadır (1. Satır: [?, Sarı Daire, Kırmızı Kare]).', icon: 'ArrowRight' },
      { type: 'relation', text: 'Mavi Daire, Kırmızı Dairenin hemen sağ komşusudur (6. Hücre).', icon: 'Circle' },
      { type: 'direct', text: 'Mavi Kare en alt satırın ortasındadır (8. Hücre).', icon: 'Square' },
      { type: 'negative', text: 'Sarı parçalar kesinlikle 2. sütunda olamaz (Orta sütun Sarı alamaz kuralı 8. hücreye Mavi Kareyi zorunlu kılar).', icon: 'XCircle' },
    ],
    deductionGuide: [
      {
        stepNum: 1,
        title: 'Merkez ve Üçgen Köşeler',
        deduction: 'Merkez Kırmızı Daire (5), sol köşeler Mavi Üçgen (1) ve Kırmızı Üçgen (7), sağ alt Sarı Üçgen (9).',
        resultPlacement: { cell: 4, pieceId: 'rc' },
      },
      {
        stepNum: 2,
        title: '1. Satır Komşuluk Bloğu',
        deduction: '1. satır solunda Mavi Üçgen var. Kalan 2 ve 3. hücrelere [Sarı Daire, Kırmızı Kare] ardışık bloğu kilitlenir.',
        resultPlacement: { cell: 1, pieceId: 'yc' },
      },
      {
        stepNum: 3,
        title: 'Sağ Kenar ve Alt Ortayı Tamamlama',
        deduction: 'Kırmızı Dairenin sağı Mavi Daire (6), en alt orta Mavi Kare (8). Kalan 4. hücreye Sarı Kare yerleşir.',
        resultPlacement: { cell: 3, pieceId: 'ys' },
      },
    ],
    // 0: bt, 1: yc, 2: rs
    // 3: ys, 4: rc, 5: bc
    // 6: rt, 7: bs, 8: yt
    solution: ['bt', 'yc', 'rs', 'ys', 'rc', 'bc', 'rt', 'bs', 'yt'],
  },
  hard: {
    id: 'hard',
    name: '👑 Seviye 3: Graeco-Latin Çift Matris Mantığı',
    targetSkill: 'Hem Renk Hem Şekil Tekilliğini Sağlayan İki Boyutlu Çapraz Mantık Çıkarımı',
    clues: [
      { type: 'color', text: 'ÇİFT LATİN KURALI: Hiçbir satır veya sütunda aynı RENK ya da aynı ŞEKİL iki kez bulunamaz!', icon: 'Sparkles' },
      { type: 'relation', text: 'Tüm Kareler (Sarı, Mavi, Kırmızı) ana köşegendedir: (1: Sarı Kare, 5: Mavi Kare, 9: Kırmızı Kare).', icon: 'Maximize2' },
      { type: 'direct', text: 'Kırmızı Daire, Sarı Karenin hemen altındadır (4. Hücre).', icon: 'ArrowDown' },
      { type: 'direct', text: 'Mavi Daire en üst satırın sağ köşesindedir (3. Hücre).', icon: 'Circle' },
      { type: 'direct', text: 'Kırmızı Üçgen en üst satırın ortasındadır (2. Hücre).', icon: 'Triangle' },
      { type: 'direct', text: 'Mavi Üçgen sol alt köşededir (7. Hücre).', icon: 'CornerDownLeft' },
      { type: 'relation', text: '6. Hücre: 2. satırda Kırmızı Daire ve Mavi Kare olduğuna göre şekli Üçgen, rengi Sarı olmalıdır (Sarı Üçgen).', icon: 'HelpCircle' },
      { type: 'relation', text: '8. Hücre: 3. satırda Mavi Üçgen ve Kırmızı Kare olduğuna göre şekli Daire, rengi Sarı olmalıdır (Sarı Daire).', icon: 'HelpCircle' },
    ],
    deductionGuide: [
      {
        stepNum: 1,
        title: 'Köşegen Şekil Kuralı',
        deduction: 'Ana köşegene kareler dizilir: 1=Sarı Kare, 5=Mavi Kare, 9=Kırmızı Kare.',
        resultPlacement: { cell: 0, pieceId: 'ys' },
      },
      {
        stepNum: 2,
        title: '1. Satırın Çift Latin Çıkarımı',
        deduction: '1. satırda Sarı Kare var. Kalan hücrelere Kırmızı Üçgen (2) ve Mavi Daire (3) yerleşir. Satırda 3 renk ve 3 şekil tekil olur!',
        resultPlacement: { cell: 1, pieceId: 'rt' },
      },
      {
        stepNum: 3,
        title: 'Kalan Hücrelerin İki Boyutlu İspatı',
        deduction: '2. satırda eksik olan [Sarı Üçgen], 3. satırda eksik olan [Sarı Daire] ve [Mavi Üçgen] formel tümdengelimle ispatlanır.',
        resultPlacement: { cell: 5, pieceId: 'yt' },
      },
    ],
    // 0: ys, 1: rt, 2: bc
    // 3: rc, 4: bs, 5: yt
    // 6: bt, 7: yc, 8: rs
    solution: ['ys', 'rt', 'bc', 'rc', 'bs', 'yt', 'bt', 'yc', 'rs'],
  },
};
