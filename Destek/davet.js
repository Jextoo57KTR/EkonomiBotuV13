const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Bey | Davet")
.setDescription(`
**Beni Sunucuna Ekle ve Eğlenmeye Başla**

[≫ Davet Etmek İçin Buraya Tıkla ≪](https://discord.com/api/oauth2/authorize?client_id=1131344709432905738&permissions=70368744177655&scope=bot)
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["invite","inv"],
  };
  
  exports.help = {
    name: 'davet'
  };
