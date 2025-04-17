const express = require('express');
const router = express.Router();
const { createTrip, getAllTrips , updateTrip ,deleteTrip ,searchTrips } = require('../controllers/tripController');
const { protect, authorize } = require('../middleware/authMiddleware');

// 🔐Add Trip (Manager Only)
router.post('/', protect, authorize('admin'), createTrip);
router.post('/', protect, createTrip);

// 🌍 Bring all trips (open to all)
router.get('/', getAllTrips);

router.put("/:id", protect, authorize("admin"), updateTrip);
router.delete("/:id", protect, authorize("admin"), deleteTrip);
router.get("/search", searchTrips);



module.exports = router;
