const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const { time } = require("console");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const app = express();
const CHATS_FILE = path.join(__dirname, "chats.json");

// app.use(cors({
//   origin: "https://basis-ai-frontend.onrender.com",
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// app.options("*", cors({
//   origin: "https://basis-ai-frontend.onrender.com",
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

// Handle OPTIONS requests globally
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    // res.header("Access-Control-Allow-Origin", "https://basis-ai-frontend.onrender.com");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    return res.sendStatus(204);
  }
  next();
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 10000;
// const mongoURI = process.env.MONGO_URI;

const readChats = () => {
  if (!fs.existsSync(CHATS_FILE)) return [];
  return JSON.parse(fs.readFileSync(CHATS_FILE, "utf-8") || "[]");
}

const writeChats = (chats) => {
  fs.writeFileSync(CHATS_FILE, JSON.stringify(chats, null, 2));
}


// Get all messages
app.get("/messages", (req, res) => {
  res.json(readMessages());
});

// Get all chats
app.get("/chats", (req, res) => {
  console.log(res.data);
  res.json(readChats());
});

// Get messages for a specific chat
app.get("/chats/:id", (req, res) => {
  const chats = readChats();
  const chat = chats.find(c => c.id === req.params.id);
  if (!chat) return res.status(404).json({ error: "Chat not found" });
  res.json(chat);
});

// Add a new message to a chat
app.post("/chats/:id/messages", (req, res) => {
  const chats = readChats();
  const chat = chats.find(c => c.id === req.params.id);
  if (!chat) return res.status(404).json({ error: "Chat not found" });

  const newMessage = {
    sender: req.body.sender,
    text: req.body.text,
    timestamp: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: false,
    }),
  };

  chat.messages.push(newMessage);
  writeChats(chats);
  res.json(newMessage);
});

// Create a new chat
app.post("/chats", (req, res) => {
  const chats = readChats();
  const newChat = {
    id: uuidv4(),
    title: req.body.title || "New Chat",
    messages: [ {
      sender: "bot",
      text: "Hello! How can I assist you today?",
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
      }),
    } ]
  };
  chats.push(newChat);
  writeChats(chats);
  res.json(newChat);
});

// Rename a chat
app.put("/chats/:id", (req, res) => {
  const chats = readChats();
  const chat = chats.find(c => c.id === req.params.id);
  if (!chat) return res.status(404).json({ error: "Chat not found" });

  chat.title = req.body.title || chat.title;
  writeChats(chats);
  res.json(chat);
});

// Delete a chat
app.delete("/chats/:id", (req, res) => {
  let chats = readChats();
  const chatExists = chats.some(c => c.id === req.params.id);
  if (!chatExists) return res.status(404).json({ error: "Chat not found" });

  chats = chats.filter(c => c.id !== req.params.id);
  writeChats(chats);
  res.json({ success: true, deletedId: req.params.id });
});


// Add a new message
app.post("/messages", (req, res) => {
  let newMessage = req.body; // { sender: "user" | "bot", text: "..." }

  const indiaTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false, // or true if you want AM/PM
  });

  // Add timestamp
  newMessage = {
    ...newMessage,
    timestamp: indiaTime
  };

  const messages = readMessages();
  // const messages = JSON.parse(data);
  messages.push(newMessage);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  res.json({ success: true, message: newMessage });
});

// Delete a message from a chat
app.delete("/chats/:chatId/messages/:msgIndex", (req, res) => {
  const chats = readChats();
  const chat = chats.find(c => c.id === req.params.chatId);
  if (!chat) return res.status(404).json({ error: "Chat not found" });

  const msgIndex = parseInt(req.params.msgIndex, 10);
  if (msgIndex < 0 || msgIndex >= chat.messages.length) {
    return res.status(400).json({ error: "Invalid message index" });
  }

  chat.messages.splice(msgIndex, 1); // remove message
  writeChats(chats);

  res.json({ success: true, chat });
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
