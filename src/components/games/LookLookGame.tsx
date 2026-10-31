import React, { useState, useEffect } from 'react';
import { Eye, Shuffle, Star, Heart, Zap, Rocket, Gem, Sun, Moon, Bell, Flame, Snowflake, Crown, Compass, Anchor, Key, Music, Palette, Shield, Target, Trophy, Feather, Sparkles, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOOKLOOK_SYMBOLS } from '../../data/looklookData';
import { DifficultyLevel, LookSymbol } from '../../types';

interface LookLookGameProps {
  onAwardStars: (key: string, count: number) => void;
}

const ICON_COMPONENTS: Record<string, React.FC<{ className?: string; color?: string }>> = {
  Star, Heart, Zap, Rocket, Gem, Sun, Moon, Bell,
  Flame, Snowflake, Crown, Compass, Anchor, Key, Music, Palette,
  Shield, Target, Trophy, Feather, Sparkles, Lightbulb,
  Flower2: Sparkles, Eye,
};

export const LookLookGame: React.FC<LookLookGameProps> = ({ onAwardStars }) => {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
  const [round, setRound] = useState<number>(1);
  const [targetCommonId, setTargetCommonId] = useState<string>('');
  const [cards, setCards] = useState<LookSymbol[][]>([]);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const startNewRound = (diff: DifficultyLevel = difficulty) => {
    setFeedback(null);
    const count = diff === 'easy' ? 5 : diff === 'medium' ? 7 : 6;
    const isThreeCards = diff === 'hard';

    // 24 sembolü karıştır
    const shuffled = [...LOOKLOOK_SYMBOLS].sort(() => 0.5 - Math.random());

    // 1 adet ortak sembol seç
    const commonSymbol = shuffled[0];
    setTargetCommonId(commonSymbol.id);

    const rest = shuffled.slice(1);
    const cardA = [commonSymbol, ...rest.slice(0, count - 1)].sort(() => 0.5 - Math.random());
    const cardB = [commonSymbol, ...rest.slice(count - 1, (count - 1) * 2)].sort(() => 0.5 - Math.random());
    const newCards = [cardA, cardB];

    if (isThreeCards) {
      const cardC = [commonSymbol, ...rest.slice((count - 1) * 2, (count - 1) * 3)].sort(() => 0.5 - Math.random());
      newCards.push(cardC);
    }

    setCards(newCards);
  };

  useEffect(() => {
    startNewRound(difficulty);
  }, [difficulty]);

  const handleSymbolClick = (symId: string) => {
    if (symId === targetCommonId) {
      setFeedback({ text: 'Tebrikler! Ortak sembolü anında yakaladınız! (+15 Yıldız)', type: 'success' });
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      onAwardStars(`ll_${difficulty}_${round}`, 15);

      setTimeout(() => {
        setRound((prev) => (prev % 5) + 1);
        startNewRound(difficulty);
      }, 900);
    } else {
      setFeedback({ text: 'Bu sembol diğer kart(lar)da yok. Dikkatle tekrar inceleyin!', type: 'error' });
    }
  };

  const renderIcon = (iconName: string, color: string) => {
    const Component = ICON_COMPONENTS[iconName] || Star;
    return <Component className="w-7 h-7 sm:w-8 sm:h-8" color={color} />;
  };

  return (
    <div id="game-looklook" className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-sky-200">
      {/* Üst Başlık & Kontroller */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl shadow-md shadow-sky-500/20">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              5. Look Look (Görsel Dikkat & Ortak Sembol Avı)
            </h3>
            <p className="text-slate-500 text-xs">
              Kartlar arasındaki tek ortak sembolü bulun. Üst seviyelerde sembol sayısı artar ve 3 kart kesişimi devreye girer!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold">
            {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setDifficulty(lvl);
                  setRound(1);
                }}
                className={`px-3 py-1.5 rounded-xl transition cursor-pointer font-bold ${
                  difficulty === lvl
                    ? 'bg-white text-sky-700 shadow-sm'
                    : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                {lvl === 'easy' ? '🌱 2 Kart (5\'li)' : lvl === 'medium' ? '🌿 2 Kart (7\'li)' : '👑 3 Kart Kesişimi'}
              </button>
            ))}
          </div>
          <span className="px-3 py-1.5 bg-sky-100 text-sky-800 rounded-xl text-xs font-bold font-mono">
            Tur: {round} / 5
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {/* Kartlar Izgarası */}
        <div
          className={`grid gap-4 ${
            cards.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
          }`}
        >
          {cards.map((cardSymbols, cardIdx) => (
            <div
              key={cardIdx}
              className="p-5 bg-sky-50/70 rounded-3xl border-2 border-sky-300 shadow-sm flex flex-col items-center"
            >
              <span className="text-xs font-bold text-sky-800 mb-3 px-3 py-1 bg-white rounded-lg border border-sky-200">
                {cardIdx + 1}. Kart
              </span>

              <div className="grid grid-cols-3 gap-2.5 w-full">
                {cardSymbols.map((sym, sIdx) => (
                  <button
                    key={`${sym.id}-${sIdx}`}
                    onClick={() => handleSymbolClick(sym.id)}
                    title={sym.name}
                    className="h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:border-sky-400 hover:scale-105 active:scale-95 transition cursor-pointer group"
                  >
                    {renderIcon(sym.iconName, sym.color)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Geri Bildirim */}
        {feedback && (
          <div
            className={`text-center text-xs font-bold px-4 py-2 rounded-xl mx-auto max-w-sm ${
              feedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}
          >
            {feedback.text}
          </div>
        )}

        <div className="flex justify-center gap-2 pt-1">
          <button
            onClick={() => startNewRound(difficulty)}
            className="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>Yeni Kartlar Dağıt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
