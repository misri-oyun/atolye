import React, { useState, useEffect } from 'react';
import { GraduationCap, Timer, ArrowLeft, ArrowRight, Award, CheckCircle2, RotateCcw, Boxes } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GRADE_1_EXAM_40_QUESTIONS } from '../../data/bilsemGrade1';
import { GRADE_2_EXAM_40_QUESTIONS } from '../../data/bilsemGrade2';
import { GRADE_3_EXAM_40_QUESTIONS } from '../../data/bilsemGrade3';
import { GRADE_4_EXAM_40_QUESTIONS } from '../../data/bilsemGrade4';
import { BilsemQuestion } from '../../types';

interface BilsemCenterProps {
  studentName: string;
  onAwardStars: (key: string, count: number) => void;
  onSwitchToGames: () => void;
}

export const BilsemCenter: React.FC<BilsemCenterProps> = ({
  studentName,
  onAwardStars,
  onSwitchToGames,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [examQuestions, setExamQuestions] = useState<BilsemQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(2400); // 40 dakika = 2400 saniye
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Geri sayım sayacı
  useEffect(() => {
    let timer: any = null;
    if (isExamActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isExamActive, timeLeft]);

  const startExam = (grade: number) => {
    setSelectedGrade(grade);
    let qList: BilsemQuestion[] = [];
    if (grade === 1) qList = GRADE_1_EXAM_40_QUESTIONS;
    else if (grade === 2) qList = GRADE_2_EXAM_40_QUESTIONS;
    else if (grade === 3) qList = GRADE_3_EXAM_40_QUESTIONS;
    else qList = GRADE_4_EXAM_40_QUESTIONS;

    setExamQuestions(qList);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeLeft(2400);
    setIsExamActive(true);
    setShowResult(false);
  };

  const handleSelectOption = (optIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optIdx,
    }));
  };

  const finishExam = () => {
    setIsExamActive(false);
    setShowResult(true);

    let correct = 0;
    examQuestions.forEach((q, idx) => {
      const userOpt = userAnswers[idx];
      if (userOpt !== undefined && q.options[userOpt]?.isCorrect) {
        correct++;
      }
    });

    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    onAwardStars(`bilsem_g${selectedGrade}_${Date.now()}`, correct * 2);
  };

  const returnToHub = () => {
    setIsExamActive(false);
    setShowResult(false);
    setSelectedGrade(null);
  };

  // Zaman formatı
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Sonuç Hesaplama
  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    const catStats: Record<string, { total: number; correct: number }> = {};

    examQuestions.forEach((q, idx) => {
      if (!catStats[q.cat]) catStats[q.cat] = { total: 0, correct: 0 };
      catStats[q.cat].total++;

      const ans = userAnswers[idx];
      if (ans !== undefined && q.options[ans]?.isCorrect) {
        correct++;
        catStats[q.cat].correct++;
      } else {
        wrong++;
      }
    });

    const scorePct = Math.round((correct / 40) * 100);

    return { correct, wrong, scorePct, catStats };
  };

  const currentQ = examQuestions[currentIndex];

  return (
    <div className="space-y-6">
      {/* 1. ADIM: SINIF SEÇİM MERKEZİ (HUB) */}
      {!isExamActive && !showResult && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-indigo-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-md shadow-indigo-600/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-slate-900">
                  BİLSEM Tablet Deneme Sınavları
                </h2>
                <p className="text-xs text-slate-500">
                  MEB BİLSEM Bilişsel Değerlendirme Standartlarında Sınıf Düzey Sınavları
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200">
              40 Soru • 40 Dakika
            </span>
          </div>

          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-lg font-display font-black text-slate-800">
              Lütfen Sınıf Seviyenizi Seçiniz
            </h3>
            <p className="text-xs text-slate-500">
              Her sınıf düzeyi için yaş grubuna özel 40 özgün soru hazırlanmıştır.
            </p>
          </div>

          {/* 4 Sınıf Kartı */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* 1. Sınıf */}
            <div className="p-5 rounded-2xl border-2 border-blue-200 bg-blue-50/50 hover:bg-blue-50 hover:border-blue-400 transition flex flex-col justify-between shadow-sm space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow">
                    1
                  </span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold">
                    Aktif
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1">1. Sınıf BİLSEM</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Görsel boyut değişimi, kayıp dilimler, silüet eşleme ve 1 kat kağıt simetrisi.
                </p>
              </div>
              <button
                onClick={() => startExam(1)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Sınava Başla</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. Sınıf */}
            <div className="p-5 rounded-2xl border-2 border-purple-200 bg-purple-50/50 hover:bg-purple-50 hover:border-purple-400 transition flex flex-col justify-between shadow-sm space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-base shadow">
                    2
                  </span>
                  <span className="text-[10px] bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-bold">
                    Aktif
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1">2. Sınıf BİLSEM</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  İki kademeli kurallar, 3'lü dişli çarklar, terazi denklemleri ve suya yansıma.
                </p>
              </div>
              <button
                onClick={() => startExam(2)}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition shadow active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Sınava Başla</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. Sınıf */}
            <div className="p-5 rounded-2xl border-2 border-teal-200 bg-teal-50/50 hover:bg-teal-50 hover:border-teal-400 transition flex flex-col justify-between shadow-sm space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-base shadow">
                    3
                  </span>
                  <span className="text-[10px] bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full font-bold">
                    Aktif
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1">3. Sınıf BİLSEM</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  XOR mantığı, oyuk tünel bloklar, kasnak kayışları ve kaldıraç tork eşitliği.
                </p>
              </div>
              <button
                onClick={() => startExam(3)}
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition shadow active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Sınava Başla</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. Sınıf */}
            <div className="p-5 rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 hover:border-indigo-400 transition flex flex-col justify-between shadow-sm space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow">
                    4
                  </span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full font-bold">
                    Aktif
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1">4. Sınıf BİLSEM</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  İç şaftlı kuleler, bileşik dişliler, dağıtılmış tork dengesi ve küp arakesitleri.
                </p>
              </div>
              <button
                onClick={() => startExam(4)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Sınava Başla</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ADIM: CANLI SINAV EKRANI */}
      {isExamActive && currentQ && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-indigo-200 space-y-6">
          {/* Üst Bar: Soru Sayacı & Süre */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-slate-900 text-white rounded-xl text-xs font-bold">
                {selectedGrade}. Sınıf Sınavı
              </span>
              <span className="px-3 py-1 bg-indigo-600 text-white rounded-xl text-xs font-bold">
                Soru {currentIndex + 1} / 40
              </span>
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                {currentQ.cat}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-sm font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                <Timer className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={finishExam}
                className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold rounded-xl text-xs transition cursor-pointer"
              >
                Sınavı Bitir
              </button>
            </div>
          </div>

          {/* 40 Soruluk Mini Navigatör */}
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scroll pb-2">
            {examQuestions.map((_, i) => {
              const isCurrent = currentIndex === i;
              const isAnswered = userAnswers[i] !== undefined;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 transition cursor-pointer ${
                    isCurrent
                      ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-300'
                      : isAnswered
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {/* Soru İçeriği */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-5 sm:p-7 space-y-6">
            <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
              [{selectedGrade}. Sınıf BİLSEM • Soru {currentQ.num}] {currentQ.prompt}
            </h4>

            {/* Soru Görseli (SVG / HTML) */}
            <div
              className="flex justify-center py-2"
              dangerouslySetInnerHTML={{ __html: currentQ.visual }}
            />

            {/* Şıklar (A, B, C, D) */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition cursor-pointer active:scale-98 ${
                      isSelected
                        ? 'bg-indigo-50 border-indigo-600 shadow-md ring-2 ring-indigo-400'
                        : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <div className="flex-1 text-left font-semibold text-xs sm:text-sm text-slate-800">
                      {opt.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* İleri / Geri Butonları */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                currentIndex === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Önceki Soru</span>
            </button>

            {currentIndex < 39 ? (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(39, prev + 1))}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Sonraki Soru</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Sınavı Tamamla</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. ADIM: SINAV SONUÇ KARNESİ */}
      {showResult && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-indigo-200 py-6 space-y-6 max-w-2xl mx-auto">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto text-3xl shadow-inner">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900">
              {selectedGrade}. Sınıf BİLSEM Değerlendirme Karnesi
            </h3>
            <p className="text-xs text-slate-500">
              Tebrikler <b className="font-bold text-indigo-600">{studentName}</b>! 40 soruluk değerlendirmeyi tamamladınız.
            </p>
          </div>

          {/* İstatistik Kutuları */}
          {(() => {
            const res = calculateResults();
            return (
              <>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                    <span className="text-xs text-emerald-700 font-bold block mb-1">Doğru</span>
                    <span className="text-2xl font-black text-emerald-800">{res.correct}</span>
                  </div>
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-center">
                    <span className="text-xs text-rose-700 font-bold block mb-1">Yanlış / Boş</span>
                    <span className="text-2xl font-black text-rose-800">{res.wrong}</span>
                  </div>
                  <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-center">
                    <span className="text-xs text-indigo-700 font-bold block mb-1">Başarı</span>
                    <span className="text-2xl font-black text-indigo-800">%{res.scorePct}</span>
                  </div>
                </div>

                {/* Alt Yetenek Alanları */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Alt Bilişsel Yetenek Alanları Analizi:
                  </h5>
                  <div className="space-y-2.5">
                    {Object.keys(res.catStats).map((catKey) => {
                      const item = res.catStats[catKey];
                      const catPct = Math.round((item.correct / item.total) * 100);
                      return (
                        <div key={catKey} className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-slate-700">
                            <span>{catKey}</span>
                            <span>
                              {item.correct} / {item.total} (%{catPct})
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                              style={{ width: `${catPct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Teşhis ve Pedagojik Rapor */}
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-xs text-indigo-900 leading-relaxed font-semibold">
                  {res.correct >= 35 ? (
                    <span>
                      ★ <b>35 - 40 Doğru (Üstün Düzey Potansiyel):</b> BİLSEM 2. Aşama Bireysel İnceleme ve ileri zeka uygulamaları için çok güçlü bilişsel profil.
                    </span>
                  ) : res.correct >= 28 ? (
                    <span>
                      ★ <b>28 - 34 Doğru (Gelişmiş Düzey):</b> Genel akıl yürütme becerisi yüksek; mekanik sistemler ve 3D derinlik algısı üzerine pekiştirme yapılabilir.
                    </span>
                  ) : (
                    <span>
                      ★ <b>0 - 27 Doğru (Temel-Orta Seviye):</b> Akıl oyunları atölyesiyle somut terazi ve kağıt simetrisi pratikleri önerilir.
                    </span>
                  )}
                </div>
              </>
            );
          })()}

          {/* Düğmeler */}
          <div className="flex justify-center gap-3">
            <button
              onClick={returnToHub}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Sınav Merkezine Dön</span>
            </button>
            <button
              onClick={onSwitchToGames}
              className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <Boxes className="w-4 h-4" />
              <span>Akıl Oyunlarına Dön</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
