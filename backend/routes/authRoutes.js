const express = require("express");

const router = express.Router();

const {
  register,
  verifyEmailOTP,
  resendVerificationOTP,
  login,
} = require("../controllers/authController");

// Register a new account
router.post("/register", register);

// Verify email using OTP
router.post("/verify-email-otp", verifyEmailOTP);

// Resend email verification OTP
router.post("/resend-verification-otp", resendVerificationOTP);

// Login
router.post("/login", login);

module.exports = router;
