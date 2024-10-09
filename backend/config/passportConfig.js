import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.model.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Ensure this is set
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Ensure this is set
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
        });

        await newUser.save();
        done(null, newUser);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
