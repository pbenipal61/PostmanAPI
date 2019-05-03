const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const whereSchema = new mongoose.Schema({
  address: String,
  city: String,
  country: String,
  continent: String,
});
const whenSchema = new mongoose.Schema({
  day: Number,
  month: Number,
  year: Number,
  hour: Number,
  minute: Number,
});
const whatSchema = new mongoose.Schema({
  title: String,
  type: String,
  message: String,
});
const howSchema = new mongoose.Schema({
  instructions: String,
});

const mediaSchema = new mongoose.Schema({
  photos: [String],
});

const reachSchema = new mongoose.Schema({
  reach: String,
  bound: String,
});
const dataSchema = new mongoose.Schema({
  what: whatSchema,
  how: howSchema,
  reach: reachSchema,
  media: mediaSchema,
  when: whenSchema,
  where: whereSchema,
  contact: contactSchema,
});
const metaSchema = new mongoose.Schema({
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: new Date(),
  },
  by: mongoose.Schema.Types.ObjectId,
});


const eventSchema = new mongoose.Schema({
  meta: metaSchema,
  data: dataSchema,

});


module.exports = mongoose.model('Event', eventSchema);


