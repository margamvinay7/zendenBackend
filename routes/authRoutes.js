const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { login, register, user } = require("../controllers/authController.js");
const authMiddleware = require("../middleware/auth.js");

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

router.get("/user", user);

module.exports = router;
