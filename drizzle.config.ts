import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schemas/*.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST ||'',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || '',
    port: parseInt(process.env.DB_PORT ||'')
  },
} satisfies Config;