import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import { createParkingLotSchema, updateParkingLotSchema } from "../schemas/parkingLotSchema.js";
import {
  createLot,
  getAllLots,
  getLotById,
  updateLot,
  deleteLot,
} from "../controllers/parkingLotController.js";

const router = express.Router();
router.use(authenticate);

router.get("/", getAllLots);
router.get("/:id", getLotById);

router.post("/", authorize("ADMIN"), validate(createParkingLotSchema), createLot);
router.put("/:id", authorize("ADMIN"), validate(updateParkingLotSchema), updateLot);
router.delete("/:id", authorize("ADMIN"), deleteLot);

export default router;
