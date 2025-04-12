const app = require('./app'); // Call the application
const connectDB = require('./config/db'); // database connection call

connectDB(); // Connect to the database

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 The server is running on port${PORT}`);
});
