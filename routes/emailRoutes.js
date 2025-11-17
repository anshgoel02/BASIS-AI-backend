const express = require("express");
const router = express.Router();
const { fetchAndStoreEmails, getYesterdayEmails } = require("../controllers/emailController");

router.post("/fetch", fetchAndStoreEmails);
router.post("/yesterday", getYesterdayEmails);

module.exports = router;
