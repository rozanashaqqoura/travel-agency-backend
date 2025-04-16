const Review = require("../models/Review");

const addReview = async (req, res) => {
  try {
    const { trip, rating, comment } = req.body;

    const review = await Review.create({
      user: req.user._id,
      trip,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Failed to add review", error: error.message });
  }
};

const getTripReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ trip: req.params.tripId })
      .populate("user", "name") // عرض اسم المستخدم
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to get reviews", error: error.message });
  }
};

module.exports = { addReview, getTripReviews };
