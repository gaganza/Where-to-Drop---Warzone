const Discord = require("discord.js");
const client = new Discord.Client();

const auth = require("./auth.json");

let locations = [
  "Downtown",
  "Park",
  "Hospital",
  "TV Station",
  "Dam",
  "Military Base",
  "Quarry",
  "Lumber",
  "Stadium",
  "Port",
  "Hills",
  "Promenade East",
  "Promenade West",
  "Airport",
  "Boneyard",
  "Superstore",
  "Storage Town",
  "Prison",
  "Farmland",
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  return locations[randomInteger(0, locations.length - 1)];
}

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
