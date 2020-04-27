import Discord from "discord.js";
import TOKEN from "./auth";
import LOCATIONS from "./constants";

const client = new Discord.Client();

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  return LOCATIONS[randomInteger(0, LOCATIONS.length)];
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content.substring(0, 1) == "!") {
    let args = message.content.substring(1).split(" ");
    let cmd = args[0];
    args = args.splice(1);

    switch (cmd) {
      case "ping":
        message.reply(getRandomLocation());
    }
  }
});

client.login(TOKEN);
