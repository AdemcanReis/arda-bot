const Discord = require('discord.js');

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['LEL'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Basit arda özcan hep lel der.',
  usage: 'espri'
};