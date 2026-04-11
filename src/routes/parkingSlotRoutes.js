import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import { bulkCreateParkingSlotSchema, updateSlotStatusSchema, updateParkingSlotSchema } from "../schemas/parkingSlotSchema.js";
import {
  createSlot,
  getByLotId,
  updateSlotStatus,
  updateSlot,
  deleteSlot,
} from "../controllers/parkingSlotController.js";

const router = express.Router();
router.use(authenticate);

router.get("/:id", getByLotId);

router.post("/", authorize("ADMIN"), validate(bulkCreateParkingSlotSchema), createSlot);
router.put("/:id/status", authorize("ADMIN"), validate(updateSlotStatusSchema), updateSlotStatus);
router.put("/:id", authorize("ADMIN"), validate(updateParkingSlotSchema), updateSlot);
router.delete("/:id", authorize("ADMIN"), deleteSlot);

export default router;
