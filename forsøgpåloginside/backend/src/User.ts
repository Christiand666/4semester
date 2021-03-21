import mongoose from 'mongoose';

const user = new mongoose.Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("User", user);