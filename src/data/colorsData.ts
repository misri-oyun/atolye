import { ColorDef, ColorsLevel } from '../types';

export const COLORS_DEF: ColorDef[] = [
  { id: 'c_red', hex: '#EF4444', name: 'Kırmızı', textColor: 'text-white' },
  { id: 'c_blue', hex: '#3B82F6', name: 'Mavi', textColor: 'text-white' },
  { id: 'c_yellow', hex: '#F59E0B', name: 'Sarı', textColor: 'text-slate-900' },
  { id: 'c_green', hex: '#10B981', name: 'Yeşil', textColor: 'text-white' },
  { id: 'c_purple', hex: '#8B5CF6', name: 'Mor', textColor: 'text-white' },
];

export const COLORS_LEVELS: Record<string, ColorsLevel> = {
  easy: {
    id: 'easy',
    name: '🌱 3x3 Latin Karesi (3 Renk)',
    size: 3,
    paletteCount: 3,
    initial: [
      'c_red', null, null,
      null, 'c_blue', null,
      null, null, 'c_yellow',
    ],
    socraticHint: 'Latin Karesi Kuralı: Hiçbir satırda ve hiçbir sütunda aynı renk iki kez kullanılamaz. 1. satırda Kırmızı var; 2. sütunda Mavi var.',
  },
  medium: {
    id: 'medium',
    name: '🌿 4x4 Latin Karesi (4 Renk)',
    size: 4,
    paletteCount: 4,
    initial: [
      'c_red', null, null, 'c_green',
      null, 'c_blue', 'c_yellow', null,
      null, 'c_yellow', 'c_blue', null,
      'c_green', null, null, 'c_red',
    ],
    socraticHint: '4 farklı rengi (Kırmızı, Mavi, Sarı, Yeşil) satır ve sütun çakışması olmadan dağıt. 1. satırın ortasındaki iki boşluğa Mavi ve Sarı yerleşmelidir.',
  },
  hard: {
    id: 'hard',
    name: '👑 5x5 Büyük Kromatik Matris (5 Renk)',
    size: 5,
    paletteCount: 5,
    initial: [
      'c_red', 'c_blue', null, null, null,
      'c_blue', null, 'c_green', null, null,
      null, 'c_green', 'c_purple', 'c_red', null,
      null, null, 'c_red', null, 'c_yellow',
      null, null, null, 'c_yellow', 'c_green',
    ],
    socraticHint: 'Adım 1 (Çıkış Noktası): 3. Satıra bakın! [?, Yeşil, Mor, Kırmızı, ?] verilmiştir. Eksik renkler Mavi ve Sarı. 1. Sütunda zaten Mavi (2. satırda) bulunduğundan sol baş Sarı olmak ZORUNDADIR! Böylece 3. satır çözülür.',
  },
};
