import cors from "cors";

// allowed url from frontend to access backend api
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

export const corsConfig = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like postman or curl)
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
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // able to call CRUD type API
  allowedHeaders: ["Content-Type", "Authorization"], // able to send JSON and auth token
  maxage: 86400,
});
