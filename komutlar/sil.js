const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const maneva = args.join(' ');
  if(!maneva) return message.channel.send('**:gear: Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:xx: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(maneva < 2) return message.channel.send('<:cross2:981277619498664008> **En Az __2__ Mesaj Silebiliyorum.**')
 if(maneva>100) return message.channel.send('<:cross2:981277619498664008> **En Fazla __100__ Mesaj Silebiliyorum.**')
  message.channel.bulkDelete(maneva);


  message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('Mesajlar Başarıyla Silindi!')
    .setDescription('**Başarı ile __'+maneva+'__ mesaj sildim!** <a:emp_tick_4:981277629464322169>')
  .setColor('0x36393E')
  ).then(i=>{
    i.react(':gear: 585186945471086620')
  }
  )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: 'Moderasyon',
  aliases: ['temizle','delete','sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlediğiniz miktarda mesaj siler.',
  category:'yetkili',
  usage: 'sil 100'
};