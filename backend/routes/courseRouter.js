const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/courseController");

router.get("/", controller.getAllCourses);

router.post("/enroll", auth, controller.enrollCourse);

router.get("/my-courses", auth, controller.getEnrolledCourses);

module.exports = router;