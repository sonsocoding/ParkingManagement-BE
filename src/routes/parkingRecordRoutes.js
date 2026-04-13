import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  checkIn,
  checkOut,
  getOwnRecord,
  getAllRecord,
} from "../controllers/parkingRecordController.js";
import { checkInSchema, checkOutSchema } from "../schemas/parkingRecordSchema.js";

const router = express.Router();
router.use(authenticate);

router.post("/checkin", authorize("USER"), validate(checkInSchema), checkIn);
router.put("/:id/checkout", authorize("USER"), validate(checkOutSchema), checkOut);

router.get("/me", authorize("USER"), getOwnRecord);
router.get("/", authorize("ADMIN", "MANAGER"), getAllRecord); // filter by user, vehicle, lot, etc in the future

export default router;
