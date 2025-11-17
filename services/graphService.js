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
    .top(20)
    .select("subject,from,bodyPreview,receivedDateTime")
    .orderby("receivedDateTime DESC")
    .get();
  
  return response.value;
}

module.exports = { fetchRecentEmails };
