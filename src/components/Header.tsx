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
      {/* Üst Ana Çubuk: Logo + Masaüstü Sekmeler + Yıldız + Kullanıcı Profili + Çıkış */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-13 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Logo & Marka */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 text-white flex items-center justify-center text-lg sm:text-xl shadow-md shadow-indigo-600/20 shrink-0">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xs sm:text-lg font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              MİSRİ DİJİTAL
            </h1>
            <span className="text-[8px] sm:text-[10px] font-bold tracking-wider text-indigo-600 uppercase leading-none whitespace-nowrap">
              Akıl Oyunları & BİLSEM
            </span>
          </div>
        </div>

        {/* Masaüstü Navigasyon Sekmeleri (Mobilde alttaki kompakt çubuğa aktarılır) */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onTabChange('games')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'games'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>6 Akıl Oyunu</span>
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
            <span>BİLSEM Sınav Merkezi</span>
          </button>
        </div>

        {/* Yıldız & Kullanıcı Profili (Mobilde ve Masaüstünde Her Zaman Görünür) */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          {/* Yıldız Rozeti */}
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-amber-800 text-[11px] sm:text-xs font-bold shadow-sm shrink-0">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-500 animate-bounce shrink-0" />
            <span>{stars}</span>
          </div>

          {/* Kullanıcı Profili - Artık mobilde de gizlenmiyor! */}
          <div
            className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-slate-200 text-xs shrink-0 max-w-[85px] xs:max-w-[120px] sm:max-w-[160px]"
            title={`Öğrenci: ${studentName}`}
          >
            <span className="text-sm sm:text-base shrink-0 select-none">{avatar || '🧠'}</span>
            <span className="font-bold text-slate-700 truncate text-[11px] sm:text-xs leading-none">
              {studentName}
            </span>
          </div>

          {/* Çıkış Butonu */}
          <button
            onClick={onLogout}
            title="Çıkış Yap / Kodu Değiştir"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-400 flex items-center justify-center transition cursor-pointer shrink-0"
          >
            <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Mobil Cihazlar İçin Sekme Çubuğu: Ekranı sıkıştırmadan başparmakla rahat geçiş */}
      <div className="sm:hidden px-2.5 py-1.5 border-t border-slate-100 bg-slate-50/90 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
          <button
            onClick={() => onTabChange('games')}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
              currentTab === 'games'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Akıl Oyunları</span>
          </button>
          <button
            onClick={() => onTabChange('bilsem')}
            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
              currentTab === 'bilsem'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BİLSEM Sınavı</span>
          </button>
        </div>
      </div>
    </header>
  );
};
