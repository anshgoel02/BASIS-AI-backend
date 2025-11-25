const { fetchRecentEmails, fetchEmailsFromYesterday } = require("../services/graphService");
const Chat = require("../models/Chat");

exports.fetchAndStoreEmails = async (req, res) => {
  try {
    const { userId, accessToken } = req.body;
    const emails = await fetchRecentEmails(userId, accessToken);

    for (const email of emails) {
      const appName = detectApp(email.subject || email.bodyPreview); // custom classifier
      if (!appName) continue;
      console.log(appName);

      await Chat.create({
        title: email.subject,
        appName,
        messages: [
          {
            sender: "bot",
            text: email.bodyPreview,
            timestamp: email.receivedDateTime,
          },
        ],
      });
    }

    
    res.json({ success: true, inserted: emails.length });
  } catch (err) {
    console.error("Error fetching emails:", err);
    res.status(500).json({ error: "Failed to fetch emails" });
  }
};

exports.getYesterdayEmails = async (req, res) => {
  try {
    const { userId, accessToken, senderEmail } = req.body;

    if (!userId || !accessToken) {
      return res.status(400).json({
        error: "userId and accessToken are required",
      });
    }

    const emails = await fetchEmailsFromYesterday(userId, accessToken, senderEmail);

    res.json({
      success: true,
      count: emails.length,
      emails,
    });
  } catch (err) {
    console.error("Error fetching yesterday emails:", err);
    res.status(500).json({
      error: "Failed to fetch emails",
      details: err.message,
    });
  }
};

function detectApp(text) {
  const lower = text.toLowerCase();
  if (lower.includes("signavio")) return "Signavio";
  if (lower.includes("datasphere")) return "Datasphere";
  if (lower.includes("hana")) return "HANA Cloud";
  if (lower.includes("integration")) return "Integration Suite";
  if (lower.includes("build")) return "Build Apps";
  return null;
}
