const Discord = require("discord.js");

exports.run = async (bot,  msg, args) => {

/*  const list = {
    play: "PLAYING", 
    stream: "STREAMING", 
    listen: "LISTENING", 
    watch: "WATCHING"
  }; */
if(msg.author.id !== '559642661330485304', '455322915471097857') return;
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
