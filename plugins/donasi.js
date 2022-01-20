let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081370338803]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [081370338803]
│ • https://saweria.co/amirul404
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
