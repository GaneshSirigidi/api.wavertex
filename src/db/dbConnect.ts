import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "Prabha@222",
  database: "wavertex_dev",
});

client.connect();
const dbClient = drizzle(client);
export default dbClient