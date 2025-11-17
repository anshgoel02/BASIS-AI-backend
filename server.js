// const mongoose = require("mongoose");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const chatRoutes = require("./routes/chatRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Routes
app.use("/chats", chatRoutes);
app.use("/emails", emailRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI, {})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
