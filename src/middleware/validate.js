import { ZodError } from "zod";

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
      return res.status(400).json({ message: errorMessage, errors: err.issues });
    }
    return res.status(400).json({ message: `Error validating with error: ${err.message}` });
  }
};
