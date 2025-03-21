import mongoose from 'mongoose';
const quizResponseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skinColor: String,
    sunReaction: String,
    skinType: String,
    acneProne: String,
    sensitiveSkin: String,
    oilySkin: String,
    redness: String,
    visiblePores: String,
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('QuizResponse', quizResponseSchema);
