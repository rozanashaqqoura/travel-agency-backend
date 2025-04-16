const express = require("express");
const router = express.Router();
const { addReview, getTripReviews } = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addReview); // يضيف تقييم
router.get("/:tripId", getTripReviews); // يعرض تقييمات الرحلة

module.exports = router;
