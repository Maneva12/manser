const Discord = require('discord.js');
 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send('Maalesef Bir Soru Sormanız Gerek.')
     
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('Viantes Oylama', client.user.displayAvatarURL())
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {
         message.react('<a:emp_tick_10:981278255392903228>');
         message.react('<:cross2:981510482181623839>');
       });
     };
     exports.conf = {
       enabled: true,
       kategori: 'Moderasyon',
       guildOnly: false,
       aliases: ['oylama'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};