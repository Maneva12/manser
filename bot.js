const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[Komutlar Yükleniyor... ✌] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

  // Oynuyor Kısmı
  
      var actvs = [
        `Yapım Aşaması!`,
        `Şuan Kullanılamaz!`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING'});
    }, 5000);
    
  
      console.log (`Şu İsimle Giriş Yapıldı! = ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kaç Kullanıcıya Hizmet Veriliyor? = ${client.users.cache.size}`);
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};


//KOMUTLAR

//CAPSENGEL

client.on("message", async msg => {
const cdb = require("croxydb")
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (cdb.get(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ Sunucumuzda Fazla Derecede Büyük Harf Kullanmazsan Sevinirim! <@${msg.author.id}>`)
              .then(m => m.delete({ timeout: 5000}));
          }
        }
      }
    }
  }
});

//EMOJİ YÜKLEME PRIVATE

client.on("message", async message => {
    let logChannelID = "981277304946831421";
    let emojiChannelID = "981277304946831421";

    let args = message.content.split(' ').slice(0);
    const emojis = args[0];
    let emoji = Discord.Util.parseEmoji(emojis);

    if (message.channel.id === emojiChannelID) {
        if (emoji.id) {
            const link = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`;
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setColor("RANDOM")
                .setDescription(`Sayın Geliştiricim ${message.author}, Bu Emoji Başarıyla Eklendi!`)
                .setImage(link)
                .setFooter(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
                .setTimestamp()
            await message.guild.emojis.create(`${link}`, `${emoji.name}`)
            return client.channels.cache.get(logChannelID).send(embed)
        }
    }
});

//SA-AS
client.on('message', message => {
  
const cdb = require("orio.db")
  let a = cdb.get(`saas_${message.guild.id}`)
  if (a == 'acik') {
  if (message.content === 'sa') {
    const member = message.mentions.members.first()
    message.reply(`**Aleyküm Selam Kardeş**`);    
  }
  if (!a) return
}});

//SNIPE MAIN
client.on("messageDelete", message => {
const cdb = require("croxydb")

if(message.author.bot) return;
if(message.channel.type === "dm") return;

cdb.set(`snipe_${message.channel.id}`, {
mesaj: message.content,
silen: message.author.id
})

})



client.login(process.env.token);
