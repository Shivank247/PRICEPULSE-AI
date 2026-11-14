import { getDb } from "./db";

export type PriceShock = {
  commodity: string;
  market: string;
  state: string;
  previousPrice: number;
  latestPrice: number;
  changePct: number;
  previousDate: string;
  latestDate: string;
};

const THRESHOLD_PCT = 20;

export function detectPriceShocks(commodity?: string): PriceShock[] {
  const db = getDb();
  const rows = (db.prepare(
    `SELECT commodity, market, state, modal_price, observation_date
     FROM price_records
     WHERE (?1 IS NULL OR lower(commodity) = lower(?1))
     ORDER BY commodity, market, observation_date`
  ).all(commodity ?? null) as any[]);
  const byKey = new Map<string, any[]>();
  for (const r of rows) {
    const k = `${r.commodity}|${r.market}|${r.state}`;
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k)!.push(r);
  }
  const shocks: PriceShock[] = [];
  for (const series of byKey.values()) {
    for (let i = 1; i < series.length; i++) {
      const prev = series[i - 1], cur = series[i];
      if (!prev.modal_price || !cur.modal_price) continue;
      const changePct = ((cur.modal_price - prev.modal_price) / prev.modal_price) * 100;
      if (Math.abs(changePct) >= THRESHOLD_PCT) {
        shocks.push({
          commodity: cur.commodity, market: cur.market, state: cur.state,
          previousPrice: prev.modal_price, latestPrice: cur.modal_price,
          changePct: Math.round(changePct * 100) / 100,
          previousDate: prev.observation_date, latestDate: cur.observation_date,
        });
      }
    }
  }
  return shocks.sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct));
}