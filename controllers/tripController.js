const Trip = require('../models/Trip');
const asyncHandler = require('express-async-handler')

// @desc   Create Trip
// @route  Post /api/trips
// @access  Private/Admin
const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create trip', error: error.message });
  }
};

// @desc    Get All Trip
// @route  Get /api/trips
// @access  Private/Admin
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Failed to bring flights' });
  }
};
// @desc    Update a trip
// @route   PUT /api/trips/:id
// @access  Private/Admin
const updateTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedTrip);
});

// @desc    Delete a trip
// @route   DELETE /api/trips/:id
// @access  Private/Admin
const deleteTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  await Trip.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Trip deleted successfully' });
});


module.exports = { createTrip, getAllTrips ,updateTrip ,deleteTrip };

