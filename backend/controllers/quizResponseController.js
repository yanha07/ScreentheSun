import QuizResponse from '../models/quizresponse.js';
export const saveQuizResponse = async (req, res) => {
    try {
        const quizResponse = new QuizResponse({ userId: req.userId, ...req.body });
        await quizResponse.save();
        res.json(quizResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getQuizResponses = async (req, res) => {
    try {
        const { userId } = req.params;
        const responses = await QuizResponse.find({ userId });
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};