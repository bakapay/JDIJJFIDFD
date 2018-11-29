const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
let mr = message.guild.roles.find("name", "Muted")
let member = message.mentions.members.first();
if(!mr) return;
  if(!message.guild.member(message.author.id).hasPermission('MUTE_MEMBERS')) return message.channel.send(failemoji + " | U need the `MUTE_MEMBERS` permission.")

  if (!member) return message.channel.send(failemoji + " | U must mention a user.")
if(message.guild.members.get(member.user.id).roles.has(mr.id)){
member.removeRole(mr.id)
message.channel.send(donemo + " | " + member.user + " was unmuted.")
} else {
message.channel.send(failemoji + " | This user isnt muted.")
};

};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unmute',
};

