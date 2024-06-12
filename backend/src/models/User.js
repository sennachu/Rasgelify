// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, minlength: 5, maxlength: 255, unique: true },
  password: { type: String, required: true, minlength: 5, maxlength: 1024 },
  role: { type: String, enum: ['user', 'boat_owner', 'admin'], default: 'user' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
