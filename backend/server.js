const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRouters");
const courseRoutes = require("./routes/courseRouter");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

dotenv.config();

/* =========================
   ENV TEST
========================= */

console.log("========== ENV TEST ==========");
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log(
    "EMAIL_PASS:",
    process.env.EMAIL_PASS ? "LOADED" : "NOT LOADED"
);
console.log("==============================");

/* =========================
   DATABASE
========================= */

connectDB();

const app = express();

/* =========================
   CORS
========================= */

app.use(
    cors({
        origin: "http://localhost:8080",
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* =========================
   REQUEST LOGGER
========================= */

app.use((req, res, next) => {
    console.log("\n========== REQUEST ==========");
    console.log("METHOD:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("BODY:", req.body);
    console.log("=============================\n");

    next();
});

/* =========================
   ROUTES
========================= */

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);

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
   404 HANDLER
========================= */

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

/* =========================
   ERROR HANDLER
========================= */

app.use((err, req, res, next) => {
    console.error("========== SERVER ERROR ==========");
    console.error(err);
    console.error("==================================");

    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
});

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});