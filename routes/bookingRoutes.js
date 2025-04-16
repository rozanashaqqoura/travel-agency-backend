const express = require("express");
const router = express.Router();
const { createBooking  , getMyBookings} = require("../controllers/bookingController");
const { protect, authorize } = require("../middleware/authMiddleware");

// 🛡️ Route to create a reservation - Only for logged in users with "user" role
router.post("/", protect,  createBooking);

// 🔐Route to create a reservation - User must be logged in
router.post("/", protect, createBooking);
// ✅ Route to get user's own bookings
router.get("/my", protect, getMyBookings);

module.exports = router;
