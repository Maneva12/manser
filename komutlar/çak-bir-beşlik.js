const Discord = require("discord.js");

exports.run = function(client, message, args) {

const kisi = message.mentions.users.first();

if (!kisi) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");

const Embed = new Discord.MessageEmbed()

    .setDescription(
      `${kisi} ` + `ve **<@${message.author.id}>** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(`${message.author.tag} Adlı Kişi Bu Komutu Kullandı!`, client.user.avatarURL)
  
 return message.channel.send(Embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: 'Eğlence',
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.help = {
  name: "çakbirbeşlik",
  description: "Etiketlediğiniz Kişiyle Beşlik Çakmanızı Sağlar.",
  usage: ""
};