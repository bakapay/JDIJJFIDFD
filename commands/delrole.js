const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")

  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(failemoji + " | You need the `MANAGE_ROLES` permission.")

  if(!args.slice(0).join(' ')) return message.channel.send(failemoji + " | You must specify role name.");
  let role = args.slice(0).join(' ')
  
  if(!message.guild.roles.find('name', role)) return message.channel.send(failemoji + " | i cannot find the role `" + role + "`")
  message.guild.roles.find('name', role).delete()
  
  message.channel.send(donemo + " | Deleted role `" + role + "`")
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'delrole',
};
