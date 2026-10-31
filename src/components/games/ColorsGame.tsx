import React, { useState } from 'react';
import { Palette, Check, RotateCcw, Lightbulb, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLORS_DEF, COLORS_LEVELS } from '../../data/colorsData';
import { DifficultyLevel } from '../../types';

interface ColorsGameProps {
  onAwardStars: (key: string, count: number) => void;
}

export const ColorsGame: React.FC<ColorsGameProps> = ({ onAwardStars }) => {
  const [levelKey, setLevelKey] = useState<DifficultyLevel>('easy');
  const currentLevel = COLORS_LEVELS[levelKey];

  const [board, setBoard] = useState<(string | null)[]>([...currentLevel.initial]);
  const [selectedColorId, setSelectedColorId] = useState<string>('c_red');
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleLevelChange = (lvl: DifficultyLevel) => {
    setLevelKey(lvl);
    setBoard([...COLORS_LEVELS[lvl].initial]);
    setSelectedColorId('c_red');
    setFeedback(null);
    setShowHint(false);
  };

  const handleCellClick = (index: number) => {
    if (currentLevel.initial[index] !== null) return; // Kilitli ipucu hücresi
    const newBoard = [...board];
    newBoard[index] = newBoard[index] === selectedColorId ? null : selectedColorId;
    setBoard(newBoard);
    setFeedback(null);
  };

  const checkSolution = () => {
    if (board.some((c) => c === null)) {
      setFeedback({ text: 'Lütfen tablodaki tüm kareleri birer renkle boyayınız!', type: 'warning' });
      return;
    }

    const n = currentLevel.size;

    // Satır Denetimi
    for (let r = 0; r < n; r++) {
      const rowSet = new Set<string>();
      for (let c = 0; c < n; c++) {
        const val = board[r * n + c];
        if (val) rowSet.add(val);
      }
      if (rowSet.size !== n) {
        setFeedback({
          text: `${r + 1}. satırda aynı renk tekrar ediyor veya eksik renk var!`,
          type: 'error',
        });
        return;
      }
    }

    // Sütun Denetimi
    for (let c = 0; c < n; c++) {
      const colSet = new Set<string>();
      for (let r = 0; r < n; r++) {
        const val = board[r * n + c];
        if (val) colSet.add(val);
      }
      if (colSet.size !== n) {
        setFeedback({
          text: `${c + 1}. sütunda aynı renk tekrar ediyor veya eksik renk var!`,
          type: 'error',
        });
        return;
      }
    }

    setFeedback({
      text: `Harika! ${n}x${n} Kromatik Latin Karesi kurallara eksiksiz uyuyor! (+30 Yıldız)`,
      type: 'success',
    });
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    onAwardStars(`col_${levelKey}`, 30);
  };

  const resetBoard = () => {
    setBoard([...currentLevel.initial]);
    setFeedback(null);
  };

  return (
    <div id="game-colors" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-rose-200">
      {/* Başlık & Seviye */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl shadow-md shadow-rose-500/20">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              3. Colors (Kromatik Latin Karesi)
            </h3>
            <p className="text-slate-500 text-xs">
              Hiçbir satır ve sütunda aynı renk iki kez kullanılamaz. Renk paletiyle ızgarayı tamamlayın.
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
                  ? 'bg-white text-rose-700 shadow-sm'
                  : 'text-slate-600 hover:text-rose-700'
              }`}
            >
              {lvl === 'easy' ? '🌱 3x3 Başlangıç' : lvl === 'medium' ? '🌿 4x4 Latin' : '👑 5x5 Büyük Matris'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Sol Kolon: Palet & İpucu */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Renk Fırçası:
          </span>

          <div className="flex flex-wrap gap-2.5 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            {COLORS_DEF.slice(0, currentLevel.paletteCount).map((c) => {
              const isSelected = selectedColorId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedColorId(c.id)}
                  title={c.name}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition border-2 cursor-pointer active:scale-95 shadow-sm ${
                    isSelected ? 'ring-2 ring-slate-900 scale-105 border-white' : 'border-slate-300'
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {isSelected && <Check className="w-5 h-5 text-white drop-shadow" />}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Yukarıdan bir renge tıklayıp fırçayı seçin, ardından boş kareye dokunarak boyayın. Boyalı kareye tekrar tıklayarak silebilirsiniz.
          </p>

          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full py-2.5 px-3 bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-rose-600" />
            <span>{showHint ? 'İpucunu Gizle' : 'Colors Sokratik İpucu'}</span>
          </button>
          {showHint && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 leading-relaxed font-medium">
              {currentLevel.socraticHint}
            </div>
          )}
        </div>

        {/* Sağ Kolon: Izgara & Kontrol */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="p-5 bg-slate-100 rounded-3xl border-4 border-slate-300 shadow-inner">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${currentLevel.size}, minmax(44px, 56px))`,
              }}
            >
              {board.map((cId, idx) => {
                const isFixed = currentLevel.initial[idx] !== null;
                const cObj = cId ? COLORS_DEF.find((c) => c.id === cId) : null;
                return (
                  <button
                    key={idx}
                    disabled={isFixed}
                    onClick={() => handleCellClick(idx)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition border-2 shadow-sm ${
                      isFixed
                        ? 'ring-2 ring-slate-400 cursor-default'
                        : 'cursor-pointer hover:opacity-90 active:scale-95'
                    } ${!cId ? 'bg-white border-dashed border-slate-300' : ''}`}
                    style={{ backgroundColor: cObj ? cObj.hex : '#FFFFFF' }}
                  >
                    {isFixed && <Lock className="w-4 h-4 text-white/80" />}
                    {!isFixed && !cId && <span className="text-slate-300 font-bold text-xs">+</span>}
                  </button>
                );
              })}
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
              className="flex-1 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Renk Kurallarını Denetle</span>
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
