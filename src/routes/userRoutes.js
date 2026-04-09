import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  getAllUsers,
  createUser,
  updateUser,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.use(authenticate);

// -- admin & manager --
router.get("/", authorize("ADMIN", "MANAGER"), getAllUsers);

// -- only admin --
router.post("/", authorize("ADMIN"), createUser);
router.put("/:id", authorize("ADMIN"), updateUser);
router.delete("/:id", authorize("ADMIN"), deleteUserById);

// -- personal --
router.get("/me", getOwnProfile);
router.put("/me", updateOwnProfile);
router.delete("/me", deleteOwnProfile);

export default router;
