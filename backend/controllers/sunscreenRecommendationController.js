import SunscreenRecommendation from '../models/SunscreenRecommendation.js';
export const getRecommendations = async (req, res) => {
    try {
        const { skinType } = req.query;
        const recommendations = await SunscreenRecommendation.find({ skinType });
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
