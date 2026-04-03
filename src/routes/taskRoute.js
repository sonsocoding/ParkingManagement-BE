import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/block/:blockId/task", createTask);
router.get("/block/:blockId/task", getTasks);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
