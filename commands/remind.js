const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
let time = args[0]
if (!time) return message.channel.send(failemoji + " | U must specify a valid time.")

let reminder = message.content.slice(12)
if(!reminder) return message.channel.send(failemoji + " | U must specify a reminder.")
	
message.channel.send(donemo + " | U will get a reminder in `" + time + "`.")

  setTimeout(function() {
    message.author.send(":alarm_clock: | " + reminder + "")
  },ms(time))
  
  
};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'remind',
};