const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// List all restaurants
router.get('/api/restaurants', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const restaurants = await Restaurant.find().skip(skip).limit(limit);
  res.json(restaurants);
});

// Create a new restaurant
router.post('/api/restaurants', async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  await newRestaurant.save();
  res.status(201).json(newRestaurant);
});

// Delete a restaurant
router.delete('/api/restaurants/:_id', async (req, res) => {
  await Restaurant.findByIdAndDelete(req.params._id);
  res.status(204).send();
});

module.exports = router;