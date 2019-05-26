const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:ping_pong: **${bot.user.username}** v${config.version} by Uthsho#4234 and 고스트 라이더 Aka Ayush#1999, serving ${bot.users.size} users and ${bot.guilds.size} servers`)
        .setFooter(`${bot.user.username} v${config.version}`)
        .setColor(0x00ff05)

    msg.channel.send(embed)
}
