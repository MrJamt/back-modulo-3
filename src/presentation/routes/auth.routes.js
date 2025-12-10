const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const asyncHandler = require("../utils/async.handler");

// @route   POST api/v1/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post("/login", asyncHandler(authController.login));

module.exports = router;
