import express from "express";
import { authenticate } from "../middleware/authenticate.js";
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

// -- admin & manager --
router.get("/", authorize("ADMIN", "MANAGER"), getAllVehicles);
router.get("/:id", authorize("ADMIN", "MANAGER"), getVehicleById);

// -- only admin --
router.put("/:id/admin", authorize("ADMIN"), updateVehicleById);
router.delete("/:id/admin", authorize("ADMIN"), deleteVehicleById);

// -- personal --
router.post("/", createVehicle);
router.get("/me", getOwnVehicle);
router.put("/:id", updateOwnVehicle);
router.delete("/:id", deleteOwnVehicle);

export default router;
