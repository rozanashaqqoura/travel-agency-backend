const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config(); // ✅ We must call for environmental variables.
const protect = async (req, res, next) => {
  let token;

  // Check the token is in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // We take the token
      token = req.headers.authorization.split(' ')[1];

     // We verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //We retrieve user information from the database (without the password)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Complete the route
    } catch (error) {
      res.status(401).json({ message: 'Invalid token⛔' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No entry, no token⛔' });
  }
};

module.exports = { protect };
