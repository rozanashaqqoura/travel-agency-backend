const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// ✳️ User Schema (general form of data)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //We have to write it
  },
  email: {
    type: String,
    required: true,
    unique: true, // What is repeated
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // بس هدول الخيارين
    default: 'user', // المستخدم العادي
  }
});

// ✳️ Middleware before saving the user → encrypt the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); // If the password has not changed, continue without encryption.
  }

  const salt = await bcrypt.genSalt(10); //Create "salt"
  this.password = await bcrypt.hash(this.password, salt); // Password encryption
  next();
});

// ✳️ Function to compare password when logging in
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
