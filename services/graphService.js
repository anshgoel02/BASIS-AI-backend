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

  // Compute date range
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const start = yesterday.toISOString();
  const end = now.toISOString();

  const filter = `receivedDateTime ge ${start} and receivedDateTime lt ${end}`;

  let url = `/users/${userId}/messages?$select=subject,from,bodyPreview,receivedDateTime&$filter=${encodeURIComponent(filter)}&$orderby=receivedDateTime desc&$top=50`;

  let allEmails = [];

  while (url) {
    const response = await client.api(url).get();

    if (response.value) {
      allEmails.push(...response.value);
    }

    // Pagination
    url = response["@odata.nextLink"]
      ? response["@odata.nextLink"].replace("https://graph.microsoft.com/v1.0", "")
      : null;
  }

  return allEmails;
}


module.exports = { fetchRecentEmails, fetchEmailsFromYesterday };
