module.exports = [
  // ---------------- SIGNAVIO ----------------
  {
    title: "Signavio Process Insights Service Restoration",
    appName: "Signavio",
    messages: [
      {
        sender: "bot",
        text: "Dear customer, the disruption reported previously for SAP Signavio Process Insights has been resolved.",
        timestamp: "25/09/2025, 10:00:00",
      },
      {
        sender: "user",
        text: "What caused the disruption?",
        timestamp: "25/09/2025, 10:01:00",
      },
      {
        sender: "bot",
        text: "SAP technical teams identified that the issue originated from the raw data receiver component, which was returning an HTTP Server Error 404.",
        timestamp: "25/09/2025, 10:02:00",
      },
      {
        sender: "user",
        text: "Was it fixed permanently or just a temporary workaround?",
        timestamp: "25/09/2025, 10:03:00",
      },
      {
        sender: "bot",
        text: "The root cause was addressed by correcting the component error and restoring the raw data receiver’s functionality. The fix is permanent.",
        timestamp: "25/09/2025, 10:04:00",
      },
      {
        sender: "user",
        text: "Is everything operational now?",
        timestamp: "25/09/2025, 10:05:00",
      },
      {
        sender: "bot",
        text: "Yes, all systems are now working as expected. Continuous monitoring is in place to ensure stability.",
        timestamp: "25/09/2025, 10:06:00",
      },
      {
        sender: "user",
        text: "Thanks for the quick resolution.",
        timestamp: "25/09/2025, 10:07:00",
      },
    ],
  },
  {
    title: "Signavio Planned Maintenance",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "There is a planned maintenance for Signavio scheduled on 12th October from 1:00 AM to 3:00 AM IST.", timestamp: "04/10/2025, 09:30:00" },
      { sender: "user", text: "Will the process manager be available during that time?", timestamp: "04/10/2025, 09:31:00" },
      { sender: "bot", text: "No, the Process Manager and Collaboration Hub will be unavailable during the maintenance window.", timestamp: "04/10/2025, 09:32:00" },
      { sender: "user", text: "Is there any expected downtime after that?", timestamp: "04/10/2025, 09:33:00" },
      { sender: "bot", text: "No additional downtime expected. All services will resume immediately post maintenance.", timestamp: "04/10/2025, 09:34:00" },
      { sender: "user", text: "Thanks for confirming!", timestamp: "04/10/2025, 09:35:00" },
    ],
  },
  {
    title: "Signavio New Feature Rollout",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "A new version of Signavio Collaboration Hub (v23.4) will be rolled out next week.", timestamp: "03/10/2025, 08:00:00" },
      { sender: "user", text: "What’s included in this release?", timestamp: "03/10/2025, 08:01:00" },
      { sender: "bot", text: "This release introduces improved reporting dashboards and a new BPMN compliance validator.", timestamp: "03/10/2025, 08:02:00" },
      { sender: "user", text: "Any downtime required?", timestamp: "03/10/2025, 08:03:00" },
      { sender: "bot", text: "No downtime — the update will be deployed seamlessly.", timestamp: "03/10/2025, 08:04:00" },
      { sender: "user", text: "Perfect. Please notify once deployed.", timestamp: "03/10/2025, 08:05:00" },
    ],
  },
  {
    title: "Signavio Performance Degradation",
    appName: "Signavio",
    messages: [
      { sender: "bot", text: "We are investigating a temporary slowdown in Signavio Collaboration Hub.", timestamp: "05/10/2025, 13:00:00" },
      { sender: "user", text: "Is this affecting model exports?", timestamp: "05/10/2025, 13:01:00" },
      { sender: "bot", text: "Yes, exports might take longer than usual. The issue is linked to a background process overload.", timestamp: "05/10/2025, 13:02:00" },
      { sender: "user", text: "Any ETA for resolution?", timestamp: "05/10/2025, 13:03:00" },
      { sender: "bot", text: "Engineers estimate resolution within 1 hour.", timestamp: "05/10/2025, 13:04:00" },
      { sender: "user", text: "Please keep me posted.", timestamp: "05/10/2025, 13:05:00" },
    ],
  },

  // ---------------- DATASPHERE ----------------
  {
    title: "Datasphere Connection Timeout Issue",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Datasphere users may experience connection timeouts to remote HANA Cloud systems.", timestamp: "04/10/2025, 10:00:00" },
      { sender: "user", text: "Which regions are impacted?", timestamp: "04/10/2025, 10:01:00" },
      { sender: "bot", text: "Only EU10 and US East regions are affected.", timestamp: "04/10/2025, 10:02:00" },
      { sender: "user", text: "Are data pipelines still running?", timestamp: "04/10/2025, 10:03:00" },
      { sender: "bot", text: "Pipelines are paused automatically until the issue is resolved.", timestamp: "04/10/2025, 10:04:00" },
      { sender: "user", text: "Got it. Please alert when stable.", timestamp: "04/10/2025, 10:05:00" },
    ],
  },
  {
    title: "Datasphere Upgrade Notice",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Scheduled upgrade for SAP Datasphere on 11th October, 2:00–4:00 AM UTC.", timestamp: "05/10/2025, 14:00:00" },
      { sender: "user", text: "Will it affect live data replication?", timestamp: "05/10/2025, 14:01:00" },
      { sender: "bot", text: "Yes, replication will be paused briefly during the upgrade window.", timestamp: "05/10/2025, 14:02:00" },
      { sender: "user", text: "Will I need to restart pipelines?", timestamp: "05/10/2025, 14:03:00" },
      { sender: "bot", text: "No manual restart required — they’ll resume automatically post-upgrade.", timestamp: "05/10/2025, 14:04:00" },
      { sender: "user", text: "Perfect, thanks!", timestamp: "05/10/2025, 14:05:00" },
    ],
  },
  {
    title: "Datasphere New Feature - Lineage Graphs",
    appName: "Datasphere",
    messages: [
      { sender: "bot", text: "Datasphere now supports visual lineage graphs for data flows.", timestamp: "02/10/2025, 16:00:00" },
      { sender: "user", text: "That’s great! Is it available for all tenants?", timestamp: "02/10/2025, 16:01:00" },
      { sender: "bot", text: "Yes, the rollout is complete across all regions.", timestamp: "02/10/2025, 16:02:00" },
      { sender: "user", text: "Any training materials available?", timestamp: "02/10/2025, 16:03:00" },
      { sender: "bot", text: "You can find the guide in SAP Help Portal under Datasphere > Features > Lineage Graphs.", timestamp: "02/10/2025, 16:04:00" },
      { sender: "user", text: "Thanks for sharing!", timestamp: "02/10/2025, 16:05:00" },
    ],
  },

  // ---------------- HANA CLOUD ----------------
  {
    title: "HANA Cloud Backup Success Alert",
    appName: "HANA Cloud",
    messages: [
      { sender: "bot", text: "Nightly backup for your HANA Cloud instance completed successfully.", timestamp: "05/10/2025, 02:00:00" },
      { sender: "user", text: "Can I check backup logs?", timestamp: "05/10/2025, 02:01:00" },
      { sender: "bot", text: "Yes, navigate to the Backup tab in HANA Cloud Central to view detailed logs.", timestamp: "05/10/2025, 02:02:00" },
      { sender: "user", text: "Great, thank you.", timestamp: "05/10/2025, 02:03:00" },
      { sender: "bot", text: "You're welcome! All backups are retained for 30 days.", timestamp: "05/10/2025, 02:04:00" },
    ],
  },
  {
    title: "HANA Cloud CPU Utilization Alert",
    appName: "HANA Cloud",
    messages: [
      { sender: "bot", text: "High CPU utilization detected (>85%) on instance EU10-HC01.", timestamp: "05/10/2025, 10:00:00" },
      { sender: "user", text: "Which workload is causing it?", timestamp: "05/10/2025, 10:01:00" },
      { sender: "bot", text: "The workload trace shows heavy query execution from Datasphere connector.", timestamp: "05/10/2025, 10:02:00" },
      { sender: "user", text: "Should I terminate it?", timestamp: "05/10/2025, 10:03:00" },
      { sender: "bot", text: "Yes, consider limiting query concurrency to reduce load.", timestamp: "05/10/2025, 10:04:00" },
      { sender: "user", text: "Done. CPU looks stable now.", timestamp: "05/10/2025, 10:05:00" },
    ],
  },

  // ---------------- INTEGRATION SUITE ----------------
  {
    title: "Service Disruption Due to Unindexed Queries",
    appName: "Integration Suite",
    messages: [
      {
        sender: "bot",
        text: "On 23 September 2025, a subset of customers hosted in multiple data centers may have been affected by a service disruption issue impacting the availability of multiple Integration Suite services.",
        timestamp: "23/09/2025, 08:00:00",
      },
      {
        sender: "user",
        text: "What was the root cause of this issue?",
        timestamp: "23/09/2025, 08:01:00",
      },
      {
        sender: "bot",
        text: "Investigations revealed that long-running unindexed queries in the backend database were causing high CPU usage and increased response times, impacting service availability.",
        timestamp: "23/09/2025, 08:02:00",
      },
      {
        sender: "user",
        text: "How was the problem resolved?",
        timestamp: "23/09/2025, 08:03:00",
      },
      {
        sender: "bot",
        text: "Technical teams manually created the missing indexes on the affected database fields. Once applied, the services were restored and sanity tests confirmed stable performance.",
        timestamp: "23/09/2025, 08:04:00",
      },
      {
        sender: "user",
        text: "Do we know why those queries were missing indexes in the first place?",
        timestamp: "23/09/2025, 08:05:00",
      },
      {
        sender: "bot",
        text: "Yes. The issue was triggered by a mass user migration related to Universal ID group changes, which caused a spike in searches using non-indexed fields.",
        timestamp: "23/09/2025, 08:06:00",
      },
      {
        sender: "user",
        text: "Were there any other insights from the RCA?",
        timestamp: "23/09/2025, 08:07:00",
      },
      {
        sender: "bot",
        text: "Indeed. A recent security update had introduced a query using a non-indexed parameter. Regular load tests didn’t capture this scenario since the migration volume wasn’t simulated at that scale.",
        timestamp: "23/09/2025, 08:08:00",
      },
      {
        sender: "user",
        text: "What steps are being taken to prevent this from happening again?",
        timestamp: "23/09/2025, 08:09:00",
      },
      {
        sender: "bot",
        text: "SAP has implemented preventive measures: adding the missing indexes, improving load tests for high-volume user operations, and enhancing monitoring for long-running non-indexed queries.",
        timestamp: "23/09/2025, 08:10:00",
      },
      {
        sender: "user",
        text: "Good to hear. Please make sure such database checks are more proactive next time.",
        timestamp: "23/09/2025, 08:11:00",
      },
    ],
  },
  {
    title: "Integration Suite Tenant Update Notification",
    appName: "Integration Suite",
    messages: [
      {
        sender: "bot",
        text: "This is to inform you that your SAP Integration Suite tenant was successfully updated to the latest software version with zero downtime.",
        timestamp: "30/09/2025, 07:00:00",
      },
      {
        sender: "user",
        text: "Nice. What version has it been updated to?",
        timestamp: "30/09/2025, 07:01:00",
      },
      {
        sender: "bot",
        text: "Your tenant has been upgraded to Integration Suite version 7.43.2, which includes security and performance enhancements.",
        timestamp: "30/09/2025, 07:02:00",
      },
      {
        sender: "user",
        text: "Was there any downtime during this update?",
        timestamp: "30/09/2025, 07:03:00",
      },
      {
        sender: "bot",
        text: "No downtime was required — all updates were deployed seamlessly using rolling update mechanisms.",
        timestamp: "30/09/2025, 07:04:00",
      },
      {
        sender: "user",
        text: "Can you share which systems were affected by this update?",
        timestamp: "30/09/2025, 07:05:00",
      },
      {
        sender: "bot",
        text: "The following tenants were updated as part of this rollout:\n\n• EU10 - is-int-eu10-s4h-cld001\n• US20 - is-int-us20-s4h-prd002\n• AP11 - is-int-ap11-btp003\n• CN40 - is-int-cn40-neo004\n\nAll systems are operational post-update.",
        timestamp: "30/09/2025, 07:06:00",
      },
      {
        sender: "user",
        text: "Perfect. Thanks for confirming — good to know everything’s stable.",
        timestamp: "30/09/2025, 07:07:00",
      },
    ],
  },
  {
    title: "Integration Suite Tenant Maintenance",
    appName: "Integration Suite",
    messages: [
      { sender: "bot", text: "Scheduled tenant maintenance for Integration Suite EU10 on 14th October 12:00–2:00 AM UTC.", timestamp: "04/10/2025, 09:00:00" },
      { sender: "user", text: "Will deployed iflows be impacted?", timestamp: "04/10/2025, 09:01:00" },
      { sender: "bot", text: "All deployed iflows will remain paused during maintenance.", timestamp: "04/10/2025, 09:02:00" },
      { sender: "user", text: "Do I need to redeploy them?", timestamp: "04/10/2025, 09:03:00" },
      { sender: "bot", text: "No redeployment needed. They resume automatically post-maintenance.", timestamp: "04/10/2025, 09:04:00" },
      { sender: "user", text: "Thanks for the heads-up.", timestamp: "04/10/2025, 09:05:00" },
    ],
  },
  {
    title: "Integration Suite API Latency Warning",
    appName: "Integration Suite",
    messages: [
      { sender: "bot", text: "Monitoring detected increased API latency (>500ms) in US East region.", timestamp: "05/10/2025, 06:00:00" },
      { sender: "user", text: "Are message queues affected?", timestamp: "05/10/2025, 06:01:00" },
      { sender: "bot", text: "Message queues are stable. Only response times are delayed.", timestamp: "05/10/2025, 06:02:00" },
      { sender: "user", text: "ETA for normalization?", timestamp: "05/10/2025, 06:03:00" },
      { sender: "bot", text: "Latency expected to normalize within the next 45 minutes.", timestamp: "05/10/2025, 06:04:00" },
      { sender: "user", text: "Alright, will monitor.", timestamp: "05/10/2025, 06:05:00" },
    ],
  },

  // ---------------- BUILD APPS ----------------
  {
    title: "Build Apps Deployment Issue",
    appName: "Build Apps",
    messages: [
      { sender: "bot", text: "Some users are experiencing failures when deploying Build Apps to BTP subaccounts.", timestamp: "05/10/2025, 07:00:00" },
      { sender: "user", text: "Is there a workaround?", timestamp: "05/10/2025, 07:01:00" },
      { sender: "bot", text: "Yes, redeploying from a fresh build resolves it temporarily.", timestamp: "05/10/2025, 07:02:00" },
      { sender: "user", text: "Thanks, will try that.", timestamp: "05/10/2025, 07:03:00" },
      { sender: "bot", text: "SAP engineering team is already working on a permanent fix.", timestamp: "05/10/2025, 07:04:00" },
      { sender: "user", text: "Please notify once fixed.", timestamp: "05/10/2025, 07:05:00" },
    ],
  },
  {
    title: "Build Apps UI Builder Update",
    appName: "Build Apps",
    messages: [
      { sender: "bot", text: "New UI Builder version released with improved drag-and-drop elements.", timestamp: "02/10/2025, 11:00:00" },
      { sender: "user", text: "Is this backward compatible?", timestamp: "02/10/2025, 11:01:00" },
      { sender: "bot", text: "Yes, all existing projects will continue to function normally.", timestamp: "02/10/2025, 11:02:00" },
      { sender: "user", text: "Any changes to preview behavior?", timestamp: "02/10/2025, 11:03:00" },
      { sender: "bot", text: "Yes, faster previews and live refresh added.", timestamp: "02/10/2025, 11:04:00" },
      { sender: "user", text: "Nice!", timestamp: "02/10/2025, 11:05:00" },
    ],
  },

  // ---------------- ANALYTICS CLOUD ----------------
  {
    title: "Analytics Cloud Scheduled Downtime",
    appName: "Analytics Cloud",
    messages: [
      { sender: "bot", text: "SAP Analytics Cloud will undergo scheduled maintenance on 13th Oct, 1:00–3:00 AM UTC.", timestamp: "05/10/2025, 12:00:00" },
      { sender: "user", text: "Will reports be accessible?", timestamp: "05/10/2025, 12:01:00" },
      { sender: "bot", text: "No, the service will be temporarily unavailable during that period.", timestamp: "05/10/2025, 12:02:00" },
      { sender: "user", text: "Any updates after completion?", timestamp: "05/10/2025, 12:03:00" },
      { sender: "bot", text: "Yes, notifications will be sent once it’s back online.", timestamp: "05/10/2025, 12:04:00" },
      { sender: "user", text: "Thanks.", timestamp: "05/10/2025, 12:05:00" },
    ],
  },
  {
    title: "Analytics Cloud Data Refresh Delay",
    appName: "Analytics Cloud",
    messages: [
      { sender: "bot", text: "Data refresh delays observed for live connections to HANA Cloud.", timestamp: "05/10/2025, 15:00:00" },
      { sender: "user", text: "Is this related to the recent patch?", timestamp: "05/10/2025, 15:01:00" },
      { sender: "bot", text: "Yes, caching mechanism is being optimized post-patch.", timestamp: "05/10/2025, 15:02:00" },
      { sender: "user", text: "When expected to normalize?", timestamp: "05/10/2025, 15:03:00" },
      { sender: "bot", text: "Within the next 2 hours.", timestamp: "05/10/2025, 15:04:00" },
      { sender: "user", text: "Thanks for the quick update.", timestamp: "05/10/2025, 15:05:00" },
    ],
  },
];
