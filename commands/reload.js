exports.run = (client, message, args) => {
let failemoji = client.guilds.get("516236600448122890").emojis.find("name", "fail")
let donemo = client.guilds.get("516236600448122890").emojis.find("name", "done")
if(!args[0]) return;
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(failemoji + ` | FAIL: ${args[0]}.`);
  } else {
    message.channel.send(donemo + ` | Reloading`).then(
      message.channel.send(donemo + ` | Reloading.`)).then(
      message.channel.send(donemo + ` | Reloading..`)).then(
      message.channel.send(donemo + ` | Reloading...`))
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`:robot: | DONE: ${command}.`);
          })
          .catch(e => {
            m.edit(`\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
};
