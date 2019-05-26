const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setTitle(`__**HELP**__`)
        .addField(`ping`, `Ping the bot`, false)
        .addField(`about`, `About DISCORD MODERATOR`, false)
        .addField(`serverinfo`, `Info about the server`, false)
        .addField(`stats`, `View some statistics about DISCORD MODERATOR`, false)
        .addField(`debug`, `Info about the Host and the bot`, false)
        .addField(`uptime`, `How long has the bot been up?`, false)
        .addField(`profile`, `About your user profile`, false)
        .addField(`warn`, `Warn someone about something`, false)
        .addField(`kick`, `Kick the mentioned user`, false)
        .addField(`ban`, `Ban the mentioned user`, false)
        .addField(`embed`, `Make an embed to get yourself heard`)
        .setFooter(`Made with <2 pby the dev's`)
        .setColor(0x157f87)
        msg.author.send(embed)
        msg.channel.send(`:mailbox: ${msg.author.username}, Check your DM's`);
 
