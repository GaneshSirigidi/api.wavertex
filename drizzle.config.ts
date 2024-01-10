import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: './src/schemas/*',
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