import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  registerPassSchema,
  renewPassSchema,
  updatePassStatusSchema,
  updatePassPriceSchema,
} from "../schemas/monthlyPassSchema.js";
import {
  registerMonthlyPass,
  getOwnMonthlyPasses,
  renewMonthlyPass,
  cancelOwnMonthlyPass,
  getAllMonthlyPasses,
  updatePassStatus,
  updatePassPrice,
} from "../controllers/monthlyPassController.js";

const router = express.Router();
router.use(authenticate);

// -- admin only (must be before /:id routes to prevent route shadowing) --
router.put("/price", authorize("ADMIN"), validate(updatePassPriceSchema), updatePassPrice);

// -- personal --
router.post("/", authorize("USER"), validate(registerPassSchema), registerMonthlyPass);
router.get("/me", authorize("USER"), getOwnMonthlyPasses);
router.put("/:id/renew", authorize("USER"), validate(renewPassSchema), renewMonthlyPass);
router.delete("/:id", authorize("USER"), cancelOwnMonthlyPass);

// -- admin --
router.get("/", authorize("ADMIN"), getAllMonthlyPasses);
router.put("/:id/status", authorize("ADMIN"), validate(updatePassStatusSchema), updatePassStatus);

export default router;
