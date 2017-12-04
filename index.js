const Discord = require('discord.js');
let client = new Discord.Client();
let config = require('./config.json');
let prefix = "+";

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + ' !');
});

client.on('message', msg =>
{
    if(msg.content.startsWith(prefix + 'ping')) {
        msg.reply('Pong.... PONG...... PON-----!');
    }
});

client.login(config.token);