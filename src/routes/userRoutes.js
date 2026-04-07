import express from "express";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.use(authenticate);

// -- personal --
router.get("/me", getOwnProfile);
router.put("/me", updateOwnProfile);
router.delete("/me", deleteOwnProfile);

// -- admin & manager --
router.get("/", authorize("ADMIN", "MANAGER"), getAllUsers);

// -- only admin --
router.put("/create", authorize("ADMIN"), createUser);
router.put("/:id", authorize("ADMIN"), updateUser);
router.delete("/:id", authorize("ADMIN"), deleteUser);

export default router;
