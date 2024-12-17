import express from "express";
import {
  register,
  verifyEmail,
  login,
  requestPasswordReset,
  resetPassword,
  googleLogin,
  googleLoginCallback,
} from "../controllers/authController.js";
import apiKeyMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

// User registration and email verification
router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", login);

// Password reset
router.post("/password-reset", requestPasswordReset);
router.post("/reset-password/:token", resetPassword);

// Google OAuth routes
router.get("/auth/google", googleLogin);
router.get("/auth/google/callback", googleLoginCallback, (req, res) => {
  // On success, redirect to the desired route
  res.redirect("/dashboard");
});

router.get("/dashboard/usage", apiKeyMiddleware, async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      usage: user.usageCount,
      limit: user.usageLimit,
      remaining: user.usageLimit - user.usageCount,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve usage", error });
  }
});

export default router;
