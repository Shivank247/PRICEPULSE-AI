export type MarketNetValue = {
  market: string;
  district: string;
  state: string;
  modalPrice: number | null;
  transportCost: number;
  handlingCost: number;
  netValue: number | null;
  observationDate: string | null;
};

export function computeNetValues(
  records: { market: string; district: string; state: string; modal_price: number | null; observation_date: string | null }[],
  quantityQuintals: number,
  transportCostTotal: number,
  handlingPerQuintal: number
): MarketNetValue[] {
  const t = transportCostTotal / Math.max(quantityQuintals, 1);
  return records.map((r) => {
    const perQ = (r.modal_price ?? 0) - t - handlingPerQuintal;
    return {
      market: r.market,
      district: r.district,
      state: r.state,
      modalPrice: r.modal_price,
      transportCost: Math.round(t * 100) / 100,
      handlingCost: handlingPerQuintal,
      netValue: r.modal_price === null ? null : Math.round(perQ * 100) / 100,
      observationDate: r.observation_date,
    };
  });
}

export function bestMarket(values: MarketNetValue[]): MarketNetValue | null {
  const priced = values.filter((v) => v.netValue !== null);
  if (priced.length === 0) return null;
  return priced.reduce((a, b) => ((b.netValue ?? 0) > (a.netValue ?? 0) ? b : a));
}