const User = require("../models/User");
const Trip = require("../models/Trip");
const Booking = require("../models/Booking");
const Review = require("../models/Review");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTrips = await Trip.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalReviews = await Review.countDocuments();

    // حساب معدل التقييم
    const ratings = await Review.find().select("rating");
    const totalRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    const averageRating = ratings.length ? (totalRatings / ratings.length).toFixed(1) : 0;

    res.status(200).json({
      totalUsers,
      totalTrips,
      totalBookings,
      totalReviews,
      averageRating,
    });
  } catch (error) {
    res.status(500).json({ message: "Error loading dashboard", error: error.message });
  }
};

module.exports = { getDashboardStats };
