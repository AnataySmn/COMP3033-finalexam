const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  emailAddress: String,
  rating: Number
});

module.exports = mongoose.model('Restaurant', restaurantSchema);