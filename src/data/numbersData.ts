import { NumbersLevel } from '../types';

export const NUMBERS_LEVELS: Record<string, NumbersLevel> = {
  easy: {
    id: 'easy',
    name: '🌱 Kesişen Eşitlikler (2x2)',
    size: 2,
    instruction: 'Satır ve sütun hedeflerini sağlayınız: [1. Satır: a + b = 13], [2. Satır: c - d = 2], [1. Sütun: a + c = 11], [2. Sütun: b + d = 8].',
    rowTargets: [13, 2],
    colTargets: [11, 8],
    initial: [null, 6, 4, null],
    socraticHint: '1. Sütuna bak: [ ? + 4 = 11 ] olduğundan sol üst 7 olmalıdır. 1. Satırda [ 7 + 6 = 13 ] doğrulanır. Sağ alta ne kalır?',
  },
  medium: {
    id: 'medium',
    name: '🌿 Kesişen Dört İşlem Matrisi (3x3)',
    size: 3,
    instruction: 'Satır ve sütunlardaki tüm hedef toplamları aynı anda sağlayınız. [Satırlar: 17, 14, 19] | [Sütunlar: 16, 15, 19].',
    rowTargets: [17, 14, 19],
    colTargets: [16, 15, 19],
    initial: [8, null, null, null, 9, null, null, 3, 9],
    socraticHint: '2. Sütundan başla: 2. Sütun toplamı 15 olmalıdır. [ ? + 9 + 3 = 15 ] ise 1. satır ortası 3 olmalıdır! Buradan 1. satıra geçerek devam et.',
  },
  hard: {
    id: 'hard',
    name: '👑 Usta Sihirli Kare (1-9 Tekrarsız, Hedef: 15)',
    size: 3,
    instruction: '1\'den 9\'a kadar tüm rakamları TEKRARSIZ yerleştiriniz. Tüm satırların, sütunların ve her iki köşegenin toplamı tam olarak 15 olmalıdır!',
    isMagicSquare: true,
    magicTarget: 15,
    initial: [null, null, null, null, 5, null, null, null, null],
    socraticHint: 'Sihirli kare kuralı: Merkezdeki 5\'in etrafındaki çift sayılar köşelere (2, 4, 6, 8), tek sayılar kenar ortalarına (1, 3, 7, 9) yerleşmelidir. Karşılıklı zıt hücrelerin toplamı daima 10 olmalıdır!',
  },
};
