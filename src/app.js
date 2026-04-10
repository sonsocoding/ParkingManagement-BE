import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import routes
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import vehicleRoute from "./routes/vehicleRoutes.js";

// import middleware
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = [
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

// use routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/vehicles", vehicleRoute);

// global error handler
app.use(errorHandler);

export default app;
