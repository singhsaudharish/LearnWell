const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res) => {
  try {
    const {
      rating,
      overallFeedback,
      likedMost,
      improvements,
      newFeatures,
      suggestions,
    } = req.body;

    if (!rating || !overallFeedback?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Rating and overall feedback are required",
      });
    }

    const feedback = await Feedback.create({
      user: req.body.user || null,
      name: req.body.name || "",
      email: req.body.email || "",
      rating,
      overallFeedback,
      likedMost: likedMost || "",
      improvements: improvements || "",
      newFeatures: newFeatures || "",
      suggestions: suggestions || "",
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    console.error("Feedback error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
};

module.exports = { submitFeedback };