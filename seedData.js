// seedData.js
const sampleData = [
    {
      title: "System Copy Checklist",
      messages: [
        {
          sender: "bot",
          text: "Hello! I can help you with SAP BASIS tasks. What do you want to discuss?",
          timestamp: "17/09/2025, 10:15:30",
        },
        {
          sender: "user",
          text: "Give me steps for post-system copy activities",
          timestamp: "17/09/2025, 10:16:05",
        },
        {
          sender: "bot",
          text: "Sure! Typical post-system copy steps include:\n1. Adjust RFC destinations\n2. Check background jobs\n3. Update logical system names\n4. Run BDLS\n5. Verify licenses",
          timestamp: "17/09/2025, 10:16:40",
        },
      ],
    },
    {
      title: "Transport Issues",
      messages: [
        {
          sender: "bot",
          text: "🚨 Alert: A transport request has failed in STMS with RC=8.",
          timestamp: "17/09/2025, 12:19:50",
        },
        {
          sender: "user",
          text: "Which transport is failing?",
          timestamp: "17/09/2025, 12:20:05",
        },
        {
          sender: "bot",
          text: "Transport request DEVK900123 failed during import into QAS. RC=8 indicates a warning or error.",
          timestamp: "17/09/2025, 12:20:40",
        },
        {
          sender: "user",
          text: "Where can I see the detailed logs?",
          timestamp: "17/09/2025, 12:21:15",
        },
        {
          sender: "bot",
          text: "In STMS, go to Import Overview → double-click the request → Logs. You’ll find Action Log, Transport Log, and Object List.",
          timestamp: "17/09/2025, 12:21:50",
        },
        {
          sender: "user",
          text: "The log says 'cofile missing'. What should I do?",
          timestamp: "17/09/2025, 12:22:30",
        },
        {
          sender: "bot",
          text: "That means the cofile was not moved properly. Please check directory `/usr/sap/trans/cofiles` and ensure `K900123.DEV` exists. If missing, re-export the transport.",
          timestamp: "17/09/2025, 12:23:00",
        },
        {
          sender: "user",
          text: "After placing the cofile, can I retry the import?",
          timestamp: "17/09/2025, 12:23:40",
        },
        {
          sender: "bot",
          text: "Yes. Once both cofile and data file are in place, re-import the request via STMS. Use 'Extras → Reimport' if the system doesn’t pick it automatically.",
          timestamp: "17/09/2025, 12:24:20",
        },
        {
          sender: "user",
          text: "What if it fails again due to object locks?",
          timestamp: "17/09/2025, 12:25:05",
        },
        {
          sender: "bot",
          text: "In that case, check for conflicting transports in the logs. You may need to adjust sequence or release dependent requests first.",
          timestamp: "17/09/2025, 12:25:40",
        },
      ],
    },
    {
      title: "New Chat",
      messages: [
        {
          sender: "bot",
          text: "Hello! How can I assist you today?",
          timestamp: "19/9/2025, 14:13:08",
        },
      ],
    },
  ];
  
  module.exports = sampleData;
  