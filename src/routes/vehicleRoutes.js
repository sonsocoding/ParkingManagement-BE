import express from "express";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import {
  createVehicle,
  getOwnVehicle,
  updateOwnVehicle,
  deleteOwnVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.use(authenticate);

// -- personal --
router.post("/", createVehicle);
router.get("/me", getOwnVehicle);
router.put("/:id", updateOwnVehicle);
router.delete("/:id", deleteOwnVehicle);

// -- admin & manager --
router.get("/", authorize("ADMIN", "MANAGER"), getAllVehicles);
router.get("/:id", authorize("ADMIN", "MANAGER"), getVehicleById);

// -- only admin --
router.put("/:id/admin", authorize("ADMIN"), updateVehicleById);
router.delete("/:id", authorize("ADMIN"), deleteVehicleById);

export default router;
