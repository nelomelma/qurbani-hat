import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://qurbani-hat-delta.vercel.app",
    ],
    credentials: true,
  })
);

app.all("/api/auth/*", toNodeHandler(auth));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});