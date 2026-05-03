import { runMigrations } from "@kilocode/app-builder-db";
import { getDb } from "./index";

// Only run migrations if database is properly configured
if (process.env.DB_URL && process.env.DB_TOKEN) {
  try {
    await runMigrations(getDb(), {}, { migrationsFolder: "./src/db/migrations" });
    console.log('Database migrations completed successfully');
  } catch (error) {
    console.error('Database migration failed:', error);
    process.exit(1); // Fail build if database is configured but migrations fail
  }
} else {
  console.log('Skipping database migrations - DB_URL and DB_TOKEN not configured (this is normal for demo deployments)');
}