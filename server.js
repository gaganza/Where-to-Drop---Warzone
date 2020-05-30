const express = require("express");
const app = express();
const port = 3000;

const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.json");

client.login(auth.token);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/bot-info", (req, res, next) => {
  let data = client.toJSON();

  res.send({
    data,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
