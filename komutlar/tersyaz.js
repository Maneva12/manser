const discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args.length < 1) {
    return message.reply(`<:5288_Wumpus:981277915595571231> **Doğru Kullanım:** \`r!tersyaz <yazınız>\``)
  }

  await message.reply(`**Bu Arapçamıdır Nedir Yahu Böyle**\n` + args.join(' ').split('').reverse().join(''));
  
};

exports.conf = {
  aliases: [ 'ters' ],
  kategori: 'Eğlence'
};

exports.help = {
  name: 'tersyaz',
  description: 'Yazdığınız Yazıyı Ters Olarak Yeniden Gönderir.'
};    