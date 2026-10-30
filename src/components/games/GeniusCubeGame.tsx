import React, { useState } from 'react';
import { Boxes, Check, Info, BookOpen, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GENIUS_CUBE_LEVELS } from '../../data/geniusCubeData';
import { DifficultyLevel } from '../../types';

interface GeniusCubeGameProps {
  onAwardStars: (key: string, count: number) => void;
}

export const GeniusCubeGame: React.FC<GeniusCubeGameProps> = ({ onAwardStars }) => {
  const [levelKey, setLevelKey] = useState<DifficultyLevel>('easy');
  const currentLevel = GENIUS_CUBE_LEVELS[levelKey];
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showLayerAnalysis, setShowLayerAnalysis] = useState(true);

  const handleLevelChange = (lvl: DifficultyLevel) => {
    setLevelKey(lvl);
    setFeedback(null);
    setShowExplanation(false);
  };

  const handleSelectOption = (opt: number) => {
    if (opt === currentLevel.correctAnswer) {
      setFeedback({
        text: `Mükemmel! Doğru cevap: ${opt} Küp! (+30 Yıldız)`,
        type: 'success',
      });
      setShowExplanation(true);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      onAwardStars(`cube_${levelKey}`, 30);
    } else {
      setFeedback({
        text: 'Tekrar sayınız! Havada asılı kalamayacak olan gizli taban küplerini unutmayın.',
        type: 'error',
      });
    }
  };

  // 3D İzometrik Voksel Çizici
  const renderIsometricScene = () => {
    const W = 34;
    const H = 18;
    const dH = 26;
    const X0 = 150;
    const Y0 = 120;

    interface Voxel {
      x: number;
      y: number;
      z: number;
    }
    const voxels: Voxel[] = [];

    currentLevel.columns.forEach((col) => {
      for (let z = 0; z < col.height; z++) {
        voxels.push({ x: col.x, y: col.y, z });
      }
    });

    voxels.sort((a, b) => {
      const depthA = a.x + a.y;
      const depthB = b.x + b.y;
      if (depthA !== depthB) return depthA - depthB;
      return a.z - b.z;
    });

    return (
      <svg viewBox="0 0 300 240" className="w-64 h-56 drop-shadow-lg overflow-visible">
        <ellipse cx={X0} cy={Y0 + 55} rx="90" ry="24" fill="#E2E8F0" opacity="0.6" />

        {voxels.map((v, idx) => {
          const u = X0 + (v.x - v.y) * W;
          const vPos = Y0 + (v.x + v.y) * H - v.z * dH;

          const topPoints = `${u},${vPos - dH} ${u + W},${vPos - dH + H} ${u},${vPos - dH + 2 * H} ${u - W},${vPos - dH + H}`;
          const leftPoints = `${u - W},${vPos - dH + H} ${u},${vPos - dH + 2 * H} ${u},${vPos + 2 * H} ${u - W},${vPos + H}`;
          const rightPoints = `${u},${vPos - dH + 2 * H} ${u + W},${vPos - dH + H} ${u + W},${vPos + H} ${u},${vPos + 2 * H}`;

          return (
            <g key={idx}>
              <polygon
                points={leftPoints}
                fill="#8B5CF6"
                stroke="#5B21B6"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <polygon
                points={rightPoints}
                fill="#6D28D9"
                stroke="#5B21B6"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <polygon
                points={topPoints}
                fill="#DDD6FE"
                stroke="#5B21B6"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div id="game-geniuscube" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-violet-200">
      {/* Üst Başlık & Seviye */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-2xl shadow-md shadow-violet-600/20">
            <Boxes className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              6. Curious & Genius Zeka Küpü (3D Uzamsal Sayım & Hacim Analizi)
            </h3>
            <p className="text-slate-500 text-xs">
              Havada asılı kalamayacak olan gizli taşıyıcı taban blokları dahil toplam küp sayısını belirleyin.
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
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-slate-600 hover:text-violet-700'
              }`}
            >
              {lvl === 'easy' ? '🌱 Merdiven' : lvl === 'medium' ? '🌿 L-Blok' : '👑 3 Katlı Kompleks'}
            </button>
          ))}
        </div>
      </div>

      {/* Pedagojik Kazanım Rozeti */}
      <div className="mb-5 p-3.5 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl flex items-center gap-3 text-xs">
        <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-violet-900 block text-[11px] uppercase tracking-wide">
            {currentLevel.name} • Bilişsel Kazanım:
          </span>
          <span className="text-slate-700 font-semibold text-xs leading-relaxed">
            2 Boyuttan 3 Boyuta Zihinsel Dönüşüm: Yüzeyde görünen blokların altındaki gizli sütun taşıyıcılarını formel hesaplama.
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-center">
        {/* Sol Kolon: Gerçek İzometrik 3D Sahne */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border-2 border-slate-200">
          {renderIsometricScene()}
        </div>

        {/* Sağ Kolon: Soru ve Şıklar & Katman Analizi */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 bg-violet-50 border border-violet-200 rounded-2xl">
            <span className="text-xs font-bold text-violet-800 uppercase tracking-wider block mb-1">
              Görev Sorusu:
            </span>
            <p className="text-xs text-violet-900 leading-relaxed font-semibold">
              {currentLevel.question}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Cevap Seçenekleri:
            </span>
            <div className="grid grid-cols-2 gap-3">
              {currentLevel.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  className="py-3 px-4 bg-white border-2 border-slate-200 hover:border-violet-500 rounded-2xl font-black text-slate-800 text-base shadow-sm transition active:scale-95 cursor-pointer flex items-center justify-center gap-2 hover:bg-violet-50/50"
                >
                  <span>{opt} Küp</span>
                  {feedback?.type === 'success' && opt === currentLevel.correctAnswer && (
                    <Check className="w-4 h-4 text-emerald-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Geri Bildirim */}
          {feedback && (
            <div
              className={`text-center text-xs font-bold px-4 py-2.5 rounded-xl ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {feedback.text}
            </div>
          )}

          {/* Katman ve Yükseklik Analizi (Kuşbakışı Haritası) */}
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-violet-600" />
                <span>Kuşbakışı Sütun Yükseklik Haritası:</span>
              </span>
              <button
                onClick={() => setShowLayerAnalysis(!showLayerAnalysis)}
                className="text-[11px] text-violet-600 hover:underline cursor-pointer"
              >
                {showLayerAnalysis ? 'Gizle' : 'Göster'}
              </button>
            </div>

            {showLayerAnalysis && (
              <div className="grid grid-cols-3 gap-1.5 max-w-[180px] mx-auto py-1">
                {Array.from({ length: 3 }, (_, r) =>
                  Array.from({ length: 3 }, (_, c) => {
                    const col = currentLevel.columns.find((k) => k.x === c && k.y === r);
                    const h = col ? col.height : 0;
                    return (
                      <div
                        key={`${r}-${c}`}
                        className={`h-10 rounded-lg flex flex-col items-center justify-center font-black text-xs border ${
                          h > 0
                            ? 'bg-violet-100 border-violet-400 text-violet-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-300'
                        }`}
                      >
                        <span className="text-sm">{h > 0 ? h : '·'}</span>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* Detaylı Pedagojik Açıklama */}
          {showExplanation && (
            <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 leading-relaxed font-medium animate-in fade-in flex items-start gap-2">
              <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <b className="font-bold">Nasıl Hesaplandı?</b> {currentLevel.explanation}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
