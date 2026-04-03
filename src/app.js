import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authRoute.js";
import blockRoute from "./routes/blockRoute.js";
import taskRoute from "./routes/taskRoute.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // allows cookies to be sent
  }),
);

app.use(express.json()); // lets express read json from request body
app.use(cookieParser()); // lets express access req.cookies

app.use("/api/auth", authRoute);
app.use("/api/block", blockRoute);
app.use("/api", taskRoute);

export default app;
