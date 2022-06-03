const Discord = require('discord.js');
const db = require('croxydb');

exports.run = (client, message, args) => {

let data = db.get(`snipe_${message.channel.id}`)

if(!data) return message.reply("Silinen Mesaj Bulunamadı!") 

const embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
  .setDescription('**Son Silinen Mesaj Hakkında;**')
 .addField('Mesaj İçeriği:', data.mesaj)
 .addField('Silen Kişinin ID', data.silen) 
 .setFooter(`Bu Komutu ${message.author.tag} Adlı Kullanıcı Kullandı!`, message.author.avatarURL())
message.channel.send(embed)

};
exports.conf = {
 aliases: [],
  kategori: 'Moderasyon'
};

exports.help = {
 name: 'snipe',
  description: 'Sunucuda En Son Silinen Mesajın Detaylarını Gösterir'
};