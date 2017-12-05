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

    if(command === "about"){
        const embed = {
            "title": "**WolfstormBot: DEVELOPER INSTANCE**",
            "description": "A Discord.JS Bot written with :heart: and care by: Wolfstorm#0986",
            "url": "https://github.com/Wolfst0rm/WolfstormBotJS/tree/develop",
            "color": 9352558,
            "timestamp": new Date(),
            "footer": {
                "icon_url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4",
                "text": "Coming Soon 2018/19"
            },
            "thumbnail": {
                "url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4"
            },
            "author": {
                "name": "Wolfst0rm",
                "url": "https://github.com/Wolfst0rm/",
                "icon_url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4"
            },
            "fields": [
                {
                    "name": "__Features__",
                    "value": "Coming Soon!"
                },
                {
                    "name": "__Documentation__",
                    "value": "Coming Soon!"
                },
                {
                    "name": "__Pull Requests__",
                    "value": "Welcomed! Submit them [here](https://github.com/Wolfst0rm/WolfstormBotJS/pulls)",
                    "inline": true
                },
                {
                    "name": "__Issues?__",
                    "value": "Submit them via our [Issue Page](https://github.com/Wolfst0rm/WolfstormBotJS/issues/new)",
                    "inline": true
                }
            ]
        };
        msg.channel.send({ embed });
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