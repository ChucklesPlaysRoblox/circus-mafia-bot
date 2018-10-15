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
 
  if (message.content === prefix + 'rules') {
    message.reply('```css
                  Mafia rules and customs

In order to be invited into the American Mafia and become a member one must perform a series of tasks, such as committing murder for the family and not for one's own personal benefit. When the boss decides to let a member into the family one will be part of a ceremony, involving the drawing of blood, swearing an oath over a gun or holy picture, and obeying the rules of the organization. In New York City, the Mafia created customs and traditions which the members have to follow. If one breaks any of the rules they can be killed by another member of the family and usually the murder is committed by the people closest to that person.[23][24]

    "Omertà" - is the oath or "code of silence", never talk to the authorities.
    "Ethnicity" - only men of Italian descent are allowed to become full members (made man) Associates, partners, allies etc. have no ethnic limits
    "Family secrets" - members are not allowed to talk about family business to non-members.
    "Blood for blood" - if a family member is killed (by another member) no one can commit murder (in revenge) until the boss gives permission.
    "No fighting among members" - from fist fights to knife fights.
    "Tribute" - every month; member must pay the boss; also giving the boss a cut on any side deals.
    "Adultery" - members are not allowed to commit adultery with another family member’s wife.
    "No facial hair" - members were not allowed to grow mustaches; part of the Mustache Pete way.[25][26]

Homosexuality is reportedly incompatible with the American Mafia code of conduct. In 1992, John D'Amato, acting boss of the DeCavalcante family, was killed when the family learned of his sexual relationships with other men.[27]```');
  
  });  

client.login(process.env.BOT_TOKEN);
