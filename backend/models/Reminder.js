import mongoose from 'mongoose';
const reminderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reminderTime: { type: String, required: true },
    frequency: { type: String, enum: ['Once', 'Daily', 'Weekly'], required: true },
    notificationType: { type: String, enum: ['Email', 'SMS'], required: true }
});
export default mongoose.model('Reminder', reminderSchema);
