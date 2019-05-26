<const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

/*  const list = {
    play: "PLAYING", 
    stream: "STREAMING", 
    listen: "LISTENING", 
    watch: "WATCHING"
  }; */
let stat = args.slice(2).join(" ");
if(!stat) return message.channel.send("Usage: ?status <playing, listening, streaming, watching> <what are you playing or listening or watching or streaming>");
let type = args[1];
if(!type) return message.channel.send("Usage: ?status <playing, listening, streaming, watching> <what are you playing or listening or watching or streaming>");
let status = args[0];
if(!status) return message.channel.send("What do you want your bot to be");
bot.user.setActivity(stat, {
  type: type
});
bot.user.setStatus(`${status}`);
message.channel.send(`Presence has been set to ${type} ${stat}`);
}
