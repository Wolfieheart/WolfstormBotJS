const Discord = require("discord.js"),
    client = new Discord.Client(),
    config = require("./config.json"),
    fs = require('fs');

let botcommands;

let commandcache = function() {
    let mkcache = function() {
        let commands = [];
        fs.readdir('./commands/', function(err,files){
            if(err) throw err;
            files.forEach(function(file, index) {
                console.log('Loaded command: ' + file.replace('.js', ''));
                // Slice off the .js to prepare for Discord use.
                commands[file.replace('.js', '')] = require('./commands/' + file);
            });
        });

        return commandcache['commands'] = commands;
    }

    return this['commands'] != undefined ? this['commands'] : botcommands = mkcache(); 
}

client.on('ready', () => {
    console.log('Loading... (commands)      \r');
    commandcache();
    //Internal Console Log for USERID, Servers and Channel Count
    console.log(client.user.username + " is now Online!");
    console.log("============================");
    console.log("UserID: " + client.user.tag + "" );
    console.log("No of Servers: " + client.guilds.size + "" );
    console.log("No of Channels: " + client.channels.size + "");
    console.log("============================");

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
    if(msg.content.startsWith(config.prefix)) {
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(typeof botcommands[command] != "undefined") {
            botcommands[command].run(msg,args);
        }
    }
});

console.log('Loading... (discord.js)      \r');
client.login(config.token);