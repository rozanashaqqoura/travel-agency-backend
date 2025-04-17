const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const testRoutes = require('./routes/test');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const bookingRoutes = require("./routes/bookingRoutes");
const userClientRoutes = require('./routes/userClientRoutes');
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");




dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Routesgit add .

app.get('/', (req, res) => {
  res.send('🎉 The server is up and running!');
});
app.use('/api/test', testRoutes);
app.use('/api/admin', userRoutes);
app.use('/api/trips', tripRoutes);
app.use("/api/bookings", bookingRoutes);
app.use('/api/users', userClientRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);





module.exports = app;
