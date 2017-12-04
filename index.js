const Discord = require('discord.js');
let client = new Discord.Client();
let config = require('./config-example.json');

client.login(config.token);

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === '+ping') {
    msg.reply('Pong.... PONG...... PON-----!');
}
});