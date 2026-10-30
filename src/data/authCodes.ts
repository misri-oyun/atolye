/**
 * Misri Akıl Oyunları - Lisans ve Aktivasyon Kodları
 * Kullanıcıların Instagram ve eğitim kanalları üzerinden edindiği resmi kodlar.
 */
export const VALID_ACCESS_KEYS = [
  'MISRI2026',
  'BILSEM2026',
  'ATOLYE-ALP',
  'MISRI-DEMO',
  'ZEKA2026',
  'BILSEM-PRO',
];

export function validateAccessKey(key: string): boolean {
  const normalized = key.trim().toUpperCase();
  if (VALID_ACCESS_KEYS.includes(normalized)) return true;
  // Dinamik kurum kodları (Örn: MISRI-ISTANBUL, MISRI-ANKARA)
  if (normalized.startsWith('MISRI-') && normalized.length >= 8) return true;
  return false;
}
