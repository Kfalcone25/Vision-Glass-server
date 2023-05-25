const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
});

module.exports = model('User', userSchema);
