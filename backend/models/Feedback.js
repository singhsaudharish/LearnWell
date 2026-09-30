const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    overallFeedback: {
      type: String,
      required: true,
      trim: true,
    },

    likedMost: {
      type: String,
      default: "",
      trim: true,
    },

    improvements: {
      type: String,
      default: "",
      trim: true,
    },

    newFeatures: {
      type: String,
      default: "",
      trim: true,
    },

    suggestions: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);