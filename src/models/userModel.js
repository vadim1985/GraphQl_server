import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chatMessage: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChatMessage',
    },
  ],
  userNotification: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserNotification',
    },
  ],
  counterparty: [
    {
      type: Number,
      required: false,
    },
  ],
});

userSchema.pre('save', function() {
  const hashedPassword = bcrypt.hashSync(this.password, 12);
  this.password = hashedPassword;
});

const user = mongoose.model('Users', userSchema);

export default user;