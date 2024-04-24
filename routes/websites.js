// routes/websites.js
const express = require("express");
const router = express.Router();
const Websites = require("../models/websites");

// Get all websites
router.get("/websites", async (req, res) => {
  try {
    const websites = await Websites.find();
    res.json(websites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Add more routes for CRUD operations (POST, PUT, DELETE)

module.exports = router;
