import { createDatabase } from "@kilocode/app-builder-db";
import * as schema from "./schema";

let db: ReturnType<typeof createDatabase> | null = null;

export const getDb = () => {
  if (!db) {
    db = createDatabase(schema);
  }
  return db;
};