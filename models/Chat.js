const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // "user" | "bot"
  text: { type: String, required: true },
  timestamp: { type: String, required: true }
});

const chatSchema = new mongoose.Schema({
  title: { type: String, default: "New Chat" },
  messages: [messageSchema]
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);
