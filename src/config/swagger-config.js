import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.js";

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
