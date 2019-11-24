import mongoose from 'mongoose';

const userNotificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

const userNotification = mongoose.model('UserNotification', userNotificationSchema);

export default userNotification;