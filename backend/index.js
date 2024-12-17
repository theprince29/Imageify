import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session, { Cookie } from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import genrateRoute from './routes/genrateRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import './config/passportConfig.js'; 



// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(cookieParser());


// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))





// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
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
// app.use('/api/dashbord')
app.use('/api/image', genrateRoute)






// Basic route for health check
app.get('/', (req, res) => {
  res.send('Welcome to Backend of Imagify.....');
});
app.get('/api', (req, res) => {
  res.send('API is runing well');
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
