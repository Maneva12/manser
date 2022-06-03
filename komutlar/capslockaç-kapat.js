const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`<a:emp_tick_10:981278255392903228> **Başarılı!** \n **Capslock Engelleme Sistemi Durumu** \`Aktif!\`**Olarak Değiştirildi**`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`<a:emp_tick_10:981278255392903228> **Başarılı!** \n **Capslock Engelleme Sistemi Durumu** \`Pasif!\` **Olarak Değiştirildi**`)
  }

};
exports.conf = {
  aliases: ['capslockengel','capslock','capslock-engel','cl'],
  kategori: 'Moderasyon'
};
exports.help = {
  name: 'capslock',
  description: 'Sunucunuzda Fazla Ölçüde Büyük Harf Kullanılmasını Engeller.'
};

//ana kod mainde