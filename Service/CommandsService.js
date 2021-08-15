const logMessageToConsole = function getUserMessages(displayName, message)
{
    const botUserName = "botdazamiga";

    if( !message.startsWith('!') && displayName !== botUserName ){
        console.log(`${displayName}: ${message}`)
    }
}
module.exports = logMessageToConsole;
