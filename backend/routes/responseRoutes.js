import express from "express";
import { saveQuizResponse, getQuizResponses } from "../controllers/quizResponseController.js";

const router = express.Router();

// Save a quiz response
router.post("/response", saveQuizResponse);

// Get all quiz responses for a user
router.get("/response/:userId", getQuizResponses);

export default router;