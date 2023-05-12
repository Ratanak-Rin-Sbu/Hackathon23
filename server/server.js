const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
app.use(cors());
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/auth", authRoutes);
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
