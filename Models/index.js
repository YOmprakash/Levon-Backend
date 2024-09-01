const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ['student', 'teacher'] },
  name: { type: String, required: true },
  grade: { type: String }, 
  subject: { type: String } 
});

module.exports = mongoose.model('User', userSchema);
