const fs = require('fs');
const path = require('path');
module.exports = async (sock, msg, from, args) => {
    const plugins = fs.readdirSync(path.join(__dirname)).map(file => file.replace('.js', ''));
    let menuText = `*🤖 KAACRASH BOT MENU*\n\n`;
    plugins.forEach(cmd => { menuText += `• .${cmd}\n`; });
    await sock.sendMessage(from, { text: menuText }, { quoted: msg });
};
