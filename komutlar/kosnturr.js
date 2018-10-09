const Discord = require('discord.js');

exports.run = (client, message, args) => {
      if(!message.member.hasPermission("MEMBER")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bunun için yetkin yok!').setColor('RANDOM'));
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Konuşmam İçin bişey yaz.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anons', 'duyuruyap'],
  permLevel: "0"
};

exports.help = {
  name: "konus",
  description: "Arda Özcann Konuştur la",
  usage: "konus"
};

