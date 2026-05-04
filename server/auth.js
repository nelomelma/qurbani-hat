import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  trustedOrigins: ["http://localhost:5173", "http://localhost:5174"],

  emailAndPassword: {
    enabled: true,
  },

  
});