// app/lib/db.ts
import { Pool } from 'pg';
import logger from './logger';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    logger.info(`Executed query: ${text}, Duration: ${duration}ms, Rows: ${res.rowCount}`);
    return res;
  } catch (err) {
    const duration = Date.now() - start;
    if (err instanceof Error) {
      logger.error(`Failed query: ${text}, Duration: ${duration}ms, Error: ${err.message}`);
    } else {
      logger.error(`Failed query: ${text}, Duration: ${duration}ms, Unknown error`);
    }
    throw err;
  }
};
