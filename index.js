const { execFile } = require("child_process");
const path = require("path");
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
  await respond({ 
     response_type: " in_channel",
     text: `Pong, i suppose.\nLatency: ${latency}ms` });
});
(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/dexter-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    response_type: "in_channel",
    text:
`Available Commands:
    /dexter-ping - Check bot latency
    /dexter-catfact - Get a cat fact
    /dexter-joke - Get a joke from dexter
    /dexter-fact - Get a useless fact
    /dexter-ai - Talk to the dexter AI`
  });
});
app.command("/dexter-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ 
      response_type: "in_channel",
      text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ 
      response_type: "in_channel",
      text: "Failed to fetch a cat fact." });
  }
});
app.command("/dexter-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      response_type: "in_channel",
      text:
`${response.data.setup}
${response.data.punchline}`
    });
  } catch (err) {
    await respond({ 
      response_type: "in_channel",
      text: "Failed to fetch a joke." });
  }
});
app.command("/dexter-fact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
    await respond({
      response_type: "in_channel",
      text: `🧠 *Random killer Fact*\n${response.data.text}`
    });
  } catch (err) {
    await respond({ 
      response_type: "in_channel",
      text: "Failed to fetch a random fact." });
  }
});
app.command("/dexter-ai", async ({ command, ack, respond }) => {
    await ack();
    if (!command.text.trim()){
      await respond({ 
        response_type: "in_channel",
        text: "Give me something to think about first."});
      return;
    }
    execFile(
      "python",
      [path.join(__dirname, "ai.py"), command.text],
      { timeout: 60000 },
      async (error, stdout) => {
        if (error) {
          console.error(error);
          await respond({ 
            response_type: "in_channel",
            text: "Dexter's AI has encountered an error."});
          return;
        }
        await respond({
          response_type: "in_channel",
          text: stdout.trim() || "Dexter has nothing to say."
        });
     }
  );
});