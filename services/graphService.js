const { Client } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

function getGraphClient(accessToken) {
  return Client.init({
    authProvider: (done) => done(null, accessToken),
  });
}

async function fetchRecentEmails(userId, accessToken) {
  const client = getGraphClient(accessToken);
  const response = await client
    .api(`/users/${userId}/messages`)
    .filter(`from/emailAddress/address eq 'barath.kakaday@mccain.com'`)
    // .top(20)
    .select("subject,from,bodyPreview,receivedDateTime")
    .orderby("receivedDateTime DESC")
    .get();
  
  return response.value;
}


async function fetchEmailsFromYesterday(userId, accessToken) {
  const client = getGraphClient(accessToken);

  // --------------------------
  // 1. Calculate yesterday window
  // --------------------------
  const now = new Date();

  const start = new Date(now);
  start.setDate(start.getDate()-4);
  start.setHours(0, 0, 0, 0); // 00:00:00

  const end = new Date(now);
  end.setDate(end.getDate());
  end.setHours(23, 59, 59, 999); // 23:59:59

  const startIso = start.toISOString();
  const endIso = end.toISOString();

  // --------------------------
  // 2. Fetch yesterday’s emails
  // --------------------------
  const response = await client
    .api(`/users/${userId}/messages`)
    .filter(
      `receivedDateTime ge ${startIso} and receivedDateTime le ${endIso}`
    )
    .select("subject,from,bodyPreview,receivedDateTime")
    .orderby("receivedDateTime DESC")
    .get();

  const mails = response.value;

  // --------------------------
  // 3. Filter by specific sender (locally)
  // --------------------------
  // const filtered = mails.filter(
  //   (mail) =>
  //     mail.from?.emailAddress?.address?.toLowerCase() ===
  //     "barath.kakaday@mccain.com"
  // );

  return mails;
}


module.exports = { fetchRecentEmails, fetchEmailsFromYesterday };
