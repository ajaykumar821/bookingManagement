const express = require("express");
const cors = require("cors");
const bookingsRoutes = require("./routes/booking");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingsRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
