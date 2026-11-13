module.exports = async (sock, msg, from, args) => {
    await sock.sendMessage(from, { text: 'Pong! 🏓' }, { quoted: msg });
};
