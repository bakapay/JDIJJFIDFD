const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
let mr = message.guild.roles.find("name", "Muted")

if(!mr) return message.channel.send(failemoji + " | I cannot find the `Muted` role.")

if(!message.guild.member(message.author.id).hasPermission('MUTE_MEMBERS')) return message.channel.send(failemoji + " | U need the `MUTE_MEMBERS` permission.")
let member = message.mentions.members.first();

  if (!member) return message.channel.send(failemoji + " | U must mention a user.")
if(message.guild.members.get(member.user.id).roles.has(mr.id)) return message.channel.send(failemoji + " | This user is already muted.")
if (member.id === message.author.id) return message.channel.send(failemoji + " | U cannot mute yourself.")
if(!member.kickable) return message.channel.send(failemoji + " | I cannot mute this user.")

let time = args[1]
if(!time) return message.channel.send(failemoji + " | U must specify a valid time.")

let r = args.slice(2).join(' ');
let reason = "reason"
if (!r) {
  reason = " X"
} else {
  reason = r
}

    member.addRole(mr.id)
  
    let mod = new Discord.RichEmbed()
  .setAuthor("Mute | " + message.guild, message.guild.iconURL)
	.addField("User", member.user.username, true)
	.addField("Time", time, true)
	.addField("Reason", reason, true)
	.setFooter("Muted by " + message.author.username)
  .setTimestamp()
  .setColor("#36393f")


     message.guild.channels.get("517727684013326356").send(mod)


    setTimeout(function() {
  member.removeRole(mr.id)
    },ms(time))

};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
};