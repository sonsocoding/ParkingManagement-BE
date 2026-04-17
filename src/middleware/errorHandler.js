import { formatError } from "../utils/formatResponse.js";

export const errorHandler = (err, req, res, next) => {
  // Log the full error server-side
  console.error("Global Error Handler caught an error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  // Handle Prisma-specific errors
  if (err.name === "PrismaClientKnownRequestError") {
    switch (err.code) {
      case "P2002":
        // Unique constraint failed
        statusCode = 409;
        const target = err.meta?.target ? err.meta.target.join(", ") : "Field";
        message = `${target} already exists.`;
        break;
      case "P2025":
        // Record not found
        statusCode = 404;
        message = err.meta?.cause || "Record not found.";
        break;
      case "P2003":
        // Foreign key constraint failed
        statusCode = 400;
        message = "Invalid reference. A related record does not exist.";
        break;
      case "P2014":
        // Relation violation
        statusCode = 400;
        message = "The change violates a required relation.";
        break;
      default:
        statusCode = 400;
        message = "Database query error.";
    }
  } else if (err.name === "PrismaClientValidationError") {
    statusCode = 400;
    message = "Invalid data provided.";
  } else if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Invalid or expired token.";
  }

  // In production you might want to hide 500 errors by uncommenting this:
  // if (statusCode === 500 && process.env.NODE_ENV === "production") {
  //   message = "Internal server error";
  // }

  return res.status(statusCode).json(formatError(message));
};
