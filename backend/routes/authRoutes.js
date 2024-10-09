import express from 'express';
import { register, verifyEmail, login, requestPasswordReset, resetPassword, googleLogin, googleLoginCallback } from '../controllers/authController.js';

const router = express.Router();

// User registration and email verification
router.post('/register', register);
router.get('/verify-email', verifyEmail);
router.post('/login', login);

// Password reset
router.post('/password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

// Google OAuth routes
router.get('/auth/google', googleLogin);
router.get('/auth/google/callback', googleLoginCallback, (req, res) => {
    // On success, redirect to the desired route
    res.redirect('/dashboard');
  });

export default router;
