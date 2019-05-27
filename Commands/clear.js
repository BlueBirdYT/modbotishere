const Discord = require("discord.js");
module.exports = async (bot, msg, args) => {


if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(':x: error you have no perms!');
if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(':x: please give me MANAGE_MESSAGES perms for me to do your work');
 
 
  if(!args[0]) return message.channel.send("Usage: ?clear <any_number_between_1-1000>");
  if(args[0] > 1000) return message.reply("Sorry can\'t delete that many msges");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});
