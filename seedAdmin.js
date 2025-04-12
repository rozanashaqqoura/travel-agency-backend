const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const admin = new User({
      name: 'روزانة',
      email: 'admin@travel.com',
      password: '123456',
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Director Rozana has been added');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err);
  });
