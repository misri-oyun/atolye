import React from 'react';
import { Brain, Boxes, GraduationCap, Star, LogOut } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  studentName: string;
  avatar?: string;
  stars: number;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  studentName,
  avatar,
  stars,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Marka */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 text-white flex items-center justify-center text-xl shadow-md shadow-indigo-600/20">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
              MİSRİ DİJİTAL
            </h1>
            <span className="text-[10px] font-bold tracking-wider text-indigo-600 uppercase">
              Akıl Oyunları & BİLSEM
            </span>
          </div>
        </div>

        {/* Ana Navigasyon Sekmeleri */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTabChange('games')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'games'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span className="hidden sm:inline">6 Akıl Oyunu</span>
            <span className="sm:hidden">Oyunlar</span>
          </button>
          <button
            onClick={() => onTabChange('bilsem')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'bilsem'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="hidden sm:inline">BİLSEM Sınav Merkezi</span>
            <span className="sm:hidden">BİLSEM</span>
          </button>
        </div>

        {/* Yıldız & Kullanıcı Profili */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-amber-800 text-xs font-bold shadow-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-bounce" />
            <span>{stars}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 text-xs">
            <span className="text-base">{avatar || '🧠'}</span>
            <span className="font-bold text-slate-700 truncate max-w-[140px]">{studentName}</span>
          </div>

          <button
            onClick={onLogout}
            title="Çıkış Yap / Kodu Değiştir"
            className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-400 flex items-center justify-center transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
