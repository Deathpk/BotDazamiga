require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
    identity: {
        //TODO : Fazer o .env com as credenciais.
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_BOT_USERNAME
    },
    channels: [ 'forgivenbr' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);
});
