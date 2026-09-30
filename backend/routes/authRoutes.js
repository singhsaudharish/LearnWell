const express = require("express");

const router = express.Router();

const {
  register,
  verifyEmailOTP,
  resendVerificationOTP,
  login,
} = require("../controllers/authController");

// Create account
router.post("/register", register);

// Verify email OTP
router.post("/verify-email-otp", verifyEmailOTP);

// Resend email OTP
router.post("/resend-verification-otp", resendVerificationOTP);

// Login
router.post("/login", login);

module.exports = router;