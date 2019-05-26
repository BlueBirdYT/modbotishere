const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
  /*
online - user is online
idle - user is AFK
offline - user is offline or invisible
dnd - user is in Do Not Disturb
*/
    const setStatus = msg.content.split(' ');

   if(msg.author.id !== '455322915471097857'){ 
     return 
   }
   if(msg.author.id !== '559642661330485304'){
	   return

    else if(setStatus[1] === 'idle'){
        bot.user.setStatus("idle")
            .then(msg.channel.send("My status has been set to: "+setStatus[1]))
            .catch(console.error);
    } 

    else if(setStatus[1] === 'online'){
        bot.user.setStatus('online')
            .then(msg.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'invisible'){
        bot.user.setStatus('offline')
            .then(msg.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'dnd'){
        bot.user.setStatus('dnd')
            .then(msg.channel.send("My status has been set to: "+ setStatus[1] + "(do not disturb)"))
            .catch(console.error);
    }

    else{
        return msg.channel.send("I could not set my status please type one of the following status: idle, online, invisible, dnd (do not disturb)");
    }

}
