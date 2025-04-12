const Trip = require('../models/Trip');

// ✳️ Create a new trip
const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create trip', error: error.message });
  }
};

// ✳️ Bring all trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Failed to bring flights' });
  }
};

module.exports = { createTrip, getAllTrips };

