import express from "express";
import { getRecommendations } from "../controllers/sunscreenRecommendationController.js";

const router = express.Router();

// Get sunscreen recommendations based on skin type
router.get("/recommendations/:skinType", getRecommendations);

export default router;