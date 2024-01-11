import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
dotenv.config();


const connectionString = process.env.DATABASE_URL || ''

const db = postgres(connectionString)
export const dbClient = drizzle(db);