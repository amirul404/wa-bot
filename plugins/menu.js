let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const thumb = fs.readFileSync('./src/thumb.jpg')
let tags = {
  'main': 'πΌπ°πΈπ½',
  'game': 'πΆπ°πΌπ΄',
  'xp': 'π΄ππΏ & π»πΈπΌπΈπ',
  'sticker': 'πππΈπ²πΊπ΄π',
  'kerang': 'πΊπ΄ππ°π½πΆ π°πΉπ°πΈπ±',
  'quotes': 'πππΎππ΄π',
  'admin': 'π°π³πΌπΈπ½',
  'group': 'πΆππΎππΏ',
  'premium': 'πΏππ΄πΌπΈππΌ',
  'internet': 'πΈπ½ππ΄ππ½π΄π',
  'anonymous': 'π°π½πΎπ½ππΌπΎππ π²π·π°π',
  'nulis': 'πΌπ°πΆπ΄π π½ππ»πΈπ & π»πΎπΆπΎ',
  'downloader': 'π³πΎππ½π»πΎπ°π³π΄π',
  'tools': 'ππΎπΎπ»π',
  'fun': 'π΅ππ½',
  'database': 'π³π°ππ°π±π°ππ΄',
  'vote': 'ππΎππΈπ½πΆ',
  'absen': 'π°π±ππ΄π½',
  'quran': 'π°π» πππ π°π½',
  'jadibot': 'πΉπ°π³πΈ π±πΎπ',
  'owner': 'πΎππ½π΄π',
  'host': 'π·πΎππ',
  'advanced': 'π°π³ππ°π½π²π΄',
  'info': 'πΈπ½π΅πΎ',
  '': 'π½πΎ π²π°ππ΄πΆπΎππ',
}
const defaultMenu = {
  before: `
β­βγ %me γ
β Hai, %name!
β
β Tersisa *%limit Limit*
β Role *%role*
β Level *%level (%exp / %maxexp)* [%xp4levelup lagi untuk levelup]
β %totalexp XP in Total
β 
β Tanggal: *%week %weton, %date*
β Tanggal Islam: *%dateIslamic*
β Waktu: *%time*
β
β Uptime: *%uptime (%muptime)*
β Database: %rtotalreg of %totalreg
β Facebook :
β https://www.facebook.com/amirul404
β Instagram :
β https://instagram.com/fvckmir
β°ββββ
%readmore`.trimStart(),
  header: 'ββββββγ%categoryγβββββββ',
  body: 'ββ %cmd %islimit %isPremium',
  footer: 'ββββββββββββββββββββ\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour12: false
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //Iya bang sy nub
    const reply = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        orderMessage: {
            itemCount: 1122334455,
            itemCoun: 404,
            surface: 404,
            message: `Β© ${conn.user.name}`,
            orderTitle: 'B',
            thumbnail: thumb,
            sellerJid: '0@s.whatsapp.net'
        }
    }
}
let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `Relldev`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN: Rlxfly UwU\nitem1.TEL;waid=6283820073017:6283820073017\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
conn.send3ButtonImg(m.chat, thumb, `Hi! Im ${conn.user.name}\n\nHere my menu...`, text.trim(), 'ping', '.ping', 'owner', '-owner', 'donasi', '.donasi', reply)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3


module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
