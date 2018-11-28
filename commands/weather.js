const weather = require('weather-js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
if(!args.join(" ")) return message.channel.send(failemoji + " | You must specify a valid location.")

    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
	if (err) message.channel.send(err);
	
	if (result.length === 0 || !result) {
    return message.channel.send(failemoji + " | You must specify a valid location.");
    }
	
    var current = result[0].current;
    var location = result[0].location;

	const wht = new Discord.RichEmbed()
.setAuthor(`Weather for ${current.observationpoint}`, current.imageUrl)
.setThumbnail(current.imageUrl)
.addField('Sky', "`" + current.skytext + "`", true)
.addField('Temperature', "`" + current.temperature + "°C`", true)
.addField('Wind', "`" + current.winddisplay + "`", true)
.addField('Humidity', "`" + current.humidity + "%`", true) 
.setTimestamp()
  .setColor("#36393f")


message.channel.send(wht)
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'weather',
};