import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import routes
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import vehicleRoute from "./routes/vehicleRoutes.js";
import parkingLotRoute from "./routes/parkingLotRoutes.js";
import parkingSlotRoute from "./routes/parkingSlotRoutes.js";
import bookingRoute from "./routes/bookingRoutes.js";
import parkingRecordRoute from "./routes/parkingRecordRoutes.js";
import paymentRoute from "./routes/paymentRoutes.js";
import monthlyPassRoute from "./routes/monthlyPassRoutes.js";

// import middleware
import { errorHandler } from "./middleware/errorHandler.js";
import { corsConfig } from "./config/cors-config.js";

const app = express();

app.use(corsConfig);

app.use(express.json()); // lets express read json from request body
app.use(cookieParser()); // lets express access req.cookies

// check if the express server is running
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      service: "parking-management-backend",
      uptime: process.uptime(), // how long nodejs has been running
    },
  });
});

// use routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/vehicles", vehicleRoute);
app.use("/api/parking-lots", parkingLotRoute);
app.use("/api/parking-slots", parkingSlotRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/records", parkingRecordRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/monthly-passes", monthlyPassRoute);

// global error handler
app.use(errorHandler);

export default app;
