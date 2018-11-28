const Discord = require('discord.js');
exports.run = (client, message, args) => {

	const embed = new Discord.RichEmbed()
	.setAuthor("Roles | " + message.guild, message.guild.iconURL)
	.setDescription("`" + message.guild.roles.map(r => r.name).join(" ") + "`")
	.setFooter("Total roles: " + message.guild.roles.size)
	.setThumbnail(message.guild.iconURL)
  .setColor("#36393f")

	
	message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'roles',
};