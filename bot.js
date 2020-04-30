const Discord = require("discord.js");
const client = new Discord.Client();

const auth = require("./auth.json");
const locations = require("./locations.json");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  // get random key from locations object
  let keys = Object.keys(locations);
  let randomKeyIndex = randomInteger(0, keys.length - 1);

  // use the random key from the locations object as the 'base' location
  let baseLocation = locations[keys[randomKeyIndex]];

  return `${keys[randomKeyIndex]} - ${
    baseLocation[randomInteger(0, baseLocation.length - 1)]
  }`;
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
      case "ping":
        message.reply(getRandomLocation());
    }
  }
});

client.login(auth.token);
