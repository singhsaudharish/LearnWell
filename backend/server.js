require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRouters");
const courseRoutes = require("./routes/courseRouter");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

/* =========================
   CORS
========================= */

const allowedOrigins = [
  "https://learn-well-rho.vercel.app",
  "http://localhost:8080",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an Origin header
      // such as Postman/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Explicitly handle preflight requests
app.options("*", cors());

/* =========================
   Middleware
========================= */

app.use(express.json());
app.use(cookieParser());

/* =========================
   Routes
========================= */

app.get("/", (req, res) => {
  res.status(200).json({
    message: "LearnWell Backend API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/feedback", feedbackRoutes);

/* =========================
   Error Handler
========================= */

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

/* =========================
   Database + Server
========================= */

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();

module.exports = app;
