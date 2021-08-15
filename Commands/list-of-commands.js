const getCommandResponse = function (command) {
    const listOfCommands = [
        {name:'discord', phrase:"Segura nosso canal no Discord: ", value:"https://discord.gg/PzMdDYD"},
        {name:'github',  phrase:"Toma-le meu perfil no github: ", value:"https://github.com/Deathpk"},
        {name: 'php', phrase: "O atual status do PHP é: ", value:"Morrendo desde 1999..."}
    ];

    const response = listOfCommands.find(element => (element.name === command));
    if(response !== undefined){
        return response.phrase + " " + response.value;
    }
};

module.exports = getCommandResponse;
