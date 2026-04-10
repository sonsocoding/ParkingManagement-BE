import { ZodError } from "zod";
import { formatError } from "../utils/formatResponse.js";

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      const errorMessage = err.issues.map(e => e.message).join(', ');
      return res.status(400).json(formatError(errorMessage));
    }
    console.error("Validation error:", err);
    return res.status(400).json(formatError("Invalid request data"));
  }
};
