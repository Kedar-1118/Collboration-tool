const express = require("express");
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).json({ message: "Username already exists" });

        const user = new User({ username, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(201).json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
