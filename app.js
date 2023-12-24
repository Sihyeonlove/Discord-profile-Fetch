const { Client, intents, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');

let token;
let id;

try {
    token = fs.readFileSync('token.txt', 'utf-8');
} catch (error) {
    console.log("token.txt 파일을 읽는데 실패했습니다.");
}
try {
    id = fs.readFileSync('id.txt', 'utf-8');
} catch (error) {
    console.log("token.txt 파일을 읽는데 실패했습니다.");
}
client.on('ready', async() => {
    try {
        const userfetch = await client.users.fetch(id);
        console.log(userfetch.displayAvatarURL({ dynamic: true, size: 4096 }));
    } catch (error) {
        console.log("id.txt 또는 token.txt 내용을 읽는데 실패한 것 같거나, 존재하지 않는 사람의 id입니다.\n상세 사유 : " + error);
    }
    try {
        throw new Error("위 URL을 복사하여, 이미지처럼 쓸 수 있습니다.");
    } catch (error) {
        console.log("\n위 URL을 복사하여 이미지처럼 쓸 수 있습니다,\n");
        process.exit(1);
    }
});
const rest = new REST({ version: '10' }).setToken(token); // discord.js v14가 되면서, rest가 v10을 지원함.
client.login(token);