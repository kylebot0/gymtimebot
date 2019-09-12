const Discord = require('discord.js');

const TOKEN = 'NjIwNzI4MDMxMDE0ODEzNzMx.XXbBeA.gVLwUrFadStBN4g0FL-eyYjp4z4';
const PREFIX = 'niffauw '

var bot = new Discord.Client();



bot.on('ready', function() {
    console.log('ready');
    bot.user.setPresence({ game: { name: "pumping iron" , type: 0 } });
});
bot.on('message', function(message) {
    //	console.log(message.content);
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    // if (message.content == 'hello') {
    // 	message.channel.sendMessage('Hi, there');
    // }

    var args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0].toLowerCase()) {
        case 'gymtime?':
            message.channel.send('Het is tijd voor de gym <@186170665936748544>');
            break;
        case 'vmbo checklist':
                message.channel.send('Het is tijd voor de gym @MikeOnTheMic');
                break;
        default:
            message.channel.send('Invalid command')
            break;

    }

});

bot.login(TOKEN);