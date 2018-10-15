const Discord = require('discord.js');
const client = new Discord.Client();
const  prefix = "."

   client.on("ready", () => {
    console.log(`I have started, Don Chuckles.`); 
    client.user.setActivity(`members.`, {type:"WATCHING"});
  });
       
  client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Associate");
    member.addRole(role).catch(console.error);

     client.on('message', message => {
 
const command = message.content.split(" ")[0];
command = command.slice(prefix.length);
 
  if (message.content === prefix + 'targets') {
    message.reply('We have no targets right now.');
  
  });  

client.login(process.env.BOT_TOKEN);
