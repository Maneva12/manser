const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
   let manevaistatistik = new Discord.MessageEmbed()
.setTitle(`${client.user.username} İstatistik;`)
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setDescription("**Geliştirici »** <@972885211866083380>")
.addField("**Toplam Sunucu**", `\`${client.guilds.cache.size}\``)
.addField("**Toplam Kullanıcı**", `\`${client.users.cache.size}\``)
.addField("**Toplam Kanal**", `\`${client.channels.cache.size}\``)
.addField("**Bellek Kullanımı**",`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``)
.setFooter(`${message.author.tag} Adlı Kullanıcı Bu Komutu Kullandı!`, message.author.avatarURL())
message.channel.send(manevaistatistik)
message.react("📊")
}
module.exports.conf = {
aliases: ["i"],
  kategori: 'Genel'
}

module.exports.help = {
name: "istatistik",
  description: 'Botun İstatistiklerini Gösteren Komuttur.'
}