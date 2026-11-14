import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DB_DIR = path.join(process.cwd(), "database");
const DB_PATH = process.env.DATABASE_PATH || path.join(DB_DIR, "pricepulse.db");

declare global {
  var __pricepulseDb: Database.Database | undefined;
}
function create(): Database.Database {
  fs.mkdirSync(DB_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(fs.readFileSync(path.join(process.cwd(), "database", "schema.sql"), "utf8"));
  return db;
}

export function getDb(): Database.Database {
  const g = globalThis as typeof globalThis & { __pricepulseDb?: Database.Database };
  if (!g.__pricepulseDb) g.__pricepulseDb = create();
  return g.__pricepulseDb;
}

export type PriceRecord = {
  id: number;
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  min_price: number | null;
  max_price: number | null;
  modal_price: number;
  observation_date: string;
  source: string;
};
