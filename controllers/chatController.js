const Chat = require("../models/Chat");
const { v4: uuidv4 } = require("uuid");

// ✅ Get all chats
exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Get single chat by ID
exports.getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Create a new chat
exports.createChat = async (req, res) => {
  try {
    const newChat = new Chat({
      title: req.body.title || "New Chat",
      messages: [
        {
          sender: "bot",
          text: "Hello! How can I assist you today?",
          timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false,
          }),
        },
      ],
    });

    const savedChat = await newChat.save();
    res.json(savedChat);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Add a new message to a chat
exports.addMessage = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
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
    await chat.save();

    res.json(newMessage);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Rename a chat
exports.renameChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ error: "Chat not found" });

    chat.title = req.body.title || chat.title;
    await chat.save();

    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Delete a chat
exports.deleteChat = async (req, res) => {
  try {
    const deletedChat = await Chat.findByIdAndDelete(req.params.id);
    if (!deletedChat) return res.status(404).json({ error: "Chat not found" });

    res.json({ success: true, deletedId: req.params.id });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Delete a message from a chat
exports.deleteMessage = async (req, res) => {
  try {
    const { chatId, msgIndex } = req.params;
    const chat = await Chat.findById(chatId);
    if (!chat) return res.status(404).json({ error: "Chat not found" });

    const index = parseInt(msgIndex, 10);
    if (index < 0 || index >= chat.messages.length) {
      return res.status(400).json({ error: "Invalid message index" });
    }

    chat.messages.splice(index, 1);
    await chat.save();

    res.json({ success: true, chat });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
