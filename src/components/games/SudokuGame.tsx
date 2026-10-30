import React, { useState } from 'react';
import { TableCellsMerge, Check, RotateCcw, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUDOKU_LEVELS } from '../../data/sudokuData';
import { DifficultyLevel } from '../../types';

interface SudokuGameProps {
  onAwardStars: (key: string, count: number) => void;
}

export const SudokuGame: React.FC<SudokuGameProps> = ({ onAwardStars }) => {
  const [levelKey, setLevelKey] = useState<DifficultyLevel>('easy');
  const currentLevel = SUDOKU_LEVELS[levelKey];

  const [board, setBoard] = useState<(number | null)[]>([...currentLevel.initial]);
  const [selectedNum, setSelectedNum] = useState<number>(1);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleLevelChange = (lvl: DifficultyLevel) => {
    setLevelKey(lvl);
    setBoard([...SUDOKU_LEVELS[lvl].initial]);
    setSelectedNum(1);
    setFeedback(null);
    setShowHint(false);
  };

  const handleCellClick = (index: number) => {
    if (currentLevel.initial[index] !== null) return;
    const newBoard = [...board];
    newBoard[index] = newBoard[index] === selectedNum ? null : selectedNum;
    setBoard(newBoard);
    setFeedback(null);
  };

  const checkSolution = () => {
    if (board.some((v) => v === null)) {
      setFeedback({ text: 'Henüz tüm Sudoku karelerini doldurmadınız!', type: 'warning' });
      return;
    }

    const { size, boxW, boxH } = currentLevel;

    // 1. Satır Denetimi
    for (let r = 0; r < size; r++) {
      const rowSet = new Set<number>();
      for (let c = 0; c < size; c++) {
        const val = board[r * size + c];
        if (val) rowSet.add(val);
      }
      if (rowSet.size !== size) {
        setFeedback({ text: `${r + 1}. satırda aynı rakam tekrar ediyor!`, type: 'error' });
        return;
      }
    }

    // 2. Sütun Denetimi
    for (let c = 0; c < size; c++) {
      const colSet = new Set<number>();
      for (let r = 0; r < size; r++) {
        const val = board[r * size + c];
        if (val) colSet.add(val);
      }
      if (colSet.size !== size) {
        setFeedback({ text: `${c + 1}. sütunda aynı rakam tekrar ediyor!`, type: 'error' });
        return;
      }
    }

    // 3. Alt Kutu (Bölge) Denetimi (Örn: 2x2 veya 2x3 kutular)
    const numBoxesY = size / boxH;
    const numBoxesX = size / boxW;

    for (let by = 0; by < numBoxesY; by++) {
      for (let bx = 0; bx < numBoxesX; bx++) {
        const boxSet = new Set<number>();
        for (let r = 0; r < boxH; r++) {
          for (let c = 0; c < boxW; c++) {
            const row = by * boxH + r;
            const col = bx * boxW + c;
            const val = board[row * size + col];
            if (val) boxSet.add(val);
          }
        }
        if (boxSet.size !== size) {
          setFeedback({
            text: 'Kalın çizgili alt bölgelerden (kutulardan) birinde aynı rakam tekrar ediyor!',
            type: 'error',
          });
          return;
        }
      }
    }

    setFeedback({
      text: `Harika! ${size}x${size} Sudoku kuralları (satır, sütun ve alt kutular) eksiksiz doğrulandı! (+30 Yıldız)`,
      type: 'success',
    });
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    onAwardStars(`sud_${levelKey}`, 30);
  };

  const resetBoard = () => {
    setBoard([...currentLevel.initial]);
    setFeedback(null);
  };

  return (
    <div id="game-sudoku" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-emerald-200">
      {/* Başlık & Seviye */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-md shadow-emerald-600/20">
            <TableCellsMerge className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              4. Sudoku (Bölgesel Mantık & Eleme)
            </h3>
            <p className="text-slate-500 text-xs">
              Her satır, sütun ve kalın çerçeveli alt bölgede rakamlar tek bir kez bulunmalıdır.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold">
          {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleLevelChange(lvl)}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer font-bold ${
                levelKey === lvl
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              {lvl === 'easy' ? '🌱 4x4 Başlangıç' : lvl === 'medium' ? '🌿 4x4 İleri' : '👑 6x6 Bölgesel'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Sol Kolon: Tuşlar & İpucu */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Rakam Seçici:
          </span>

          <div className="flex flex-wrap gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            {Array.from({ length: currentLevel.size }, (_, i) => i + 1).map((n) => {
              const isSelected = selectedNum === n;
              return (
                <button
                  key={n}
                  onClick={() => setSelectedNum(n)}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition border-2 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300 scale-105 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50'
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-emerald-600" />
            <span>{showHint ? 'İpucunu Gizle' : 'Sudoku Sokratik İpucu'}</span>
          </button>
          {showHint && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 leading-relaxed font-medium">
              {currentLevel.socraticHint}
            </div>
          )}
        </div>

        {/* Sağ Kolon: Izgara & Kontrol */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="p-5 bg-emerald-50/50 rounded-3xl border-4 border-emerald-300 shadow-inner">
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${currentLevel.size}, minmax(40px, 48px))`,
              }}
            >
              {Array.from({ length: currentLevel.size }, (_, r) =>
                Array.from({ length: currentLevel.size }, (_, c) => {
                  const idx = r * currentLevel.size + c;
                  const val = board[idx];
                  const isFixed = currentLevel.initial[idx] !== null;

                  // Alt kutu sınır çizgileri
                  const isBoxBottom = (r + 1) % currentLevel.boxH === 0 && r + 1 !== currentLevel.size;
                  const isBoxRight = (c + 1) % currentLevel.boxW === 0 && c + 1 !== currentLevel.size;

                  return (
                    <button
                      key={idx}
                      disabled={isFixed}
                      onClick={() => handleCellClick(idx)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-lg transition shadow-sm ${
                        isFixed
                          ? 'bg-emerald-100 text-emerald-900 cursor-default'
                          : 'bg-white text-indigo-700 hover:border-emerald-500 cursor-pointer active:scale-95'
                      } ${
                        isBoxBottom ? 'border-b-4 border-b-emerald-600' : 'border-b border-b-emerald-200'
                      } ${
                        isBoxRight ? 'border-r-4 border-r-emerald-600' : 'border-r border-r-emerald-200'
                      } border-t border-l border-emerald-200`}
                    >
                      {val !== null ? val : ''}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Geri Bildirim */}
          {feedback && (
            <div
              className={`mt-4 text-xs font-bold px-4 py-2 rounded-xl text-center max-w-sm ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : feedback.type === 'warning'
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {feedback.text}
            </div>
          )}

          {/* Butonlar */}
          <div className="w-full flex gap-2.5 pt-4 max-w-sm">
            <button
              onClick={checkSolution}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Sudoku Kurallarını Denetle</span>
            </button>
            <button
              onClick={resetBoard}
              className="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
