import express from 'express';
import axios from 'axios';

const router = express.Router();

// Replace with your OpenWeatherMap API key
const API_KEY = '825d06a879d70373e1ddeb1f9937e99f';

// Endpoint to get real-time UV index
router.get('/', async (req, res) => {
    const lat = req.query.lat; // Get latitude from query parameters
    const lon = req.query.lon; // Get longitude from query parameters

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${'825d06a879d70373e1ddeb1f9937e99f'}`);
        const uvIndex = response.data.value; // Extract the UV index value
        res.json({ uvIndex });
    } catch (error) {
        console.error('Error fetching UV index:', error);
        res.status(500).json({ error: 'Failed to fetch UV index' });
    }
});

export default router;