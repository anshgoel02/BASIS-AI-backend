const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.get("/", chatController.getAllChats);
// router.get("/seed", chatController.seedChats); // Temporary seed route
router.get("/:id", chatController.getChatById);
router.post("/", chatController.createChat);
router.post("/:id/messages", chatController.addMessage);
router.put("/:id", chatController.renameChat);
router.delete("/:id", chatController.deleteChat);
router.delete("/:chatId/messages/:msgIndex", chatController.deleteMessage);

module.exports = router;
