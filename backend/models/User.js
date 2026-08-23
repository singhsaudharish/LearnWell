const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    emailVerified: {
        type: Boolean,
        default: false
    },

    emailVerificationOTP: {
        type: String,
        default: null
    },

    emailVerificationOTPExpire: {
        type: Date,
        default: null
    },

    resetPasswordOTP: {
        type: String,
        default: null
    },

    resetPasswordOTPExpire: {
        type: Date,
        default: null
    },

    avatar: {
        type: String,
        default: ""
    },

    bio: {
        type: String,
        default: ""
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);