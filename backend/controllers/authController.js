const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");


// ===============================
// EMAIL CONFIGURATION
// ===============================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// ===============================
// JWT
// ===============================

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};


// ===============================
// REGISTER
// ===============================

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
    } = req.body;

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check existing user
    let user = await User.findOne({
      email: normalizedEmail,
    });

    // If already verified
    if (user && user.emailVerified) {
      return res.status(400).json({
        message: "An account with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Generate 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Hash OTP before storing
    const hashedOTP = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    const otpExpire = Date.now() + 2
     * 60 * 1000;

    if (user) {
      // Update unverified account
      user.name = name;
      user.password = hashedPassword;
      user.emailVerificationOTP = hashedOTP;
      user.emailVerificationExpire = otpExpire;
    } else {
      // Create new unverified user
      user = await User.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
        emailVerified: false,
        emailVerificationOTP: hashedOTP,
        emailVerificationExpire: otpExpire,
      });
    }

    await user.save();

    // Send OTP
    await transporter.sendMail({
      from: `"LearnWell" <${process.env.EMAIL_USER}>`,
      to: normalizedEmail,
      subject: "LearnWell Email Verification OTP",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #2563eb;">Welcome to LearnWell</h2>

          <p>Hello ${name},</p>

          <p>
            Thank you for creating your LearnWell account.
          </p>

          <p>
            Your email verification OTP is:
          </p>

          <h1 style="
            letter-spacing: 8px;
            color: #2563eb;
            text-align: center;
          ">
            ${otp}
          </h1>

          <p>
            This OTP will expire in <strong>2 minutes</strong>.
          </p>

          <p>
            If you did not create this account, you can ignore this email.
          </p>

          <p>
            Regards,<br>
            <strong>LearnWell Team</strong>
          </p>
        </div>
      `,
    });

    res.status(200).json({
      message: "OTP sent successfully",
      email: normalizedEmail,
    });

  } catch (error) {
    console.error("Register Error:", error);

    res.status(500).json({
      message: "Unable to send verification OTP",
    });
  }
};


// ===============================
// VERIFY EMAIL OTP
// ===============================

exports.verifyEmailOTP = async (req, res) => {
  try {
    const {
      email,
      otp,
    } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.emailVerified) {
      return res.status(400).json({
        message: "Email is already verified",
      });
    }

    // Check expiry
    if (
      !user.emailVerificationExpire ||
      user.emailVerificationExpire < Date.now()
    ) {
      return res.status(400).json({
        message: "OTP has expired",
      });
    }

    // Hash entered OTP
    const hashedOTP = crypto
      .createHash("sha256")
      .update(otp.toString())
      .digest("hex");

    // Compare
    if (hashedOTP !== user.emailVerificationOTP) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Verify email
    user.emailVerified = true;
    user.emailVerificationOTP = undefined;
    user.emailVerificationExpire = undefined;

    await user.save();

    // Generate login token
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Email verified successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || "",
        bio: user.bio || "",
      },
    });

  } catch (error) {
    console.error("Verify OTP Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};


// ===============================
// RESEND EMAIL OTP
// ===============================

exports.resendVerificationOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.emailVerified) {
      return res.status(400).json({
        message: "Email is already verified",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const hashedOTP = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    user.emailVerificationOTP = hashedOTP;
    user.emailVerificationExpire =
      Date.now() + 2  * 60 * 1000;

    await user.save();

    await transporter.sendMail({
      from: `"LearnWell" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "LearnWell Verification OTP",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>LearnWell Email Verification</h2>

          <p>Your new verification OTP is:</p>

          <h1 style="
            letter-spacing: 8px;
            color: #2563eb;
          ">
            ${otp}
          </h1>

          <p>This OTP expires in 2 minutes.</p>
        </div>
      `,
    });

    res.status(200).json({
      message: "New OTP sent successfully",
    });

  } catch (error) {
    console.error("Resend OTP Error:", error);

    res.status(500).json({
      message: "Unable to resend OTP",
    });
  }
};


// ===============================
// LOGIN
// ===============================

exports.login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Email verification required
    if (!user.emailVerified) {
      return res.status(403).json({
        message: "Please verify your email before logging in",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || "",
        bio: user.bio || "",
      },
    });

  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};