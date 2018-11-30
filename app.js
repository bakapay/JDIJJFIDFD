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
client.user.setActivity("MENTENANȚĂ")
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

client.on("guildMemberAdd", member => {
 let autorole = member.guild.roles.get("517730254178222113")
 let auto2role = member.guild.roles.get("517730957563002911")
 member.addRole(autorole)
 member.addRole(auto2role)
 member.guild.channels.get("517729956516855808").send("[+] `" + member.user.tag + "`")});

client.on("guildMemberRemove", member => {
 let autorole = member.guild.roles.get("517730254178222113")
 member.guild.channels.get("517729956516855808").send("[-] `" + member.user.tag + "`")});

client.login(process.env.BOT_TOKEN);
