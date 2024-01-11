import * as dotenv from "dotenv";
dotenv.config();
export default {
    schema: './src/schemas/*',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
};
