const Discord = require("discord.js");
const config = require(`../Configuration/config.json`);

module.exports = async(bot, msg, args) => {

/*  const list = {
    play: "PLAYING", 
    stream: "STREAMING", 
    listen: "LISTENING", 
    watch: "WATCHING"
  }; */
if(!config.maintainers.includes(msg.author.id)) return; msg.channel.send("this command is available to the dev's only sorry!");
let stat = args.slice(2).join(" ");
if(!stat) return msg.channel.send("Usage: $status <playing, listening, streaming, watching> <what are you playing or listening or watching or streaming>");
let type = args[1];
if(!type) return msg.channel.send("Usage: $status <playing, listening, streaming, watching> <what are you playing or listening or watching or streaming>");
let status = args[0];
if(!status) return msg.channel.send("What do you want your bot to be");
bot.user.setActivity(stat, {
  type: type
});
bot.user.setStatus(`${status}`);
msg.channel.send(`Presence has been set to ${type} ${stat}`);

}
