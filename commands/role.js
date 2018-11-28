const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(":dividers: | U need the `MANAGE_ROLES` permission.")


if(!member) return message.channel.send(failemoji + " | U must mention a user.")
if(!args[1]) return message.channel.send(failemoji + " | U must specify the role name.")
let grad = message.guild.roles.find('name', args.slice(1).join(' '))
if(!grad) return message.channel.send(failemoji + " | This role dnt exist.")

if(member.roles.has(grad.id)){
	member.removeRole(grad.id)
	message.channel.send(`${donemo} | ${message.author.username}, ${member.user} dnt have anymore the ${args.slice(1).join(' ')} role.`)
} else {
	member.addRole(grad.id)
	message.channel.send(`${donemo} | ${message.author.username}, ${member.user} now has the ${args.slice(1).join(' ')} role.`)
};

   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'role',
};

