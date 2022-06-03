const Discord = require('discord.js');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const polisamca = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} Polis Geliyor Sakin Olun :man_police_officer:`)
.setColor('BLUE')
.setTimestamp()
.setImage(`https://cdn.discordapp.com/attachments/551712557912817684/571331424771244033/1516500403_POLICE_.gif`)
    return message.channel.send(polisamca);
    }
};

exports.conf = {
  aliases: ['polis', '155', 'polisi-ara', 'polisi ara'],
  guildOnly: true,
  kategori: 'Eğlence'
};

exports.help = {
  name: 'polisiara',
  description: 'Eğlence Amaçlı Polisi Aratırsınız. Gerçek Değildir.'
};
