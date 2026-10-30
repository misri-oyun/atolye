import { GeniusCubeLevel } from '../types';

export const GENIUS_CUBE_LEVELS: Record<string, GeniusCubeLevel> = {
  easy: {
    id: 'easy',
    name: '🌱 Katmanlı Merdiven (Görünmeyen Tabanlar)',
    question: 'Basamak yapısında üst üste duran küplerin altındaki görünmeyen taşıyıcı taban blokları dahil toplam kaç küp vardır?',
    columns: [
      { x: 0, y: 0, height: 1 },
      { x: 1, y: 0, height: 2 },
      { x: 2, y: 0, height: 3 },
    ],
    correctAnswer: 6,
    options: [5, 6, 7, 8],
    explanation: '1. sütunda 1, 2. sütunda 2 (1 üstte, 1 tabanda), 3. sütunda 3 küp (1 üstte, 2 tabanda) vardır. Toplam = 1 + 2 + 3 = 6 küp.',
  },
  medium: {
    id: 'medium',
    name: '🌿 L-Blok ve Taşıyıcı Kolonlar',
    question: 'L biçiminde dizilmiş blokta havada asılı kalamayacak olan tüm gizli taban küpleri dahil toplam küp sayısı kaçtır?',
    columns: [
      { x: 0, y: 0, height: 1 },
      { x: 1, y: 0, height: 2 },
      { x: 2, y: 0, height: 1 },
      { x: 0, y: 1, height: 2 },
      { x: 0, y: 2, height: 3 },
    ],
    correctAnswer: 9,
    options: [7, 8, 9, 10],
    explanation: 'Köşe kule 3 katlıdır (3 küp). Komşu kollar 2\'şer katlıdır (2 + 2 = 4 küp). Uç bloklar 1\'er katlıdır (1 + 1 = 2 küp). Toplam = 3 + 4 + 2 = 9 küp.',
  },
  hard: {
    id: 'hard',
    name: '👑 3 Katmanlı Kompleks Blok (3x3 Taban)',
    question: '3x3 tabanlı kule mimarisinde görünmeyen tüm iç taşıyıcı bloklar dahil toplam kaç küp vardır?',
    columns: [
      { x: 0, y: 0, height: 1 },
      { x: 1, y: 0, height: 2 },
      { x: 2, y: 0, height: 1 },
      { x: 0, y: 1, height: 2 },
      { x: 1, y: 1, height: 3 }, // Merkez kule
      { x: 2, y: 1, height: 2 },
      { x: 0, y: 2, height: 1 },
      { x: 1, y: 2, height: 2 },
      { x: 2, y: 2, height: 1 },
    ],
    correctAnswer: 15,
    options: [13, 14, 15, 16],
    explanation: '4 köşede 1\'er küp (4), 4 kenar ortasında 2\'şer küp (8) ve merkez kulede 3 küp vardır. Toplam = 4 + 8 + 3 = 15 küp.',
  },
};
