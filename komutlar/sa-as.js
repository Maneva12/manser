const Discord = require('discord.js');
const db = require('orio.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("Bu Komutu Kullanmak İçin Gerekli Yetkin Bulunmamakta!")
  
  if (!args[0]){
    message.channel.send(`<:6773_Alert:981277950731243560> **Örnek Kullanım »** \`r!sa-as aç/kapat\``)
  }
  if (args[0] === 'aç'){
    message.channel.send("<a:emp_tick_11:981278275714314260> Sa-as Sistemi Aktifleştirildi!")
    
    db.set(`saas_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('<a:emp_tick_11:981278275714314260> Sa-as Sistemi Pasifleştirildi!')
    
    db.set(`saas_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: 'Moderasyon',
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "sa-as",
  description: "Sa-as Sistemini Açıp Kapatmaya Yarayan Komuttur.",
  usage: "sa-as"
}