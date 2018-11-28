const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")

  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(failemoji + " | U need the `MANAGE_ROLES` permission.")

  if(!args.slice(0).join(' ')) return message.channel.send(failemoji + " | U must specify role name.");

  let p2 = args.slice(0).join(' ');
 
message.guild.createRole({
  name: p2
  })

  
  message.channel.send(donemo + " | Added role `" + p2 + "`")
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'addrole'
};




