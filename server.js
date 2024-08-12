const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const dotenv = require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();
// app.use(dotenv);
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
