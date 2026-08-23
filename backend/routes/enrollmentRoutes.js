const express = require("express");
const router = express.Router();

const {
  getUserEnrollments,
} = require("../controllers/enrollmentController");

router.get("/:userId", getUserEnrollments);

module.exports = router;