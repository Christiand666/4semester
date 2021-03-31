const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: String,
    fullname: String,
    password: String,
    phone: String,
    address: {
        street: String,
        number: String,
        zip: Number,
        city: String
    },
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);