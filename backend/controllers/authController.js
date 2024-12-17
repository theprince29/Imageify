import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import passport from 'passport';
import { registerSchema,loginSchema } from '../middlewares/validator.js';




export const generateApiKey = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you're authenticating users
    const apiKey = uuidv4(); // Generate a unique API key

    // Save API key to the user's record
    const user = await User.findByIdAndUpdate(
      userId,
      { apiKey },
      { new: true }
    );

    res.status(200).json({ success: true, apiKey: user.apiKey });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to generate API key', error });
  }
};














// Helper to send email
const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
 

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

// REGISTER USER
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const {error,value} = registerSchema.validate({email,password,username});
    if(error)
    {
    
      return res.status(401).json({success:false, message:error.details[0].message});
    }
    const existingUser = await User.findOne({email})

    if(existingUser)
    {
      return res.status(401).json({success:false,message:"User already registered"})
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate email verification token
    const token = jwt.sign({ id: user._id }, process.env.EMAIL_SECRET, { expiresIn: '1d' });
    const verificationUrl = `${req.protocol}://${req.get('host')}/api/auth/verify-email?token=${token}`;

    // Send verification email
    await sendEmail(user.email, 'Email Verification', `Please verify your email: ${verificationUrl}`);

    res.status(201).json({ message: 'User registered successfully. Please verify your email.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.EMAIL_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(400).json({ error: 'Invalid token or user not found' });
    }

    user.status = true;
    user.verification_token = null;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate request data
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    console.error('Validation Error:', error.details[0].message);
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!user.status) {
      return res.status(403).json({ error: 'Please verify your email first' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// PASSWORD RESET REQUEST
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Generate password reset token
    const token = crypto.randomBytes(32).toString('hex');
    const resetUrl = `https://imageify-gamma.vercel.app/reset-password/${token}`;
    user.password_reset_token = token;
    user.password_reset_token_expires = Date.now() + 3600000; // 1 hour

    await user.save();

    // Send password reset email
    await sendEmail(user.email, 'Password Reset', `Please reset your password: ${resetUrl}`);

    res.status(200).json({ message: 'Password reset link sent to email' });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      password_reset_token: token,
      password_reset_token_expires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.password_reset_token = null;
    user.password_reset_token_expires = null;

    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// GOOGLE OAUTH LOGIN
export const googleLogin = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// GOOGLE OAUTH CALLBACK
export const googleOAuthCallback = (req, res) => {
  // On successful authentication via Google OAuth, redirect to a dashboard or homepage
  res.redirect('/dashboard');
};

// GOOGLE OAUTH LOGIN CALLBACK
export const googleLoginCallback = passport.authenticate('google', {
  failureRedirect: '/login', // Redirect to login page if authentication fails
  successRedirect: '/dashboard', // Redirect to dashboard if authentication succeeds
});



// user info

export const getUser = async(req, res) =>{
  const user = req.user;
  res.status(200).json({
    success: true,
    user
  })
}