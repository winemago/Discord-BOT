const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODEyNTY0NDEyODE2Njg3MTA0.YDCllA.g1zlEc67trTlaQMM_d6DzPhYMOo');

const commandhandler = require('./comandHandler');

	///	log in channel

client.once('ready', () => {
	console.log(`ready! ${client.user.tag} `);
	const thischannel = client.channels.cache.get('332029290105274370');
	//thischannel.send(`hola soy ${client.user} Preguntame como!!`);
});

   
client.on('message', commandhandler);

 



