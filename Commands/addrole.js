const Discord = require("discord.js");
module.exports = async (bot, msg, args) => {

  //?addrole @Asher Muted 
  if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send(`:x: you don't have permission to use this command`)
  if(!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.channel.send(':x: please give me MANAGE_ROLES perms for me to do your work :(');
  let rMember = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
  if(!rMember) return msg.reply(":x:Error -> Couldn't find that user, Sorry:disappointed:");
  let role = args.join(" ").slice(22);
 // console.log(role);
//let role = args[1];
  if(!role) return msg.reply(":x:Error -> Specify a role!");
  let gRole = msg.guild.roles.find(r => r.name === role);
  if(!gRole) return msg.reply(":x:Error -> Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return msg.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
   msg.channel.send(`Congrats to <@${rMember.id}>, ${gRole.name} successfully Given`)
   }catch(e){
    console.log(e);
  }
}
