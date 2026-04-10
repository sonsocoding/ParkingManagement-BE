import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import {
  updateOwnProfileSchema,
  createUserSchema,
  updateUserSchema,
} from "../schemas/parkingLotSchema.js";
import {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  getAllUsers,
  createUser,
  updateUser,
  deleteUserById,
} from "../controllers/parkingLotController.js";

const router = express.Router();
router.use(authenticate);

router.get("/", getAllLot);
router.get("/:id", getLotById);

router.post("/", authorize("ADMIN"), createLot);
router.put("/", authorize("ADMIN"), updateLot);
router.delete("/", authorize("ADMIN"), deleteLot);

export default router;
