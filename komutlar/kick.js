const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`<:6773_Alert:981277950731243560> **Sunucudan Yasaklamak İstediğiniz Kişiyi Etiketlemeli / Belirtmelisiniz. Örnek Kullanım »** \`${prefix}ban <kullanıcı> <sebep> / ${prefix}ban <kullanıcı_id> <sebep>\` `);
  if (user.id === message.author.id) return message.channel.send('<:6773_Alert:981277950731243560> Kendini atamazsın.');
if (user.position > message.member.roles.highest.position) return message.channel.send('<:6773_Alert:981277950731243560> **Bu Kullanıcının Yetkileri Senin Yetkinden Daha Yüksek Olduğu İçin İşlem Gerçekleştirilemedi.');
			    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`<:cross2:981277619498664008> Etiketlediğin Kullanıcı Sunucuda Bulunmamakta.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`<:cross2:981277619498664008> Etiketlediğin Kullanıcı Sunucuda Bulunmamakta.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`<:6773_Alert:981277950731243560> Belirttiğiniz Kişi \`Benden Daha Yüksek Bir Role Sahip\` veya \`Bana Gerekli Yetkileri Vermediniz\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('<:6773_Alert:981277950731243560> Sunucudaki Yetkilileri Atamam! Sadece Sunucu Sahibi Atabilir.');
    message.guild.member(user).kick(reason);
message.channel.send(`<a:emp_tick_5:982237324735819787> **Başarılı!** \n <@${user.id}> **Adlı Kullanıcı <@${message.author.id}> Tarafından Atıldı!** **Sebep: \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Etiketlediğiniz Kişiyi Sunucudan Atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};
