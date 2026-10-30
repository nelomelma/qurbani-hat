import { auth } from './auth.js';
import { getMigrations } from 'better-auth/db/migration';

try {
  const { toBeCreated, toBeAdded, runMigrations } = await getMigrations(auth.options);
  console.log(`Tables to create: ${toBeCreated.length}; tables to update: ${toBeAdded.length}`);
  await runMigrations();
  console.log('Better Auth database migration completed successfully.');
} catch (error) {
  console.error('Database migration failed:', error);
  process.exitCode = 1;
}
