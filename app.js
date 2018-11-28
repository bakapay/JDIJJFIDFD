const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const bot = new Discord.Client();
const db = require("quick.db")
const active = new Map();
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

let ops = {
  active: active
}
client.on("ready", () => {
client.user.setActivity("mesaj plm.")
  });

client.on("ready", () => {
client.user.setStatus("dnd")
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    log("L: " + files.length + " commands.")
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`L: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === "390155343373533195") permlvl = 4;
  return permlvl;
};
client.on('ready', () => {
setInterval(function() {
const ms = require("parse-ms");
let time = ms(Date.now() + 7200000);
  client.channels.get("516243063438442496").setName(`🕒 ${time.hours}:${time.minutes}:${time.seconds}`)
  }, 1000);
});
client.on('ready', () => {
setInterval(function() {
    client.channels.get("516603977048129539").setName("Serverul momentan se află în mentenanță.").then(
    client.channels.get("516603977048129539").setName("erverul momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("rverul momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("verul momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("erul momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("rul momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("l momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("momentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("omentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("mentan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("entan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("ntan se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("an se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("n se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("se află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("e află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("află în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("flă în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("lă în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("ă în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("în mentenanță.")).then(
    client.channels.get("516603977048129539").setName("n mentenanță.")).then(
    client.channels.get("516603977048129539").setName("mentenanță.")).then(
    client.channels.get("516603977048129539").setName("entenanță.")).then(
    client.channels.get("516603977048129539").setName("ntenanță.")).then(
    client.channels.get("516603977048129539").setName("tenanță.")).then(
    client.channels.get("516603977048129539").setName("enanță.")).then(
    client.channels.get("516603977048129539").setName("nanță.")).then(
    client.channels.get("516603977048129539").setName("anță.")).then(
    client.channels.get("516603977048129539").setName("nță.")).then(
    client.channels.get("516603977048129539").setName("ță.")).then(
    client.channels.get("516603977048129539").setName("ă.")).then(
    client.channels.get("516603977048129539").setName("."))
  }, 1000);
});    


client.login(process.env.BOT_TOKEN);
