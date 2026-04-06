import express from "express";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { getUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.use(authenticate);
router.use(authorize("USER"));

router.get("/user", getUser);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

export default router;
