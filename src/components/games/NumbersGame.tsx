import React, { useState } from 'react';
import { Calculator, Check, RotateCcw, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NUMBERS_LEVELS } from '../../data/numbersData';
import { DifficultyLevel } from '../../types';

interface NumbersGameProps {
  onAwardStars: (key: string, count: number) => void;
}

export const NumbersGame: React.FC<NumbersGameProps> = ({ onAwardStars }) => {
  const [levelKey, setLevelKey] = useState<DifficultyLevel>('easy');
  const currentLevel = NUMBERS_LEVELS[levelKey];

  const [board, setBoard] = useState<(number | null)[]>([...currentLevel.initial]);
  const [selectedNum, setSelectedNum] = useState<number>(1);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleLevelChange = (lvl: DifficultyLevel) => {
    setLevelKey(lvl);
    setBoard([...NUMBERS_LEVELS[lvl].initial]);
    setSelectedNum(1);
    setFeedback(null);
    setShowHint(false);
  };

  const handleCellClick = (index: number) => {
    // Sabit ipucu hücreleri değiştirilemez
    if (currentLevel.initial[index] !== null) return;

    const newBoard = [...board];
    // Eğer aynı sayı varsa kaldır, yoksa seçili sayıyı yaz
    newBoard[index] = newBoard[index] === selectedNum ? null : selectedNum;
    setBoard(newBoard);
    setFeedback(null);
  };

  const checkSolution = () => {
    if (board.some((v) => v === null)) {
      setFeedback({ text: 'Lütfen tablodaki tüm boş karelere birer rakam yerleştiriniz!', type: 'warning' });
      return;
    }

    if (currentLevel.isMagicSquare) {
      // 3x3 Sihirli Kare Doğrulayıcı (Tüm 8 simetrik varyasyonu destekler)
      const numbersUsed = board.map((n) => Number(n));
      const uniqueSet = new Set(numbersUsed);
      if (uniqueSet.size !== 9 || numbersUsed.some((n) => n < 1 || n > 9)) {
        setFeedback({ text: 'Sihirli karede 1\'den 9\'a kadar tüm rakamlar TEKRARSIZ olarak bulunmalıdır!', type: 'error' });
        return;
      }

      // Satırlar
      const r1 = numbersUsed[0] + numbersUsed[1] + numbersUsed[2];
      const r2 = numbersUsed[3] + numbersUsed[4] + numbersUsed[5];
      const r3 = numbersUsed[6] + numbersUsed[7] + numbersUsed[8];

      // Sütunlar
      const c1 = numbersUsed[0] + numbersUsed[3] + numbersUsed[6];
      const c2 = numbersUsed[1] + numbersUsed[4] + numbersUsed[7];
      const c3 = numbersUsed[2] + numbersUsed[5] + numbersUsed[8];

      // Köşegenler
      const d1 = numbersUsed[0] + numbersUsed[4] + numbersUsed[8];
      const d2 = numbersUsed[2] + numbersUsed[4] + numbersUsed[6];

      if (r1 === 15 && r2 === 15 && r3 === 15 && c1 === 15 && c2 === 15 && c3 === 15 && d1 === 15 && d2 === 15) {
        setFeedback({ text: 'Kusursuz! 3x3 Sihirli Kare kurallarını başarıyla tamamladınız! (+30 Yıldız)', type: 'success' });
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        onAwardStars(`num_${levelKey}`, 30);
      } else {
        setFeedback({ text: 'Tüm satır, sütun ve köşegenlerin toplamı 15 olmalıdır. Toplamları tekrar kontrol edin!', type: 'error' });
      }
      return;
    }

    if (levelKey === 'easy') {
      // 2x2 Eşitlik Kontrolü
      // Row 1: a + b = 13
      // Row 2: c - d = 2
      // Col 1: a + c = 11
      // Col 2: b + d = 8
      const [a, b, c, d] = board as number[];
      if (a + b === 13 && c - d === 2 && a + c === 11 && b + d === 8) {
        setFeedback({ text: 'Harika! Satır ve sütun hedeflerinin tümü sağlandı! (+25 Yıldız)', type: 'success' });
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
        onAwardStars(`num_${levelKey}`, 25);
      } else {
        setFeedback({ text: 'Eşitlikler sağlanmadı. [1. Satır Toplamı: 13, 2. Satır Farkı: 2, 1. Sütun: 11, 2. Sütun: 8] olmalıdır.', type: 'error' });
      }
      return;
    }

    if (levelKey === 'medium') {
      // 3x3 Kesişen Satır-Sütun Toplamları
      const b = board as number[];
      const r1 = b[0] + b[1] + b[2];
      const r2 = b[3] + b[4] + b[5];
      const r3 = b[6] + b[7] + b[8];
      const c1 = b[0] + b[3] + b[6];
      const c2 = b[1] + b[4] + b[7];
      const c3 = b[2] + b[5] + b[8];

      if (r1 === 17 && r2 === 14 && r3 === 19 && c1 === 16 && c2 === 15 && c3 === 19) {
        setFeedback({ text: 'Tebrikler! Kesişen tüm hedef toplamları başarıyla sağladınız! (+30 Yıldız)', type: 'success' });
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        onAwardStars(`num_${levelKey}`, 30);
      } else {
        setFeedback({ text: 'Hedef toplamlar uyuşmuyor. Satır hedefleri: 17, 14, 19 | Sütun hedefleri: 16, 15, 19.', type: 'error' });
      }
    }
  };

  const resetBoard = () => {
    setBoard([...currentLevel.initial]);
    setFeedback(null);
  };

  return (
    <div id="game-numbers" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-amber-200">
      {/* Üst Başlık & Seviye Butonları */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-md shadow-amber-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              2. Numbers (Sayısal Mantık & İşlem Kısıtları)
            </h3>
            <p className="text-slate-500 text-xs">
              Satır, sütun ve köşegen hedeflerini sağlayan sayıları yerleştirin.
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
                  ? 'bg-white text-amber-700 shadow-sm'
                  : 'text-slate-600 hover:text-amber-700'
              }`}
            >
              {lvl === 'easy' ? '🌱 Eşitlikler (2x2)' : lvl === 'medium' ? '🌿 Kesişen Dört İşlem' : '👑 Sihirli Kare'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Sol Kolon: Kurallar & Rakam Seçici */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Kural & İşlem Hedefleri:
          </span>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
            {currentLevel.instruction}
          </p>

          {/* Rakam Seçici Tuş Takımı */}
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Rakam Seç (Sonra Boş Kareye Tıkla):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedNum(n)}
                  className={`w-9 h-9 rounded-xl font-black text-sm transition border cursor-pointer ${
                    selectedNum === n
                      ? 'bg-amber-500 text-slate-900 border-amber-600 shadow-sm scale-105 ring-2 ring-amber-300'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Sokratik İpucu */}
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full py-2.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>{showHint ? 'İpucunu Gizle' : 'Numbers Sokratik İpucu'}</span>
          </button>
          {showHint && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed font-medium">
              {currentLevel.socraticHint}
            </div>
          )}
        </div>

        {/* Sağ Kolon: Izgara & Hedefler */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="p-6 bg-amber-50/70 rounded-3xl border-4 border-amber-300 shadow-inner flex flex-col items-center">
            {/* 3x3 veya 2x2 Izgara */}
            <div
              className="grid gap-2.5"
              style={{
                gridTemplateColumns: `repeat(${currentLevel.size}, minmax(54px, 64px))`,
              }}
            >
              {board.map((val, idx) => {
                const isFixed = currentLevel.initial[idx] !== null;
                return (
                  <button
                    key={idx}
                    disabled={isFixed}
                    onClick={() => handleCellClick(idx)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl transition border-2 shadow-sm ${
                      isFixed
                        ? 'bg-slate-200 border-slate-400 text-slate-800 cursor-default'
                        : val !== null
                        ? 'bg-white border-amber-500 text-indigo-700 cursor-pointer hover:bg-amber-50 active:scale-95'
                        : 'bg-white border-dashed border-amber-300 text-slate-300 cursor-pointer hover:border-amber-500'
                    }`}
                  >
                    {val !== null ? val : ''}
                  </button>
                );
              })}
            </div>

            {/* Sütun Hedef Rozetleri */}
            {currentLevel.colTargets && (
              <div
                className="grid gap-2.5 mt-2.5"
                style={{
                  gridTemplateColumns: `repeat(${currentLevel.size}, minmax(54px, 64px))`,
                }}
              >
                {currentLevel.colTargets.map((ct, cIdx) => (
                  <div
                    key={cIdx}
                    className="text-center text-[11px] font-bold text-amber-800 bg-amber-100 py-1 rounded-lg border border-amber-300"
                  >
                    ↓ {ct}
                  </div>
                ))}
              </div>
            )}
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
              className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Eşitlikleri Denetle</span>
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
