const Discord = require('discord.js');
exports.run = function(client, message, args) {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")

    const deleteCount = parseInt(args[0], 10); 
 if (!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send(failemoji + " | U need the `MANAGE_MESSAGES` permission.") 
  if(!deleteCount || deleteCount < 2 || deleteCount > 100) return message.channel.send(failemoji + " | U must specify a valid number, between 2 - 100")
  message.delete() 
message.channel.fetchMessages({
  }).then(messages => message.channel.bulkDelete(deleteCount))
	message.channel.send(donemo + " | Deleting `" + deleteCount + "` messages.").then(	
	setTimeout(() => {
	message.channel.bulkDelete(deleteCount)
        }, 500))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
};