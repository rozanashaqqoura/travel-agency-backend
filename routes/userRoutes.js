const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// POST → /api/admin/login
router.post('/login', loginAdmin);
// Protected Route
router.get('/secret', protect, (req, res) => {
  res.send(` 🕵️‍♀️ أهلاً مديرنا ${req.user.name}، هذه بيانات سرية! 🔐`);
});

module.exports = router;
