import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  createPayment,
  getOwnPayment,
  getAllPayment,
  getRevenueOverview,
  getPaymentByUserId,
  getPaymentById,
  updatePaymentStatus,
  handleVnpayReturn,
  handleVnpayIpn,
} from "../controllers/paymentController.js";
import {
  createPaymentSchema,
  getRevenueOverviewSchema,
  updatePaymentStatusSchema,
} from "../schemas/paymentSchema.js";

const router = express.Router();

// Webhooks from payment gateways MUST be public (do not require JWT)
router.get("/vnpay-return", handleVnpayReturn);
router.get("/vnpay-ipn", handleVnpayIpn); // VNPAY often uses GET for IPN but depends on config, sometimes POST. Let's accept both or just GET as per IPN standard GET query string.

router.use(authenticate);

router.get("/me", authorize("USER"), getOwnPayment);

// admin
router.get("/", authorize("ADMIN"), getAllPayment);
router.get(
  "/revenue-overview",
  authorize("ADMIN"),
  validate(getRevenueOverviewSchema),
  getRevenueOverview,
);
router.get("/user/:userId", authorize("ADMIN"), getPaymentByUserId);
router.get("/:id", authorize("ADMIN"), getPaymentById);

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
