import Database from "better-sqlite3";
import path from "path";

const DB_PATH = process.env.PRICEPULSE_DB || path.join(process.cwd(), "database", "pricepulse.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
  }
  return db;
}

export function initDb(): void {
  const d = getDb();
  const schema = require("fs").readFileSync(path.join(process.cwd(), "database", "schema.sql"), "utf8");
  d.exec(schema);
}