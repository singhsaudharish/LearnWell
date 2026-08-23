const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    instructor: String,

    category: String,

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    price: {
      type: Number,
      default: 0,
    },

    duration: String,

    rating: {
      type: Number,
      default: 5,
    },

    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);