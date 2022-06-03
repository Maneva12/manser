const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
message.channel.send('Ölçüm yapılıyor, lütfen bekleyiniz...').then(mr => {
 mr.edit("Veriler alındı...").then(msg => {
     msg.edit( `**Tepki Gecikmesi: \`${Math.round((Date.now() - mr.createdTimestamp) )}ms\`\nBot Gecikmesi: \`${Math.round(client.ws.ping)}ms\`**`)
 })})
}

exports.conf = {
  aliases: ['ms'],
  kategori: 'Genel'
}

exports.help = {
  name: 'ping',
  description: 'Botun Anlık Pingine Ulaşırsınız.'
}