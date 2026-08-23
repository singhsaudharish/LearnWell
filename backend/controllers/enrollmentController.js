const Enrollment = require("../models/Enrollment");

exports.getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      user: req.params.userId,
    }).populate("course");

    res.json(enrollments);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};