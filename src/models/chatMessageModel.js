import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

const chatMessage = mongoose.model('ChatMessage', chatMessageSchema);

export default chatMessage;