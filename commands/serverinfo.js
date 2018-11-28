const Discord = require('discord.js');
exports.run = (client, message, args) => {

let guild = message.guild.createdAt
const millisJoined = new Date().getTime() - guild.getTime();
const daysC = millisJoined / 1000 / 60 / 60 / 24;

let cAt1 = guild.toString().split(' ');
let finalString1 = cAt1[1] + "/" + cAt1[2] + "/" + cAt1[3]

let daysz = "days"
if(daysC.toFixed(0) === "1"){
	daysz = " day"
} else {
    daysz = " days"
}

const svinfo = new Discord.RichEmbed()
.setAuthor(message.guild, message.guild.iconURL)
.addField("Users", "`" + message.guild.members.filter(m => !m.user.bot).size + "`", true)
.addField("Days from creation", "`" + daysC.toFixed(0) + daysz + "`", true)
.addField("Ownership", "`" + message.guild.owner.user.tag + "`", true)
.addField("Online users", "`" + message.guild.members.filter(m => !m.user.bot && m.presence.status !== 'offline').size + "/" + message.guild.members.filter(m => !m.user.bot).size + "`", true)
.setTimestamp(message.guild.createdAt)
.setFooter("Creation date")
.setThumbnail(message.guild.iconURL)
  .setColor("#36393f")


message.channel.send(svinfo)

};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
};