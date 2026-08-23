const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const exists = await Enrollment.findOne({
      user: req.user._id,
      course: courseId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Already enrolled",
      });
    }

    const enrollment = await Enrollment.create({
      user: req.user._id,
      course: courseId,
    });

    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const courses = await Enrollment.find({
      user: req.user._id,
    }).populate("course");

    res.json(courses);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};