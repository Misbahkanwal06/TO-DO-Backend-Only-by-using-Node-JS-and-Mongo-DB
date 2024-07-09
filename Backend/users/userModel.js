
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: 'Email address is required'
    },
    password: String,
    token: String,
    date: { type: Date, default: Date.now },
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;