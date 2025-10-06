module.exports = [
  // ---------------- SIGNAVIO ----------------
  {
    title: "Signavio Planned Maintenance",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "There is a planned maintenance for Signavio scheduled on 12th October from 1:00 AM to 3:00 AM IST.", timestamp: "2025-10-04 09:30" },
      { sender: "user", text: "Will the process manager be available during that time?", timestamp: "2025-10-04 09:31" },
      { sender: "bot", text: "No, the Process Manager and Collaboration Hub will be unavailable during the maintenance window.", timestamp: "2025-10-04 09:32" },
      { sender: "user", text: "Is there any expected downtime after that?", timestamp: "2025-10-04 09:33" },
      { sender: "bot", text: "No additional downtime expected. All services will resume immediately post maintenance.", timestamp: "2025-10-04 09:34" },
      { sender: "user", text: "Thanks for confirming!", timestamp: "2025-10-04 09:35" },
    ],
  },
  {
    title: "Signavio New Feature Rollout",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "A new version of Signavio Collaboration Hub (v23.4) will be rolled out next week.", timestamp: "2025-10-03 08:00" },
      { sender: "user", text: "What’s included in this release?", timestamp: "2025-10-03 08:01" },
      { sender: "bot", text: "This release introduces improved reporting dashboards and a new BPMN compliance validator.", timestamp: "2025-10-03 08:02" },
      { sender: "user", text: "Any downtime required?", timestamp: "2025-10-03 08:03" },
      { sender: "bot", text: "No downtime — the update will be deployed seamlessly.", timestamp: "2025-10-03 08:04" },
      { sender: "user", text: "Perfect. Please notify once deployed.", timestamp: "2025-10-03 08:05" },
    ],
  },
  {
    title: "Signavio Performance Degradation",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "We are investigating a temporary slowdown in Signavio Collaboration Hub.", timestamp: "2025-10-05 13:00" },
      { sender: "user", text: "Is this affecting model exports?", timestamp: "2025-10-05 13:01" },
      { sender: "bot", text: "Yes, exports might take longer than usual. The issue is linked to a background process overload.", timestamp: "2025-10-05 13:02" },
      { sender: "user", text: "Any ETA for resolution?", timestamp: "2025-10-05 13:03" },
      { sender: "bot", text: "Engineers estimate resolution within 1 hour.", timestamp: "2025-10-05 13:04" },
      { sender: "user", text: "Please keep me posted.", timestamp: "2025-10-05 13:05" },
    ],
  },

  // ---------------- DATASPHERE ----------------
  {
    title: "Datasphere Connection Timeout Issue",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Datasphere users may experience connection timeouts to remote HANA Cloud systems.", timestamp: "2025-10-04 10:00" },
      { sender: "user", text: "Which regions are impacted?", timestamp: "2025-10-04 10:01" },
      { sender: "bot", text: "Only EU10 and US East regions are affected.", timestamp: "2025-10-04 10:02" },
      { sender: "user", text: "Are data pipelines still running?", timestamp: "2025-10-04 10:03" },
      { sender: "bot", text: "Pipelines are paused automatically until the issue is resolved.", timestamp: "2025-10-04 10:04" },
      { sender: "user", text: "Got it. Please alert when stable.", timestamp: "2025-10-04 10:05" },
    ],
  },
  {
    title: "Datasphere Upgrade Notice",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Scheduled upgrade for SAP Datasphere on 11th October, 2:00–4:00 AM UTC.", timestamp: "2025-10-05 14:00" },
      { sender: "user", text: "Will it affect live data replication?", timestamp: "2025-10-05 14:01" },
      { sender: "bot", text: "Yes, replication will be paused briefly during the upgrade window.", timestamp: "2025-10-05 14:02" },
      { sender: "user", text: "Will I need to restart pipelines?", timestamp: "2025-10-05 14:03" },
      { sender: "bot", text: "No manual restart required — they’ll resume automatically post-upgrade.", timestamp: "2025-10-05 14:04" },
      { sender: "user", text: "Perfect, thanks!", timestamp: "2025-10-05 14:05" },
    ],
  },
  {
    title: "Datasphere New Feature - Lineage Graphs",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Datasphere now supports visual lineage graphs for data flows.", timestamp: "2025-10-02 16:00" },
      { sender: "user", text: "That’s great! Is it available for all tenants?", timestamp: "2025-10-02 16:01" },
      { sender: "bot", text: "Yes, the rollout is complete across all regions.", timestamp: "2025-10-02 16:02" },
      { sender: "user", text: "Any training materials available?", timestamp: "2025-10-02 16:03" },
      { sender: "bot", text: "You can find the guide in SAP Help Portal under Datasphere > Features > Lineage Graphs.", timestamp: "2025-10-02 16:04" },
      { sender: "user", text: "Thanks for sharing!", timestamp: "2025-10-02 16:05" },
    ],
  },

  // ---------------- HANA CLOUD ----------------
  {
    title: "HANA Cloud Backup Success Alert",
    appName: "HANA Cloud",
    messages: [
      { sender: "bot", text: "Nightly backup for your HANA Cloud instance completed successfully.", timestamp: "2025-10-05 02:00" },
      { sender: "user", text: "Can I check backup logs?", timestamp: "2025-10-05 02:01" },
      { sender: "bot", text: "Yes, navigate to the Backup tab in HANA Cloud Central to view detailed logs.", timestamp: "2025-10-05 02:02" },
      { sender: "user", text: "Great, thank you.", timestamp: "2025-10-05 02:03" },
      { sender: "bot", text: "You're welcome! All backups are retained for 30 days.", timestamp: "2025-10-05 02:04" },
    ],
  },
  {
    title: "HANA Cloud CPU Utilization Alert",
    appName: "HANA Cloud",
    messages: [
      { sender: "bot", text: "High CPU utilization detected (>85%) on instance EU10-HC01.", timestamp: "2025-10-05 10:00" },
      { sender: "user", text: "Which workload is causing it?", timestamp: "2025-10-05 10:01" },
      { sender: "bot", text: "The workload trace shows heavy query execution from Datasphere connector.", timestamp: "2025-10-05 10:02" },
      { sender: "user", text: "Should I terminate it?", timestamp: "2025-10-05 10:03" },
      { sender: "bot", text: "Yes, consider limiting query concurrency to reduce load.", timestamp: "2025-10-05 10:04" },
      { sender: "user", text: "Done. CPU looks stable now.", timestamp: "2025-10-05 10:05" },
    ],
  },

  // ---------------- INTEGRATION SUITE ----------------
  {
    title: "Integration Suite Tenant Maintenance",
    appName: "Integration Suite",
    messages: [
      { sender: "bot", text: "Scheduled tenant maintenance for Integration Suite EU10 on 14th October 12:00–2:00 AM UTC.", timestamp: "2025-10-04 09:00" },
      { sender: "user", text: "Will deployed iflows be impacted?", timestamp: "2025-10-04 09:01" },
      { sender: "bot", text: "All deployed iflows will remain paused during maintenance.", timestamp: "2025-10-04 09:02" },
      { sender: "user", text: "Do I need to redeploy them?", timestamp: "2025-10-04 09:03" },
      { sender: "bot", text: "No redeployment needed. They resume automatically post-maintenance.", timestamp: "2025-10-04 09:04" },
      { sender: "user", text: "Thanks for the heads-up.", timestamp: "2025-10-04 09:05" },
    ],
  },
  {
    title: "Integration Suite API Latency Warning",
    appName: "Integration Suite",
    messages: [
      { sender: "bot", text: "Monitoring detected increased API latency (>500ms) in US East region.", timestamp: "2025-10-05 06:00" },
      { sender: "user", text: "Are message queues affected?", timestamp: "2025-10-05 06:01" },
      { sender: "bot", text: "Message queues are stable. Only response times are delayed.", timestamp: "2025-10-05 06:02" },
      { sender: "user", text: "ETA for normalization?", timestamp: "2025-10-05 06:03" },
      { sender: "bot", text: "Latency expected to normalize within the next 45 minutes.", timestamp: "2025-10-05 06:04" },
      { sender: "user", text: "Alright, will monitor.", timestamp: "2025-10-05 06:05" },
    ],
  },

  // ---------------- BUILD APPS ----------------
  {
    title: "Build Apps Deployment Issue",
    appName: "Build Apps",
    messages: [
      { sender: "bot", text: "Some users are experiencing failures when deploying Build Apps to BTP subaccounts.", timestamp: "2025-10-05 07:00" },
      { sender: "user", text: "Is there a workaround?", timestamp: "2025-10-05 07:01" },
      { sender: "bot", text: "Yes, redeploying from a fresh build resolves it temporarily.", timestamp: "2025-10-05 07:02" },
      { sender: "user", text: "Thanks, will try that.", timestamp: "2025-10-05 07:03" },
      { sender: "bot", text: "SAP engineering team is already working on a permanent fix.", timestamp: "2025-10-05 07:04" },
      { sender: "user", text: "Please notify once fixed.", timestamp: "2025-10-05 07:05" },
    ],
  },
  {
    title: "Build Apps UI Builder Update",
    appName: "Build Apps",
    messages: [
      { sender: "bot", text: "New UI Builder version released with improved drag-and-drop elements.", timestamp: "2025-10-02 11:00" },
      { sender: "user", text: "Is this backward compatible?", timestamp: "2025-10-02 11:01" },
      { sender: "bot", text: "Yes, all existing projects will continue to function normally.", timestamp: "2025-10-02 11:02" },
      { sender: "user", text: "Any changes to preview behavior?", timestamp: "2025-10-02 11:03" },
      { sender: "bot", text: "Yes, faster previews and live refresh added.", timestamp: "2025-10-02 11:04" },
      { sender: "user", text: "Nice!", timestamp: "2025-10-02 11:05" },
    ],
  },

  // ---------------- ANALYTICS CLOUD ----------------
  {
    title: "Analytics Cloud Scheduled Downtime",
    appName: "Analytics Cloud",
    messages: [
      { sender: "bot", text: "SAP Analytics Cloud will undergo scheduled maintenance on 13th Oct, 1:00–3:00 AM UTC.", timestamp: "2025-10-05 12:00" },
      { sender: "user", text: "Will reports be accessible?", timestamp: "2025-10-05 12:01" },
      { sender: "bot", text: "No, the service will be temporarily unavailable during that period.", timestamp: "2025-10-05 12:02" },
      { sender: "user", text: "Any updates after completion?", timestamp: "2025-10-05 12:03" },
      { sender: "bot", text: "Yes, notifications will be sent once it’s back online.", timestamp: "2025-10-05 12:04" },
      { sender: "user", text: "Thanks.", timestamp: "2025-10-05 12:05" },
    ],
  },
  {
    title: "Analytics Cloud Data Refresh Delay",
    appName: "Analytics Cloud",
    messages: [
      { sender: "bot", text: "Data refresh delays observed for live connections to HANA Cloud.", timestamp: "2025-10-05 15:00" },
      { sender: "user", text: "Is this related to the recent patch?", timestamp: "2025-10-05 15:01" },
      { sender: "bot", text: "Yes, caching mechanism is being optimized post-patch.", timestamp: "2025-10-05 15:02" },
      { sender: "user", text: "When expected to normalize?", timestamp: "2025-10-05 15:03" },
      { sender: "bot", text: "Within the next 2 hours.", timestamp: "2025-10-05 15:04" },
      { sender: "user", text: "Thanks for the quick update.", timestamp: "2025-10-05 15:05" },
    ],
  },
];
