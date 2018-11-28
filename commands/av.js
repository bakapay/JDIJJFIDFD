const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
const authorinfo = new Discord.RichEmbed()
.setAuthor("Avatar | " + message.author.username, message.author.avatarURL)
.setImage(message.author.avatarURL)
  .setColor("#36393f")

 const member = message.mentions.users.first();
 if(member){
const memberinfo = new Discord.RichEmbed()
.setAuthor("Avatar | " + member.username, member.avatarURL)
.setImage(member.avatarURL)
 .setColor("#36393f")
 message.channel.send(memberinfo)} else {

 message.channel.send(authorinfo)}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'av',
};