const express = require("express");

const router = express.Router();

const {
  register,
  verifyEmailOTP,
  resendVerificationOTP,
  login,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/verify-email-otp", verifyEmailOTP);
router.post("/resend-verification-otp", resendVerificationOTP);
router.post("/login", login);

module.exports = router;
