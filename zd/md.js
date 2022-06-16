require('./command/Edit/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const speed = require('performance-now')
const hx = require('hxz-api')
const cl = require('caliph-api') 
const cookie = require('cookie')
const crypto = require('crypto')
const yts = require('yt-search') 
const proces = require('process') 
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const ms = require('ms')
const Jimp = require('jimp') 
const { color, bgcolor } = require('./command/Lib/color')
const { addCmd, AddHituser } = require('./command/Lib/hitbot')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./command/Lib/register')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./command/Lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, getRandom, jsonformat, tanggal, runtime } = require('./command/Lib/myfunc')
const { niatsholat, 
asmaulhusna,  
bacaanshalat, 
getDoujin, 
onGoing, 
kusoNime,
ffstalk, 
npmstalk, 
quotesanime, 
pornovid, 
hentaivid, 
nomorhp, 
character, 
anime, 
manga, 
searchsticker, 
igstalk, 
igfoto, 
igvideo, 
listsurah, 
jadwalsholat, 
telesticker, 
aiovideodl, 
linkwa,
mediafiredl } = require('./command/Lib/scrape')

let hit = [];
hit_today = [];
const commund = JSON.parse(fs.readFileSync('./command/Database/datacmd.json'));
const hitbot = JSON.parse(fs.readFileSync('./command/Database/command.json'));
const userHit = JSON.parse(fs.readFileSync('./command/Database/userhit.json'));
const owner = JSON.parse(fs.readFileSync('./command/Database/owner.json'));
const utih = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'));
const _registered = JSON.parse(fs.readFileSync('./command/Database/registered.json'));
const register = JSON.parse(fs.readFileSync('./command/Database/register.json'));
global.db = JSON.parse(fs.readFileSync('./command/Database/database.json'))
if (global.db) global.db = {       
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await sock.decodeJid(sock.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const timestamp = speed();
const latensi = speed() - timestamp
hit_today.push(command);

const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        const content = JSON.stringify(m.message)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
        
const banUser = await sock.fetchBlocklist()
const isBan = banUser ? banUser.includes(m.sender) : false
const isRegistered = checkRegisteredUser(m.sender)

const cmdadd = () => {
	    utih[0].totalnya += 1
    	fs.writeFileSync('./command/Database/totalcmd.json', JSON.stringify(utih))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'))[0].totalnya

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
            
const reSize = async(bsdjejd, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(bsdjejd);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

let addHit = (sender, command) => {
hitbot.push({
"id": sender,
"command": command
})
fs.writeFileSync('./command/Database/hit.json', JSON.stringify(hitbot))
}

const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (!sock.public) {
if (!m.key.fromMe) return
}

try {
ppuser = await sock.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

try {

let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}

let setting = global.db.settings[botNumber]
        if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
		if (!('templateLoc' in setting)) setting.templateLoc = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLoc: false,
	    }

} catch (err) {
console.error(err)
}

if (m.sender.startsWith('212')) return sock.updateBlockStatus(m.sender, 'block')

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const alalla = JSON.parse(fs.readFileSync('./command/Database/anime.json'));
const ranthumb = alalla[Math.floor(Math.random() * alalla.length)];
const tytyd = await getBuffer(ranthumb)
const rkrk = await reSize(tytyd, 200, 200)

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: sock.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        sock.ev.emit('messages.upsert', msg)
        }

        const reply = async(teks) => {
        sock.sendMessage(m.chat, { text : teks, mentions: await sock.parseMention(teks), contextInfo : {
        "mentionedJid": [sender],
        "externalAdReply": {
        "showAdAttribution": true,
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnail": ppnyauser,
        "previewType": "VIDEO",
        "mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
        "sourceUrl": 'https://youtu.be/b0CCKgVEhlk'}}},
        { quoted: m })
        }
        
        if (m.isGroup && !m.key.fromMe &&  global.db.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        sock.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    sock.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }

if (isCmd) {
addHit(sender, command)
AddHituser(sender, userHit)
}

const troli = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By KirBotz',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}

const lep = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function monospace(string) {
return '```' + string + '```'
}

async function post(url, formdata = {}, cookies) {
  let encode = encodeURIComponent;
  let body = Object.keys(formdata)
    .map((key) => {
      let vals = formdata[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&");
  return await fetch(`${url}?${body}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: cookies,
    },
  });
}

async function textpro(url, text) {
  if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url))
    throw new Error("Url Salah!!");
  const geturl = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    __cfduid: hasilcookie.__cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) form.append("text[]", texts);
  form.append("submit", "Go");
  form.append("token", token);
  form.append("build_server", "https://textpro.me");
  form.append("build_server_id", 1);
  const geturl2 = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const caritoken2 = await geturl2.text();
  const token2 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(caritoken2);
  if (!token2) throw new Error("Token Tidak Ditemukan!!");
  const prosesimage = await post(
    "https://textpro.me/effect/create-image",
    JSON.parse(token2[1]),
    hasilcookie
  );
  const hasil = await prosesimage.json();
  return `https://textpro.me${hasil.fullsize_image}`;
}

const ktedh = await reSize(ppnyauser, 200, 200)

async function replyReg(teks) {
const buttonsDefault = [{ quickReplyButton: { displayText: ` ꪶ VERIFY ꫂ `, id: `${prefix}verify` } }]                 
const buttonMessage = { 
text: teks, 
footer: "Creator Akira ꪶ𖣂ꫂ", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}                                   
}
return sock.sendMessage(from, buttonMessage)
}

async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./command/Database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
var button = [
{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } }
]
var anj = `「 *PENDAFTARAN USER* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna`
sock.sendMessage(from, { caption: anj, location: { jpegThumbnail: ktedh }, templateButtons: button, footer: `Creator Akira ꪶ𖣂ꫂ`, mentions: [m.sender] })
.catch ((err) => reply(err))
}

const turbrek = `break`

switch (command) {
case 'menu': case 'help':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6289652402025@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${sender.split("@")[0]} 
Saya KirBotz Saya Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttoons = [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessaage = {
document: ktedh, 
fileName: `Bot By KirBotz`, 
mimetype: `application/${bykir}`,
jpegThumbnail: ktedh,
caption: mbc,
fileLength: "999999999",
mentions:[sender, botzkir],
footer: `_Powered By @${botzkir.split("@")[0]}_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ktedh,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By KirBotz',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'verify':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'igstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} kirbotzx`)
aj = await igstalk(`${q}`)
sock.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'ffstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} 946716486`)
eeh = await ffstalk(`${q}`)
reply(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'ghstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} KirBotz`)
hw = await fetchJson(`https://api.github.com/users/${q}`)
sock.sendMessage(m.chat, { image: { url: hw.avatar_url }, caption: 
`*/ Stalking Github \\*

Name : ${hw.login}
Id : ${hw.id}
Node Id : ${hw.node_id}
Avatar Url : ${hw.avatar_url}
Gravatar Id : ${hw.gravatar_id}
Url : ${hw.url}
Url2 : ${hw.html_url}
Followers Url : ${hw.followers_url}
Following Url : ${hw.following_url}
Gists Url : ${hw.gists_url}
Starred Url : ${hw.starred_url}
Subscriptions Url : ${hw.subscriptions_url}
Organizations Url : ${hw.organizations_url}
Repos Url : ${hw.repos_url}
Events Url : ${hw.events_url}
Received Events Url : ${hw.received_events_url}
Type : ${hw.type}
Site Admin : ${hw.site_admin}
Name : ${hw.name}
Company : ${hw.company}
Blog : ${hw.blog}
Location : ${hw.location}
Email : ${hw.email}
Hireable : ${hw.hireable}
Bio : ${hw.bio}
Twitter Username : ${hw.twitter_username}
Public Repos : ${hw.public_repos}
Public Gists : ${hw.public_gists}
Followers : ${hw.followers}
Following : ${hw.following}
Created At : ${hw.created_at}
Updated At : ${hw.updated_at}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'npmstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} @adiwajshing/baileys`)
eha = await npmstalk(`${q}`)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'setallmenu': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
let setbot = db.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateMsg'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateLoc'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = true
reply(api.success)
} else {
let sections = [
{
title: "SELECT MENU BOT",
rows: [
{title: "Template Image", rowId: `setallmenu templateImage`, description: `Change Allmenu bot to Template Image`},
{title: "Template Video", rowId: `setallmenu templateVideo`, description: `Change Allmenu bot to Template Video`},
{title: "Template Gif", rowId: `setallmenu templateGif`, description: `Change Allmenu bot to Template Gif`},
{title: "Template Message", rowId: `setallmenu templateMsg`, description: `Change Allmenu bot to Template Message`},
{title: "Template Location", rowId: `setallmenu templateLoc`, description: `Change Allmenu bot to Template Location`}
]
},
]
sock.sendList(m.chat, `Pilih 1 Setallmenu Di Bawah`, `Creator Akira`, `Hello Owner !!!`, `SELECT`, sections, troli)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'allmenu':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
tod = await reSize(ppnyauser, 200, 200)
memegnu = `*Hai Kak* ${pushname}

Runtime : ${runtime(process.uptime())}
Speed : ${latensi.toFixed(4)} _Detik_
Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
Tanggal : ${tanggal(new Date())}
Total : ${_registered.length} User

*/Owner*
$ [ EXE ]
> [ EVAL ]
< [ EVAL2 ]
=> [ ASYNC ]
${prefix}public
${prefix}self
${prefix}out
${prefix}setppbot 'panjang'
${prefix}ban add 628××××××
${prefix}ban del 628××××××
${prefix}addowner 628×××××
${prefix}delowner 628×××××
${prefix}listban
${prefix}getcase
${prefix}bcall
${prefix}join
${prefix}creategc
${prefix}setallmenu

*/Other*
${prefix}owner
${prefix}dashboard
${prefix}report
${prefix}sticker
${prefix}toimg
${prefix}quotesanime

*/Islami*
${prefix}asmaulhusna
${prefix}bacaanshalat
${prefix}niatsholat
${prefix}jadwalsholat
${prefix}listsurah
${prefix}kisahnabi

*/Stalker*
${prefix}ffstalk 946716486
${prefix}ghstalk KirBotz
${prefix}igstalk kirbotzx
${prefix}npmstalk @adiwajshing/baileys

*/Downloader*
${prefix}play
${prefix}ytmp4
${prefix}ytmp3
${prefix}tiktoknowm
${prefix}tiktokaudio

*/Group*
${prefix}listgc
${prefix}antilink on
${prefix}antilink off
${prefix}promote @628×××××
${prefix}demote @628××××××
${prefix}add 628×××××
${prefix}kick @628××××
${prefix}tagall teks
${prefix}hidetag teks

*/Video*
${prefix}hentai
${prefix}porno
${prefix}asupan
${prefix}bocil
${prefix}rikagusriani

*/Text Pro*
${prefix}candy teks
${prefix}christmas teks
${prefix}3dchristmas teks
${prefix}sparklechristmas teks
${prefix}deepsea teks
${prefix}scifi teks
${prefix}rainbow teks
${prefix}waterpipe teks
${prefix}spooky teks
${prefix}pencil teks
${prefix}circuit teks
${prefix}discovery teks
${prefix}metalic teks
${prefix}fiction teks
${prefix}demon teks
${prefix}transformer teks
${prefix}berry teks
${prefix}thunder teks
${prefix}magma teks
${prefix}3dstone teks
${prefix}neonlight teks
${prefix}glitch teks
${prefix}harrypotter teks
${prefix}brokenglass teks
${prefix}papercut teks
${prefix}watercolor teks
${prefix}multicolor teks
${prefix}neondevil teks
${prefix}underwater teks
${prefix}graffitibike teks
${prefix}snow teks
${prefix}cloud teks
${prefix}honey teks
${prefix}ice teks
${prefix}fruitjuice teks
${prefix}biscuit teks
${prefix}wood teks
${prefix}chocolate teks
${prefix}strawberry teks
${prefix}matrix teks
${prefix}blood teks
${prefix}dropwater teks
${prefix}toxic teks
${prefix}lava teks
${prefix}rock teks
${prefix}bloodglas teks
${prefix}hallowen teks
${prefix}darkgold teks
${prefix}joker teks
${prefix}wicker teks
${prefix}firework teks
${prefix}skeleton teks
${prefix}blackpink teks
${prefix}sand teks
${prefix}glue teks
${prefix}1917 teks
${prefix}leaves teks
${prefix}stoneeffect teks`
let btn = [{
urlButton: {
displayText: "Group Bot",
url: "https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ",
}
},
{ 
quickReplyButton: { 
displayText: `Owner`, 
id: `${prefix}owner` } },
{ 
quickReplyButton: { 
displayText: `Dashboard`, 
id: `${prefix}dashboard` } }
]
let setbot = db.settings[botNumber]
if (setbot.templateImage) {
sock.send5ButImg(m.chat, memegnu, `Creator Akira`, ppnyauser, btn)
} else if (setbot.templateGif) {
sock.send5ButGif(m.chat, memegnu, `Creator Akira`, tytyd, btn)
} else if (setbot.templateVideo) {
sock.send5ButVid(m.chat, memegnu, `Creator Akira`, global.vidkir, btn)
} else if (setbot.templateMsg) {
sock.send5ButMsg(m.chat, memegnu, `Creator Akira`, btn)
} else if (setbot.templateLoc) {
sock.send5ButLoc(m.chat, memegnu, `Creator Akira`, tod, btn)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'kisahnabi':{
if (!q) return reply(`Contoh ${prefix+command} adam`)
dsh = await fetchJson(`https://kirbotz-api.herokuapp.com/api/kisahnabi?nabi=${q}&apikey=${kirkey}`)
reply(`Nama : ${dsh.result.name}
Kelahiran : ${dsh.result.kelahiran}
Wafat Usia : ${dsh.result.wafat_usia}
Singgah : ${dsh.result.singgah}
Kisah :
${dsh.result.kisah}`)
}
break
case 'listsurah':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
mke = await listsurah()
reply(`*/ List Surah \\*

Author : ${mke.author}
ListSurah :
${mke.listsurah}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'niatsholat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} isya
List Nya
shubuh
dzuhur
ashar
magribh
isya`)
ysehh = await niatsholat(`${q}`)
reply(`Name : ${ysehh.name}
Arabic : ${ysehh.arabic}
Latin : ${ysehh.latin}
Terjemahan: ${ysehh.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'asmaulhusna':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
yseh = await asmaulhusna()
reply(`Nomor : ${yseh.nomor}
Latin : ${yseh.latin}
Arabic : ${yseh.arabic}
Indonesia : ${yseh.id}
English : ${yseh.en}`)
addCmd(command.slice(0), 1, commund)
break
case 'jadwalsholat':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} Tasikmalaya`)
kfn = await jadwalsholat(`${q}`)
reply(`Kota : ${q}
Tanggal : ${kfn.tanggal}
Imsyak : ${kfn.imsyak}
Shubuh : ${kfn.subuh}
Dzuhur : ${kfn.dzuhur}
Ashar : ${kfn.ashar}
Magribh : ${kfn.maghrib}
Isya : ${kfn.isya}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'bacaanshalat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
dehe = await bacaanshalat()
reply(`Nomor : ${dehe.nomor}
Name : ${dehe.name}
Arabic : ${dehe.arabic}
Latin : ${dehe.latin}
Terjemahan : ${dehe.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'addowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'delowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'bcall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!m.quoted) return reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
quoted.copyNForward(yoi, true, {quoted:m})
}
reply('Sukses Broadcast')
}
break
case 'dashboard': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
var jumlahCmd = commund.length
if (jumlahCmd > 10) jumlahCmd = 10
teks = `*「 Total Hit Command 」*\nGlobal Hit : ${totalhit}\nToday Hit : ${hit_today.length}\n\n*Most Command Global*`
for (let i = 0; i < jumlahCmd ; i ++) {
teks += `\n » Command : ${commund[i].id}, ${commund[i].total} used`
}
reply(teks) 
}
addCmd(command.slice(0), 1, commund)
break
case 'report': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!args.join(" ")) return reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(0), 1, commund)
break
case 'owner': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sock.sendContact(m.chat, owner, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves':
case 'stoneeffect': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Example : ${prefix + command} KirBotz`) 
reply(api.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
if (/stoneeffect/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
let anu = await textpro(link, q)
sock.sendMessage(m.chat, { image: { url: anu }, caption: `${api.success}` }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'toimage': case 'toimg': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.quoted) return reply('Reply Sticker')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(api.wait)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(0), 1, commund)
break
case 'creategc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await sock.groupCreate(args.join(" "), [])
let response = await sock.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
sock.sendMessage(m.chat, { text:teks, mentions: await sock.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'setppbot': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await sock.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await sock.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await sock.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'getcase': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply("Mau ngambil case apa?")
try {
reply(`// Created By KirBotz\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./command/md.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
reply("Case Tidak Ditemukan")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'join': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!text) return reply(`Link Nya Mana Kak?`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
reply(api.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await sock.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'out':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.groupLeave(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'public': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = true
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'self': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = false
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'ban': case 'block': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0] : Number(args[1]) ? Number(args[1]) + "@s.whatsapp.net" : m.quoted ? m.quoted.sender : false
if (!orgnye) return reply(`Example : \n- ${prefix + command} del/add <number/tag/reply>\n- ${prefix + command} del 6281385062956`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
sock.updateBlockStatus(orgnye, 'block')
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
sock.updateBlockStatus(orgnye, 'unblock')
reply(`Succes delban`)
} else {
reply("Error")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: "_Creator Akira_",
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await sock.parseMention(teskd),
sections
}
sock.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'add': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'kick': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'promote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'demote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'antionce': case 'antiviewonce':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (args[0] === "on") {
if (global.db.chats[m.chat].antionce) return reply(`Sudah Aktif Sebelumnya`)
global.db.chats[m.chat].antionce = true
reply(`${command} Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antionce) return reply(`Sudah Nonaktif Sebelumnya`)
global.db.chats[m.chat].antionce = false
reply(`${command} Berhasil Di Nonaktifkan !`)
} else {
let buttonns = [
{ buttonId: '.antionce on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antionce off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttonns, `Mode Antionce`, `_Creator Akira_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'antilink':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (args[0] === "on") {
if (global.db.chats[m.chat].antilink) return reply('Sudah Aktif Sebelumnya')
global.db.chats[m.chat].antilink = true
reply(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antilink) return reply('Sudah Nonaktif Sebelumnya')
global.db.chats[m.chat].antilink = false
reply(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttons, `Mode Antilink`, `_Creator Akira_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'tagall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!q) return reply(`Teks?`)
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hidetag': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (!q) return reply(`Teks?`)
sock.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'listgc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
let metadata = await sock.groupMetadata(i)
if (metadata.owner === "undefined") {
loldd = false
} else {
loldd = metadata.owner
}
teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'play':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
reply(api.wait)
let yts = require("yt-search")
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6289652402025'
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By ZellBotz',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { ytv } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'ytmp3': case 'ytaudio': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { yta } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
sock.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'tiktok': case 'tiktoknowm':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
reply(api.wait)
owned = '6289652402025'
mbc = `Nih Kak @${sender.split("@")[0]} `
let buttons = [
{buttonId: `${prefix}tiktokaudio ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: krt, 
jpegThumbnail: tytyd,
caption: mbc,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By KirBotz',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'tiktokaudio':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dedet = await cl.downloader.tiktok(`${q}`)
krt = (dedet.audio)
reply(`Nih Kak Downlod Sendiri
${krt}`)
addCmd(command.slice(0), 1, commund)
break
case 'quotesanime': case 'quoteanime': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
anuds = await quotesanime()
result = anuds[Math.floor(Math.random(), anuds.length)]
let buttons = [
{buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hentai': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
sock.sendMessage(m.chat, { video: { url: cejd.video_1 }, caption: `⭔ Title : ${cejd.title}\n⭔ Category : ${cejd.category}\n⭔ Mimetype : ${cejd.type}\n⭔ Views : ${cejd.views_count}\n⭔ Shares : ${cejd.share_count}\n⭔ Source : ${cejd.link}\n⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'porno': case 'porn': case 'bokep': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
dhehd = await porno()
sock.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+dhehd.video }, caption: `⭔ Title : ${dhehd.title}\n⭔ Viewers : ${dhehd.views}\n⭔ Tags : ${dhehd.tags}\n⭔ Likes : ${dhehd.like}\n⭔ Dislikes : ${dhehd.dislike}\n⭔ Favourite : ${dhehd.favorite}\n⭔ Time Upload : ${dhehd.upload}\n⭔ Description : ${dhehd.desc}\n⭔ Source : ${anu.source}\n⭔ Url Video : https://tikporntok.com/${dhehd.video}` }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'asupan': case 'bocil': case 'rikagusriani':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
fdy = await fetchJson(`https://kirbotz-api.herokuapp.com/api/random/asupan/${command}?apikey=${kirkey}`)
kirbotz.sendMessage(from, { video : { url: fdy.result.url }}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(api.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(api.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(api.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.mtype == 'viewOnceMessage') {
if (!global.db.chats[m.chat].antionce) return
teks = `「 *Anti ViewOnce Message* 」

⭔ Nama : ${m.pushName}
⭔ User : @${m.sender.split("@")[0]}
⭔ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ Date : ${tanggal(new Date())}
⭔ MessageType : ${m.mtype}`

sock.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
}

} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

process.on('uncaughtException', console.error);