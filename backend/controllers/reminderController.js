import Reminder from '../models/Reminder.js';
export const createReminder = async (req, res) => {
    try {
        const reminder = new Reminder({ userId: req.userId, ...req.body });
        await reminder.save();
        res.json(reminder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
