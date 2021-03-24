import mongoose from 'mongoose';

const user = new mongoose.Schema({
  googleId: {
    required: false,
    type: String
},
twitterId: {
    required: false,
    type: String
},
githubId: {
    required: false,
    type: String
},
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
  displayName: {
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