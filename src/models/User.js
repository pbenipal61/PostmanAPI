import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
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

export default mongoose.model('User', userSchema);
