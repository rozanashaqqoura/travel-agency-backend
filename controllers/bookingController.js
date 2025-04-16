const Booking = require('../models/Booking');
const Trip = require('../models/Trip');

// ✳️Create a new reservation
const createBooking = async (req, res) => {
  try {
    const { tripId, seats } = req.body;

    // 🔎 We check the flight availability
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: "The flight does not exist" });
    }

    // 🧠We calculate the total price.
    const totalPrice = trip.price * seats;

    // ✅We create the reservation
    const booking = await Booking.create({
      user: req.user._id, 
      trip: tripId,
      seats,
      totalPrice,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation', error: error.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("trip"); // نجيب الرحلات المرتبطة
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bookings", error: error.message });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
};

