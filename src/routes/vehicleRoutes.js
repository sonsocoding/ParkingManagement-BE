import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import { createVehicleSchema, updateVehicleSchema } from "../schemas/vehicleSchema.js";
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

// -- STATIC ROUTES (No parameters) --
// -- personal --
router.post("/", validate(createVehicleSchema), createVehicle);
router.get("/me", getOwnVehicle);

// -- admin & manager --
router.get("/", authorize("ADMIN", "MANAGER"), getAllVehicles);

// -- DYNAMIC ROUTES (Contains parameters like :id) --
// -- only admin --
router.put("/:id/admin", authorize("ADMIN"), validate(updateVehicleSchema), updateVehicleById);
router.delete("/:id/admin", authorize("ADMIN"), deleteVehicleById);

// -- admin & manager --
router.get("/:id", authorize("ADMIN", "MANAGER"), getVehicleById);

// -- personal --
router.put("/:id", validate(updateVehicleSchema), updateOwnVehicle);
router.delete("/:id", deleteOwnVehicle);

export default router;
