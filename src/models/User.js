const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  bio: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'ENG',
  },
  city: String,
  country: String,
  continent: String,
  userType: {
    type: String,
    default: 'without-login',
  },
  permissionLevel: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  loginCount: {
    type: Number,
    default: 0,
  },

});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports= mongoose.model('User', userSchema);
