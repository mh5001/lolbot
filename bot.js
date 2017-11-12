const discord = require('discord.js');
const client = new discord.Client();

client.login('MzQyMzUxODU5NTk3NDQzMDcz.DOnExQ.N_0pK1U2ZNOELn1kUZmQui6OHbE');
const prefix = '/';

client.on('ready', function() {
  console.log("I am ready!");
});

client.on('message', function(message) {
  const input = message.content.split(' ').slice(1).join(' ').split(',');
  if (message.content.toLowerCase().startsWith(prefix + "team")) {
    message.channel.send('OK');
    input.sort(function() {
      return 0.5 - Math.random();
    });
    const team1 = input.slice(0, Math.round(input.length / 2));
    const team2 = input.slice(team1.length,input.length);
    message.channel.send({embed: {
      color: 3992886,
      description: `${input.length} people mentioned, creating a team of: **${team1.length}** and **${team2.length}**`,
      fields: [
        {
          name: "__Team One__",
          value: team1.join('\n'),
          inline: true
        },
        {
          name: "__Team Two__",
          value: team2.join('\n'),
          inline: true
        }
      ]
    }});
  }
});
