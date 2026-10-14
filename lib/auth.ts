// lib/auth.ts
import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true, // এটি অটোমেটিক লগইন ও রেজিস্ট্রেশন হ্যান্ডেল করবে (Handles login & signup automatically)
  },
});