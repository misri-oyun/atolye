import { SudokuLevel } from '../types';

export const SUDOKU_LEVELS: Record<string, SudokuLevel> = {
  easy: {
    id: 'easy',
    name: '🌱 4x4 Mini Sudoku (2x2 Bölgeli)',
    size: 4,
    boxW: 2,
    boxH: 2,
    initial: [
      1, null, 3, null,
      null, 4, null, 2,
      null, 1, null, 3,
      4, null, 2, null,
    ],
    solution: [
      1, 2, 3, 4,
      3, 4, 1, 2,
      2, 1, 4, 3,
      4, 3, 2, 1,
    ],
    socraticHint: 'Çıkış Adımı: 2. Sütuna bakın! [?, 4, 1, ?] verilmiştir. Eksik sayılar 2 ve 3. Ancak 1. satırda zaten 3 olduğu için sol üstün sağı (1. satır, 2. sütun) KESİNLİKLE 2 olmak zorundadır! Böylece 1. satır tamamlanır.',
  },
  medium: {
    id: 'medium',
    name: '🌿 4x4 İleri Sudoku',
    size: 4,
    boxW: 2,
    boxH: 2,
    initial: [
      null, 2, 4, null,
      1, null, null, 3,
      4, null, null, 2,
      null, 1, 3, null,
    ],
    solution: [
      3, 2, 4, 1,
      1, 4, 2, 3,
      4, 3, 1, 2,
      2, 1, 3, 4,
    ],
    socraticHint: '1. Sütunda [?, 1, 4, ?] var. Eksik sayılar 2 ve 3. 1. satırda 2 olduğuna göre sol üst köşe 3 olmalıdır!',
  },
  hard: {
    id: 'hard',
    name: '👑 6x6 Bölgesel Sudoku (2x3 Alt Kutulu)',
    size: 6,
    boxW: 3,
    boxH: 2,
    initial: [
      1, null, 3, null, 5, null,
      4, 5, null, 1, null, 3,
      2, null, null, 5, null, 4,
      null, 6, null, null, 3, null,
      3, null, 2, null, null, 5,
      null, 4, null, 3, 1, null,
    ],
    solution: [
      1, 2, 3, 4, 5, 6,
      4, 5, 6, 1, 2, 3,
      2, 3, 1, 5, 6, 4,
      5, 6, 4, 2, 3, 1,
      3, 1, 2, 6, 4, 5,
      6, 4, 5, 3, 1, 2,
    ],
    socraticHint: '6x6 Sudoku Kuralı: Her satırda, her sütunda ve kalın çerçeveli 2x3 kutularda 1-6 arasındaki sayılar tek bir kez bulunmalıdır!',
  },
};
