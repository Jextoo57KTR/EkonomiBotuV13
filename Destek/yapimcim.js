const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Bey Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` Bey Satış \`**

**Botun Sahibi** | <@923559048350146650>  

[Destek olan Bey Satış'a Teşekkür Ederiz!](https://discord.gg/DNGrgpxDwM) )
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
