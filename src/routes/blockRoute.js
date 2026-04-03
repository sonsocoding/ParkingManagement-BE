import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  createBlock,
  deleteBlock,
  getBlocks,
  updateBlock,
} from "../controllers/blockController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createBlock);
router.get("/", getBlocks);
router.put("/:id", updateBlock);
router.delete("/:id", deleteBlock);

export default router;
