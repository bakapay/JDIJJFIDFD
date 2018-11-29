const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send(failemoji + " | U need the `BAN_MEMBERS` permission.")
let member = message.mentions.members.first();
let banned = message.guild.roles.get("464117816031707136")

  if (!member) return message.channel.send(failemoji + " | U must mention a user.")
  if (member.id === message.author.id) return message.channel.send(failemoji + " | U cannot ban yourself.")
  if(!member.kickable) return message.channel.send(failemoji + " | I cannot ban this user.")

  let p2 = args.slice(1).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = " X"
  } else {
    reason = p2
  }
	  
	   member.send("U have been banned from `" + message.guild + "`, " + reason).then(
        setTimeout(() => {
          message.guild.ban(member)
        }, 1000))
			  
    let mod = new Discord.RichEmbed()
    .setAuthor("Ban | " + message.guild, message.guild.iconURL)
	.addField("User", member.user.username, true)
	.addField("Reason", reason, true)
	.setFooter("Banned by " + message.author.username)
    .setTimestamp()
  .setColor("#36393f")

    message.guild.channels.get("517727684013326356").send(mod)
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
};
	