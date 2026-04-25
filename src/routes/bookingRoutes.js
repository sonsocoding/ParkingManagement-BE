import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  createBookingSchema,
  updateBookingSchema,
  updateBookingStatusSchema,
} from "../schemas/bookingSchema.js";
import {
  createBooking,
  getOwnBooking,
  updateOwnBooking,
  cancelOwnBooking,
  getAllBooking,
  getBookingById,
  updateBookingById,
  updateBookingStatus,
  deleteBookingById,
} from "../controllers/bookingController.js";

const router = express.Router();
router.use(authenticate);

// -- personal --
router.post("/", authorize("USER"), validate(createBookingSchema), createBooking);
router.get("/me", authorize("USER"), getOwnBooking);

// -- admin --
router.get("/", authorize("ADMIN"), getAllBooking);
router.get("/:id", authorize("ADMIN"), getBookingById);
router.put("/:id/admin", authorize("ADMIN"), validate(updateBookingSchema), updateBookingById);
router.put(
  "/:id/status",
  authorize("ADMIN"),
  validate(updateBookingStatusSchema),
  updateBookingStatus,
);
router.delete("/:id/admin", authorize("ADMIN"), deleteBookingById);

// -- personal --
router.put("/:id", authorize("USER"), validate(updateBookingSchema), updateOwnBooking);
router.delete("/:id", authorize("USER"), cancelOwnBooking);

export default router;
