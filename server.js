require('dotenv').config();
const tmi = require('tmi.js');
const ListOfCommands = require("./Commands/list-of-commands.js");
const CommandsService = require("./Service/CommandsService.js");

const client = new tmi.Client({
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: [ process.env.TWITCH_CHANNEL_NAME ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    CommandsService(tags['display-name'], message);

    if(self || !message.startsWith('!')){
        return ;
    }

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command) {
        const response = ListOfCommands(command);
        if(response !== undefined) {
            client.say(channel, `${response}`);
        }
    }
});
