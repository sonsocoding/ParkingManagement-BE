import dotenv from "dotenv";
dotenv.config(); // load .env file

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { disconnectDB } from "./config/db.js";
import setupSwagger from "./config/swagger-config.js";
import { startPaymentExpirationJob, stopPaymentExpirationJob } from "./jobs/paymentExpirationJob.js";

const PORT = process.env.PORT || 3000;

// setup swagger
setupSwagger(app);

const startServer = async () => {
  await connectDB();
  startPaymentExpirationJob();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

process.on("SIGINT", async () => {
  console.log("Server shutting down...");
  stopPaymentExpirationJob();
  await disconnectDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Server shutting down...");
  stopPaymentExpirationJob();
  await disconnectDB();
  process.exit(0);
});
