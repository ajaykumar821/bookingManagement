const express = require("express");
const router = express.Router();
const db = require("../db");

// Create booking
router.post("/", (req, res) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO bookings (name, date) VALUES (?, ?)";
  db.query(sql, [name, date], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Booking created" });
  });
});

// Get all bookings
router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
