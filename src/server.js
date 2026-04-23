import dotenv from "dotenv";
dotenv.config(); // load .env file

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { disconnectDB } from "./config/db.js";
import setupSwagger from "./config/swagger-config.js";

const PORT = process.env.PORT || 3000;

connectDB();

// setup swagger
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", async () => {
  console.log("Server shutting down...");
  await disconnectDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Server shutting down...");
  await disconnectDB();
  process.exit(0);
});
