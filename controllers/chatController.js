const Chat = require("../models/Chat");
const sampleData = require("../seedData");


// 🚀 Temporary seed route
exports.seedChats = async (req, res) => {
  try {
    // Step 1: Clear existing chats
    await Chat.deleteMany({});
    console.log("Old chat data cleared ✅");

    // Step 2: Insert new sample data
    const insertedChats = await Chat.insertMany(sampleData);
    console.log(`Inserted ${insertedChats.length} chats ✅`);

    // Step 3: Group inserted chats by application for clarity in response
    const groupedByApp = insertedChats.reduce((acc, chat) => {
      const app = chat.application || "Unknown";
      if (!acc[app]) acc[app] = [];
      acc[app].push({
        _id: chat._id,
        title: chat.title,
        messageCount: chat.messages.length,
      });
      return acc;
    }, {});

    // Step 4: Send structured response
    res.json({
      success: true,
      totalInserted: insertedChats.length,
      groupedByApp,
    });

  } catch (err) {
    console.error("❌ Error seeding database:", err);
    res.status(500).json({ error: "Failed to seed database" });
  }
};

exports.getAppsSummary = async (req, res) => {
  try {
    const summary = await Chat.aggregate([
      {
        $group: {
          _id: "$appName",
          totalNotifications: { $sum: 1 },
          totalMessages: { $sum: { $size: "$messages" } },
          lastUpdated: { $max: "$updatedAt" },
        },
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(summary);
  } catch (err) {
    console.error("Error fetching apps summary:", err);
    res.status(500).json({ error: "Failed to fetch app summary" });
  }
};


// ✅ Get all chats
exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get Chat by App
exports.getChatsByApp = async (req, res) => {
  try {
    const { appName } = req.params;
    const chats = await Chat.find({ appName });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chats" });
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
      appName: req.body.appName,
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
