const Discord = require('discord.js');



const TOKEN = 'NjIwNzI4MDMxMDE0ODEzNzMx.XXbGRw.0UwC-0Wsuy2i8e0IqbAF3UZhJPA';

const client = new Discord.Client();
const prefix = 'niffauw ';

client.on('ready', function() {
    console.log('ready');
    client.user.setPresence({ game: { name: "with weights dude" , type: 0 } });
});

client.on('message', message => {

	let msg = message.content.toUpperCase();
	let sender = message.author;
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();

	if (!msg.startsWith(prefix)) return; 
	if (message.author.bot) return;

	//Command handler

try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(client, message, args);

} catch (e) {
	console.log(e.message);
} finally {
	console.log(`${message.author.tag} ran the command ${cmd}`);

}

	


})


client.login(TOKEN);