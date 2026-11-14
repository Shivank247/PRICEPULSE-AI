const NOMINATIM = "https://nominatim.openstreetmap.org/search";

export type Coords = { lat: number; lon: number; displayName: string };

const cache = new Map<string, Coords | null>();

export async function geocode(place: string): Promise<Coords | null> {
  const key = place.trim().toLowerCase();
  if (cache.has(key)) return cache.get(key) ?? null;
  try {
    const url = `${NOMINATIM}?q=${encodeURIComponent(place)}&format=json&limit=1&countrycodes=in`;
    const res = await fetch(url, { headers: { "user-agent": "PricePulseAI/1.0 (agri price platform)" } });
    if (!res.ok) throw new Error(String(res.status));
    const j = (await res.json()) as { lat: string; lon: string; display_name: string }[];
    const out: Coords | null = j[0]
      ? { lat: parseFloat(j[0].lat), lon: parseFloat(j[0].lon), displayName: j[0].display_name }
      : null;
    cache.set(key, out);
    return out;
  } catch {
    cache.set(key, null);
    return null;
  }
}

export async function routeDistanceKm(a: Coords, b: Coords): Promise<number | null> {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${a.lon},${a.lat};${b.lon},${b.lat}?overview=false`;
    const res = await fetch(url, { headers: { "user-agent": "PricePulseAI/1.0" } });
    if (!res.ok) return null;
    const j = (await res.json()) as { routes?: { distance: number }[] };
    const d = j.routes?.[0]?.distance;
    return d ? Math.round(d / 100) / 10 : null;
  } catch {
    return null;
  }
}