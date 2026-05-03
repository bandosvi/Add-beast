import { createDatabase } from "@kilocode/app-builder-db";
import * as schema from "./schema";

let db: ReturnType<typeof createDatabase> | null = null;

export const getDb = () => {
  if (!db) {
    // Only create database if environment variables are available
    if (process.env.DB_URL && process.env.DB_TOKEN) {
      db = createDatabase(schema);
    } else {
      // For demo purposes, throw an error that will be caught in migrate.ts
      throw new Error('Database not configured - DB_URL and DB_TOKEN environment variables required');
    }
  }
  return db!;
};