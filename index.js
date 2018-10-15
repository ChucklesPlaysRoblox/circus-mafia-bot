const Discord = require('discord.js');
const client = new Discord.Client();

   client.on("ready", () => {
    console.log(`I have started, Don Chuckles.`); 
    client.user.setActivity(`members in the Circus Mafia.`, {type:"WATCHING"});
  });
       
  client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Associate");
    member.addRole(role).catch(console.error);
});

client.login(process.env.BOT_TOKEN);
