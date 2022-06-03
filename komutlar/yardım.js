const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Revia Genel Komutlar', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `<a:98123612783106:982241040683663382> __${prefix}${cmd.help.name}__ **» ${cmd.help.description}**\n`).join("\n "))
        .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Revia Sunucu Komutları', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `<a:98123612783106:982241040683663382> __${prefix}${cmd.help.name}__ **» ${cmd.help.description}**\n`).join("\n "))
        .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Revia Eğlence Komutları', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `<a:98123612783106:982241040683663382> __${prefix}${cmd.help.name}__ **» ${cmd.help.description}**\n`).join("\n "))
        .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Revia Moderasyon Komutları', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `<a:98123612783106:982241040683663382> __${prefix}${cmd.help.name}__ **» ${cmd.help.description}**\n`).join("\n "))
        .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Geliştirici" || args[0] === "dev" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Revia Geliştirici Komutları', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Geliştirici').map(cmd => `<a:98123612783106:982241040683663382> __${prefix}${cmd.help.name}__ **» ${cmd.help.description}**\n`).join("\n "))
         .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)
    return message.channel.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Revia Yardım Menüsü', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\``)
  .addField('Kategoriler:', `
      __${prefix}yardım Genel__ **» Genel Komutları Görmenize Yardımcı Olur.** \n
      __${prefix}yardım Moderasyon__ **» Moderasyon Komutlarını Görmenize Yardımcı Olur.** \n
      __${prefix}yardım Eğlence__ **» Eğlence Komutlarını Görmenize Yardımcı Olur.** \n
      __${prefix}yardım Sunucu__ **» Sunucu Komutlarını Görmenize Yardımcı Olur.**
  `)
  .addField("Önemli »", ` [Beni Sunucuna Davet Et!](https://discord.com/api/oauth2/authorize?client_id=973652828239298560&permissions=8&scope=bot)`, false)

  .setFooter(`${message.author.tag} Adlı Kullanıcı Komutu Kullandı!`, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'],
    permLevel: 0,
    kategori: "Genel" 

  };

  exports.help = {
    name: 'yardım',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'yardım',
  };
