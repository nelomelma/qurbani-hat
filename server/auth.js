
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { betterAuth } from "better-auth";
import { Pool } from "pg";

const database = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const isProduction = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  database,

  secret: process.env.BETTER_AUTH_SECRET,

  baseURL:
    process.env.BETTER_AUTH_URL ||
    "http://localhost:5000",

  trustedOrigins: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://qurbani-hat-delta.vercel.app",
  ],

  advanced: {
    useSecureCookies: isProduction,
    defaultCookieAttributes: {
      sameSite: isProduction ? "lax" : "lax",
      secure: isProduction,
      httpOnly: true,
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  ...(process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET &&
  !process.env.GOOGLE_CLIENT_ID.startsWith("your_")
    ? {
        socialProviders: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        },
      }
    : {}),
});
