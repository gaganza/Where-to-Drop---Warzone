const Discord = require("discord.js");
const client = new Discord.Client();

const auth = require("./auth.json");
const LOCATIONS = require("./constants").LOCATIONS;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  return LOCATIONS[randomInteger(0, LOCATIONS.length - 1)];
}

console.log(getRandomLocation());

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content.substring(0, 1) == "!") {
    let args = message.content.substring(1).split(" ");
    let cmd = args[0].toLowerCase();
    args = args.splice(1);

    switch (cmd) {
      case "p":
      case "ping":
        message.reply(getRandomLocation());
    }
  }
});

client.login(auth.token);
