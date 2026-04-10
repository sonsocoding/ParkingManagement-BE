import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import { updateOwnProfileSchema, createUserSchema, updateUserSchema } from "../schemas/userSchema.js";
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

// -- personal --
router.get("/me", getOwnProfile);
router.put("/me", validate(updateOwnProfileSchema), updateOwnProfile);
router.delete("/me", deleteOwnProfile);

// -- only admin --
router.post("/", authorize("ADMIN"), validate(createUserSchema), createUser);
router.put("/:id", authorize("ADMIN"), validate(updateUserSchema), updateUser);
router.delete("/:id", authorize("ADMIN"), deleteUserById);

export default router;
