const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "test",
  database: "booking_db",
});

module.exports = db;
