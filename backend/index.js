import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
// import './config/passportConfig.js'; 



// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();



// Middleware to parse JSON
app.use(express.json());




// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));






// Initialize Express session (required for Passport.js)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'mysecret', // Make sure to use a strong secret for production
    resave: false,
    saveUninitialized: false,
  })
);





// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());






// Routes
app.use('/api/auth', authRoutes);







// Basic route for health check
app.get('/', (req, res) => {
  res.send('API is running...');
});








// Error handling middleware (for catching errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});








// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
