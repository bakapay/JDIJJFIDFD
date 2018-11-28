const Discord = require('discord.js')
exports.run = function(client, message, args, guild, bot) {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
  if (message.author.id === '390155343373533195'){

  var code = args.join(' ');
  try {
    var res = eval(code);
    if (typeof res !== 'string') {
      res = require('util').inspect(res);
    }
  } catch (e) {
    res = e.message;
  }
  message.channel.send("```diff\n- " + res + " -```");
}
};
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
};