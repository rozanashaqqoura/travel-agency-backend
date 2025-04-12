const mongoose = require('mongoose');

// ✳️ Trip itinerary
const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Flight name is mandatory
  },
  description: {
    type: String,
    required: true, // Trip description
  },
  destination: {
    type: String,
    required: true, //Destination (eg: Luxor)
  },
  price: {
    type: Number,
    required: true, // the price
  },
  duration: {
    type: String, // Example: "5 days / 4 nights"
    required: true,
  },
  image: {
    type: String, // Trip photo link
    required: true,
  },
  availableDates: [
    {
      type: Date, // Travel dates
    },
  ],
  type: {
    type: String, // Trip type (family, adventure, cultural...)
    required: true,
  },
}, {
  timestamps: true // Automatically adds creation and update date.
});

// ✳️ Create the model and link it to the schema
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
