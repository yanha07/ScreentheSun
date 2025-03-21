import express from "express";
import { saveQuizResponse } from "../controllers/quizResponseController.js";

const router = express.Router();

// Define routes
router.post("/quiz", saveQuizResponse);

export default router;