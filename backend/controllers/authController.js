const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* Register */
const register = async (req, res) => {
    try {
        res.json({ message: "Register API" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Login */
const login = async (req, res) => {
    try {
        res.json({ message: "Login API" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Forgot Password */
const forgotPassword = async (req, res) => {
    try {
        res.json({ message: "Forgot Password API" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Reset Password */
const resetPassword = async (req, res) => {
    try {
        res.json({ message: "Reset Password API" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
};