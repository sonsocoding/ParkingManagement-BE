import express from "express";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { getUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.use(authenticate);
router.use(authorize("USER"));

router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
