import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../drizzle/schema"
dotenv.config();


const connectionString = process.env.DATABASE_URL || ''

const db = postgres(connectionString)
export const dbClient = drizzle(db,{schema});   