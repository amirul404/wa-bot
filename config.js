let fs = require('fs')
let fetch = require('node-fetch')
global.tum = fs.readFileSync('./src/hadeh.jpg')
global.tum2 = fs.readFileSync('./src/error.jpg')
global.thumb = fs.readFileSync('./src/thumb.jpg')
global.thumb2 = fs.readFileSync('./src/error.jpg')
global.owner = ['6288262231046','6281370338803'] // Put your number here
global.mods = ['6288262231046','6281370338803'] // Want some help?
global.prems = ['6288262231046','6281370338803'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'AbilGanss',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://velgrynd.herokuapp.com': ' ' // Please register if you want to get apikey 
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Amirul404'
global.multiplier = 69 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
