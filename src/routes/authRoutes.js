import express from "express";
import { register, login, logout, getMe } from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// return data from be to fe when fetch this route
router.get("/me", authenticate, getMe);

export default router;
