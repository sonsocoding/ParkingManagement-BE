import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  createPayment,
  getOwnPayment,
  getAllPayment,
  getPaymentByUserId,
  getPaymentById,
  updatePaymentStatus,
} from "../controllers/paymentController.js";
import { createPaymentSchema, updatePaymentStatusSchema } from "../schemas/paymentSchema.js";

const router = express.Router();
router.use(authenticate);

router.get("/me", authorize("USER"), getOwnPayment);

// admin & manager
router.get("/", authorize("ADMIN", "MANAGER"), getAllPayment);
router.get("/user/:userId", authorize("ADMIN", "MANAGER"), getPaymentByUserId);
router.get("/:id", authorize("ADMIN", "MANAGER"), getPaymentById);

// admin only
// payment is automatically created when user booking or buy monthly pass
// manual cash payment entry is created by admin
router.post("/", authorize("ADMIN"), validate(createPaymentSchema), createPayment);
router.put(
  "/:id/status",
  authorize("ADMIN"),
  validate(updatePaymentStatusSchema),
  updatePaymentStatus,
);

export default router;
