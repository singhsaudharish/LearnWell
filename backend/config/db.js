const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }

    if (mongoose.connection.readyState === 1) {
      return;
    }

    if (mongoose.connection.readyState === 2) {
      await mongoose.connection.asPromise();
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDB;
