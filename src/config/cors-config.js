import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

export const corsConfig = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Strict check against our whitelist
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // For security, don't give too much detail in the error message
      callback(new Error("CORS Policy Violation"));
    }
  },
  credentials: true, // Required for cookies/sessions
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  maxage: 86400,
});
