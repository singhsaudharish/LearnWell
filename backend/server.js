require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const feedbackRoutes = require("./routes/feedbackRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRouters");
const courseRoutes = require("./routes/courseRouter");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const app = express();

/* =========================
   CORS
========================= */

const allowedOrigins = [
  "http://localhost:8080",
  "https://learn-well-rho.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
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

app.options("*", cors());
/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* =========================
   DATABASE
========================= */

connectDB();

/* =========================
   REQUEST LOGGER
========================= */

app.use((req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.originalUrl);
  next();
});

/* =========================
   ROUTES
========================= */

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/feedback", feedbackRoutes);

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LearnWell API is running",
  });
});

/* =========================
   404
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

/* =========================
   ERROR
========================= */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/* =========================
   VERCEL
========================= */

module.exports = app;

/* =========================
   LOCAL DEVELOPMENT
========================= */

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}