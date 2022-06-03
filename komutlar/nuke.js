const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("`Bu Komutu Kullanmak İçin Kanalları Yönet Yetkisine Sahip Olmalısın!`");
let csc = message.channel
  
 message.channel.clone({ name: csc.name, permissions: csc.withPermissions, topic: csc.topic, bitrate: this.bitrate })
  message.channel.delete();
  
};
module.exports.conf = {
aliases:["nuke"],
  kategori: "Moderasyon"
};
module.exports.help = {
  name: 'nuke',
  description: 'Kanalı Silip Yeniden Açar.'
};