const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    //Internal Console Log for USERID, Servers and Channel Count
    console.log("WolfstormBot is now Online!");
    console.log("============================");
    console.log("UserID: " + client.user.tag + "" );
    console.log("No of Servers: " + client.guilds.size + "" );
    console.log("No of Channels: " + client.channels.size + "");

    //Set the UserGame to display how many servers the bot is on
    client.user.setGame("on " + client.guilds.size + " servers!");
});

client.on("guildCreate", guild => {
    //Log all New Guild Information
   console.log("New Guild Joined: " + guild.name + ".");
   console.log("GuildID: " + guild.id + "" );
   console.log("Members Count: " + guild.memberCount + "");

   //Update the UserGame to display how many servers the bot is on
   client.user.setGame("on" + client.guilds.size + " servers");

});

client.on("message", msg => {

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        msg.channel.send("PONG!");
    }
});
// client.on('message', msg =>
// {
//     if(msg.content.startsWith(prefix + 'ping')) {
//         const m = msg.channel.send("Ping?");
//         m.edit("Pong! Latency is " + m.createdTimestamp - message.createdTimestamp + "ms. API Latency is " + Math.round(client.ping) + " ms");
//     }
// });

client.login(config.token);