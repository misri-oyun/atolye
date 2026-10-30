import React, { useState } from 'react';
import { Shapes, Check, RotateCcw, Lightbulb, BookOpen, Circle, Square, Triangle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PEDAGOGICAL_METAFORMS_LEVELS, METAFORMS_PIECES } from '../../data/metaformsData';
import { DifficultyLevel, MetaPiece } from '../../types';

interface MetaformsGameProps {
  onAwardStars: (key: string, count: number) => void;
}

export const MetaformsGame: React.FC<MetaformsGameProps> = ({ onAwardStars }) => {
  const [levelKey, setLevelKey] = useState<DifficultyLevel>('easy');
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const currentLevel = PEDAGOGICAL_METAFORMS_LEVELS[levelKey];

  const handleLevelChange = (lvl: DifficultyLevel) => {
    setLevelKey(lvl);
    setBoard(Array(9).fill(null));
    setSelectedPieceId(null);
    setFeedback(null);
    setShowGuide(false);
  };

  const handleCellClick = (index: number) => {
    if (board[index]) {
      const newBoard = [...board];
      newBoard[index] = null;
      setBoard(newBoard);
      setFeedback(null);
      return;
    }

    if (selectedPieceId) {
      const newBoard = [...board];
      const existingIdx = newBoard.indexOf(selectedPieceId);
      if (existingIdx !== -1) newBoard[existingIdx] = null;

      newBoard[index] = selectedPieceId;
      setBoard(newBoard);
      setSelectedPieceId(null);
      setFeedback(null);
    }
  };

  const checkSolution = () => {
    if (board.some((p) => p === null)) {
      setFeedback({ text: 'Henüz 9 parçanın tümünü yerleştirmediniz! Boş kutuları tümdengelimle doldurunuz.', type: 'warning' });
      return;
    }

    const sol = currentLevel.solution;
    const isExact = board.every((val, i) => val === sol[i]);

    if (isExact) {
      setFeedback({ text: 'Tebrikler! Tüm mantık kısıtlarını eksiksiz sağladınız ve çözüme mantıkla ulaştınız! (+30 Yıldız)', type: 'success' });
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      onAwardStars(`mf_${levelKey}`, 30);
    } else {
      setFeedback({ text: 'Bazı parçalar kural ve ipuçlarına uymuyor. İpuçlarındaki komşuluk ve eksen kurallarını tekrar inceleyin!', type: 'error' });
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setSelectedPieceId(null);
    setFeedback(null);
  };

  const renderPieceIcon = (piece: MetaPiece, sizeClass: string = 'w-5 h-5') => {
    if (piece.shape === 'circle') return <Circle className={sizeClass} fill={piece.colorHex} stroke={piece.colorHex} />;
    if (piece.shape === 'square') return <Square className={sizeClass} fill={piece.colorHex} stroke={piece.colorHex} />;
    return <Triangle className={sizeClass} fill={piece.colorHex} stroke={piece.colorHex} />;
  };

  return (
    <div id="game-metaforms" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-indigo-200">
      {/* Üst Başlık & Seviye Seçimi */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-md shadow-indigo-600/20">
            <Shapes className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              1. MetaForms (Görsel Tümdengelim & Kısıt Çözme)
            </h3>
            <p className="text-slate-500 text-xs">
              Hiçbir taş tesadüfen yerleşmez: Her ipucu bir kısıttır; kesişimle 9 parçayı mantıkla çözün.
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
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-700'
              }`}
            >
              {lvl === 'easy' ? '🌱 Seviye 1' : lvl === 'medium' ? '🌿 Seviye 2' : '👑 Seviye 3'}
            </button>
          ))}
        </div>
      </div>

      {/* Pedagojik Kazanım Rozeti */}
      <div className="mb-5 p-3.5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl flex items-center gap-3 text-xs">
        <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-indigo-900 block text-[11px] uppercase tracking-wide">
            {currentLevel.name} • Bilişsel Kazanım:
          </span>
          <span className="text-slate-700 font-semibold text-xs leading-relaxed">
            {currentLevel.targetSkill}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Sol Kolon: Formel Kısıt İpuçları */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Mantık Kısıtları:
            </span>
            <span className="text-[11px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
              {currentLevel.clues.length} Kural
            </span>
          </div>

          <div className="space-y-2">
            {currentLevel.clues.map((clue, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-start gap-2.5 shadow-sm leading-snug"
              >
                <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5">
                  {idx + 1}
                </span>
                <span>{clue.text}</span>
              </div>
            ))}
          </div>

          {/* Parça Havuzu */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Parça Havuzu (Taşı Seç ve Tahtaya Tıkla):
            </span>
            <div className="flex flex-wrap gap-2">
              {METAFORMS_PIECES.map((piece) => {
                const isPlaced = board.includes(piece.id);
                const isSelected = selectedPieceId === piece.id;
                return (
                  <button
                    key={piece.id}
                    disabled={isPlaced}
                    onClick={() => setSelectedPieceId(isSelected ? null : piece.id)}
                    title={piece.label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition border-2 cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'ring-2 ring-indigo-600 border-indigo-600 scale-105 bg-indigo-50/50'
                        : isPlaced
                        ? 'opacity-25 cursor-not-allowed bg-slate-100 border-slate-200'
                        : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                    }`}
                  >
                    {renderPieceIcon(piece, 'w-6 h-6')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Adım Adım Tümdengelim Rehberi Butonu */}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="w-full py-2.5 px-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border border-indigo-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Lightbulb className="w-4 h-4 text-indigo-700" />
            <span>{showGuide ? 'Çıkarım Rehberini Kapat' : 'Adım Adım Tümdengelim Rehberi (Nasıl Düşünmeliyim?)'}</span>
          </button>

          {showGuide && (
            <div className="p-4 bg-indigo-50/95 border-2 border-indigo-300 rounded-2xl text-xs text-indigo-950 space-y-3 animate-in fade-in">
              <h5 className="font-bold text-indigo-900 text-xs uppercase tracking-wider border-b border-indigo-200 pb-1.5">
                Akıl Yürütme Sıralaması:
              </h5>
              {currentLevel.deductionGuide.map((step) => (
                <div key={step.stepNum} className="space-y-1">
                  <span className="font-bold text-indigo-800 block">
                    {step.stepNum}. Adım: {step.title}
                  </span>
                  <p className="text-slate-700 leading-relaxed font-medium bg-white/80 p-2 rounded-lg border border-indigo-100">
                    {step.deduction}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sağ Kolon: 3x3 Izgara & Kontrol */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="p-5 bg-slate-100 rounded-3xl border-4 border-slate-300 shadow-inner">
            <div className="grid grid-cols-3 gap-3">
              {board.map((pieceId, idx) => {
                const piece = pieceId ? METAFORMS_PIECES.find((p) => p.id === pieceId) : null;
                return (
                  <div
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition hover:border-indigo-500 hover:shadow-md active:scale-95 shadow-sm relative group"
                  >
                    {piece ? (
                      <>
                        {renderPieceIcon(piece, 'w-8 h-8 sm:w-10 sm:h-10')}
                        <span className="text-[10px] text-slate-400 mt-0.5 font-bold group-hover:text-rose-500">
                          Kaldır
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-bold text-slate-300">{idx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Geri Bildirim */}
          {feedback && (
            <div
              className={`mt-4 text-xs font-bold px-4 py-2.5 rounded-xl text-center max-w-sm ${
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

          {/* Kontrol Butonları */}
          <div className="w-full flex gap-2.5 pt-4 max-w-sm">
            <button
              onClick={checkSolution}
              className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Çözümü Kontrol Et</span>
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
