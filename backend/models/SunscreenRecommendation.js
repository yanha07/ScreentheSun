import mongoose from 'mongoose';
const sunscreenRecommendationSchema = new mongoose.Schema({
    skinType: { type: String, required: true },
    sunscreenName: { type: String, required: true },
    spfLevel: String,
    description: String
});
export default mongoose.model('SunscreenRecommendation', sunscreenRecommendationSchema);