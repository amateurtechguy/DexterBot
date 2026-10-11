const axios = require("axios");
require("dotenv").config();
const { App } = require("@slack/bolt");
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});
app.command("/dexter-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong, i suppose.\nLatency: ${latency}ms` });
});
(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/dexter-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
    /dexter-ping - Check bot latency
    /dexter-catfact - Get a cat fact
    /dexter-joke - Get a joke from dexter
    /dexter-fact - Get a useless fact`
  });
});
app.command("/dexter-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/dexter-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}
${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});
app.command("/dexter-fact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
    await respond({
      text: `🧠 *Random Fact*\n${response.data.text}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a random fact." });
  }
});
app.command("/dexter-", async ({ ack, respond }) => {
    await ack();
    try {
        
    }
})