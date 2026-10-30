const express = require("express");

const router = express.Router();

const {
  register,
  verifyEmailOTP,
  resendVerificationOTP,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

// Register a new account
router.post("/register", register);

// Verify email using OTP
router.post("/verify-email-otp", verifyEmailOTP);

// Resend email verification OTP
router.post("/resend-verification-otp", resendVerificationOTP);

// Login
router.post("/login", login);

// Forgot password
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
