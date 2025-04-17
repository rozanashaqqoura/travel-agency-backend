const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/adminController");
const { protect, authorize } = require("../middleware/authMiddleware");

// 📊 Route to get dashboard statistics
router.get("/dashboard", protect, authorize("admin"), getDashboardStats);

module.exports = router;
