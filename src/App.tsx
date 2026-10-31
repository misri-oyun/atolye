/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { AuthModal } from './components/AuthModal';
import { MetaformsGame } from './components/games/MetaformsGame';
import { NumbersGame } from './components/games/NumbersGame';
import { ColorsGame } from './components/games/ColorsGame';
import { SudokuGame } from './components/games/SudokuGame';
import { LookLookGame } from './components/games/LookLookGame';
import { GeniusCubeGame } from './components/games/GeniusCubeGame';
import { BilsemCenter } from './components/bilsem/BilsemCenter';
import { TabType, UserState } from './types';
import { Shapes, Calculator, Palette, TableCellsMerge, Eye, Boxes } from 'lucide-react';

const STORAGE_KEY = 'misri_user_session';

export default function App() {
  const [user, setUser] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      studentName: 'Misafir Öğrenci',
      isLoggedIn: false,
      accessKey: '',
      stars: 0,
      awardedKeys: [],
    };
  });

  const [currentTab, setCurrentTab] = useState<TabType>('games');

  // LocalStorage senkronizasyonu
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {}
  }, [user]);

  const handleLogin = (name: string, key: string, avatar: string) => {
    setUser({
      studentName: name,
      isLoggedIn: true,
      accessKey: key,
      stars: 0,
      awardedKeys: [],
      avatar: avatar,
    });
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const handleLogout = () => {
    setUser({
      studentName: 'Misafir Öğrenci',
      isLoggedIn: false,
      accessKey: '',
      stars: 0,
      awardedKeys: [],
      avatar: '🧠',
    });
  };

  const handleAwardStars = (starKey: string, count: number) => {
    setUser((prev) => {
      if (prev.awardedKeys.includes(starKey)) return prev;
      return {
        ...prev,
        stars: prev.stars + count,
        awardedKeys: [...prev.awardedKeys, starKey],
      };
    });
  };

  const scrollToGame = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* 1. Lisans / Aktivasyon Giriş Kapısı (Instagram Kod Girişi) */}
      <AuthModal isOpen={!user.isLoggedIn} onLogin={handleLogin} />

      {/* 2. Header & Navigasyon */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        studentName={user.studentName}
        avatar={user.avatar}
        stars={user.stars}
        onLogout={handleLogout}
      />

      {/* 3. Ana İçerik */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {currentTab === 'games' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Hızlı Erişim / Oyun Atlama Barı */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex items-center gap-2 overflow-x-auto custom-scroll">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">
                Oyunlar:
              </span>
              <button
                onClick={() => scrollToGame('game-metaforms')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Shapes className="w-3.5 h-3.5 text-indigo-600" />
                <span>1. MetaForms</span>
              </button>
              <button
                onClick={() => scrollToGame('game-numbers')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>2. Numbers</span>
              </button>
              <button
                onClick={() => scrollToGame('game-colors')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5 text-rose-600" />
                <span>3. Colors</span>
              </button>
              <button
                onClick={() => scrollToGame('game-sudoku')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <TableCellsMerge className="w-3.5 h-3.5 text-emerald-600" />
                <span>4. Sudoku</span>
              </button>
              <button
                onClick={() => scrollToGame('game-looklook')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                <span>5. Look Look</span>
              </button>
              <button
                onClick={() => scrollToGame('game-geniuscube')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-violet-50 hover:text-violet-700 text-xs font-bold text-slate-700 shrink-0 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Boxes className="w-3.5 h-3.5 text-violet-600" />
                <span>6. Zeka Küpü</span>
              </button>
            </div>

            {/* 6 Akıl Oyunu İstasyonu */}
            <MetaformsGame onAwardStars={handleAwardStars} />
            <NumbersGame onAwardStars={handleAwardStars} />
            <ColorsGame onAwardStars={handleAwardStars} />
            <SudokuGame onAwardStars={handleAwardStars} />
            <LookLookGame onAwardStars={handleAwardStars} />
            <GeniusCubeGame onAwardStars={handleAwardStars} />
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <BilsemCenter
              studentName={user.studentName}
              onAwardStars={handleAwardStars}
              onSwitchToGames={() => setCurrentTab('games')}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Misri Dijital Akıl Oyunları Atölyesi. Tüm hakları saklıdır.</span>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">BİLSEM & Akıl Oyunları Atölyesi</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
