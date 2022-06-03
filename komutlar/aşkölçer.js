exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor. :heart:",
      "Aşkölçer %6 Gösteriyor. :heart:",
      "Aşkölçer %9 Gösteriyor. :heart:",
      "Aşkölçer %12 Gösteriyor. :heart:",
      "Aşkölçer %18 Gösteriyor. :heart:",
      "Aşkölçer %20 Gösteriyor. :heart:",
      "Aşkölçer %23 Gösteriyor. :heart:",
      "Aşkölçer %26 Gösteriyor. :heart:",
      "Aşkölçer %29 Gösteriyor. :heart:",
      "Aşkölçer %30 Gösteriyor. :heart:",
      "Aşkölçer %40 Gösteriyor. :heart:",
      "Aşkölçer %50 Gösteriyor. :heart:",
      "Aşkölçer %60 Gösteriyor. :heart:",
      "Aşkölçer %70 Gösteriyor. :heart:",
      "Aşkölçer %73 Gösteriyor. :heart:",
      "Aşkölçer %76 Gösteriyor. :heart:",
      "Aşkölçer %79 Gösteriyor. :heart:",
      "Aşkölçer %82 Gösteriyor. :heart:",
      "Aşkölçer %85 Gösteriyor. :heart:",
      "Aşkölçer %88 Gösteriyor. :heart:",
      "Aşkölçer %90 Gösteriyor. :heart:",
      "Aşkölçer %91 Gösteriyor. :heart:",
      "Aşkölçer %92 Gösteriyor. :heart:",
      "Aşkölçer %93 Gösteriyor. :heart:",
      "Aşkölçer %94 Gösteriyor. :heart:",
      "Aşkölçer %95 Gösteriyor. :heart:",
      "Aşkölçer %96 Gösteriyor. :heart:",
      "Aşkölçer %97 Gösteriyor. :heart:",
      "Aşkölçer %98 Gösteriyor. :heart:",
      "Aşkölçer %99 Gösteriyor. :heart:",
      "Aşkölçer %100 Gösteriyor. :heart:",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kimi Seviyorsun?')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    kategori: 'Eğlence',
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }
