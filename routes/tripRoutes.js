const express = require('express');
const router = express.Router();
const { createTrip, getAllTrips } = require('../controllers/tripController');
const { protect, authorize } = require('../middleware/authMiddleware');

// 🔐Add Trip (Manager Only)
router.post('/', protect, authorize('admin'), createTrip);
router.post('/', protect, createTrip);

// 🌍 Bring all trips (open to all)
router.get('/', getAllTrips);

module.exports = router;
