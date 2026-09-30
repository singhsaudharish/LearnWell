
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');

// Configure Nodemailer (Use your real SMTP details here)
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 1. REGISTER AN ACCOUNT
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex'); // Generate token

    user = new User({
      email,
      password: hashedPassword,
      verificationToken: token
    });

    await user.save();

    // Send Verification Email
    const verificationUrl = `http://localhost:3000/verify-email?token=${token}`;
    await transporter.sendMail({
      to: email,
      subject: "Verify your email address",
      html: `<h3>Welcome!</h3><p>Please click the link below to verify your account:</p><a href="${verificationUrl}">${verificationUrl}</a>`
    });

    res.status(201).json({ msg: "Registration successful. Please check your email to verify your account." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. VERIFY EMAIL TOKEN
router.get('/verify-email', async (req, res) => {
  try {
    const { token } = req.query;
    const user = await User.findOne({ verificationToken: token });

    if (!user) return res.status(400).json({ msg: "Invalid or expired token." });

    user.isVerified = true;
    user.verificationToken = undefined; // Clear token once verified
    await user.save();

    res.json({ msg: "Email successfully verified! You can now log in." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    if (!user.isVerified) return res.status(401).json({ msg: "Please verify your email before logging in." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Optional: Return a JWT Token here for session preservation
    res.json({ msg: "Login successful!", user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
