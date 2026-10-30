import React, { useState } from 'react';
import { Sparkles, ArrowRight, Smile, ShieldCheck } from 'lucide-react';
import { validateAccessKey } from '../data/authCodes';

interface AuthModalProps {
  isOpen: boolean;
  onLogin: (name: string, key: string, avatar: string) => void;
}

const AVATARS = [
  { id: 'brain', emoji: '🧠', label: 'Zeka Yıldızı', bg: 'bg-indigo-100 hover:bg-indigo-200 border-indigo-300' },
  { id: 'rocket', emoji: '🚀', label: 'Küçük Kaşif', bg: 'bg-rose-100 hover:bg-rose-200 border-rose-300' },
  { id: 'lion', emoji: '🦁', label: 'Cesur Aslan', bg: 'bg-amber-100 hover:bg-amber-200 border-amber-300' },
  { id: 'owl', emoji: '🦉', label: 'Bilge Baykuş', bg: 'bg-emerald-100 hover:bg-emerald-200 border-emerald-300' },
  { id: 'fox', emoji: '🦊', label: 'Akıllı Tilki', bg: 'bg-orange-100 hover:bg-orange-200 border-orange-300' },
  { id: 'dolphin', emoji: '🐬', label: 'Neşeli Yunus', bg: 'bg-sky-100 hover:bg-sky-200 border-sky-300' },
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onLogin }) => {
  const [studentName, setStudentName] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].emoji);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = studentName.trim();
    const trimmedKey = accessKey.trim().toUpperCase();

    if (!trimmedName) {
      setError('Lütfen adını ve soyadını yaz kahraman! 😊');
      return;
    }

    if (!validateAccessKey(trimmedKey)) {
      setError('Girdiğin kod eşleşmedi! Lütfen öğretmeninden veya atölye yöneticinden aldığın kodu kontrol et.');
      return;
    }

    setError(null);
    onLogin(trimmedName, trimmedKey, selectedAvatar);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-md flex items-center justify-center p-4">
      {/* Arka plan neşeli balon efektleri */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-400 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Üst Renkli Çatı Bandı */}
        <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-amber-400 via-rose-500 via-purple-500 to-sky-400" />

        {/* Başlık Alanı */}
        <div className="text-center mb-6 pt-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white shadow-lg shadow-rose-500/20 text-3xl mb-3 animate-bounce">
            {selectedAvatar}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight flex items-center justify-center gap-1.5">
            <span>Atölyeye Hoş Geldin!</span>
            <Sparkles className="w-6 h-6 text-amber-500 fill-amber-400" />
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-semibold">
            Süper zekanı eğlenceli akıl oyunlarıyla keşfetmeye hazır mısın? 🎈
          </p>
        </div>

        {/* Karakter / Avatar Seçici */}
        <div className="mb-5 bg-amber-50/70 p-3 rounded-2xl border border-amber-200/80">
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-2 text-center">
            Kahramanını Seç:
          </span>
          <div className="grid grid-cols-6 gap-1.5">
            {AVATARS.map((av) => {
              const isSelected = selectedAvatar === av.emoji;
              return (
                <button
                  key={av.id}
                  type="button"
                  onClick={() => setSelectedAvatar(av.emoji)}
                  title={av.label}
                  className={`h-11 rounded-xl flex items-center justify-center text-xl transition-all border-2 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-white scale-110 shadow-md ring-2 ring-indigo-300'
                      : `${av.bg} opacity-80 hover:opacity-100 hover:scale-105`
                  }`}
                >
                  {av.emoji}
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Öğrenci Adı */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span>Senin Adın ve Soyadın Ne?</span>
              <Smile className="w-3.5 h-3.5 text-amber-500" />
            </label>
            <input
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Örn: Zeynep Kaya"
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:bg-white transition"
            />
          </div>

          {/* Aktivasyon Kodu (Asla Ekranda Gösterilmez) */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span>Gizli Atölye / Giriş Kodun:</span>
              <span className="text-[10px] text-slate-400 font-medium">(Öğretmeninden aldığın kod)</span>
            </label>
            <input
              type="text"
              required
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value.toUpperCase())}
              placeholder="Giriş Kodunu Buraya Yaz"
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-mono font-bold tracking-wider uppercase text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

          {error && (
            <div className="p-3 bg-rose-50 border-2 border-rose-200 text-rose-700 text-xs rounded-2xl font-bold leading-relaxed text-center animate-in shake">
              {error}
            </div>
          )}

          {/* Neşeli Büyük Buton */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-600 hover:via-rose-600 hover:to-indigo-700 text-white font-display font-black text-base rounded-2xl shadow-xl shadow-rose-500/25 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>Maceraya Başla!</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>BİLSEM Standartlarında Zeka ve Akıl Oyunları Atölyesi</span>
        </div>
      </div>
    </div>
  );
};
