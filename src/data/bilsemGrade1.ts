import { BilsemQuestion } from '../types';

export const GRADE_1_EXAM_40_QUESTIONS: BilsemQuestion[] = [
  {
    "num": 1,
    "cat": "Görsel Matris (Boyut Değişimi)",
    "prompt": "İlk sıradaki kuralı bulunuz. Soru işareti (?) yerine hangisi gelmelidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 240 110\" class=\"w-60 h-28\">\n          <rect x=\"10\" y=\"10\" width=\"42\" height=\"42\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" rx=\"6\"/>\n          <circle cx=\"31\" cy=\"31\" r=\"8\" fill=\"#EF4444\"/>\n          <path d=\"M60,31 L80,31 M75,26 L80,31 L75,36\" stroke=\"#64748B\" stroke-width=\"2\" fill=\"none\"/>\n          <rect x=\"90\" y=\"10\" width=\"42\" height=\"42\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" rx=\"6\"/>\n          <circle cx=\"111\" cy=\"31\" r=\"16\" fill=\"#EF4444\"/>\n          <rect x=\"10\" y=\"60\" width=\"42\" height=\"42\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" rx=\"6\"/>\n          <polygon points=\"31,71 21,91 41,91\" fill=\"#3B82F6\"/>\n          <path d=\"M60,81 L80,81 M75,76 L80,81 L75,86\" stroke=\"#64748B\" stroke-width=\"2\" fill=\"none\"/>\n          <rect x=\"90\" y=\"60\" width=\"42\" height=\"42\" fill=\"#FEF3C7\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-dasharray=\"3,3\" rx=\"6\"/>\n          <text x=\"111\" y=\"88\" font-size=\"20\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Küçük Mavi Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"10\" y=\"10\" width=\"16\" height=\"16\" fill=\"#3B82F6\" rx=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Büyük Kırmızı Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,4 4,32 32,32\" fill=\"#EF4444\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Büyük Mavi Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,4 4,32 32,32\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Küçük Sarı Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"8\" fill=\"#F59E0B\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "1. satırda kırmızı küçük daire aynı renkte büyük daireye dönüşmektedir. Kural şeklin boyutunu büyütmektir. 2. satırda küçük mavi üçgen büyüyerek Büyük Mavi Üçgen olur."
  },
  {
    "num": 2,
    "cat": "Parça - Bütün (Kayıp Dilim)",
    "prompt": "Dairenin sağ alt köşesindeki eksik çeyrek dilim hangisidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 100 100\" class=\"w-24 h-24\">\n          <path d=\"M50,50 L90,50 A40,40 0 0,0 50,10 Z\" fill=\"#10B981\"/>\n          <path d=\"M50,50 L50,10 A40,40 0 0,0 10,50 Z\" fill=\"#F59E0B\"/>\n          <path d=\"M50,50 L10,50 A40,40 0 0,0 50,90 Z\" fill=\"#3B82F6\"/>\n          <path d=\"M50,50 L50,90 A40,40 0 0,0 90,50 Z\" fill=\"#F8FAFC\" stroke=\"#64748B\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n          <text x=\"68\" y=\"74\" font-size=\"16\" font-weight=\"black\" fill=\"#0F172A\" text-anchor=\"middle\">?</text>\n          <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Mavi Çeyrek Dilim",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M4,4 L32,4 A28,28 0 0,1 4,32 Z\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Kırmızı Çeyrek Dilim",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M4,4 L32,4 A28,28 0 0,1 4,32 Z\" fill=\"#EF4444\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Mor Tam Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#8B5CF6\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Sarı Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"#F59E0B\" rx=\"3\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Daire 4 eşit çeyrek dilime ayrılmıştır. Dilimler Yeşil, Sarı, Mavi ve eksik olan 4. ana renk olan Kırmızıdır."
  },
  {
    "num": 3,
    "cat": "3D Küp Sayma (Görünmeyen Taban)",
    "prompt": "Görünmeyen taban blokları dahil yapıda toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 140 100\" class=\"w-36 h-26\">\n          <polygon points=\"35,45 55,35 75,45 55,55\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"35,45 55,55 55,75 35,65\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"55,55 75,45 75,65 55,75\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"75,25 95,15 115,25 95,35\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"75,25 95,35 95,55 75,45\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"95,35 115,25 115,45 95,55\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"75,45 95,55 95,75 75,65\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n          <polygon points=\"95,55 115,45 115,65 95,75\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "3 Küp",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "4 Küp",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "2 Küp",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "5 Küp",
        "isCorrect": false
      }
    ],
    "explanation": "Ön basamakta 1 küp, arka sütunda üst üste 2 küp yer almaktadır. Toplam: 1 + 2 = 3 küp."
  },
  {
    "num": 4,
    "cat": "Gölge & Silüet Eşleme",
    "prompt": "Soldaki figürün birebir tam siyah gölgesi hangisidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm\">\n        <svg viewBox=\"0 0 80 80\" class=\"w-20 h-20 bg-amber-50 rounded-xl border border-amber-200\">\n          <rect x=\"25\" y=\"30\" width=\"18\" height=\"36\" fill=\"#F59E0B\" rx=\"3\"/>\n          <rect x=\"33\" y=\"12\" width=\"10\" height=\"24\" fill=\"#F59E0B\"/>\n          <circle cx=\"42\" cy=\"14\" r=\"8\" fill=\"#F59E0B\"/>\n          <path d=\"M25,40 Q12,32 16,22\" stroke=\"#EF4444\" stroke-width=\"3\" fill=\"none\"/>\n          <rect x=\"26\" y=\"66\" width=\"5\" height=\"10\" fill=\"#B45309\"/>\n          <rect x=\"36\" y=\"66\" width=\"5\" height=\"10\" fill=\"#B45309\"/>\n        </svg>\n        <span class=\"text-xl font-bold text-slate-400\">➔</span>\n        <div class=\"w-20 h-20 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Aşağı Kuyruklu Gölge",
        "visual": "\n          <svg viewBox=\"0 0 60 60\" class=\"w-10 h-10 bg-slate-100 rounded-lg\">\n            <rect x=\"20\" y=\"24\" width=\"14\" height=\"26\" fill=\"#0F172A\" rx=\"2\"/>\n            <rect x=\"26\" y=\"10\" width=\"8\" height=\"18\" fill=\"#0F172A\"/>\n            <circle cx=\"33\" cy=\"11\" r=\"6\" fill=\"#0F172A\"/>\n            <path d=\"M20,32 Q10,40 12,48\" stroke=\"#0F172A\" stroke-width=\"2.5\" fill=\"none\"/>\n            <rect x=\"21\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n            <rect x=\"29\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n          </svg>\n        ",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Kare Başlı Gölge",
        "visual": "\n          <svg viewBox=\"0 0 60 60\" class=\"w-10 h-10 bg-slate-100 rounded-lg\">\n            <rect x=\"20\" y=\"24\" width=\"14\" height=\"26\" fill=\"#0F172A\" rx=\"2\"/>\n            <rect x=\"26\" y=\"10\" width=\"8\" height=\"18\" fill=\"#0F172A\"/>\n            <rect x=\"29\" y=\"6\" width=\"10\" height=\"10\" fill=\"#0F172A\"/>\n            <path d=\"M20,32 Q10,24 13,16\" stroke=\"#0F172A\" stroke-width=\"2.5\" fill=\"none\"/>\n            <rect x=\"21\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n            <rect x=\"29\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n          </svg>\n        ",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Birebir Tam Silüet",
        "visual": "\n          <svg viewBox=\"0 0 60 60\" class=\"w-10 h-10 bg-slate-100 rounded-lg\">\n            <rect x=\"20\" y=\"24\" width=\"14\" height=\"26\" fill=\"#0F172A\" rx=\"2\"/>\n            <rect x=\"26\" y=\"10\" width=\"8\" height=\"18\" fill=\"#0F172A\"/>\n            <circle cx=\"33\" cy=\"11\" r=\"6\" fill=\"#0F172A\"/>\n            <path d=\"M20,32 Q10,24 13,16\" stroke=\"#0F172A\" stroke-width=\"2.5\" fill=\"none\"/>\n            <rect x=\"21\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n            <rect x=\"29\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n          </svg>\n        ",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Kısa Boyunlu Gölge",
        "visual": "\n          <svg viewBox=\"0 0 60 60\" class=\"w-10 h-10 bg-slate-100 rounded-lg\">\n            <rect x=\"20\" y=\"24\" width=\"14\" height=\"26\" fill=\"#0F172A\" rx=\"2\"/>\n            <rect x=\"26\" y=\"18\" width=\"8\" height=\"10\" fill=\"#0F172A\"/>\n            <circle cx=\"33\" cy=\"17\" r=\"6\" fill=\"#0F172A\"/>\n            <path d=\"M20,32 Q10,24 13,16\" stroke=\"#0F172A\" stroke-width=\"2.5\" fill=\"none\"/>\n            <rect x=\"21\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n            <rect x=\"29\" y=\"50\" width=\"4\" height=\"7\" fill=\"#0F172A\"/>\n          </svg>\n        ",
        "isCorrect": false
      }
    ],
    "explanation": "C şıkkındaki silüetin yuvarlak başı, uzun boynu, yukarı kıvrık kuyruğu ve gövdesi orijinal renkli figürle kusursuz örtüşür."
  },
  {
    "num": 5,
    "cat": "Görsel Örüntü (Döngü)",
    "prompt": "Kuralı takip ediniz: Daire ➔ Kare ➔ Üçgen ➔ Daire ➔ Kare ➔ ?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 240 50\" class=\"w-64 h-14\">\n          <circle cx=\"20\" cy=\"25\" r=\"14\" fill=\"#EF4444\"/>\n          <rect x=\"52\" y=\"11\" width=\"28\" height=\"28\" fill=\"#3B82F6\" rx=\"3\"/>\n          <polygon points=\"112,11 98,39 126,39\" fill=\"#F59E0B\"/>\n          <circle cx=\"152\" cy=\"25\" r=\"14\" fill=\"#EF4444\"/>\n          <rect x=\"184\" y=\"11\" width=\"28\" height=\"28\" fill=\"#3B82F6\" rx=\"3\"/>\n          <rect x=\"222\" y=\"11\" width=\"16\" height=\"28\" fill=\"#FEF3C7\" stroke=\"#F59E0B\" stroke-dasharray=\"2,2\"/>\n          <text x=\"230\" y=\"31\" font-size=\"14\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Kırmızı Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#EF4444\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Mor Yıldız",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,3 22,13 33,14 24,22 27,33 18,26 9,33 12,22 3,14 14,13\" fill=\"#8B5CF6\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Mavi Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"5\" y=\"5\" width=\"26\" height=\"26\" fill=\"#3B82F6\" rx=\"3\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Sarı Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,5 4,31 32,31\" fill=\"#F59E0B\"/></svg>",
        "isCorrect": true
      }
    ],
    "explanation": "3 lü döngü kuralı vardır: Daire ➔ Kare ➔ Üçgen. Kare şeklinden sonra Sarı Üçgen gelmelidir."
  },
  {
    "num": 6,
    "cat": "Kağıt Katlama (1 Kat Simetrisi)",
    "prompt": "Kare kağıt ortadan sağa katlanıp dış kenarından yarım daire oyuluyor. Kağıt açıldığında ne görünür?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 70 70\" class=\"w-16 h-16\">\n          <rect x=\"5\" y=\"5\" width=\"60\" height=\"60\" fill=\"#F8FAFC\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"35\" y1=\"5\" x2=\"35\" y2=\"65\" stroke=\"#64748B\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n          <path d=\"M22,35 L48,35 M42,30 L48,35 L42,40\" stroke=\"#3B82F6\" stroke-width=\"2\" fill=\"none\"/>\n        </svg>\n        <span class=\"text-base font-bold text-slate-400\">➔</span>\n        <svg viewBox=\"0 0 45 70\" class=\"w-10 h-16\">\n          <path d=\"M5,5 L40,5 L40,23 A12,12 0 0,0 40,47 L40,65 L5,65 Z\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-base font-bold text-slate-400\">➔</span>\n        <div class=\"w-16 h-16 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Merkezde Daire Delik",
        "visual": "\n          <svg viewBox=\"0 0 50 50\" class=\"w-10 h-10\">\n            <rect x=\"4\" y=\"4\" width=\"42\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n            <circle cx=\"25\" cy=\"25\" r=\"8\" fill=\"#FFFFFF\" stroke=\"#334155\"/>\n          </svg>\n        ",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "İki Kenarda Karşılıklı Oyuk",
        "visual": "\n          <svg viewBox=\"0 0 50 50\" class=\"w-10 h-10\">\n            <path d=\"M4,4 L46,4 L46,16 A9,9 0 0,0 46,34 L46,46 L4,46 L4,34 A9,9 0 0,0 4,16 L4,4 Z\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n          </svg>\n        ",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Tek Kenarda Oyuk",
        "visual": "\n          <svg viewBox=\"0 0 50 50\" class=\"w-10 h-10\">\n            <path d=\"M4,4 L46,4 L46,16 A9,9 0 0,0 46,34 L46,46 L4,46 Z\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n          </svg>\n        ",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Köşeleri Kesik Kağıt",
        "visual": "\n          <svg viewBox=\"0 0 50 50\" class=\"w-10 h-10\">\n            <polygon points=\"12,4 38,4 46,12 46,38 38,46 12,46 4,38 4,12\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n          </svg>\n        ",
        "isCorrect": false
      }
    ],
    "explanation": "Kat izi ortada olduğu ve kesik dış açık kenardan yapıldığı için, kağıt açıldığında hem en solda hem de en sağda iki yarım oyuk meydana gelir."
  },
  {
    "num": 7,
    "cat": "Terazi & Denge",
    "prompt": "1 Elma = 2 Çilek ile dengededir. Sol kefede 2 Elma varken denge için sağ kefeye kaç Çilek gerekir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 200 90\" class=\"w-56 h-24\">\n          <line x1=\"20\" y1=\"40\" x2=\"180\" y2=\"40\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <polygon points=\"100,40 85,75 115,75\" fill=\"#475569\"/>\n          <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"55\" stroke=\"#64748B\" stroke-width=\"2\"/>\n          <rect x=\"15\" y=\"55\" width=\"30\" height=\"6\" fill=\"#94A3B8\" rx=\"2\"/>\n          <circle cx=\"24\" cy=\"50\" r=\"6\" fill=\"#EF4444\"/>\n          <circle cx=\"36\" cy=\"50\" r=\"6\" fill=\"#EF4444\"/>\n          <text x=\"30\" y=\"72\" font-size=\"9\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">2 Elma</text>\n          <line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"55\" stroke=\"#64748B\" stroke-width=\"2\"/>\n          <rect x=\"155\" y=\"55\" width=\"30\" height=\"6\" fill=\"#94A3B8\" rx=\"2\"/>\n          <text x=\"170\" y=\"50\" font-size=\"14\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n          <text x=\"170\" y=\"72\" font-size=\"9\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">? Çilek</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "3 Çilek",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "4 Çilek",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "5 Çilek",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "2 Çilek",
        "isCorrect": false
      }
    ],
    "explanation": "1 Elma = 2 Çilek ağırlığına eşittir. Sol kefedeki 2 Elma için: 2 × 2 = 4 Çilek gerekir."
  },
  {
    "num": 8,
    "cat": "Uzamsal Rotasyon (90° Saat Yönü)",
    "prompt": "Yukarı bakan ok saat yönünde 90° döndürülürse nereye bakar?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm\">\n        <svg viewBox=\"0 0 60 60\" class=\"w-16 h-16\">\n          <path d=\"M30,50 L30,15 M20,25 L30,15 L40,25\" stroke=\"#10B981\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n          <path d=\"M42,22 A16,16 0 0,1 50,38\" stroke=\"#F59E0B\" stroke-width=\"2\" fill=\"none\"/>\n          <polygon points=\"50,42 46,36 53,36\" fill=\"#F59E0B\"/>\n          <text x=\"48\" y=\"18\" font-size=\"10\" font-weight=\"bold\" fill=\"#D97706\">90°</text>\n        </svg>\n        <span class=\"text-xl font-bold text-slate-400\">➔</span>\n        <div class=\"w-16 h-16 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Sağa (→)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M6,18 L30,18 M22,10 L30,18 L22,26\" stroke=\"#10B981\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Aşağı (↓)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M18,6 L18,30 M10,22 L18,30 L26,22\" stroke=\"#10B981\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Sola (←)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M30,18 L6,18 M14,10 L6,18 L14,26\" stroke=\"#10B981\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Çapraz (↗)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M10,26 L26,10 M14,10 L26,10 L26,22\" stroke=\"#10B981\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Yukarı bakan ok (↑) saat yönünde 90° çevrildiğinde sağ tarafa (→) yönelir."
  },
  {
    "num": 9,
    "cat": "Görsel Matris (Renk Takası)",
    "prompt": "Kurala göre soru işareti yerine hangi şekil gelmelidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 200 100\" class=\"w-52 h-26\">\n          <rect x=\"20\" y=\"10\" width=\"36\" height=\"36\" fill=\"#EF4444\" stroke=\"#3B82F6\" stroke-width=\"4\" rx=\"4\"/>\n          <path d=\"M70,28 L90,28 M85,23 L90,28 L85,33\" stroke=\"#64748B\" stroke-width=\"2\" fill=\"none\"/>\n          <rect x=\"100\" y=\"10\" width=\"36\" height=\"36\" fill=\"#3B82F6\" stroke=\"#EF4444\" stroke-width=\"4\" rx=\"4\"/>\n          <rect x=\"20\" y=\"55\" width=\"36\" height=\"36\" fill=\"#10B981\" stroke=\"#F59E0B\" stroke-width=\"4\" rx=\"4\"/>\n          <path d=\"M70,73 L90,73 M85,68 L90,73 L85,78\" stroke=\"#64748B\" stroke-width=\"2\" fill=\"none\"/>\n          <rect x=\"100\" y=\"55\" width=\"36\" height=\"36\" fill=\"#FEF3C7\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-dasharray=\"3,3\" rx=\"4\"/>\n          <text x=\"118\" y=\"79\" font-size=\"18\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Sarı Kare / Mor Çerçeve",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"4\" y=\"4\" width=\"28\" height=\"28\" fill=\"#F59E0B\" stroke=\"#8B5CF6\" stroke-width=\"3.5\" rx=\"3\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Sarı Kare / Yeşil Çerçeve",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"4\" y=\"4\" width=\"28\" height=\"28\" fill=\"#F59E0B\" stroke=\"#10B981\" stroke-width=\"3.5\" rx=\"3\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Yeşil Kare / Sarı Çerçeve",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"4\" y=\"4\" width=\"28\" height=\"28\" fill=\"#10B981\" stroke=\"#F59E0B\" stroke-width=\"3.5\" rx=\"3\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Sarı Daire / Yeşil Çerçeve",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#F59E0B\" stroke=\"#10B981\" stroke-width=\"3.5\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "1. satırda iç renk (Kırmızı) ve çerçeve rengi (Mavi) yer değiştirmiştir. 2. satırda içi yeşil, dışı sarı olan şeklin renkleri yer değiştirince içi sarı, dışı yeşil kare elde edilir."
  },
  {
    "num": 10,
    "cat": "3D Küp Sayma (L Blok)",
    "prompt": "L biçiminde dizilmiş yapıda toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 160 100\" class=\"w-44 h-26\">\n          <rect x=\"20\" y=\"60\" width=\"28\" height=\"28\" fill=\"#93C5FD\" stroke=\"#1E40AF\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"48\" y=\"60\" width=\"28\" height=\"28\" fill=\"#93C5FD\" stroke=\"#1E40AF\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"60\" width=\"28\" height=\"28\" fill=\"#93C5FD\" stroke=\"#1E40AF\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"32\" width=\"28\" height=\"28\" fill=\"#60A5FA\" stroke=\"#1E40AF\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"4\" width=\"28\" height=\"28\" fill=\"#3B82F6\" stroke=\"#1E40AF\" stroke-width=\"1.5\" rx=\"3\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "4",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "6",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "5",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "7",
        "isCorrect": false
      }
    ],
    "explanation": "Tabandaki 3 yatay küp ile üstteki 2 kule küpü toplanır: 3 + 2 = 5 küp."
  },
  {
    "num": 11,
    "cat": "Farklı Olanı Bulma",
    "prompt": "Geometrik şekillerden hangisi kural bakımından diğerlerinden farklıdır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm\">\n        <svg viewBox=\"0 0 220 50\" class=\"w-60 h-14\">\n          <polygon points=\"25,10 10,40 40,40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <rect x=\"65\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"15\" width=\"40\" height=\"25\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <circle cx=\"185\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,6 6,30 30,30\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Dikdörtgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"4\" y=\"9\" width=\"28\" height=\"18\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"13\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2\"/></svg>",
        "isCorrect": true
      }
    ],
    "explanation": "Üçgen, kare ve dikdörtgen düz kenar ve köşelere sahipken, daire eğri çizgiden oluşur ve köşesi yoktur."
  },
  {
    "num": 12,
    "cat": "Dişli Çark Yön Mantığı",
    "prompt": "1. Çark saat yönünde (↻) dönerse, ona bağlı 2. Çark hangi yönde döner?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 shadow-sm\">\n        <svg viewBox=\"0 0 160 80\" class=\"w-44 h-22\">\n          <circle cx=\"50\" cy=\"40\" r=\"26\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <circle cx=\"50\" cy=\"40\" r=\"8\" fill=\"#94A3B8\"/>\n          <path d=\"M42,22 A18,18 0 0,1 62,24\" stroke=\"#F59E0B\" stroke-width=\"3\" fill=\"none\"/>\n          <polygon points=\"63,28 64,20 57,23\" fill=\"#F59E0B\"/>\n          <text x=\"50\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">1</text>\n          <circle cx=\"102\" cy=\"40\" r=\"26\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2\"/>\n          <circle cx=\"102\" cy=\"40\" r=\"8\" fill=\"#F59E0B\"/>\n          <text x=\"102\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">2</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Saat Yönünün Tersine (↺)",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Saat Yönünde (↻)",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Dönmez, Kilitlenir",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Yukarı-Aşağı Kayar",
        "isCorrect": false
      }
    ],
    "explanation": "Birbirine kenetlenen iki dişli çark her zaman birbirine zıt yönlerde döner. 1. çark saat yönünde ise 2. çark tersi yönde döner."
  },
  {
    "num": 13,
    "cat": "Şeffaf Asetat Çakışması",
    "prompt": "İki şeffaf kare üst üste konulduğunda hangi sembol oluşur?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14\">\n          <rect x=\"5\" y=\"5\" width=\"50\" height=\"50\" fill=\"#F8FAFC\" stroke=\"#94A3B8\" stroke-width=\"2\" rx=\"4\"/>\n          <line x1=\"10\" y1=\"30\" x2=\"50\" y2=\"30\" stroke=\"#3B82F6\" stroke-width=\"4\"/>\n        </svg>\n        <span class=\"text-xl font-black text-slate-400\">+</span>\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14\">\n          <rect x=\"5\" y=\"5\" width=\"50\" height=\"50\" fill=\"#F8FAFC\" stroke=\"#94A3B8\" stroke-width=\"2\" rx=\"4\"/>\n          <line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"50\" stroke=\"#EF4444\" stroke-width=\"4\"/>\n        </svg>\n        <span class=\"text-xl font-black text-slate-400\">=</span>\n        <div class=\"w-14 h-14 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Çarpı (×)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><line x1=\"8\" y1=\"8\" x2=\"28\" y2=\"28\" stroke=\"#334155\" stroke-width=\"3.5\"/><line x1=\"28\" y1=\"8\" x2=\"8\" y2=\"28\" stroke=\"#334155\" stroke-width=\"3.5\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Artı (+)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><line x1=\"6\" y1=\"18\" x2=\"30\" y2=\"18\" stroke=\"#3B82F6\" stroke-width=\"3.5\"/><line x1=\"18\" y1=\"6\" x2=\"18\" y2=\"30\" stroke=\"#EF4444\" stroke-width=\"3.5\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "İçi Boş Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"2\" rx=\"3\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Tek Dikey Çizgi (|)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><line x1=\"18\" y1=\"6\" x2=\"18\" y2=\"30\" stroke=\"#EF4444\" stroke-width=\"3.5\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Yatay mavi çizgi (-) ile dikey kırmızı çizgi (|) tam merkezde çakışınca artı sembolü (+) meydana gelir."
  },
  {
    "num": 14,
    "cat": "Görsel Matris (Eksilme)",
    "prompt": "Sembol eksilme kuralına göre soru işareti yerine ne gelmelidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <div class=\"w-14 h-14 border-2 border-slate-300 rounded-xl flex items-center justify-center gap-1 bg-slate-50\">\n          <span class=\"w-3.5 h-3.5 bg-blue-500 rounded-full\"></span>\n          <span class=\"w-3.5 h-3.5 bg-blue-500 rounded-full\"></span>\n          <span class=\"w-3.5 h-3.5 bg-blue-500 rounded-full\"></span>\n        </div>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-14 h-14 border-2 border-slate-300 rounded-xl flex items-center justify-center gap-1 bg-slate-50\">\n          <span class=\"w-3.5 h-3.5 bg-blue-500 rounded-full\"></span>\n          <span class=\"w-3.5 h-3.5 bg-blue-500 rounded-full\"></span>\n        </div>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-14 h-14 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "3 Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"8\" cy=\"18\" r=\"4\" fill=\"#3B82F6\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"#3B82F6\"/><circle cx=\"28\" cy=\"18\" r=\"4\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"8\" y=\"8\" width=\"20\" height=\"20\" fill=\"#3B82F6\" rx=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "1 Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"6\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Boş Kutu",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Her adımda daire sayısı birer birer azalmaktadır: 3 ➔ 2 ➔ 1."
  },
  {
    "num": 15,
    "cat": "Perspektif (Üstten Görünüm)",
    "prompt": "Bir dik silindire (konserve kutusu) tam tepeden bakılırsa hangi şekil görünür?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 100 90\" class=\"w-24 h-22\">\n          <ellipse cx=\"50\" cy=\"20\" rx=\"28\" ry=\"12\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"22\" y1=\"20\" x2=\"22\" y2=\"70\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"78\" y1=\"20\" x2=\"78\" y2=\"70\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <path d=\"M22,70 A28,12 0 0,0 78,70\" stroke=\"#334155\" stroke-width=\"2\" fill=\"none\"/>\n          <path d=\"M50,2 L50,12 M46,8 L50,12 L54,8\" stroke=\"#EF4444\" stroke-width=\"2\" fill=\"none\"/>\n          <text x=\"50\" y=\"0\" font-size=\"9\" font-weight=\"bold\" fill=\"#EF4444\" text-anchor=\"middle\">Göz</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Dikdörtgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"10\" width=\"24\" height=\"16\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,6 6,30 30,30\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"8\" y=\"8\" width=\"20\" height=\"20\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Silindire tam tepeden bakıldığında üst tabanı oluşturan dairesel yüzey görülür."
  },
  {
    "num": 16,
    "cat": "Aritmetik Örüntü (+2 İleri)",
    "prompt": "Vagonlardaki sayı örüntüsünü takip ediniz: 2 ➔ 4 ➔ 6 ➔ 8 ➔ ?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 240 50\" class=\"w-64 h-14\">\n          <rect x=\"10\" y=\"10\" width=\"36\" height=\"26\" fill=\"#93C5FD\" stroke=\"#1D4ED8\" stroke-width=\"2\" rx=\"4\"/>\n          <text x=\"28\" y=\"27\" font-size=\"12\" font-weight=\"black\" fill=\"#1E3A8A\" text-anchor=\"middle\">2</text>\n          <rect x=\"56\" y=\"10\" width=\"36\" height=\"26\" fill=\"#93C5FD\" stroke=\"#1D4ED8\" stroke-width=\"2\" rx=\"4\"/>\n          <text x=\"74\" y=\"27\" font-size=\"12\" font-weight=\"black\" fill=\"#1E3A8A\" text-anchor=\"middle\">4</text>\n          <rect x=\"102\" y=\"10\" width=\"36\" height=\"26\" fill=\"#93C5FD\" stroke=\"#1D4ED8\" stroke-width=\"2\" rx=\"4\"/>\n          <text x=\"120\" y=\"27\" font-size=\"12\" font-weight=\"black\" fill=\"#1E3A8A\" text-anchor=\"middle\">6</text>\n          <rect x=\"148\" y=\"10\" width=\"36\" height=\"26\" fill=\"#93C5FD\" stroke=\"#1D4ED8\" stroke-width=\"2\" rx=\"4\"/>\n          <text x=\"166\" y=\"27\" font-size=\"12\" font-weight=\"black\" fill=\"#1E3A8A\" text-anchor=\"middle\">8</text>\n          <rect x=\"194\" y=\"10\" width=\"36\" height=\"26\" fill=\"#FEF3C7\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-dasharray=\"2,2\" rx=\"4\"/>\n          <text x=\"212\" y=\"27\" font-size=\"14\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "9",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "11",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "12",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "10",
        "isCorrect": true
      }
    ],
    "explanation": "Sayılar ikişer ikişer ritmik olarak artmaktadır: 2, 4, 6, 8, 10."
  },
  {
    "num": 17,
    "cat": "Şekil Analojisi (Dış Katman Çıkarma)",
    "prompt": "Üçgen içindeki kırmızı üçgen dışarı çıkıyor. Kare içindeki mavi daire için sonuç ne olur?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14\">\n          <polygon points=\"30,8 10,50 50,50\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <polygon points=\"30,22 18,44 42,44\" fill=\"#EF4444\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10\">\n          <polygon points=\"20,6 6,34 34,34\" fill=\"#EF4444\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold ml-2\">|</span>\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14 ml-2\">\n          <rect x=\"10\" y=\"10\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"3\"/>\n          <circle cx=\"30\" cy=\"30\" r=\"12\" fill=\"#3B82F6\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-10 h-10 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Mavi Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"12\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Boş Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"8\" y=\"8\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Daire içinde Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"12\" y=\"12\" width=\"12\" height=\"12\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "İki Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"4\" y=\"10\" width=\"12\" height=\"12\" fill=\"#3B82F6\"/><rect x=\"20\" y=\"10\" width=\"12\" height=\"12\" fill=\"#3B82F6\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Dış kısımdaki çerçeve atılmakta, içteki renkli şekil tek başına kalmaktadır. Karenin içindeki mavi daire dışarı çıkar."
  },
  {
    "num": 18,
    "cat": "3D Küp (Merdiven Blok)",
    "prompt": "1. basamakta 1, 2. basamakta 2, 3. basamakta 3 küp vardır. Toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 160 100\" class=\"w-44 h-26\">\n          <rect x=\"20\" y=\"60\" width=\"28\" height=\"28\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"48\" y=\"60\" width=\"28\" height=\"28\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"48\" y=\"32\" width=\"28\" height=\"28\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"60\" width=\"28\" height=\"28\" fill=\"#FDE68A\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"32\" width=\"28\" height=\"28\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"4\" width=\"28\" height=\"28\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\" rx=\"3\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "6",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "7",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "explanation": "Basamaklardaki küp sayıları toplanır: 1 + 2 + 3 = 6 küp."
  },
  {
    "num": 19,
    "cat": "Ayna Simetrisi",
    "prompt": "C harfinin dikey aynadaki doğru yansıması hangisidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-4 shadow-sm\">\n        <div class=\"text-3xl font-black text-slate-800\">C</div>\n        <div class=\"h-14 border-r-2 border-dashed border-indigo-500\"></div>\n        <div class=\"w-10 h-10 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Ters C (Ͻ)",
        "visual": "<div class=\"text-2xl font-black text-indigo-700\">Ͻ</div>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "U",
        "visual": "<div class=\"text-2xl font-black text-slate-700\">U</div>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Düz C",
        "visual": "<div class=\"text-2xl font-black text-slate-700\">C</div>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "O",
        "visual": "<div class=\"text-2xl font-black text-slate-700\">O</div>",
        "isCorrect": false
      }
    ],
    "explanation": "Ayna yansımasında sol ve sağ yer değiştirir. Açık ucu sağa bakan C harfi aynada sola bakar (Ͻ)."
  },
  {
    "num": 20,
    "cat": "Köşe Sayısı Artışı",
    "prompt": "Örüntüye göre sıradaki şekil hangisi olmalıdır? Üçgen ➔ Kare ➔ Beşgen ➔ ?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 200 45\" class=\"w-56 h-12\">\n          <polygon points=\"20,8 8,36 32,36\" fill=\"#F8FAFC\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <rect x=\"52\" y=\"10\" width=\"26\" height=\"26\" fill=\"#F8FAFC\" stroke=\"#334155\" stroke-width=\"2\" rx=\"2\"/>\n          <polygon points=\"112,8 126,18 121,34 103,34 98,18\" fill=\"#F8FAFC\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <text x=\"165\" y=\"28\" font-size=\"18\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"13\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Altıgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,5 29,11 29,25 18,31 7,25 7,11\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Sekizgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"12,5 24,5 31,12 31,24 24,31 12,31 5,24 5,12\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Yıldız",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,3 22,13 33,14 24,22 27,33 18,26 9,33 12,22 3,14 14,13\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Köşe sayıları sırasıyla 3 (üçgen), 4 (kare), 5 (beşgen) olarak artmaktadır. Sıradaki şekil 6 köşeli altıgendir."
  },
  {
    "num": 21,
    "cat": "Şekil Birleştirme",
    "prompt": "İki eşit dik üçgen uzun eğik kenarlarından (hipotenüs) birleşirse hangi şekil oluşur?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 60 50\" class=\"w-14 h-12\">\n          <polygon points=\"10,40 10,10 50,40\" fill=\"#BBF7D0\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-lg font-black text-slate-400\">+</span>\n        <svg viewBox=\"0 0 60 50\" class=\"w-14 h-12\">\n          <polygon points=\"50,10 50,40 10,10\" fill=\"#BBF7D0\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-lg font-black text-slate-400\">=</span>\n        <div class=\"w-12 h-12 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Daire",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Yamuk",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Kare / Dikdörtgen",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Beşgen",
        "isCorrect": false
      }
    ],
    "explanation": "İki eş dik üçgen eğik kenarlarından bir araya getirildiğinde dört dik köşeye sahip dikdörtgen elde edilir."
  },
  {
    "num": 22,
    "cat": "Mantıksal Çıkarım (Boy)",
    "prompt": "Yeşil kalem Kırmızıdan uzundur. Kırmızı kalem de Maviden uzundur. En uzun kalem hangisidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <div class=\"flex items-end gap-5 h-20\">\n          <div class=\"w-5 bg-emerald-500 rounded-t-lg h-20 flex items-center justify-center text-[10px] text-white font-bold\">Y</div>\n          <div class=\"w-5 bg-rose-500 rounded-t-lg h-14 flex items-center justify-center text-[10px] text-white font-bold\">K</div>\n          <div class=\"w-5 bg-blue-500 rounded-t-lg h-9 flex items-center justify-center text-[10px] text-white font-bold\">M</div>\n        </div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Mavi Kalem",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Kırmızı Kalem",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Yeşil Kalem",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Hepsi Eşittir",
        "isCorrect": false
      }
    ],
    "explanation": "Yeşil > Kırmızı ve Kırmızı > Mavi olduğuna göre en uzun kalem Yeşildir."
  },
  {
    "num": 23,
    "cat": "3D Küp (2x2 Taban)",
    "prompt": "Tabanında 4 küp (2x2) ve üstünde 2 küp olan yapıda toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 120 90\" class=\"w-32 h-24\">\n          <rect x=\"25\" y=\"45\" width=\"30\" height=\"30\" fill=\"#93C5FD\" stroke=\"#1E40AF\" stroke-width=\"1.5\"/>\n          <rect x=\"55\" y=\"45\" width=\"30\" height=\"30\" fill=\"#93C5FD\" stroke=\"#1E40AF\" stroke-width=\"1.5\"/>\n          <rect x=\"25\" y=\"15\" width=\"30\" height=\"30\" fill=\"#3B82F6\" stroke=\"#1E40AF\" stroke-width=\"1.5\"/>\n          <rect x=\"55\" y=\"15\" width=\"30\" height=\"30\" fill=\"#3B82F6\" stroke=\"#1E40AF\" stroke-width=\"1.5\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "6",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "7",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "explanation": "Alt tabanda 4 küp ve üst katta 2 küp vardır: 4 + 2 = 6 küp."
  },
  {
    "num": 24,
    "cat": "Görsel Dikkat (Tek Olan)",
    "prompt": "Görselde 2 Kedi, 2 Köpek, 2 Kuş ve 1 Balık vardır. Eşi (çifti) olmayan tek hayvan hangisidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm text-2xl gap-3\">\n        <span>🐱</span><span>🐶</span><span>🐦</span><span>🐟</span><span>🐱</span><span>🐶</span><span>🐦</span>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Köpek",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Kedi",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Balık",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Kuş",
        "isCorrect": false
      }
    ],
    "explanation": "Kedi (2), köpek (2) ve kuş (2) ikişer adettir. Balık ise sadece 1 tanedir ve eşi yoktur."
  },
  {
    "num": 25,
    "cat": "Aritmetik Şifreler",
    "prompt": "★ + ★ = 6 olduğuna göre, tek bir ★ sembolünün değeri kaçtır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm font-bold text-xl text-amber-500\">\n        <span>★</span><span>+</span><span>★</span><span>=</span><span class=\"text-slate-900 font-black\">6</span>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "2",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "3",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "4",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "5",
        "isCorrect": false
      }
    ],
    "explanation": "İki aynı sayının toplamı 6 ise bu sayı 3 tür (3 + 3 = 6)."
  },
  {
    "num": 26,
    "cat": "Koordinat ve Rota",
    "prompt": "Tavşan: 2 kare İLERİ, 1 kare SAĞA, 1 kare İLERİ gidiyor. Hangi kutuya varır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <div class=\"grid grid-cols-3 gap-1.5 p-2 bg-slate-100 rounded-xl\">\n          <div class=\"w-9 h-9 bg-white border rounded flex items-center justify-center text-xs font-bold\">1</div>\n          <div class=\"w-9 h-9 bg-white border rounded flex items-center justify-center text-xs font-bold\">2</div>\n          <div class=\"w-9 h-9 bg-emerald-100 border border-emerald-400 rounded flex items-center justify-center text-xs font-bold text-emerald-700\">4 🎯</div>\n          <div class=\"w-9 h-9 bg-white border rounded flex items-center justify-center text-xs font-bold\">3</div>\n          <div class=\"w-9 h-9 bg-slate-50 border rounded\"></div>\n          <div class=\"w-9 h-9 bg-slate-50 border rounded\"></div>\n          <div class=\"w-9 h-9 bg-amber-100 border border-amber-400 rounded flex items-center justify-center text-lg\">🐇</div>\n          <div class=\"w-9 h-9 bg-slate-50 border rounded\"></div>\n          <div class=\"w-9 h-9 bg-slate-50 border rounded\"></div>\n        </div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "1. Kutu",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "2. Kutu",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "3. Kutu",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "4. Kutu",
        "isCorrect": true
      }
    ],
    "explanation": "Tavşan bulunduğu alt sol kareden 2 kare yukarı (ileri), 1 kare sağa ve 1 kare daha yukarı gittiğinde 4. kutuya ulaşır."
  },
  {
    "num": 27,
    "cat": "Doku & İç Dolgu",
    "prompt": "Doku değişim kuralını takip ediniz: Boş Daire ➔ Çizgili Daire ➔ Sırada ne olmalıdır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10\">\n          <circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10\">\n          <circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"10\" y1=\"14\" x2=\"30\" y2=\"14\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n          <line x1=\"6\" y1=\"20\" x2=\"34\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n          <line x1=\"10\" y1=\"26\" x2=\"30\" y2=\"26\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-10 h-10 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Tam Dolu Siyah Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#0F172A\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Boş Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,6 6,30 30,30\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Çizgili Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"6\" y1=\"18\" x2=\"30\" y2=\"18\" stroke=\"#334155\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Noktalı Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"4\" fill=\"#334155\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Doluluk derecesi artmaktadır: Boş (beyaz) ➔ Çizgili ➔ Tam Dolu (siyah)."
  },
  {
    "num": 28,
    "cat": "Terazi (Hafiflik)",
    "prompt": "Terazinin sol kefesi Taş ile aşağı inmiştir. Sağ kefedeki Tüy yukarıda kalmıştır. Hangisi daha HAFİFTİR?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 160 80\" class=\"w-44 h-22\">\n          <line x1=\"20\" y1=\"55\" x2=\"140\" y2=\"25\" stroke=\"#334155\" stroke-width=\"3\"/>\n          <polygon points=\"80,40 68,70 92,70\" fill=\"#475569\"/>\n          <circle cx=\"25\" cy=\"55\" r=\"8\" fill=\"#64748B\"/>\n          <text x=\"25\" y=\"73\" font-size=\"8\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Taş</text>\n          <text x=\"135\" y=\"22\" font-size=\"14\" text-anchor=\"middle\">🪶</text>\n          <text x=\"135\" y=\"40\" font-size=\"8\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Tüy</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Taş",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Tüy",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "İkisi Eşittir",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Bilinemez",
        "isCorrect": false
      }
    ],
    "explanation": "Terazide ağır olan cisim kefeyi aşağı indirir, hafif olan cisim ise yukarıda kalır. Tüy daha hafiftir."
  },
  {
    "num": 29,
    "cat": "Köşegen Katlama",
    "prompt": "Kare bir kağıt tam çapraz köşegeninden ikiye katlanırsa hangi geometrik şekil oluşur?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14\">\n          <rect x=\"5\" y=\"5\" width=\"50\" height=\"50\" fill=\"#F8FAFC\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"5\" y1=\"55\" x2=\"55\" y2=\"5\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-14 h-14 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-2xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Dikdörtgen",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Küçük Kare",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Üçgen",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Daire",
        "isCorrect": false
      }
    ],
    "explanation": "Kare kağıt köşegen boyunca katlandığında iki eş dik üçgene ayrılır ve üçgen şeklini alır."
  },
  {
    "num": 30,
    "cat": "3D Küp (Köşe Yapı)",
    "prompt": "Alt sırada yan yana 3 küp ve köşedeki küpün üstünde 1 küp vardır. Toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 140 80\" class=\"w-36 h-20\">\n          <rect x=\"20\" y=\"45\" width=\"28\" height=\"28\" fill=\"#FBCFE8\" stroke=\"#DB2777\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"48\" y=\"45\" width=\"28\" height=\"28\" fill=\"#FBCFE8\" stroke=\"#DB2777\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"76\" y=\"45\" width=\"28\" height=\"28\" fill=\"#FBCFE8\" stroke=\"#DB2777\" stroke-width=\"1.5\" rx=\"3\"/>\n          <rect x=\"20\" y=\"17\" width=\"28\" height=\"28\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1.5\" rx=\"3\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "3",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "4",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "5",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "6",
        "isCorrect": false
      }
    ],
    "explanation": "Alt sıradaki 3 küp ve üst sıradaki 1 küp toplanır: 3 + 1 = 4 küp."
  },
  {
    "num": 31,
    "cat": "Yön Örüntüsü",
    "prompt": "Yön örüntüsünü takip ediniz: Yukarı (↑) ➔ Aşağı (↓) ➔ Yukarı (↑) ➔ Aşağı (↓) ➔ ?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 shadow-sm font-black text-xl text-indigo-600\">\n        <span>↑</span><span>➔</span><span>↓</span><span>➔</span><span>↑</span><span>➔</span><span>↓</span><span>➔</span><span class=\"text-amber-500 font-black\">?</span>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Sağa (→)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M6,18 L30,18 M22,10 L30,18 L22,26\" stroke=\"#4F46E5\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Sola (←)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M30,18 L6,18 M14,10 L6,18 L14,26\" stroke=\"#4F46E5\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Yukarı (↑)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M18,30 L18,6 M10,14 L18,6 L26,14\" stroke=\"#4F46E5\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Aşağı (↓)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><path d=\"M18,6 L18,30 M10,22 L18,30 L26,22\" stroke=\"#4F46E5\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Yukarı ve aşağı yönleri birbirini ardışık olarak takip eder. Aşağı yönünden sonra tekrar Yukarı yönü gelir."
  },
  {
    "num": 32,
    "cat": "Renk Negatifi",
    "prompt": "Beyaz Daire ➔ Siyah Daire kuralına göre; Beyaz Üçgen hangi şekle dönüşür?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10\">\n          <circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"#FFFFFF\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10\">\n          <circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"#0F172A\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold ml-2\">|</span>\n        <svg viewBox=\"0 0 40 40\" class=\"w-10 h-10 ml-2\">\n          <polygon points=\"20,6 6,34 34,34\" fill=\"#FFFFFF\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-10 h-10 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Siyah Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,6 6,30 30,30\" fill=\"#0F172A\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Siyah Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"#0F172A\" rx=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Kırmızı Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#EF4444\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Çizgili Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,6 6,30 30,30\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"2\"/><line x1=\"12\" y1=\"20\" x2=\"24\" y2=\"20\" stroke=\"#0F172A\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Kural şeklin içini tamamen siyahla doldurmaktır. Beyaz üçgen, içi dolu siyah üçgene dönüşür."
  },
  {
    "num": 33,
    "cat": "Perspektif (Örtüşme)",
    "prompt": "Kırmızı küpün tam arkasında aynı boyda bir Mavi küp vardır. Tam önden bakılınca Mavi küp görünür mü?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 120 70\" class=\"w-32 h-20\">\n          <rect x=\"20\" y=\"20\" width=\"35\" height=\"35\" fill=\"#EF4444\" stroke=\"#991B1B\" stroke-width=\"2\" rx=\"3\"/>\n          <text x=\"37\" y=\"42\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">Kırmızı</text>\n          <rect x=\"65\" y=\"15\" width=\"35\" height=\"35\" fill=\"#93C5FD\" stroke=\"#1D4ED8\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\" rx=\"3\"/>\n          <text x=\"82\" y=\"37\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E3A8A\" text-anchor=\"middle\">Mavi</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Evet, Tamamen Görünür",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Hayır, Öndeki Küp Onu Kapatır",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Yarısı Görünür",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Üstünde Görünür",
        "isCorrect": false
      }
    ],
    "explanation": "Aynı boydaki iki cisim aynı hizada arka arkaya durduğunda, öndeki cisim arkadakini tamamen perdeler."
  },
  {
    "num": 34,
    "cat": "Geriye Ritmik Sayma",
    "prompt": "Sayı örüntüsünü geriye doğru takip ediniz: 10 ➔ 9 ➔ 8 ➔ 7 ➔ ?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 shadow-sm font-black text-lg text-indigo-700\">\n        <span>10</span><span>➔</span><span>9</span><span>➔</span><span>8</span><span>➔</span><span>7</span><span>➔</span><span class=\"text-amber-500 text-xl\">?</span>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "6",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "7",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "explanation": "Sayılar geriye doğru birer birer eksilmektedir: 7 - 1 = 6."
  },
  {
    "num": 35,
    "cat": "Çerçeve Analojisi",
    "prompt": "Daire içindeki Artı (+) şekli ➔ Kare içinde Artı (+) oluyor. Daire içindeki Çarpı (×) şekli neye dönüşür?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 50 50\" class=\"w-12 h-12\">\n          <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"15\" y1=\"25\" x2=\"35\" y2=\"25\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n          <line x1=\"25\" y1=\"15\" x2=\"25\" y2=\"35\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <svg viewBox=\"0 0 50 50\" class=\"w-12 h-12\">\n          <rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"3\"/>\n          <line x1=\"15\" y1=\"25\" x2=\"35\" y2=\"25\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n          <line x1=\"25\" y1=\"15\" x2=\"25\" y2=\"35\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold ml-1\">|</span>\n        <svg viewBox=\"0 0 50 50\" class=\"w-12 h-12 ml-1\">\n          <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n          <line x1=\"16\" y1=\"16\" x2=\"34\" y2=\"34\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n          <line x1=\"34\" y1=\"16\" x2=\"16\" y2=\"34\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n        </svg>\n        <span class=\"text-slate-400 font-bold\">➔</span>\n        <div class=\"w-12 h-12 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Kare içinde Çarpı (×)",
        "visual": "\n          <svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\">\n            <rect x=\"4\" y=\"4\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"2\"/>\n            <line x1=\"10\" y1=\"10\" x2=\"26\" y2=\"26\" stroke=\"#334155\" stroke-width=\"2\"/>\n            <line x1=\"26\" y1=\"10\" x2=\"10\" y2=\"26\" stroke=\"#334155\" stroke-width=\"2\"/>\n          </svg>\n        ",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Üçgen içinde Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,5 6,31 30,31\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"18\" cy=\"22\" r=\"5\" fill=\"#334155\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Boş Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\" rx=\"2\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Daire içinde Eksi (-)",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"10\" y1=\"18\" x2=\"26\" y2=\"18\" stroke=\"#334155\" stroke-width=\"2\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Dış çerçevenin daireden kareye dönüştüğü, içteki sembolün ise aynı kaldığı görülür. İçteki çarpı (×) sembolü kare çerçevenin içine girer."
  },
  {
    "num": 36,
    "cat": "180° Ters Çevirme",
    "prompt": "Gülümseyen yüz tam 180° baş aşağı çevrilirse ağız nereye bakar?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm\">\n        <svg viewBox=\"0 0 60 60\" class=\"w-14 h-14\">\n          <circle cx=\"30\" cy=\"30\" r=\"24\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n          <circle cx=\"22\" cy=\"24\" r=\"3\" fill=\"#854D0E\"/>\n          <circle cx=\"38\" cy=\"24\" r=\"3\" fill=\"#854D0E\"/>\n          <path d=\"M20,34 Q30,44 40,34\" stroke=\"#854D0E\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>\n        </svg>\n        <span class=\"text-xl font-bold text-slate-400\">➔</span>\n        <div class=\"text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg\">180° Döndür</div>\n        <span class=\"text-xl font-bold text-slate-400\">➔</span>\n        <div class=\"w-12 h-12 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xl\">?</div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Sağa Bakar",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Yukarı Bakar",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "Normal Kalır",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Değişmez",
        "isCorrect": false
      }
    ],
    "explanation": "Gülümseyen yay (aşağı kavisli) 180° çevrildiğinde üzgün yüz gibi tepeye doğru kavislenir ve yukarı bakar."
  },
  {
    "num": 37,
    "cat": "3D Küp Sayma",
    "prompt": "Tabanda 6 küp vardır. Ortadaki 2 küpün üstünde birer küp daha bulunmaktadır. Toplam kaç küp vardır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <svg viewBox=\"0 0 160 80\" class=\"w-44 h-22\">\n          <rect x=\"10\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"34\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"58\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"82\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"106\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"130\" y=\"45\" width=\"22\" height=\"22\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"58\" y=\"21\" width=\"22\" height=\"22\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n          <rect x=\"82\" y=\"21\" width=\"22\" height=\"22\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1.5\" rx=\"2\"/>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "7",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "8",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "9",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "10",
        "isCorrect": false
      }
    ],
    "explanation": "Tabandaki 6 küp ile 2. kattaki 2 küp toplanır: 6 + 2 = 8 küp."
  },
  {
    "num": 38,
    "cat": "Kelebek Kanadı Simetrisi",
    "prompt": "Kelebeğin sol kanadı mavi beneklidir. Sağ kanadı ayna simetrisi kuralına göre nasıl olmalıdır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-2 shadow-sm\">\n        <svg viewBox=\"0 0 100 60\" class=\"w-28 h-18\">\n          <ellipse cx=\"25\" cy=\"30\" rx=\"20\" ry=\"16\" fill=\"#BFDBFE\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n          <circle cx=\"20\" cy=\"24\" r=\"3\" fill=\"#1D4ED8\"/>\n          <circle cx=\"28\" cy=\"36\" r=\"4\" fill=\"#1D4ED8\"/>\n          <line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"55\" stroke=\"#475569\" stroke-width=\"3\"/>\n          <rect x=\"55\" y=\"14\" width=\"38\" height=\"32\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\" rx=\"4\"/>\n          <text x=\"74\" y=\"34\" font-size=\"14\" font-weight=\"black\" fill=\"#D97706\" text-anchor=\"middle\">?</text>\n        </svg>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Simetrik Mavi Benekli Kanat",
        "visual": "\n          <svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\">\n            <ellipse cx=\"18\" cy=\"18\" rx=\"14\" ry=\"12\" fill=\"#BFDBFE\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n            <circle cx=\"22\" cy=\"14\" r=\"2.5\" fill=\"#1D4ED8\"/>\n            <circle cx=\"14\" cy=\"22\" r=\"3\" fill=\"#1D4ED8\"/>\n          </svg>\n        ",
        "isCorrect": true
      },
      {
        "label": "B",
        "text": "Beneksiz Yeşil Kanat",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><ellipse cx=\"18\" cy=\"18\" rx=\"14\" ry=\"12\" fill=\"#BBF7D0\" stroke=\"#16A34A\" stroke-width=\"1.5\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Yuvarlak Sarı Kanat",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"14\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "Kanatsız Boş Kutu",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Ayna simetrisinde sağ kanat sol kanadın ayna görüntüsü olmalı, aynı mavi renge ve simetrik benek konumlarına sahip olmalıdır."
  },
  {
    "num": 39,
    "cat": "Sayısal Değer Eşleştirme",
    "prompt": "Üçgen = 3 puan, Kare = 2 puan olduğuna göre: Üçgen + Kare toplamı kaç puandır?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center gap-3 shadow-sm font-bold text-sm text-slate-700\">\n        <span class=\"bg-amber-100 text-amber-800 px-2 py-1 rounded-lg\">▲ = 3</span>\n        <span class=\"bg-blue-100 text-blue-800 px-2 py-1 rounded-lg\">■ = 2</span>\n        <span class=\"text-slate-400\">➔</span>\n        <span class=\"text-indigo-600 font-black\">▲ + ■ = ?</span>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "4",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "5",
        "isCorrect": true
      },
      {
        "label": "C",
        "text": "6",
        "isCorrect": false
      },
      {
        "label": "D",
        "text": "7",
        "isCorrect": false
      }
    ],
    "explanation": "Üçgen 3 puan ve Kare 2 puan olduğundan: 3 + 2 = 5 puandır."
  },
  {
    "num": 40,
    "cat": "3x3 Büyük Final Matrisi",
    "prompt": "3x3 görsel matristeki satır ve sütun kurallarını inceleyiniz. Soru işareti (?) yerine hangisi gelmelidir?",
    "visual": "\n      <div class=\"p-4 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center shadow-sm\">\n        <div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-2xl\">\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <rect class=\"w-7 h-7 bg-red-500 rounded-md\"></rect>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <div class=\"w-7 h-7 bg-blue-500 rounded-full\"></div>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <svg viewBox=\"0 0 30 30\" class=\"w-7 h-7\"><polygon points=\"15,4 4,26 26,26\" fill=\"#F59E0B\"/></svg>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <div class=\"w-7 h-7 bg-blue-500 rounded-md\"></div>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <svg viewBox=\"0 0 30 30\" class=\"w-7 h-7\"><polygon points=\"15,4 4,26 26,26\" fill=\"#EF4444\"/></svg>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <div class=\"w-7 h-7 bg-amber-400 rounded-full\"></div>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <svg viewBox=\"0 0 30 30\" class=\"w-7 h-7\"><polygon points=\"15,4 4,26 26,26\" fill=\"#3B82F6\"/></svg>\n          </div>\n          <div class=\"w-12 h-12 bg-white rounded-xl border flex items-center justify-center\">\n            <div class=\"w-7 h-7 bg-red-500 rounded-full\"></div>\n          </div>\n          <div class=\"w-12 h-12 bg-amber-50 rounded-xl border-2 border-dashed border-amber-400 flex items-center justify-center text-amber-600 font-black text-xl\">\n            ?\n          </div>\n        </div>\n      </div>\n    ",
    "options": [
      {
        "label": "A",
        "text": "Sarı Üçgen",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><polygon points=\"18,5 6,31 30,31\" fill=\"#F59E0B\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "B",
        "text": "Mavi Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"#3B82F6\" rx=\"3\"/></svg>",
        "isCorrect": false
      },
      {
        "label": "C",
        "text": "Kırmızı Kare",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><rect x=\"6\" y=\"6\" width=\"24\" height=\"24\" fill=\"#EF4444\" rx=\"3\"/></svg>",
        "isCorrect": true
      },
      {
        "label": "D",
        "text": "Kırmızı Daire",
        "visual": "<svg viewBox=\"0 0 36 36\" class=\"w-8 h-8\"><circle cx=\"18\" cy=\"18\" r=\"13\" fill=\"#EF4444\"/></svg>",
        "isCorrect": false
      }
    ],
    "explanation": "Her satır ve sütunda Kare, Daire ve Üçgen birer kez; Kırmızı, Mavi ve Sarı renkler de birer kez bulunur. 3. satırda eksik olan şekil Kare, eksik olan renk ise Kırmızıdır (Kırmızı Kare)."
  }
];
