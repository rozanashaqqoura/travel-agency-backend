# 🧳 Travel Agency Backend API

A RESTful API for managing tour packages, user accounts, bookings, and payments for a travel agency platform.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- RESTful API
- Postman

 ✨ Key Features

- ✅ User authentication & role-based access (Admin / User)
- ✅ Tour management (Create, update, delete, list tours)
- ✅ Booking system with real-time availability
- ✅ JWT-secured routes for protected resources
- ✅ Payment support (Visa / USDT - demo flow)
- ✅ Error handling middleware & validation

 📁 Project Structure
 project-root/
├── controllers/
├── routes/
├── models/
├── middleware/
├── server.js
└── .env.example

 🔐 Authentication

- JWT-based login system
- Token must be passed in `Authorization` header:

  
## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/rozanashaqqoura/travel-agency-backend.git

# Navigate to project folder
cd travel-agency-backend

# Install dependencies
npm install

# Create a .env file and add:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

# Start development server
npm run dev



