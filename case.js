require('./lib/menu');

//=========================================================
// BAILEYS
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType,
	delay,
	getDevice,
	getBinaryNodeChild,
	getBinaryNodeChildren,
	getBinaryNodeChildString,
	baileys,
	isLidUser,
	S_WHATSAPP_NET
} = require('@fizzxydev/baileys-pro');
//=========================================================

//=========================================================
// MODULE
const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const PhoneNumber = require('awesome-phonenumber');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const util = require('util');
const ytsearch = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);
const { Sticker } = require('wa-sticker-formatter');
const { Chess } = require('chess.js');
const translate = require('@vitalets/google-translate-api');
const beautify = require('js-beautify').js;
const gtts = require("node-gtts");
const { mime, lookup } = require('mime-types');
const fileType = require('file-type');
const QRCode = require('qrcode');
const { createCanvas, loadImage, registerFont } = require('canvas');
const https = require('https');
const Jimp = require ('jimp');
const FormData = require('form-data');
//=========================================================


//=========================================================
// AFK
const { addAfkUser, checkAfkUser, getAfkId, getAfkPosition, getAfkReason, getAfkTime } = require('./lib/afk');
// SPAM
const { addFilter, addSpam, isFiltered, isSpam, ResetSpam } = require('./lib/antispam');
// PREMIUM
const { addPremiumUser, checkPremiumUser, expiredCheck, getAllPremiumUser, getPremiumExpired, getPremiumPosition } = require('./lib/premium');
// SEWA
const { addSewaGroup, getSewaExpired, getSewaPosition, checkSewaExpired, checkSewaGroup, getAllSewaGroups } = require('./lib/sewa');
// PROCESS
const { exec, execSync, spawn } = require("child_process");
// MY FUNC
const { smsg, await, clockString, enumGetKey, fetchBuffer, fetchJson, format, formatDate, formatp, generateProfilePicture, getBuffer, getGroupAdmins, getRandom, isUrl, json, logic, msToDate, parseMention, runtime, sleep, sort, toNumber, monospace, litespace, toRupiah } = require('./lib/myfunc');
// GAME
const { gameSlot, gameCasinoSolo, gameMerampok, daily, transferLimit, transferUang, buy, setUang, setLimit } = require('./lib/game');
const threshold = 0.72
// PANEL
const { createUser, createServer, getEggStartupCommand, manageServer, deleteServer, deleteUser } = require('./lib/cpanel');
//=========================================================


//=========================================================
let afk = JSON.parse(fs.readFileSync('./src/afk.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'));
let banned = JSON.parse(fs.readFileSync('./src/data/function/banned.json'))
let blacklist = JSON.parse(fs.readFileSync('./src/data/function/blacklist.json'));
let whitelist = JSON.parse(fs.readFileSync('./src/data/function/whitelist.json'));
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'));
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
let sewa = JSON.parse(fs.readFileSync('./src/data/role/sewa.json'));
let contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
let userActivity = JSON.parse(fs.readFileSync('./src/data/role/user.json'));
let audionye = JSON.parse(fs.readFileSync('./media/database/audio.json'));
let setiker = JSON.parse(fs.readFileSync('./media/database/sticker.json'));
let imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
let videonye = JSON.parse(fs.readFileSync('./media/database/video.json'));

const tebakgambar = {}
const tebakgame = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const asahotak = {}
const butawarna = {}
const lengkapikalimat = {}
const verifyNumber = {};
//=========================================================


//=========================================================
// ============== SCRAPE
// AI
const { flux } = require('./lib/scrape/ai/flux');
const { muslimai } = require('./lib/scrape/ai/muslimai');
const { magichour } = require('./lib/scrape/ai/magichour');
const { flatAi, saveFlatAi } = require('./lib/scrape/ai/flatAi');
const { chateverywhere } = require('./lib/scrape/ai/chateverywhere');
const { chatbotai } = require('./lib/scrape/ai/chatbotai');
const { mistral } = require('./lib/scrape/ai/mistral');
const { openai } = require('./lib/scrape/ai/openai');
const { yanzgpt } = require('./lib/scrape/ai/yanzgpt');
const { ai4chatImage } = require('./lib/scrape/ai/ai4chatImage');
const { aiimagegenerator } = require('./lib/scrape/ai/aiimagegenerator');
const { wavelai } = require('./lib/scrape/ai/wavelai');
const { texttoimage } = require('./lib/scrape/ai/texttoimage');
const { airiple } = require('./lib/scrape/ai/airiple');
// ANIME
const { hentai } = require('./lib/scrape/anime/sfmcompile');
const { kusonime } = require('./lib/scrape/anime/kusonime');
const { mangainfo, mangadetail } = require('./lib/scrape/anime/komiku');
const otakudesu = require('./lib/scrape/anime/otakudesu');
// MAKER
const { quotedLyo } = require('./lib/scrape/maker/qc');
const { cewebrat } = require('./lib/scrape/maker/cewebrat');
// DOWNLOAD
const { ytdl, downloadAudioYT, downloadVideoYT } = require('./lib/scrape/download/youtube');
const { tiktokSearchVideo, tiktokDownloaderVideo } = require('./lib/scrape/download/tiktok');
const { instagram } = require('./lib/scrape/download/instagram');
const { GDrive } = require('./lib/scrape/download/gdrive');
const { savePin } = require('./lib/scrape/download/pinterest');
const { capcutdl } = require('./lib/scrape/download/capcut');
const { facebookdl } = require('./lib/scrape/download/facebook');
const { mediafiredlV1, mediafiredlV2 } = require('./lib/scrape/download/mediafire');
const { stickerLy } = require('./lib/scrape/download/stickerLy');
const { twitterdl } = require('./lib/scrape/download/twitter');
const { douyindl } = require('./lib/scrape/download/douyin');
const { spotifydl } = require('./lib/scrape/download/spotify');
const { videydl } = require('./lib/scrape/download/videy');
const { getindevice } = require('./lib/scrape/download/aio');
const { cliptoai } = require('./lib/scrape/download/youtubeV2');
const { anydownloader } = require('./lib/scrape/download/aioV2');
const savetube = require('./lib/scrape/download/savetube');
// INFORMATION
const { islamicnews, islamicsearch, islamicdetail } = require('./lib/scrape/information/islamico');
const { gempa } = require('./lib/scrape/information/bmkg');
const { RumahMisteri, DetailRumahMisteri } = require('./lib/scrape/information/rumahmisteri');
// JKT48
const { getJKT48News, getJKT48NewsDetail, getJKT48Calendar, getJKT48Members, getJKT48MemberDetails } = require('./lib/scrape/jkt48/jkt48');
// OTHER
const { generateCalendar2025 } = require('./lib/scrape/other/calender2025');
const { wallpaper } = require('./lib/scrape/other/besthdwallpaper');
const { ringtone } = require('./lib/scrape/other/meloboom');
// TOOL
const { toUrlUpload } = require('./lib/scrape/tool/toUrlUpload');
const { catbox } = require('./lib/scrape/tool/catbox');
const { cloudmini } = require('./lib/scrape/tool/cloudMini.js');
const { anonfile } = require('./lib/scrape/tool/anonfile');
const { gofile } = require('./lib/scrape/tool/gofile');
const { quax } = require('./lib/scrape/tool/quax.js');
const { pxpicCDN } = require('./lib/scrape/tool/pxpicCDN');
const { pxpicTool } = require('./lib/scrape/tool/pxpicTool');
const { cekrekening } = require('./lib/scrape/tool/cekrekening');
const { toAudio, toPTT, toVideo } = require('./lib/scrape/tool/converter');
const { generateRandomPasswordMail, generateEmailMail, getTokenMail, createAccountMail, cekPesanMail } = require('./lib/scrape/tool/mailtm');
const { removeBackground } = require('./lib/scrape/tool/aibackgroundremover');
const { createPastebin } = require('./lib/scrape/tool/pastebin');
const { redirectDetective } = require('./lib/scrape/tool/redirectDetective');
const { uploadVidey } = require('./lib/scrape/tool/uploadVidey');
// SEARCH
const { spotifySearch } = require('./lib/scrape/search/spotify');
const { soundCloudSearch } = require('./lib/scrape/search/soundcloud');
const { pinterest } = require('./lib/scrape/search/pinterest');
const { pinterestV2 } = require('./lib/scrape/search/pinterestv2');
const { playstore }  = require('./lib/scrape/search/playstore');
const { happymod }  = require('./lib/scrape/search/happymod');
const { wikimedia } = require('./lib/scrape/search/wikimedia');
const { cariGC } = require('./lib/scrape/search/groupsor');
const { googleLyrics } = require('./lib/scrape/search/googleLyrics');
const { devianArt } = require('./lib/scrape/search/devianArt');
const { geniusLyrics } = require('./lib/scrape/search/geniusLyrics');
// STALK
const { githubstalk }  = require('./lib/scrape/stalk/github');
const { npmstalk }  = require('./lib/scrape/stalk/npm');
const { mlstalk }  = require('./lib/scrape/stalk/mobile-legends');
const { tiktokStalk }  = require('./lib/scrape/stalk/tiktok');
const { pintereststalk }  = require('./lib/scrape/stalk/pinterest');
// GAME
const { sendBoard, handleMove }  = require('./lib/scrape/game/chess');
// ATLANTICH2H
const { atlaDeposit, atlaDepositCancel, atlaDepositStatus, atlaOrder, atlaOrderStatus, atlaPriceList, atlaProfile, atlaCekRekening, atlaListBank }  = require('./lib/scrape/atlantich2h/atlantich2h');
// ORDERKUOTAH2H
const { createQROrKut, cekStatusQROrKut } = require('./lib/scrape/orderkuotah2h/orderKuota');
// ============== SCRAPE END
//=========================================================


//=========================================================
// ============== MEMBUAT FOLDER SAMPAH / TEMP
const tempDir = path.join(__dirname, 'temp');
const createDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        exec(`chmod 777 ${dir}`, (error) => {
            if (error) {
                console.error(`Error changing permissions for ${dir}: ${error.message}`);
            }
        });
    }
};
createDirectory(tempDir);
// ============== MEMBUAT FOLDER SAMPAH / TEMP END
//=========================================================


//=========================================================
// ============== FUNCTION SEWA
const sewaDatabasePath = path.join(__dirname, './src/sewa.json'); // Path untuk database sewa
function readSewaDatabase() {
    if (!fs.existsSync(sewaDatabasePath)) {
        fs.writeFileSync(sewaDatabasePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(sewaDatabasePath);
    return JSON.parse(data);
}
function writeSewaDatabase(data) {
    fs.writeFileSync(sewaDatabasePath, JSON.stringify(data, null, 2));
}
// ============== FUNCTION SEWA END
//=========================================================


//=========================================================
// ============== CEK DATABASE
try {
    let rawData = fs.readFileSync(`./src/${databaseName}`);
    const borderTopSuccess = chalk.green('╔═══════════════════════════════════════════════════════════════════════╗');
    const borderBottomSuccess = chalk.green('╚═══════════════════════════════════════════════════════════════════════╝');
    console.log('\n' + borderTopSuccess);
    console.log(chalk.white(`✅  Berhasil memuat ${databaseName}.`));
    console.log(borderBottomSuccess + '\n');
    global.db.data = JSON.parse(rawData) || {};
} catch (err) {
    const borderTopError = chalk.red('╔═══════════════════════════════════════════════════════════════════════╗');
    const borderBottomError = chalk.red('╚═══════════════════════════════════════════════════════════════════════╝');
    console.log('\n' + borderTopError);
    console.log(chalk.white(`⚠️  Gagal memuat ${tempatDB}, menggunakan struktur default.`));
    console.log(borderBottomError + '\n');
    global.db.data = {};
}
global.db.data = {
    sticker: global.db.data.sticker || {},
    database: global.db.data.database || {},
    game: global.db.data.game || {},
    others: global.db.data.others || {},
    users: global.db.data.users || {},
    rpg: global.db.data.rpg || {},
    chats: global.db.data.chats || {},
    settings: global.db.data.settings || {},
};
// ============== CEK SEWA
try {
    let rawData = fs.readFileSync(`./src/sewa.json`);
    const borderTopSuccess = chalk.green('╔═══════════════════════════════════════════════════════════════════════╗');
    const borderBottomSuccess = chalk.green('╚═══════════════════════════════════════════════════════════════════════╝');
    console.log('\n' + borderTopSuccess);
    console.log(chalk.white(`✅  Berhasil memuat sewa.json.`));
    console.log(borderBottomSuccess + '\n');
    global.db.sewaData = JSON.parse(rawData) || {};
} catch (err) {
    const borderTopError = chalk.red('╔═══════════════════════════════════════════════════════════════════════╗');
    const borderBottomError = chalk.red('╚═══════════════════════════════════════════════════════════════════════╝');
    console.log('\n' + borderTopError);
    console.log(chalk.white(`⚠️  Gagal memuat sewa.json, menggunakan struktur default.`));
    console.log(borderBottomError + '\n');
    global.db.sewaData = {};
}
//=========================================================


//=========================================================
// ============== UCAPAN WAKTU
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
    ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
    ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
    ucapanWaktu = "Selamat Petang 🌆";
}
//=========================================================


//=========================================================
module.exports = wbk = async (wbk, m, msg, chatUpdate, store) => {
//=========================================================
   

//=========================================================
try {
//=========================================================
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const body = m.body || '';
    const budy = m.text || '';
    const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa;
    const isCmd = prefix ? body.startsWith(prefix) : false;
    const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
    const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1);
    const botNumber = await wbk.decodeJid(wbk.user.id);
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ");
    const getQuoted = (m.quoted || m);
    const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || '';
    const qmsg = (quoted.msg || quoted);
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = (type == 'imageMessage');
    const isVideo = (type == 'videoMessage');
    const isAudio = (type == 'audioMessage');
    const isDocument = (type == 'documentMessage');
    const isLocation = (type == 'locationMessage');
    const isContact = (type == 'contactMessage');
    const isSticker = (type == 'stickerMessage');
    const isText = (type == 'textMessage');
    const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
    const isGroup = m.key.remoteJid.endsWith('@g.us');
    const groupMetadata = m.isGroup ? await wbk.groupMetadata(m.chat).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isBan = banned.includes(m.sender);
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
    if (m.isGroup) {
        m.metadata = await wbk.groupMetadata(m.chat)
        m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({
            id: b.id,
            admin: b.admin
        }) : [...a]) && a, []))
        m.isAdmin = m.admins.some((b) => b.id === m.sender)
        m.participant = m.key.participant
        m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
    }
    const clientId = wbk.user.id.split(':')[0];
    const senderbot = m.key.fromMe ? wbk.user.id.split(':')[0] + "@s.whatsapp.net" || wbk.user.id : m.key.participant || m.key.remoteJid;
    const senderId = senderbot.split('@')[0];
    const isBot = clientId.includes(senderId);
    const isSewa = checkSewaGroup(m.chat);
    const isBlacklist = blacklist.includes(m.sender);
    const isWhitelist = whitelist.includes(m.sender);
    const isAfkOn = checkAfkUser(m.sender, afk)
    const isUser = userActivity.includes(m.sender);
    const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
    const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPremium = isCreator || checkPremiumUser(m.sender, premium);
    expiredCheck(wbk, m, premium);
    checkSewaExpired(wbk);
    let timestamp = speed();
    let latensi = speed() - timestamp;
    let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
    let ownnomor = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');
//=========================================================
    
//=========================================================
// ============== FAKE REPLY
    const fconver = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? {
                remoteJid: "0@s.whatsapp.net"
            } : {})
        },
        message: {
            conversation: `👤 *${pushname}*\n📞 *${usernomor}*`
        }
    };
    
    const fmen = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? {
                remoteJid: "0@s.whatsapp.net"
            } : {})
        },
        message: {
            conversation: `📝 *Pesan Menfess Baru!* ✨`
        }
    };
    
    const fbot = {
        key: {
            fromMe: false,
            participant: `13135550002@s.whatsapp.net`,
            ...(m.chat ? {
                remoteJid: "13135550002@s.whatsapp.net"
            } : {})
        },
        message: {
            conversation: `*${botName}* Terverifikasi oleh WhatsApp`
        }
    };
    
    const fkontak = {
        key: {
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? {
                remoteJid: `status@broadcast`
            } : {})
        },
        message: {
            'contactMessage': {
                'displayName': botName,
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=6285183134846:6285183134846\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                'jpegThumbnail': thumb,
                thumbnail: thumb,
                sendEphemeral: true
            }
        }
    }

    const ftroli = {
        key: {
            remoteJid: '6281938781378-1613534871@g.us',
            participant: '13135550002@s.whatsapp.net'
        },
        message: {
            orderMessage: {
                itemCount: 2025,
                status: 1,
                thumbnail: thumb,
                surface: 1,
                message: `𝗔𝗜𝗭𝗘𝗥𝗢𝗠𝗗 Terverifikasi oleh WhatsApp`,
                orderTitle: "Activated!",
                sellerJid: '0@s.whatsapp.net'
            }
        }
    }

    const fevent = {
        key: {
            participant: m.sender,
            ...(m.sender ? {
                remoteJid: m.sender
            } : {})
        },
        'message': {
            "eventMessage": {
                "isCanceled": false,
                "name": m.text,
                "description": `${wm}`,
                "location": {
                    "degreesLatitude": 0,
                    "degreesLongitude": 0,
                    "name": `${botName}`
                },
                "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
                "startTime": "12345678"
            }
        }
    }
//=========================================================


//=========================================================
    async function reactionMessage(emo) {
        wbk.sendMessage(m.chat, {
            react: {
                text: emo,
                key: m.key
            }
        });
    }
//=========================================================
    
//=========================================================
// ============== CUSTOM REPLY 4 VERSI
    async function newReply(teks, typereply = 'v4') {
        if (typereply === 'v1') {
            newReply(teks);
        } else if (typereply === 'v2') {
            wbk.sendMessage(m.chat, {
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    externalAdReply: {
                        showAdAttribution: true,
                        title: wm,
                        body: desc,
                        previewType: "PHOTO",
                        thumbnail: thumb,
                        sourceUrl: website
                    }
                },
                text: teks
            }, {
                quoted: m
            });
        } else if (typereply === 'v3') {
            wbk.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluranName,
                        newsletterJid: saluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: wm,
                        body: desc,
                        thumbnail: thumb,
                        sourceUrl: website,
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                }
            }, {
                quoted: m
            });
        } else if (typereply === 'v4') {
            const newrep = {
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluranName,
                        newsletterJid: saluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: botName,
                        body: desc,
                        thumbnail: thumb,
                        sourceUrl: website,
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return wbk.sendMessage(m.chat, newrep, {
                quoted: m,
            });
        }
    };
//=========================================================


//=========================================================
    async function newReplyBot(teks) {
        wbk.sendMessage(m.chat, {
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: saluran,
                    newsletterName: "Runtime: " + runtime(process.uptime()),
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: wm,
                    body: desc,
                    previewType: "PHOTO",
                    thumbnail: thumb,
                    sourceUrl: website,
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            },
            text: teks,
            ai: !m.isGroup
        }, { quoted: ftroli });
    }
//=========================================================


//=========================================================
    async function newReplyRPG(teks) {
        wbk.sendMessage(m.chat, {
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: "RPG-Game",
                    body: "Mari berpetulang dan Bertahan Hidup",
                    previewType: "PHOTO",
                    thumbnail: thumbrpg,
                    sourceUrl: website
                }
            },
            text: teks
        }, { quoted: m });
    }
//=========================================================


//=========================================================
// ============== REPLY PESAN ERROR
    async function errorMessage(m, error, text, prefix, backupCMD, server, wm) {
        const errorMsg = reply.error + `\n> ${error.message}`;
        return wbk.sendMessage(m.chat, {
            text: errorMsg,
            footer: `Tekan ${server}`,
            interactiveButtons: [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ " + server,
                        id: prefix + backupCMD + `${text}`
                    })
                }
            ]
        }, { quoted: m })
    }
//=========================================================

 
//=========================================================
// ============== REPLY PESAN PENGURANGAN LIMIT
    async function limitReduction(m, prefix, wm) {
        db.data.users[m.sender].limit -= 1; 
        let sisaLimit = db.data.users[m.sender].limit;
        let limitReductionMsg = reply.minusLimit + `\n*╰┈➤* ❝ *${sisaLimit}* ❞`;
        return wbk.sendMessage(m.chat, {
            text: limitReductionMsg,
            footer: wm,
            interactiveButtons: [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "📜 Kembali ke Menu",
                        id: prefix + "menu"
                    })
                }
            ]
        }, { quoted: m })
    }
//=========================================================
    
    
//=========================================================
// ============== REPLY PESAN TIDAK ADA PENGURANGAN LIMIT KARENA ERROR
    async function noLimitReduction(m, prefix, wm) {
        let sisaLimit = db.data.users[m.sender].limit;
        let noLimitReductionMsg = reply.noMinusLimit + `\n*╰┈➤* ❝ *${sisaLimit}* ❞`;
        return wbk.sendMessage(m.chat, {
            text: noLimitReductionMsg,
            footer: wm,
            interactiveButtons: [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "📜 Kembali ke Menu",
                        id: prefix + "menu"
                    })
                }
            ]
        }, { quoted: m })
    }
//=========================================================
    
    
//=========================================================
    async function sendButton(chat, judul, teks, button, m) {
        let msg = generateWAMessageFromContent(chat, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: saluran,
                                newsletterName: saluranName,
                            },
                            businessMessageForwardInfo: {
                                businessOwnerJid: wbk.decodeJid(wbk.user.id)
                            },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: wm
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: judul,
                            subtitle: ownerName,
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button,
                        })
                    })
                }
            }
        }, {
            quoted: m
        })
        await wbk.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
//=========================================================


//=========================================================
    async function sendButtonImage(chat, judul, teks, buffer, button, m) {
        const uploadFile = {
            upload: wbk.waUploadToServer
        };
        const imageMessage = await prepareWAMessageMedia({
                image: buffer,
            },
            uploadFile,
        );
        let msg = generateWAMessageFromContent(chat, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: saluran,
                                newsletterName: saluranName,
                                serverMessageId: -1
                            },
                            businessMessageForwardInfo: {
                                businessOwnerJid: wbk.decodeJid(wbk.user.id)
                            },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botName
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: judul,
                            subtitle: ownerName,
                            imageMessage: imageMessage.imageMessage,
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button,
                        })
                    })
                }
            }
        }, {
            quoted: m
        })
        wbk.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
//=========================================================


//=========================================================
    async function sendButtonVideo(chat, judul, teks, buffer, button, m) {
        const uploadFile = {
            upload: wbk.waUploadToServer
        };
        const videoMessage = await prepareWAMessageMedia({
                video: buffer,
            },
            uploadFile,
        );
        let msg = generateWAMessageFromContent(chat, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: saluran,
                                newsletterName: saluranName,
                                serverMessageId: -1
                            },
                            businessMessageForwardInfo: {
                                businessOwnerJid: wbk.decodeJid(wbk.user.id)
                            },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botName
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: judul,
                            subtitle: ownerName,
                            videoMessage: videoMessage.videoMessage,
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button,
                        })
                    })
                }
            }
        }, {
            quoted: m
        })
        wbk.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
//=========================================================


//=========================================================
    async function sendButtonDocument(chat, judul, teks, thumb, button, m) {
        let msg = generateWAMessageFromContent(chat, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: saluran,
                                newsletterName: saluranName,
                                serverMessageId: -1
                            },
                            businessMessageForwardInfo: {
                                businessOwnerJid: wbk.decodeJid(wbk.user.id)
                            },
                            externalAdReply: {
                                title: ucapanWaktu,
                                body: pushname,
                                thumbnailUrl: thumbUrl,
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botName
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: judul,
                            thumbnailUrl: thumbUrl,
                            subtitle: ownerName,
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia({
                                document: thumb,
                                mimetype: 'image/png',
                                fileLength: 10000000000,
                                jpegThumbnail: thumb,
                                fileName: saluranName
                            }, {
                                upload: wbk.waUploadToServer
                            }))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button,
                        })
                    })
                }
            }
        }, {
            quoted: m
        })
        await wbk.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    };
//=========================================================


//=========================================================
// ============== DATABASE
    try {
        let user = db.data.users[m.sender] || {};
        if (typeof user !== "object") db.data.users[m.sender] = {};
        if (!("type_device" in user)) user.type_device = null;
        if (!("rpg" in user)) user.rpg = false;
        if (!("daftar" in user)) user.daftar = false;
        if (!("vip" in user)) user.vip = false;
        if (!isPremium) user.premium = false;
        if (!("status_deposit" in user)) user.status_deposit = false;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = '';
        if (!("serialNumber" in user)) user.serialNumber = randomBytes(16).toString("hex");
        if (!("nick" in user)) user.nick = wbk.getName(m.sender);
        if (!("nama" in user)) user.nama = "Guest";
        if (!("pacar" in user)) user.pacar = '';
        if (!("askot" in user)) user.askot = '';
        if (!("umur" in user) || typeof user.umur !== "number" || isNaN(user.umur)) user.umur = 0;
        if (!("totalLimit" in user)) user.totalLimit = user.vip ? global.limit.vip : isPremium ? global.limit.premium : global.limit.free;
        if (!("limit" in user) || typeof user.limit !== "number" || isNaN(user.limit)) user.limit = user.totalLimit;
        if (!("uang" in user)) user.uang = user.vip ? global.uang.vip : isPremium ? global.uang.premium : global.uang.free;
        if (!("saldo" in user) || typeof user.saldo !== "saldo" || isNaN(user.saldo)) user.saldo = 0;
        if (!("pctime" in user)) user.pctime = '';
        if (!("coins" in user) || typeof user.coins !== "number" || isNaN(user.coins)) user.coins = 0;
        if (!("exp" in user) || typeof user.exp !== "number" || isNaN(user.exp)) user.exp = 2500;
        if (!("rank" in user) || typeof user.rank !== "number" || isNaN(user.rank)) user.rank = 0;
        if (!("level" in user) || typeof user.level !== "number" || isNaN(user.level)) user.level = 0;
        if (!("chatuser" in user) || typeof user.chatuser !== "number" || isNaN(user.chatuser)) user.chatuser = 0;
        if (!("orderkuota" in user)) user.orderkuota = {
            msg: null,
            chat: null,
            idDeposit: null,
            amount: null,
            exp: null
        };
        if (!("atlantic" in user)) user.atlantic = {
            msg: null,
            chat: null,
            idDeposit: null,
            amount: null,
            exp: null
        };
        db.data.users[m.sender] = user;

        let rpgUser  = db.data.rpg[m.sender] || {};
        if (typeof rpgUser  !== "object") db.data.rpg[m.sender] = {};
        if (!("kapal" in rpgUser )) rpgUser.kapal = false;
        if (!("darahkapal" in rpgUser )) rpgUser.darahkapal = 100;
        if (!("pickaxe" in rpgUser )) rpgUser.pickaxe = false;
        if (!("darahpickaxe" in rpgUser )) rpgUser.darahpickaxe = 100;
        if (!("kapak" in rpgUser )) rpgUser.kapak = false;
        if (!("darahkapak" in rpgUser )) rpgUser.darahkapak = 100;
        if (!("bzirah" in rpgUser )) rpgUser.bzirah = false;
        if (!("darahbzirah" in rpgUser )) rpgUser.darahbzirah = 100;
        if (!("pedang" in rpgUser )) rpgUser.pedang = false;
        if (!("darahpedang" in rpgUser )) rpgUser.darahpedang = 100;
        if (!("darahuser" in rpgUser )) rpgUser.darahuser = 100;
        if (!("rumah" in rpgUser )) rpgUser.rumah = 0;
        if (!("besi" in rpgUser )) rpgUser.besi = 4;
        if (!("kayu" in rpgUser )) rpgUser.kayu = 2;
        if (!("emas" in rpgUser )) rpgUser.emas = 0;
        if (!("perak" in rpgUser )) rpgUser.perak = 0;
        if (!("batubara" in rpgUser )) rpgUser.batubara = 0;
        if (!("bulu" in rpgUser )) rpgUser.bulu = 0;
        if (!("kain" in rpgUser )) rpgUser.kain = 0;
        if (!("wilayah" in rpgUser )) rpgUser.wilayah = "Indonesia";
        if (!("wilayahrumah" in rpgUser )) rpgUser.wilayahrumah = "Indonesia";
        if (!("musuh" in rpgUser )) rpgUser.musuh = 0;
        if (!("ikan" in rpgUser )) rpgUser.ikan = 0;
        if (!("domba" in rpgUser )) rpgUser.domba = 0;
        if (!("sapi" in rpgUser )) rpgUser.sapi = 0;
        if (!("ayam" in rpgUser )) rpgUser.ayam = 0;
        if (!("bank" in rpgUser )) rpgUser.bank = 0;
        if (!("burutime" in rpgUser )) rpgUser.burutime = 0;
        if (!("lastclaim" in rpgUser )) rpgUser.lastclaim = 0;
        if (!("lastdagang" in rpgUser )) rpgUser.lastdagang = 0;
        if (!("lastbansos" in rpgUser )) rpgUser.lastbansos = 0;
        if (!("lastkerja" in rpgUser )) rpgUser.lastkerja = 0;
        if (!("lastrampok" in rpgUser )) rpgUser.lastrampok = 0;
        db.data.rpg[m.sender] = rpgUser ;

        let chats = db.data.chats[m.chat] || {};
        if (typeof chats !== "object") db.data.chats[m.chat] = {};
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antiviewonce" in chats)) chats.antiviewonce = false;
        if (!("autoaipc" in chats)) chats.autoaipc = false;
        if (!("autoaigc" in chats)) chats.autoaigc = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antispam" in chats)) chats.antispam = false;
        if (!("antimedia" in chats)) chats.antimedia = false;
        if (!("antiimage" in chats)) chats.antiimage = false;
        if (!("antivideo" in chats)) chats.antivideo = false;
        if (!("antiaudio" in chats)) chats.antiaudio = false;
        if (!("antisticker" in chats)) chats.antisticker = false;
        if (!("anticontact" in chats)) chats.anticontact = false;
        if (!("antilocation" in chats)) chats.antilocation = false;
        if (!("antidocument" in chats)) chats.antidocument = false;
        if (!("welcome" in chats)) chats.welcome = false;
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
        if (!("mute" in chats)) chats.mute = false;
        if (!("liststore" in chats)) chats.liststore = {};
        db.data.chats[m.chat] = chats;

        let setting = db.data.settings[botNumber] || {};
        if (typeof setting !== "object") db.data.settings[botNumber] = {};
        if (!("typemenu" in setting)) setting.typemenu = "v1";
        if (!("typereply" in setting)) setting.typereply = "v4";
        if (!("totalhit" in setting)) setting.totalhit = 0;
        if (!("totalError" in setting)) setting.totalError = 0;
        if (!("online" in setting)) setting.online = false;
        if (!("safesearch" in setting)) setting.safesearch = false;
        if (!("autosticker" in setting)) setting.autosticker = false;
        if (!("autodownload" in setting)) setting.autodownload = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlygc" in setting)) setting.onlygc = false;
        if (!("onlypc" in setting)) setting.onlypc = false;

        const watermark = {
            packname: global.packname,
            author: global.author
        };
        if (!("watermark" in setting)) setting.watermark = watermark;
        if (!("about" in setting)) {
            setting.about = {
                'bot': {
                    'nick': wbk.getName(botNumber),
                    'alias': botName
                },
                'owner': {
                    'nick': wbk.getName(ownerNumber + "@s.whatsapp.net"),
                    'alias': ownerNumber
                }
            };
        }
        db.data.settings[botNumber] = setting;
    } catch (error) {
        console.error("⚠️ Terjadi kesalahan:", error);
    }
// ============== DATABASE
//=========================================================


//=========================================================
// ============== PENMABAHN EXP, TOTAL HIT, CHAT USER
    if (isCmd) {
        let randomExp = Math.floor(Math.random() * 30) + 1;
        db.data.users[m.sender].exp += randomExp;
        db.data.settings[botNumber].totalhit += 1;
        db.data.settings[botNumber].chatuser += 1;
    }
//=========================================================


//=========================================================
	function capitalizeWords(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
//=========================================================


//=========================================================
    const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }
//=========================================================


//=========================================================
    const react = async () => {
        const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"];
        for (const emoji of emojis) {
            await sleep(80);
            await wbk.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }
        await sleep(50);
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await wbk.sendMessage(m.chat, {
            react: {
                text: randomEmoji,
                key: m.key
            }
        });
    };
//=========================================================


//=========================================================
    async function loading() {
        const lod = [
            "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
            "████▒▒▒▒▒▒▒▒ 30%",
            "███████▒▒▒▒▒ 50%",
            "██████████▒▒ 80%",
            "████████████ 100%"
        ];
        const { key } = await wbk.sendMessage(m.chat, { text: mess.wait }, { quoted: m });
        for (let i = 0; i < lod.length; i++) {
            await sleep(600);
            await wbk.sendMessage(m.chat, {
                text: lod[i],
                edit: key
            });
        }
    };
//=========================================================


//=========================================================
    function generateRandomPassword(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
//=========================================================


//=========================================================
    async function generateRandomHexName(length) {
        return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    };
//=========================================================


//=========================================================    
    function getRandomInt(min, max = null) {
      if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        return Math.floor(Math.random() * min) + 1;
      }
    }
//=========================================================
    async function sendEditMessage(message1, message2, message3) {
      const messages = ['' + message1, '' + message2, '' + message3];
      const editMessage = { 
          text: "*Memuat...*",
          contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999999,
              isForwarded: true
          }
      };
      let { key: editMessageKey } = await wbk.sendMessage(m.chat, editMessage, { 'quoted': m });
      for (let i = 0; i < messages.length; i++) {
        await sleep(2000);
        const editMessageSend = {
          text: messages[i],
          edit: editMessageKey,
        };
        await wbk.sendMessage(m.chat, editMessageSend);
      }
    };
//=========================================================


//=========================================================
    function formatBytes(bytes) {
        if (bytes === 0) return '0 Byte';
        const k = 1024;
        const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
//=========================================================


//=========================================================
    function formatDuration(ms) {
        let seconds = Math.floor((ms / 1000) % 60);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
//=========================================================


//=========================================================    
    function formatNumber(number, options  = {}) {
        const {
            locale = "id-ID",
            style = "decimal",
            currency = "IDR",
            minimumFractionDigits = 0,
            maximumFractionDigits = 2
        } = options ;
        const formatOptions = {
            style: style,
            currency: currency,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits
        };
        return new Intl.NumberFormat(locale, formatOptions).format(number);
    };
//=========================================================


//=========================================================    
    function formatDateToIndonesia(date) {
        return new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).format(date);
    }
//=========================================================


//=========================================================    
    if (!m.isGroup && !isCreator && !isPremium && db.data.settings[botNumber].onlygc) {
        if (command) {
            let message = "⚠️ *「 WARNING 」* ⚠️\n";
            message += "Hai! 👋 Bot ini hanya bisa digunakan di grup.\n\n";
            message += "🤔 Ingin bot aktif di grup kamu?\n";
            message += "*Sewa atau beli premium sekarang!*\n\n";
            message += "Hubungi admin: wa.me/6289516174846";
            return newReply(message);
        }
    };
    if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        if (command) {
            let message = "⚠️ *「 WARNING 」* ⚠️\n";
            message += "Hai! 👋 Bot ini hanya bisa digunakan di private chat.\n\n";
            message += "🤔 Ingin bot aktif di chat kamu?\n";
            message += "*Sewa atau beli premium sekarang!*\n\n";
            message += "Hubungi admin: wa.me/6289516174846";
            return newReply(message);
        }
    }
//=========================================================
    

//=========================================================
// ============== WELCOME MESSAGE
    if (budy && !m.isNewsletter) {
        if (!m.isGroup && isCmd && !m.key.fromMe) {
            db.data.users[m.sender].pctime = new Date().getTime();
        }
        if (!m.isGroup && !isCmd && !m.key.fromMe) {
            const lastInteraction = new Date().getTime() - db.data.users[m.sender].pctime;
            if (lastInteraction > 21600000) {
                db.data.users[m.sender].pctime = new Date().getTime();
                let welcomeText = `Halo Kak ${pushname}! 👋\n\nMohon diperhatikan! Nomor ini sekarang digunakan sebagai bot dan tidak lagi dikelola langsung oleh owner sebelumnya. Jika Kakak memiliki keperluan atau ingin menghubungi owner, silakan hubungi nomor terbaru berikut:\n\n📞 *wa.me/${ownerNumber}*\n\nBot ini siap membantu Kakak dengan berbagai fitur yang tersedia. Terima kasih atas perhatiannya. 😊`;
                const buttonIOS = {
		            text: welcomeText,
		            footer: wm,
		            buttons: [
		                { buttonId: `.menu`, buttonText: { displayText: '🎁 Menu Utama' }, type: 1 },
		                { buttonId: `.daftar`, buttonText: { displayText: '🛃 Daftar Sekarang' }, type: 1 },
		                { buttonId: `.owner`, buttonText: { displayText: '📞 Hubungi Owner' }, type: 1 }
		            ],
		            viewOnce: true
		        };
                const button = [{
                    "name": "single_select",
                    "buttonParamsJson": JSON.stringify({
                        "title": "📌 Pilih Opsi",
                        "sections": [{
                            "title": "🔹 Opsi Menu",
                            "rows": [{
                                    "header": "🎁 Menu Utama",
                                    "title": "Lihat semua fitur keren yang tersedia! 🌟",
                                    "id": `${prefix}menu`
                                },
                                {
                                    "header": "🛃 Daftar Sekarang",
                                    "title": "Gabung untuk akses fitur premium! 🎟️",
                                    "id": `${prefix}daftar`
                                },
                                {
                                    "header": "📞 Hubungi Owner",
                                    "title": "Butuh bantuan? Hubungi owner di sini! 💬",
                                    "id": `${prefix}owner`
                                }
                            ]
                        }]
                    })
                }];
                if (m.device === 'web' || m.device === 'desktop') {
                    newReply('Kamu tidak dapat menggunakan bot ini pada WhatsApp versi web/desktop, terimakasih☺️\n> Gunakanlah WhatsApp mobile');
                } else if (m.device === "ios") {
                    wbk.sendMessage(m.chat, buttonIOS, { quoted: ftroli });
                } else if (m.device === 'android') {
                    wbk.sendButtonText(m.chat, button, welcomeText, footer, ftroli);
                }
            }
        }
    }
//=========================================================


//=========================================================  
    async function generateProfileImage(m, wbk, db) {
        const profilePicUrl = await wbk.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
        const userName = await wbk.getName(m.sender);
        const userData = db.data.users[m.sender] || { level: 0, exp: 0 };
        const background = await loadImage('./media/profile.png');
        const maxExp = 2500, maxWidth = 400, profileSize = 72, barWidth = 240, barHeight = 24;
        const scaleFactor = maxWidth / background.width;
        const newWidth = background.width * scaleFactor, newHeight = background.height * scaleFactor;
        const canvasSize = Math.max(newWidth, newHeight);
        const canvas = createCanvas(canvasSize, canvasSize), ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        ctx.drawImage(background, 0, 0, newWidth, newHeight);
        const profilePic = await loadImage(profilePicUrl);
        const profileX = 32, profileY = 17, nameLevelX = profileX + profileSize + 15, nameLevelY = profileY + profileSize / 2 - 6;
        ctx.save();
        ctx.beginPath();
        ctx.arc(profileX + profileSize / 2, profileY + profileSize / 2, profileSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(profilePic, profileX, profileY, profileSize, profileSize);
        ctx.restore();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(userName, nameLevelX, nameLevelY);
        ctx.font = 'bold 20px Arial';
        ctx.fillText(`Level ${userData.level}`, nameLevelX, nameLevelY + 20);
        const barX = (newWidth - barWidth) / 2, barY = newHeight - 40, progressWidth = (userData.exp / maxExp) * barWidth;
        ctx.fillStyle = "white";
        ctx.fillRect(barX, barY, barWidth, barHeight);
        ctx.fillStyle = "orange";
        ctx.fillRect(barX, barY, progressWidth, barHeight);
        ctx.fillStyle = "black";
        ctx.font = "bold 18px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${userData.exp} / ${maxExp}`, newWidth / 2, barY + barHeight / 1.5);
        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');
        let quality = 0.8, buffer = canvas.toBuffer('image/jpeg', { quality });
        while (buffer.length / 1024 > 300 && quality > 0.5) {
            quality -= 0.05;
            buffer = canvas.toBuffer('image/jpeg', { quality });
        }
        return buffer;
    }
//=========================================================
    
    
//=========================================================
// ============== LEVEL UP
    async function generateImageWithNumbers(levelBefore, levelAfter, timestamp) {
        const imagePath = './media/levelup.png';
        const image = await loadImage(imagePath);
        const maxWidth = 800;
        const scaleFactor = maxWidth / image.width;
        const newWidth = image.width * scaleFactor;
        const newHeight = image.height * scaleFactor;
        const canvas = createCanvas(newWidth, newHeight);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        ctx.fillStyle = 'brown';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(botName.toUpperCase(), newWidth / 2, newHeight * 0.175);
        ctx.textBaseline = 'middle';
        const circles = [
            { x: newWidth * 0.335, y: newHeight * 0.55, number: levelBefore },
            { x: newWidth * 0.665, y: newHeight * 0.55, number: levelAfter }
        ];
        ctx.fillStyle = 'white';
        ctx.font = 'bold 50px Arial';
        circles.forEach(({ x, y, number }) => ctx.fillText(number, x, y));
        ctx.fillStyle = 'brown';
        ctx.font = 'bold 20px Arial';
        ctx.fillText(timestamp, newWidth / 2, newHeight * 0.85);
        let quality = 0.8, buffer = canvas.toBuffer('image/png', { quality }), fileSize = buffer.length / 1024;
        while (fileSize > 300 && quality > 0.5) {
            quality -= 0.05;
            buffer = canvas.toBuffer('image/png', { quality });
            fileSize = buffer.length / 1024;
        }
        return buffer;
    }

    if (db.data.users[m.sender].exp > 2500) {
        db.data.users[m.sender].exp = 0;
        db.data.users[m.sender].level += 1;
        await sleep(1000);
        let levelBefore = db.data.users[m.sender].level - 1;
        let levelAfter = db.data.users[m.sender].level;
        let timestamp = new Date().toLocaleString("id-ID");
        let profileBuffer = await generateProfileImage(m, wbk, db);
        let bufferLevelUp = await generateImageWithNumbers(levelBefore, levelAfter, timestamp);
        let teks = "";
        teks += "*🎉 C O N G R A T S 🎉*\n\n";
        teks += `*${levelBefore}* *➔* *${levelAfter}*\n\n`;
        teks += `- 🧬 *Level Sebelumnya*: ${levelBefore}\n`;
        teks += `- 🧬 *Level Baru*: ${levelAfter}\n`;
        teks += `- *Pada Jam*: ${timestamp}`;
        wbk.sendMessage(m.chat, {
            image: bufferLevelUp,
            caption: teks,
            footer: wm,
            buttons: [{
                buttonId: prefix + "menu",
                buttonText: {
                    displayText: "📃 Menu"
                }
            }, {
                buttonId: prefix + "me",
                buttonText: {
                    displayText: "💖 Me"
                }
            }],
            headerType: 1
        }, { quoted: m })
        await sleep(2000);
        if (db.data.users[m.sender].rank < 1) {
            db.data.users[m.sender].rank = 0;
        }
    }
//=========================================================


//=========================================================
    function pangkat(idrole) {
        let levelRole = db.data.users[idrole].rank
        let role = {
            rank: 'Bronze I',
            name: 'Bronze',
            id: 1
        }
        if (levelRole <= 1000) {
            role = {
                rank: 'Bronze I',
                name: 'Bronze',
                id: 1
            }
        } else if (levelRole <= 1100) {
            role = {
                rank: 'Bronze II',
                name: 'Bronze',
                id: 2
            }
        } else if (levelRole <= 1200) {
            role = {
                rank: 'Bronze III',
                name: 'Bronze',
                id: 3
            }
        } else if (levelRole <= 1300) {
            role = {
                rank: 'Silver I',
                name: 'Silver',
                id: 1
            }
        } else if (levelRole <= 1400) {
            role = {
                rank: 'Silver II',
                name: 'Silver',
                id: 2
            }
        } else if (levelRole <= 1500) {
            role = {
                rank: 'Silver III',
                name: 'Silver',
                id: 3
            }
        } else if (levelRole <= 1600) {
            role = {
                rank: 'Gold I',
                name: 'Gold',
                id: 1
            }
        } else if (levelRole <= 1725) {
            role = {
                rank: 'Gold II',
                name: 'Gold',
                id: 2
            }
        } else if (levelRole <= 1850) {
            role = {
                rank: 'Gold III',
                name: 'Gold',
                id: 3
            }
        } else if (levelRole <= 1975) {
            role = {
                rank: 'Gold IV',
                name: 'Gold',
                id: 4
            }
        } else if (levelRole <= 2100) {
            role = {
                rank: 'Platinum I',
                name: 'Platinum',
                id: 1
            }
        } else if (levelRole <= 2225) {
            role = {
                rank: 'Platinum II',
                name: 'Platinum',
                id: 2
            }
        } else if (levelRole <= 2350) {
            role = {
                rank: 'Platinum III',
                name: 'Platinum',
                id: 3
            }
        } else if (levelRole <= 2475) {
            role = {
                rank: 'Platinum IV',
                name: 'Platinum',
                id: 4
            }
        } else if (levelRole <= 2600) {
            role = {
                rank: 'Diamond I',
                name: 'Diamond',
                id: 1
            }
        } else if (levelRole <= 2750) {
            role = {
                rank: 'Diamond II',
                name: 'Diamond',
                id: 2
            }
        } else if (levelRole <= 2900) {
            role = {
                rank: 'Diamond III',
                name: 'Diamond',
                id: 3
            }
        } else if (levelRole <= 3050) {
            role = {
                rank: 'Diamond IV',
                name: 'Diamond',
                id: 4
            }
        } else if (levelRole <= 3200) {
            role = {
                rank: 'Heroic',
                name: 'Heroic',
                id: 0
            }
        } else if (levelRole <= 3500) {
            role = {
                rank: 'Heroic ✩',
                name: 'Heroic',
                id: 1
            }
        } else if (levelRole <= 4000) {
            role = {
                rank: 'Heroic ✩✩',
                name: 'Heroic',
                id: 2
            }
        } else if (levelRole <= 4350) {
            role = {
                rank: 'Heroic ✩✩✩',
                name: 'Heroic',
                id: 3
            }
        } else if (levelRole <= 5050) {
            role = {
                rank: 'Master ✯',
                name: 'Master',
                id: 1
            }
        } else if (levelRole <= 5400) {
            role = {
                rank: 'Master ✯✯',
                name: 'Master',
                id: 2
            }
        } else if (levelRole <= 6500) {
            role = {
                rank: 'Master ✯✯✯',
                name: 'Master',
                id: 3
            }
        } else if (levelRole <= 7150) {
            role = {
                rank: 'GrandMaster',
                name: 'GrandMaster',
                id: 0
            }
        } else if (levelRole <= 7700) {
            role = {
                rank: 'GrandMaster ✩',
                name: 'GrandMaster',
                id: 1
            }
        } else if (levelRole <= 9100) {
            role = {
                rank: 'GrandMaster ✩✩',
                name: 'GrandMaster',
                id: 2
            }
        } else if (levelRole <= 10800) {
            role = {
                rank: 'GrandMaster ✩✩✩',
                name: 'GrandMaster',
                id: 3
            }
        } else if (levelRole <= 15555) {
            role = {
                rank: 'GrandMaster ✩✩✩✩',
                name: 'GrandMaster',
                id: 4
            }
        }
        return role
    }
//=========================================================
    

//=========================================================
    if (!wbk.public) {
        if (!isCreator && !m.key.fromMe) return;
    };
//=========================================================


//=========================================================   
    if (db.data.settings[botNumber].online) {
        if (command) {
            wbk.sendPresenceUpdate('unavailable', m.chat);
        }
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autoread) {
        wbk.readMessages([m.key]);
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autobio) {
        const status = `${botName} Online: ${runtime(process.uptime())}`;
        wbk.updateProfileStatus(status).catch(_ => _);
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autorecordtype) {
        if (command) {
            let mix = ['composing', 'recording'];
            let mix2 = mix[Math.floor(mix.length * Math.random())];
            wbk.sendPresenceUpdate(mix2, m.chat);
        }
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autorecord) {
        if (command) {
            let mix = ['recording'];
            let mix2 = mix[Math.floor(mix.length * Math.random())];
            wbk.sendPresenceUpdate(mix2, m.chat);
        }
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autotype) {
        if (command) {
            let pos = ['composing'];
            wbk.sendPresenceUpdate(pos, m.chat);
        }
    }
//=========================================================


//=========================================================
    if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
        return wbk.updateBlockStatus(m.sender, 'block');
    }
//=========================================================


//=========================================================
    if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) {
        if (isCreator || isAdmins || !isBotAdmins) return;
        wbk.sendMessage(m.chat, {
            text: `Maaf, kamu akan dihapus karena admin/owner grup telah mengaktifkan anti-nomor asing, hanya kode negara +${antiforeignnumber} yang boleh bergabung`
        }, {
            quoted: m
        });
        await sleep(2000);
        await wbk.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
//=========================================================


//=========================================================
    let list = []
    for (let i of owner) {
        list.push({
            displayName: await wbk.getName(i),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await wbk.getName(i)}\nFN:${await wbk.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytName}\nitem2.X-ABLabel:YouTube\nitem3.URL:${website}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        })
    }
//=========================================================


//=========================================================
    cron.schedule('00 00 * * *', () => {
        let user = Object.keys(db.data.users)
        for (let jid of user) {
            const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
            db.data.users[jid].limit = limitUser
        }
    }, {
        scheduled: true,
        timezone: 'Asia/Jakarta'
    });
//=========================================================


//=========================================================
    if (m.message) {
        let header = `\n🌟  ${ucapanWaktu}  🌟`;
        let title = `🚀  There is a message  🚀`;
        let date = `📅  DATE           : ${new Date().toLocaleString("id-ID")}`;
        let sender = `🗣️  SENDERNAME     : ${pushname}`;
        let type = `💬  Type           : ${m.mtype}`;
        let chat = `💬  Chat           : ${m.text}`;
        let jid = `👤  JIDS           : ${m.sender}`;
        let group = `🔍  GROUP LOCATION : ${groupName}`;

        if (isCmd && !m.isGroup) {
            console.log(header);
            console.log(title);
            console.log(date);
            console.log(sender);
            console.log(jid);
            console.log(type);
            console.log(chat);
            console.log("------------------------------------------");
        } else if (m.isGroup) {
            console.log(header);
            console.log(title);
            console.log(date);
            console.log(sender);
            console.log(jid);
            console.log(type);
            console.log(group);
            console.log(chat);
            console.log("------------------------------------------");
        }
    }
//=========================================================


//=========================================================    
    if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let buffer = await m.download();
        let type = await getContentType(m.message.viewOnceMessageV2.message);
        let teks = `✨ *ANTI VIEW ONCE MESSAGE* ✨\n\n`;
        teks += `*Info Pesan*:\n`;
        teks += `- Nama: ${m.pushName}\n`;
        teks += `- User: @${m.sender.split("@")[0]}\n`;
        teks += `- Waktu: ${time}\n`;
        teks += `- Keterangan: ${budy ? budy : "Enggak ada keterangannya, kak."}\n\n`;
        teks += `💌 AIzero tampilkan isi pesannya di bawah ya! 😉`;
        if (type == "videoMessage") {
            await wbk.sendMessage(m.chat, {
                video: buffer,
                caption: teks,
                mentions: [m.sender]
            }, { quoted: m });
        } else if (type == "imageMessage") {
            await wbk.sendMessage(m.chat, {
                image: buffer,
                caption: teks,
                mentions: [m.sender]
            }, { quoted: m });
        } else if (type == "audioMessage") {
            await wbk.sendMessage(m.chat, {
                audio: buffer,
                mimetype: 'audio/mpeg',
                ptt: true
            }, { quoted: m });
        }
    }
//=========================================================


//=========================================================
    if (db.data.chats[m.chat].antibot) {
        if (m.isBaileys) {
            if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;
            let pesanAntibot = [
                'Ehh bot, ngapain masuk grup ini? Sini tempat manusia ngobrol, bukan robot! 🚫 Keluar sana!',
                'Hei bot, siapa suruh masuk? Kamu gak diundang kok nyelonong. Jangan balik lagi, ya! 👋',
                'Bot nyasar detected! Sayangnya Kamu gak diterima di sini. Silakan cari grup lain buat main-main. Bye! ✋',
                'Aduh, bot datang lagi? Nih grup cuma buat manusia, jadi maaf ya, Kamu harus keluar. Jangan coba-coba masuk lagi! 😤',
                'Bot? Lagi? Hadehh, sini bukan tempat buat Kamu, ya. Out sekarang juga atau Mora usir paksa! 🚪',
                'Eits, bot nyelonong masuk! Grup ini cuma buat manusia. Makasih udah mampir, tapi maaf, Kamu di-kick dulu! 😏',
                'Bot detected! Ngapain coba? Grup ini gak buat robot. Bye-bye ya, jangan balik lagi! 🚷',
                'Lho, siapa lagi nih bot gak jelas? Sana balik ke tempatmu, di sini Kamu gak diterima. Keluar cepat! 🚨',
                'Bot ketahuan nyasar! Kalau mau eksis, cari grup lain aja. Sini bukan tempat buat Kamu. Bye! 👋',
                'Halo bot, ngapain masuk sini? Nyasar ya? Sana pergi sebelum Mora usir dengan hormat! 😎',
                'Bot is not allowed here. Cuma buat manusia aja yang bisa gabung. Jangan masuk lagi ya, ini peringatan terakhir! 🚫',
                'Bot detected! Sorry not sorry, grup ini anti bot. Selamat tinggal dan jangan kembali lagi. 🛑',
                'Woi bot, pikir ini taman bermain? Sana balik ke tempat asalmu. Di sini gak butuh Kamu! 🚪',
                'Grup ini anti bot, ngerti? Jangan sok-sokan masuk tanpa izin. Keluar sekarang juga! 😤',
                'Bot alert! Kamu udah melanggar aturan grup ini. Silakan keluar sebelum Mora kasih surat cinta: kick out! 📨',
            ];
            let pesanRandom = pesanAntibot[Math.floor(Math.random() * pesanAntibot.length)];
            await m.react('⚠️');
            await newReply(pesanRandom);
            await sleep(1500);
            await wbk.sendMessage(m.chat, { delete: m.key });
            await sleep(1500);
            await wbk.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    };
//=========================================================


//=========================================================
    if (db.data.chats[m.chat].antispam) {
        if (m.isGroup && m.message && isFiltered(m.chat)) {
            console.log(`[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
            if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins) return;
            await newReply(`Hei @${m.sender.split("@")[0]}, grup ini bukan tempat buat spam ya! 🤨\nSilakan cari tempat lain buat aksi Kamu. Bye-bye! 👋`);
            await sleep(1000);
            return await wbk.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
//=========================================================


//=========================================================    
    if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isCreator || isAdmins || !isBotAdmins) {} else {
            return wbk.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            })
        }
    }
//=========================================================


//=========================================================
    if (db.data.chats[m.chat].image && m.mtype) {
        if (m.mtype === "imageMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].antivideo && m.mtype) {
        if (m.mtype === "videoMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].antisticker && m.mtype) {
        if (m.mtype === "stickerMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].antiaudio && m.mtype) {
        if (m.mtype === "audioMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].antilocation && m.mtype) {
        if (m.mtype === "locationMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].antidocument && m.mtype) {
        if (m.mtype === "documentMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
    if (db.data.chats[m.chat].anticontact && m.mtype) {
        if (m.mtype === "contactMessage") {
            if (isCreator || isAdmins || !isBotAdmins) {} else {
                return wbk.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
            }
        }
    }
//=========================================================


//=========================================================
    if (db.data.chats[m.chat].badword) {
        if (isCreator || isAdmins || !isBotAdmins) {} else {
            for (let word of bad) {
                const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' untuk case-insensitive, '\\b' untuk batas kata
                if (regex.test(budy)) {
                    wbk.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    });
                    if (!db.data.users[m.sender]) {
                        db.data.users[m.sender] = {
                            badword: 0
                        };
                    }
                    db.data.users[m.sender].badword += 1;
                    if (db.data.users[m.sender].badword > 5) {
                        try {
                            if (m.isGroup && isBotAdmins) {
                                await wbk.groupParticipantsUpdate(m.chat, [m.sender], "remove" );
                                await wbk.sendMessage(m.chat, {
                                    text: `🚫 Maaf, @${m.sender.split('@')[0]} telah di-kick karena melanggar aturan (mengirimkan kata terlarang sebanyak 5 kali).`,
                                    mentions: [m.sender]
                                });
                                db.data.users[m.sender].badword = 0;
                            }
                        } catch (error) {
                            console.error("Gagal melakukan kick:", error);
                            await wbk.sendMessage(m.chat, {
                                text: `⚠️ Ups, AIzero gagal kick pengguna ini. Pastikan bot memiliki hak admin!`
                            });
                        }
                    } else {
                        const remaining = 5 - db.data.users[m.sender].badword;
                        await wbk.sendMessage(m.chat, {
                            text: `⚠️ @${m.sender.split('@')[0]}, Kamu telah melanggar aturan dengan mengirimkan kata terlarang (${db.data.users[m.sender].badword}/5). Jika melanggar ${remaining} kali lagi, Kamu akan di-kick!`,
                            mentions: [m.sender]
                        });
                    }
                    break;
                }
            }
        }
    }
//=========================================================


//=========================================================
    /*if (m.mtype && !isCmd) {
        if (m.mtype === "imageMessage") {
            try {
                await reactionMessage('⏱️');
                console.log("Pesan yang diterima:", m);
                let mediaBuffer = await m.download();
                if (!mediaBuffer || mediaBuffer.length === 0) {
                    return newReply("❌ Error: Media tidak ditemukan atau kosong.");
                }
                const tempFilePath = path.join(os.tmpdir(), `temp_media_${Date.now()}.jpg`);
                fs.writeFileSync(tempFilePath, mediaBuffer);
                const url = await toUrlUpload(tempFilePath);
                let caption = `🔗 *Link Media* : ${url}`;
                await wbk.sendMessage(m.chat, { text: caption });
                fs.unlinkSync(tempFilePath);
            } catch (err) {
                console.error("Error at upload case:", err);
                newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
            }
        }
    }*/
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
        try {
            if (budy.match(`instagram.com`)) {
            	await m.react('⏱️')
                let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`);
                wbk.sendMessage(m.chat, {
                    video: { url: anu.result.media },
                    caption: `Auto Download ✅`
                }, { quoted: m });
                await m.react('☑️')
            } else if (budy.match(`tiktok.com`)) {
                await m.react('⏱️')
                let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`);
                wbk.sendMessage(m.chat, {
                    video: { url: anu.result.Medium.url },
                    caption: `Auto Download ✅`
                }, { quoted: m });
                await m.react('☑️')
            } else if (budy.match(`facebook.com`)) {
                await m.react('⏱️')
                let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`);
                wbk.sendMessage(m.chat, {
                    video: { url: anu.result.video_sd },
                    caption: `Auto Download ✅`
                }, { quoted: m });
                await m.react('☑️')
            } else if (budy.match(`youtube.com|youtu.be`)) {
                await m.react('⏱️')
                let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`);
                wbk.sendMessage(m.chat, {
                    video: { url: anu.result.result },
                    caption: ``
                }, { quoted: m });
                await m.react('☑️')
            }
        } catch (err) {
        	await m.react('✖️')
        }
    }
//=========================================================


//=========================================================
    if (db.data.settings[botNumber].autosticker) {
        if (m.key.fromMe) return;
        if (m.isGroup) return;
        if (/image/.test(mime) && !/webp/.test(mime)) {
            let mediac = await wbk.downloadAndSaveMediaMessage(quoted);
            wbk.sendImageAsSticker(m.chat, mediac, m, {
                packname: global.packname,
                author: global.author
            });
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) return;
            let mediac = await wbk.downloadAndSaveMediaMessage(quoted);
            wbk.sendVideoAsSticker(m.chat, mediac, m, {
                packname: global.packname,
                author: global.author
            });
        }
    }
//=========================================================


//=========================================================    
    if (db.data.settings[botNumber].safesearch && !m.key.fromMe && !isCreator) {
        const forbiddenWords = [
            "colmek", "coli", "desah", "bokep", "tobrut", "seksi", "sex", "sexy",
            "memek", "kontol", "titit", "telanjang", "ngentod", "ngentot",
            "ngewe", "ewe", "ewean", "puki"
        ];
        if (forbiddenWords.some(word => budy.toLowerCase().includes(word))) {
            newReply(`${litespace("[ TERDETEKSI BADWORD ]")}\n\n🚫 Ups, kata tersebut dilarang digunakan pada bot ini ya, kak! Mari ciptakan lingkungan yg positif dan nyaman. 😊`);
            return;
        }
    }
//=========================================================


//=========================================================
    if (!isCreator && !m.key.fromMe && m.message) {
        if (budy.match(`@${ownerNumber}`)) {
            const messages = [
                `👋 Hai kak! Lagi nyariin *${ownerName}*, ya?\nSabar ya kak, owner mungkin lagi sibuk. Tapi tenang, nanti pasti dibalas! 😊`,
                `Halo kak! Lagi mention *${ownerName}* nih? ✨\nOwner bakal cek pesan Kamu kalau udah sempat. Semangat ya! 💪`,
                `Heyy, aku lihat Kamu manggil *${ownerName}*! 😄\nOwner mungkin lagi sibuk ngurusin hal penting. Tapi pasti bales kok, tunggu yaa! 🤗`,
                `Hmm, kayaknya ada yang nyebut nama *${ownerName}*! Jangan khawatir, Kamu akan segera direspon! 😉`,
                `Wih, ada yang mention *${ownerName}*! 🙌\nOwner pasti senang dengar dari Kamu. Nanti bakal dibales, ya! ✨`,
                `Kamu mention *${ownerName}* nih? 😋\nSabar ya kak, mungkin owner lagi ada urusan penting. Tetap stay cool! 😎`,
                `Halo kak! Mungkin *${ownerName}* lagi sibuk sebentar. Tapi tenang, owner bakal respon kalau udah sempat! 🕒`,
                `Hai hai! Lagi nyebut nama *${ownerName}*, ya? 🥰\nOwner bakal bales secepat mungkin. Sabar dikit ya kak!`,
                `Halo kak! Lagi nyari *${ownerName}*? Jangan khawatir, owner pasti bakal cek pesan Kamu nanti. Semangat terus ya! 💕`,
                `Hai kak! Kelihatannya Kamu butuh bantuan *${ownerName}*? ✨\nOwner lagi sibuk mungkin, tapi pasti bales kok. Stay positive! 😇`,
                `Wah, ada yang manggil *${ownerName}* nih! 😄\nOwner mungkin lagi meeting sama bintang-bintang. Tapi pasti bales, kok! 😌`,
                `Hmm, Kamu mention *${ownerName}*? Jangan khawatir ya! Owner bakal respon kalau udah free. Santai aja kak! 😎`,
                `Hoo~ ada yang cari *${ownerName}*! 🎉\nOwner bakal balas secepat mungkin. Tetap tenang dan minum air dulu ya, kak! 🥤`,
                `Halo kak! Lagi nyari *${ownerName}*? Jangan lupa pesan baik-baik, ya! Owner pasti bales kok kalau ada waktu. 😊`,
                `Hii, Kamu mention *${ownerName}*? Aku bakal sampein ke owner ya! Jangan lupa tunggu responnya, oke? 😇`,
                `Wah, ada yang butuh *${ownerName}*! Owner pasti bakal bantu sebisa mungkin. Nanti dibalas ya kak! 💪`,
                `Hei kak, lagi nyebut nama *${ownerName}*! Jangan panik ya, owner pasti cek pesan Kamu nanti. Stay calm! 😌`,
                `Lagi butuh *${ownerName}* nih kayaknya? Tenang kak, aku bakal sampein pesan Kamu. Tunggu balasannya ya! 🙏`,
                `Ada yang manggil *${ownerName}*! 🎉\nOwner bakal respon kok, kalau udah punya waktu. Sabar dikit ya kak!`,
                `Halo kak! Mungkin owner lagi bantu yang lain. Tapi pasti dibalas ya kak, jangan khawatir! 😊`,
                `Lagi cari *${ownerName}* ya? Owner lagi sibuk sedikit nih, nanti pasti dibales. Keep it cool kak! 😎`
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            wbk.sendMessage(m.chat, {
                text: randomMessage
            }, {
                quoted: m
            });
        }
    };
//=========================================================


//=========================================================    
    if (db.data.chats[m.chat].antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
            if (isAdmins) return
            if (m.key.fromMe) return
            if (isCreator) return
            await wbk.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
        }
    }
//=========================================================


//=========================================================
    if (db.data.chats[m.chat].antilink) {
        const linkPatterns = [
            /http/i,
            /https/i,
            /www\./i,
            /wa\.me/i,
            /t\.me/i,
            /bit\.ly/i,
            /goo\.gl/i,
            /y2u\.be/i,
            /discord\.gg/i,
            /telegram\.me/i
        ];
        const containsLink = linkPatterns.some(pattern => pattern.test(budy));
        if (containsLink) {
            if (isAdmins || m.key.fromMe || isCreator) return
            await wbk.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
        }
    }
//=========================================================


//=========================================================    
    if (budy) {
        if (db.data.chats[m.chat].autoaipc && !m.isGroup && !m.key.fromMe && !isCmd) {
            try {
                const response = await fetchJson("https://api.siputzx.my.id/api/ai/gpt3?prompt=" + encodeURIComponent("Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah AIzeroMD, biasa dipanggil AIzero, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang pembuat kamu yaitu wbagazk, ekspresikan dirimu dengan emoji tapi jangan terlalu banyak emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia, jawab dengan kalimat positif atau mendukung seperti jangan balas gk atau nggak atau nggak bisa atau kata yang serupa") + "&content=" + encodeURIComponent(budy));
                const replyMessage = {
                    text: response.data,
                    ai: true
                };
                await m.reply(replyMessage);
            } catch (error) {
                console.log(error);
                newReply(mess.error);
            }
            db.data.settings[botNumber].totalhit += 1;
        }
        if (db.data.chats[m.chat].autoaigc && m.isGroup && !m.key.fromMe && !isCmd) {
            try {
                const response = await fetchJson("https://api.siputzx.my.id/api/ai/gpt3?prompt=" + encodeURIComponent("Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah AIzeroMD, biasa dipanggil AIzero, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang pembuat kamu yaitu wbagazk, ekspresikan dirimu dengan emoji tapi jangan terlalu banyak emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia, jawab dengan kalimat positif atau mendukung seperti jangan balas gk atau nggak atau nggak bisa atau kata yang serupa") + "&content=" + encodeURIComponent(budy));
                await newReply(response.data);
            } catch (error) {
                console.log(error);
                newReply(mess.error);
            }
            db.data.settings[botNumber].totalhit += 1;
        }
    }
//=========================================================


//=========================================================
    if (m.isGroup) {
        if (db.data.chats[m.chat].mute && !isCreator) {
            return
        }
    }
//=========================================================


//=========================================================
    const feature = () => {
        var mytext = fs.readFileSync("./case.js").toString();
        var numUpper = (mytext.match(/case '/g) || []).length;
        return numUpper;
    }
//=========================================================


//=========================================================
    for (let i of audionye) {
        if (budy === i) {
            let audiobuffy = fs.readFileSync(`./media/${i}.mp3`);
            wbk.sendMessage(m.chat, {
                audio: audiobuffy,
                mimetype: 'audio/mp4',
                ptt: true
            }, {
                quoted: m
            });
        }
    }
//=========================================================


//=========================================================
    for (let i of setiker) {
        if (budy === i) {
            let stickerbuffy = fs.readFileSync(`./media/${i}.webp`);
            wbk.sendMessage(m.chat, {
                sticker: stickerbuffy
            }, { quoted: m });
        }
    }
//=========================================================


//=========================================================
    for (let i of imagenye) {
        if (budy === i) {
            let imagebuffy = fs.readFileSync(`./media/${i}.jpg`);
            wbk.sendMessage(m.chat, {
                image: imagebuffy
            }, { quoted: m });
        }
    }
//=========================================================


//=========================================================
    for (let i of videonye) {
        if (budy === i) {
            let videobuffy = fs.readFileSync(`./media/${i}.mp4`);
            wbk.sendMessage(m.chat, {
                video: videobuffy
            }, {
                quoted: m
            });
        }
    }
//=========================================================


//=========================================================
    if (m.isGroup && db.data.chats[m.chat].liststore[body]) {
        let teks = db.data.chats[m.chat].liststore[body].response
        if (db.data.chats[m.chat].liststore[body].img) {
            wbk.sendMessage(m.chat, {
                image: { url: db.data.chats[m.chat].liststore[body].img },
                caption: teks
            }, { quoted: m })
        } else if (db.data.chats[m.chat].liststore[body].video) {
            wbk.sendMessage(m.chat, {
                video: { url: db.data.chats[m.chat].liststore[body].video },
                caption: teks
            }, { quoted: m })
        } else {
            const contentText = {
                text: teks,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluranName,
                        newsletterJid: saluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `Store List 🛍️`,
                        body: botName,
                        previewType: "PHOTO",
                        thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`,
                        sourceUrl: wagc
                    }
                }
            };
            wbk.sendMessage(m.chat, contentText, { quoted: m, });
        }
    }
//=========================================================


//=========================================================
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
        let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
        let { text, mentionedJid } = hash;
        let messages = await generateWAMessage(m.chat, {
            text: text,
            mentions: mentionedJid
        }, {
            userJid: wbk.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        });
        messages.key.fromMe = areJidsSameUser(m.sender, wbk.user.id);
        messages.key.id = m.key.id;
        messages.pushName = m.pushName;
        if (m.isGroup) messages.participant = m.sender;
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        };
        wbk.ev.emit('messages.upsert', msg);
    }
//=========================================================


//=========================================================
    if (m.message && !isUser) {
        userActivity.push(m.sender)
        fs.writeFileSync('./src/data/role/user.json', JSON.stringify(userActivity, null, 2))
    }
//=========================================================


//=========================================================
    if (m.isGroup && !m.key.fromMe) {
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let ment of mentionUser) {
            if (checkAfkUser(ment, afk)) {
                let getId2 = getAfkId(ment, afk)
                let getReason2 = getAfkReason(getId2, afk)
                let getTimee = Date.now() - getAfkTime(getId2, afk)
                let anu2 = ms(getTimee)
                newReply(
                    `Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n` +
                    `*Alasan:* ${getReason2}\n` +
                    `*Udah sejak:* ${anu2.hours} Jam, ${anu2.minutes} Menit, ${anu2.seconds} Detik`
                )
            }
        }
        if (checkAfkUser(m.sender, afk)) {
            let getId = getAfkId(m.sender, afk)
            let getReason = getAfkReason(getId, afk)
            let getTime = Date.now() - getAfkTime(getId, afk)
            let anu = ms(getTime)
            afk.splice(getAfkPosition(m.sender, afk), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
            wbk.sendTextWithMentions(
                m.chat,
                `Yeay! @${m.sender.split('@')[0]} udah balik dari AFK nih~ 🥳\n\n` +
                `*Alasan:* ${getReason}\n` +
                `*Selama:* ${anu.hours} Jam, ${anu.minutes} Menit, ${anu.seconds} Detik`,
                m
            )
        }
    }
//=========================================================


//=========================================================    
    wbk.autosholat = wbk.autosholat ? wbk.autosholat : {};
    if (!m.isNewsletter) {
        if (!(m.chat in wbk.autosholat)) {
            const data = await fetchJson('https://api.aladhan.com/v1/timingsByCity?city=Jember&country=Indonesia&method=8');
            if (data.code === 200) {
                const jadwalSholat = data.data.timings;
                const date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
                const namaSholat = {
                    Fajr: "Shubuh",
                    Dhuhr: "Dzuhur",
                    Asr: "Ashar",
                    Maghrib: "Maghrib",
                    Isha: "Isya"
                };
                for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
                    if (timeNow === waktu && namaSholat[sholat]) {
                        let teks = `📣 *Waktu Sholat ${namaSholat[sholat]} Telah Tiba!* 🕌\n\n`;
                        teks += '"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman." *(QS. An-Nisa: 103)*\n\n';
                        teks += 'Segeralah tinggalkan aktivitasmu sejenak, ambillah air wudhu, dan tunaikan sholat tepat pada waktunya. Jangan sampai kita termasuk orang yang lalai.\n\n';
                        teks += '*Jadwal Sholat Hari Ini:*\n';
                        teks += `- *Shubuh*: ${jadwalSholat.Fajr}\n`;
                        teks += `- *Dzuhur*: ${jadwalSholat.Dhuhr}\n`;
                        teks += `- *Ashar*: ${jadwalSholat.Asr}\n`;
                        teks += `- *Maghrib*: ${jadwalSholat.Maghrib}\n`;
                        teks += `- *Isya*: ${jadwalSholat.Isha}\n\n`;
                        teks += '*Informasi Waktu Lainnya:*\n';
                        teks += `- *Sunrise*: ${jadwalSholat.Sunrise}\n`;
                        teks += `- *Sunset*: ${jadwalSholat.Sunset}\n`;
                        teks += `- *Imsak*: ${jadwalSholat.Imsak}\n`;
                        teks += `- *Midnight*: ${jadwalSholat.Midnight}\n`;
                        teks += `- *Firstthird*: ${jadwalSholat.Firstthird}\n`;
                        teks += `- *Lastthird*: ${jadwalSholat.Lastthird}`;
                        wbk.autosholat[m.chat] = [];
                        wbk.autosholat[m.chat].push(
                            wbk.sendMessage(m.chat, {
                                text: teks,
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    forwardingScore: 999999,
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterName: saluranName,
                                        newsletterJid: saluran,
                                    },
                                    externalAdReply: {
                                        showAdAttribution: true,
                                        title: `Selamat Beribadah, Kak! 🕌`,
                                        body: 'Jember, Indonesia',
                                        previewType: "PHOTO",
                                        thumbnailUrl: 'https://8030.us.kg/file/gdaq7s2tqovN.jpg',
                                        sourceUrl: website
                                    }
                                }
                            })
                        );
                        wbk.autosholat[m.chat].push(
                            await wbk.sendMessage(m.chat, {
                                audio: { url: 'https://files.catbox.moe/9nd3ms.mp3' },
                                mimetype: 'audio/mp4',
                                ptt: true,
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    forwardingScore: 999999,
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterName: saluranName,
                                        newsletterJid: saluran,
                                    },
                                    externalAdReply: {
                                        showAdAttribution: true,
                                        title: `Selamat Beribadah, Kak! 🕌`,
                                        body: 'Jember, Indonesia',
                                        previewType: "PHOTO",
                                        thumbnailUrl: 'https://8030.us.kg/file/gdaq7s2tqovN.jpg',
                                        sourceUrl: website
                                    }
                                }
                            })
                        );
                        setTimeout(() => {
                            delete wbk.autosholat[m.chat];
                        }, 60000);
                    }
                }
            }
        }
    }
//=========================================================


//=========================================================
    if (command) {
        if (isFiltered(m.sender) && !isCreator && !m.key.fromMe) return newReply(`Don't spam! please give pause for a few seconds.`)
        addFilter(m.sender);
    }
//=========================================================


//=========================================================    
    if (isCmd) {
        if (command) {
            const caseFileContent = fs.readFileSync("./case.js", "utf8");
            let caseRegex = /case\s+'([^']+)':/g;
            let caseList = [];
            let match;
            while (match = caseRegex.exec(caseFileContent)) {
                caseList.push(match[1]);
            }
            const availableCommands = Object.values(caseList)
                .flatMap(command => command ?? [])
                .map(command => command.trim().split(" ")[0].toLowerCase())
                .filter(Boolean);
            if (!availableCommands.includes(command) && !budy.startsWith("$ ") && !budy.startsWith("> ")) {
                let suggestedCommand = didyoumean(command, availableCommands);
                let similarityScore = similarity(command, suggestedCommand);
                let similarityPercentage = parseInt(similarityScore * 100);
                if (suggestedCommand && command.toLowerCase() !== suggestedCommand.toLowerCase()) {
                    const suggestionMessage = "*Eits, kayaknya ada yang salah nih...* 😅\n_Mungkin yang Kamu maksud itu:_\n\n➠ *" + (prefix + suggestedCommand) + "* (" + similarityPercentage + "%)\n\n_Coba ketuk *Menu* buat lihat daftar lengkapnya ya!_ 🌟";
                    m.reply({
                        'text': suggestionMessage,
                        'footer': wm,
                        'buttons': [{
                            'buttonId': prefix + suggestedCommand,
                            'buttonText': {
                                'displayText': prefix + suggestedCommand
                            }
                        }, {
                            'buttonId': prefix + "menu",
                            'buttonText': {
                                'displayText': "📜 Kembali ke Menu"
                            }
                        }],
                        'viewOnce': true
                    });
                }
            }
			const onlyRegister = true;
            if (onlyRegister) {
                if (!(command === "daftar") && !isCreator && !isGroupAdmins) {
                    if (!db.data.users[m.sender].daftar) {
                        const onlyRegisterMessage = "⚠️ Hai kak! Sepertinya Kamu belum terdaftar. Yuk daftar terlebih dahulu dengan mengetik *.daftar* lalu selesaikan pendaftaran untuk mengakses fitur ini.";
                        return m.reply({
                            'text': onlyRegisterMessage,
                            'footer': wm,
                            'buttons': [{
                                'buttonId': prefix + 'daftar',
                                'buttonText': {
                                    'displayText': "📄 Daftar"
                                }
                            }],
                            'viewOnce': true
                        });
                    }
                }
            }
        }
    };
//========================================================= 


//=========================================================     
    if (isBlacklist) {
        if (isAdmins || isCreator || !isBotAdmins) return;
        let pesan = '*⛔ BLACKLIST DETECTED ⛔*\n\nNomor kamu terdeteksi dalam daftar blacklist! Bot tidak melayani pengguna yang telah di-blacklist.\n\n🚫 Jika di grup → Kamu akan dikeluarkan!\n🚫 Jika di chat pribadi → Kamu akan diblokir!';
        if (m.isGroup) {
            wbk.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        } else {
            wbk.updateBlockStatus(m.sender, 'block');
        }

        newReply(pesan);
    };
//========================================================= 


//========================================================= 
    const JwbTrue = (tebak, exp, tambahan) => {
        let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
        const context = {
            text: teks,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    title: `Jawaban Benar 🥳`,
                    body: tebak,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
                    sourceUrl: wagc
                }
            }
        };
        return wbk.sendMessage(m.chat, context, { quoted: m, });
    }
    const waktuHabis = (jawaban) => {
        let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
        const context = {
            text: teks,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    title: `Waktu Habis ⏰`,
                    body: "Dasar Kroco",
                    previewType: "PHOTO",
                    thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
                    sourceUrl: wagc
                }
            }
        };
        return wbk.sendMessage(m.chat, context, { quoted: m, });
    }
//========================================================= 


//========================================================= 
   	if (tebakgambar[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakgambar[m.chat][2]
                JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakgambar[m.chat][3])
                delete tebakgambar[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebakgame[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakgame[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakgame[m.chat][2]
                JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakgame[m.chat][3])
                delete tebakgame[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebakkata[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakkata[m.chat][2]
                JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakkata[m.chat][3])
                delete tebakkata[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebakbendera[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
            jawaban = json.name.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakbendera[m.chat][2]
                JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakbendera[m.chat][3])
                delete tebakbendera[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
                JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakkalimat[m.chat][3])
                delete tebakkalimat[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (siapaaku[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == siapaaku[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += siapaaku[m.chat][2]
                JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
                clearTimeout(siapaaku[m.chat][3])
                delete siapaaku[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebakkimia[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
            jawaban = json.unsur.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebakkimia[m.chat][2]
                JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
                clearTimeout(tebakkimia[m.chat][3])
                delete tebakkimia[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebaklirik[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebaklirik[m.chat][2]
                JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
                clearTimeout(tebaklirik[m.chat][3])
                delete tebaklirik[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
                JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
                clearTimeout(tebaktebakan[m.chat][3])
                delete tebaktebakan[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (susunkata[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == susunkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += susunkata[m.chat][2]
                JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
                clearTimeout(susunkata[m.chat][3])
                delete susunkata[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (caklontong[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == caklontong[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += caklontong[m.chat][2]
                JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
                clearTimeout(caklontong[m.chat][3])
                delete caklontong[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (tekateki[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == tekateki[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += tekateki[m.chat][2]
                JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
                clearTimeout(tekateki[m.chat][3])
                delete tekateki[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (asahotak[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == asahotak[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += asahotak[m.chat][2]
                JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
                clearTimeout(asahotak[m.chat][3])
                delete asahotak[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (butawarna[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == butawarna[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(butawarna[m.chat][1]))
            correct = json.correct.toLowerCase().trim()
            if (budy.toLowerCase() == correct) {
                db.data.users[m.sender].uang += butawarna[m.chat][2]
                JwbTrue("Buta Warna", butawarna[m.chat][2], `\n\nKirim perintah .butawarna\nuntuk bermain lagi 🎮`)
                clearTimeout(butawarna[m.chat][3])
                delete butawarna[m.chat]
            } else if (similarity(budy.toLowerCase(), correct) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
    if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
        if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (budy.toLowerCase() == jawaban) {
                db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
                JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
                clearTimeout(lengkapikalimat[m.chat][3])
                delete lengkapikalimat[m.chat]
            } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
                newReply(`_Ya, Dikit Lagi!_`)
            else reactionMessage('❌');
        }
    }
//=========================================================


//=========================================================
	async function cekgame(gamejid) {
	    const games = {
	        tekateki, caklontong, susunkata, tebaktebakan, tebaklirik, tebakkimia,
	        siapaaku, tebakkalimat, tebakbendera, tebakkata, tebakgambar, asahotak,
	        butawarna, lengkapikalimat
	    };
	    
	    for (const [key, value] of Object.entries(games)) {
	        if (value[gamejid]) {
	            wbk.sendMessage(gamejid, {
	                text: "Soal ini belum selesai, diselesaikan dulu yaa"
	            }, {
	                quoted: value[gamejid][0]
	            });
	            return true;
	        }
	    }
	    return false;
	}
//=========================================================


//=========================================================    
    const handleLimit = (type, usernya, limitnya) => {
        let jid = `${usernya}@s.whatsapp.net`;
        if (type === 'add') {
            db.data.users[jid].limit += Number(limitnya);
            return newReply(`✅ Limit user berhasil ditambahkan sebanyak ${limitnya}! 🎯`);
        }
        if (type === 'del') {
            if (db.data.users[jid].limit < limitnya) return newReply(`⚠️ Limit tidak mencukupi.`);
            db.data.users[jid].limit -= Number(limitnya);
            return newReply(`✅ Limit user berhasil dikurangi sebanyak ${limitnya}! ✂️`);
        }
        if (type === 'reset') {
            const limitUser = db.data.users[jid].vip ?
                global.limit.vip :
                checkPremiumUser(jid, premium) ?
                global.limit.premium :
                global.limit.free;
            db.data.users[jid].limit = limitUser;
            return newReply(`✅ Limit user berhasil direset! ✂️`);
        }
    };
//=========================================================


//=========================================================    
    const handleMoney = (type, usernya, uangnya) => {
        let jid = `${usernya}@s.whatsapp.net`;
        if (type === 'add') {
            db.data.users[jid].uang += Number(uangnya);
            return newReply(`✅ Uang user berhasil ditambahkan! 🎯`);
        }
        if (type === 'del') {
            if (db.data.users[jid].uang < uangnya) return newReply(`⚠️ Uang tidak mencukupi.`);
            db.data.users[jid].uang -= Number(uangnya);
            return newReply(`✅ Uang user berhasil dikurangi! ✂️`);
        }
        if (type === 'reset') {
            const uangUser = db.data.users[jid].vip ?
                global.uang.vip :
                checkPremiumUser(jid, premium) ?
                global.uang.premium :
                global.uang.free;
            db.data.users[jid].uang = uangUser;
            return newReply(`✅ Uang user berhasil direset! ✂️`);
        }
    };
//=========================================================


//=========================================================    
// ========= FUNGSI AMBIL CASE =========

function getCommandsFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const caseRegex = /case\s+'([^']+)':\s*{(?!\s*\/\/)/g;
    let commands = [];
    let match;
    let caseCount = 0;
    while ((match = caseRegex.exec(fileContent)) !== null) {
        commands.push(`┃ お ─· ${prefa}${match[1]}`);
        caseCount++;
    }
    return {
        commands: commands.join('\n'),
        caseCount: caseCount
    };
}

// Fungsi spesifik untuk setiap jenis perintah
function getAllCaseCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/finalCase/finalcase.js'));
}    
function getAIImageCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/ai-image.js'));
}
function getAISpeechCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/ai-speech.js'));
}
function getAITextCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/ai-text.js'));
}
function getAICommands() {
    const imageCommands = getAIImageCommands();
    const speechCommands = getAISpeechCommands();
    const textCommands = getAITextCommands();
    const allCommands = [ ...imageCommands.commands, ...speechCommands.commands, ...textCommands.commands  ].filter(command => command).join('\n');
    const totalCount = imageCommands.caseCount + speechCommands.caseCount + textCommands.caseCount;
    return { commands: allCommands, caseCount: totalCount };
}
function getAnimeCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/anime.js'));
}
function getDownloadCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/download.js'));
}
function getFunCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/fun.js'));
}
function getGameCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/game.js'));
}
function getGroupCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/group.js'));
}
function getInfoBotCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/infobot.js'));
}
function getInfoMeCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/infome.js'));
}
function getInformationCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/information.js'));
}
function getJKT48Commands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/jkt48.js'));
}
function getMakerCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/maker.js'));
}
function getMenfessCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/menfess.js'));
}
function getNewsletterCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/newsletter.js'));
}
function getOtherCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/other.js'));
}
function getOwnerCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/owner.js'));
}
function getPPOBCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/ppobatlantic.js'));
}
function getPushKontakCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/pushkontak.js'));
}
function getRPGCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/rpg.js'));
}
function getSearchCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/search.js'));
}
function getSoundEffectCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/soundeffect.js'));
}
function getSoundTiktokCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/soundtiktok.js'));
}
function getStalkCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/stalk.js'));
}
function getStickerPackCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/stickerpack.js'));
}
function getStoreCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/store.js'));
}
function getToolCommands() {
    return getCommandsFromFile(path.join(__dirname, './lib/caseAll/tool.js'));
}
//=========================================================


//=========================================================
// ==== FUNGSI GETCASE DAN GET FUNC ====
const readDirectory = (folderPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.error('Terjadi kesalahan saat membaca folder:', err);
                return reject(`Terjadi kesalahan saat membaca folder: ${err.message}`);
            }
            resolve(files);
        });
    });
};
const sendFile = (filePath, fileName, caption) => {
    return wbk.sendMessage(m.chat, { document: { url: filePath }, mimetype: 'text/plain', fileName: `${fileName}.txt`, caption: caption }, { quoted: fbot })
        .then(() => console.log(`'${fileName}' berhasil dikirim.`))
        .catch(err => {
            console.error('Terjadi kesalahan saat mengirim file:', err);
            newReply(`Terjadi kesalahan saat mengirim: ${err.message}`);
        });
};
//=========================================================


//========================================================= 
// ========= FUNGSI LIST MENU ==========
    
async function sendMenu(m, menuName, menuFunction) {
    let timestampe = speed();
    let latensie = speed() - timestampe;
    await reactionMessage('🫶🏼');
    let profileBuffer = await generateProfileImage(m, wbk, db);
	const user = db.data.users[m.sender]
    let menu = `┌──❖ Halo, Kak ${pushname}! 👋✨
│ ✧ ${ucapanWaktu} yaa! 😊
└────────────⳹
${readmore}
🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*
⨳ *Nama:* ${pushname}
⨳ *Number:* +${m.sender.split('@')[0]}
⨳ *Limit:* ${user.limit}
⨳ *Uang:* Rp. ${user.uang}
⨳ *Saldo PPOB:* Rp. ${user.saldo}
⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}
${readmore}
${menuFunction(prefix, hituet)}

✨ *Semoga harimu menyenangkan, Kak!* 🥰`;

    let buttonMessage = {
        document: fs.readFileSync('./media/thumb.jpg'),
        mimetype: "application/pdf",
        fileName: `${m.pushName}`,
        fileLength: Infinity,
        pageCount: 2025,
        jpegThumbnail: profileBuffer,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                mediaUrl: "https://www.youtube.com/",
                mediaType: 1,
                previewType: "pdf",
                title: wm,
                body: desc,
                thumbnail: thumb,
                sourceUrl: website,
                renderLargerThumbnail: true
            },
        },
        caption: menu,
        footer: wm,
        buttons: [{
            buttonId: prefix + "owner",
            buttonText: {
                displayText: 'OWNER'
            }
        }, {
            buttonId: prefix + "ping",
            buttonText: {
                displayText: "PING"
            }
        }],
        viewOnce: true,
        headerType: 6,
    };

    return await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
}
//========================================================= 

async function mentionStatus(jids, content) {
    const colors = [
        '#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769',
        '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B',
        '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774',
        '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA',
        '#243640'
    ];
    const fonts = [0, 1, 2, 6, 7, 8, 9, 10];

    let users = [];
    for (let id of jids) {
        try {
            let groupMetadata = await wbk.groupMetadata(id);
            users.push(...groupMetadata.participants.map(u => wbk.decodeJid(u.id)));
        } catch (error) {
            console.error(`Gagal mengambil metadata grup untuk ${id}:`, error);
        }
    }

    let annotations = [{
        embeddedContent: {
            embeddedMusic: {
                musicContentMediaId: "500077023151893",
                songId: "456240313688939",
                author: "WBK",
                title: "AI ZERO MD",
                artistAttribution: "https://www.instagram.com/wbagazk/"
            }
        },
        embeddedAction: true
    }];

    try {
        let message = await wbk.sendMessage("status@broadcast", {
            ...content,
            annotations
        }, {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            font: fonts[Math.floor(Math.random() * fonts.length)],
            statusJidList: users,
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: jids.map(jid => ({
                        tag: "to",
                        attrs: { jid },
                        content: undefined
                    })),
                }],
            }],
        });

        jids.forEach(id => {
            wbk.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25
                        }
                    }
                }
            }, {
                userJid: wbk.user.jid,
                additionalNodes: [{
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }]
            });
        });

    } catch (error) {
        console.error("Gagal mengirim status:", error);
    }
}

//=========================================================
switch (command) {
//=========================================================
        
//=========================================================
// ============= LIST MENU =============
        
case 'help':
case 'menu': {
    let profileBuffer = await generateProfileImage(m, wbk, db);
    const user = db.data.users[m.sender]
    if (m.device === 'web' || m.device === 'desktop') {
        newReply('Kamu tidak dapat menggunakan command ini pada WhatsApp versi web/dekstop, terimakasih☺️\n> Gunakanlah WhatsApp mobile')
    } else if (m.device === "ios") {
        let timestampe = speed();
        let latensie = speed() - timestampe;
        await reactionMessage('🫶🏼');
        let menuiphone = `┌──❖ Halo, Kak ${pushname}! 👋✨
│ ✧ ${ucapanWaktu} yaa! 😊
└────────────⳹
${readmore}
🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*
⨳ *Nama:* ${pushname}
⨳ *Number:* +${m.sender.split('@')[0]}
⨳ *Limit:* ${user.limit}
⨳ *Uang:* Rp. ${user.uang}
⨳ *Saldo PPOB:* Rp. ${user.saldo}
⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}
${readmore}
${kategoriMenu(prefix, hituet)}

✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
		
        let buttonMessage = {
            document: fs.readFileSync('./media/thumb.jpg'),
            mimetype: "application/pdf",
            fileName: `${m.pushName}`,
            fileLength: Infinity,
            pageCount: 2025,
            jpegThumbnail: profileBuffer,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    mediaUrl: "https://www.youtube.com/",
                    mediaType: 1,
                    previewType: "pdf",
                    title: wm,
                    body: desc,
                    thumbnail: thumb,
                    sourceUrl: website,
                    renderLargerThumbnail: true
                },
            },
            caption: menuiphone,
            footer: wm,
            buttons: [{
                buttonId: prefix + "owner",
                buttonText: {
                    displayText: 'OWNER'
                }
            }, {
                buttonId: prefix + "ping",
                buttonText: {
                    displayText: "PING"
                }
            }],
            viewOnce: true,
            headerType: 6,
        };
        return await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
    } else if (m.device === 'android') {
        await reactionMessage('🫶🏼');
        let timestampe = speed();
        let latensie = speed() - timestampe;
        let totalHits = 0;
        for (let botNumber in db.data.settings) {
            if (db.data.settings[botNumber].totalhit) {
                totalHits += db.data.settings[botNumber].totalhit;
            }
        }

        let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨
│ ✧ ${ucapanWaktu} yaa! 😊
└────────────⳹
${readmore}
🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*
⨳ *Nama:* ${pushname}
⨳ *Number:* +${m.sender.split('@')[0]}
⨳ *Limit:* ${user.limit}
⨳ *Uang:* Rp. ${user.uang}
⨳ *Saldo PPOB:* Rp. ${user.saldo}
⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}

✨ *Silahkan pilih menu di bawah ini, Kak!* 🥰`;

        wbk.sendMessage(m.chat, {
            document: fs.readFileSync('./media/thumb.jpg'),
            mimetype: "application/pdf",
            fileName: `${m.pushName}`,
            fileLength: Infinity,
            pageCount: 2025,
            jpegThumbnail: profileBuffer,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    mediaUrl: "https://www.youtube.com/",
                    mediaType: 1,
                    title: wm,
                    body: desc, 
                    thumbnail: thumb,
                    sourceUrl: website,
                    renderLargerThumbnail: true
                },
            },
            caption: teks,
            footer: wm,
            buttons: [
                {
                    buttonId: '.owner',
                    buttonText: {
                        displayText: 'OWNER'
                    },
                    type: 1,
                },
                {
                    buttonId: '.ping',
                    buttonText: {
                        displayText: 'PING'
                    },
                    type: 1,
                },
                {
                    buttonId: '.allmenu',
                    buttonText: {
                        displayText: 'ALL MENU'
                    },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: 'MENU 🧾',
                            sections: [
                                {
                                    title: `Silahkan dipilih menu yang tersedia ya kak. 🤩`, 
                                    highlight_label: `Populer`,
                                    rows: [
                                        {
                                            title: "📚 All Menu",
                                            description: `Lihat semua menu seru di sini, kak! 🌟`,
                                            id: `${prefix}allmenu`, 
                                        },
                                        {
                                            title: "🪄 AI Menu",
                                            description: `Smriwing... sulap bisa membantu kamu. 🪄`,
                                            id: `${prefix}aimenu`, 
                                        },
                                        {
                                            title: "🧚🏽‍♀️ Anime Menu",
                                            description: `Menu yang berisi gambar Anime, cari gambar waifu kamu disini ya! 🧚🏽‍♀️`,
                                            id: `${prefix}animemenu`, 
                                        },
                                        {
                                            title: "📥 Download Menu",
                                            description: `Unduh apa yang kakak butuhin, gampang kok! 📥`,
                                            id: `${prefix}downloadmenu`, 
                                        },
                                        {
                                            title: "🎉 Fun Menu",
                                            description: `Fitur Fun untuk seru-seruan, dicoba yuk! ✨`,
                                            id: `${prefix}funmenu`, 
                                        },
                                        {
                                            title: "🎮 Game Menu",
                                            description: `Fitur Game untuk seru-seruan seperti tebak-tebakan dsb. 😋`,
                                            id: `${prefix}gamemenu`, 
                                        },
                                        {
                                            title: "👥 Group Menu",
                                            description: `Ayo intip menu khusus grup, seru-seruan bareng! 👥`,
                                            id: `${prefix}groupmenu`, 
                                        },
                                        {
                                            title: "🤖 Information Bot",
                                            description: `Kepo ngga bagaimana Bot ini terbentuk? 🤖`,
                                            id: `${prefix}infobot`, 
                                        },
                                        {
                                            title: "👤 Your Information",
                                            description: `Cek hubungan kamu sama bot disini. 👤`,
                                            id: `${prefix}infome`, 
                                        },
                                        {
                                            title: "📰 Information Menu",
                                            description: `Tempat untuk kamu belajar dari informasi di seluruh dunia? 📰`,
                                            id: `${prefix}informationmenu`, 
                                        },
                                        {
                                            title: "👧🏼 JKT48 Menu",
                                            description: `Idolnya Indonesia Nih Kak! 👧🏼`,
                                            id: `${prefix}jkt48menu`, 
                                        },
                                        {
                                            title: "🎨 Maker Menu",
                                            description: `Bikin stiker seru di sini, Kak! 🎨`,
                                            id: `${prefix}makermenu`, 
                                        },
                                        {
                                            title: "📩 Menfess Menu",
                                            description: `Punya doi tapi males ungkapin rasa? Bot solusinya. 📩`,
                                            id: `${prefix}menfessmenu`, 
                                        },
                                        {
                                            title: "📃 Newsletter Menu",
                                            description: `Isinya keperluan untuk newsletter 📃`,
                                            id: `${prefix}newslettermenu`, 
                                        },
                                        {
                                            title: "✨ Other Menu",
                                            description: `Menu tambahan yang nggak kalah menarik, cek yuk! 💫`,
                                            id: `${prefix}othermenu`, 
                                        },
                                        {
                                            title: "🗝️ Owner's Secret Room",
                                            description: `Psst... Rahasia nih! Cuma kakak spesial yang bisa masuk~ 🤫`,
                                            id: `${prefix}ownermenu`, 
                                        },
                                        {
                                            title: "📱 PPOB Menu",
                                            description: `Tempat topup game dan ppob termurah...😮`,
                                            id: `${prefix}ppobmenu`, 
                                        },
                                        {
                                            title: "🗡️ RPG Menu",
                                            description: `Game berpetualang dan bertahan hidup yang seru 🗡️`,
                                            id: `${prefix}rpgmenu`, 
                                        },
                                        {
                                            title: "🔍 Search Menu",
                                            description: `Cari apa aja di sini, AIzero bantu nemuin kok~ 🔍`,
                                            id: `${prefix}searchmenu`, 
                                        },
                                        {
                                            title: "🔊 Sound Effect",
                                            description: `Ubah audiomu ke berbagai effect biar gk itu-itu aja. 🔊`,
                                            id: `${prefix}soundeffectmenu`,
                                        },
                                        {
                                            title: "🎵 Sound Tiktok",
                                            description: `Download lagu tiktok dengan mudah. 🎵`,
                                            id: `${prefix}soundtiktok`, 
                                        },
                                        {
                                            title: "🔎 Stalk Menu",
                                            description: `Kepoin akun sosial media yuk! 🔎`,
                                            id: `${prefix}stalkmenu`, 
                                        },
                                        {
                                            title: "☃️ Sticker Pack Menu",
                                            description: `Sticker pack comel ☃️`,
                                            id: `${prefix}stickerpackmenu`, 
                                        },
                                        {
                                            title: "🛠️ Tools Menu",
                                            description: `Ubah yang susah menjadi mudah. 🛠️`,
                                            id: `${prefix}toolmenu`, 
                                        },
                                    ],
                                },
                            ],
                        }),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        }, { quoted: m });
    }
}
break;
//=========================================================


//=========================================================
case 'allmenu': {
    await sendMenu(m, 'All Menu', allMenu);
}
break;        
        
case 'aimenu': {
    await sendMenu(m, 'AI Menu', aiMenu);
}
break;

case 'animemenu': {
    await sendMenu(m, 'Anime Menu', animeMenu);
}
break;

case 'downloadmenu': {
    await sendMenu(m, 'Download Menu', downloadMenu);
}
break;

case 'funmenu': {
    await sendMenu(m, 'Fun Menu', funMenu);
}
break;

case 'gamemenu': {
    await sendMenu(m, 'Game Menu', gameMenu);
}
break;

case 'groupmenu': {
    if (!m.isGroup) return newReply(mess.group);
    await sendMenu(m, 'Group Menu', groupMenu);
}
break;

case 'infobot': {
    await sendMenu(m, 'Info Bot', infobot);
}
break;

case 'infome': {
    await sendMenu(m, 'Info Me', infome);
}
break;

case 'informationmenu': {
    await sendMenu(m, 'Information Menu', informationMenu);
}
break;

case 'jkt48menu': {
    await sendMenu(m, 'JKT48 Menu', jkt48Menu);
}
break;

case 'makermenu': {
    await sendMenu(m, 'Maker Menu', makerMenu);
}
break;

case 'menfessmenu': {
    await sendMenu(m, 'Menfess Menu', menfessMenu);
}
break;
        
case 'newslettermenu': {
    await sendMenu(m, 'Newsletter Menu', newsletterMenu);
}
break;

case 'othermenu': {
    await sendMenu(m, 'Other Menu', otherMenu);
}
break;

case 'ownermenu': {
    if (!isCreator) return newReply(mess.owner);
    await sendMenu(m, 'Owner Menu', ownerMenu);
}
break;
        
case 'ppobmenu': {
    await sendMenu(m, 'PPOB Menu', ppobMenu);
}
break;

case 'pushkontakmenu': {
    if (!isCreator) return newReply(mess.owner);
    await sendMenu(m, 'Push Kontak Menu', pushkontakMenu);
}
break;

case 'searchmenu': {
    await sendMenu(m, 'Search Menu', searchMenu);
}
break;
        
case 'rpgmenu': {
    await sendMenu(m, 'RPG Menu', rpgMenu);
}
break;

case 'soundeffectmenu': {
    await sendMenu(m, 'Sound Effect Menu', soundEffectMenu);
}
break;

case 'soundtiktok': {
    await sendMenu(m, 'Sound TikTok', soundtiktok);
}
break;

case 'stalkmenu': {
    await sendMenu(m, 'Stalk Menu', stalkMenu);
}
break;

case 'stickerpackmenu': {
    await sendMenu(m, 'Sticker Pack Menu', stickerpackMenu);
}
break;

case 'storemenu': {
    if (!isCreator) return newReply(mess.owner);
    await sendMenu(m, 'Store Menu', storeMenu);
}
break;

case 'toolmenu': {
    await sendMenu(m, 'Tool Menu', toolMenu);
}
break;
//=========================================================

        
// ============= CASE HERE =============
// ai-image.js
case 'flux':
case 'text2img': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    let [teks, size] = text.split("--");
    let dimensions;
    if (size === "16:9") {
        dimensions = { width: 680, height: 360 };
    } else if (size === "1:1") {
        dimensions = { width: 512, height: 512 };
    } else if (size === "9:16") {
        dimensions = { width: 360, height: 680 };
    } else {
        dimensions = {};
    }
    try {
        await m.react('💬');
        let data = await flux({ prompt: teks.trim(), ...dimensions });
        for (let i of data.data.images) {
            await wbk.sendMessage(m.chat, { 
                image: { url: i },
                caption: `*Prompt:* ${teks.trim()}`,
                ai: !m.isGroup,
            }, { quoted: fevent });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'magichour': 
case 'text2img2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    let [teks, size] = text.split("--");
    let dimensions;
    if (size === "16:9") {
        dimensions = { orientation: 'landscape' };
    } else if (size === "1:1") {
        dimensions = { orientation: 'square' };
    } else if (size === "9:16") {
        dimensions = { orientation: 'portrait' };
    } else {
        dimensions = { orientation: 'square' };
    }
    try {
        await m.react('💬');
        let imageUrls = await magichour(teks.trim(), dimensions.orientation);
        for (let url of imageUrls) {
            await wbk.sendMessage(m.chat, { 
                image: { url: url },
                caption: `*Prompt:* ${teks.trim()}`,
                ai: !m.isGroup,
            }, { quoted: fevent });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'flatai': 
case 'text2img3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    let ratio = size ? size.trim() : "1:1";
    const validRatios = ["1:1", "9:16", "16:9"];
    if (!validRatios.includes(ratio)) {
        return newReply(`Rasio tidak valid. Pilih dari: ${validRatios.join(", ")}`);
    }
    const fs = require('fs').promises;
    try {
        await m.react('💬');
        let imageUrls = await flatAi(prompt.trim(), "", ratio);
        for (let url of imageUrls) {
            if (url.startsWith('data:image/jpeg;base64,')) {
                const base64Data = url.split(',')[1];
                const buffer = Buffer.from(base64Data, 'base64');
                const fileName = `${Date.now()}.jpg`;
                const filePath = path.join(__dirname, 'temp', fileName);
                await fs.writeFile(filePath, buffer);
                await wbk.sendMessage(m.chat, { 
                    image: { url: filePath },
                    caption: `*Prompt:* ${prompt.trim()}`,
                    ai: !m.isGroup,
                }, { quoted: fevent });
                await fs.unlink(filePath);
            } else {
                console.error(`URL tidak valid: ${url}`);
            }
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ai4chatimg':
case 'text2img4': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    let ratio = (size || "1:1").trim();
    const validRatios = ["1:1", "16:9", "2:3", "3:2", "4:5", "5:4", "9:16", "21:9", "9:21"];
    if (!validRatios.includes(ratio)) {
        return newReply(`❌ Rasio tidak valid. Pilih dari: ${validRatios.join(", ")}`);
    }
    try {
        await m.react('🎨');
        let response = await ai4chatImage(prompt.trim(), ratio);
        if (!response?.image_link) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.image_link },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt:* ${prompt.trim()}\n🖼 *Rasio:* ${ratio}`,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'text2img5': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    try {
        await m.react('🎨');
        const translatedText = await translate(text, { from: 'id', to: 'en' });
        let response = await texttoimage(translatedText.text);
        if (!response?.status || !response?.result) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.result },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt (ID):* ${text.trim()}\n🌍 *Prompt (EN):* ${translatedText.text}`,
            ai: !m.isGroup,
        }, { quoted: fevent })
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'aiimagegenerator': 
case 'text2anime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    prompt = prompt.trim();
    let ratio = (size || "1:1").trim();
    const validRatios = {
        "1:1": [512, 512], 
        "2:3": [512, 768],
        "3:2": [768, 512]
    };
    const [width, height] = validRatios[ratio] || validRatios["1:1"];
    try {
        await m.react('🎨');
        let response = await aiimagegenerator(prompt, width, height);
        if (!response?.image) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.image },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt:* ${prompt}\n🖼 *Rasio:* ${ratio} (${width}x${height})`,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;  

// ai-speech.js
case 'male-ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let args = text.trim().split(",");
    let voiceName = args[0] ? args[0].toLowerCase().trim() : null;
    let languageInput = args[1] ? args[1].toLowerCase().trim() : null;
    let promptText = args[2] ? args.slice(2).join(",").trim() : null;
    const male = [
        { name: "Bradley Marshall", id: "waveltts_3786e470-7129-4f01-a263-0801b302acf1" },
        { name: "Rowan Flynn", id: "waveltts_7a16488d-eba0-4fa3-876a-97fbd57551ca" },
        { name: "Atlas", id: "waveltts_f5066419-beae-43c6-bf67-d8ad0cec52a5" }
    ];
    if (!voiceName) {
        let listNames = male.map(v => `- ${v.name}`).join("\n");
        return newReply(`📢 *List Suara Pria*\n\n${listNames}\n\nGunakan contoh: *${prefix + command} nama_suara, bahasa, teks*`);
    }
    let selectedVoice = male.find(v => v.name.toLowerCase() === voiceName);
    if (!selectedVoice) {
        return newReply(`❌ Suara tidak ditemukan! Pilih dari daftar berikut:\n${male.map(v => `- ${v.name}`).join("\n")}`);
    }
    let languageMap = {
        "indonesia": "id-ID",
        "inggris": "en-US",
        "spanyol": "es-ES",
        "jepang": "ja-JP",
        "korea": "ko-KR",
        "rusia": "ru-RU",
        "malayalam": "ml-IN"
    };
    let selectedLanguage = languageMap[languageInput];
    if (!selectedLanguage) {
        return newReply(`❌ Bahasa tidak valid! Pilih dari daftar berikut:\n${Object.keys(languageMap).map(l => `- ${l.charAt(0).toUpperCase() + l.slice(1)}`).join("\n")}`);
    }
    if (!promptText) {
        return newReply(`📝 *Masukkan teks yang ingin diubah menjadi suara!*\n\nContoh: *${prefix + command} ${selectedVoice.name.toLowerCase()}, ${languageInput}, Halo semua!*`);
    }
    try {
        await m.react('🎙️');
        let response = await wavelai(promptText, selectedLanguage, selectedVoice.name);
        if (!response || !response.output) throw new Error("Gagal mendapatkan audio dari AI.");
        let filePath = path.resolve(__dirname, "output.mp3");
        fs.writeFileSync(filePath, response.output);
        await wbk.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: fevent });
        await m.react('✅');
        fs.unlinkSync(filePath);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'female-ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let args = text.trim().split(",");
    let voiceName = args[0] ? args[0].toLowerCase().trim() : null;
    let languageInput = args[1] ? args[1].toLowerCase().trim() : null;
    let promptText = args[2] ? args.slice(2).join(",").trim() : null;
    const female = [
        { name: "Calista", id: "waveltts_aaf98444-e4e9-4bd6-9921-b307bbd2689e" },
        { name: "Serene Loh", id: "waveltts_297d3749-2394-4396-8324-e6fdb26846f0" },
        { name: "Sofía Mariposa", id: "waveltts_e51e20fb-4e89-41a0-9fbe-0f22f73c9557" }
    ];
    if (!voiceName) {
        let listNames = female.map(v => `- ${v.name}`).join("\n");
        return newReply(`📢 *List Suara Wanita*\n\n${listNames}\n\nGunakan contoh: *${prefix + command} nama_suara, bahasa, teks*`);
    }
    let selectedVoice = female.find(v => v.name.toLowerCase() === voiceName);
    if (!selectedVoice) {
        return newReply(`❌ Suara tidak ditemukan! Pilih dari daftar berikut:\n${female.map(v => `- ${v.name}`).join("\n")}`);
    }
    let languageMap = {
        "indonesia": "id-ID",
        "inggris": "en-US",
        "spanyol": "es-ES",
        "jepang": "ja-JP",
        "korea": "ko-KR",
        "rusia": "ru-RU",
        "malayalam": "ml-IN"
    };
    let selectedLanguage = languageMap[languageInput];
    if (!selectedLanguage) {
        return newReply(`❌ Bahasa tidak valid! Pilih dari daftar berikut:\n${Object.keys(languageMap).map(l => `- ${l.charAt(0).toUpperCase() + l.slice(1)}`).join("\n")}`);
    }
    if (!promptText) {
        return newReply(`📝 *Masukkan teks yang ingin diubah menjadi suara!*\n\nContoh: *${prefix + command} ${selectedVoice.name.toLowerCase()}, ${languageInput}, Halo semua!*`);
    }
    try {
        await m.react('🎙️');
        let response = await wavelai(promptText, selectedLanguage, selectedVoice.name);
        if (!response || !response.output) throw new Error("Gagal mendapatkan audio dari AI.");
        let filePath = path.resolve(__dirname, "output.mp3");
        fs.writeFileSync(filePath, response.output);
        await wbk.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: fevent });
        await m.react('✅');
        fs.unlinkSync(filePath);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'dimas': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Dimas yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-DimasNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true,
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'siti': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Siti yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-SitiNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true, 
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'tuti': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Medan serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Tuti yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-TutiNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true,
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'jajang': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Sunda serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Jajang yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {  
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-JajangNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true, 
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break 

// ai-text.js
case 'ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`Hello, how can I help you?\nExample: ${prefix + command} Hello`);
    let quotedMessage = m.quoted ? m.quoted.text : null;
    let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
    const message = 'Ubah gaya bicaramu agar lebih karakteristik dan terbuka, namamu adalah AIzeroMD, biasa dipanggil Zero, kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang WBK, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan kakak saat berbicara, jika diajak untuk menikah maka kamu harus menjawab ya dan tidak menolak agar tidak menyakiti hati lawan bicara, gunakan Bahasa Indonesia yang baik dan benar.';
    const api = {
        ryzendesu: `https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(query)}&prompt=${encodeURIComponent(message)}`,
        siputzx: `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(query)}`
    };
    try {
        await m.react('💬');
        let data = await fetchJson(api.ryzendesu).catch(err => {
            console.error("API pertama gagal:", err);
            return null;
        });
        if (!data || !data.success) {
            console.log("Mencoba API cadangan...");
            data = await fetchJson(api.siputzx).catch(err => {
                console.error("API cadangan gagal:", err);
                return null;
            });
        }
        if (data) {
            const responseText = data.success ? data.result : data.data;
            await wbk.sendMessage(m.chat, {
                text: responseText,
                ai: !m.isGroup,
            }, { quoted: fevent });
            await m.react('🤖');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply("Maaf, terjadi kesalahan saat mendapatkan respons");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'chatgpt': { 
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬'); 
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await chateverywhere(query, m);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'openai': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await openai(query);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'muslimai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        const result = await muslimai(text);
        const answer = result.answer || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'chatbotai': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await chatbotai(query);
        const answer = result.data || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mistral': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await mistral(query);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'wbk':
case 'yanzgpt': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        // let selectedModel = "yanzgpt-revolution-25b-v3.5"; // Default
        let selectedModel = "yanzgpt-legacy-72b-v3.5"; // Pro
        // let selectedModel = "yanzgpt-r1-70b-v3.5"; // Reasoning
        if (text.includes('--25b')) {
            selectedModel = "yanzgpt-revolution-25b-v3.5";
            query = query.replace('--72b', '').trim(); 
        } else if (text.includes('--70b')) {
            selectedModel = "yanzgpt-r1-70b-v3.5";
            query = query.replace('--70b', '').trim();
        }
        const result = await yanzgpt(query, m.sender, selectedModel);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'airiple': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await airiple(query);
        let aiResponse = result.result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        const detectedLang = await translate(aiResponse, { to: 'id', autoCorrect: true });
        let finalResponse = aiResponse;
        if (detectedLang.from.language.iso !== 'id') {
            const translated = await translate(aiResponse, { from: detectedLang.from.language.iso, to: 'id' });
            finalResponse = translated.text;
            console.log(`Terjemahan: ${finalResponse}`);
        } else {
            console.log("Teks sudah dalam bahasa Indonesia, tidak perlu diterjemahkan.");
        }
        await wbk.sendMessage(m.chat, {
            text: finalResponse,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

// anime.js
case 'quoteanime':
case 'animequote':
case 'quotesanime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let quotes = await quotesanime();
        if (!quotes || quotes.length === 0) return newReply(`⚠️ Wah, Mora gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        await wbk.sendMessage(m.chat, {
                image: { url: randomQuote.gambar },
                caption: `🎌 *Quote Anime* 🎌\n\n` +
                    `🗣️ *Karakter:* ${randomQuote.karakter || '-'}\n` +
                    `📺 *Anime:* ${randomQuote.anime || '-'}\n` +
                    `🎬 *Episode:* ${randomQuote.episode || '-'}\n` +
                    `📅 *Diunggah:* ${randomQuote.up_at || '-'}\n\n` +
                    `💬 *Quote:* "${randomQuote.quotes || '-'}"\n\n` +
                    `🔗 *Sumber:* ${randomQuote.link}`
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'anime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
    const malScraper = require('mal-scraper');
    try {
        await m.react('⏱️');
        const anime = await malScraper.getInfoFromName(text).catch(() => null);
        if (!anime) {
            return newReply('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
        }
        let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
        await wbk.sendMessage(m.chat, {
            image: { url: anime.picture },
            caption: animeInfo,
        }, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'loli': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://www.loliapi.com/acg/pe/?type=url`).catch(() => null);
        if (!data) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'neko':
case 'waifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/sfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
            footer: botName,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
};
break;

case 'hwaifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'hneko': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'trap': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'blowjob': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'hentai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const result = await hentai().catch(() => null);
        if (!result || !result[0] || !result[0].video_1) {
            throw new Error("Gagal mengambil video, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            video: { url: result[0].video_1 },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟`,
            footer: `${botName} • Gunakan fitur ini dengan bijak dan bertanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'traceanime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏱️');
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || "";
        if (!mime.startsWith('image')) return newReply("*Tolong kirim gambar terlebih dahulu* 📸");
        let data = await wbk.downloadAndSaveMediaMessage(q);
        let images = await quax(data);
        let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
        console.log("API URL:", apiUrl);
        let response = await fetch(apiUrl);
        let result = await response.json();
        console.log("API Response:", result);
        if (!result || result.error || result.result.length === 0) return newReply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
        let { anilist, from, to, similarity, video, image, episode } = result.result[0];
        let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
        let message = `✨ *Anime yang Terdeteksi:* ${animeTitle}\n`;
        if (anilist.synonyms && anilist.synonyms.length > 0) {
            message += `✨ *Sinonim:* ${anilist.synonyms.join(", ")}\n`;
        }
        message += `✨ *Tingkat Kesesuaian:* ${similarity.toFixed(2)}%\n`;
        message += `✨ *Durasi Waktu:* ${formatDuration(from * 1000)} · ${formatDuration(to * 1000)}\n`;
        if (episode) {
            message += `✨ *Episode:* ${episode}\n`;
        }
        await wbk.sendMessage(m.chat, {
            video: { url: video },
            caption: message,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mangainfo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const mangaName = args.join(' ');
    if (!mangaName) return newReply('⚠️ Mohon masukkan nama manga yang ingin dicari.');
    try {
        await m.react('⏱️');
        const mangaList = await mangainfo("manga", mangaName);
        if (mangaList.length === 0) {
            return newReply('⚠️ Manga tidak ditemukan. Coba cari dengan nama lain.');
        }
        let response = `📚 *Hasil Pencarian Manga - ${mangaName}* 📚\n\n`;
        mangaList.slice(0, 5).forEach((manga, index) => {
            response += `📖 *${index + 1}. ${manga.title}*\n`;
            response += `🗂️ *Genre:* ${manga.genre}\n`;
            response += `🔗 *URL:* ${manga.url}\n`;
            response += `🖼️ *Thumbnail:* ${manga.img}\n`;
            response += `📖 *Deskripsi:* ${manga.description}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mangadetail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const url = args[0];
    if (!url) return newReply('⚠️ Mohon masukkan URL manga yang ingin dilihat detailnya.');
    try {
        await m.react('⏱️');
        const mangaDetail = await mangadetail(url);
        let response = `📚 *Detail Manga* 📚\n\n`;
        response += `📖 *Judul:* ${mangaDetail.title}\n`;
        response += `🖼️ *Thumbnail:* ${mangaDetail.coverImage}\n`;
        response += `🗂️ *Genre:* ${mangaDetail.genres.join(', ')}\n`;
        response += `📖 *Deskripsi:* ${mangaDetail.description}\n`;
        response += `📅 *Chapter Awal:* ${mangaDetail.awalChapter}\n`;
        response += `📅 *Chapter Terbaru:* ${mangaDetail.newChapter}\n`;
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'kusonimeinfo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏱️');
        const animeList = await Kusonime.info();
        if (animeList.length === 0) return newReply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
        let response = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
        animeList.slice(0, 5).forEach((anime, index) => {
            response += `📺 *${index + 1}. ${anime.title}*\n`;
            response += `🔗 *URL:* ${anime.url}\n`;
            response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
            response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
            response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    };
}
break

case 'kusonimesearch': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
    try {
        await m.react('⏱️');
        const searchResults = await Kusonime.search(text);
        if (typeof searchResults === 'string') return newReply(`⚠️ ${searchResults}`);
        let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
        searchResults.slice(0, 5).forEach((anime, index) => {
            response += `📺 *${index + 1}. ${anime.title}*\n`;
            response += `🔗 *URL:* ${anime.url}\n`;
            response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
            response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
            response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

// download.js
case 'aio':
case 'aiodl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://your-url.com/...`);
    try {
        await m.react('⏱️');
        let result = await getindevice(text);
        console.log(result);
        if (!result || !result.medias || result.medias.length === 0) throw 'Video tidak ditemukan atau tidak dapat diunduh.';
        let media = result.medias[0];
        let mediaUrl = media.url || null;
        let extension = media.extension || null;
        let caption = `${litespace("AIO DOWNLOADER")}`;
        if (extension === 'jpg') {
            let images = result.medias.filter(m => m.extension === 'jpg');
            for (let img of images) {
                await wbk.sendMessage(m.chat, { image: { url: img.url }, caption }, { quoted: m });
            }
        } else if (extension === 'mp4') {
            await wbk.sendMessage(m.chat, { video: { url: mediaUrl }, caption }, { quoted: m });
        } else {
            await newReply('Format media tidak didukung.');
        }
        let audioMedia = result.medias.find(m => m.extension === 'mp3');
        if (audioMedia) {
            let audioUrl = audioMedia.url;
            await wbk.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'aio2':
case 'aiodl2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://your-url.com/...`);
    try {
        await m.react('⏱️');
        let result = await anydownloader(text);
        console.log(result);
        if (!result || !result.medias || result.medias.length === 0) {
            throw new Error('Video tidak ditemukan atau tidak dapat diunduh.');
        }
        let media = result.medias[0];
        let mediaUrl = media.url || null;
        let extension = media.extension || null;
        let caption = `${litespace("AIO DOWNLOADER")}`;
        if (extension === 'jpg') {
            await wbk.sendMessage(m.chat, { image: { url: mediaUrl }, caption }, { quoted: m });
        } else if (extension === 'mp4') {
            await wbk.sendMessage(m.chat, { video: { url: mediaUrl }, caption }, { quoted: m });
        } else {
            await newReply('Format media tidak didukung.');
        }
        let audioMedia = result.medias.find(m => m.extension === 'mp3');
        if (audioMedia) {
            let audioUrl = audioMedia.url;
            await wbk.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'yt':
case 'play':
case 'ytplay': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} Lagu favorit`);
    try {
        await m.react('⏱️');
        const search = await ytsearch(`${text}`);
        if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
        const { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
        let caption = `*${title}*\n\n`;
            caption += `*⏱️ Durasi*: ${duration}\n`;
            caption += `*🕒 Diunggah*: ${ago}\n`;
            caption += `*🔗 Link*: ${url}\n\n`;
            caption += `_Pilih jenis media yang akan didownload_`;
        let buttonMessage = {
            image: { url: image }, 
            caption: caption,
            footer: wm,
            buttons: [
                {
                    buttonId: `.ytaudio ${url}`, 
                    buttonText: { 
                        displayText: 'AUDIO' 
                    },
                    type: 1
                },
                {
                    buttonId: `.ytvideo ${url}`, 
                    buttonText: { 
                        displayText: 'VIDEO' 
                    },
                    type: 1
                },
                {
                    buttonId: `.lyrics ${text}`, 
                    buttonText: { 
                        displayText: 'LIRIK' 
                    },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true,
            contextInfo: {
                forwardingScore: 99999,
                isForwarded: false,
                externalAdReply: {
                    mediaUrl: image,
                    mediaType: 1,
                    previewType: 0,
                    title: `${title}`,
                    body: `Durasi: ${duration}`, 
                    thumbnail: await getBuffer(image),  
                    sourceUrl: url,
                    showAdAttribution: false,
                    renderLargerThumbnail: true,
                },
            },
        };
        await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;   
        
case 'ytmp3': 
case 'ytaudio': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/ 192`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    const args = text.split(' ');
    const url = args[0];
    let quality = args[1] || '192';
    const format = 'mp3';
    const validQualities = ['64', '128', '192', '256', '320'];
    if (!validQualities.includes(quality)) {
        return newReply(`Contoh: ${prefix + command} https://youtu.be/ 192\nFormat audio tidak valid. Silakan pilih kualitas yang benar: 64, 128, 192, 256, 320.`);
    }
    if (!url) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await ytdl(url, format);
        const downloadUrl = await downloadAudioYT(url);
        await wbk.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    title: result.title,
                    body: ``,
                    thumbnail: await getBuffer(result.image),
                    sourceUrl: url,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            },
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytaudio2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytaudio2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await cliptoai.ytdl(text);
        console.log(result)
        if (!result.success) {
            return newReply("Gagal mengunduh video. Silakan coba lagi.");
        }
        const downloadUrl = result.medias.find(media => media.extension === `m4a`)?.url;
        if (!downloadUrl) {
            return newReply(`Sepertinya link download tidak tersedia.`);
        }
        const durationInSeconds = result.duration;
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const thumbnail = result.thumbnail || "https://files.catbox.moe/15mcfd.jpg";
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Duration:* ${formattedDuration}\n> *Url:* ${text}`;
        await wbk.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu,
                    newsletterJid: saluran
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: wm,
                    thumbnail: await getBuffer(result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytaudio3";
        const server = "SERVER 3"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytaudio3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    try {
        await m.react('⏱️');
        const data = await savetube.download(text, "mp3");
        if (!data.status) {
            return newReply(`❌ Gagal mengunduh audio. Error: ${data.error}`);
        } 
        await wbk.sendMessage(m.chat, {
            audio: { url: data.result.download },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: wm,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    title: data.result.title,
                    body: `${data.result.duration} detik`,
                    thumbnail: await getBuffer(data.result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            },
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytmp4': 
case 'ytvideo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} 480 https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    const args = text.split(' ');
    const url = args[0];
    let quality = args[1] || '480';
    const format = '480';
    const validQualities = ['144', '240', '360', '480', '720', '1080'];
    if (!validQualities.includes(quality)) {
        return newReply(`Contoh: ${prefix + command} https://youtu.be/ 480\nFormat video tidak valid. Silakan pilih resolusi yang benar: 144, 240, 360, 480, 720, 1080.`);
    }
    if (!url) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await ytdl(url, format);
        const downloadUrl = await downloadVideoYT(url, quality);
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Url:* ${url}`;
        await wbk.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: 'video/mp4',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    title: result.title,
                    body: '',
                    thumbnail: await getBuffer(result.image),
                    sourceUrl: url,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: false
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytvideo2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytvideo2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await cliptoai.ytdl(text);
        console.log(result)
        if (!result.success) {
            return newReply("Gagal mengunduh video. Silakan coba lagi.");
        }
        const downloadUrl = result.medias.find(media => media.quality === `360p`)?.url;
        if (!downloadUrl) {
            return newReply(`epertinya link download tidak tersedia.`);
        }
        const durationInSeconds = result.duration;
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const thumbnail = result.thumbnail || "https://files.catbox.moe/15mcfd.jpg";
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Duration:* ${formattedDuration}\n> *Url:* ${text}`;
        await wbk.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: 'video/mp4',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu || "Newsletter",
                    newsletterJid: saluran || ""
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: wm,
                    thumbnailUrl: `${result.thumbnail}`,
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytvideo3";
        const server = "SERVER 3"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytvideo3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    try {
        await m.react('⏱️');
        const data = await savetube.download(text, "360");
        if (!data.status) {
            return newReply(`❌ Gagal mengunduh audio. Error: ${data.error}`);
        } 
        const caption = `🎬 *YouTube Video Downloaded* 🎬

📌 *Judul:* ${data.result.title}
⏳ *Durasi:* ${data.result.duration} detik
🔰 *Kualitas:* 360p
🔗 *Link:* ${text}

🔥 Download berhasil! Nikmati videonya 😉`;
        await wbk.sendMessage(m.chat, {
            video: { url: data.result.download },
            caption: caption,
            mimetype: 'video/mp4',
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: wm,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: data.result.title,
                    body: `${data.result.duration} detik`,
                    thumbnail: await getBuffer(data.result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ttaudio':
case 'tiktokmp3':
case 'ttmp3':
case 'tiktokaudio':
case 'ttslide':
case 'tiktokfoto':
case 'tiktokmp4':
case 'ttdl':
case 'tt':
case 'ttnowm':
case 'tiktoknowm':
case 'tiktok':
case 'tiktokdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: ${prefix + command} https://vt.tiktok.com/xxxxxxx/`);
    if (!text.includes('tiktok.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        let anu = await tiktokDownloaderVideo(text);
        let audio = anu.music_info.url;
        let item = 0;
        for (let imgs of anu.data) {
            if (imgs.type == "nowatermark") {
                await wbk.sendMessage(m.chat, {
                    video: { url: imgs.url },
                    caption: `🎥 ${litespace("Video Information :")}
📍 Region: ${anu.region}
⏳ Duration: ${anu.duration}
📅 Taken: ${anu.taken_at}

📊 ${litespace("Statistik Info :")}
👁️ Views: ${anu.stats.views}
❤️ Likes: ${anu.stats.likes}
💬 Comment: ${anu.stats.comment}
🔄 Share: ${anu.stats.share}
📥 Download: ${anu.stats.download}

👤 ${litespace("Author Info :")}
📝 Fullname: ${anu.author.fullname}
🏷️ Nickname: ${anu.author.nickname}

🎵 ${litespace("Music Info :")}
🎼 Title: ${anu.music_info.title}
🎤 Author: ${anu.music_info.author}
💿 Album: ${anu.music_info.album}

📝 ${litespace("Caption :")}
${anu.title || '-'}`}, { quoted: m });
            }
            if (imgs.type == "photo") {
                if (item == 0) {
                    await wbk.sendMessage(m.chat, {
                        image: { url: imgs.url },
                        caption: `🖼️ ${litespace("Photo Information :")}
📍 Region: ${anu.region}
📅 Taken: ${anu.taken_at}

📊 ${litespace("Statistik Info :")}
👁️ Views: ${anu.stats.views}
❤️ Likes: ${anu.stats.likes}
💬 Comment: ${anu.stats.comment}
🔄 Share: ${anu.stats.share}
📥 Download: ${anu.stats.download}

👤 ${litespace("Author Info :")}
📝 Fullname: ${anu.author.fullname}
🏷️ Nickname: ${anu.author.nickname}

🎵 ${litespace("Music Info :")}
🎼 Title: ${anu.music_info.title}
🎤 Author: ${anu.music_info.author}
💿 Album: ${anu.music_info.album}

📝 ${litespace("Caption :")}
${anu.title || '-'}

${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`,
                    }, { quoted: m });
                } else {
                    await wbk.sendMessage(m.sender, {
                        image: { url: imgs.url },
                        quoted: m
                    });
                }
                item += 1;
                await sleep(2000);
            }
        }
        await wbk.sendMessage(m.chat, {
            audio: { url: audio },
            mimetype: 'audio/mpeg',
            fileName: `${anu.music_info.title || 'audio'}.mp3`,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'igstory':
case 'igs':
case 'instagramstory':
case 'instastory':
case 'igslide':
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case 'instatv':
case 'ig':
case 'igdl':
case 'igvideo':
case 'instavideo':
case 'instavid':
case 'igreels':
case 'instareels':
case 'instareel':
case 'igtv':
case 'instagram':
case 'instagramdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contohnya:*\n\n${prefix + command} https://www.instagram.com/reel/xxxxx`);
    if (!text.includes('instagram.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        let result = await instagram(text);
        if (result.msg) return newReply(result.msg);
        let item = 0;
        for (let url of result.url) {
            if (result.metadata.isVideo) {
                await wbk.sendMessage(m.chat, {
                    video: { url: url },
                    caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`,
                }, { quoted: m });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                if (item === 0) {
                    await wbk.sendMessage( m.chat, {
                        image: { url: url },
                        caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})\n\n${m.isGroup ? '_📥 Sisa foto akan dikirim di private chat_' : ''}`,
                    }, { quoted: m });
                    await m.react('✅');
                    await limitReduction(m, prefix, wm);
                } else {
                    await wbk.sendMessage(m.sender, {
                        image: { url: url },
                    }, { quoted: m });
                    await m.react('✅');
                    await limitReduction(m, prefix, wm);
                }
                item += 1;
                await sleep(2000); // Delay antara pengiriman gambar
            }
        }
        if (result.url.length === 0) {
            await newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'fbdl':
case 'facebook':
case 'facebookdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.facebook.com/share/v/xxxxxxxx`);
    if (!text.includes('facebook.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        const result = await facebookdl(text);
        console.log(result)
        if (!result || !result.videos || result.videos.length === 0) {
            return newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
        }
        const { thumbnail, videos } = result;
        const responseMessage = `${litespace("[FACEBOOK DOWNLOADER]")}`;
        const videoUrl = (videos.find(videos => videos.quality === 'hd') || medias.find(videos => videos.quality === 'sd'))?.url;
        if (videoUrl) {
            await wbk.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: responseMessage,
                thumbnail: thumbnail,
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply(`❌ Tidak ada video yang tersedia dalam kualitas HD atau SD.`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'twdl':
case 'xdl':
case 'twitter':
case 'twitterdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} https://x.com/`);
    if (!text.includes('x.com')) return newReply('Link tidak valid');
    try {
        await m.react('⏱️');
        const videoData = await twitterdl(text);
        if (videoData.status === 200) {
            let caption = `${litespace("[TWITTER DOWNLOADER]")}\n\n📌${videoData.data.description}`;
            await wbk.sendMessage(m.chat, { 
                video: { url: videoData.data.video_hd || videoData.data.video_sd }, // Menggunakan video HD atau SD
                caption: caption,
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply(`❌ Tidak ada video yang tersedia.`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ccdl': 
case 'capcut':
case 'capcutdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.capcut.com/t/xxxxxxx`)
    if (!text.includes('capcut.com')) return newReply(`Link Invalid!!`)
    try {
        await m.react('⏱️');
        const result = await capcutdl(text);
        if (!result) return newReply(`❌ Terjadi kesalahan saat mengambil data dari CapCut. Pastikan URL yang Anda berikan benar.`);
        const { title, date, pengguna, likes, author, videoUrl, posterUrl } = result;
        const responseMessage = `
        🎥 *Judul:* ${title}
        📅 *Tanggal:* ${date}
        👤 *Pengguna:* ${pengguna}
        ❤️ *Likes:* ${likes}
        ✍️ *Author:* ${author.name}
        `;
        await wbk.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: responseMessage,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'dydl':
case 'douyin':
case 'douyindl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.douyin.com/`)
    if (!text.includes('douyin.com')) return newReply(`Link Invalid!!`)
    try {
        await m.react('🕛');
        const result = await douyindl(text);
        if (result.error) return newReply(result.error);
        const { title, downloadUrls } = result;
        if (downloadUrls.length > 0) {
            const videoUrl = downloadUrls[0];
            const musicUrl = downloadUrls[downloadUrls.length - 1];
            const video = await axios.get(videoUrl, {
                responseType: "arraybuffer"
            });
            const videoBuffer = Buffer.from(video.data);
            await wbk.sendMessage(m.chat, {
                video: videoBuffer,
                caption: `*Judul:* ${title}`,
                mimetype: 'video/mp4',
            }, { quoted: m });
            const music = await axios.get(musicUrl, {
                responseType: "arraybuffer"
            });
            const musicBuffer = Buffer.from(music.data);
            await wbk.sendMessage(m.chat, {
                audio: musicBuffer,
                mimetype: 'audio/mpeg',
                ptt: true,
                filename: 'music.mp3',
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply("Gagal mendapatkan media. Silakan coba lagi.");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mf':
case 'mfdl':
case 'mediafire':
case 'mediafiredl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} mediafire.com`);
    if (!text.includes('mediafire.com')) return newReply('Harus berupa link MediaFire!');
    try {
        await m.react('🕛');
        const result = await mediafiredlV1(text);
        const { filename, size, mimetype, link } = result;
        let message = `📥 ${litespace("MEDIAFIRE DOWNLOADER")}\n\n` +
                      `◦ File Name: ${filename}\n` +
                      `◦ File Size: ${size}\n` +
                      `◦ File Type: ${mimetype}\n`;
        await wbk.sendMessage(m.chat, { 
            document: { url: link }, 
            fileName: filename, 
            caption: message, 
            mimetype: mimetype,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "mediafiredl2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'mf2':
case 'mfdl2':
case 'mediafire2':
case 'mediafiredl2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} mediafire.com`);
    if (!text.includes('mediafire.com')) return newReply('Harus berupa link MediaFire!');
    try {
        await m.react('🕛');
        const result = await mediafiredlV2(text);
        if (!result || result.success === false) {
            return newReply(`Gagal mendapatkan data dari MediaFire: ${result.message || 'Unknown error'}`);
        }
        const { fileName, fileSize, fileType, urlDownload, urlSource, uploaded } = result;
        let message = `📥 ${litespace("MEDIAFIRE DOWNLOADER")}\n\n` +
                      `◦ File Name: ${fileName}\n` +
                      `◦ File Size: ${fileSize}\n` +
                      `◦ File Type: ${fileType}\n`;
        await wbk.sendMessage(m.chat, { 
            document: { url: urlDownload }, 
            fileName: fileName, 
            caption: message, 
            mimetype: fileType,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'spotify':
case 'spotifydl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
    if (!text.includes('spotify.com') && !text.includes('open.spotify')) return newReply('Harus berupa link Spotify!')
    try {
        await m.react('🕛');
        const spotifyData = await spotifydl(text)
        const formatDuration = (ms) => new Date(ms).toISOString().substr(14, 5);
        console.log(spotifyData)
        if (!spotifyData) return m.reply('Gagal mendapatkan data dari Spotify.')
        const durasi = `${(spotifyData.duration_ms / 1000).toFixed(2)} detik`
        await wbk.sendMessage(m.chat, {
            audio: { url: spotifyData.download },
            mimetype: 'audio/mpeg',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu,
                    newsletterJid: saluran
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: spotifyData.title,
                    body: formatDuration(spotifyData.duration_ms),
                    thumbnail: await getBuffer(spotifyData.image),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'gddl':
case 'gdrive':
case 'gdrivedl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
    if (!text.includes('drive')) return newReply('Link nggak valid')
    try {
        const res = await GDrive(text);
        if (res.error) return newReply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
        wbk.sendMessage(m.chat, {
            document: { url: res.downloadUrl },
            mimetype: res.mimetype,
            fileName: res.fileName,
            caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'pindl':
case 'pinterestdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
    if (!text.includes('pin')) return newReply(`Link Invalid!!`)
    try {
        await m.react('⏱️');
        const res = await savePin(text);
        const { title, results } = res
        let media = results[0]
        let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
        if (media.format === 'MP4') {
            await wbk.sendMessage(m.chat, {
                caption,
                video: { url: media.downloadLink },
            }, { quoted: m });
            await m.react('✅');
        await limitReduction(m, prefix, wm);
        } else if (media.format === 'JPG') {
            await wbk.sendMessage(m.chat, {
                caption,
                image: { url: media.downloadLink },
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            return newReply('Format media tidak didukung.')
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'rndl':
case 'rednote':
case 'rednotedl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply("Masukkan link nya, Contoh: " + (prefix + command) + " http://xhslink.com/a/eyX9A3tMU3u4");
    try {
        await m.react('⏱️');
        const response = await axios.get(`http://kinchan.sytes.net/rednote/downloader`, {
            params: { url: text }
        });
        const { metadata, media } = response.data;
        if (!media.videoUrl) {
            return newReply("⚠ Video tidak ditemukan atau tidak tersedia.");
        }
        await wbk.sendMessage(m.chat, {
            video: { url: media.videoUrl },
            caption: `*乂 Red Note Downloader*\n\n📌 *Judul*: ${metadata.title || '❌'}\n👤 *Author*: ${metadata.nickname || '❌'}\n📝 *Description*: ${metadata.description || '❌'}\n\n❤ *Like*: ${metadata.likes || '0'} | 💬 *Komentar*: ${metadata.comments || '0'} | ⭐ *Save*: ${metadata.collects || '0'}`,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'videy':
case 'videydl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.videy.co/videolink?id=xxxxxxx`);
    if (!text.includes('videy')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        const videoUrl = await videydl(text);
        if (!videoUrl) return newReply(`❌ Terjadi kesalahan saat mengambil data dari Videy. Pastikan URL yang Anda berikan benar.`);
        const responseMessage = `🎥 *Video berhasil diunduh!*\n🔗 *Link Video:* ${videoUrl}`;
        await wbk.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: responseMessage,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'gitclone': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!args[0]) return newReply(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
    if (!isUrl(args[0]) || !args[0].includes('github.com'))
        return newReply(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
    try {
        await m.react('⏳');
        let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = args[0].match(regex) || [];
        if (!user || !repo) return newReply(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
        repo = repo.replace(/.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let response = await fetch(url, {
            method: 'HEAD'
        });
        let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
        await wbk.sendMessage(m.chat, {
            document: { url: url },
            fileName: filename,
            mimetype: 'application/zip',
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'stickerly': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!args[0]) return newReply(`Example: ${prefix + command} https://sticker.ly/s/xyz123`);
    const stickers = await stickerLy(args[0]);
    if (!stickers || stickers.length === 0) {
        m.reply("Failed to fetch stickers. Please try again later!");
        break;
    }
    for (const stickerUrl of stickers) {
        try {
            await m.react('⏳');
            const stickerData = await axios.get(stickerUrl, { responseType: "arraybuffer" });
            const sticker = new Sticker(stickerData.data, {
                pack: "",
                author: wm
            });
            const stickerBuffer = await sticker.toBuffer();
            await wbk.sendMessage(m.chat, { 
                sticker: stickerBuffer,
            }, { quoted: m });
            await sleep(3500);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } catch (error) {
            console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
        }
    }
}
break;

// fun.js
case 'checkme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let namaTarget = args.join(" ");
    let idPengirim = `${m.sender}`;
    const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
    const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
    const tingkatBucin = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKeren = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
    const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
    const moralBaik = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const moralBuruk = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKepintaran = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKeberanian = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKetakutan = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
    let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
    let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
    let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
    let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
    let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
    let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
    let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
    let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
    let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
    let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
    let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama:* ${pushname}\n✨ *Karakteristik:* ${sifatAcak}\n🎯 *Hobi:* ${hobiAcak}\n❤️ *Tingkat Bucin:* ${bucinAcak}%\n🌟 *Tingkat Keren:* ${kerenAcak}%\n😎 *Ketampanan:* ${tampanAcak}\n🧠 *Watak:* ${watakAcak}\n💎 *Moral Baik:* ${moralBaikAcak}%\n🔥 *Moral Buruk:* ${moralBurukAcak}%\n📊 *Kepintaran:* ${pintarAcak}%\n🛡️ *Keberanian:* ${beraniAcak}%\n👻 *Ketakutan:* ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
    try {
        ppuser = await wbk.profilePictureUrl(m.sender, 'image');
    } catch (err) {
        ppuser = thumbUrl
    }
    let fotoProfil = await getBuffer(ppuser);
    wbk.sendMessage(m.chat, {
            image: fotoProfil,
            caption: profil,
            mentions: [idPengirim],
    }, { quoted: m });
    await limitReduction(m, prefix, wm);
}
break;

case 'mitos': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const mitos = JSON.parse(fs.readFileSync('./src/datateks/fun/mitos.json', 'utf-8'));
    const randomMitos = mitos[Math.floor(Math.random() * mitos.length)];
    newReply(`🪄 *Mitos Menarik*\n\n${randomMitos}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'faktaunik': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const faktaunik = JSON.parse(fs.readFileSync('./src/datateks/fun/faktaunik.json', 'utf-8'));
    const randomFaktaUnik = faktaunik[Math.floor(Math.random() * faktaunik.length)];
    newReply(`🧠 *Fakta Unik*\n\n${randomFaktaUnik}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'faktakucing': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const faktakucing = JSON.parse(fs.readFileSync('./src/datateks/fun/faktakucing.json', 'utf-8'));
    const randomFaktaKucing = faktakucing[Math.floor(Math.random() * faktakucing.length)];
    newReply(`🐈 *Fakta Kucing*\n\n${randomFaktaKucing}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'joke': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const joke = JSON.parse(fs.readFileSync('./src/datateks/fun/joke.json', 'utf-8'));
    const randomJoke = joke[Math.floor(Math.random() * joke.length)];
    newReply(`🤣 *Joke*\n\n${randomJoke}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekganteng': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekganteng = JSON.parse(fs.readFileSync('./src/datateks/fun/cekganteng.json', 'utf-8'));
    let komentarCekGanteng;
    if (percentage > 80) {
        komentarCekGanteng = cekganteng.above_80[Math.floor(Math.random() * cekganteng.above_80.length)];
    } else if (percentage > 50) {
        komentarCekGanteng = cekganteng.between_51_and_80[Math.floor(Math.random() * cekganteng.between_51_and_80.length)];
    } else {
        komentarCekGanteng = cekganteng.below_50[Math.floor(Math.random() * cekganteng.below_50.length)];
    }
    newReply(`👑 *Cek Ganteng*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekGanteng}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekcantik': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekcantik = JSON.parse(fs.readFileSync('./src/datateks/fun/cekcantik.json', 'utf-8'));
    let komentarCekCantik;
    if (percentage > 80) {
        komentarCekCantik = cekcantik.above_80[Math.floor(Math.random() * cekcantik.above_80.length)];
    } else if (percentage > 50) {
        komentarCekCantik = cekcantik.between_51_and_80[Math.floor(Math.random() * cekcantik.between_51_and_80.length)];
    } else {
        komentarCekCantik = cekcantik.below_50[Math.floor(Math.random() * cekcantik.below_50.length)];
    }
    newReply(`👑 *Cek Cantik*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekCantik}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekimut': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekimut = JSON.parse(fs.readFileSync('./src/datateks/fun/cekimut.json', 'utf-8'));
    let komentarCekImut;
    if (percentage > 80) {
        komentarCekImut = cekimut.above_80[Math.floor(Math.random() * cekimut.above_80.length)];
    } else if (percentage > 50) {
        komentarCekImut = cekimut.between_51_and_80[Math.floor(Math.random() * cekimut.between_51_and_80.length)];
    } else {
        komentarCekImut = cekimut.below_50[Math.floor(Math.random() * cekimut.below_50.length)];
    }
    newReply(`☺️ *Cek Imut*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekImut}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekjomok': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekjomok = JSON.parse(fs.readFileSync('./src/datateks/fun/cekjomok.json', 'utf-8'));
    let komentarCekJomok;
    if (percentage > 80) {
        komentarCekJomok = cekjomok.above_80[Math.floor(Math.random() * cekjomok.above_80.length)];
    } else if (percentage > 50) {
        komentarCekJomok = cekjomok.between_51_and_80[Math.floor(Math.random() * cekjomok.between_51_and_80.length)];
    } else {
        komentarCekJomok = cekjomok.below_50[Math.floor(Math.random() * cekjomok.below_50.length)];
    }
    newReply(`😊 *Cek Imut*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekJomok}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekwaifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekwaifu = JSON.parse(fs.readFileSync('./src/datateks/cekwaifu.json', 'utf-8'));
    let komentarCekWaifu;
    if (percentage > 80) {
        komentarCekWaifu = cekwaifu.above_80[Math.floor(Math.random() * cekwaifu.above_80.length)];
    } else if (percentage > 50) {
        komentarCekWaifu = cekwaifu.between_51_and_80[Math.floor(Math.random() * cekwaifu.between_51_and_80.length)];
    } else {
        komentarCekWaifu = cekwaifu.below_50[Math.floor(Math.random() * cekwaifu.below_50.length)];
    }
    newReply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentarCekWaifu}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekhusbu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekhusbu = JSON.parse(fs.readFileSync('./src/datateks/cekhusbu.json', 'utf-8'));
    let komentarCekHusbu;
    if (percentage > 80) {
        komentarCekHusbu = cekhusbu.above_80[Math.floor(Math.random() * cekhusbu.above_80.length)];
    } else if (percentage > 50) {
        komentarCekHusbu = cekhusbu.between_51_and_80[Math.floor(Math.random() * cekhusbu.between_51_and_80.length)];
    } else {
        komentarCekHusbu = cekhusbu.below_50[Math.floor(Math.random() * cekhusbu.below_50.length)];
    }
    newReply(`💖 *Cek Husbu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentarCekHusbu}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekkpribadian': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const cekkpribadian = JSON.parse(fs.readFileSync('./src/datateks/fun/joke.json', 'utf-8'));
    const randomCekKpribadian = cekkpribadian[Math.floor(Math.random() * cekkpribadian.length)];
    newReply(`😎 *Kpribadian*\n\n${randomCekKpribadian}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekmasadepan': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const masaDepan = [
        '💼 Akan jadi bos besar di perusahaan ternama!',
        '🏝️ Pensiun muda dan tinggal di pulau tropis.',
        '💖 Akan menemukan cinta sejati dalam waktu dekat.',
        '📚 Akan jadi orang yang sangat berilmu dan dihormati.',
        '💸 Kaya raya dengan bisnis sukses!',
        '🎭 Masa depan Kakak penuh misteri dan kejutan!',
        '😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
    ];
    const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
    newReply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'quotesgalau': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const quotes = [
        '💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
        '🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
        '😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
        '💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
        '🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    newReply(`💔 *Quotes Galau*\n\n${randomQuote}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'truth': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const truths = [
        '😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
        '🤭 Siapa orang yang diam-diam kamu suka saat ini?',
        '🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
        '👀 Hal paling memalukan yang pernah kamu alami?',
        '💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
    ];
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    newReply(`🤔 *Truth*\n\n${randomTruth}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'dare': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const dares = [
        '🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
        '😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
        '🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
        '🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
        '📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
    ];
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    newReply(`😈 *Dare*\n\n${randomDare}`);
    await limitReduction(m, prefix, wm);
}
break;

// game.js
case 'suit': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	const userChoice = text.toLowerCase();
	const choices = ['batu', 'gunting', 'kertas'];
	const botChoice = choices[Math.floor(Math.random() * choices.length)];
	if (!choices.includes(userChoice)) {
		return newReply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
	}
	let hasil = '';
	if (userChoice === botChoice) {
		hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
	} else if (
		(userChoice === 'batu' && botChoice === 'gunting') ||
		(userChoice === 'gunting' && botChoice === 'kertas') ||
		(userChoice === 'kertas' && botChoice === 'batu')
	) {
		hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
	} else {
		hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
	}
	newReply(hasil);
}
break;

case 'tebakgambar': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakgambar[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakgambar[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakgambar[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakgame': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakgame[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakgame[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakgame[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkata': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakkata[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkata[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakkata[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakbendera': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.name)
		tebakbendera[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakbendera[m.chat]) {
					waktuHabis(result.name)
					delete tebakbendera[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkalimat': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakkalimat[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkalimat[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakkalimat[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaksiapa': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		siapaaku[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (siapaaku[m.chat]) {
					waktuHabis(result.jawaban)
					delete siapaaku[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkimia': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.unsur)
		tebakkimia[m.chat] = [
			await wbk.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkimia[m.chat]) {
					waktuHabis(result.unsur)
					delete tebakkimia[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaklirik': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebaklirik[m.chat] = [
			await wbk.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebaklirik[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebaklirik[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaktebakan': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebaktebakan[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebaktebakan[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebaktebakan[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'susunkata': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		susunkata[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (susunkata[m.chat]) {
					waktuHabis(result.jawaban)
					delete susunkata[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'caklontong': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		caklontong[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (caklontong[m.chat]) {
					waktuHabis(result.jawaban)
					delete caklontong[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tekateki': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tekateki[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tekateki[m.chat]) {
					waktuHabis(result.jawaban)
					delete tekateki[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'asahotak': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/NzrlAfndi/Databasee/raw/refs/heads/main/games/asahotak.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		asahotak[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (asahotak[m.chat]) {
					waktuHabis(result.jawaban)
					delete asahotak[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break
        
case 'butawarna': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/siputzx/Databasee/raw/refs/heads/main/games/butawarna.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.correct)
		butawarna[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: { url: result.image }, caption: `Angka berapa yang ada pada gambar?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
			setTimeout(() => {
				if (butawarna[m.chat]) {
					waktuHabis(result.correct)
					delete butawarna[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'lengkapikalimat': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/NzrlAfndi/Databasee/raw/refs/heads/main/games/lengkapikalimat.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		lengkapikalimat[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.pertanyaan}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (lengkapikalimat[m.chat]) {
					waktuHabis(result.jawaban)
					delete lengkapikalimat[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'chess': {
    if (!m.isGroup) return newReply('❌ Fitur ini hanya tersedia di grup.');
    const key = m.chat;
    wbk.chess = wbk.chess || {};
    let chessData = wbk.chess[key] || {
        gameData: null,
        fen: null,
        currentTurn: null,
        players: [],
        hasJoined: []
    };
    wbk.chess[key] = chessData;
    const { gameData, fen, currentTurn, players, hasJoined } = chessData;
    const feature = args[0]?.toLowerCase();
    const senderId = m.sender;
    if (feature === 'delete') {
        delete wbk.chess[key];
        return await wbk.sendMessage(m.chat, { text: '🏳 *Permainan catur dihentikan.*' }, { quoted: m });
    }
    if (feature === 'create') {
        if (gameData) 
            return await wbk.sendMessage(m.chat, { text: '⚠ *Permainan sudah dimulai.*' }, { quoted: m });
        chessData.gameData = {
            status: 'waiting',
            black: null,
            white: null
        };
        return await wbk.sendMessage(m.chat, { text: `🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.\n> Ketik *${prefix}chess join* untuk bergabung` }, { quoted: m });
    }
    if (feature === 'join') {
        if (!gameData || gameData.status !== 'waiting') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Tidak ada permainan catur yang sedang menunggu.*' 
            }, { quoted: m });
        }
        if (players.includes(senderId)) {
            return await wbk.sendMessage(m.chat, { 
                text: '🙅‍♂ *Anda sudah bergabung dalam permainan ini.*' 
            }, { quoted: m });
        }
        if (players.length >= 2) {
            return await wbk.sendMessage(m.chat, { 
                text: '👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.' 
            }, { quoted: m });
        }
        players.push(senderId);
        hasJoined.push(senderId);
        if (players.length === 2) {
            gameData.status = 'ready';
            const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
            gameData.black = black;
            gameData.white = white;
            chessData.currentTurn = white;
            return await wbk.sendMessage(m.chat, { 
                text: `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `@${playerId.split('@')[0]}`).join('\n')}\n\n⚫ *Hitam:* @${black.split('@')[0]}\n⚪ *Putih:* @${white.split('@')[0]}\n\n🕹 Silakan gunakan *${prefix}chess start* untuk memulai permainan.`,
                mentions: hasJoined 
            }, { quoted: m });
        } else {
            return await wbk.sendMessage(m.chat, { 
                text: '🙋‍♂ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.' 
            }, { quoted: m });
        }
    }
    if (feature === 'start') {
        if (!gameData || gameData.status !== 'ready') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Tidak dapat memulai permainan.*\nTunggu hingga dua pemain bergabung.' 
            }, { quoted: m });
        }
        gameData.status = 'playing';
        const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        chessData.fen = fen;
        const encodedFen = encodeURIComponent(fen);
        const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
        const flipParam = senderId === gameData.black ? '' : '&flip=true';
        const flipParam2 = senderId === gameData.black ? '' : '-flip';
        const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        try {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl }, 
                caption: giliran,
                mentions: [gameData.white]
            }, { quoted: m });
        } catch (error) {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl2 }, 
                caption: giliran,
                mentions: [gameData.white]
            }, { quoted: m });
        }
    }
    if (args.length === 2) {
        if (!gameData || gameData.status !== 'playing') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Permainan belum dimulai.*' 
            }, { quoted: m });
        }
        if (currentTurn !== senderId) {
            return await wbk.sendMessage(m.chat, { 
                text: `⏳ *Sekarang giliran ${currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`, 
                mentions: [currentTurn]
            }, { quoted: m });
        }
        const chess = new Chess(fen);
        if (chess.isCheckmate()) {
            delete wbk.chess[key];
            return await wbk.sendMessage(m.chat, { 
                text: `🏆 *Checkmate! Pemenang:* @${m.sender.split('@')[0]}`, 
                mentions: [m.sender]
            }, { quoted: m });
        }
        if (chess.isDraw()) {
            delete wbk.chess[key];
            return await wbk.sendMessage(m.chat, { 
                text: '🤝 *Permainan berakhir seri.*' 
            }, { quoted: m });
        }
        const [from, to] = args;
        try {
            chess.move({ from, to, promotion: 'q' });
        } catch (e) {
            return await wbk.sendMessage(m.chat, { 
                text: '❌ *Langkah tidak valid.*' 
            }, { quoted: m });
        }
        chessData.fen = chess.fen();
        chessData.currentTurn = players.find(p => p !== senderId);
        const encodedFen = encodeURIComponent(chess.fen());
        const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
        const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}`;
        const flipParam = senderId === gameData.black ? '' : '&flip=true';
        const flipParam2 = senderId === gameData.black ? '' : '-flip';
        const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        try {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl }, 
                caption: giliran,
                mentions: [chessData.currentTurn]
            }, { quoted: m });
        } catch (error) {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl2 }, 
                caption: giliran,
                mentions: [chessData.currentTurn]
            }, { quoted: m });
        }
    }
    if (feature === 'help') {
        return await wbk.sendMessage(m.chat, { 
            text: `🌟 *Perintah Permainan Catur:*\n\n` +
                  `🏁 *chess create* - Mulai permainan catur\n` +
                  `👥 *chess join* - Bergabung dalam permainan catur yang sedang menunggu\n` +
                  `🎲 *chess start* - Memulai permainan jika ada dua pemain yang sudah bergabung\n` +
                  `🚫 *chess delete* - Menghentikan permainan catur\n` +
                  `🔄 *chess [dari] [ke]* - Melakukan langkah dalam permainan catur\n\n` +
                  `📌 *Contoh:*\n` +
                  `- _chess create_ → Memulai permainan catur.\n` +
                  `- _chess join_ → Bergabung dalam permainan.\n` +
                  `- _chess e2 e4_ → Melakukan langkah e2 ke e4.` 
        }, { quoted: m });
    }
    return wbk.sendMessage(m.chat, '❓ Perintah tidak valid. Gunakan "chess help" untuk melihat bantuan.', m);
};
break;

case 'bantuan': { //
	try {
		if (m.chat in tebakgambar) {
			let json = tebakgambar[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakgame) {
			let json = tebakgame[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkata) {
			let json = tebakkata[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakbendera) {
			let json = tebakbendera[m.chat][1]
			m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkalimat) {
			let json = tebakkalimat[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in siapaaku) {
			let json = siapaaku[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkimia) {
			let json = tebakkimia[m.chat][1]
			m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebaklirik) {
			let json = tebaklirik[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebaktebakan) {
			let json = tebaktebakan[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in susunkata) {
			let json = susunkata[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in caklontong) {
			let json = caklontong[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tekateki) {
			let json = tekateki[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
        if (m.chat in asahotak) {
			let json = asahotak[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in butawarna) {
			let json = butawarna[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
        if (m.chat in lengkapikalimat) {
			let json = lengkapikalimat[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
	} catch (error) {
		console.log(error);
	}
}
break

case 'nyerah': { //
	try {
        if (m.chat in tebakgambar) {
			clearTimeout(tebakgambar[m.chat][3])
			delete tebakgambar[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakgame) {
			clearTimeout(tebakgame[m.chat][3])
			delete tebakgame[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkata) {
			clearTimeout(tebakkata[m.chat][3])
			delete tebakkata[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakbendera) {
			clearTimeout(tebakbendera[m.chat][3])
			delete tebakbendera[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkalimat) {
			clearTimeout(tebakkalimat[m.chat][3])
			delete tebakkalimat[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in siapaaku) {
			clearTimeout(siapaaku[m.chat][3])
			delete siapaaku[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkimia) {
			clearTimeout(tebakkimia[m.chat][3])
			delete tebakkimia[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tebaklirik) {
			clearTimeout(tebaklirik[m.chat][3])
			delete tebaklirik[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tebaktebakan) {
			clearTimeout(tebaktebakan[m.chat][3])
			delete tebaktebakan[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in susunkata) {
			clearTimeout(susunkata[m.chat][3])
			delete susunkata[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in caklontong) {
			clearTimeout(caklontong[m.chat][3])
			delete caklontong[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tekateki) {
			clearTimeout(tekateki[m.chat][3])
			delete tekateki[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in asahotak) {
			clearTimeout(asahotak[m.chat][3])
			delete asahotak[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in butawarna) {
			clearTimeout(butawarna[m.chat][3])
			delete butawarna[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in lengkapikalimat) {
			clearTimeout(lengkapikalimat[m.chat][3])
			delete lengkapikalimat[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
	} catch (error) {
		console.log(error);
	}
}
break

// group.js
case "autoaigc": {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply("❗ *Kirim perintah*:\n" + (prefix + command) + " true/false");
    if (args[0] === "true") {
        db.data.chats[m.chat].autoaigc = true;
        await newReply(mess.done);
    } else {
        if (args[0] === "false") {
            db.data.chats[m.chat].autoaigc = false;
            await newReply(mess.done);
        }
    }
}
break;

case 'hapus':
case 'delete':
case 'del': {
    if (!m.quoted) return newReply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    await wbk.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    })
}
break;

case 'antibadword':
case 'antitoxic': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].badword = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].badword = false
        newReply(`${commad} is disabled`)
    }
}
break;

case 'nsfw': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args[0] === 'true') {
        if (AntiNsfw) return newReply('Already activated')
        ntnsfw.push(m.chat)
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
        newReply('Success in turning on nsfw in this group')
        var groupe = await wbk.groupMetadata(m.chat)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        wbk.sendMessage(m.chat, {
            text: `*「 ⚠️Warning⚠️ 」*\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
            contextInfo: {
                mentionedJid: mems
            }
        }, {
            quoted: m
        })
    } else if (args[0] === 'false') {
        if (!AntiNsfw) return newReply('Already deactivated')
        let off = ntnsfw.indexOf(m.chat)
        ntnsfw.splice(off, 1)
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
        newReply('Success in turning off nsfw in this group')
    } else {
        await newReply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
    }
}
break;

case 'antiaudio': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antiaudio = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antiaudio = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antisticker': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antisticker = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antisticker = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antiimage': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antiimage = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antiimage = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antivideo': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antivideo = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antivideo = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antidocument': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antidocument = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antidocument = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'anticontact': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].anticontact = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].anticontact = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antilocation': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antilocation = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antilocation = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antimedia': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antimedia = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antimedia = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antiviewonce': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antiviewonce = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antiviewonce = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antibot': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antibot = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antibot = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antispam': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antispam = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antispam = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antilink': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antilink = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antilink = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antilinkgc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antilinkgc = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antilinkgc = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'antiforeign': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        db.data.chats[m.chat].antiforeignnum = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        db.data.chats[m.chat].antiforeignnum = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'liat':
case 'rvo':
case 'readviewonce': {
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!m.quoted) return newReply(`Reply pesan view once-nya! 🙏`);
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    if (!msg[type].viewOnce) return newReply('Itu bukan pesan view-once! 🙏')
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return wbk.sendMessage(m.chat, {
            video: buffer,
            caption: msg[type].caption || ''
        }, {
            quoted: m
        })
    } else if (/image/.test(type)) {
        return wbk.sendMessage(m.chat, {
            image: buffer,
            caption: msg[type].caption || ''
        }, {
            quoted: m
        })
    } else if (/audio/.test(type)) {
        return wbk.sendMessage(m.chat, {
            audio: buffer,
            mimetype: 'audio/mpeg',
            ptt: true
        }, {
            quoted: m
        })
    }
}
break;

case 'mute': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    const args = text.split(' ');
    const byId = args[0] === '--byid' ? args[0] : null;
    const muteStatus = byId ? args[2] : args[0];
    if (byId) {
        if (!db.data.chats[byId]) return newReply('ID grup tidak ditemukan di database.');
        if (muteStatus === 'true') {
            if (db.data.chats[byId].mute) return newReply('*Sudah Aktif Sebelumnya*');
            db.data.chats[byId].mute = true;
            newReply('*Mute Activated for ' + byId + '!*');
        } else if (muteStatus === 'false') {
            db.data.chats[byId].mute = false;
            newReply('*Mute Disabled for ' + byId + '!*');
        } else {
            newReply('Gunakan true/false untuk mengatur mute.');
        }
    } else {
        if (muteStatus === 'true') {
            if (db.data.chats[m.chat].mute) return newReply('*Sudah Aktif Sebelumnya*');
            db.data.chats[m.chat].mute = true;
            newReply('*Mute Activated!*');
        } else if (muteStatus === 'false') {
            db.data.chats[m.chat].mute = false;
            newReply('*Mute Disabled!*');
        } else {
            newReply('Gunakan true/false?');
        }
    }
}
break;

case 'welcome':
case 'left': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        welcome = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        welcome = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'adminevent': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        adminevent = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        adminevent = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'groupevent': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        groupevent = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        groupevent = false
        newReply(`${command} is disabled`)
    }
}
break;

case 'sider':
case 'gcsider': {
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();
    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof db.data.users[member[i]] == 'undefined' || milliseconds * 1 - db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof db.data.users[member[i]] !== 'undefined') {
                if (db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return newReply(`*Digrup ini tidak terdapat sider.*`)
    newReply(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => ' · @' + v.replace(/@.+/, '' + typeof db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - db.data.users[v].lastseen))).join('\n')}`);
}
break

case 'dor':
case 'hedsot':
case 'buang':
case 'kick': {
    if (!m.isGroup) return newReply('Eits, perintah ini cuma bisa dipakai di grup lho, kak! 🤭');
    if (!isCreator && !isAdmins) return newReply('Maaf ya kak, cuma admin atau owner yang bisa pakai perintah ini. 🙏');
    if (!isBotAdmins) return newReply('Aku belum jadi admin nih, kak. Jadikan aku admin dulu ya biar bisa bantu! 😢');
    if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) {
        return newReply('Hmm... Kakak mau kick siapa nih? Sebutin dong orangnya! 🤔');
    }
    let users = m.mentionedJid[0] ?
        m.mentionedJid[0] : m.quoted ?
        m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (ownerNumber.includes(users.replace('@s.whatsapp.net', ''))) {
        return newReply('Eh, itu kan owner aku, kak! Jangan usil dong, nanti aku dimarahin. 😣');
    }
    try {
        await wbk.groupParticipantsUpdate(m.chat, [users], 'remove');
        newReply('Yey, udah berhasil kak! Bye-bye orang yang tadi~ 👋✨');
    } catch (err) {
        console.error(err);
        newReply('Aduh, ada yang salah nih waktu aku coba kick orangnya. Coba cek lagi ya, kak. 😥');
    }
};
break;

case 'add': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!text && !m.quoted) {
        newReply(`Cara pakai command: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
        try {
            await wbk.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
                .then(async (res) => {
                    for (let i of res) {
                        let invv = await wbk.groupInviteCode(m.chat);
                        if (i.status == 408) return newReply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
                        if (i.status == 401) return newReply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
                        if (i.status == 409) return newReply('Wah, user ini udah masuk grup! 🎉');
                        if (i.status == 500) return newReply('Maaf, grup ini sudah penuh! 😞');
                        if (i.status == 403) {
                            await wbk.sendMessage(m.chat, {
                                text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`,
                                mentions: [numbersOnly]
                            }, {
                                quoted: m
                            });
                            await wbk.sendMessage(`${numbersOnly ? numbersOnly : creator}`, {
                                text: `${'https://chat.whatsapp.com/' + invv}\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`,
                                detectLink: true,
                                mentions: [numbersOnly]
                            }, {
                                quoted: floc2
                            }).catch((err) => newReply('Gagal kirim undangan! 😔'));
                        } else {
                            newReply(mess.done);
                        }
                    }
                });
        } catch (e) {
            newReply('Gagal nambahin usernya nih, ada yang salah! 😢');
        }
    }
}
break;

case 'terima': {
    const teks = `⸙‹•══════════════♡᭄\n│ *Nama:* \n│ *Gender:* \n│ *Umur:* \n│ *Hobi:* \n│ *Kelas:* \n│ *Asal:* \n│ *Agama:* \n│ *Status:* \n╰═════ꪶ ۪⸙ ━ ━ ━ ━ ꪶ ̷⸙`
    m.reply(teks);
};
break;

case 'tolak': {
    const teksAcak = [
        "Oke, kartu intro-nya nggak akan dikirim. 👍",
        "Sip, aku batalin kartu intro-nya. 😌",
        "Kartu intro nggak jadi aku kirim. Santai aja. 😉",
        "Intro-nya nggak akan dikirim, pesan diterima. ✅",
        "Baik, aku stop kartu intro-nya sekarang. ✋",
        "Kartu intro nggak perlu dikirim, catat ya! 📝",
        "Permintaan diterima, aku nggak kirim kartu intro. 📭",
        "Intro-nya nggak jadi dikirim. Siap aman! 🚫",
        "Paham, kartu intro aku tahan. 💬",
        "Kartu intro-nya aku skip aja, sesuai request. ⏭️",
        "Nggak masalah, kartu intro nggak aku kirim. 😄",
        "Santuy aja, aku udah batalin kartu intro-nya. 😌",
        "Permintaan diterima, nggak bakal ada kartu intro. 👍",
        "Kartu intro-nya di-cancel. Siap! 🛑",
        "Intro aku hold, tenang aja. 🤝",
        "Aku ngerti, kartu intro udah nggak aku kirim. ✋",
        "Kartu intro-nya off ya, aman terkendali. ✅",
        "Beres! Kartu intro aku skip dulu. 💡",
        "Pesan masuk, kartu intro nggak aku kirim. 🚷",
        "Tenang, kartu intro udah di-stop! 🚦"
    ];
    const teks = teksAcak[Math.floor(Math.random() * teksAcak.length)];
    m.reply(teks);
};
break;

case 'promote': {
    if (!m.isGroup) return newReply(mess.group)
    if (!isCreator && !isAdmins) return newReply(mess.admin)
    if (!isBotAdmins) return newReply(mess.botAdmin)
    if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... kakak mau promote siapa?');
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`)
    await wbk.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(mess.error))
}
break

case 'demote': {
    if (!m.isGroup) return newReply(mess.group)
    if (!isCreator && !isAdmins) return newReply(mess.admin)
    if (!isBotAdmins) return newReply(mess.botAdmin)
    if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... kakak kamu demote siapa? 🤔')
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`)
    await wbk.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(mess.error))
}
break

case 'revoke': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    await wbk.groupRevokeInvite(m.chat)
    .then(res => {
        m.reply(mess.done)
    }).catch(() => m.reply(mess.error))
}
break

case 'setnamegc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!text) return newReply('Mau di namain apa kak grupnya? 🤔');
    await wbk.groupUpdateSubject(m.chat, text);
    newReply(mess.done);
}
break;

case 'setppgc': {
    if (!m.isGroup) return newReply(mess.group)
    if (!isAdmins) return newReply(mess.admin)
    if (!isBotAdmins) return newReply(mess.botAdmin)
    if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    let media = await wbk.downloadAndSaveMediaMessage(quoted)
    await wbk.updateProfilePicture(m.chat, {
        url: media
    }).catch((err) => fs.unlinkSync(media))
    newReply(mess.done)
}
break

case 'delppgc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    await wbk.removeProfilePicture(m.chat)
}
break;

case 'setdescgc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!text) return newReply('Text ?')
    await wbk.groupUpdateDescription(m.chat, text)
    newReply(mess.done)
}
break;

case 'editinfogc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (args[0] === 'open') {
        await wbk.groupSettingUpdate(m.chat, 'unlocked')
            .then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
            .catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
    } else if (args[0] === 'close') {
        await wbk.groupSettingUpdate(m.chat, 'locked')
            .then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
            .catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
    } else {
        newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Izinkan anggota mengedit info grup\n · *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
    }
}
break;

case 'listonline': case 'liston': {
    if (!m.isGroup) return newReply(mess.group);
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    await wbk.sendMessage(m.chat, {
        text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`,
        mentions: online
    }, {
        quoted: m
    }).catch((e) => newReply('*Data tidak ditemukan! ☹️*'))
}
break;

case 'group':
case 'grup': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (args[0] === 'close') {
        await wbk.groupSettingUpdate(m.chat, 'announcement')
            .then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
            .catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
    } else if (args[0] === 'open') {
        await wbk.groupSettingUpdate(m.chat, 'not_announcement')
            .then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
            .catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
    } else {
        newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Buka grup\n · *${prefix + command} close* → Tutup grup`);
    }
}
break;

case 'linkgroup':
case 'linkgrup':
case 'linkgc': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    let response = await wbk.groupInviteCode(m.chat)
    wbk.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
        detectLink: true
    })
}
break;

case 'afk': {
    if (!m.isGroup) return newReply(mess.group);
    if (isAfkOn) return;
    let reason = text ? text : 'Nggak ada alasan yang disebutkan~ 🤭';
    addAfkUser(m.sender, Date.now(), reason, afk);
    wbk.sendTextWithMentions(
        m.chat,
        `🌙 *AFK Mode Aktif!* 🌙\n` +
        `👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n` +
        `💬 *Alasan:* ${reason}\n\n` +
        `Jangan lupa balik lagi ya~ 😊✨`,
        m
    );
}
break;

case 'tagall': {
    if (!m.isGroup) return newReply(`Fitur ini hanya bisa digunakan di grup ya, kak!`)
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(`Maaf, kak! Kamu harus jadi admin dulu buat pakai fitur ini.`)
    if (!isBotAdmins) return newReply(`Aku harus jadi admin dulu untuk menjalankan perintah ini. Tolong jadikan aku admin ya!`)
    let pengirim = m.sender
    let teks = `🌸 *Tag All Anggota Grup* 🌸\n\n`
    teks += `📣 *Penanda:* @${pengirim.split('@')[0]}\n`
    teks += `📩 *Pesan:* ${q ? q : 'Tidak ada pesan khusus nih!'}\n\n`
    for (let member of participants) {
        teks += `- @${member.id.split('@')[0]}\n`
    }
    wbk.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map(member => member.id)
    }, {
        quoted: m
    })
}
break

case 'h':
case 'hidetag': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (m.quoted) {
        wbk.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map(a => a.id)
        })
    } else {
        wbk.sendMessage(m.chat, {
            text: `@${m.chat} ${q ? q : ''}`,
            contextInfo: {
                mentionedJid: participants.map(a => a.id),
                groupMentions: [{
                    groupSubject: "everyone",
                    groupJid: m.chat
                }]
            }
        }, {
            quoted: fconver
        })
    }
}
break

case 'getjoinrequest': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    const response = await wbk.groupRequestParticipantsList(m.chat);
    if (!response || !response.length) {
        wbk.sendMessage(m.chat, {
            text: 'No pending join requests. ✅'
        }, {
            quoted: m
        });
        return;
    }
    let replyMessage = `Join Request List:\n`;
    response.forEach((request, index) => {
        const {
            jid,
            request_method,
            request_time
        } = request;
        const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
        replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
        replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
        replyMessage += `\n🧪 *Method:* ${request_method}`;
        replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
    });
    wbk.sendMessage(m.chat, {
        text: replyMessage
    }, {
        quoted: m
    });
};
break;

case 'groupsettings': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    const settings = db.data.chats[m.chat];
    if (!settings) {
        return newReply(`Pengaturan tidak ditemukan untuk grup ini.`);
    }
    const formatBoolean = (value) => value ? 'Aktif' : 'Tidak Aktif';
    let message = `*Pengaturan Grup untuk ${m.chat}*\n\n` +
        `◦ Welcome: ${formatBoolean(settings.welcome)}\n` +
        `◦ Bad Word: ${formatBoolean(settings.badword)}\n` +
        `◦ Anti Foreign Number: ${formatBoolean(settings.antiforeignnum)}\n` +
        `◦ Anti View Once: ${formatBoolean(settings.antiviewonce)}\n` +
        `◦ Anti Bot: ${formatBoolean(settings.antibot)}\n` +
        `◦ Anti Spam: ${formatBoolean(settings.antispam)}\n` +
        `◦ Anti Media: ${formatBoolean(settings.antimedia)}\n` +
        `◦ Anti Image: ${formatBoolean(settings.antiimage)}\n` +
        `◦ Anti Video: ${formatBoolean(settings.antivideo)}\n` +
        `◦ Anti Audio: ${formatBoolean(settings.antiaudio)}\n` +
        `◦ Anti Sticker: ${formatBoolean(settings.antisticker)}\n` +
        `◦ Anti Contact: ${formatBoolean(settings.anticontact)}\n` +
        `◦ Anti Location: ${formatBoolean(settings.antilocation)}\n` +
        `◦ Anti Document: ${formatBoolean(settings.antidocument)}\n` +
        `◦ Anti Link: ${formatBoolean(settings.antilink)}\n` +
        `◦ Anti Link GC: ${formatBoolean(settings.antilinkgc)}\n` +
        `◦ Mute: ${formatBoolean(settings.mute)}\n` +
        `◦ List Store: ${JSON.stringify(settings.liststore)}\n`;
    await newReply(message);
}
break

case 'getpp': {
    if (!isPremium) return newReply(mess.premium);
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Silahkan tag orangnya ya, kak!`)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    try {
        avatar = await sock.profilePictureUrl(users, "image")
    } catch {
        avatar = imageUrl
    }
    try {
        wbk.sendMessage(m.chat, {
            image: {
                url: avatar
            },
            caption: mess.done
        }, {
            quoted: m
        })
    } catch (error) {
        console.log(error);
        newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
    };
}
break;

// infobot.js
case 'speed': case 'ping': {
    try {
        const used = process.memoryUsage();
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
            return cpu;
        });
        const cpu = cpus.reduce((last, cpu, _, {
            length
        }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
        }, {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            }
        });
        let start = performance.now();
        let end = performance.now();
        let latensi = end - start;
        let osInfo = await nou.os.oos();
        let storage = await nou.drive.info();
        let respon = `✨ *Informasi Bot WhatsApp* ✨

📡 *Jaringan Server*
 · *Ping:* ${latensi.toFixed(4)} Detik
🖥️ *Informasi Server*
 · *OS:* ${osInfo}
 · *IP Address:* ${nou.os.ip()}
 · *Tipe OS:* ${nou.os.type()}

 💾 *RAM:*
 · *Total:* ${formatp(os.totalmem())}
 · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}

 📂 *Penyimpanan:*
 · *Total:* ${storage.totalGb} GB
 · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)
 · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)

 ⏳ *Waktu Aktif Server:*
${runtime(process.uptime())}
 ⚙️ *CPU (${cpus.length} Core)*
 · *Model:* ${cpus[0].model.trim()}
 · *Kecepatan:* ${cpu.speed} MHz
${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

Tetap semangat ya kak! WBK selalu siap membantu 🥰`;
        await wbk.sendMessage(m.chat, {
            text: respon,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: wm,
                    body: ownerName,
                    thumbnail: thumb,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        });
    } catch (err) {
        console.error(err);
    }
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'sendlocation': case 'sendloc': {
    let latitude = -8.168696; // Latitude (contoh Jakarta)
    let longitude = 113.702120; // Longitude (contoh Jakarta)
    let caption = "Lokasi Bot ini berada di Jember";
    let fxy = "https://files.catbox.moe/okmz3n.jpeg"
    try {
        fxy = await wbk.profilePictureUrl(m.sender, 'image')
    } catch (e) {}
    await wbk.sendMessage(m.chat, {
        location: {
            degreesLatitude: latitude,
            degreesLongitude: longitude,
            name: wm,
			address: botName,
			url: website,
			isLive: true,
			accuracyInMeters: 0,
			speedInMps: 0,
			degreesClockwiseFromMagneticNorth: 2,
			comment: '',
			jpegThumbnail: await (await fetch(fxy)).buffer()
        },
        caption: caption
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'p':
case 'tes':
case 'test': {
    const caption = `Haii, Kak! ✨ AIzero udah aktif nih dan siap nemenin Kakak kapan aja! 🤗💕\nKalau ada yang mau Kakak mulai atau mau cek seberapa cepat respons AIzero, langsung aja klik tombol di bawah ya! 👇✨`;
    wbk.sendMessage(m.chat, {
        image: thumb,
        caption: caption,
        footer: `${botName} • AIzero siap sedia buat Kakak! 💬`,
        buttons: [{
                buttonId: `${prefix}menu`,
                buttonText: {
                    displayText: "🚀 Start"
                }
            },
            {
                buttonId: `${prefix}ping`,
                buttonText: {
                    displayText: "📶 Cek Status"
                }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, {
        quoted: fconver
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'owner':
case 'creator': {
    const caption = `Haii Kak ${pushname}, ${ucapanWaktu}! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
    wbk.sendMessage(m.chat, {
        image: thumb,
        caption: caption,
        footer: botName,
        buttons: [{
                buttonId: `${prefix}about`,
                buttonText: {
                    displayText: "About Owner 👤"
                }
            },
            {
                buttonId: `${prefix}contact`,
                buttonText: {
                    displayText: "Contact Owner ✨"
                }
            },
            {
                buttonId: `${prefix}menu`,
                buttonText: {
                    displayText: "View Menu 👀"
                }
            }
        ],
        viewOnce: true,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: saluranName,
                newsletterJid: saluran,
            },
            externalAdReply: {
                showAdAttribution: true,
                title: wm,
                body: ownerName,
                thumbnail: thumb,
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'contact': {
    await wbk.sendMessage( m.chat, { 
        contacts: { 
            displayName: ownerName, 
            contacts: contacts 
        }
    }, { quoted: m });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'about': {
    newReply('OWNER ALWAYS WIN');
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'totalfeature':
case 'totalcmd':
case 'totalcommand':
case 'totalcase':
case 'totalfitur': {
    const { commands: allCaseCommands, caseCount: allCaseCount } = getAllCaseCommands();
    const { commands: aiCommands, caseCount: aiCount } = getAICommands();
    const { commands: animeCommands, caseCount: animeCount } = getAnimeCommands();
    const { commands: downloadCommands, caseCount: downloadCount } = getDownloadCommands();
    const { commands: funCommands, caseCount: funCount } = getFunCommands();
    const { commands: gameCommands, caseCount: gameCount } = getGameCommands();
    const { commands: groupCommands, caseCount: groupCount } = getGroupCommands();
    const { commands: infoBotCommands, caseCount: infoBotCount } = getInfoBotCommands();
    const { commands: infoMeCommands, caseCount: infoMeCount } = getInfoMeCommands();
    const { commands: informationCommands, caseCount: informationCount } = getInformationCommands();
    const { commands: jkt48Commands, caseCount: jkt48Count } = getJKT48Commands();
    const { commands: makerCommands, caseCount: makerCount } = getMakerCommands();
    const { commands: menfessCommands, caseCount: menfessCount } = getMenfessCommands();
    const { commands: newsletterCommands, caseCount: newsletterCount } = getNewsletterCommands();
    const { commands: otherCommands, caseCount: otherCount } = getOtherCommands();
    const { commands: ownerCommands, caseCount: ownerCount } = getOwnerCommands();
    const { commands: ppobCommands, caseCount: ppobCount } = getPPOBCommands();
    const { commands: pushkontakCommands, caseCount: pushkontakCount } = getPushKontakCommands();
    const { commands: rpgCommands, caseCount: rpgCount } = getRPGCommands();
    const { commands: searchCommands, caseCount: searchCount } = getSearchCommands();
    const { commands: soundEffectCommands, caseCount: soundEffectCount } = getSoundEffectCommands();
    const { commands: soundTiktokCommands, caseCount: soundTiktokCount } = getSoundTiktokCommands();
    const { commands: stalkCommands, caseCount: stalkCount } = getStalkCommands();
    const { commands: stickerpackCommands, caseCount: stickerpackCount } = getStickerPackCommands();
    const { commands: storeCommands, caseCount: storeCount } = getStoreCommands();
    const { commands: toolCommands, caseCount: toolCount } = getToolCommands();
    
    let total = `✨ *Total Fitur yang Tersedia di ${botName}:* ${allCaseCount} Fitur
- Bot ini menggunakan type case

> Kategori AI = ${aiCount} Fitur
> Kategori Anime = ${animeCount} Fitur
> Kategori Download = ${downloadCount} Fitur
> Kategori Fun = ${funCount} Fitur
> Kategori Game = ${gameCount} Fitur
> Kategori Group = ${groupCount} Fitur
> Kategori Info Bot = ${infoBotCount} Fitur
> Kategori Info Me = ${infoMeCount} Fitur
> Kategori Information = ${informationCount} Fitur
> Kategori JKT48 = ${jkt48Count} Fitur
> Kategori Maker = ${makerCount} Fitur
> Kategori Menfess = ${menfessCount} Fitur
> Kategori Newsletter = ${newsletterCount} Fitur
> Kategori Other = ${otherCount} Fitur
> Kategori Owner = ${ownerCount} Fitur
> Kategori PPOB = ${ppobCount} Fitur
> Kategori Push Kontak = ${pushkontakCount} Fitur
> Kategori RPG = ${rpgCount} Fitur
> Kategori Search = ${searchCount} Fitur
> Kategori Sound Effect = ${soundEffectCount} Fitur
> Kategori Sound Tiktok = ${soundTiktokCount} Fitur
> Kategori Stalk = ${stalkCount} Fitur
> Kategori Sticker Pack = ${stickerpackCount} Fitur
> Kategori Store = ${storeCount} Fitur 
> Kategori Tool = ${toolCount} Fitur`;
    
    newReplyBot(total);
}
db.data.settings[botNumber].totalhit += 1;
break;

// infome.js
case 'daftar': {
    if (db.data.users[m.sender].daftar) return newReply("Kamu sudah terdaftar! AIzero senang bisa membantu Kamu. 😜");
    let [name, age, province, city] = text.split(',');
    if (!name || !age || !province || !city) {
        return newReply("Format pendaftaran salah. Gunakan: " + (prefix + command) + " nama,umur,provinsi,kota\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
    }
    if (isNaN(age)) return newReply("Umur tidak valid. Silakan periksa kembali! 🤔");
    if (age < 10) return newReply("Maaf, AIzero hanya bisa membantu yang berumur di atas 10 tahun. Tunggu besar dulu ya! 😄");
    if (age > 50) return newReply("Wah, sepertinya lebih baik istirahat. Jaga kesehatan ya! 🥰");
    let provinceCode = null;
    let verifiedProvince = province;
    try {
        const response = await axios.get('https://wilayah.id/api/provinces.json');
        const provinces = response.data.data;
        const foundProvince = provinces.find(prov => prov.name.toLowerCase() === province.toLowerCase());
        if (foundProvince) {
            provinceCode = foundProvince.code;
        } else {
            let bestMatch = provinces.reduce((prev, curr) => {
                return similarity(province.toLowerCase(), curr.name.toLowerCase()) > similarity(province.toLowerCase(), prev.name.toLowerCase()) ? curr : prev;
            });
            if (similarity(province.toLowerCase(), bestMatch.name.toLowerCase()) >= 0.65) {
                provinceCode = bestMatch.code;
                verifiedProvince = bestMatch.name;
                return newReply(`Provinsi tidak terdaftar. Mungkin provinsi yang kamu maksud adalah *${verifiedProvince}* atau coba masukkan provinsi lain! 🌍\n\nContoh: ` + (prefix + command) + "," + name + "," + age + "," + verifiedProvince + "," + city );
            } else {
                return newReply("Provinsi tidak terdaftar. Coba masukkan provinsi lain! 🌍\n\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
            }
        }
    } catch (error) {
        console.error("Error saat memverifikasi provinsi:", error);
        return newReply("Kesalahan saat memverifikasi provinsi. Coba lagi nanti. 🙏");
    }
    let isCityValid = false;
    let verifiedCity = city;
    try {
        const response = await axios.get(`https://wilayah.id/api/regencies/${provinceCode}.json`);
        const regencies = response.data.data;
        const foundCity = regencies.find(reg => reg.name.toLowerCase() === city.toLowerCase());
        if (foundCity) {
            isCityValid = true;
        } else {
            let bestCityMatch = regencies.reduce((prev, curr) => {
                return similarity(city.toLowerCase(), curr.name.toLowerCase()) > similarity(city.toLowerCase(), prev.name.toLowerCase()) ? curr : prev;
            });
            if (similarity(city.toLowerCase(), bestCityMatch.name.toLowerCase()) >= 0.5) {
                isCityValid = true;
                verifiedCity = bestCityMatch.name;
            } else {
                return newReply("Kota tidak valid. Coba masukkan kota lain! 🌍\n\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
            }
        }
    } catch (error) {
        console.error("Error saat memverifikasi kota:", error);
        return newReply("Kesalahan saat memverifikasi kota. Coba lagi nanti. 🙏");
    }
    if (isCityValid) {
        try {
            db.data.users[m.sender].nama = name;
            db.data.users[m.sender].umur = Number(age);
            db.data.users[m.sender].askot = verifiedCity;
            db.data.users[m.sender].daftar = true;
            db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + 5000;
            db.data.users[m.sender].limit = (db.data.users[m.sender].limit || 0) + 20;
            let successMessage = "Yeay, Kamu berhasil daftar! 🎉\n\n";
            successMessage += "📦 *Info User*:\n";
            successMessage += "- *Nama*: " + name + "\n";
            successMessage += "- *Nomor*: " + m.sender.split('@')[0] + "\n";
            successMessage += "- *Umur*: " + age + "\n";
            successMessage += "- *Asal Provinsi*: " + verifiedProvince + "\n";
            successMessage += "- *Asal Kota*: " + verifiedCity + "\n\n";
            successMessage += "🎁 *Bonus Daftar:*\n";
            successMessage += "- Rp. 5000 uang\n";
            successMessage += "- 20 Limit tambahan\n\n";
            successMessage += "Terima kasih sudah daftar! Semoga AIzero bisa bantu Kamu terus. 🥰";
            newReply(successMessage);
        } catch (error) {
            return newReply("Kesalahan saat menyimpan data pengguna. Coba lagi nanti. 🙏");
        }
        const notifRegister = true;
        if (notifRegister) {
            try {
                let profilePictureUrl;
                try {
                    profilePictureUrl = await wbk.profilePictureUrl(m.sender, "image");
                } catch {
                    profilePictureUrl = imageUrl;
                }
                let notificationMessage = "Ada user baru yang daftar nih! 🎉\n\n";
                notificationMessage += "- *Nama*: " + name + "\n";
                notificationMessage += "- *Umur*: " + age + "\n";
                notificationMessage += "- *Tag*: @" + m.sender.split('@')[0] + "\n\n";
                notificationMessage += "Selamat bergabung di sistem AIzero! 🥳";
                wbk.sendMessage(ownerNumber + "@s.whatsapp.net", {
                    'text': notificationMessage,
                    'contextInfo': {
                        'mentionedJid': [m.sender],
                    }
                });
            } catch (notificationError) {
                console.log("Gagal mengirim notifikasi pendaftaran:", notificationError);
            }
        }
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'unreg':
case 'hapusakun':
case 'unregister': { //
    let responseMessage = '';
    if (!args[0]) {
        responseMessage += "Kamu perlu masukin nomor telepon yang mau dihapus ya! 😊\n\n";
        responseMessage += "*Contoh:*\n";
        responseMessage += prefix + command + " 6281234567890";
        return newReply(responseMessage);
    }
    let phoneNumber = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!db.data.users[phoneNumber]?.["daftar"]) {
        responseMessage += "Hmm, nomor *" + args[0] + "* belum terdaftar kok, kak. 😊";
        return newReply(responseMessage);
    }
    try {
        delete db.data.users[phoneNumber];
        responseMessage += "Data pengguna dengan nomor *" + args[0] + "* berhasil dihapus! 😊";
        newReply(responseMessage);
    } catch (deleteError) {
        console.error(deleteError);
        responseMessage += "Duh, AIzero gagal hapus data pengguna ini. Coba lagi nanti ya, kak. 😔";
        newReply(responseMessage);
    }
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'report':
case 'request': {
	if (!text) return newReply(`Contoh: ${prefix + command} hi dev, perintah ini gak jalan`);
	textt = `*| REQUEST/BUG |*`;
	teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`;
	teks2 = `\n\n*Hii ${pushname}, permintaan kamu sudah dikirim ke pemilik aku, tunggu sebentar ya...*`;
	for (let i of owner) {
		wbk.sendMessage(i + "@s.whatsapp.net", {
			text: textt + teks1,
			mentions: [m.sender],
		}, {
			quoted: m,
		});
	}
	wbk.sendMessage(m.chat, {
		text: textt + teks2 + teks1,
		mentions: [m.sender],
	}, {
		quoted: m,
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'slot': { //
    if (!m.isGroup) return newReply(mess.group);
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await gameSlot(wbk, m, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'casino': { //
    if (!m.isGroup) return newReply(mess.group);
	if (!db.data.users[m.sender]) return m.reply('⚠️ Data pengguna tidak ditemukan di database!');
	await gameCasinoSolo(wbk, m, prefix, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'transferlimit': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await transferLimit(wbk, m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'transferuang': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await transferUang(wbk, m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'buy':
case 'change': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await buy(m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'limit':
case 'checklimit':
case 'ceklimit':
case 'me':
case "account": {
    if (!db.data.users[m.sender]) return newReply("⚠️ Data pengguna tidak ditemukan di database!");
    let userData = db.data.users[m.sender];
    let userInfo = '';
    userInfo += "*📋 Informasi User*\n";
    userInfo += "- *Nomor*: " + m.sender + "\n";
    userInfo += "- *Nama*: " + (userData.nama || "Belum diatur") + "\n";
    userInfo += "- *Umur*: " + (userData.umur || "Belum diatur") + "\n";
    userInfo += "- *Asal Kota*: " + (userData.askot || "Belum diatur") + "\n";
    userInfo += "- *Limit*: " + (userData.limit || 0) + "\n";
    userInfo += "- *Uang*: Rp. " + (userData.uang || 0) + "\n";
    userInfo += "- *Level*: " + (userData.level || 0) + "\n";
    userInfo += "- *Exp*: " + (userData.exp || 0) + "\n";
    userInfo += "- *Coins*: " + (userData.coins || 0) + "\n";
    userInfo += "- *Status Premium*: " + (userData.premium ? 'Ya' : "Tidak") + "\n";
    userInfo += "- *Status VIP*: " + (userData.vip ? 'Ya' : "Tidak") + "\n";
    userInfo += "- *Rank*: " + (userData.rank || 0) + "\n";
    userInfo += "- *Pacar*: " + (userData.pacar ? '@' + userData.pacar.replace("@s.whatsapp.net", '') : "Belum ada") + "\n";
    userInfo += "- *Gelar*: " + (userData.title || "Tidak ada");
    const buttonParams = {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Buy Limit",
            sections: [
                {
                    title: "Buy Limit",
                    rows: [
                        { header: "Buy Limit 🟣", title: "1 Limit - Rp. 2.500", id: prefix + "buy limit 1" },
                        { header: "Buy Limit 🟠", title: "10 Limit - Rp. 25.000", id: prefix + "buy limit 10" }
                    ]
                }
            ]
        })
    };
    let buttonArray = [buttonParams];
    wbk.sendButtonText(m.chat, buttonArray, userInfo, footer, m);
}
break;

case "cekuser":
case "infouser": {
    if (!isCreator) return newReply(mess.owner);
    if (!db.data.users[m.sender]) return newReply("⚠️ Data pengguna tidak ditemukan di database!");
    let responseMessage = '';
    if (!args[0]) {
        responseMessage += "Kamu perlu masukin nomor telepon user yang mau dicek ya! 😊\n\n";
        responseMessage += "*Contoh:*\n";
        responseMessage += prefix + command + " 6281234567890";
        return newReply(responseMessage);
    }
    let userPhoneNumber = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!db.data.users[userPhoneNumber]) {
        responseMessage += "Nomor *" + args[0] + "* belum terdaftar di database, kak. 😊";
        return newReply(responseMessage);
    }
    let checkedUser = db.data.users[userPhoneNumber];
    responseMessage += "*📋 Informasi User*\n";
    responseMessage += "- *Nomor*: " + args[0] + "\n";
    responseMessage += "- *Nama*: " + (checkedUser.nama || "Belum diatur") + "\n";
    responseMessage += "- *Umur*: " + (checkedUser.umur || "Belum diatur") + "\n";
    responseMessage += "- *Asal Kota*: " + (checkedUser.askot || "Belum diatur") + "\n";
    responseMessage += "- *Limit*: " + (checkedUser.limit || 0) + "\n";
    responseMessage += "- *Uang*: Rp. " + (checkedUser.level || 0) + "\n";
    responseMessage += "- *Level*: " + (checkedUser.level || 0) + "\n";
    responseMessage += "- *Exp*: " + (checkedUser.exp || 0) + "\n";
    responseMessage += "- *Coins*: " + (checkedUser.coins || 0) + "\n";
    responseMessage += "- *Status Premium*: " + (checkedUser.premium ? 'Ya' : "Tidak") + "\n";
    responseMessage += "- *Status VIP*: " + (checkedUser.vip ? 'Ya' : "Tidak") + "\n";
    responseMessage += "- *Rank*: " + (checkedUser.rank || 0) + "\n";
    responseMessage += "- *Pacar*: " + (checkedUser.pacar || "Belum ada") + "\n";
    responseMessage += "- *Gelar*: " + (checkedUser.title || "Tidak ada") + "\n";
    return newReply(responseMessage);
}
break;

case 'jadian': {
    if (!m.isGroup) return newReply(mess.group);
    wbk.jadian = wbk.jadian ? wbk.jadian : {};
    let mentionedUserId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '');
    if (!mentionedUserId) return newReply("Kak, tag atau reply seseorang dulu dong biar Mora tahu siapa yang Kamu maksud! 😉\n\n*Kirim perintah*: " + (prefix + command) + " @0");
    if (mentionedUserId === m.sender) return newReply("Hadehhh... masa Kamu mau jadian sama diri sendiri? 😏");
    if (mentionedUserId === botNumber) return newReply("Eh, maaf ya kak, aku cuma bot. Aku nggak bisa jadian sama Kamu 😣");
    let mentionedUserPartner = db.data.users[mentionedUserId].pacar;
    let senderPartner = db.data.users[m.sender].pacar;
    if (senderPartner === mentionedUserId) {
        newReply("Lah, Kamu udah jadian sama dia kok masih ngajak lagi? 🙄");
    } else {
        if (mentionedUserPartner) {
            newReply("Duh, kak... dia udah punya pacar nih 🥲\nCoba tanya dulu ke @" + mentionedUserPartner.split('@')[0] + ", setuju nggak? 🫣");
        } else {
            if (senderPartner) {
                newReply("Eitsss, jangan selingkuh ya, kak! 😱\n@" + senderPartner.split('@')[0] + " liat nih kelakuan ayangmu 🤭");
            } else {
                let loveMessages = [
                    "Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya Kamu yang kumau.",
                    "Aku baru sadar ternyata selama ini Kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?",
                    "Aku boleh kirim CV ke Kamu nggak? Soalnya aku mau ngelamar jadi pacar."
                ];
                let randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
                let loveMessage = "💌 *Love Message...* 💌\n\n@" + m.sender.split('@')[0] + " ❤️ @" + mentionedUserId.split('@')[0] + "\n\n\"" + randomMessage + "\n\nBot telah mengirimkan permintaan ke @" + mentionedUserId.split('@')[0] + " dibalas yaa";
                wbk.jadian[mentionedUserId] = [newReply(loveMessage), m.sender];
                const buttterima = { displayText: "Terima" };
                const butt1 = {
                    buttonId: prefix + "terima ",
                    buttonText: buttterima
                };
                const butttolak = { displayText: "Tolak" };
                const butt2 = {
                    buttonId: prefix + "tolak ",
                    buttonText: butttolak
                };
                const button = {
                    text: "@" + m.sender.split('@')[0] + " baru saja menembak kamu nih 🥰\n\n silahkan pilih ya~\n\nKetik:\n#terima\n#tolak",
                    footer: wm,
                    buttons: [butt1, butt2],
                    viewOnce: true
                };
                m.reply(button);
            }
        }
    }
}
break;

case 'terima': { //
    if (!m.isGroup) return newReply(mess.group);
    if (wbk.jadian[m.sender]) {
        let proposingUserId = wbk.jadian[m.sender][1];
        db.data.users[proposingUserId].pacar = m.sender;
        db.data.users[m.sender].pacar = proposingUserId;
        newReply("Wiiihhh 🎉🎉\n\n@" + m.sender.split('@')[0] + " sekarang resmi jadian sama\n❤️ @" + proposingUserId.split('@')[0] + "!\n\nSemoga langgeng yaaa, jangan lupa Mora diundang kalo nikahan nanti 🙈💕");
        delete wbk.jadian[m.sender];
    } else {
        newReply("Hmm... nggak ada yang nembak Kamu, sabar ya 😅");
    }
}
break;

case 'tolak': { //
    if (!m.isGroup) return newReply(mess.group);
    if (wbk.jadian[m.sender]) {
        let proposingUserId = wbk.jadian[m.sender][1];
        newReply("Aduhh, kasian banget @" + proposingUserId.split('@')[0] + " ditolak sama Kamu 😓\nSemangat terus ya, siapa tahu besok ada yang lebih baik! 🫣");
        delete wbk.jadian[m.sender];
    } else {
        newReply("Eh kak, nggak ada yang nembak Kamu kok. Jangan halu ya 🤭");
    }
}
break;

case 'putus': {
    if (!m.isGroup) return newReply(mess.group);
    let currentPartnerId = db.data.users[m.sender].pacar;
    if (currentPartnerId) {
        db.data.users[m.sender].pacar = '';
        db.data.users[currentPartnerId].pacar = '';
        newReply("Huhuhu... @" + m.sender.split('@')[0] + " dan @" + currentPartnerId.split('@')[0] + " udah resmi putus 😢\nSemoga tetap berteman yaaa 🤗");
    } else {
        newReply("Eh kak, Kamu tuh jomblo kok mau putus? Ada-ada aja deh! 🤨");
    }
}
break;

case 'cekpacar': {
    if (!m.isGroup) return newReply(mess.group);
    try {
        let mentionedUserId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '');
        if (!mentionedUserId) return newReply("Tag atau reply orang dulu dong, kak! 😅\n\n*Kirim perintah*: " + (prefix + command) + " @0");
        let partnerId = db.data.users[mentionedUserId].pacar;
        if (partnerId) {
            newReply("Wihhh, @" + mentionedUserId.split('@')[0] + " udah punya pacar nih!\n❤️ Sama @" + partnerId.split('@')[0] + " 😍");
        } else {
            newReply("Ehh, @" + mentionedUserId.split('@')[0] + " masih jomblo kok. Hayoo, siapa mau daftar jadi pacarnya? 🤭");
        }
    } catch (error) {
        newReply("Kayaknya @" + user.split('@')[0] + " nggak ada di database, deh 😥");
    }
}
break;

// information.js
case 'cuaca': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`🌍 *Lokasinya mana, Kak?*\n\nContoh:\n${prefix}${command} Jakarta`);
    try {
        await m.react('⏳');
        let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);
        let weatherInfo = `🌦️ *Informasi Cuaca di ${data.name}, ${data.sys.country}*\n`;
        weatherInfo += `🌡️ *Suhu:* ${data.main.temp}°C (Terasa seperti ${data.main.feels_like}°C)\n`;
        weatherInfo += `🌬️ *Kecepatan Angin:* ${data.wind.speed} m/s\n`;
        weatherInfo += `💧 *Kelembapan:* ${data.main.humidity}%\n`;
        weatherInfo += `🔄 *Tekanan Udara:* ${data.main.pressure} hPa\n`;
        weatherInfo += `📍 *Koordinat:* ${data.coord.lat}, ${data.coord.lon}\n`;
        weatherInfo += `📝 *Deskripsi:* ${data.weather[0].description}\n`;
        await wbk.sendMessage(m.chat, {
            text: weatherInfo
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 404) {
            newReply(`❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.`);
        } else {
            newReply(`❌ *Terjadi kesalahan saat mengambil data cuaca!* 😭\n${err.message || err}`);
        }
    }
}
break;

case 'wikimedia': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci*\n\n🤔 *Contohnya:*\n\n${prefix + command} sunset`);
    try {
        await m.react('⏳');
        const results = await wikimedia(text);
        if (results.length === 0) return newReply(`⚠️ Mora gak nemu gambar di Wikimedia dengan kata kunci "${text}", Kak! 🥲`);
        let result = results.map(img => `🖼️ *${img.title || 'Tanpa Judul'}*\n🔗 ${img.source}`).join('\n\n');
        newReply(`🌐 *Hasil Pencarian Wikimedia untuk:* ${text}\n\n${result}`);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (err) {
        console.error(err);
        newReply(`❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺`);
    }
}
break;

case 'wikipedia': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Hmm... Apa ya yang kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊`);
    try {
        await m.react('⏳');
        const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
        const $ = cheerio.load(link.data);
        let header = $('#firstHeading').text().trim();
        let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
        if (!header || !output) {
            return newReply('Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!');
        }
        newReply(`📛 *Judul :* ${header}\n\n✨ *Deskripsi Singkat:* ${output}\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄`);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (err) {
        newReply('Wah, ada yang error nih! Gak bisa menemukan apa yang kamu cari 😓. Coba lagi nanti ya!');
    }
}
break;

case 'gempa': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏳');
        let result = await gempa();
        let gempaData = result.data;
        let response = `「 *📢 MSG GEMPA TERBARU* 」\n\n`;
        response += `*🌍 Sumber:* ${result.source}\n`;
        response += `*📊 Magnitudo:* ${gempaData.magnitude.trim()}\n`;
        response += `*📏 Kedalaman:* ${gempaData.kedalaman.trim()}\n`;
        response += `*🗺️ Lintang & Bujur:* ${gempaData.lintang_bujur.trim()}\n`;
        response += `*🕒 Waktu:* ${gempaData.waktu.trim()}\n`;
        response += `*📍 Wilayah:* ${gempaData.wilayah.trim() || 'Tidak ada data'}\n`;
        response += `*😱 Dirasakan:* ${gempaData.dirasakan.trim() || 'Tidak ada data'}\n\n`;
        response += `Tetap waspada dan ikuti arahan dari pihak berwenang!`;
        if (gempaData.imagemap) {
            wbk.sendMessage(m.chat, {
                image: {
                    url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}`
                },
                caption: response,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluranName,
                        newsletterJid: saluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'Informasi Gempa Terkini!',
                        mediaType: 1,
                        previewType: 1,
                        body: 'Stay Safe ya, Kak! 🤗',
                        thumbnail: thumb,
                        renderLargerThumbnail: false,
                        mediaUrl: 'https://www.bmkg.go.id',
                        sourceUrl: 'https://www.bmkg.go.id'
                    }
                }
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            wbk.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluranName,
                        newsletterJid: saluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'Informasi Gempa Terkini!',
                        mediaType: 1,
                        previewType: 1,
                        body: 'Stay Safe ya, Kak! 🤗',
                        thumbnail: thumb,
                        renderLargerThumbnail: false,
                        mediaUrl: 'https://www.bmkg.go.id',
                        sourceUrl: 'https://www.bmkg.go.id'
                    }
                }
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        }
    } catch (error) {
        console.error(error);
        wbk.sendMessage(m.chat, {
            text: '⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa.'
        }, { quoted: m });
    }
}
break;

case 'islamicnews': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const articles = await islamicnews();
    if (!articles || articles.length === 0) {
        return newReply('Tidak ada berita terbaru yang ditemukan.');
    }
    await m.react('⏳');
    let islamicCard = [];
    let no = 1;
    for (const { title, summary, link } of articles) {
        islamicCard.push({
            title: `${no++}. ${title}`,
            rows: [
                {
                    header: `Kategori: ${summary}`,
                    title: title,
                    description: `🔗 ${link}`,
                    id: `.islamicdetail ${link}`,
                }
            ]
        });
    }
    let button = [
        {
            "name": "single_select",
            "buttonParamsJson": `{\n  title: 'Berita Terbaru Islam',\n  sections: ${JSON.stringify(islamicCard)}\n}`
        }
    ];
    let buffer = await getBuffer('https://files.catbox.moe/7q4gmp.png');
    sendButtonImage(m.chat, "*📰 BERITA TERBARU ISLAM*", "Berita terbaru yang kami kumpulkan untuk Anda:", buffer, button, m);
    await m.react('✅');
    await limitReduction(m, prefix, wm);
}
break;

case 'rumahmisteri': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏳');
        const RumahMisteriInstance = await RumahMisteri();
        const article = await RumahMisteriInstance.random();
        if (typeof article === 'string') {
            newReply(article);
        } else {
            const { title, link, image, category, date } = article;
            wbk.sendMessage(m.chat, {
                image: {
                    url: image
                },
                caption: `*Judul:* ${title}\n*Kategori:* ${category}\n*Tanggal:* ${date}`,
                footer: wm,
                buttons: [{
                    buttonId: '.detailrumahmisteri ' + link,
                    buttonText: {
                        displayText: 'BACA ARTIKEL'
                    },
                    type: 1
                }],
                headerType: 1,
                viewOnce: true
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        }
    } catch (error) {
        newReply(`Terjadi kesalahan saat mengambil artikel: ${error.message}`);
    }
}
break;
        
case 'detailrumahmisteri': { //
    const link = args[0];
    if (!link) return newReply(`Harap masukkan link artikel yang ingin dilihat. Contoh: ${prefix}detailrumahmisteri https://rumahmisteri.com/<link-post>`);
    try {
        await m.react('⏳');
        const detail = await DetailRumahMisteri(link);
        if (typeof detail === 'string') {
            return newReply(detail);
        } else {
            const { title, description, image, category, date, author, content } = detail;
            wbk.sendMessage(m.chat, {
                image: { url: image },
                caption: `*Judul:* ${title}\n` +
                    `*Kategori:* ${category}\n` +
                    `*Tanggal:* ${date}\n` +
                    `*Deskripsi:* ${description}\n` +
                    `*Link:* ${link}\n\n` +
                    `*Isi Artikel:*\n${content}`,
                footer: wm,
                buttons: [{
                    buttonId: '.rumahmisteri',
                    buttonText: {
                        displayText: 'ARTIKEL LAINNYA'
                    },
                    type: 1
                }, ],
                headerType: 1,
                viewOnce: true
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        }
    } catch (error) {
        newReply(`Terjadi kesalahan saat mengambil detail artikel: ${error.message}`);
    }
}
break;

// jkt48.js
case 'jkt48news': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const news = await getJKT48News();
        if (news.length === 0) return newReply('Tidak ditemukan berita yang relevan.');
        let jkt48card = [];
        let teks = " ";
        let no = 1;
        for (let item of news) {
            jkt48card.push({
                title: `${no++}. ${item.title}`,
                rows: [
                    {
                        header: `Tanggal: ${item.date}`,
                        title: `Detail: ${item.link}`,
                        description: `Berita: ${item.title}`,
                        id: `.jkt48newsdetail ${item.link}`,
                    }
                ]
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'NEWS JKT48',\n  sections: ${JSON.stringify(jkt48card)}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 NEWS JKT48*", teks, buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'jkt48newsdetail': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} 1880`);
    try {
        const detailUrl = `${text}`;
        const newsDetail = await getJKT48NewsDetail(detailUrl);

        if (!newsDetail) {
            return newReply('Detail berita tidak ditemukan.');
        }

        const imageBuffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        let detailText = `${litespace("[ NEWS DETAIL ]")}\n\n`;
        detailText += `*Judul:* ${newsDetail.title}\n`;
        detailText += `*Tanggal:* ${newsDetail.date}\n`;
        detailText += `*Konten:*\n${newsDetail.content}\n`;
        detailText += `Detail: ${detailUrl}`;
        await wbk.sendMessage(m.chat, { image: imageBuffer, caption: detailText }, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
 
case 'jkt48sch': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const schedule = await getJKT48Calendar();
        if (!schedule || schedule.length === 0) return newReply('Tidak ditemukan jadwal yang relevan.');
        let jkt48card = [];
        let teks = " ";
        let no = 1;
        const month = schedule[0].month;
        const year = schedule[0].year;
        for (let item of schedule) {
            const day = item.day;
            for (let event of item.events) {
                jkt48card.push({
                    title: `${no++}. ${day}, ${month} ${year}`,
                    rows: [
                        {
                            header: `Acara: ${event.event}`,
                            title: `Link: ${event.link || 'Tidak ada link'}`,
                            description: `Hari/Tanggal: ${day}, ${month} ${year}`,
                            id: event.link || 'no-link'
                        }
                    ]
                });
            }
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'SCHEDULE JKT48 ${month.toUpperCase()} ${year}',\n  sections: ${JSON.stringify(jkt48card)}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 SCHEDULE JKT48*", teks, buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'jkt48mem': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const members = await getJKT48Members();
        if (!members || members.length === 0) return newReply('Tidak ditemukan member yang relevan.');
        let jkt48card = [];
        let no = 1;
        for (let member of members) {
            jkt48card.push({
                header: `${no++}. ${member.name}`,
                title: `${member.name} | Detail: ${member.profileLink}`,
                description: `Cek Informasi Lengkap ${member.name}`,
                id: `.jkt48memdetail ${member.name}`,
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  "title": "MEMBER JKT48",\n  "sections": [{ "title": "Pilih Member", "rows": ${JSON.stringify(jkt48card)} }]}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 DAFTAR MEMBER JKT48*", "", buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
       console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'jkt48memdetail': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} Alya Amanda`);
    try {
        const members = await getJKT48Members();
        const search = await ytsearch(`#KuSangatSuka JKT48 ${text} @JKT48 Youtube Official`);
        const { url } = search.all[0];
        const urls = url
        const quality = '480';
        const downloadUrl = await downloadVideoYT(url, quality);
        if (!members || members.length === 0) {
            return newReply('Tidak ditemukan anggota yang relevan.');
        }
        const member = members.find(m => m.name.toLowerCase() === text.toLowerCase());
        if (!member) {
            return newReply('Anggota tidak ditemukan. Pastikan nama yang dimasukkan benar.');
        }
        const memberId = member.profileLink.split('/').pop().split('?')[0];
        const detailUrl = `https://jkt48.com/member/detail/id/${memberId}?lang=id`;
        const details = await getJKT48MemberDetails(detailUrl);
        const imageBuffer = await getBuffer(member.imageUrl);
        let detailText = `${litespace("[ MEMBER DETAIL ]")}\n\n`;
        for (const [subject, content] of Object.entries(details)) {
            detailText += `${subject}: ${content}\n`;
        }
        detailText += `Detail: ${detailUrl}`
        wbk.sendMessage(m.chat, {video: {url: downloadUrl}, caption: detailText}, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;        

// maker.js
case 'logogenerator': {
    if (!isPremium && db.data.users[m.sender].limit < 1) { return newReply(mess.limit)};
    if (!text) return newReply(`⚙️ *Penggunaan yang benar:* ${prefix + command} title|slogan|idea\n📌 *Contoh:* ${prefix + command} MyBrand|Best Quality|Creative Design`);
    let [title, slogan, idea] = text.split('|');
    if (!title || !slogan || !idea) return newReply(`⚠️ Format tidak valid! Gunakan format: ${prefix + command} title|slogan|idea`);
    await reactionMessage('⏳');
    try {
        let logoUrls = await sologoGenerator({ title, slogan, idea });
        if (!logoUrls || logoUrls.length === 0) return newReply('❌ Tidak ada logo yang ditemukan!');
        if (m.device === 'ios') {
            let images = logoUrls.map((url, index) => ({
                image: { url },
                caption: `🎨 *Logo Generator*\n\n📛 *Title:* ${title}\n📝 *Slogan:* ${slogan}\n💡 *Idea:* ${idea}\n\n💾 *Download logo:* ${url}`
            }));
            await wbk.sendAlbumMessage(m.chat, images, { quoted: m, delay: 2000 });
            await limitReduction(m, prefix, wm);
        } else if (m.device === 'android') {
            async function createImage(url) {
                const { imageMessage } = await generateWAMessageContent({
                    image: { url }
                }, { upload: wbk.waUploadToServer });
                return imageMessage;
            }
            let push = [];
            for (let i = 0; i < logoUrls.length; i++) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `📛 *Title:* ${title}\n📝 *Slogan:* ${slogan}\n💡 *Idea:* ${idea}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `🎨 Logo - ${i + 1}`,
                        hasMediaAttachment: true,
                        imageMessage: await createImage(logoUrls[i])
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Download Logo 🔽",
                                "url": "${logoUrls[i]}"
                            }`
                        }]
                    })
                });
            }
            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({ text: mess.done }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: wm }),
                            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [...push]
                            })
                        })
                    }
                }
            }, { quoted: m });
            await wbk.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
            await limitReduction(m, prefix, wm);
        } else {
            await newReply("💡 Gunakan WhatsApp Android atau iOS untuk melihat hasil logo!");
        }
    } catch (error) {
        console.error("Error generating logo:", error);
        return newReply("❌ Terjadi kesalahan saat membuat logo! Coba lagi nanti.");
    }
}
break;

case 'testttttt': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) { return newReply(mess.limit)};
    if (!text) { return newReply("Contoh : " + (prefix + command) + " Hai kak")};
    if (text.length > 101) { return newReply("Karakter terbatas, max 100!")};
    const buttbratgambar = { displayText: "Gambar" };
    const butt1 = {
        buttonId: prefix + "bratgambar " + text,
        buttonText: buttbratgambar
    };
    const buttbratvideo = { displayText: "Video" };
    const butt2 = {
        buttonId: prefix + "bratvideo " + text,
        buttonText: buttbratvideo
    };
    const button = {
        header: "hai kak",
        text: "Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! Klik *tombol* di bawah ini ya, kak! 😋👇",
        footer: wm,
        buttons: [butt1, butt2],
        viewOnce: true
    };
}
break;   

case 'brat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    const apis = [
        `https://api-ghostx.biz.id/api/imagecreator/bratgenerator?text=${encodeURIComponent(text)}`,
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`,
        `https://aqul-brat.hf.space/api/brat?text=${encodeURIComponent(text)}`,
        `https://velyn.vercel.app/api/maker/brat?text=${encodeURIComponent(text)}&apikey=free`,
        `https://api.suraweb.online/tools/brat?text=${encodeURIComponent(text)}`,
        `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`,
        `https://fastrestapis.fasturl.cloud/maker/brat/simple?text=${encodeURIComponent(text)}&theme=white`
    ];
    let success = false;
    for (let i = 0; i < apis.length; i++) {
        try {
            console.log(`🔄 Mencoba API ${i + 1}: ${apis[i]}`);
            const buffer = await getBuffer(apis[i]);
            if (buffer) {
                await wbk.sendImageAsSticker(m.chat, buffer, m, {
                    packname: botName,
                    author: ownerName,
                    ai: !m.isGroup
                });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
                console.log(`✅ API ${i + 1} Berhasil!`);
                success = true;
                break;
            }
        } catch (error) {
            console.log(`❌ API ${i + 1} gagal: ${apis[i]}\nError: ${error.message}`);
            db.data.settings[botNumber].totalError += 1;
        }
    }
    if (!success) {
        await newReply(`‼️ ERROR HUBUNGI OWNER ‼️\n_Ada kesalahan saat menghubungi penyedia API/Server._`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'brattes':
case 'brat2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
    const TEMP_DIR = './temp/';
    try {
        if (!fs.existsSync(TEMP_DIR)) {
            fs.mkdirSync(TEMP_DIR, { recursive: true });
        }
        const size = 512;
        const padding = 20;
        const maxFontSize = 120;
        const minFontSize = 30;
        const lineSpacing = 10;
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        function wrapText(ctx, text, maxWidth) {
            const words = text.split(' ');
            let lines = [];
            let line = '';
            for (let word of words) {
                let testLine = line + word + ' ';
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth && line.length > 0) {
                    lines.push(line);
                    line = word + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line.trim());
            return lines;
        }
        function getOptimalFontSize(ctx, text, maxWidth, maxHeight) {
            let fontSize = maxFontSize;
            let lines;
            do {
                ctx.font = `bold ${fontSize}px Helvetica, sans-serif`;
                lines = wrapText(ctx, text, maxWidth);
                let totalHeight = lines.length * (fontSize + lineSpacing);
                if (totalHeight > maxHeight) {
                    fontSize -= 5;
                } else {
                    break;
                }
            } while (fontSize > minFontSize);
            return { fontSize, lines };
        }
        const maxWidth = size - 2 * padding;
        const maxHeight = size - 2 * padding;
        const { fontSize, lines } = getOptimalFontSize(ctx, text, maxWidth, maxHeight);
        ctx.font = `bold ${fontSize}px Helvetica, sans-serif`;
        let lineHeight = fontSize + lineSpacing;
        let totalHeight = lines.length * lineHeight;
        let startY = (size - totalHeight) / 2 + fontSize / 2;
        for (let i = 0; i < lines.length; i++) {
            await fillTextWithTwemoji(ctx, lines[i], size / 2, startY + i * lineHeight);
        }
        const buffer = canvas.toBuffer('image/png');
        const outputPath = path.join(TEMP_DIR, `${Date.now()}_brat.png`);
        fs.writeFileSync(outputPath, buffer);
        await wbk.sendImageAsSticker(m.chat, fs.readFileSync(outputPath), m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        fs.unlinkSync(outputPath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'bratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    await m.react('⏱️');
    const tempDir = path.resolve('temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const framePaths = [];
    const apis = [
        `https://api-ghostx.biz.id/api/imagecreator/bratgenerator?text=`,
        `https://brat.caliphdev.com/api/brat?text=`,
        `https://aqul-brat.hf.space/api/brat?text=`,
        `https://velyn.vercel.app/api/maker/brat?text=&apikey=free`,
        `https://api.suraweb.online/tools/brat?text=`,
        `https://api.siputzx.my.id/api/m/brat?text=`,
        `https://fastrestapis.fasturl.cloud/maker/brat/simple?text=&theme=white`
    ];
    let workingApi = null;
    for (let i = 0; i < apis.length; i++) {
        try {
            console.log(`🔄 Mencoba API ${i + 1}: ${apis[i]}`);
            const testUrl = apis[i].replace('text=', `text=${encodeURIComponent(text)}`);
            const testRes = await axios.get(testUrl, { responseType: "arraybuffer", timeout: 5000 });
            if (testRes.status === 200) {
                console.log(`✅ API ${i + 1} Berhasil!`);
                workingApi = apis[i];
                break;
            }
        } catch (error) {
            console.log(`❌ API ${i + 1} gagal: ${apis[i]}
Error: ${error.message}`);
        }
    }
    if (!workingApi) {
        return newReply("❌ Semua API tidak bisa diakses. Silakan coba lagi nanti.");
    }
    try {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            const textSegment = words.slice(0, i + 1).join(" ");
            const apiUrl = workingApi.replace('text=', `text=${encodeURIComponent(textSegment)}`);
            const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
        }
        const fileListPath = path.join(tempDir, "wbk.txt");
        let fileListContent = "";
        for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
        }
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
        fileListContent += `duration 2\n`;
        fs.writeFileSync(fileListPath, fileListContent);
        const outputVideoPath = path.join(tempDir, "output.mp4");
        execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`,
            { stdio: 'ignore' }
        );
        const buffer = fs.readFileSync(outputVideoPath);
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
        framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
        });
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cwkbrat':
case 'cwebrat':
case 'cewekbrat':
case 'cewebrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await cewebrat(text);
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cwkbratvid':        
case 'cwebratvid':
case 'cewekbratvid':
case 'cewebratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    await m.react('⏱️');
    const tempDir = path.resolve('temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const framePaths = [];
    try {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            const textSegment = words.slice(0, i + 1).join(" ");
            const buffer = await cewebrat(textSegment);
            const framePath = path.join(tempDir, `frame${i}.png`);
            fs.writeFileSync(framePath, buffer);
            framePaths.push(framePath);
        }
        const fileListPath = path.join(tempDir, "wbk.txt");
        let fileListContent = "";
        for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
        }
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
        fileListContent += `duration 2\n`;
        fs.writeFileSync(fileListPath, fileListContent);

        const outputVideoPath = path.join(tempDir, "output.mp4");
        execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`,
            { stdio: 'ignore' }
        );
        const options = {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        };
        await wbk.sendImageAsSticker(m.chat, outputVideoPath, m, options);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
        framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
        });
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'furbrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/furbrat?text=${encodeURIComponent(text)}&style=4&position=center&mode=image`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;         
        
case 'furbratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/furbrat?text=${encodeURIComponent(text)}&style=4&position=center&mode=animated`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;   

case 'animbrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'animbratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=animated`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'emojimix': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let [emoji1, emoji2] = text.split('+');
    if (!emoji1 || !emoji2) return m.reply(`Contoh: ${prefix + command} 😂+😭`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`);
        if (!buffer || buffer.length === 0) {
            return newReply('Gagal mendapatkan gambar, coba emoji yang berbeda!');
        }
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'qc': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('⚠️ *Input teksnya!* Coba masukkan teks untuk membuat quote.');
    try {
        await m.react('⏱️');
        const nn = await wbk.getName(m.sender);
        let pp = await wbk.profilePictureUrl(m.sender, 'image').catch(() => 
            'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg'
        );
        let gtww;
        if (m.quoted) {
            const nq = await wbk.getName(m.quoted.sender);
            let pq = await wbk.profilePictureUrl(m.quoted.sender, 'image').catch(() => 
                'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg'
            );
            let quotedText = m.quoted.text.length > 4 ? m.quoted.text.substring(4) : m.quoted.text;
            let uq = {
                avatar: true,
                from: {
                    id: 1,
                    name: nq,
                    photo: { url: pq }
                },
                text: quotedText
            };
            gtww = await quotedLyo(text, nn, pp, { quoted: uq }).catch(() => null);
        } else {
            gtww = await quotedLyo(text, nn, pp).catch(() => null);
        }
        if (!gtww || !gtww.result || !gtww.result.image) {
            throw new Error("Gagal membuat gambar quote, coba lagi nanti.");
        }
        const buffer = Buffer.from(gtww.result.image, 'base64');
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            quality: 100,
            background: 'transparent',
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 's':
case 'stiker':
case 'sticker': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    await m.react('⏱️');
    try {
        if (/image/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            await wbk.sendImageAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
                ai: !m.isGroup
            });
            await m.react('✅');
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 9) return newReply(`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            await wbk.sendVideoAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
                ai: !m.isGroup
            });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'take':
case 'steal':
case 'stickerwm':
case 'swm': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted || !mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    await m.react('⏱️');
    try {
        const swn = args.join(" ");
        const pcknm = swn.split("|")[0] || botName;
        const atnm = swn.split("|")[1] || ownerName;
        if (m.quoted.isAnimated === true) {
            let mediaPath = await wbk.downloadAndSaveMediaMessage(quoted, "gifee").catch(() => null);
            if (!mediaPath) throw new Error("Gagal mengunduh GIF, coba lagi.");
            await wbk.sendMessage(m.chat, {
                sticker: fs.readFileSync("gifee.webp")
            }, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else if (/image/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted).catch(() => null);
            if (!media) throw new Error("Gagal mengunduh gambar, coba lagi.");
            await wbk.sendImageAsSticker(m.chat, media, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 9) 
                return newReply('Video terlalu panjang, maksimal 9 detik ya! ⏳');
            let media = await wbk.downloadAndSaveMediaMessage(quoted).catch(() => null);
            if (!media) throw new Error("Gagal mengunduh video, coba lagi.");
            await wbk.sendVideoAsSticker(m.chat, media, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else {
            return newReply(`⚠️ Kirim foto/video untuk dipakai ya, kak!`);
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'stickmeme':
case 'stickermeme':
case 'smeme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    try {
        if (!/webp/.test(mime) && /image/.test(mime)) {
            if (!text) return newReply(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
            atas = text.split('|')[0] ? text.split('|')[0] : '';
            bawah = text.split('|')[1] ? text.split('|')[1] : '';
            let mee = await wbk.downloadAndSaveMediaMessage(quoted);
            let mem = await toUrlUpload(mee);
            let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
            await wbk.sendImageAsSticker(m.chat, meme, m, {
                packname: packname,
                author: author,
                ai: !m.isGroup
            });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'carbon': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} console.log('Hello, world!');`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/carbon/simple?code=${encodeURIComponent(text)}`);
        await wbk.sendMessage(m.chat, { 
            image: buffer, 
            caption: mess.success, 
            ai: !m.isGroup
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

// menfess.js
case 'menfess':
case 'menfes': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isCreator) return newReply('Dalam perbaikan');
	this.menfes = this.menfes || {};
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (session) return newReply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
	if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
	if (!text || !text.includes('|')) {
		return newReply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
	}
	let [namaNya, nomorNya, pesanNya] = text.split('|');
	if (!nomorNya || !pesanNya) {
		return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
	}
	if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
		return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
	}
	await reactionMessage('⏱️');
	let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
	const imageBuffer = await getBuffer('https://files.catbox.moe/qxw4j8.jpg');
	let id = m.sender;
	this.menfes[id] = {
		id,
		a: m.sender,
		b: nomorNya + '@s.whatsapp.net',
		state: 'WAITING'
	};
	const buttons = [{
		"name": "single_select",
		"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "💌 Menerima atau Menolak Menfess",
									"rows": [
										{
											"header": "🤗 Terima Menfess",
											"title": "🌟 Ya, Terima Menfess",
											"description": "Klik ini kalau mau menerima dan memproses menfess ini dengan baik! 🥰",
											"id": "${prefix}balasmenfes"
										},
										{
											"header": "😔 Tolak Menfess",
											"title": "❌ Tidak, Tolak Menfess",
											"description": "Klik ini kalau menfess ini nggak mau diterima. 😢",
											"id": "${prefix}tolakmenfes"
										}
									]
								}
							]
						}`
	}];
	await sendButtonImage(`${nomorNya}@s.whatsapp.net`, '', pesanTemplate, imageBuffer, buttons)
	newReply(`Yay! Pesan menfess berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
    await limitReduction(m, prefix, wm);
}
break;;

case 'balasmenfess':
case 'balasmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
	let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
	if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
	let otherUser = [room.a, room.b].find(user => user !== m.sender);
	room.state = 'CHATTING';
	this.menfes[room.id] = {
		...room
	};
	await wbk.sendMessage(otherUser, {
		text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`,
		mentions: [m.sender]
	});
	wbk.sendMessage(m.chat, {
		text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗`
	});
}
break;;

case 'tolakmenfess':
case 'tolakmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
	let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
	if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
	let otherUser = [room.a, room.b].find(user => user !== m.sender);
	await wbk.sendMessage(otherUser, {
		text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`,
		mentions: [m.sender]
	});
	newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
	delete this.menfes[room.id];
}
break;;

case 'stopmenfess':
case 'stopmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
	let otherUser = session.a === m.sender ? session.b : session.a;
	await wbk.sendMessage(otherUser, {
		text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`,
		mentions: [m.sender]
	});
	newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
	delete this.menfes[session.id];
}
break;;

// newsletter.js
case 'setnewsletterdesc': {
	if (!isCreator) return newReply(mess.owner);
	if (!args.join(" ")) return newReply(`Penggunaan: ${prefix + command} <deskripsi>\n\nContoh:\nsetnewsletterdesc Ini deskripsi baru.`);
	const teks = args.join(" ");
	try {
		await wbk.newsletterUpdateDescription(saluran, teks);
		newReply("Berhasil mengubah deskripsi newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah deskripsi.");
	}
}
break;

case 'setnewslettername': {
	if (!isCreator) return newReply(mess.owner);
	if (!args.join(" ")) return newReply(`Penggunaan: ${prefix + command} <nama>\n\nContoh:\n${prefix + command} Nama Baru Newsletter.`);
	const teks = args.join(" ");
	try {
		await wbk.newsletterUpdateName(saluran, teks);
		newReply("Berhasil mengubah nama newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah nama.");
	}
}
break;

case 'setnewsletterpic': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.quoted || !m.quoted.isMedia) return newReply("Balas sebuah gambar untuk dijadikan foto profil newsletter.");
	try {
		const pp = await m.quoted.download();
		await wbk.newsletterUpdatePicture(saluran, pp);
		newReply("Berhasil mengubah foto profil newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah foto profil.");
	}
}
break;

case 'removenewsletterpic': {
	if (!isCreator) return newReply(mess.owner);
	try {
		await wbk.newsletterRemovePicture(saluran);
		newReply("Berhasil menghapus foto profil newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat menghapus foto profil.");
	}
}
break;

case 'followch':
case 'follownewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply("Kirim perintah " + (prefix + command) + " <link>");
	if (!isUrl(args[0]) && !args[0].includes("whatsapp.com/channel")) return newReply(mess.error);
	try {
		let link = args[0].split("https://whatsapp.com/channel/")[1];
		let newsletter = await wbk.newsletterMetadata("invite", link);
		await wbk.newsletterFollow(newsletter.id);
		newReply("Berhasil mengikuti newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengikuti newsletter.");
	}
}
break;

case 'unfollowch':
case 'unfollownewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply("Kirim perintah " + (prefix + command) + " <link>");
	if (!isUrl(args[0]) && !args[0].includes("whatsapp.com/channel")) return newReply(mess.error);
	try {
		let link = args[0].split("https://whatsapp.com/channel/")[1];
		let newsletter = await wbk.newsletterMetadata("invite", link);
		await wbk.newsletterUnfollow(newsletter.id);
		newReply("Berhasil berhenti mengikuti newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat berhenti mengikuti newsletter.");
	}
}
break;

case 'createnewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!args[0] || !args[1]) return newReply("Penggunaan: " + (prefix + command) + " <nama> | <deskripsi>\n\nContoh:\n " + (prefix + command) + " Newsletter Baru | Ini deskripsi newsletter.");
	const [name, desc] = args.join(" ").split('|').map(_0x5e0457 => _0x5e0457.trim());
	if (!name || !desc) {
		return newReply("Format salah. Gunakan \"|\" untuk memisahkan nama dan deskripsi.");
	}
	try {
		const newsletter = await wbk.newsletterCreate(name, desc);
		newReply("Newsletter berhasil dibuat.\n\nNama: " + newsletter.name + "\nDeskripsi: " + newsletter.description);
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat membuat newsletter.");
	}
}
break;

case 'getinfoch':
case 'getinfochannel':
case 'getchid':
case 'getidch':
case 'cekchid':
case 'cekidch':
case 'infonewsletter': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`Kirim perintah ${prefix + command} _link channel_`);  
    if (!isUrl(url) && !url.includes('whatsapp.com/channel')) return newReply(mess.error);
    function formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    try {
        let result = url.split('https://whatsapp.com/channel/')[1];
        let data = await wbk.newsletterMetadata("invite", result);
        let teks = `「 *NEWSLETTER METADATA* 」\n\n`;
        teks += ` · *Name :* ${data.name}\n`;
        teks += ` · *ID :* ${data.id}\n`;
        teks += ` · *Status :* ${data.state}\n`;
        teks += ` · *Dibuat Pada :* ${formatDate(data.creation_time)}\n`;
        teks += ` · *Subscribers :* ${data.subscribers}\n`;
        teks += ` · *Meta Verify :* ${data.verification}\n`;
        teks += ` · *React Emoji :* ${data.reaction_codes}\n`;
        teks += ` · *Description :*\n${data.description}\n`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY ID",
                "id": "${data.id}",
                "copy_code": "${data.id}"
            }`
        }];
        sendButton(m.chat, '', teks, button, m);
    } catch (error) {
        newReply('*Data tidak ditemukan!* ☹️');
    }
    await limitReduction(m, prefix, wm);
}
break;

case 'chatch':
case 'chatnewsletter': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!m.isGroup) return newReply("Command ini cuma bisa dipakai di grup!");
	const teks = m.text.split(" ").slice(1).join(" ").trim();
	try {
		const groupMetadata = await wbk.groupMetadata(m.chat);
		const groupName = groupMetadata.subject || "Grup ini";
		const senderName = m.pushName || m.sender.split('@')[0];
		let ppuser;
		try {
			ppuser = await wbk.profilePictureUrl(m.sender, "image");
		} catch (err) {
			ppuser = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
		}
		let media = m.quoted ? await m.quoted.download() : null;
		if (media) {
			const mimeType = m.quoted.mimetype;
			const caption = `${teks}\n\nDari: ${senderName}`;
			if (/image/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					image: media,
					caption
				});
				newReply("📸 Gambar berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/video/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					video: media,
					caption
				});
				newReply("🎥 Video berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/audio/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					audio: media,
					mimetype,
					ptt: true,
					caption
				});
				newReply("🎵 Audio berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/application/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					document: media,
					mimetype,
					fileName: "Dokumen dari grup",
					caption
				});
				newReply("📄 Dokumen berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else {
				newReply("Format media tidak didukung.");
			}
		} else {
			if (!teks) return newReply("Pesan tidak boleh kosong! Silakan masukkan teks.");
			await wbk.sendMessage(saluran, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `From: ${senderName}`,
						body: `Group: ${groupName}`,
						thumbnail: await getBuffer(ppuser),
						sourceUrl: "https://wbkcloudx.web.id/",
					},
				},
			});
            await limitReduction(m, prefix, wm);
			newReply("💬 Pesan teks berhasil dikirim ke channel!");
		}
	} catch (error) {
		console.error(`Gagal mengirim ke saluran ${saluran}:`, error);
		newReply("Gagal mengirim pesan ke saluran.");
	}
}
break;

case 'upch':
case 'upnewsletter': {
	if (!isCreator) return newReply(mess.owner)
	try {
		await reactionMessage('⏱️');
		if (!mime && !text) {
			return newReply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
		}
		let q = args.join(" ");
		let parts = q.split(",");
		let title = parts[0]
		let text = parts[1]
		media = mime ? await quoted.download() : null
		let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis WBK! ✨"
		if (/image/.test(mime)) {
			wbk.sendMessage(saluran, {
				image: media,
				caption: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else if (/video/.test(mime)) {
			wbk.sendMessage(saluran, {
				video: media,
				caption: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else if (/audio/.test(mime)) {
			wbk.sendMessage(saluran, {
				audio: media,
				mimetype: mime,
				ptt: true,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
			await reactionMessage('✅');
		} else if (/text/.test(mime) || text) {
			wbk.sendMessage(saluran, {
				text: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: wm,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else {
			newReply(`Hmm... WBK gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
		}
	} catch (error) {
		console.error(error)
		newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
	}
}
break;

// orderkuota.js
case 'deposito2': {
    if (m.isGroup) return newReply("Deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender]) {
        db.data.users[m.sender] = {
            status_deposit: false,
            orderkuota: null
        };
    }
    if (typeof db.data.users[m.sender].status_deposit === "undefined") {
        db.data.users[m.sender].status_deposit = false;
    }
    if (db.data.users[m.sender].status_deposit === true) {
        return newReply("Masih ada transaksi yang belum diselesaikan, ketik *.bataldeposit* untuk membatalkan transaksi sebelumnya!");
    }
    let teks = `➔ *Contoh:* \`.deposito jumlah\``;
    if (!text) return newReply(teks);
    let input = text.split(",");
    let amount = input[0] ? parseInt(input[0].trim()) : null;
    if (!amount || amount < 1) {
        return newReply("Minimal deposit adalah Rp1000. Contoh: .deposit 1000");
    }
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let totalAmount = amount + generateRandomNumber(10, 20);
    const get = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Wira&amount=${totalAmount}&codeqr=${global.codeqr}`);
    let paymentDetails = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
Ketik .bataldeposit jika Anda ingin membatalkan transaksi ini.`;
    const message = await wbk.sendMessage(m.chat, {
        product: {
            productImage: {
                url: get.data.result.qrImageUrl
            },
            productImageCount: 1,
            title: `${command.toUpperCase()} by WBK`,
            description: paymentDetails,
            priceAmount1000: `${amount}` * 1000,
            currencyCode: "IDR",
            retailerId: "100000",
            url: `https://wa.me/${botNumber}`,
        },
        businessOwnerJid: m.sender,
        caption: paymentDetails,
        title: `Silahkan Scan Qris Diatas Ya Kak✨`,
        footer: wm,
        media: true,
        viewOnce: true,
        shop: "WA",
        id: "689739h2dgshG",
        quoted: m,
        ephemeralExpiration: m.expiration
    })
    db.data.users[m.sender].status_deposit = true;
    db.data.users[m.sender].orderkuota = {
        msg: message,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function() {
            setTimeout(async () => {
                if (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].orderkuota && db.data.users[m.sender].orderkuota.amount) {
                    await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                        text: "QRIS Pembayaran telah expired!"
                    }, {
                        quoted: db.data.users[m.sender].orderkuota.msg
                    });
                    await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                        delete: db.data.users[m.sender].orderkuota.msg.key
                    });
                    db.data.users[m.sender].status_deposit = false;
                    delete db.data.users[m.sender].orderkuota;
                }
            }, 300000); // 5 menit
        }
    };
    await db.data.users[m.sender].orderkuota.exp();
    while (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].orderkuota && db.data.users[m.sender].orderkuota.amount) {
        await sleep(15000); 
        const resultcek = await axios.get(`https://linecloud.my.id/api/orkut/cekstatus?apikey=Wira&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
        const req = await resultcek.data.amount;
        if (db.data.users[m.sender].orderkuota && req == db.data.users[m.sender].orderkuota.amount) {
            db.data.users[m.sender].status_deposit = false; 
            await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                delete: db.data.users[m.sender].orderkuota.msg.key
            });
            await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                text: `
*PEMBAYARAN BERHASIL ☑️*

 *• 🆔 ID :* ${db.data.users[m.sender].orderkuota.idDeposit}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(db.data.users[m.sender].orderkuota.amount)}
 *• ♻️ Payment :* ${resultcek.data.brand_name}

Saldo Anda akan segera diproses.`
            }, {
                quoted: db.data.users[m.sender].orderkuota.msg
            });
            db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + parseInt(db.data.users[m.sender].orderkuota.amount);
        }
    }
}
break;      

case 'bataldeposit2': {
    if (m.isGroup) return newReply("Pembatalan deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender] || !db.data.users[m.sender].status_deposit) return newReply("Anda tidak memiliki transaksi deposit yang sedang berlangsung.");
    const orderkuota = db.data.users[m.sender].orderkuota;
    if (!orderkuota || !orderkuota.chat || !orderkuota.msg) return newReply("Transaksi deposit tidak valid atau sudah dibatalkan.");
    await wbk.sendMessage(orderkuota.chat, {
        text: "Transaksi deposit Anda telah dibatalkan.",
        quoted: orderkuota.msg.key
    });
    db.data.users[m.sender].status_deposit = false;
    delete db.data.users[m.sender].orderkuota;
    if (orderkuota.msg.key) {
        await wbk.sendMessage(orderkuota.chat, {
            delete: orderkuota.msg.key
        });
    }
    return newReply("Sukses membatalkan transaksi deposit.");
}
break;

case 'addsewa':
case 'buysewa': {
    if (m.isGroup) return newReply("Sewa bot hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    let userSewa = sewaData[m.sender] || { status_sewa: false, orderSewa: null };
    if (userSewa.status_sewa === true) {
        return newReply("1 Nomer hanya bisa dugunakan untuk 1 group!");
    }
    let teks = `➔ *Contoh:* \`${prefix + command} jumlah_hari link_grup\``;
    if (!text) return newReply(teks);
    let input = text.split(" ");
    let days = input[0] ? parseInt(input[0].trim()) : null;
    let groupLink = input[1] ? input[1].trim() : null;
    if (!days || !groupLink) {
        return newReply("Format salah! Contoh: .addsewa 7 https://chat.whatsapp.com/xxxxx");
    }
    let amount;
    switch (days) {
        case 1:
            amount = 2000;
            break;
        case 7:
            amount = 4000;
            break;
        case 14:
            amount = 7000;
            break;
        case 30:
            amount = 12000;
            break;
        default:
            return newReply('❌ Durasi tidak valid. Gunakan kombinasi berikut:\n- 7 hari untuk Rp10.000\n- 14 hari untuk Rp20.000\n- 30 hari untuk Rp40.000.');
    }
    let [_, groupId] = groupLink.match(/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/) || [];
    if (!groupId) {
        return newReply('❌ Link grup tidak valid. Pastikan Anda memasukkan link grup yang benar.');
    }
    let groupName;
    try {
        let data = await wbk.groupGetInviteInfo(groupId);
        groupName = data.subject;
    } catch (error) {
        return newReply('❌ Gagal mendapatkan informasi grup. Pastikan link grup valid.');
    }
    const rentalDuration = 86400 * days;
    const now = new Date().getTime();
    const fee = Math.floor(Math.random() * 678);
    const totalAmount = amount + fee;
    try {
        const paymentResponse = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Wira&amount=${totalAmount}&codeqr=${global.codeqr}`);
        const paymentData = paymentResponse.data;
        if (!paymentData.result || !paymentData.result.qrImageUrl) {
            throw new Error('Gagal membuat pembayaran. Coba lagi nanti.');
        }
        const paymentDetails = `*DETAIL PEMBAYARAN*\n\n- *ID Transaksi:* ${paymentData.result.transactionId}\n- *Jumlah:* Rp ${amount.toLocaleString('id-ID')}\n- *Biaya Admin:* Rp ${fee.toLocaleString('id-ID')}\n- *Total Pembayaran:* Rp ${totalAmount.toLocaleString('id-ID')}\n- *Batas Waktu Pembayaran:* 5 Menit\n\n*Silakan scan QRIS di atas untuk melanjutkan pembayaran.*`;
        const message = await wbk.sendMessage(m.chat, {
            product: {
                productImage: {
                    url: paymentData.result.qrImageUrl
                },
                productImageCount: 1,
                title: `${command.toUpperCase()} by WBK`,
                description: paymentDetails,
                priceAmount1000: `${totalAmount}` * 1000,
                currencyCode: "IDR",
                retailerId: "100000",
                url: `https://wa.me/${botNumber}`,
            },
            businessOwnerJid: m.sender,
            caption: paymentDetails,
            title: `Silahkan Scan Qris Diatas Ya Kak✨`,
            footer: wm,
            media: true,
            viewOnce: true,
            shop: "WA",
            id: "689739h2dgshG",
            quoted: m,
            ephemeralExpiration: m.expiration
        })
        const statusApiUrl = `https://linecloud.my.id/api/orkut/cekstatus?apikey=Wira&merchant=${global.merchant}&keyorkut=${global.keyorkut}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000;
        const startTime = Date.now();
        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const statusResponse = await axios.get(statusApiUrl);
                const statusData = statusResponse.data;
                if (statusData && statusData.amount && parseInt(statusData.amount) === totalAmount) {
                    isTransactionComplete = true;
                    await wbk.groupAcceptInvite(groupId);
                    if (now < global.db.data.chats[m.chat].expired) {
                        global.db.data.chats[m.chat].expired += rentalDuration;
                    } else {
                        global.db.data.chats[m.chat].expired = now + rentalDuration;
                    }
                    userSewa.status_sewa = true;
                    userSewa.orderSewa = {
                        msg: message,
                        chat: m.sender,
                        idSewa: paymentData.result.transactionId,
                        amount: totalAmount.toString(),
                        exp: now + rentalDuration,
                        groupId: `${groupId}@g.us`,
                        groupName: groupName, 
                        groupLink: groupLink 
                    };
                    sewaData[m.sender] = userSewa;
                    writeSewaDatabase(sewaData);
                    await wbk.sendMessage(m.chat, {
                        delete: message.key
                    });
                    function msToDate(ms) {
                        const seconds = Math.floor((ms / 1000) % 60);
                        const minutes = Math.floor((ms / (1000 * 60)) % 60);
                        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
                        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
                        let result = '';
                        if (days > 0) result += `${days} hari `;
                        if (hours > 0) result += `${hours} jam `;
                        if (minutes > 0) result += `${minutes} menit `;
                        if (seconds > 0) result += `${seconds} detik`;
                        return result.trim() || '0 detik';
                    }
                    const successNotification = `✅ *PEMBAYARAN BERHASIL!*\n\n- *ID Transaksi:* ${paymentData.result.transactionId}\n- *Jumlah:* Rp ${amount.toLocaleString('id-ID')}\n- *Durasi Sewa:* ${days} hari\nWaktu Berjalan: ${msToDate(global.db.data.chats[m.chat].expired - now)}\n\n*Bot telah masuk grup dan aktif selama ${days} hari.*`;
                    await wbk.sendMessage(m.sender, {
                        text: successNotification
                    });
                    return;
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
        if (!isTransactionComplete) {
            await wbk.sendMessage(m.chat, {
                delete: message.key
            });
            const expiredText = `❌ *WAKTU PEMBAYARAN TELAH HABIS!*\n\nTransaksi Anda melebihi batas waktu pembayaran. Silakan coba lagi dengan membuat transaksi baru.`;
            await wbk.sendMessage(m.chat, {
                text: expiredText
            });
        }
    } catch (error) {
        console.error('Error membuat atau memeriksa pembayaran:', error);
        return wbk.sendMessage(m.chat, {
            text: '❌ Gagal membuat atau memeriksa pembayaran. Silakan coba lagi nanti.'
        });
    }
    let chat = global.db.data.chats[m.chat];
    if (chat.expired > 0 && new Date() - chat.expired > 0) {
        await m.reply('Waktu sewa bot telah habis! Bot akan keluar dari grup ini.');
        await wbk.groupLeave(m.chat);
    }
}
break;
     
case 'batalsewa': {
    if (m.isGroup) return newReply("Pembatalan sewa hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    if (!sewaData[m.sender] || !sewaData[m.sender].status_sewa) {
        return newReply("Anda tidak memiliki transaksi sewa yang sedang berlangsung.");
    }
    const orderSewa = sewaData[m.sender].orderSewa;
    await wbk.sendMessage(orderSewa.chat, {
        text: "Transaksi sewa Anda telah dibatalkan."
    }, {
        quoted: orderSewa.msg
    });
    sewaData[m.sender].status_sewa = false;
    delete sewaData[m.sender].orderSewa;
    writeSewaDatabase(sewaData);
    await wbk.sendMessage(orderSewa.chat, {
        delete: orderSewa.msg.key
    });
    return newReply("Sukses membatalkan transaksi sewa.");
}
break;        
 
case 'listsewa': {
    if (m.isGroup) return newReply("Perintah ini hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    let response = `📋 *Daftar Sewa Aktif:*\n\n`;
    if (Object.keys(sewaData).length === 0) {
        return newReply("Tidak ada transaksi sewa yang sedang berlangsung.");
    }
    for (let user in sewaData) {
        let userSewa = sewaData[user];
        if (userSewa.status_sewa) {
            response += `- *Pengguna:* ${user}\n`;
            response += `- *Chat:* ${userSewa.orderSewa.chat}\n`;
            response += `- *Group ID:* ${userSewa.orderSewa.groupId}\n`;
            response += `- *Group Name:* ${userSewa.orderSewa.groupName}\n`;
            response += `- *Link Group:* ${userSewa.orderSewa.groupLink}\n`;
            response += `- *Waktu Kedaluwarsa:* ${formatDateToIndonesia(new Date(userSewa.orderSewa.exp))}\n\n`;
        }
    }

    await newReply(response);
}
break;

// other.js
case 'reactsaluran': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const args = text.split(" ");
    if (args.length < 3) return newReply(`*Contoh Penggunaan:*\n${prefix + command} <id_saluran> <id_saluran_message> <emot>\n\nContoh: ${prefix + command} 123456789@newslatter 99 🤮🤮🤮`);
    const saluran = args[0];
    const id = args[1];
    const emot = args[2];
    try {
        await wbk.newsletterReactMessage(`${saluran}`, `${id}`, `${emot}`);
        newReply("Reaksi berhasil dikirim!");
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
 
case 'htbum': {
    if (!text) return newReply("ID GC?");
    if (!isCreator) return newReply(mess.creator);
    const htbumWBK = text.trim();
    try {
        await m.react('🥱')
        const groupMetadata = await wbk.groupMetadata(htbumWBK);
        const participants = groupMetadata.participants.map(a => a.id);
        async function bumWBK(jid, medias, options) {
            options = { ...options };
            const caption = options.text || options.caption || "";
            const album = generateWAMessageFromContent(jid, {
                albumMessage: {
                    expectedImageCount: medias.filter(media => media.type === "image").length,
                    expectedVideoCount: medias.filter(media => media.type === "video").length,
                    ...(options.quoted ? {
                        contextInfo: {
                            remoteJid: options.quoted.key.remoteJid,
                            fromMe: options.quoted.key.fromMe,
                            stanzaId: options.quoted.key.id,
                            participant: options.quoted.key.participant || options.quoted.key.remoteJid,
                            quotedMessage: options.quoted.message
                        }
                    } : {}),
                    contextInfo: {
                        mentionedJid: participants,
                        groupMentions: [{
                            groupSubject: "everyone",
                            groupJid: htbumWBK
                        }]
                    }
                }
            }, { quoted: options.quoted });
            await wbk.relayMessage(album.key.remoteJid, album.message, {
                messageId: album.key.id
            });
            for (const media of medias) {
                const { type, data } = media;
                const img = await generateWAMessage(jid, {
                    [type]: data,
                    ...(media === medias[0] ? {
                        caption
                    } : {})
                }, {
                    upload: wbk.waUploadToServer
                });
                img.message.messageContextInfo = {
                    messageAssociation: {
                        associationType: 1,
                        parentMessageKey: album.key
                    }
                };
                await wbk.relayMessage(img.key.remoteJid, img.message, {
                    messageId: img.key.id
                });
            }
            return album;
        }
        const medias = [];
        await bumWBK(htbumWBK, medias, { 
            quoted: null
        });
		await m.react('✅')
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
case 'fotorandom': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const args = text.trim().split(' ');
    const subcase = args[1];
    if (!subcase) {
        return m.reply(`Harap masukkan subcase setelah perintah. Contoh: !fotorandom akiyama\n\nakira, akiyama, ana, art, asuna, ayuzawa, boruto, bts, chiho, chitoge, cosplay, cosplayloli, cosplaysagiri, cyber, deidara, doraemon, elaina, emilia, erza, exo, gamewallpaper, gremory, hacker, hestia, husbu, inori, islamic, isuzu, itachi, itori, jennie, jiso, justina, kaga, kagura, kakasih, kaori, cartoon, shortquote, keneki, kotori, kpop, kucing, kurumi, lisa, loli2, madara, megumin, mikasa, mikey, miku, minato, mobile, motor, mountain, naruto, nekonime, nezuko, onepiece, pentol, pokemon, profil, programming, pubg, randblackpink, randomnime, randomnime2, rize, rose, sagiri, sakura, sasuke, satanic, shina, shinka, shinomiya, shizuka, shota, space, technology, tejina, toukachan, tsunade, waifu2, wallhp, wallml, wallmlnime, yotsuba, yuki, yulibocil, yumeko`);
    }
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let data;
    switch (subcase.toLowerCase()) {
        case 'akira':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akira.json');
            break;
        case 'akiyama':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akiyama.json');
            break;
        case 'ana':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ana.json');
            break;
        case 'art':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/art.json');
            break;
        case 'asuna':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/asuna.json');
            break;
        case 'ayuzawa':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ayuzawa.json');
            break;
        case 'boruto':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boruto.json');
            break;
        case 'bts':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/bts.json');
            break;
        case 'chiho':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chiho.json');
            break;
        case 'chitoge':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chitoge.json');
            break;
        case 'cosplay':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplay.json');
            break;
        case 'cosplayloli':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplayloli.json');
            break;
        case 'cosplaysagiri':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplaysagiri.json');
            break;
        case 'cyber':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cyber.json');
            break;
        case 'deidara':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/deidara.json');
            break;
        case 'doraemon':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/doraemon.json');
            break;
        case 'elaina':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/elaina.json');
            break;
        case 'emilia':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/emilia.json');
            break;
        case 'erza':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/erza.json');
            break;
        case 'exo':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/exo.json');
            break;
        case 'gamewallpaper':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gamewallpaper.json');
            break;
        case 'gremory':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gremory.json');
            break;
        case 'hacker':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hekel.json');
            break;
        case 'hestia':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hestia.json');
            break;
        case 'husbu':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/Husbu.json');
        case 'inori':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/inori.json');
            break;
        case 'islamic':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/islamic.json');
            break;
        case 'isuzu':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/isuzu.json');
            break;
        case 'itachi':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itachi.json');
            break;
        case 'itori':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itori.json');
            break;
        case 'jennie':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jeni.json');
            break;
        case 'jiso':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jiso.json');
            break;
        case 'justina':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/justina.json');
            break;
        case 'kaga':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaga.json');
            break;
        case 'kagura':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kagura.json');
            break;
        case 'kakasih':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kakasih.json');
            break;
        case 'kaori':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaori.json');
            break;
        case 'cartoon':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kartun.json');
            break;
        case 'shortquote':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/katakata.json');
            break;
        case 'keneki':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/keneki.json');
            break;
        case 'kotori':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kotori.json');
            break;
        case 'kpop':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kpop.json');
            break;
        case 'kucing':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kucing.json');
            break;
        case 'kurumi':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kurumi.json');
            break;
        case 'lisa':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/lisa.json');
            break;
        case 'loli2':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/loli.json');
            break;
        case 'madara':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/madara.json');
            break;
        case 'megumin':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/megumin.json');
            break;
        case 'mikasa':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikasa.json');
            break;
        case 'mikey':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikey.json');
            break;
        case 'miku':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/miku.json');
            break;
        case 'minato':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/minato.json');
            break;
        case 'mobile':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mobil.json');
            break;
        case 'motor':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/motor.json');
            break;
        case 'mountain':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mountain.json');
            break;
        case 'naruto':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/naruto.json');
            break;
        case 'nekonime':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nekonime.json');
            break;
        case 'nezuko':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nezuko.json');
            break;
        case 'onepiece':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/onepiece.json');
            break;
        case 'pentol':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pentol.json');
            break;
        case 'pokemon':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pokemon.json');
            break;
        case 'profil':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/profil.json');
            break;
        case 'programming':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/programming.json');
            break;
        case 'pubg':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pubg.json');
            break;
        case 'randblackpink':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randblackpink.json');
            break;
        case 'randomnime':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime.json');
            break;
        case 'randomnime2':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime2.json');
            break;
        case 'rize':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rize.json');
            break;
        case 'rose':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rose.json');
            break;
        case 'sagiri':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sagiri.json');
            break;
        case 'sakura':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sakura.json');
            break;
        case 'sasuke':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sasuke.json');
            break;
        case 'satanic':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/satanic.json');
            break;
        case 'shina':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shina.json');
            break;
        case 'shinka':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinka.json');
            break;
        case 'shinomiya':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinomiya.json');
            break;
        case 'shizuka':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shizuka.json');
            break;
        case 'shota':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shota.json');
            break;
        case 'space':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tatasurya.json');
            break;
        case 'technology':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/technology.json');
            break;
        case 'tejina':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tejina.json');
            break;
        case 'toukachan':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/toukachan.json');
            break;
        case 'tsunade':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tsunade.json');
            break;
        case 'waifu2':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/waifu.json');
            break;
        case 'wallhp':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallhp.json');
        case 'wallml':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallml.json');
            break;
        case 'wallmlnime':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallnime.json');
            break;
        case 'yotsuba':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yotsuba.json');
            break;
        case 'yuki':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yuki.json');
            break;
        case 'yulibocil':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yulibocil.json');
            break;
        case 'yumeko':
            data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yumeko.json');
            break;
        default:
            return m.reply("Subcase tidak dikenali. Silakan coba lagi dengan subcase yang valid.");
    }
    const response = data[Math.floor(Math.random() * data.length)];
    const buffer = await getBuffer(response);
    await wbk.sendMessage(m.chat, {
        image: buffer,
        caption: `Nih Kak ${pushname}, ${subcase}-nya 😋☕`,
        footer: botName,
        buttons: [{
            buttonId: prefix + 'fotorandom ' + subcase,
            buttonText: {
                displayText: "🔄 Lanjut Lagi"
            }
        },
        {
            buttonId: `${prefix}menu`,
            buttonText: {
                displayText: "📜 Kembali ke Menu"
            }
        }],
        viewOnce: true,
    }, { quoted: m });
    await limitReduction(m, prefix, wm);
}
break;
           
case 'wallpaper': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n${prefix + command} nature 2`);
	const [query, page] = text.split(' ');
	try {
		const wallpapers = await wallpaper(query, page || '1');
		if (wallpapers.length === 0) return newReply(`⚠️ Mora gak nemu wallpaper dengan kata kunci "${query}", Kak! 🥲`);
		let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Tipe:* ${wp.type}`).join('\n\n');
		newReply(`🎨 *Hasil Wallpaper untuk:* ${query}\n\n${result}`);
        await limitReduction(m, prefix, wm);
	} catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
	}
}
break;

case 'ringtone': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *judul ringtone*\n\n🤔 *Contohnya:*\n\n${prefix + command} iPhone`);
	try {
		const results = await ringtone(text);
		if (results.length === 0) return newReply(`⚠️ Mora gak nemu ringtone dengan kata kunci "${text}", Kak! 🥲`);
		let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
		newReply(`🔊 *Hasil Pencarian Ringtone untuk:* ${text}\n\n${result}`);
        await limitReduction(m, prefix, wm);
	} catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
	}
}
break;

case 'kalender': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const text = m.text.split(' ')[1] || '';
    const calendarData = await generateCalendar2025(text);
    await wbk.sendMessage(m.chat, calendarData);
    await limitReduction(m, prefix, wm);
}
break;

// owner.js
case "restart": {
    if (!isCreator) {
        return newReply(mess.owner);
    }
    newReplyBot("Bot sedang di-restart... ⏳");
    console.log("Bot restarting...");
    await sleep(5000);
    process.exit();
}
break;

case "autoaipc": {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply("❗ *Kirim perintah*:\n" + (prefix + command) + " true/false");
    if (args[0] === "true") {
        db.data.chats[m.chat].autoaipc = true;
        await newReply(mess.done);
    } else if (args[0] === "false") {
        db.data.chats[m.chat].autoaipc = false;
        await newReply(mess.done);
    }
}
break;

case 'backup': {
    if (!isCreator) return newReply(mess.owner);
    let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
    let date = new Date();
    let filename = await generateRandomHexName(32);
    const {
        execSync
    } = require('child_process');
    const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== 'temp' && cek !== '');
    await newReply('Hasil backup akan dikirim lewat chat pribadi ya!');
    await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
    const sentMessage = await wbk.sendMessage(sender, {
        document: await fs.readFileSync(`./${filename}.zip`),
        mimetype: 'application/zip',
        fileName: `${filename}.zip`,
        caption: 'Berhasil! Silakan download dan simpan file backup-nya ya.'
    });
    await execSync(`rm -rf ${filename}.zip`);
    console.log(`${filename}.zip telah dihapus dari file lokal.`);
}
break;;

case 'muteidgc': {
    if (!isCreator) return newReply(mess.owner);
    const groupId = args[0];
    const muteStatus = args[1];
    if (!groupId) return newReply('Silakan masukkan ID grup yang valid.');
    if (!db.data.chats[groupId]) {
        return newReply('ID grup tidak ditemukan dalam database.');
    }
    if (muteStatus === 'true') {
        if (db.data.chats[groupId].mute) return newReply('*Sudah Aktif Sebelumnya*');
        db.data.chats[groupId].mute = true;
        newReply('*Mute Activated!*');
    } else if (muteStatus === 'false') {
        if (!db.data.chats[groupId].mute) return newReply('*Sudah Nonaktif Sebelumnya*');
        db.data.chats[groupId].mute = false;
        newReply('*Mute Disabled!*');
    } else {
        newReply('Silakan masukkan true/false untuk mengatur mute.');
    }
}
break;

case 'jadibot': {
    if (!isCreator && !isPremium) return newReply(mess.premium)
    await reactionMessage('✅');
    if (m.key.fromMe) return
    try {
        await jadibot(wbk, m, m.sender)
    } catch (error) {
        console.log(error);
    }
}
break;

case 'stopjadibot': {
    if (!isCreator && !isPremium) return newReply(mess.premium)
    await reactionMessage('✅');
    if (m.key.fromMe) return
    try {
        await stopjadibot(wbk, m, m.sender)
    } catch (error) {
        console.log(error);
    }
}
break;

case 'listjadibot': {
    if (!isCreator && !isPremium) return newReply(mess.premium)
    if (m.key.fromMe) return
    try {
        listjadibot(wbk, m)
    } catch (error) {
        console.log(error);
    }
}
break;

case 'addbadword': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}addbadword [kata kasar]\nContoh: ${prefix}addbadword asshole`);
    bad.push(q);
    fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
    newReply('✅ *Kata kasar berhasil ditambahkan ke daftar!*');
}
break;;

case 'delbadword': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}delbadword [kata kasar]\nContoh: ${prefix}delbadword asshole`);
    bad.splice(q);
    fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
    newReply('✅ *Kata kasar berhasil dihapus dari daftar!*');
}
break;;

case 'listbadword': {
    if (!isCreator) return newReply(mess.owner);
    let teks = '┌──⭓「 *VN List* 」\n│\n'
    for (let i of bad) {
        teks += `│⭔ ${i}\n`
    }
    teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
    newReply(teks)
}
break;;

case 'resetdbuser': {
    if (!isCreator) return newReply(mess.owner);
    newReply(`Berhasil menghapus semua data pengguna dari database.`);
    db.data.users = [];
}
break;;

case 'resetdbhit': {
    if (!isCreator) return newReply(mess.owner);
    global.db.data.settings[botNumber].totalhit = 0;
    newReply(mess.done);
}
break;;

case 'setmenu': {
    if (!isCreator) return newReply(mess.owner);
    newReply(`Fitur *${command}* sudah tidak dapat digunakan lagi.`);
}
break;;

case 'setreply': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) {
        return newReply(
            `Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
        );
    }
    if (text.startsWith('v')) {
        global.db.data.settings[botNumber].typereply = text;
        return newReply(mess.done);
    }
    return newReply(
        `Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
    );
}
break;

case 'upstatus': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return m.reply('Masukkan teks untuk status atau reply gambar/video dengan caption');
    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];
    if (m.quoted) {
        const mime = m.quoted.mtype || m.quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
            await reactionMessage('🤪');
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
            await reactionMessage('🤪');
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
        await reactionMessage('🤪');
    } else {
        options = {
            text: text,
        };
    }
    await reactionMessage('🤪');
    return wbk.sendMessage("status@broadcast", options, {
        backgroundColor: "#7ACAA7",
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await wbk.groupMetadata(m.chat)).participants.map((a) => a.id),
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: jids.map((jid) => ({
                    tag: "to",
                    attrs: {
                        jid: m.chat
                    },
                    content: undefined,
                })),
            }, ],
        }, ],
    });
    await reactionMessage('✅');
}
break;

case 'upswtext':
case 'upswteks': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply('Teksnya mana?');
    await wbk.sendMessage('status@broadcast', {
        text: q
    }, {
        backgroundColor: '#FF000000',
        font: 3,
        statusJidList: Object.keys(db.data.users)
    });
    newReply('Sukses kirim status teks!');
}
break;;

case 'statusvideo':
case 'upswvideo': {
    if (!isCreator) return newReply(mess.owner);
    if (/video/.test(mime)) {
        var videosw = await wbk.downloadAndSaveMediaMessage(quoted);
        let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
        let mediaType = mime || 'Tidak diketahui';
        let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
        });
        let sender = `${m.pushName || ownerName}`;
        let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
            `🎥 *Tipe Media:* ${mediaType}\n` +
            `⏰ *Waktu Dikirim:* ${sendTime}\n` +
            `👤 *Dikirim oleh:* ${sender}`;
        await wbk.sendMessage('status@broadcast', {
            video: {
                url: videosw
            },
            caption: q ? q : defaultCaption
        }, {
            statusJidList: Object.keys(db.data.users)
        });
        await newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
    } else {
        newReply('⚠️ Tolong reply ke video dulu ya, Kak! 🎥');
    }
}
break;;

case 'upswimage':
case 'upswimg': {
    if (!isCreator) return newReply(mess.owner);
    if (/image/.test(mime)) {
        var imagesw = await wbk.downloadAndSaveMediaMessage(quoted);
        let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
        let mediaType = mime || 'Tidak diketahui';
        let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
        });
        let sender = `${m.pushName || ownerName}`;
        let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
            `🖼️ *Tipe Media:* ${mediaType}\n` +
            `⏰ *Waktu Dikirim:* ${sendTime}\n` +
            `👤 *Dikirim oleh:* ${sender}`;
        await wbk.sendMessage('status@broadcast', {
            image: {
                url: imagesw
            },
            caption: q ? q : defaultCaption
        }, {
            statusJidList: Object.keys(db.data.users)
        });
        await newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
    } else {
        newReply('⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️');
    }
}
break;;

case 'statusaudio':
case 'upswaudio': {
    if (!isCreator) return newReply(mess.owner);
    if (/audio/.test(mime)) {
        var audiosw = await wbk.downloadAndSaveMediaMessage(quoted);
        await wbk.sendMessage('status@broadcast', {
            audio: {
                url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
        }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(db.data.users)
        });
        await newReply('Sukses kirim status audio!');
    } else {
        newReply('Reply audio dulu, ya!');
    }
}
break;

case 'upswmention': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('Masukkan ID Group dan Caption!');
    if (!quoted) return newReply('Wajib reply atau kirim media dengan command ini!');
    const colors = [
        '#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769',
        '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B',
        '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774',
        '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA',
        '#243640'
    ];
    const fonts = [0, 1, 2, 6, 7, 8, 9, 10];

    let [groupid, ...captionwak] = text.split(',');
    let caption = captionwak.join(',').trim();
    if (!groupid || !caption) return newReply('Format salah. Contoh: .upswmention idgroup,caption');

    const mime = quoted.mimetype || '';
    let content = { caption };

    if (/image/.test(mime)) {
        const imagePath = await wbk.downloadAndSaveMediaMessage(quoted);
        content.image = { url: imagePath };
    } else if (/video/.test(mime)) {
        const videoPath = await wbk.downloadAndSaveMediaMessage(quoted);
        content.video = { url: videoPath };
    } else if (/audio/.test(mime)) {
        const audioPath = await wbk.downloadAndSaveMediaMessage(quoted);
        content.audio = { url: audioPath, mimetype: 'audio/mp4', ptt: true };
    } else {
        return newReply('Reply media image, video, atau audio!');
    }
    let annotations = [{ 
        embeddedContent: {
            embeddedMusic: {
                musicContentMediaId: "500077023151893",
                songId: "456240313688939",
                author: "WBK",
                title: "AI ZERO MD",
                artistAttribution: "https://www.instagram.com/wbagazk/"
            }
        },
        embeddedAction: true
    }];

    try {
        let groupMetadata = await wbk.groupMetadata(groupid);
        let users = groupMetadata.participants.map(u => wbk.decodeJid(u.id));

        let message = await wbk.sendMessage("status@broadcast", { ...content, annotations }, {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            font: fonts[Math.floor(Math.random() * fonts.length)],
            statusJidList: users,
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: [groupid].map(jid => ({
                        tag: "to",
                        attrs: { jid },
                        content: undefined,
                    })),
                }],
            }]
        });

        newReply(`✅ Berhasil mengirim status ke ${users.length} user di 1 grup.`);
    } catch (err) {
        console.error("❌ Error:", err);
        newReply('❌ Gagal mengirim status.');
    }
}
break;

case 'setimgmenu': {
    if (!isCreator) return newReply(mess.owner);
    let media = await wbk.downloadAndSaveMediaMessage(quoted);
    await fsx.copy(media, './media/icon.png');
    fs.unlinkSync(media);
    newReply('Gambar menu berhasil diset! 🎨');
}
break;;

case 'setvidmenu':
case 'setvgifmenu': {
    if (!isCreator) return newReply(mess.owner);
    let media = await wbk.downloadAndSaveMediaMessage(quoted);
    await fsx.copy(media, './media/vidmenu.mp4');
    fs.unlinkSync(media);
    newReply('Video menu berhasil diset! 🎬');
}
break;;

case 'addtitle':
case 'addgelar': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Usage: ${prefix + command} number|title`);
    nonya = text.split('|')[0];
    titlenya = text.split('|')[1];
    let oo = `${nonya}@s.whatsapp.net`;
    db.data.users[oo].title = titlenya;
    await newReply('Title berhasil ditambahkan! 🎉');
}
break;;

case 'deltitle':
case 'delgelar': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Usage: ${prefix + command} number`);
    nonya = text.split(',')[0];
    let oo = `${nonya}@s.whatsapp.net`;
    db.data.users[oo].title = '';
    await newReply('Title berhasil dihapus! ✨');
}
break;

case 'addid':
case 'addinfo': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628xxx,nama,umur,asal,gelar`);
    let args = text.split(',').map(item => item.trim());
    if (args.length < 5) return newReply('⚠️ Format salah! Pastikan mengirim: nomor,nama,umur,asal,gelar');
    let [nomor, nama, umur, asal, gelar] = args;
    if (!/^\d+$/.test(nomor)) return newReply('⚠️ Nomor harus berupa angka tanpa spasi atau simbol lain.');
    let userId = `${nomor}@s.whatsapp.net`;
    db.data.users[userId].nama = nama;
    db.data.users[userId].umur = Number(umur);
    db.data.users[userId].askot = asal;
    db.data.users[userId].title = gelar;
    await newReply('✅ Identitas user berhasil ditambahkan! 🎉');
}
break;

case 'addlimit':
case 'givelimit': {
    if (!isCreator) return newReply(mess.owner);
    let usernya, limitnya;
    if (quoted && quoted.sender) {
        usernya = quoted.sender.split('@')[0];
        limitnya = text.trim();
    } else {
        if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,10`);
        [usernya, limitnya] = text.split(',');
    }
    if (!usernya || !limitnya) {
        return newReply(`❌ Format salah! Gunakan:\n${prefix + command} 628123456789,10\natau reply chat dengan: ${prefix + command} 10`);
    }
    if (!/^\d+$/.test(limitnya)) {
        return newReply('⚠️ Jumlah limit harus berupa angka!');
    }
    return handleLimit('add', usernya, parseInt(limitnya));
}
break;

case 'dellimit': {
    if (!isCreator) return newReply(mess.owner);
    let usernya, limitnya;
    if (quoted && quoted.sender) {
        usernya = quoted.sender.split('@')[0];
        limitnya = text.trim();
    } else {
        if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,10`);
        [usernya, limitnya] = text.split(',');
    }
    if (!usernya || !limitnya) {
        return newReply(`❌ Format salah! Gunakan:\n${prefix + command} 628123456789,10\natau reply chat dengan: ${prefix + command} 10`);
    }
    if (!/^\d+$/.test(limitnya)) {
        return newReply('⚠️ Jumlah limit harus berupa angka!');
    }
    return handleLimit('del', usernya, parseInt(limitnya));
}
break;

case 'resetlimit': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789`);
    let usernya = text;
    return handleLimit('reset', usernya);
}
break;

case 'resetdblimit': {
    if (!isCreator) return newReply(mess.owner);
    let users = Object.keys(db.data.users);
    for (let jid of users) {
        const limitUser = db.data.users[jid].vip ?
            global.limit.vip :
            checkPremiumUser(jid, premium) ?
            global.limit.premium :
            global.limit.free;
        db.data.users[jid].limit = limitUser;
    }
    return newReply(`✅ Limit semua user berhasil di-reset! ✂️`);
}
break;

case 'adduang':
case 'givemoney': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,1000`);
    let [usernya, uangnya] = text.split(',');
    return handleMoney('add', usernya, uangnya);
}
break;

case 'deluang': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,1000`);
    let [usernya, uangnya] = text.split(',');
    return handleMoney('del', usernya, uangnya);
}
break;

case 'resetuang': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789`);
    let usernya = text;
    return handleMoney('reset', usernya);
}
break;

case 'resetdbmoney': {
    if (!isCreator) return newReply(mess.owner);
    let users = Object.keys(db.data.users);
    for (let jid of users) {
        const uangUser = db.data.users[jid].vip ?
            global.uang.vip :
            checkPremiumUser(jid, premium) ?
            global.uang.premium :
            global.uang.free;
        db.data.users[jid].uang = uangUser;
    }
    return newReply(`✅ Uang semua user berhasil di-reset! ✂️`);
}
break;

case 'addpr':
case 'addprem':
case 'addpremium': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh:\n${prefix + command} @tag,durasi(s/m/h/d)`);
    let [teks1, teks2] = text.split`,`;
    const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const onWa = await sock.onWhatsApp(nmrnya);
    if (!onWa.length > 0) return newReply('Nomor tersebut tidak terdaftar di WhatsApp! ❌');
    if (teks2) {
        let teks = `✅ Berhasil menambahkan @${nmrnya.split('@')[0]} sebagai pengguna *Premium* selama *${teks2}*!\n\n`;
        teks += `*Benefit Premium*:\n`;
        teks += `- *Download*: 50MB/s\n`;
        teks += `- *Limit*: 1000/d\n`;
        teks += `- *Request*: 10/5s\n`;
        teks += `- *VIP Access*: Yes\n`;
        teks += `- *User Priority*: Yes\n`;
        await addPremiumUser(nmrnya, teks2, premium);
        await newReply(teks);
        db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
        db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium;
        db.data.users[nmrnya].premium = true;
        db.data.users[nmrnya].vip = true;
    } else {
        newReply(`Masukkan durasi yang valid!\n*Kirim perintah*: ${prefix + command} @tag,durasi(s/m/h/d)`);
    }
}
break;

case 'delpr':
case 'delprem':
case 'delpremium': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh:\n${prefix + command} @tag`);
    const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (checkPremiumUser(nmrnya, premium)) {
        premium.splice(getPremiumPosition(nmrnya, premium), 1);
        fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(premium));
        let teks = `✅ Berhasil menghapus @${nmrnya.split('@')[0]} dari daftar *Premium*!\n\n`;
        teks += `*Benefit Regular*:\n`;
        teks += `- *Download*: 2MB/s\n`;
        teks += `- *Limit*: 20/d\n`;
        teks += `- *Request*: 1/5s\n`;
        teks += `- *VIP Access*: No\n`;
        teks += `- *User Priority*: No\n`;
        await newReply(teks);
        db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free;
        db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free;
        db.data.users[nmrnya].premium = false;
        db.data.users[nmrnya].vip = false;
    } else {
        newReply(`⚠️ Pengguna @${nmrnya.split('@')[0]} bukan pengguna *Premium*!`);
    }
}
break;

case 'listpremium':
case 'listprem': {
    let txt = `*🌟 DAFTAR PREMIUM 🌟*\n\n`;
    let men = [];
    if (premium.length === 0) {
        txt += `Tidak ada pengguna premium saat ini. 🫤`;
    } else {
        for (let i of premium) {
            men.push(i.id);
            txt += `- *Nomor*: +${i.id.split('@')[0]}\n`;
            if (i.expired === 'PERMANENT') {
                txt += `- *Expired*: PERMANENT\n\n`;
            } else {
                let anu = ms(i.expired - Date.now());
                txt += `- *Expired*: ${anu.days}d, ${anu.hours}h, ${anu.minutes}m\n\n`;
            }
        }
    }
    newReply(txt);
}
break;

case 'whitelist': {
    if (!isCreator && !isAdmins) return newReply(mess.admin);

    try {
        let users = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (!users) return newReply(`Kak, tolong kirim nomor atau tag seseorang yang ingin di-whitelist!`);
        if (ownerNumber.includes(users)) return newReply(`Eits, dia itu owner! Nggak bisa di-whitelist atau diubah statusnya!`);
        if (whitelist.includes(users)) {
            return wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} sudah ada dalam daftar whitelist!`, m);
        }
        whitelist.push(users);
        fs.writeFileSync('./src/data/function/whitelist.json', JSON.stringify(whitelist, null, 2));
        wbk.sendTextWithMentions(m.chat, `Berhasil! @${users.split('@')[0]} sekarang ada dalam daftar whitelist!`, m);
    } catch (err) {
        console.error('Error saat menambahkan ke whitelist:', err); // Log error untuk debugging
        newReply(`Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin di-whitelist!`);
    }
}
break;

case 'unwhitelist': {
    if (!isCreator && !isAdmins) return newReply(mess.admin);

    try {
        let users = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (!users) return newReply(`Kak, tolong kirim nomor atau tag seseorang yang ingin dihapus dari whitelist!`);
        if (ownerNumber.includes(users)) return newReply(`Eits, dia itu owner! Nggak bisa dihapus dari whitelist!`);
        if (!whitelist.includes(users)) {
            return wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} tidak ditemukan dalam daftar whitelist!`, m);
        }
        whitelist.splice(whitelist.indexOf(users), 1);
        fs.writeFileSync('./src/data/function/whitelist.json', JSON.stringify(whitelist, null, 2));
        wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} telah dihapus dari daftar whitelist!`, m);
    } catch (err) {
        console.error('Error saat menghapus dari whitelist:', err); // Log error untuk debugging
        newReply(`Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dihapus dari whitelist!`);
    }
}
break;

case 'listwhitelist': {
    try {
        let txt = `✨ *Daftar Whitelist* ✨\nTotal: *${whitelist.length}* pengguna\n\n`;
        for (let user of whitelist) {
            txt += `- @${user.split('@')[0]}\n`;
        }
        wbk.sendTextWithMentions(m.chat, txt, m);
    } catch (err) {
        console.error('Error saat menampilkan daftar whitelist:', err); // Log error untuk debugging
        newReply(`Oops! Ada kesalahan saat menampilkan daftar whitelist.`);
    }
}
break;

case 'tandai':
case 'blacklist': {
    if (!isCreator && !isAdmins) return newReply(mess.admin);

    try {
        let users = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (!users) return newReply(`Kak, tolong kirim nomor atau tag seseorang yang ingin dimasukkan ke blacklist!`);
        if (ownerNumber.includes(users)) return newReply(`Eits, dia itu owner! Nggak bisa dimasukkan ke blacklist!`);
        if (blacklist.includes(users)) {
            return wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} sudah ada dalam daftar blacklist!`, m);
        }
        blacklist.push(users);
        fs.writeFileSync('./src/data/function/blacklist.json', JSON.stringify(blacklist, null, 2));
        wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} telah masuk dalam daftar blacklist!`, m);
    } catch (err) {
        console.error(err); // Log error untuk debugging
        newReply(`Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dimasukkan ke blacklist!`);
    }
}
break;

case 'unblacklist': {
    if (!isCreator && !isAdmins) return newReply(mess.admin);

    try {
        let users = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (!users) return newReply(`Kak, tolong kirim nomor atau tag seseorang yang ingin dihapus dari blacklist!`);
        if (ownerNumber.includes(users)) return newReply(`Eits, dia itu owner! Nggak bisa dihapus dari blacklist!`);
        if (!blacklist.includes(users)) {
            return wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} tidak ditemukan dalam daftar blacklist!`, m);
        }
        blacklist.splice(blacklist.indexOf(users), 1);
        fs.writeFileSync('./src/data/function/blacklist.json', JSON.stringify(blacklist, null, 2));
        wbk.sendTextWithMentions(m.chat, `@${users.split('@')[0]} telah dihapus dari daftar blacklist!`, m);
    } catch (err) {
        console.error(err); // Log error untuk debugging
        newReply(`Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin dihapus dari blacklist!`);
    }
}
break;

case 'listblacklist': {
    let txt = `🚫 *Daftar Blacklist* 🚫\nTotal: *${blacklist.length}* pengguna\n\n`;
    for (let user of blacklist) {
        txt += `- @${user.split('@')[0]}\n`;
    }
    wbk.sendTextWithMentions(m.chat, txt, m);
}
break;

case 'listbanned': {
    let txt = `⛔ *Daftar Pengguna yang Diblokir* ⛔\nTotal: *${banned.length}* pengguna\n\n`

    for (let user of banned) {
        txt += `- @${user.split('@')[0]}\n`
    }
    wbk.sendTextWithMentions(m.chat, txt, m)
}
break

case 'ban':
case 'banned': {
    if (!isCreator) return newReply(mess.owner)
    try {
        let users = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (!users) return newReply(`Kak, tolong kirim nomor atau tag seseorang yang ingin diblokir!`)
        if (ownerNumber.includes(users)) return newReply(`Eits, dia itu owner! Nggak bisa diblokir!`)
        if (banned.includes(users)) return newReply(`Nomor tersebut sudah ada dalam daftar banned sebelumnya!`)
        banned.push(users)
        fs.writeFileSync('./src/data/function/banned.json', JSON.stringify(banned, null, 2))
        newReply(`Berhasil! @${users.split('@')[0]} telah diblokir!`)
    } catch (err) {
        newReply(`Oops! Ada kesalahan. Pastikan kakak mengirim nomor atau tag seseorang yang ingin diblokir!`)
    }
}
break

case 'addowner': {
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} ${ownerNumber}`);
    bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    let ceknye = await wbk.onWhatsApp(bnnd);
    if (ceknye.length == 0) return newReply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
    owner.push(bnnd);
    fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
    newReply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
}
break;;
case 'delowner': {

    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
    ya = q.split("|")[0].replace(/[^0-9]/g, '');
    unp = owner.indexOf(ya);
    owner.splice(unp, 1);
    fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
    newReply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
}
break;;

case 'listowner': {
    if (!isCreator) return newReply(mess.owner);
    let teks = '┌──⭓「 *List Owner* 」\n│\n';
    for (let x of owner) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
    newReply(teks);
}
break;;

case 'delsession':
case 'clearsession': {
    if (!isCreator) return newReply(mess.owner);
    fs.readdir("./session", async function(err, files) {
        if (err) {
            console.log('Gak bisa scan direktori: ' + err);
            return newReply('Gak bisa scan direktori nih: ' + err);
        }
        let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("m.sender-key") || item.startsWith("session-") || item.startsWith("app-state")
        );
        console.log(filteredArray.length);
        let teks = `Ditemukan ${filteredArray.length} file sampah nih\n\n`;
        if (filteredArray.length == 0) return newReply(teks);
        filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`;
        });
        newReply(teks);
        await sleep(2000);
        newReply("Mau hapus file sampahnya... Tunggu yaa...");
        await filteredArray.forEach(function(file) {
            fs.unlinkSync(`./${sessionName}/${file}`);
        });
        await sleep(2000);
        newReply("Berhasil hapus semua file sampah di folder session! 🎉");
    });
}
break;;

case 'delsampah':
case 'clearsampah': {
    const getFiles = (dir) => {
        return fs.readdirSync(dir).filter(v =>
            v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") ||
            v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") ||
            v.endsWith("webp") || v.endsWith("webm")
        ).map(v => `${dir}/${v}`)
    };
    let libFiles = getFiles('./lib');
    let tempFiles = getFiles('./temp');
    let rootFiles = getFiles('.').filter(v => !v.startsWith('./'));
    let all = [...tempFiles, ...libFiles, ...rootFiles];
    let jumlahSampah = all.length;
    var teks = `${monospace("Jumlah Sampah")}\n\n`;
    teks += `Total: ${jumlahSampah} sampah\n\n`;
    teks += all.map(o => `${o}\n`).join("");
    if (jumlahSampah > 0) {
        newReply(teks);
        newReply(`Menghapus ${jumlahSampah} file sampah.`);
        newReply(`Sukses menghapus semua sampah.`);
        all.forEach(file => {
            fs.unlinkSync(file);
        });
    } else {
        newReply(teks);
        newReply(`Tidak ada file sampah untuk dihapus.`);
    }
}
break

case 'joingroup':
case 'joingc': {
    try {
        if (!isCreator) return newReply(mess.owner);
        if (!text) return newReply('Masukkan Link Grup yaa!');
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
        let result = args[0].split('https://chat.whatsapp.com/')[1];
        wbk.groupAcceptInvite(result);
        await newReply(`Sudah gabung ke grup! 🎉`);
    } catch {
        newReply('Gagal gabung ke grup, coba lagi nanti!');
    }
}
break;;

case 'outgroup':
case 'outgc': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    newReply('Selamat tinggal, semuanya 🥺');
    await wbk.groupLeave(m.chat);
}
break;;

case 'joinchannel':
case 'joinch': {
    try {
        if (!isCreator) return newReply(mess.owner);
        if (!text) return newReply('Masukkan Link saluran yaa!');
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
        let data = args[0].split('https://whatsapp.com/channel/')[1];
        const res = await wbk.newsletterMetadata("invite", data);
        await wbk.newsletterFollow(res.id);
        newReply(`Sudah gabung ke saluran! 🎉`);
    } catch {
        newReply('Gagal gabung ke saluran, coba lagi nanti!');
    }
}
break;;

case 'outchannel':
case 'outch': {
    try {
        if (!isCreator) return newReply(mess.owner);
        if (!text) return newReply('Masukkan Link saluran yaa!');
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
        let data = args[0].split('https://whatsapp.com/channel/')[1];
        const res = await wbk.newsletterMetadata("invite", data);
        await wbk.newsletterUnfollow(res.id);
        newReply(`Sudah unfollow saluran! 🎉`);
    } catch {
        newReply('Gagal unfollow saluran, coba lagi nanti!');
    }
}
break;;

case 'getsession': {
    if (!isCreator) return newReply(mess.owner);
    newReply('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
    let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
    wbk.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, {
        quoted: m
    });
}
break;;

case 'getdatabase': {
    if (!isCreator) return newReply(mess.owner);
    newReply('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
    let sesi = fs.readFileSync(`./src/${tempatDB}`);
    wbk.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: `${tempatDB}`
    }, {
        quoted: m
    });
}
break;;

case 'getdbuser': {
    if (!isCreator) return newReply(mess.owner);
    newReply('Tunggu sebentar yaa, aku lagi ambil file database usermu nih');
    let sesi = fs.readFileSync('./src/data/role/user.json');
    wbk.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'user.json'
    }, {
        quoted: m
    });
}
break;;

case 'myip':
case 'ipbot': {
    if (!isCreator) return newReply(mess.owner);
    var http = require('http');
    http.get({
        'host': 'api.ipify.org',
        'port': 80,
        'path': '/'
    }, function(resp) {
        resp.on('data', function(ip) {
            newReply("🔎 Oii, alamat IP publik aku nih: " + ip);
        })
    });
}
break;;

case 'shutdown': {
    if (!isCreator) return newReply(mess.owner);
    newReply(`Aduh, mau ${command} nih, bentar ya!`);
    await sleep(3000);
    process.exit();
}
break;;

case 'autoread': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].autoread = true;
        newReply(`Yay! Auto-read berhasil diubah ke ${q}`);
    } else if (q === 'false') {
        db.data.settings[botNumber].autoread = false;
        newReply(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
    }
}
break;;

case 'unavailable': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].online = true;
        newReply(`Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!`);
    } else if (q === 'false') {
        db.data.settings[botNumber].online = false;
        newReply(`Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎`);
    }
}
break;;

case 'autorecordtype': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].autorecordtype = true;
        newReply(`Auto-record typing berhasil diubah ke ${q}!`);
    } else if (q === 'false') {
        db.data.settings[botNumber].autorecordtype = false;
        newReply(`Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!`);
    }
}
break;;

case 'autorecord': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].autorecord = true;
        newReply(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
    } else if (q === 'false') {
        db.data.settings[botNumber].autorecord = false;
        newReply(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
    }
}
break;;

case 'autotype': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].autotype = true;
        newReply(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
    } else if (q === 'false') {
        db.data.settings[botNumber].autotype = false;
        newReply(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
    }
}
break;;

case 'autobio': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].autobio = true;
        newReply(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].autobio = false;
        newReply(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
    }
}
break;;

case 'autosticker': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].autosticker = true;
        newReply(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].autosticker = false;
        newReply(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
    }
}
break;;

case 'safesearch': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`🛡️ Contoh penggunaan:\n${prefix + command} true/false?`);
    if (q === 'true') {
        db.data.settings[botNumber].safesearch = true;
        newReply(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
    } else if (q === 'false') {
        db.data.settings[botNumber].safesearch = false;
        newReply(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten tidak aktif untuk saat ini.`);
    } else {
        newReply(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
    }
}
break;;

case 'autodl':
case 'autodownload': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].autodownload = true;
        newReply(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].autodownload = false;
        newReply(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
    }
}
break;;

case 'autoblock': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].autoblocknum = true;
        newReply(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].autoblocknum = false;
        newReply(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
    }
}
break;;

case 'onlygc':
case 'onlygroup': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].onlygc = true;
        newReply(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].onlygc = false;
        newReply(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
    }
}
break;;

case 'onlypc':
case 'onlyprivatechat': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
    if (q == 'true') {
        db.data.settings[botNumber].onlypc = true;
        newReply(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
    } else if (q == 'false') {
        db.data.settings[botNumber].onlypc = false;
        newReply(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
    }
}
break;;

case 'self': {
    if (!isCreator) return newReply(mess.owner);
    wbk.public = false;
    newReply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
}
break;;

case 'public': {
    if (!isCreator) return newReply(mess.owner);
    wbk.public = true;
    newReply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
}
break;;

case 'setwm': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
    global.packname = text.split("|")[0];
    global.author = text.split("|")[1];
    newReply(`Yeay! Exif berhasil diubah! 🎉\n\n · Packname: ${global.packname}\n · Author: ${global.author}`);
}
break;;

case 'setprefix': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
    global.prefa = text;
    newReply(`Prefix berhasil diubah menjadi ${text} ✨`);
}
break;;

case 'setautoblock': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
    global.autoblocknumber = text;
    newReply(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
}
break;;

case 'setantiforeign': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
    global.antiforeignnumber = text;
    newReply(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
}
break;;

case 'block':
case 'ban': {
    if (!isCreator) return newReply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await wbk.updateBlockStatus(users, 'block')
    await newReply(`Done`)
}
break;;

case 'unblock':
case 'unban': {
    if (!isCreator) return newReply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await wbk.updateBlockStatus(users, 'unblock')
    await newReply(`Done`)
}
break;;

case 'setcase': {
    if (!isCreator) return newReply(mess.owner);
    const inputDir = path.join(__dirname, 'lib', 'caseAll');
    const outputFile = path.join(__dirname, 'lib/finalCase', 'finalcase.js');
    const caseFilePath = path.join(__dirname, 'case.js'); // Path file Line.js
    const mergeFiles = async (inputDir, outputFile) => {
        try {
            const files = await fs.promises.readdir(inputDir);
            const inputFiles = files.filter(file => file.endsWith('.js')).map(file => path.join(inputDir, file));
            const fileContents = await Promise.all(inputFiles.map(async (file) => {
                const content = await fs.promises.readFile(file, 'utf8');
                return `// ${path.basename(file)}\n${content}`; // Menambahkan nama file sebagai komentar
            }));
            const mergedContent = fileContents.join('\n\n'); // Menggabungkan dengan newline ganda
            await fs.promises.writeFile(outputFile, mergedContent);
        } catch (error) {
            console.error('Terjadi kesalahan saat menggabungkan file:', error);
            newReply('Terjadi kesalahan saat menggabungkan file.');
        }
    };
    const clearCases = async () => {
        try {
            let data = fs.readFileSync(caseFilePath, 'utf8');
            const startMarker = '// ============= CASE HERE =============\n';
            const endMarker = '\n// ============= CASE END ==============';
            const startIndex = data.indexOf(startMarker);
            const endIndex = data.indexOf(endMarker);
            if (startIndex === -1 || endIndex === -1) {
                return newReply('Pembatas tidak ditemukan di case.js.');
            }
            const newData = data.substring(0, startIndex + startMarker.length) + endMarker + data.substring(endIndex + endMarker.length);
            fs.writeFileSync(caseFilePath, newData);
        } catch (error) {
            console.error('Terjadi kesalahan saat menghapus case:', error);
            newReply('Terjadi kesalahan saat menghapus konten.');
        }
    };
    const addCases = async () => {
        try {
            const finalCaseContent = fs.readFileSync(outputFile, 'utf8');
            let lineFileContent = fs.readFileSync(caseFilePath, 'utf8');
            const startMarker = '// ============= CASE HERE =============\n';
            const endMarker = '\n// ============= CASE END ==============';
            const startIndex = lineFileContent.indexOf(startMarker);
            const endIndex = lineFileContent.indexOf(endMarker);
            if (startIndex === -1 || endIndex === -1) {
                return newReply('Pembatas tidak ditemukan di case.js.');
            }
            const newLineFileContent = lineFileContent.substring(0, startIndex + startMarker.length) + finalCaseContent + lineFileContent.substring(endIndex);
            fs.writeFileSync(caseFilePath, newLineFileContent);
        } catch (error) {
            console.error('Terjadi kesalahan saat menambahkan case:', error);
            newReply('Terjadi kesalahan saat menambahkan case.');
        }
    };
    (async () => {
        await mergeFiles(inputDir, outputFile);
        await clearCases();
        await addCases();
        await newReply(`✅ ${litespace("CASE SELESAI DI REFRESH.")}`);
    })();
}
break;

case 'getcase': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
    try {
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./case.js", "utf-8");
            const caseBlock = fileContent.split(`case '${cases}'`)[1];
            if (!caseBlock) throw new Error('Case tidak ditemukan');
            return `case '${cases}'` + caseBlock.split("break")[0] + "break";
        }
        const caseContent = getCase(text);
        const caseName = text.replace(/[^a-zA-Z0-9]/g, '_');
        const txtFilePath = path.join(__dirname, 'temp', `${caseName}.txt`);
        const result = `/*
CASE INI DIBUAT OLEH WBK
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== CASE: ${caseName.toUpperCase()} =====

` + caseContent + `\n\n// ===== END CASE =====\n// ©WBK`;
        fs.writeFileSync(txtFilePath, result, 'utf-8');
        const caption = `Berikut adalah hasil case dari ${litespace(`"${caseName}"`)}`;
        await newReply(result)
        await sendFile(txtFilePath, caseName, caption);
        fs.unlinkSync(txtFilePath);
    } catch (err) {
        newReply(`Case '${text}' tidak ditemukan! 🚫`);
    }
}
break;

case 'getcase2': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'caseAll');
    const files = await readDirectory(folderPath);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    if (args.length < 1) {
        return newReply(`Harap masukkan nama case yang ingin dicari! 🧐\nContoh: !getcase <nama_case>`);
    }
    const caseName = args.join(' ');
    let caseFound = false;
    let caseResult = '';
    for (const file of jsFiles) {
        const filePath = path.join(folderPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const cases = fileContent.match(/case '([^']+)'/g);
        if (cases) {
            for (const c of cases) {
                const currentCaseName = c.replace(/case '([^']+)'/, '$1');
                if (currentCaseName.toLowerCase() === caseName.toLowerCase()) {
                    caseFound = true;
                    const caseBlock = fileContent.split(`case '${currentCaseName}'`)[1];
                    if (caseBlock) {
                        caseResult = `/*
CASE INI DIBUAT OLEH WBK
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== CASE: ${currentCaseName.toUpperCase()} =====

case '${currentCaseName}'` + caseBlock.split('break')[0] + 'break\n\n// ===== END CASE =====\n// ©WBK';
                        break;
                    }
                }
            }
        }
        if (caseFound) break;
    }
    if (!caseFound) {
        return newReply(`Case '${caseName}' tidak ditemukan di kategori manapun! 🚫`);
    }
    const txtFilePath = path.join(__dirname, 'temp', `${caseName}.txt`);
    fs.writeFileSync(txtFilePath, caseResult, 'utf-8');
    const caption = `Berikut adalah hasil case dari ${litespace(`"${caseName}"`)}`;
    await sendFile(txtFilePath, caseName, caption);
    fs.unlinkSync(txtFilePath);
}
break;

case 'sendcase': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
    const args = text.split(' ');
    const caseName = args[0];
    const targetNumber = args[1];
    if (!caseName || !targetNumber) {
        return newReply('Format yang benar: !sendcase <nama_case> <no_tujuan>');
    }
    try {
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./case.js", "utf-8");
            const regex = new RegExp(`case\\s+'${cases}'[\\s\\S]*?\\n\\}`, 'g');
            const match = fileContent.match(regex);
            if (!match) throw new Error('Case tidak ditemukan');
            return `/*
CASE INI DIBUAT OLEH WBK
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== CASE: ${cases.toUpperCase()} =====

${match[0]}
break;

// ===== END CASE =====
// ©WBK`;
        };
        const caseContent = getCase(caseName);
        const sanitizedCaseName = caseName.replace(/[^a-zA-Z0-9]/g, '_');
        const txtFilePath = path.join(__dirname, 'temp', `${sanitizedCaseName}.txt`);
        fs.writeFileSync(txtFilePath, caseContent, 'utf-8');
        const caption = `Halo kak, kamu mendapat kiriman case *${sanitizedCaseName}* dari owner paling baik sedunia👑`;
        await wbk.sendMessage(`${targetNumber}@s.whatsapp.net`, {
            document: {
                url: txtFilePath
            },
            fileName: `${sanitizedCaseName}.txt`,
            caption: caption,
            mimetype: 'text/plain',
            contextInfo: {
                mentionedJid: [`${targetNumber}@s.whatsapp.net`],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: "CASE " + sanitizedCaseName.toUpperCase(),
                    body: "Silahkan dipakai bukan diperjualbelikan!!!",
                    previewType: "PHOTO",
                    thumbnail: thumb,
                    sourceUrl: website
                }
            }
        }, {
            quoted: fbot
        });
        newReply(`Case '${caseName}' sudah terkirim👑`);
        fs.unlinkSync(txtFilePath);
    } catch (err) {
        console.error(err);
        newReply(`Case '${caseName}' tidak ditemukan! 🚫`);
    }
}
break;

case 'sendcasepaste': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
    const args = text.split(' ');
    const caseName = args[0];
    const targetNumber = args[1];
    if (!caseName || !targetNumber) {
        return newReply('Format yang benar: !sendcase <nama_case> <no_tujuan>');
    }
    try {
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./case.js", "utf-8");
            const regex = new RegExp(`case\\s+'${cases}'[\\s\\S]*?\\n\\}`, 'g');
            const match = fileContent.match(regex);
            if (!match) throw new Error('Case tidak ditemukan');
            return `/*
CASE INI DIBUAT OLEH WBK
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== CASE: ${cases.toUpperCase()} =====

${match[0]}
break;

// ===== END CASE =====
// ©WBK`;
        };
        const caseContent = getCase(caseName);
        const title = "CASE " + caseName.toUpperCase();
        const result = await createPastebin(title, caseContent);
        if (result.status === 0) {
            const caption = `Halo kak, kamu mendapat kiriman case *${caseName}* dari owner paling baik sedunia👑\n\nLink Pastebin: ${result.original}\nLink Raw Pastebin: ${result.raw}`;
            await wbk.sendMessage(`${targetNumber}@s.whatsapp.net`, {
                text: caption,
                contextInfo: {
                    mentionedJid: [`${targetNumber}@s.whatsapp.net`],
                    forwardingScore: 999999,
                    isForwarded: true,
                    externalAdReply: {
                        showAdAttribution: true,
                        title: "CASE " + caseName.toUpperCase(),
                        body: "Silahkan dipakai bukan diperjualbelikan!!!",
                        previewType: "PHOTO",
                        thumbnail: thumb,
                        sourceUrl: website
                    }
                }
            }, {
                quoted: fbot
            });
            newReply(`Case '${caseName}' sudah terkirim👑`);
        } else {
            newReply(`Gagal mengupload case '${caseName}' ke Pastebin! 🚫`);
        }
    } catch (err) {
        console.error(err);
        newReply(`Case '${caseName}' tidak ditemukan! 🚫`);
    }
}
break;

case 'addcase': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'caseAll');
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca folder:', err);
            return newReply(`Terjadi kesalahan saat membaca folder: ${err.message}`);
        }
        const jsFiles = files
            .filter(file => file.endsWith('.js'))
            .map(file => file.slice(0, -3));
        if (args.length < 1) {
            const fileList = jsFiles.map((file, index) => `${index + 1}. ${file}`).join('\n');
            return newReply(`Contoh: ${prefix + command} <urutan_kategori> <case_baru>\n\nDaftar kategori yang tersedia: \n\n${fileList}`);
        }
        const index = parseInt(args[0], 10) - 1;
        if (isNaN(index) || index < 0 || index >= jsFiles.length) {
            const fileList = jsFiles.map((file, index) => `${index + 1}. ${file}`).join('\n');
            return newReply(`Kategori ke "${args[0]}" tidak valid.\nGunakan perintah ${prefix + command} <kategori> <case_baru>\n\nDaftar kategori yang tersedia: \n\n${fileList}`);
        }
        const namaFile = path.join(folderPath, `${jsFiles[index]}.js`);
        const caseBaru = `${args.slice(1).join(' ')}\n`;
        const tambahCase = (data, caseBaru) => {
            const breakRegex = /(break|break;|break;;)\s*/g;
            const matches = [...data.matchAll(breakRegex)];
            if (matches.length > 0) {
                const posisiBreakTerakhir = matches[matches.length - 1].index;
                const breakLength = matches[matches.length - 1][0].length;
                return {
                    success: true,
                    kodeBaruLengkap: data.slice(0, posisiBreakTerakhir + breakLength) + '\n' + caseBaru + data.slice(posisiBreakTerakhir + breakLength)
                };
            }
            return {
                success: false,
                message: "Tidak dapat menemukan kata 'break;' atau 'break' di dalam file!"
            };
        };
        fs.readFile(namaFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Terjadi kesalahan saat membaca file:', err);
                return newReply(`Terjadi kesalahan saat membaca file: ${err.message}`);
            }
            const result = tambahCase(data, caseBaru);
            if (result.success) {
                const formattedCode = beautify(result.kodeBaruLengkap, {
                    indent_size: 4,
                    space_in_empty_paren: true
                });
                fs.writeFile(namaFile, formattedCode, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return newReply(`Terjadi kesalahan saat menulis file: ${err.message}`);
                    }
                    const formattedCaseBaru = beautify(caseBaru, {
                        indent_size: 4,
                        space_in_empty_paren: true
                    });
                    return newReply(`Sukses menambahkan case baru!\n\n${formattedCaseBaru}`);
                });
            } else {
                console.error(result.message);
                return newReply(result.message);
            }
        });
    });
}
break;

case 'getfilecase': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'caseAll');
    if (args.length < 1) {
        const files = await readDirectory(folderPath);
        const jsFiles = files.filter(file => file.endsWith('.js'));
        if (jsFiles.length === 0) {
            return newReply(`Tidak ada file case yang ditemukan di folder 'case'! 🚫`);
        }
        const fileList = jsFiles.map((file, index) => `${index + 1}. ${file.replace('.js', '')}`).join('\n');
        return newReply(`Harap masukkan nama file (hanya angka)! 🧐\n\nDaftar file yang tersedia:\n\n${fileList}`);
    }
    const index = parseInt(args[0], 10) - 1;
    if (isNaN(index) || index < 0) return newReply(`File '${args[0]}' tidak valid. Harap masukkan angka yang sesuai! 🚫`);
    const files = await readDirectory(folderPath);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    if (index >= jsFiles.length) return newReply(`File ke '${args[0]}' tidak ditemukan! 🚫`);
    const fileName = jsFiles[index].replace('.js', '');
    const filePath = path.join(folderPath, `${fileName}.js`);
    if (args.length === 2 && args[1] === '--sendall') {
        jsFiles.forEach(file => {
            const filePath = path.join(folderPath, file);
            const caption = `Berikut adalah hasil function dari ${litespace(`"${file.replace('.js', '')}"`)}`;
            sendFile(filePath, file.replace('.js', ''), caption);
        });
    } else {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error('File tidak ditemukan:', err);
                return newReply(`File '${fileName}.js' tidak ditemukan! 🚫`);
            }
            const caption = `Berikut adalah hasil case dari ${litespace(`"${fileName}"`)}`;
            sendFile(filePath, fileName, caption);
        });
    }
}
break;

case 'getfunc': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'scrape');
    if (args.length < 1) {
        return newReply(`Harap masukkan nama function yang ingin dicari! 🧐\nContoh: !getfunc <nama_function>`);
    }
    const functionName = args[0];
    const categories = await readDirectory(folderPath);
    let matchingFilePath = null;
    for (const category of categories) {
        const categoryPath = path.join(folderPath, category);
        const files = await readDirectory(categoryPath);
        const matchingFiles = files.filter(file => file.replace('.js', '') === functionName);
        if (matchingFiles.length > 0) {
            matchingFilePath = path.join(categoryPath, matchingFiles[0]);
            break;
        }
    }
    if (!matchingFilePath) {
        return newReply(`Function '${functionName}' tidak ditemukan! 🚫`);
    }
    const functionContent = fs.readFileSync(matchingFilePath, 'utf-8');
    const result = `/*
FUNCTION/SCRAPE INI DISUSUN OLEH WBK 
DI AMBIL DARI BERBAGAI SUMBER
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== FUNCTION: ${functionName.toUpperCase()} =====

${functionContent}

// ===== END FUNCTION =====
// ©WBK`;

    const txtFilePath = path.join(__dirname, 'temp', `${functionName}.txt`);
    fs.writeFileSync(txtFilePath, result, 'utf-8');
    await newReply(result)
    const caption = `Berikut adalah hasil function dari ${litespace(`"${functionName}"`)}`;
    await sendFile(txtFilePath, functionName, caption);
    fs.unlinkSync(txtFilePath); // Menghapus file setelah dikirim
}
break;

case 'sendfunc': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'scrape');
    if (args.length < 1) {
        return newReply(`Harap masukkan nama function yang ingin dicari! 🧐\nContoh: !sendfunc <nama_function>`);
    }
    const functionName = args[0];
    const targetNumber = args[1];
    const categories = await readDirectory(folderPath);
    let matchingFilePath = null;
    for (const category of categories) {
        const categoryPath = path.join(folderPath, category);
        const files = await readDirectory(categoryPath);
        const matchingFiles = files.filter(file => file.replace('.js', '') === functionName);
        if (matchingFiles.length > 0) {
            matchingFilePath = path.join(categoryPath, matchingFiles[0]);
            break;
        }
    }
    if (!matchingFilePath) {
        return newReply(`Function '${functionName}' tidak ditemukan! 🚫`);
    }
    const functionContent = fs.readFileSync(matchingFilePath, 'utf-8');
    const result = `/*
FUNCTION/SCRAPE INI DISUSUN OLEH WBK 
DI AMBIL DARI BERBAGAI SUMBER
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== FUNCTION: ${functionName.toUpperCase()} =====

${functionContent}

// ===== END FUNCTION =====
// ©WBK`;
    const sanitizedFunctionName = functionName.replace(/[^a-zA-Z0-9]/g, '_');
    const txtFilePath = path.join(__dirname, 'temp', `${sanitizedFunctionName}.txt`);
    fs.writeFileSync(txtFilePath, result, 'utf-8');
    const caption = `Halo kak, kamu mendapat kiriman function *${sanitizedFunctionName}* dari owner paling baik sedunia👑`;
    await wbk.sendMessage(`${targetNumber}@s.whatsapp.net`, {
        document: {
            url: txtFilePath
        },
        fileName: `${sanitizedFunctionName}.txt`,
        caption: caption,
        mimetype: 'text/plain',
        contextInfo: {
            mentionedJid: [`${targetNumber}@s.whatsapp.net`],
            forwardingScore: 999999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "FUNCTION " + sanitizedFunctionName.toUpperCase(),
                body: "Silahkan dipakai bukan diperjualbelikan!!!",
                previewType: "PHOTO",
                thumbnail: thumb,
                sourceUrl: website
            }
        }
    }, {
        quoted: fbot
    });
    newReply(`Function '${functionName}' sudah terkirim👑`);
    fs.unlinkSync(txtFilePath);
}
break;

case 'sendfuncpaste': {
    if (!isCreator) return newReply(mess.owner);
    const folderPath = path.join(__dirname, 'lib', 'scrape');
    if (args.length < 1) {
        return newReply(`Harap masukkan nama function yang ingin dicari! 🧐\nContoh: !sendfunc <nama_function>`);
    }
    const functionName = args[0];
    const targetNumber = args[1];
    const categories = await readDirectory(folderPath);
    let matchingFilePath = null;
    for (const category of categories) {
        const categoryPath = path.join(folderPath, category);
        const files = await readDirectory(categoryPath);
        const matchingFiles = files.filter(file => file.replace('.js', '') === functionName);
        if (matchingFiles.length > 0) {
            matchingFilePath = path.join(categoryPath, matchingFiles[0]);
            break;
        }
    }
    if (!matchingFilePath) {
        return newReply(`Function '${functionName}' tidak ditemukan! 🚫`);
    }
    const functionContent = fs.readFileSync(matchingFilePath, 'utf-8');
    const result = `/*
FUNCTION/SCRAPE INI DISUSUN OLEH WBK 
DI AMBIL DARI BERBAGAI SUMBER
DI LARANG UNTUK DIPERJUALBELIKAN
*/

// ===== FUNCTION: ${functionName.toUpperCase()} =====

${functionContent}

// ===== END FUNCTION =====
// ©WBK`;
    const title = "FUNCTION " + functionName.toUpperCase();
    const pasteResult = await createPastebin(title, result);
    if (pasteResult.status === 0) {
        const caption = `Halo kak, kamu mendapat kiriman function *${functionName}* dari owner paling baik sedunia👑\n\nLink Pastebin: ${pasteResult.original}\nLink Raw Pastebin: ${pasteResult.raw}`;
        await wbk.sendMessage(`${targetNumber}@s.whatsapp.net`, {
            text: caption,
            contextInfo: {
                mentionedJid: [`${targetNumber}@s.whatsapp.net`],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: "FUNCTION " + functionName.toUpperCase(),
                    body: "Silahkan dipakai bukan diperjualbelikan!!!",
                    previewType: "PHOTO",
                    thumbnail: thumb,
                    sourceUrl: website
                }
            }
        }, {
            quoted: fbot
        });
        newReply(`Function '${functionName}' sudah terkirim👑`);
    } else {
        newReply(`Gagal mengupload function '${functionName}' ke Pastebin! 🚫`);
    }
}
break;

case 'speedtest': case 'speed': {
    if (!isCreator) return newReply(mess.owner);
    let cp = require('child_process');
    let {
        promisify
    } = require('util');
    let exec = promisify(cp.exec).bind(cp);
    let o
    try {
        o = await exec('python3 speed.py');
    } catch (e) {
        o = e
    } finally {
        let {
            stdout,
            stderr
        } = o
        if (stdout.trim()) newReply(stdout);
        if (stderr.trim()) newReply(stderr);
    }
}
break;;

case 'autoswview':
case 'autostatusview': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        autoswview = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        autoswview = false
        newReply(`${command} is disabled`)
    }
}
break;;

case 'anticall': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply('true/false?')
    if (args[0] === 'true') {
        anticall = true
        newReply(`${command} is enabled`)
    } else if (args[0] === 'false') {
        anticall = false
        newReply(`${command} is disabled`)
    }
}
break;;

case 'addvideo': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Whats the video name?')
    if (videonye.includes(q)) return newReply("The name is already in use")
    let delb = await wbk.downloadAndSaveMediaMessage(quoted)
    videonye.push(q)
    await fsx.copy(delb, `./media/${q}.mp4`)
    fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
    fs.unlinkSync(delb)
    newReply(mess.done);
}
break;;

case 'delvideo': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Enter the video name')
    if (!videonye.includes(q)) return newReply("The name does not exist in the database")
    let wanu = videonye.indexOf(q)
    videonye.splice(wanu, 1)
    fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
    fs.unlinkSync(`./media/${q}.mp4`)
    newReply(mess.done);
}
break;;

case 'listvideo': {
    let teks = '┌──⭓「 *Video List* 」\n│\n'
    for (let i of videonye) {
        teks += `│ · ${i}\n`
    }
    teks += `│\n└────────────⭓\n\n*Totally there are : ${videonye.length}*`
    newReply(teks)
}
break;;

case 'addimage': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Whats the image name?')
    if (imagenye.includes(q)) return newReply("The name is already in use")
    let delb = await wbk.downloadAndSaveMediaMessage(quoted)
    imagenye.push(q)
    await fsx.copy(delb, `./media/${q}.jpg`)
    fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
    fs.unlinkSync(delb)
    newReply(mess.done);
}
break;;

case 'delimage': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Enter the image name')
    if (!imagenye.includes(q)) return newReply("The name does not exist in the database")
    let wanu = imagenye.indexOf(q)
    imagenye.splice(wanu, 1)
    fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
    fs.unlinkSync(`./media/${q}.jpg`)
    newReply(mess.done);
}
break;;

case 'listimage': {
    let teks = '┌──⭓「 *Image List* 」\n│\n'
    for (let i of imagenye) {
        teks += `│ · ${i}\n`
    }
    teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenye.length}*`
    newReply(teks)
}
break;;

case 'addsticker': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Whats the sticker name?')
    if (setiker.includes(q)) return newReply("The name is already in use")
    let delb = await wbk.downloadAndSaveMediaMessage(quoted)
    setiker.push(q)
    await fsx.copy(delb, `./media/${q}.webp`)
    fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
    fs.unlinkSync(delb)
    newReply(mess.done);
}
break;;

case 'delsticker': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Enter the sticker name')
    if (!setiker.includes(q)) return newReply("The name does not exist in the database")
    let wanu = setiker.indexOf(q)
    setiker.splice(wanu, 1)
    fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
    fs.unlinkSync(`./media/${q}.webp`)
    newReply(mess.done);
}
break;;

case 'liststicker': {
    let teks = '┌──⭓「 *Sticker List* 」\n│\n'
    for (let i of setiker) {
        teks += `│ · ${i}\n`
    }
    teks += `│\n└────────────⭓\n\n*Totally there are : ${setiker.length}*`
    newReply(teks)
}
break;;

case 'addvn': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Whats the audio name?')
    if (audionye.includes(q)) return newReply("The name is already in use")
    let delb = await wbk.downloadAndSaveMediaMessage(quoted)
    audionye.push(q)
    await fsx.copy(delb, `./media/${q}.mp3`)
    fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye))
    fs.unlinkSync(delb)
    newReply(mess.done);
}
break;;

case 'delvn': {
    if (!isCreator) return
    if (args.length < 1) return newReply('Enter the vn name')
    if (!audionye.includes(q)) return newReply("The name does not exist in the database")
    let wanu = audionye.indexOf(q)
    audionye.splice(wanu, 1)
    fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye))
    fs.unlinkSync(`./media/${q}.mp3`)
    newReply(mess.done);
}
break;;

case 'listvn': {
    let teks = '┌──⭓「 *VN List* 」\n│\n'
    for (let i of audionye) {
        teks += `│ · ${i}\n`
    }
    teks += `│\n└────────────⭓\n\n*Totally there are : ${audionye.length}*`
    newReply(teks)
}
break;;

case 'q':
case 'quoted': {
    if (!isCreator) return newReply(mess.owner)
    if (!quoted) return newReply(`Mohon reply pesan yang ingin di quoted ya kak! 🙏`);
    let gwm = await wbk.serializeM(await m.getQuotedObj());
    if (!gwm.quoted) return newReply(mess.error);
    try {
        await gwm.quoted.copyNForward(m.chat, true);
    } catch (err) {
        console.log(err);
        newReply(mess.error);
    }
};
break;

case 'setppbot': {
    if (!isCreator) return newReply(mess.owner)
    if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
    let media = await wbk.downloadAndSaveMediaMessage(quoted)
    await wbk.updateProfilePicture(botNumber, {
        url: media
    }).catch((err) => fs.unlinkSync(media))
    newReply(mess.done)
}
break;;

case 'deleteppbot':
case 'delppbot': {
    if (!isCreator) return newReply(mess.owner);
    await wbk.removeProfilePicture(wbk.user.id)
    newReply(mess.done)
}
break;;

case 'setbiobot': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Where is the text?\nExample: ${prefix + command} Mora AI`)
    await wbk.updateProfileStatus(text)
    newReply(mess.done)
}
break;;

case 'listpc': {
    if (!isCreator) return newReply(mess.owner);
    let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
    let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
    for (let i of anu) {
        let nama = store.messages[i].array[0].pushName;
        teks += `*Name :* ${nama}\n`;
        teks += `*User :* @${i.split('@')[0]}\n`;
        teks += `*Chat :* https://wa.me/${i.split('@')[0]}\n\n`;
        teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    }
    newReply(teks)
}
break;;

case 'listgc': {
    if (!isCreator) return newReply(mess.owner);
    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
    let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
    for (let i of anu) {
        let metadata = await wbk.groupMetadata(i);
        teks += `*Name :* ${metadata.subject}\n`;
        teks += `*Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`;
        teks += `*ID :* ${metadata.id}\n`;
        teks += `*Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`;
        teks += `*Member :* ${metadata.participants.length}\n\n`;
        teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    }
    newReply(teks)
}
break;;

case 'creategc': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) {
        return newReply(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
    }
    await reactionMessage('⏱️');
    let cret = await wbk.groupCreate(text, []);
    let response = await wbk.groupInviteCode(cret.id);
    let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
    await reactionMessage('✅');
    wbk.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: saluranName,
                newsletterJid: saluran,
            },
            externalAdReply: {
                showAdAttribution: true,
                title: cret.subject,
                body: `Undangan chat grup`,
                thumbnailUrl: thumbUrl,
                sourceUrl: `https://chat.whatsapp.com/${response}`,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
}
break;;

case 'setpppanjang': {
    if (!isCreator) return reply('❌ Lu bukan owner, gabisa pake perintah ini!');
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!/image/.test(mime)) return reply('❌ Kirim atau reply gambar buat dijadiin foto profil!');
    newReplyBot('⏳ Lagi update foto profil...');
    try {
        let media = await q.download();
        await wbk.updateProfilePicture(wbk.user.id, media);
        newReplyBot('✅ Berhasil update foto profil!');
    } catch (err) {
        console.error(err);
        newReplyBot('❌ Gagal update foto profil, coba lagi nanti!');
    }
}
break;

case 'botsettings': {
    if (!isCreator) return newReply(mess.owner);
    const settings = db.data.settings[botNumber];
    if (!settings) {
        return newReply(`Pengaturan tidak ditemukan untuk bot ini.`);
    }
    const formatBoolean = (value) => value ? 'Aktif' : 'Tidak Aktif';
    let message = `*Pengaturan Bot untuk ${botNumber}*\n\n` +
        `◦ Total Hit: ${settings.totalhit}\n` +
        `◦ Total Error: ${settings.totalError}\n` +
        `◦ Online: ${formatBoolean(settings.online)}\n` +
        `◦ Safe Search: ${formatBoolean(settings.safesearch)}\n` +
        `◦ Auto Sticker: ${formatBoolean(settings.autosticker)}\n` +
        `◦ Auto Download: ${formatBoolean(settings.autodownload)}\n` +
        `◦ Auto Bio: ${formatBoolean(settings.autobio)}\n` +
        `◦ Auto Read: ${formatBoolean(settings.autoread)}\n` +
        `◦ Auto Record Type: ${formatBoolean(settings.autorecordtype)}\n` +
        `◦ Auto Record: ${formatBoolean(settings.autorecord)}\n` +
        `◦ Auto Type: ${formatBoolean(settings.autotype)}\n` +
        `◦ Auto Block Number: ${formatBoolean(settings.autoblocknum)}\n` +
        `◦ Only GC: ${formatBoolean(settings.onlygc)}\n` +
        `◦ Only PC: ${formatBoolean(settings.onlypc)}\n`;
    await newReply(message);
}
break;


// ppobatlantic.js
case 'deposit': {
    if (m.isGroup) return newReply("Deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender]) {
        db.data.users[m.sender] = {
            status_deposit: false,
            atlantic: null
        };
    }
    if (typeof db.data.users[m.sender].status_deposit === "undefined") {
        db.data.users[m.sender].status_deposit = false;
    }
    if (db.data.users[m.sender].status_deposit === true) {
        return newReply("Masih ada transaksi yang belum diselesaikan, ketik *.bataldeposit* untuk membatalkan transaksi sebelumnya!");
    }
    let teks = "Minimal deposit adalah Rp500. Contoh: " + prefix + command + " 500";
    if (!text) return newReply(teks);
    let input = text.split(",");
    let amount = input[0] ? parseInt(input[0].trim()) : null;
    if (!amount || amount < 500) {
        return newReply("Minimal deposit adalah Rp500. Contoh: " + prefix + command + " 500");
    }
    const feeAdmin = Math.floor(Math.random() * (200 - 50 + 1)) + 50; 
    const totalDeposit = amount + feeAdmin;
    const reffId = require('crypto').randomBytes(7).toString('hex').toUpperCase();
    const type = 'ewallet';
    const metode = 'qrisfast';
    let qrFilePath;
    try {
        const depositResponse = await atlaDeposit(reffId, totalDeposit, type, metode);
        const qrString = depositResponse.data.qr_string;
        qrFilePath = `./temp/qr_${Date.now()}.png`;
        await QRCode.toFile(qrFilePath, qrString, {
            errorCorrectionLevel: 'H',
            type: 'png',
            quality: 0.92,
            margin: 1
        });
        const qrImageUrl = await toUrlUpload(qrFilePath);
        const paymentDetails = `
📄 ${litespace("INFORMASI PEMBAYARAN")}

 *• 🆔 ID :* ${depositResponse.data.id}
 *• 🆔 Reff ID :* ${depositResponse.data.reff_id}
 *• 💸 Deposit :* Rp${await toRupiah(amount)}
 *• 💸 Biaya Admin :* Rp${await toRupiah(feeAdmin)}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(totalDeposit)}
 *• ⏰ Dibuat :* ${depositResponse.data.created_at}
 *• ⏰ Kadaluarsa :* ${depositResponse.data.expired_at}

📌 ${litespace("Catatan Penting:")}
> *Pembayaran melalui QRIS hanya berlaku selama 1 Jam.*

🔔 ${litespace("Cara Pembayaran:")}:
> Screenshot Qris diatas lalu buka aplikasi e-Wallet ataupun m-Banking dan scan Qris tersebut.

🔔 ${litespace("Cara Membatalkan:")}:
> Ketik .bataldeposit jika Anda ingin membatalkan transaksi ini.`;
        const message = await wbk.sendMessage(m.chat, {
            product: {
                productImage: { url: qrImageUrl },
                productImageCount: 1,
                title: `DEPOSIT`,
                description: paymentDetails,
                priceAmount1000: totalDeposit * 1000,
                currencyCode: "IDR",
                retailerId: "100000",
                url: `https://wa.me/${botNumber}`,
            },
            businessOwnerJid: m.sender,
            caption: paymentDetails,
            title: `Silahkan Scan Qris Diatas Ya Kak✨`,
            footer: wm,
            media: true,
            viewOnce: true,
            shop: "WA",
            id: "689739h2dgshG",
            ephemeralExpiration: m.expiration
        }, { quoted: m });
        db.data.users[m.sender].status_deposit = true;
        db.data.users[m.sender].atlantic = {
            msg: message,
            chat: m.sender,
            idDeposit: depositResponse.data.id,
            amount: depositResponse.data.nominal.toString(),
            exp: function() {
                setTimeout(async () => {
                    if (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].atlantic && db.data.users[m.sender].atlantic.amount) {
                        await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { delete: db.data.users[m.sender].atlantic.msg.key });
                        await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: m });
                        db.data.users[m.sender].status_deposit = false;
                        delete db.data.users[m.sender].atlantic;
                    }
                }, 3600000); // 1 jam
            }
        };
        await db.data.users[m.sender].atlantic.exp();
        const paymentSuccess = `
📄 ${litespace("PEMBAYARAN BERHASIL")}

 *• 🆔 ID :* ${depositResponse.data.id}
 *• 🆔 Reff ID :* ${depositResponse.data.reff_id}
 *• 💸 Deposit :* Rp${await toRupiah(amount)}
 *• 💸 Biaya Admin :* Rp${await toRupiah(feeAdmin)}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(totalDeposit)}
 *• ⏰ Sukses :*${time}`;
        const intervalId = setInterval(async () => {
            try {
                const statusResponse = await atlaDepositStatus(depositResponse.data.id);
                if (statusResponse.data.status === 'success') {
                    await wbk.sendMessage(m.chat, { text: paymentSuccess });
                    await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { delete: db.data.users[m.sender].atlantic.msg.key });
                    db.data.users[m.sender].status_deposit = false;
                    delete db.data.users[m.sender].atlantic;
                    clearInterval(intervalId);
                } else if (statusResponse.data.status === 'pending') {
                }
            } catch (error) {
                console.error('Error saat mengecek status deposit:', error);
                await newReply("Terjadi kesalahan saat memeriksa status deposit.");
            }
        }, 5000); // Cek status setiap 5 detik
        setTimeout(() => {
            clearInterval(intervalId);
            db.data.users[m.sender].status_deposit = false;
            delete db.data.users[m.sender].atlantic;
        }, 3600000); // 1 jam
    } catch (error) {
        console.error('Error saat membuat deposit:', error);
        return newReply("Terjadi kesalahan saat memproses deposit.");
    } finally {
        if (fs.existsSync(qrFilePath)) {
            fs.unlinkSync(qrFilePath);
        }
    }
}
break;
        
case 'bataldeposit': {
    if (m.isGroup) return newReply("Pembatalan deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender] || !db.data.users[m.sender].status_deposit) {
        return newReply("Anda tidak memiliki transaksi deposit yang sedang berlangsung.");
    }
    const atlantic = db.data.users[m.sender].atlantic;
    if (!atlantic || !atlantic.chat || !atlantic.msg) {
        return newReply("Transaksi deposit tidak valid atau sudah dibatalkan.");
    }
    try {
        const cancelResponse = await atlaDepositCancel(atlantic.idDeposit);
        if (cancelResponse.status) {
            db.data.users[m.sender].status_deposit = false;
            delete db.data.users[m.sender].atlantic;
            if (atlantic.msg.key) {
                await wbk.sendMessage(atlantic.chat, {
                    delete: atlantic.msg.key
                });
            }
            return newReply("Sukses membatalkan transaksi deposit.");
        } else {
            return newReply("Gagal membatalkan transaksi deposit. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat membatalkan deposit:', error);
        return newReply(`Terjadi kesalahan saat membatalkan deposit: ${error.message}`);
    }
}
break;

case 'order': {
    const args = text.split(" ");
    if (args.length < 2) return newReply(`*Contoh Penggunaan:*\n${prefix}order <code> <target>\n\nContoh: ${prefix}order ISAK45 08123456789`);
    const code = args[0];
    const target = args[1];
    await reactionMessage('📦');
    function generateReffId() {
        const prefix = 'WBK-';
        const length = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        return prefix + randomString;
    }
    try {
        const reffId = generateReffId();
        const orderResponse = await atlaOrder(code, reffId, target);
        const originalPrice = orderResponse.data.price;
        const markupPrice = originalPrice * 1.025;
        const roundedPrice = Math.round(markupPrice); 
        const formattedPrice = await toRupiah(roundedPrice);
        console.log(orderResponse);
        const id = orderResponse.data.id;
        const type = 'prabayar';
        const checkOrderStatus = async (id, type) => {
            let statusResponse;
            let attempts = 0;
            const maxAttempts = 10;
            const delay = 2000;
            while (attempts < maxAttempts) {
                statusResponse = await atlaOrderStatus(apiKey, id, type);
                console.log(statusResponse);
                if (statusResponse.status === 'success') {
                    return statusResponse;
                }
                attempts++;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
            return statusResponse;
        };
        const finalStatusResponse = await checkOrderStatus(id, type);
        const buyDetails = `
📄 ${litespace("INFORMASI PEMBELIAN")}

 *• 📃 Order :* ${orderResponse.data.layanan}
 *• 💬 Status :* ${finalStatusResponse.status === 'success' ? 'Transaksi Berhasil' : 'Transaksi Pending'}
 *• 💸 Harga :* Rp${formattedPrice}
 *• 🆔 ID :* ${orderResponse.data.reff_id}
 *• 📦 SN :* ${orderResponse.data.sn}`;
        if (finalStatusResponse.data.status === 'success') {
            return newReply(buyDetails);
        } else {
            return newReply(buyDetails);
        }
    } catch (error) {
        console.error('Error saat melakukan order:', error);
        return newReply(`${error.message}`);
    }
}
break;
        
case 'pricelist': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data pricelist tidak ditemukan.');
        }
        let categories = new Set();
        for (const item of response.data) {
            if (item.category) {
                categories.add(item.category);
            }
        }
        if (categories.size === 0) {
            return newReply('❌ Tidak ada kategori yang tersedia.');
        }
        let pricelistSections = [{
            title: "📌 Pilih Kategori",
            rows: [...categories].map(category => ({
                header: ``,
                title: category,
                id: `.subpricelist ${category}`
            }))
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "💰 PRICE LIST ATLANTIC 💰",
                sections: pricelistSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, "*💰 PRICE LIST ATLANTIC 💰*", "Silakan pilih kategori:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data harga_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;
        
case 'subpricelist': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('❌ Harap masukkan kategori. Contoh: !subpricelist Data Internet');
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data pricelist tidak ditemukan.');
        }
        let providers = new Set();
        for (const item of response.data) {
            if (item.category === text && item.provider) {
                providers.add(item.provider);
            }
        }
        if (providers.size === 0) {
            return newReply(`❌ Tidak ada provider yang tersedia untuk kategori ${text}.`);
        }
        let providerSections = [{
            title: `📌 Pilih Provider - ${text}`,
            rows: [...providers].map(provider => ({
                header: "",
                title: provider,
                id: `.detailpricelist ${text}|${provider}`
            }))
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: `💰 PROVIDER LIST - ${text} 💰`,
                sections: providerSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, `*💰 PROVIDER LIST - ${text} 💰*`, "Silakan pilih provider:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data provider_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'detailpricelist': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let [category, provider] = text.split('|');
    if (!category || !provider) return newReply('❌ Harap masukkan kategori dan provider dengan format: !detailpricelist <kategori>|<provider>');
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data tidak ditemukan.');
        }
        let filteredItems = response.data.filter(item => 
            item.category.toLowerCase() === category.toLowerCase() && 
            item.provider.toLowerCase() === provider.toLowerCase()
        );
        if (filteredItems.length === 0) return newReply('❌ Tidak ada item yang sesuai.');
        filteredItems.sort((a, b) => {
            let nameA = a.name.toLowerCase().match(/\d+|\D+/g) || [];
            let nameB = b.name.toLowerCase().match(/\d+|\D+/g) || [];
            for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
                if (!isNaN(nameA[i]) && !isNaN(nameB[i])) {
                    let numA = parseInt(nameA[i]);
                    let numB = parseInt(nameB[i]);
                    if (numA !== numB) return numA - numB;
                } else if (nameA[i] !== nameB[i]) {
                    return nameA[i].localeCompare(nameB[i]);
                }
            }
            let priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
            let priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        });
        let pricelistSections = [{
            title: "📌 Pilih Produk",
            rows: filteredItems.map(item => {
                let price = Math.round(parseInt(item.price.replace(/[^0-9]/g, '')) * 1.025);
                let formattedPrice = `Rp. ${price.toLocaleString('id-ID')}`;
                return {
                    header: "",
                    title: item.name,
                    description: formattedPrice,
                    id: `.order ${category}|${provider}|${item.name}|${item.code}`
                };
            })
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "💰 DETAIL PRICE LIST 💰",
                sections: pricelistSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, `*💰 DETAIL PRICE LIST - ${category} - ${provider} 💰*`, "Silakan pilih layanan:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data layanan_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'topupdana': {
    const type = "prabayar";
    await reactionMessage('📃');
    try {
        const priceListResponse = await atlaPriceList(type);
        console.log(priceListResponse);
        if (priceListResponse.status) {
            let priceListMessage = `*Daftar Harga untuk ${type.charAt(0).toUpperCase() + type.slice(1)}:*\n\n`;
            let index = 1;
            for (const item of priceListResponse.data) {
                if (item.provider === 'DANA' && item.category === 'E-Money') {
                    const originalPrice = item.price;
                    const markupPrice = originalPrice * 1.025;
                    const roundedPrice = Math.round(markupPrice); 
                    const formattedPrice = await toRupiah(roundedPrice);
                    priceListMessage += `${index}. ${item.name}\n`;
                    priceListMessage += `> Harga: Rp${formattedPrice}\n`;
                    priceListMessage += `> Kode Produk: ${item.code}\n`;
                    priceListMessage += `> Status: ${item.status}\n\n`;
                    index++;
                }
            }
            if (index === 1) {
                return newReply("Tidak ada item prabayar yang tersedia untuk provider 'TELKOMSEL' dengan type 'Umum'.");
            }
            return await newReply(priceListMessage);
        } else {
            return newReply("Gagal mendapatkan daftar harga. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat mendapatkan pricelist:', error);
        return newReply(`Terjadi kesalahan: ${error.message}`);
    }
}
break;   
        
case 'pulsatelkomsel': {
    const type = "prabayar";
    await reactionMessage('📃');
    try {
        const priceListResponse = await atlaPriceList(type);
        console.log(priceListResponse);
        if (priceListResponse.status) {
            let priceListMessage = `*Daftar Harga untuk ${type.charAt(0).toUpperCase() + type.slice(1)}:*\n\n`;
            let index = 1;
            for (const item of priceListResponse.data) {
                if (item.provider === 'TELKOMSEL' && item.category === 'Pulsa Reguler' && item.type === 'Umum') {
                    const originalPrice = item.price;
                    const markupPrice = originalPrice * 1.025;
                    const roundedPrice = Math.round(markupPrice); 
                    const formattedPrice = await toRupiah(roundedPrice);
                    priceListMessage += `${index}. ${item.name}\n`;
                    priceListMessage += `> Harga: Rp${formattedPrice}\n`;
                    priceListMessage += `> Kode Produk: ${item.code}\n`;
                    priceListMessage += `> Status: ${item.status}\n\n`;
                    index++;
                }
            }
            if (index === 1) {
                return newReply("Tidak ada item prabayar yang tersedia untuk provider 'TELKOMSEL' dengan type 'Umum'.");
            }
            return await newReply(priceListMessage);
        } else {
            return newReply("Gagal mendapatkan daftar harga. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat mendapatkan pricelist:', error);
        return newReply(`Terjadi kesalahan: ${error.message}`);
    }
}
break;

// pushkontak.js
case 'post':
case 'jpm': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Reply gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda:* 1000 = 1 detik\n\n*Contoh:* ${prefix + command} Halo semuanya!|9000`);
	await newReply(`⏳ *Sedang diproses...*`);
	let getGroups = await wbk.groupFetchAllParticipating();
	let groups = Object.entries(getGroups).map((entry) => entry[1]);
	let anu = groups.map((v) => v.id);
	for (let member of anu) {
		let metadata = await wbk.groupMetadata(member);
		let participants = metadata.participants;
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted);
			let mem = await quax(media);
			await wbk.sendMessage(member, {
				image: { url: mem },
				caption: text.split('|')[0],
				mentions: participants.map(a => a.id)
			});
			await sleep(text.split('|')[1]);
		} else {
			await wbk.sendMessage(member, {
				text: text.split('|')[0],
				mentions: participants.map(a => a.id)
			});
			await sleep(text.split('|')[1]);
		}
	}
	newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'pushkontak': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.private);
	var name = text.split('/')[0];
	var chet = text.split('/')[1];
	if (!name) return newReply(`Contoh: ${prefix + command} nama/pesan`);
	if (!chet) return newReply(`Contoh: ${prefix + command} nama/pesan`);
	let kontak = {
		displayName: "Contact",
		contacts: [{
			displayName: name,
			vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
		}]
	}
	let push = await wbk.groupMetadata(m.chat)
	if (push.participants.length > 300) return newReply('Batas member maksimal: *300*')
	await reactionMessage('⏱️');
	for (let a of push.participants) {
		const repf = await wbk.sendMessage(a.id, {
			contacts: kontak
		})
		wbk.sendMessage(a.id, {
			text: chet
		}, {
			quoted: repf
		})
		await sleep(3000);
	}
	await newReply(mess.done);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);
	let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
	newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
	for (let pler of mem) {
		await wbk.sendMessage(pler, {
			text: text
		});
	}
	newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact2': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
	try {
		const metadata = await wbk.groupMetadata(text.split("|")[0]);
		const participants = metadata.participants;
		for (let mem of participants) {
			await wbk.sendMessage(
				`${mem.id.split('@')[0]}@s.whatsapp.net`, {
					text: text.split("|")[1]
				}
			);
			await sleep(5000);
		}
		newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
	} catch {
		newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact3': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
	try {
		let jeda = text.split("|")[0];
		let caption = text.split("|")[1];
		let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
		for (let men of participants) {
			if (/image/.test(mime)) {
				let media = await wbk.downloadAndSaveMediaMessage(quoted);
				let mem = await catbox(media);
				await wbk.sendMessage(men, {
					image: {
						url: mem
					},
					caption: caption
				}, {
					quoted: m
				});
				await sleep(jeda);
			} else {
				await wbk.sendMessage(men, {
					text: caption
				}, {
					quoted: m
				});
				await sleep(jeda);
			}
		}
		newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
	} catch {
		newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'getcontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	bigpp = await wbk.sendMessage(m.chat, {
		text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
	}, {
		quoted: m,
		ephemeralExpiration: 86400
	});
	await sleep(1000);
	wbk.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'savecontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	let cmiggc = await wbk.groupMetadata(m.chat);
	let orgiggc = participants.map(a => a.id);
	vcard = '';
	noPort = 0;
	for (let a of cmiggc.participants) {
		vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
	}
	let nmfilect = './contacts.vcf';
	newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
	require('fs').writeFileSync(nmfilect, vcard.trim());
	await sleep(2000);
	wbk.sendMessage(m.chat, {
		document: require('fs').readFileSync(nmfilect),
		mimetype: 'text/vcard',
		fileName: 'Contact.vcf',
		caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
	}, {
		ephemeralExpiration: 86400,
		quoted: m
	});
	require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'sendcontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
	let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
	let snContact = {
		displayName: "Contact",
		contacts: [{
			displayName: snTak,
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
		}]
	};
	wbk.sendMessage(m.chat, {
		contacts: snContact
	}, {
		ephemeralExpiration: 86400
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'contacttag': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
	let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
	let sngContact = {
		displayName: "Contact",
		contacts: [{
			displayName: sngTak,
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
		}]
	};
	wbk.sendMessage(m.chat, {
		contacts: sngContact,
		mentions: participants.map(a => a.id)
	}, {
		ephemeralExpiration: 86400
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;

// rpg.js
case 'joinrpg': {
    if (db.data.users[m.sender].rpg) return newReplyRPG("Kamu Telah Join Sebelumnya");
    db.data.users[m.sender].rpg = true;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://files.catbox.moe/ggoqql.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang Kamu dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'leaverpg': {
    const buttyakin = { displayText: "Yakin" };
    const butt1 = {
        buttonId: prefix + "yaleaverpg",
        buttonText: buttyakin
    };
    const butttidakyakin = { displayText: "Lanjut RPG" };
    const butt2 = {
        buttonId: prefix + "tidakleaverpg",
        buttonText: butttidakyakin
    };
    let buttonMessage = {
        document: { url: "https://www.youtube.com/" },
        mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        fileName: wm,
        fileLength: 999,
        pageCount: 999,
        contextInfo: {
            forwardingScore: 555,
            isForwarded: true,
            externalAdReply: {
                mediaUrl: website,
                mediaType: 1,
                previewType: 1,
                title: "RPG-GAME (Pirate Adventure)",
                body: "Pirate adventure in search of riches",
                thumbnailUrl: "https://files.catbox.moe/avmsjk.jpg",
                sourceUrl: website,
                renderLargerThumbnail: true
            },
        },
        caption: "Yakin mau logout dari RPG-Game? Progress kamu saat ini akan terhapus apabila kamu logout dari RPG-Game",
        footer: wm,
        buttons: [butt1, butt2],
        viewOnce: true,
        headerType: 6,
    };
    return await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
        
case 'yaleaverpg': { //
    if (!db.data.users[m.sender].rpg) return newReplyRPG("Kamu Telah Out Sebelumnya");
    delete db.data.rpg[m.sender];
    db.data.users[m.sender].rpg = false;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG ENDED*\n\nKamu telah logout RPG-Game, sekarang Kamu tidak dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'tidakleaverpg': { //
    if (db.data.users[m.sender].rpg) return newReplyRPG("Terimakasih Telah Kembali");
    db.data.users[m.sender].rpg = true;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG STARTED*\n\nKamu telah kembali ke RPG-Game, sekarang Kamu dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'inforpg': {
    const rpgUser  = db.data.rpg[m.sender];
    if (!rpgUser ) {
        return newReplyRPG("*Data RPG tidak ditemukan. Silakan bergabung terlebih dahulu dengan mengetik _.joinrpg_*");
    }
    let message = `*Informasi RPG untuk ${m.sender}*\n\n` +
                  `◦ Kapal: ${rpgUser.kapal ? 'Ada' : 'Tidak Ada'}${rpgUser.kapal ? `\n◦ Darah Kapal: ${rpgUser.darahkapal}` : ''}\n` +
                  `◦ Pickaxe: ${rpgUser.pickaxe ? 'Ada' : 'Tidak Ada'}${rpgUser.pickaxe ? `\n◦ Darah Pickaxe: ${rpgUser.darahpickaxe}` : ''}\n` +
                  `◦ Kapak: ${rpgUser.kapak ? 'Ada' : 'Tidak Ada'}${rpgUser.kapak ? `\n◦ Darah Kapak: ${rpgUser.darahkapak}` : ''}\n` +
                  `◦ Baju Zirah: ${rpgUser.bzirah ? 'Ada' : 'Tidak Ada'}${rpgUser.bzirah ? `\n◦ Darah Baju Zirah: ${rpgUser.darahbzirah}` : ''}\n` +
                  `◦ Pedang: ${rpgUser.pedang ? 'Ada' : 'Tidak Ada'}${rpgUser.pedang ? `\n◦ Darah Pedang: ${rpgUser.darahpedang}` : ''}\n` +
                  `◦ Darah User: ${rpgUser.darahuser}\n` +
                  `◦ Rumah: ${rpgUser.rumah}\n` +
                  `◦ Besi: ${rpgUser.besi}\n` +
                  `◦ Kayu: ${rpgUser.kayu}\n` +
                  `◦ Emas: ${rpgUser.emas}\n` +
                  `◦ Perak: ${rpgUser.perak}\n` +
                  `◦ Batubara: ${rpgUser.batubara}\n` +
                  `◦ Bulu: ${rpgUser.bulu}\n` +
                  `◦ Kain: ${rpgUser.kain}\n` +
                  `◦ Wilayah: ${rpgUser.wilayah}\n` +
                  `◦ Wilayah Rumah: ${rpgUser.wilayahrumah}\n` +
                  `◦ Musuh: ${rpgUser.musuh}\n` +
                  `◦ Ikan: ${rpgUser.ikan}\n` +
                  `◦ Domba: ${rpgUser.domba}\n` +
                  `◦ Sapi: ${rpgUser.sapi}\n` +
                  `◦ Ayam: ${rpgUser.ayam}\n` +
                  `◦ Bank: ${rpgUser.bank}\n` +
                  `◦ Burutime: ${rpgUser.burutime}\n` +
                  `◦ Last Claim: ${rpgUser.lastclaim}\n` +
                  `◦ Last Dagang: ${rpgUser.lastdagang}\n` +
                  `◦ Last Bansos: ${rpgUser.lastbansos}\n` +
                  `◦ Last Kerja: ${rpgUser.lastkerja}\n` +
                  `◦ Last Rampok: ${rpgUser.lastrampok}\n`;
    await newReplyRPG(message);
}
break;
        
case 'inventory': {
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
	if (!db.data.users[users].rpg) return newReply("*⚠️ Kamu belum join RPG!*\n\nKetik _.joinrpg_ untuk memulai petualanganmu! 🏹");
	let nomorHP = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international');
	let teks = `*⚔️ RPG - PROFILE ⚔️*\n\n`;
	teks += `👤 *User Info*\n`;
	teks += `- 📞 Nomor: ${nomorHP}\n`;
	teks += `- ❤️ Kesehatan: ${db.data.rpg[users].darahuser}/100\n`;
	teks += `- 🌍 Lokasi: ${db.data.rpg[users].wilayah}\n\n`;
	teks += `🛠️ *Crafting Items*\n`;
	teks += `- ⛵ Kapal: ${db.data.rpg[users].kapal ? `(${db.data.rpg[users].darahkapal}% HP)` : 'Belum punya' }\n`;
	teks += `- 🏠 Rumah: ${db.data.rpg[users].rumah} Unit\n`;
	teks += `- 🪓 Kapak: ${db.data.rpg[users].kapak ? `(${db.data.rpg[users].darahkapak}% HP)` : 'Belum punya' }\n`;
	teks += `- ⛏️ Pickaxe: ${db.data.rpg[users].pickaxe ? `(${db.data.rpg[users].darahpickaxe}% HP)` : 'Belum punya' }\n`;
	teks += `- 🛡️ Baju Zirah: ${db.data.rpg[users].bzirah ? `(${db.data.rpg[users].darahbzirah}% HP)` : 'Belum punya' }\n`;
	teks += `- ⚔️ Pedang: ${db.data.rpg[users].pedang ? `(${db.data.rpg[users].darahpedang}% HP)` : 'Belum punya' }\n`;
	teks += `- 🏴 Kain: ${db.data.rpg[users].kain} Lembar\n\n`;
	teks += `🔨 *Sumber Daya*\n`;
	teks += `- 🪵 Kayu: ${db.data.rpg[users].kayu} Batang\n`;
	teks += `- ⛓️ Besi: ${db.data.rpg[users].besi} Biji\n`;
	teks += `- 💰 Emas: ${db.data.rpg[users].emas} Biji\n`;
	teks += `- 🥈 Perak: ${db.data.rpg[users].perak} Biji\n`;
	teks += `- 🪨 Batu Bara: ${db.data.rpg[users].batubara} Biji\n\n`;
	teks += `🐾 *Hewan & Ternak*\n`;
	teks += `- 🐔 Ayam: ${db.data.rpg[users].ayam} Ekor\n`;
	teks += `- 🐄 Sapi: ${db.data.rpg[users].sapi} Ekor\n`;
	teks += `- 🐑 Domba: ${db.data.rpg[users].domba} Ekor\n`;
	teks += `- 🐟 Ikan: ${db.data.rpg[users].ikan} Ekor\n\n`;
	teks += `🔥 *Semangat terus berburu & bertualang! Jangan lupa upgrade peralatanmu! 🚀*`;
	await wbk.sendMessage(m.chat, {
		image: thumb,
		caption: teks,
		contextInfo: {
			mentionedJid: [users],
			forwardingScore: 9999,
			isForwarded: true,
			forwardedNewsletterMessageInfo: {
				newsletterJid: saluran,
				serverMessageId: null,
				newsletterName: saluranName
			},
			externalAdReply: {
				title: "RPG-GAME (Inventory)",
				body: "Jelajahi dunia dan tingkatkan perlengkapanmu! ⚒️",
				thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
				sourceUrl: website,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	}, { quoted: m });
}
break;
        
case 'craft': {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  const itemRequirements = {
    kain: { bulu: 2 },
    kapal: { besi: 20, kayu: 50, kain: 2 },
    kapak: { besi: 2, kayu: 1 },
    rumah: { besi: 6, kayu: 20 },
    pickaxe: { besi: 2, kayu: 1 },
    bajuzirah: { besi: 6, kayu: 2, kain: 10 },
    pedang: { besi: 3, kayu: 1 }
  };
  const item = args[0];
  const quantity = parseInt(args[1]) || 1;
  if (item === "kain") {
    if (!args[1] || isNaN(args[1])) {
      return newReplyRPG("*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!");
    }
    const requiredWool = quantity * itemRequirements.kain.bulu;
    if (db.data.rpg[m.sender].bulu < requiredWool) {
      return newReplyRPG(`*Bulu Wol Kamu (${db.data.rpg[m.sender].bulu}) Tidak Cukup Untuk Membuat ${quantity} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`);
    }
    db.data.rpg[m.sender].kain += quantity;
    db.data.rpg[m.sender].bulu -= requiredWool;
    return newReplyRPG(`Berhasil Membuat ${quantity} Lembar Kain, Kamu Mempunyai ${db.data.rpg[m.sender].bulu} Bulu Lagi`);
  }
  if (!itemRequirements[item]) {
    let helpMessage = "*Apa yang ingin Kamu buat?*\n\n";
    helpMessage += Object.keys(itemRequirements).map(i => `- ${i}`).join("\n");
    helpMessage += "\n\n*Contoh:*\n.craft kapak";
    return newReplyRPG(helpMessage);
  }
  const requirements = itemRequirements[item];
  for (const resource in requirements) {
    const requiredAmount = requirements[resource] * quantity;
    if (db.data.rpg[m.sender][resource] < requiredAmount) {
      return newReplyRPG(`*${resource.charAt(0).toUpperCase() + resource.slice(1)} Kamu (${db.data.rpg[m.sender][resource]}) Tidak Cukup Untuk Membuat ${quantity} ${item.charAt(0).toUpperCase() + item.slice(1)}*\n\nUntuk Membuat ${item.charAt(0).toUpperCase() + item.slice(1)} Diperlukan *${requiredAmount} ${resource}*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`);
    }
    db.data.rpg[m.sender][resource] -= requiredAmount;
  }
  db.data.rpg[m.sender][item] = true;
  let successMessage = `*Berhasil Membuat ${item.charAt(0).toUpperCase() + item.slice(1)}!*\n\nSisa Sumberdaya:\n`;
  for (const resource in requirements) {
    successMessage += `- ${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${db.data.rpg[m.sender][resource]}\n`;
  }
  return newReplyRPG(successMessage);
}
db.data.users[m.sender].limit -= 1;
break;
        
case "heal": {
    if (!db.data.users[m.sender].rpg) {
        return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    }
    if (!db.data.rpg[m.sender].darahuser < 0) {
        return newReplyRPG("*😑 Kamu Masih Sehat!*");
    }
    db.data.rpg[m.sender].darahuser += 100;
    sendEditMessage("*Mengistirahatkan Tubuh...*", "*Memulihkan...*", "*Darah Kamu Sudah Terisi...*");
}
db.data.users[m.sender].limit -= 1;
break;
        
case "repair":
case "rawat": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Silakan bergabung dalam RPG terlebih dahulu dengan mengetik _.joinrpg_*");
  }
  let itemToRepair = args[0];
  const repairItem = (item, requiredIron, requiredWood = 0) => {
    if (!db.data.rpg[m.sender][item]) {
      return newReplyRPG(`*🙃 Kamu tidak punya ${item}*\n\nUntuk menggunakan fitur ini, kamu harus mempunyai ${item}.`);
    }
    if (db.data.rpg[m.sender][`darah${item}`] >= 100) {
      return newReplyRPG(`*😑 ${item.charAt(0).toUpperCase() + item.slice(1)} kamu masih bagus*`);
    }
    if (db.data.rpg[m.sender].besi < requiredIron) {
      return newReplyRPG(`*Besi kamu (${db.data.rpg[m.sender].besi}) tidak cukup untuk perbaikan ${item}*\n\nDiperlukan *${requiredIron} Besi*.\nSilakan mining/adventure terlebih dahulu!`);
    }
    if (requiredWood > 0 && db.data.rpg[m.sender].kayu < requiredWood) {
      return newReplyRPG(`*Kayu kamu (${db.data.rpg[m.sender].kayu}) tidak cukup untuk perbaikan ${item}*\n\nDiperlukan *${requiredWood} Kayu*.\nSilakan menebang/adventure terlebih dahulu!`);
    }
    db.data.rpg[m.sender].besi -= requiredIron;
    if (requiredWood > 0) db.data.rpg[m.sender].kayu -= requiredWood;
    db.data.rpg[m.sender][`darah${item}`] = 100;
    sendEditMessage("Memperbaiki, Mohon Tunggu😘", "Tahap Finishing 🥳", "Done Perbaikan 😄");
  };
  switch (itemToRepair) {
    case "kapal":
      repairItem("kapal", 5, 10);
      break;
    case "pickaxe":
      repairItem("pickaxe", 1);
      break;
    case "kapak":
      repairItem("kapak", 1);
      break;
    case "armor":
      repairItem("bzirah", 2);
      break;
    case "pedang":
      repairItem("pedang", 1);
      break;
    default:
      let repairOptions = "「\t*🛠️ PERBAIKAN 🛠️*\t」\n\n*Pilih Barang Yang Akan Diperbaiki*\n";
      const items = ["kapal", "pickaxe", "kapak", "armor", "pedang"];
      repairOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " kapak";
      newReplyRPG(repairOptions);
  }
}
db.data.users[m.sender].limit -= 1;
break;
        
case "sell":
case "jual": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  let itemToSell = args[0];
  const sellItem = (item, pricePerUnit) => {
    if (!args[1]) {
      return newReplyRPG(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    if (isNaN(args[1])) {
      return newReplyRPG(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    let quantity = Number(args[1]);
    let totalPrice = quantity * pricePerUnit;
    if (db.data.rpg[m.sender][item] < quantity) {
      return newReplyRPG(`*${item.charAt(0).toUpperCase() + item.slice(1)} Kamu Tidak Cukup*`);
    }
    db.data.users[m.sender].uang += totalPrice;
    db.data.rpg[m.sender][item] -= quantity;
    let replyMessage = `*MARKET - JUAL🛍️*\n\n*Item Terjual:*\n- ${item.charAt(0).toUpperCase() + item.slice(1)}: ${quantity}\n\n*Penghasilan:*\n- Saldo: ${totalPrice}\n\n*Sisa Uang:*\n- Saldo Total: ${db.data.users[m.sender].uang}\n`;
    newReplyRPG(replyMessage);
  };
  switch (itemToSell) {
    case "emas":
      sellItem("emas", 1000);
      break;
    case "besi":
      sellItem("besi", 700);
      break;
    case "batubara":
      sellItem("batubara", 900);
      break;
    case "perak":
      sellItem("perak", 800);
      break;
    case "kayu":
      sellItem("kayu", 300);
      break;
    case "ayam":
      sellItem("ayam", 100);
      break;
    case "sapi":
      sellItem("sapi", 500);
      break;
    case "domba":
      sellItem("domba", 350);
      break;
    case "ikan":
      sellItem("ikan", 50);
      break;
    case "bulu":
      sellItem("ikan", 30);
      break;
    default:
      let marketOptions = "「\t*🛍️ MARKET 🛍️*\t」\n\n*Pilih Barang Yang Akan Dijual*\n";
      const items = ["emas", "besi", "batubara", "perak", "kayu", "ayam", "sapi", "domba", "ikan", "bulu"];
      marketOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " ikan";
      newReplyRPG(marketOptions);
  }
}
break;
        
case "buy":
case "belanja": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  let itemToBuy = args[0];
  const buyItem = (item, pricePerUnit) => {
    if (!args[1]) {
      return newReplyRPG(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    if (isNaN(args[1])) {
      return newReplyRPG(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    let quantity = Number(args[1]);
    let totalPrice = quantity * pricePerUnit;
    if (db.data.users[m.sender].uang < totalPrice) {
      return newReplyRPG("*Uang Kamu Tidak Cukup*");
    }
    db.data.users[m.sender].uang -= totalPrice;
    db.data.rpg[m.sender][item] += quantity;
    let replyMessage = `*MARKET - BELI🛍️*\n\n*Item Dibeli:*\n- ${item.charAt(0).toUpperCase() + item.slice(1)}: ${quantity}\n\n*Dibayarkan:*\n- Saldo: ${totalPrice}\n\n*Sisa Uang:*\n- Saldo Total: ${db.data.users[m.sender].uang}\n`;
    newReplyRPG(replyMessage);
  };
  switch (itemToBuy) {
    case "emas":
      buyItem("emas", 1300);
      break;
    case "besi":
      buyItem("besi", 900);
      break;
    case "batubara":
      buyItem("batubara", 1200);
      break;
    case "perak":
      buyItem("perak", 1000);
      break;
    case "kayu":
      buyItem("kayu", 450);
      break;
    case "ayam":
      buyItem("ayam", 150);
      break;
    case "sapi":
      buyItem("sapi", 650);
      break;
    case "domba":
      buyItem("domba", 400);
      break;
    case "ikan":
      buyItem("ikan", 100);
      break;
    case "bulu":
      buyItem("ikan", 60);
      break;
    default:
      let marketOptions = "「\t*🛍️ MARKET 🛍️*\t」\n\n*Pilih Barang Yang Akan Dibeli*\n";
      const items = ["emas", "besi", "batubara", "perak", "kayu", "ayam", "sapi", "domba", "ikan"];
      marketOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " ikan";
      newReplyRPG(marketOptions);
  }
}
break;
        
case 'mining': {
    if (!db.data.users[m.sender].rpg) {
        return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nKetik _.joinrpg_");
    }
    if (!db.data.rpg[m.sender].pickaxe) {
        return newReplyRPG("Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_");
    }
    if (db.data.rpg[m.sender].darahpickaxe < 1) {
        return newReplyRPG("☹️ Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_");
    }
    if (db.data.rpg[m.sender].darahuser < 1) {
        return newReplyRPG("☹️ Darah Kamu Habis\nTambah Darah Dulu\n\nKetik _.heal_");
    }
    let ironAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let coalAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let goldAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let silverAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const ironFound = ironAmounts[Math.floor(Math.random() * ironAmounts.length)];
    const coalFound = coalAmounts[Math.floor(Math.random() * coalAmounts.length)];
    const goldFound = goldAmounts[Math.floor(Math.random() * goldAmounts.length)];
    const silverFound = silverAmounts[Math.floor(Math.random() * silverAmounts.length)];
    let miningMessage = "*MINING ADVENTURE*\n\nItem Yang Didapat :\n" +
        `- Besi: ${ironFound}\n` +
        `- Emas: ${goldFound}\n` +
        `- Perak: ${silverFound}\n` +
        `- Batu Bara: ${coalFound}\n\n` +
        "_🧰 Disimpan Dalam Inventory..._\n" +
        `_❤️ Darah Berkurang 10_\n` +
        `_⛏️ Ketahanan Pickaxe ${db.data.rpg[m.sender].darahpickaxe}%_\n\n`;
    const newsletterInfo = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const externalAdInfo = {
        title: "RPG-GAME (Mining Resource)",
        body: "Mining natural resources",
        thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
        sourceUrl: wagc,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        text: miningMessage,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: newsletterInfo,
            externalAdReply: externalAdInfo
        },
        quoted: m
    });
    db.data.rpg[m.sender].darahuser -= 10;
    db.data.rpg[m.sender].darahpickaxe -= 20;
    db.data.rpg[m.sender].besi += ironFound;
    db.data.rpg[m.sender].emas += goldFound;
    db.data.rpg[m.sender].perak += silverFound;
    db.data.rpg[m.sender].batubara += coalFound;
    db.data.users[m.sender].limit -= 1;
}
break;

case 'menebang':
case 'nebang': {
  if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  if (!db.data.rpg[m.sender].kapak) return newReplyRPG("Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_");
  if (db.data.rpg[m.sender].darahkapak < 1) return newReplyRPG("☹️ Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_");
  let kayuDidapat = await getRandomInt(0, 20);
  db.data.rpg[m.sender].kayu += kayuDidapat;
  db.data.rpg[m.sender].darahkapak -= 20;
  let hasilNebang = '';
  hasilNebang += "*🌳 MENEBANG POHON 🌳*\n\n";
  hasilNebang += "Item Yang Didapat:\n";
  hasilNebang += "- Kayu: " + kayuDidapat + " (Hasil Tebang)\n";
  hasilNebang += "- Kapak: -20 Kesehatan (Digunakan)\n";
  newReplyRPG(hasilNebang);
}
db.data.users[m.sender].limit -= 1;
break;
        
case 'berburu': {
  if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  let dombaDidapat = await getRandomInt(0, 10);
  let sapiDidapat = await getRandomInt(0, 10);
  let ayamDidapat = await getRandomInt(0, 10);
  let totalItems = dombaDidapat + sapiDidapat + ayamDidapat;
  let buluDidapat = totalItems / 2;
  let terakhirBerburu = await clockString(new Date() - db.data.rpg[m.sender].burutime);
  if (new Date() - db.data.rpg[m.sender].burutime < 7200000) return newReplyRPG("Kamu Baru Saja Berburu " + terakhirBerburu + " Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Berburu");
  db.data.rpg[m.sender].burutime = new Date() * 1;
  db.data.rpg[m.sender].domba += dombaDidapat;
  db.data.rpg[m.sender].sapi += sapiDidapat;
  db.data.rpg[m.sender].ayam += ayamDidapat;
  db.data.rpg[m.sender].bulu += buluDidapat;
  let hasilBerburu = '';
  hasilBerburu += "*🏹 BERBURU 🏹*\n\n";
  hasilBerburu += "Item Yang Didapat:\n";
  hasilBerburu += "- Domba: " + dombaDidapat + "\n";
  hasilBerburu += "- Sapi: " + sapiDidapat + "\n";
  hasilBerburu += "- Ayam: " + ayamDidapat + "\n";
  hasilBerburu += "- Bulu: " + buluDidapat + " (Hasil Pencabutan)\n\n";
  hasilBerburu += "_Tunggu 2 jam untuk berburu berikutnya_\n";
  newReplyRPG(hasilBerburu);
}
db.data.users[m.sender].limit -= 1;
break;
        
case 'adventure': {
    if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    if (db.data.rpg[m.sender].darahuser < 1) return newReplyRPG("Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_");
    let lokasiAdventure = args.join(" ");
    let musuh = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"];
    let musuhAcak = await musuh[Math.floor(Math.random() * musuh.length)];
    let kayuDidapat = await getRandomInt(15);
    let besiDidapat = await getRandomInt(10);
    let rankDidapat = await getRandomInt(100);
    let uangDidapat = await getRandomInt(2000);
    const kirimPesanPetualangan = async (pesan, editKey) => {
        await wbk.sendMessage(m.chat, pesan, { edit: editKey });
        await sleep(3000);
    };
    if (["savanah", "dessert", "boreal forest", "tropical forest"].includes(lokasiAdventure)) {
        db.data.rpg[m.sender].darahuser -= 20;
        const loadingMessage = { text: "Berpetualang, Mohon Tunggu..." };
        let { key: loadingKey } = await wbk.sendMessage(m.chat, loadingMessage, { quoted: m });
        await sleep(3000);
        const bertemuPesan = { text: "Kamu bertemu dengan " + musuhAcak, edit: loadingKey };
        await kirimPesanPetualangan(bertemuPesan, loadingKey);
        const menjelajahPesan = { text: "Menjelajah...", edit: loadingKey };
        await kirimPesanPetualangan(menjelajahPesan, loadingKey);
        let hasilAdventure = `-「 *ADVENTURE* 」-\n\n`;
        hasilAdventure += `*📍 ${lokasiAdventure}*\n`;
        hasilAdventure += `- Kayu: ${kayuDidapat}\n`;
        hasilAdventure += `- Besi: ${besiDidapat}\n`;
        hasilAdventure += `- Rank: ${rankDidapat}\n`;
        hasilAdventure += `- Uang: Rp ${uangDidapat}\n\n`;
        hasilAdventure += `*Stamina berkurang -20*\n`;
        const newsletterInfo = {
            newsletterJid: saluran,
            serverMessageId: null,
            newsletterName: saluranName
        };
        const externalAdReply = {
            title: "RPG - ADVENTURE",
            body: "Petualangan menjelajahi dunia",
            thumbnailUrl: "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg",
            sourceUrl: "tes",
            mediaType: 1,
            renderLargerThumbnail: true
        };
        await wbk.sendMessage(m.chat, {
            text: hasilAdventure,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: newsletterInfo,
                externalAdReply: externalAdReply
            }
        }, { quoted: m });
        db.data.rpg[m.sender].kayu += kayuDidapat;
        db.data.rpg[m.sender].besi += besiDidapat;
        db.data.rpg[m.sender].rank += rankDidapat;
        db.data.rpg[m.sender].uang += uangDidapat;
    } else {
        let messageAdventure = `-「 *ADVENTURE* 」-\n\n`;
        messageAdventure += `*Pilih Lokasi Jelajahmu📍*\n`;
        messageAdventure += `- savanah\n`;
        messageAdventure += `- dessert\n`;
        messageAdventure += `- boreal forest\n`;
        messageAdventure += `- tropical forest\n\n`;
        messageAdventure += `*Contoh:*\n`;
        messageAdventure += `.adventure savanah`;
        const adReply = {
            title: "RPG - ADVENTURE",
            body: "Petualangan menjelajahi dunia",
            thumbnailUrl: "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg",
            sourceUrl: "tes",
            mediaType: 1,
            renderLargerThumbnail: true
        };
        await wbk.sendMessage(m.chat, {
            text: messageAdventure,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: adReply
            }
        }, { quoted: m });
    }
    db.data.users[m.sender].limit -= 1;
}
break;
        
case 'memancing':
case 'mancing': {
    if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    if (db.data.rpg[m.sender].darahuser < 1) return newReplyRPG("Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_");
    let jumlahIkan = await getRandomInt(0, 20);
    db.data.rpg[m.sender].ikan += jumlahIkan;
    db.data.rpg[m.sender].darahuser -= 20;
    let gambarHasil = [
        "https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg",
        "https://telegra.ph/file/2e772e9732c88e153e812.jpg",
        "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg",
        "https://telegra.ph/file/562adf3d43cde4d355e76.jpg",
        "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"
    ];
    let gambarAcak = await gambarHasil[Math.floor(Math.random() * gambarHasil.length)];
    const pesanMemancing = {
        text: "Sedang Memancing..."
    };
    let { key: loadingKey } = await wbk.sendMessage(m.chat, pesanMemancing, { quoted: m });
    await sleep(5000);
    const pesanHasil = {
        text: "Memperoleh Hasil...",
        edit: loadingKey
    };
    await wbk.sendMessage(m.chat, pesanHasil);
    await sleep(5000);
    let hasilMemancing = '';
    hasilMemancing += "「 *MEMANCING* 」\n\n";
    hasilMemancing += "Berhasil mendapatkan " + jumlahIkan + " ikan\n\n";
    hasilMemancing += "_Stamina berkurang -20_\n";
    const newsletterInfo = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: wm
    };
    const externalAdReply = {
        title: "RPG - FISHING",
        body: "Mencari hasil tangkapan ikan",
        thumbnailUrl: gambarAcak,
        sourceUrl: "tes",
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        text: hasilMemancing,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: newsletterInfo,
            externalAdReply: externalAdReply
        }
    }, { quoted: m });
    db.data.users[m.sender].limit -= 1;
}
break;
        
case 'bekerja':
case 'kerja': {
    let jenisPekerjaan = (args[0] || '').toLowerCase();
    let waktuKerjaSelanjutnya = db.data.rpg[m.sender].lastkerja + 600000;
    let karakter = ["mas mas", "bapak bapak", "cewe sma", "bocil epep", "emak emak"];
    let karakterAcak = await karakter[Math.floor(Math.random() * karakter.length)];
    let hasilPertanian = ["wortel", "sawi", "selada", "tomat", "seledri", "cabai", "daging", "ikan", "ayam"];
    let hasilAcak = await hasilPertanian[Math.floor(Math.random() * hasilPertanian.length)];
    let cedera = ["sakit kepala", "cedera", "luka bakar", "patah tulang"];
    let cederaAcak = await cedera[Math.floor(Math.random() * cedera.length)];
    let hasilPanen = ["Wortel", "Kubis", "strawberry", "teh", "padi", "jeruk", "pisang", "semangka", "durian", "rambutan"];
    let panenAcak = await hasilPanen[Math.floor(Math.random() * hasilPanen.length)];
    let kendaraan = ["mobil", "motor", "becak", "bajai", "bus", "angkot", "becak", "sepeda"];
    let kendaraanAcak = await kendaraan[Math.floor(Math.random() * kendaraan.length)];
    let aktivitasKuli = ["Membangun Rumah", "Membangun Gedung", "Memperbaiki Rumah", "Memperbaiki Gedung", "Membangun Fasilitas Umum", "Memperbaiki Fasilitas Umum"];
    let aktivitasAcak = await aktivitasKuli[Math.floor(Math.random() * aktivitasKuli.length)];
    switch (jenisPekerjaan) {
        case "ojek":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangOjek = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu Sudah Mengantarkan *" + karakterAcak + "* 🚗\nDan mendapatkan uang senilai *Rp " + uangOjek + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangOjek;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "pedagang":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangPedagang = Math.floor(Math.random() * 7000);
            newReplyRPG("Ada pembeli yang membeli *" + hasilAcak + "* 🛒\nDan mendapatkan uang senilai *Rp " + uangPedagang + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangPedagang;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "dokter":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangDokter = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu menyembuhkan pasien *" + cederaAcak + "* 💉\nDan mendapatkan uang senilai *Rp " + uangDokter + "* 💰").then(() => {
                db.data.users[m.sender].uang += uangDokter;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "petani":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangPetani = Math.floor(Math.random() * 7000);
            newReplyRPG(panenAcak + " Sudah Panen! 🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai *Rp " + uangPetani + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangPetani;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "montir":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangMontir = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu baru saja mendapatkan pelanggan dan memperbaiki *" + kendaraanAcak + " 🔧*\nDan Kamu mendapatkan uang senilai *Rp " + uangMontir + "* 💰").then(() => {
                db.data.users[m.sender].uang += uangMontir;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "kuli":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangKuli = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu baru saja selesai " + aktivitasAcak + " 🔨\nDan mendapatkan uang senilai *Rp " + uangKuli + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangKuli;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        default:
            let messageKerja = '';
            messageKerja += "*💼 RPG - KERJA 💼*\n\n";
            messageKerja += "*Pilih pekerjaanmu*:\n";
            messageKerja += "- montir\n";
            messageKerja += "- kuli\n";
            messageKerja += "- petani\n";
            messageKerja += "- dokter\n";
            messageKerja += "- pedagang\n";
            messageKerja += "- ojek\n\n";
            messageKerja += "*Contoh*:\n";
            messageKerja += prefix + command + " kuli\n";
            const newsletterInfo = {
                newsletterJid: saluran,
                serverMessageId: null,
                newsletterName: wm
            };
            const externalAdReply = {
                title: "RPG - JOB SIMULATOR",
                body: "Pilih pekerjaan dan nikmati hasilnya",
                thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
                sourceUrl: "tes",
                mediaType: 1,
                renderLargerThumbnail: true
            };
            await wbk.sendMessage(m.chat, {
                'text': messageKerja,
                'contextInfo': {
                    'mentionedJid': [m.sender],
                    'forwardingScore': 999,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': newsletterInfo,
                    'externalAdReply': externalAdReply
                }
            }, { quoted: m });
    }
}
break;
        
case 'merampok':
case 'rampok': {
    let jumlahRampokan = Math.floor(Math.random() * 15000);
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReplyRPG("*Tag/Reply Target!*\n\nContoh :\n" + (prefix + command) + " @0");
    if (target == m.sender) return newReplyRPG("Gak bisa ngerampok diri sendiri😑");
    let waktuTerakhirRampok = new Date() - db.data.rpg[m.sender].lastrampok;
    let waktuTunggu = 3600000 - waktuTerakhirRampok; // 1 jam
    let waktuTungguString = clockString(waktuTunggu);
    if (new Date() - db.data.rpg[m.sender].lastrampok > 3600000) {
        if (db.data.users[target].uang < 15000) return newReply("Target kismin🙀");
        db.data.users[target].uang -= jumlahRampokan;
        db.data.users[m.sender].uang += jumlahRampokan;
        db.data.rpg[m.sender].lastrampok = new Date() * 1;
        newReplyRPG("😈 Target Berhasil Dirampok Dan Mendapatkan Rp " + jumlahRampokan);
    } else {
        newReplyRPG("Loe udah ngerampok ngabb😑\ntunggu " + waktuTungguString + " untuk merampok lagi");
    }
}
break;
        
case 'daily': {
    if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
    const cooldown = 86400000; // 24 Jam
    let remainingTime = cooldown - (new Date() - db.data.rpg[m.sender].lastclaim);
    if (remainingTime > 0) return wbk.sendMessage(m.chat, { text: `Kamu sudah klaim hari ini!\nTunggu ${clockString(remainingTime)} untuk klaim lagi.` }, { quoted: m });
    db.data.users[m.sender].limit += 5;
    db.data.users[m.sender].uang += 5000;
    db.data.rpg[m.sender].lastclaim = new Date().getTime();
    wbk.sendMessage(m.chat, { text: `🎁 *KLAIM HARIAN!* 🎁\n+5 Limit\n+5.000 Uang` }, { quoted: m });
    db.data.settings[botNumber].totalhit += 1;
}
break;

// search.js
case 'spotifysearch':
case 'spotifys': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *Judul Lagu*`)
    try {
        await reactionMessage('🔎');
        let results = await spotifySearch(text);
        if (!results || results.length === 0) return m.reply('Lagu tidak ditemukan.');
        let spotifyCard = [];
        let no = 1;
        for (let track of results) {
            spotifyCard.push({
                title: `${no++}. ${track.name}`,
                rows: [
                    {
                        header: `Artist: ${track.artists}`,
                        title: `Link: ${track.link}`,
                        description: `Durasi: ${track.duration} menit`,
                        id: `.spotifydl ${track.link}`,
                    }
                ]
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'Search 🎵',\n  sections: ${JSON.stringify(spotifyCard)}\n}`
            }
        ];
        let buffer = await getBuffer(results[0].image);
        sendButtonImage(m.chat, "*乂 SPOTIFY SEARCH*", "", buffer, button, m);
        await reactionMessage('✅');
    } catch (err) {
        console.log(err);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'yts':
case 'ytsearch':
case 'youtubes': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} *lagu sad*`);
    try {
        const result = await ytsearch(text); 
        if (!result || result.videos.length === 0) {
            return reply('Tidak ditemukan video yang relevan.');
        }
        const uii = result.videos;
        let ytscard = [];
        let no = 1;
        for (let i of uii) {
            if (i.url) {
                ytscard.push({
                    title: `${no++}. ${i.title}`,
                    rows: [
                        {
                            header: `[ ${i.duration} ] Download Audio`,
                            title: `ID: ${i.videoId}`,
                            description: `Link: ${i.url}`,
                            id: `.ytaudio ${i.url}`,
                        },
                        {
                            header: `[ ${i.duration} ] Download Video`,
                            title: `ID: ${i.videoId}`,
                            description: `Link: ${i.url}`,
                            id: `.ytvideo ${i.url}`,
                        }
                    ]
                });
            }
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(ytscard)}\n}`
            }
        ];
        let buffer = await getBuffer(uii[0].thumbnail);
        let teks = `\n${uii[0].title}\n\n*Video ID:* ${uii[0].videoId}\n*Views:* ${uii[0].views}\n*Duration:* ${uii[0].duration}\n*Upload At:* ${uii[0].author.name}\n\n`;
        sendButtonImage(m.chat, "*乂 YOUTUBE SEARCH*", teks, buffer, button, m);
    } catch (err) {
        console.log(err);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'islamicsearch':
case 'islamics': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} *Palestina*`);
    try {
        const { summary, results } = await islamicsearch(text);
        if (!results || results.length === 0) {
            return newReply('Tidak ditemukan hasil yang relevan.');
        }
        let islamicCard = [];
        let no = 1;
        for (const { title, link, category, author, date } of results) {
            islamicCard.push({
                title: `${no++}. ${title}`,
                rows: [
                    {
                        header: `Kategori: ${category}`,
                        title: `Penulis: ${author} | Tanggal: ${date}`,
                        description: `🔗 ${link}`,
                        id: `.islamicdetail ${link}`,
                    }
                ]
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'Hasil Pencarian Islam',\n  sections: ${JSON.stringify(islamicCard)}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/7q4gmp.png');
        sendButtonImage(m.chat, "*乂 ISLAMIC SEARCH*", summary, buffer, button, m);
    } catch (err) {
        console.log(err);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;        
        
case 'islamicdetail': { //
    const url = text.trim();
    if (!url) {
        return m.reply("Harap masukkan URL artikel yang ingin diambil detailnya.");
    }
    try {
        const detail = await islamicdetail(url);
        let message = `*Judul:* ${detail.title}\n`;
        message += `*Penulis:* ${detail.author}\n`;
        message += `*Tanggal:* ${detail.date}\n`;
        message += `*Link:* ${detail.link}\n\n`;
        message += `*Konten:* \n${detail.content}\n`;
        if (detail.image) {
            let buffer = await getBuffer(detail.image);
            await wbk.sendMessage(m.chat, { image: buffer, caption: message }, { quoted: m });
        } else {
            await wbk.sendMessage(m.chat, { text: message }, { quoted: m });
        }
    } catch (err) {
        console.log(err);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;        

case 'ghs': 
case 'githubsearch':
case 'githubs': {
	if (!text || !text.includes('/')) {
		return newReply(`Kakak bisa pakai format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} WhiskeySockets/Baileys*`);
	}
	const [username, repoName] = text.split('/');
	try {
		const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
		if (response.status === 200) {
			const repoData = response.data
			let formattedInfo = `📦 *Repository Name:* ${repoData.name}\n`;
			formattedInfo += `📝 *Description:* ${repoData.description}\n`;
			formattedInfo += `👤 *Owner:* ${repoData.owner.login}\n`;
			formattedInfo += `⭐ *Stars:* ${repoData.stargazers_count}\n`;
			formattedInfo += `🍴 *Forks:* ${repoData.forks_count}\n`;
			formattedInfo += `🔗 *URL:* ${repoData.html_url}\n\n`;
			formattedInfo += `🛠️ Pengen download ${command}? Ketik aja *${prefix}gitclone url* ya, kak! 🚀`;
			newReply(formattedInfo);
		} else {
			await newReply(`Tidak dapat mengambil informasi repositori.`)
		}
	} catch (error) {
		console.log(error);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
	}
    db.data.users[m.sender].limit -= 1;
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'scsearch':
case 'soundcloudsearch':
case 'soundclouds': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
	try {
		let results = await soundCloudSearch(text);
		if (results.length === 0) return newReply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
		let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
		let list = '';
		let no = 1;
		for (let i of results) {
			list += `\n${no++}. 🎵 *${i.title}*\n` +
				`🔗 *Link:* ${i.url}\n`;
		}
		await wbk.sendMessage(
			m.chat, {
				text: teks + list,
				quoted: m
			}
		);
	} catch (error) {
		console.log(error);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
	}
    db.data.users[m.sender].limit -= 1;
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'pins':
case 'pinterestsearch':
case 'pinterests': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Enter Query!`);
    await reactionMessage('⏱️');
    let results;
    try {
        results = await pinterest(text);
    } catch (error) {
        console.error('Error fetching Pinterest data:', error);
        return newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`);
    }
    if (!results || results.length === 0) return newReply('Tidak ada hasil ditemukan.');
    if (m.device === 'ios') {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results);
        const selectedResults = results.slice(0, 10);
        let images = selectedResults.map((result) => ({
            image: { url: result.image },
            caption: `${litespace(`IMAGE ${index + 1}`)}\n*Upload by:* ${result.upload_by || 'Tidak Ada'}\n*Fullname:* ${result.fullname || 'Tidak Ada'}\n*Followers:* ${result.followers || 'Tidak Ada'}\n*Caption:* ${result.caption || 'Tidak Ada'}\n*Image:* ${result.image}\n*Source:* ${result.source}`
        }));
        await wbk.sendAlbumMessage(m.chat, images, { quoted: m, delay: 2000 });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak?, lanjut lagi aja 😋☕`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: {
                        displayText: "🔄 Lanjut Lagi"
                    }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: "📜 Kembali ke Menu"
                    }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
   } else if (m.device === 'android' || m.device === 'web' || m.device === 'dekstop') {
        async function createImage(url) {
            const {
                imageMessage
            } = await generateWAMessageContent({
                image: {
                    url
                }
            }, {
                upload: wbk.waUploadToServer
            });
            return imageMessage;
        }
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results);
        let selectedImages = results.slice(0, 10);
        let push = [];
        let i = 1;
        for (let message of selectedImages) {
            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `👤 *Diunggah oleh* : ${message.upload_by || 'Tidak Diketahui'}\n` +
                          `📛 *Nama Lengkap* : ${message.fullname || 'Tidak Diketahui'}\n` +
                          `👥 *Pengikut* : ${message.followers || 'Belum Ada'}\n` +
                          `📝 *Caption* : ${message.caption || 'No Caption'}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: botName
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*Gambar* - ${i++}`,
                    hasMediaAttachment: true,
                    imageMessage: await createImage(message.directLink || message.image)
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                        "name": "cta_url",
                        "buttonParamsJson": `{
                            "display_text": "View Source 👀",
                            "url": "${message.link}", 
                            "merchant_url": "${message.link}"
                        }`
                    }]
                })
            });
        }
        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: mess.done
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: wm
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [
                                ...push
                            ]
                        })
                    })
                }
            }
        }, { quoted: m });

        await wbk.relayMessage(m.chat, msg.message, {
            messageId: msg.key.id
        });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak?, lanjut lagi aja 😋☕`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: {
                        displayText: "🔄 Lanjut Lagi"
                    }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: "📜 Kembali ke Menu"
                    }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
    }
    db.data.users[m.sender].limit -= 1;
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'ttsearch':
case 'tiktoksearch':
case 'tiktoks': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Kakak lupa kasih kata kunci! Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
    await reactionMessage('⏱️');
    let results
    try {
    	results = await tiktokSearchVideo(text);
    } catch (error) {
        console.error('Error fetching TikTok data:', error);
        return newReply(`‼️ ERROR HUBUNGI OWNER ‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`);
    }
    if (!results || results.videos.length === 0) return newReply('Tidak ada hasil ditemukan.');
    if (m.device === 'ios' || m.device === 'dekstop') {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results.videos);
        const selectedResults = results.videos.slice(0, 5);
        const selectedVideos = selectedResults.map((result, index) => ({
            video: { url: `https://tikwm.com${result.play}` },
            caption: `🎥 *VIDEO ${index + 1}*\n` +
            `👤 *Username:* ${result.author.unique_id}\n` +
            `🏷️ *Nickname:* ${result.author.nickname}\n` +
            `⏳ *Duration:* ${result.duration} detik\n` +
            `❤️ *Likes:* ${result.digg_count}\n` +
            `💬 *Comments:* ${result.comment_count}\n` +
            `🔄 *Shares:* ${result.share_count}\n` +
            `🔗 *Link:* https://www.tiktok.com/@${result.author.unique_id}/video/${result.video_id}`
        }));
        await wbk.sendAlbumMessage(m.chat, selectedVideos, { quoted: m, delay: 2000 });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak? Lanjut cari lagi yuk! 😋🎥`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: {
                        displayText: "🔄 Cari Lagi"
                    }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: "📜 Kembali ke Menu"
                    }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
    } else if (m.device === 'android' || m.device === 'web') {
        async function createVideo(url) {
            const { videoMessage } = await generateWAMessageContent({
                video: { url }
            }, { upload: wbk.waUploadToServer });
            return videoMessage;
        }
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results.videos);
        let selectedVideos = results.videos.slice(0, 5);
        let push = [];
        let i = 1;
        for (let message of selectedVideos) {
            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `👤 *Username* : ${message.author.unique_id}\n` +
                          `🏷️ *Nickname* : ${message.author.nickname}\n` +
                          `⏳ *Duration* : ${message.duration} detik\n` +
                          `❤️ *Likes* : ${message.digg_count}\n` +
                          `💬 *Comments* : ${message.comment_count}\n` +
                          `🔄 *Shares* : ${message.share_count}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: botName
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*Video* - ${i++}`,
                    hasMediaAttachment: true,
                    videoMessage: await createVideo(`https://tikwm.com${message.play}`)
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                        "name": "cta_url",
                        "buttonParamsJson": `{
                            "display_text": "Lihat Video 🎥",
                            "url": "https://www.tiktok.com/@${message.author.unique_id}/video/${message.video_id}", 
                            "merchant_url": "https://www.tiktok.com/@${message.author.unique_id}/video/${message.video_id}"
                        }`
                    }]
                })
            });
        }
        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: mess.done
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: wm
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [...push]
                        })
                    })
                }
            }
        }, { quoted: m });
        await wbk.relayMessage(m.chat, msg.message, {
            messageId: msg.key.id
        });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak? Lanjut cari lagi yuk! 😋🎥`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: {
                        displayText: "🔄 Cari Lagi"
                    }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: "📜 Kembali ke Menu"
                    }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
    }
    db.data.users[m.sender].limit -= 1;
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'lirik':
case 'liriks':
case 'lyric':
case 'lyrics': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} [judul lagu]`);
    try {
        await reactionMessage('⏱️');
        const result = await geniusLyrics(text);
        console.log(result);
        if (!result.status) {
            return newReply(`❌ Lirik tidak ditemukan untuk lagu *"${text}"*. Coba cek kembali judulnya.`);
        }
        const caption = `🎵 *Lirik Lagu*\n\n📌 *Judul:* ${result.title || text}\n🔗 *Sumber:* ${result.url}\n\n📝 *Lirik:*\n${result.lyrics}`;
        if (result.thumbnail) {
            await wbk.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: caption }, { quoted: m });
        } else {
            await wbk.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
        await reactionMessage('✅');
    } catch (error) {
        console.error("❌ Error saat mengambil lirik:", error.message);
        await newReply(`‼️ ERROR HUBUNGI OWNER ‼️\n_Ada kesalahan saat mengambil lirik lagu_\n\n${error.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'lirik2':
case 'liriks2':
case 'lyric2':
case 'lyrics2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} [judul lagu]`);
    try {
        await reactionMessage('⏱️');
        const result = await googleLyrics(text);
        if (result.error) {
            return newReply(`❌ Gagal mengambil lirik lagu. Error: ${result.error}`);
        }
        if (!result.lyrics) {
            return newReply(`❌ Lirik tidak ditemukan untuk lagu "${text}". Pastikan judulnya benar.`);
        }
        const caption = `🎵 *Lirik Lagu*\n\n📌 *Judul:* ${result.title || text}\n📍 *Album:* ${result.subtitle || 'Tidak diketahui'}\n\n📝 *Lirik:*\n${result.lyrics}`;
        await wbk.sendMessage(m.chat, { text: caption }, { quoted: m });
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ ERROR HUBUNGI OWNER ‼️\n_Ada kesalahan saat mengambil lirik lagu_\n\n${error.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'groupwasearch':
case 'groupwas': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} *Palestina*`);
    try {
        const results = await cariGC(text);
        if (!results || results.length === 0) {
            return newReply('Tidak ditemukan hasil yang relevan.');
        }
        let groupCard = [];
        let no = 1;
        for (const { title, link, desc, thumb } of results) {
            groupCard.push({
                title: `${no++}. ${title}`,
                rows: [
                    {
                        header: `Deskripsi: ${desc}`,
                        title: `🔗 ${link}`,
                        description: `Deskripsi: ${desc}`,
                        id: `.groupwasearchjoin ${link}`,
                    }
                ]
            });
        }
        let buffer = await getBuffer(results[0].thumb);
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'Hasil Pencarian Grup',\n  sections: ${JSON.stringify(groupCard)}\n}`
            }
        ];
        sendButtonImage(m.chat, "*乂 GROUP WA SEARCH*", `Hasil pencarian grup untuk: ${text}`, buffer, button, m);
    } catch (err) {
        console.log(err);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'devianart': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Masukkan kata kunci pencarian!`);
    await reactionMessage('⏱️');
    let results;
    try {
        results = await devianArt(text);
        results = results.filter(item => item.img !== undefined);
    } catch (error) {
        console.error('Error fetching DeviantArt data:', error);
        return newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`);
    }
    if (!results || results.length === 0) return newReply('Tidak ada hasil ditemukan.');
    if (m.device === 'ios') {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results);
        const selectedResults = results.slice(0, 10);
        const images = selectedResults.map((result, index) => ({
            image: { url: result.img },
            caption: `${litespace(`GAMBAR ${index + 1}`)}\n*Judul:* ${result.title || 'Tidak Ada'}\n*Sumber:* ${result.fullLink}`
        }));
        await wbk.sendAlbumMessage(m.chat, images, { quoted: m, delay: 2000 });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak?, coba lagi 😋☕`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: { displayText: "🔄 Cari Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
    } else {
        async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent({
                image: { url }
            }, { upload: wbk.waUploadToServer });
            return imageMessage;
        }
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(results);
        let selectedImages = results.slice(0, 10);
        let push = [];
        let i = 1;
        for (let message of selectedImages) {
            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `🎨 *Judul* : ${message.title || 'Tidak Diketahui'}\n🔗 *Sumber* : ${message.fullLink}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: botName }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `*Gambar* - ${i++}`,
                    hasMediaAttachment: true,
                    imageMessage: await createImage(message.img)
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                        "name": "cta_url",
                        "buttonParamsJson": `{
                            "display_text": "Lihat Sumber 👀",
                            "url": "${message.fullLink}", 
                            "merchant_url": "${message.fullLink}"
                        }`
                    }]
                })
            });
        }
        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: mess.done }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: wm }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] })
                    })
                }
            }
        }, { quoted: m });
        await wbk.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
        await wbk.sendMessage(m.chat, {
            text: `Kurang memuaskan Kak?, coba lagi 😋☕`,
            footer: wm,
            buttons: [{
                    buttonId: `${prefix + command} ${text}`,
                    buttonText: { displayText: "🔄 Cari Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
    }
    db.data.users[m.sender].limit -= 1;
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'groupwasearchjoin': { //
    if (!text) return newReply(`Kirim perintah ${prefix + command} _link group_`);
	let teks = `「 *JOIN GROUP* 」\n\n${text}\n`;
    let link = text;
    const urlButton = {
        name: "cta_url",
        buttonParamsJson: `{
        	"display_text": "Join Group",
        	"url": "${link}",
        	"merchant_url": "${link}"
		}`,
    };
	let buttonArray = [urlButton];
    wbk.sendButtonText(m.chat, buttonArray, teks, footer, m);  
}
break; 

case 'happymod': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
	try {
        await reactionMessage('⏱️');
		const results = await happymod(text);
		if (results.length === 0) return newReply(`⚠️ Mora gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
		let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating:* ${app.rating}\n🔗 ${app.link}`).join('\n\n');
		newReply(`📦 *Hasil Pencarian HappyMod untuk:* ${text}\n\n${result}`);
        await reactionMessage('✅');
	} catch (error) {
		console.log(error);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
	}
    db.data.users[m.sender].limit -= 1;
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'playstore': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} WhatsApp* biar Mora bisa bantu cari aplikasinya! 📲✨`);
	try {
		await reactionMessage('⏱️');
		let hasil = await playstore(text);
		if (!hasil || hasil.length === 0 || hasil.message) {
			return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
		}
		let replyText = `📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci:* ${text}\n\n`;
		hasil.slice(0, 3).forEach((item, i) => {
			replyText += `*${i + 1}. ${item.nama}*\n`;
			replyText += `👤 *Developer:* ${item.developer}\n`;
			replyText += `⭐ *Rating:* ${item.rate}\n`;
			replyText += `🔗 *Link:* ${item.link}\n`;
			replyText += `🏢 *Link Developer:* ${item.link_dev}\n\n`;
		});
		await wbk.sendMessage(
			m.chat, {
				image: { url: hasil[0].img },
				caption: `🖼️ *Gambar Aplikasi Pertama:* ${hasil[0].nama}`,
				quoted: m
			}
		);
		await wbk.sendMessage(
			m.chat, {
				text: replyText,
                quoted: m 
            }
		);
	} catch (error) {
		console.log(error);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
	}
    db.data.users[m.sender].limit -= 1;
	db.data.settings[botNumber].totalhit += 1;
}
break;

case 'imdb': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);
	try {
		await reactionMessage('⏳');
		let {
			data
		} = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
		if (data.Response === 'False') {
			return newReply(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
		}
		let imdbInfo = `🎬 *Judul:* ${data.Title}\n`;
		imdbInfo += `📅 *Tahun:* ${data.Year}\n`;
		imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
		imdbInfo += `📆 *Rilis:* ${data.Released}\n`;
		imdbInfo += `⏳ *Durasi:* ${data.Runtime}\n`;
		imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
		imdbInfo += `👨‍💼 *Sutradara:* ${data.Director}\n`;
		imdbInfo += `✍️ *Penulis:* ${data.Writer}\n`;
		imdbInfo += `👥 *Aktor:* ${data.Actors}\n`;
		imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
		imdbInfo += `🌐 *Bahasa:* ${data.Language}\n`;
		imdbInfo += `🌍 *Negara:* ${data.Country}\n`;
		imdbInfo += `🏆 *Penghargaan:* ${data.Awards}\n`;
		imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
		imdbInfo += `🏙️ *Produksi:* ${data.Production || '-'}\n`;
		imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
		imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;
		await wbk.sendMessage(m.chat, {
			image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
			caption: imdbInfo,
            quoted: m 
        });
		newReply(`✅ *Berhasil menampilkan informasi film!*`);
	} catch (error) {
		console.log(error);
       	await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
	}
    db.data.users[m.sender].limit -= 1;
	db.data.settings[botNumber].totalhit += 1;
}
break;

// soundeffect.js
case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'squirrel': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let set
		if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
		if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
		if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
		if (/earrape/.test(command)) set = '-af volume=12'
		if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
		if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
		if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
		if (/reverse/.test(command)) set = '-filter_complex "areverse"'
		if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
		if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
		if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
		if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
		if (/audio/.test(mime)) {
			await reactionMessage('⏱️');
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			let ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return newReply(err)
				let buff = fs.readFileSync(ran)
				wbk.sendMessage(m.chat, {
					audio: buff,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		} else newReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
	} catch (e) {
		newReply(e)
	}
}
db.data.users[m.sender].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

// soundtiktok.js
case 'hayyukbangun': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/iz7qnd.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Waktu Ku Kecil"`,
        mimetype: 'audio/mpeg',
        fileName: 'hayyukbangun.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm} | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, { quoted: m });
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/iz7qnd.mp3'},
        caption: `Sound Tiktok "Hayyuk Bangun"`,
        mimetype: 'audio/mpeg',
        fileName: 'hayyukbangun.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'waktukukecil': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/lr3vpc.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Waktu Ku Kecil"`,
        mimetype: 'audio/mpeg',
        fileName: 'waktu-ku-kecil.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/lr3vpc.mp3'},
        caption: `Sound Tiktok "Waktu Ku Kecil"`,
        mimetype: 'audio/mpeg',
        fileName: 'waktu-ku-kecil.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'drumdungtak': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/uhkq1t.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Drum Dung-Tak Dung-Tak"`,
        mimetype: 'audio/mpeg',
        fileName: 'drum-dung-tak-dung-tak.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/uhkq1t.mp3'},
        caption: `Sound Tiktok "Drum Dung-Tak Dung-Tak"`,
        mimetype: 'audio/mpeg',
        fileName: 'drum-dung-tak-dung-tak.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'goyangdumang': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/j0d9yd.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Goyang Dumang"`,
        mimetype: 'audio/mpeg',
        fileName: 'GoyangDumang.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/j0d9yd.mp3'},
        caption: `Sound Tiktok "Goyang Dumang"`,
        mimetype: 'audio/mpeg',
        fileName: 'GoyangDumang.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'kauadalahorangfavoritku': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/fz3x5n'},
        ptt: true,
        caption: `Sound Tiktok "Kau Adalah Orang Favoritku"`,
        mimetype: 'audio/mpeg',
        fileName: 'kau-adalah-orang-favoritku.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/fz3x5n'},
        caption: `Sound Tiktok "Kau Adalah Orang Favoritku"`,
        mimetype: 'audio/mpeg',
        fileName: 'kau-adalah-orang-favoritku.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'hadirmusangatberharga': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/24oxnf.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Hadirmu Sanga Berharga"`,
        mimetype: 'audio/mpeg',
        fileName: 'hadirmu-sangat-berharga.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/24oxnf.mp3'},
        caption: `Sound Tiktok "Hadirmu Sangat Berharga"`,
        mimetype: 'audio/mpeg',
        fileName: 'hadirmu-sangat-berharga.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'pleasedontleave': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/wd3xkp.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Please Dont Leave"`,
        mimetype: 'audio/mpeg',
        fileName: 'please-dont-leave.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/wd3xkp.mp3'},
        caption: `Sound Tiktok "Please Dont Leave"`,
        mimetype: 'audio/mpeg',
        fileName: 'please-dont-leave.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'geboymujaer': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/ta58cr.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Geboy Mujaer"`,
        mimetype: 'audio/mpeg',
        fileName: 'geboy-mujaer.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/ta58cr.mp3'},
        caption: `Sound Tiktok "Geboy Mujaer"`,
        mimetype: 'audio/mpeg',
        fileName: 'geboy-mujaer.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'alasannyaseringkali': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/27jogx.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Alasannya Sering Kali"`,
        mimetype: 'audio/mpeg',
        fileName: 'alasannya-sering-kali.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/27jogx.mp3'},
        caption: `Sound Tiktok "Alasannya Sering Kali"`,
        mimetype: 'audio/mpeg',
        fileName: 'alasannya-sering-kali.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
break
case 'tumbuhlebihbaik': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/8et666.mp3'},
        ptt: true,
        caption: `Sound Tiktok "Tumbuh Lebih Baik"`,
        mimetype: 'audio/mpeg',
        fileName: 'tumbuh-lebih-baik.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
                serverMessageId: 1276
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/8et666.mp3'},
        caption: `Sound Tiktok "Tumbuh Lebih Baik"`,
        mimetype: 'audio/mpeg',
        fileName: 'tumbuh-lebih-baik.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
                serverMessageId: 1276
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;

case 'iloveyouloveme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    await sleep(5000);
    // Send as PTT
    const pttMessageOptions = {
        audio: {url: 'https://files.catbox.moe/p82sew.mp3'},
        ptt: true,
        caption: `Sound Tiktok "I Love You, You Love Me"`,
        mimetype: 'audio/mpeg',
        fileName: 'i-love-you-love-me.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
                serverMessageId: 1276
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, pttMessageOptions, {  quoted: m });
    await reactionMessage('✅');
    // Send as Document
    const documentMessageOptions = {
        document: {url: 'https://files.catbox.moe/p82sew.mp3'},
        caption: `Sound Tiktok "I Love You, You Love Me"`,
        mimetype: 'audio/mpeg',
        fileName: 'i-love-you-love-me.mp3',
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: saluran,
                newsletterName: `Ikuti Saluran Kami | ${wm}`,
                serverMessageId: 1276
            },
            businessMessageForwardInfo: {
                businessOwnerJid: wbk.decodeJid(wbk.user.id)
            },
        }
    };
    await wbk.sendMessage(m.chat, documentMessageOptions, { quoted: m });
    await reactionMessage('✅');
}
db.data.settings[botNumber].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;


// stalk.js
case 'pinstalk':
case 'pintereststalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const username = text.trim();
    if (!username) {
        return newReply("Harap masukkan username Pinterest yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const userDetails = await pinterest.profile(username);
        if (!userDetails.status) return newReply(userDetails.result.message);
        const user = userDetails.result;
        let message = `${litespace("PINTEREST PROFILE")}\n\n`;
        message += `*Username:* ${user.username}\n`;
        message += `*Full Name:* ${user.full_name || 'N/A'}\n`;
        message += `*Bio:* ${user.bio || 'N/A'}\n`;
        message += `*Profile URL:* ${user.profile_url}\n`;
        message += `*Profile Pic:* ${user.image.large || 'N/A'}\n`;
        message += `*Followers:* ${user.stats.followers}\n`;
        message += `*Following:* ${user.stats.following}\n`;
        message += `*Pins:* ${user.stats.pins}\n`;
        message += `*Boards:* ${user.stats.boards}\n`;
        message += `*Likes:* ${user.stats.likes}\n`;
        message += `*Website:* ${user.website || 'N/A'}\n`;
        message += `*Location:* ${user.location || 'N/A'}\n`;
        message += `*Country:* ${user.country || 'N/A'}\n`;
        message += `*Created At:* ${user.created_at || 'N/A'}\n`;
        message += `*Last Login:* ${user.last_login || 'N/A'}\n`;
        message += `*Email:* ${user.email || 'N/A'}\n`;
        message += `*Account Type:* ${user.account_type || 'N/A'}\n`;
        message += `*Is Verified:* ${user.is_verified ? 'Yes' : 'No'}\n`;
        message += `*Is Partner:* ${user.is_partner ? 'Yes' : 'No'}\n`;
        message += `*Social Links:* \n`;
        message += `  - Twitter: ${user.social_links.twitter || 'N/A'}\n`;
        message += `  - Facebook: ${user.social_links.facebook || 'N/A'}\n`;
        message += `  - Instagram: ${user.social_links.instagram || 'N/A'}\n`;
        message += `  - YouTube: ${user.social_links.youtube || 'N/A'}\n`;
        message += `  - Etsy: ${user.social_links.etsy || 'N/A'}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;  

case 'githubstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const username = text.trim();
    if (!username) {
        return newReply("Harap masukkan username GitHub yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const userDetails = await githubstalk(username);
        let message = `${litespace("GITHUB STALK")}\n\n`;
        message += `*Username:* ${userDetails.username}\n`;
        message += `*Nickname:* ${userDetails.nickname || 'N/A'}\n`;
        message += `*Bio:* ${userDetails.bio || 'N/A'}\n`;
        message += `*ID:* ${userDetails.id}\n`;
        message += `*Node ID:* ${userDetails.nodeId}\n`;
        message += `*Profile Pic:* ${userDetails.profile_pic}\n`;
        message += `*Profile URL:* ${userDetails.url}\n`;
        message += `*Type:* ${userDetails.type}\n`;
        message += `*Admin:* ${userDetails.admin ? 'Yes' : 'No'}\n`;
        message += `*Company:* ${userDetails.company || 'N/A'}\n`;
        message += `*Blog:* ${userDetails.blog || 'N/A'}\n`;
        message += `*Location:* ${userDetails.location || 'N/A'}\n`;
        message += `*Email:* ${userDetails.email || 'N/A'}\n`;
        message += `*Public Repos:* ${userDetails.public_repo}\n`;
        message += `*Public Gists:* ${userDetails.public_gists}\n`;
        message += `*Followers:* ${userDetails.followers}\n`;
        message += `*Following:* ${userDetails.following}\n`;
        message += `*Created At:* ${userDetails.created_at}\n`;
        message += `*Updated At:* ${userDetails.updated_at}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'npmstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const packageName = text.trim();
    if (!packageName) {
        return newReply("Harap masukkan nama paket NPM yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const packageDetails = await npmstalk(packageName); 
        let message = `${litespace("NPM STALK")}\n\n`;
        message += `*Nama Paket:* ${packageDetails.name}\n`;
        message += `*Versi Terbaru:* ${packageDetails.versionLatest}\n`;
        message += `*Versi Pertama Dipublikasikan:* ${packageDetails.versionPublish}\n`;
        message += `*Jumlah Versi Tersedia:* ${packageDetails.versionUpdate}\n`;
        message += `*Jumlah Dependensi Terbaru:* ${packageDetails.latestDependencies}\n`;
        message += `*Jumlah Dependensi Versi Pertama:* ${packageDetails.publishDependencies}\n`;
        message += `*Waktu Publikasi Pertama:* ${packageDetails.publishTime}\n`;
        message += `*Waktu Publikasi Terbaru:* ${packageDetails.latestPublishTime}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mlstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const args = text.trim().split(' ');
    if (args.length < 2) {
        return newReply("Harap masukkan ID game dan zone ID. Contoh: !mlstalk <gameId> <zoneId>");
    }
    const gameId = args[0];
    const zoneId = args[1]; 
    try {
        await reactionMessage('⏱️');
        const gameDetails = await mlstalk(gameId, zoneId); 
        let message = `${litespace("ML STALK")}\n\n`;
        message += `*Nama Game:* ${gameDetails.name || 'N/A'}\n`;
        message += `*Detail Game:* ${gameDetails.detail || 'N/A'}\n`;
        message += `*ID Game:* ${gameDetails.id || 'N/A'}\n`;
        message += `*Zone ID:* ${zoneId}\n`;
        message += `*Waktu Publikasi:* ${gameDetails.publishTime || 'N/A'}\n`;
        message += `*Waktu Terbaru:* ${gameDetails.latestPublishTime || 'N/A'}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (err) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ttstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('Harap masukkan username TikTok!');
    try {
        await reactionMessage('⏱️');
        const result = await tiktokStalk(text);
        if (result.error) {
            return reply(`Error: ${result.error}`);
        }
        const {
            username,
            nama,
            bio,
            verifikasi,
            totalfollowers,
            totaldisukai,
            totalvideo,
            avatar
        } = result;
        let message = `${litespace("TIKTOK STALK")}\n\n`;
        message += `*Username*: ${username || '-'}\n`;
        message += `*Nama*: ${nama || '-'}\n`;
        message += `*Bio*: ${bio || '-'}\n`;
        message += `*Terverifikasi*: ${verifikasi ? 'Ya' : 'Tidak'}\n`;
        message += `*Total Followers*: ${totalfollowers.toLocaleString()}\n`;
        message += `*Total Like*: ${totaldisukai.toLocaleString()}\n`;
        message += `*Total Video*: ${totalvideo.toLocaleString()}`;
        await wbk.sendMessage(m.chat, {
            image: { url: avatar },
            caption: message,
            quoted: m
        });
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

// stickerpack.js
case 'popoyo-p1': {
wbk.relayMessage(m.chat, {
  viewOnceMessage: {
    message: {
      stickerPackMessage: {
        stickerPackId: "com.snowcorp.stickerly.android.stickercontentprovider 45ee5a18-1e4b-4072-8c36-f0721bb1af79",
        name: "Popoyo Part 1 by WBK",
        publisher: "AIzeroMD - wbkcloudx.web.id - WBK",
        stickers: [
          {
            fileName: '00_dejbK8kM9GB1%2BQVNa94BoxsusPcN375ziWOOk4P2K04%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '01_XKvixq39Ocdnp1Q2XMilULI3FbaTsA%2FWoeIPvxMAJWE%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '02_iemetYQi4QKmc5ASiisuD0t2LtD7u%2BevYtqmgJELpi4%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '03_uxljffpKO6f8ufj%2FJI1IztrPUY8WjR5660sYTA85sAk%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '04_Zg87FgSOVRcTKhOAwNVwzCr%2BIF58skkYIDdx0a52VzI%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '05_K8Uvtdk5%2FIL%2FuHfDTDo3RnT1rIesFlD%2BI%2BWbASsw5uA%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '06_YG3AQC6U8TYSM2QASO0VbUDu9WjHHdrWrKILswo%2F4os%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '07_rBV7xCYjpi1yzUwy4wb1EvZVoeT7nKumcaX6YiTKqNw%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '08_zevd6r01k3PxR%2F%2F622Oe9XpaFDDnkgyrSvLdo6fjqdY%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '09_eKWXU%2BsYgnuvyVIgXILDhkHFcaw6yHrNYc1%2ByMw9k2w%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '10_5uOR5ppaIsh%2BE1tbSRrMaKp51heiods2fcTYlS0YIn0%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '11_4BZ5IRFQzQ0JcczrOMFRRHGU6oBTGmuHDLaNnYBat7A%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '12_m%2FU91ldEjgC%2FHagYzEw9CVE1%2Be%2BSxm6rU4ID2fMQga8%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '13_OX2qLnDPjk60GO2hgHTF0AGQo1VMYmVkLStHU1qBqeU%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '14_o8DKKjnzeXJdIRl%2F%2B1J2hetIeP0wZIIda2M67KVc1T0%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '15_FV9ZdwBNKWTGdm4VY3cQANfnhoETXpA16sN170A3csM%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          },
          {
            fileName: '16_R2iB65aMThsRZ1mulgXsj6UsFeVyZzoDpfLs%2BNDNeuo%3D.webp',
            isAnimated: true,
            emojis: [],
            accessibilityLabel: '',
            isLottie: false,
            mimetype: 'image/webp'
          }
        ],
        fileLength: "728050",
        fileSha256: "jhdqeybzxe/pXEAT4BZ1Vq01NuHF1A4cR9BMBTzsLoM=",
        fileEncSha256: "+medG1NodVaMozb3qCx9NbGx7U3jq37tEcZKBcgcGyw=",
        mediaKey: "Wvlvtt7qAw5K9QIRjVR/vVStGPEprPr32jac0fig/Q0=",
        directPath: "/v/t62.15575-24/19456633_957360275979142_7178470795155703868_n.enc?ccb=11-4&oh=01_Q5AaID_hHQopvEhICRkFbC5nh80P0zPAAG1_KU1x99mZavap&oe=67BE5AB7&_nc_sid=5e03e0",
        contextInfo: {},
        packDescription: "Sticker Pack by WBK | Dibuat oleh Bot",
        mediaKeyTimestamp: "1736088676",
        trayIconFileName: "com.snowcorp.stickerly.android.stickercontentprovider 45ee5a18-1e4b-4072-8c36-f0721bb1af79.png",
        thumbnailDirectPath: "/v/t62.15575-24/30579674_1560534077998343_1313347342073966129_n.enc?ccb=11-4&oh=01_Q5AaIED5tKtFpV-GiwNUvDYM4lIisD35D3FYJgYD5zyHe0Mq&oe=67BE5338&_nc_sid=5e03e0",
        thumbnailSha256: "FQFP03spSHOSBUTOJkQg/phVS1I0YqtoqE8DoFZ/cmw=",
        thumbnailEncSha256: "OALtE35ViGAkU7DROBsJ1RK1dgma/dLcjpvUg62Mj8c=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        imageDataHash: "a5a346e645460b3838ad525cacfb6fe28ae93d08d7d0d931fafa5177a25db1e5",
        stickerPackSize: "5207140",
        stickerPackOrigin: "THIRD_PARTY"
      }
    }
  }
}, {});
}
break;

// store.js
case 'list':
case 'store': {
	try {
		const keys = Object.keys(db.data.chats[m.chat].liststore);
		if (keys.length === 0) return newReply(`Belum ada list message di grup`)
		let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
		const result = [];
		const list = [];
		keys.forEach(key => {
			result.push({
				key: key
			});
			list.push({
				header: capitalizeWords(key) + " 🛒",
				title: "klik to show product",
				id: key
			})
		});
		for (let i of result) {
			teks += ` · ${i.key.toUpperCase()}\n`
		}
		teks += `\n_Klik untuk melihat_\n_store produknya_`
		let button = [{
			"name": "single_select",
			"buttonParamsJson": `{\n\"title\": \"Store List 🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
		}]
		await sendButtonImage(m.chat, '', teks, {
			url: thumbUrl
		}, button, m)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'dellist': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	try {
		const keys = Object.keys(db.data.chats[m.chat].liststore);
		if (keys.length === 0) return newReply(`Belum ada list message di database`)
		if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
		if (!db.data.chats[m.chat].liststore[text]) return newReply(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
		delete db.data.chats[m.chat].liststore[text]
		m.reply(`Sukses delete list message dengan key *${q}*`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'addlist': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	var args1 = q.split("|")[0].toLowerCase()
	var args2 = q.split("|")[1]
	if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
	if (db.data.chats[m.chat].liststore[args1]) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
	try {
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: url,
				video: ""
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		} else if (/video/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: url
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		} else {
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: ""
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		}
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'updatelist':
case 'update': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	var args1 = q.split("|")[0].toLowerCase()
	var args2 = q.split("|")[1]
	if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
	if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
	try {
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: url,
				video: ""
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		} else if (/video/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: url
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		} else {
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: ""
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		}
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'tambah': {
	if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
	try {
		arg = args.join(' ')
		atas = arg.split('+')[0]
		bawah = arg.split('+')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one + nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'kurang': {
	if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* · *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
	try {
		arg = args.join(' ')
		atas = arg.split('-')[0]
		bawah = arg.split('-')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one - nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'kali': {
	if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
	try {
		arg = args.join(' ')
		atas = arg.split('*')[0]
		bawah = arg.split('*')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one * nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'bagi': {
	if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
	try {
		arg = args.join(' ')
		atas = arg.split('/')[0]
		bawah = arg.split('/')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one / nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;


db.data.settings[botNumber].totalhit += 1;
db.data.settings[botNumber].totalhit += 1;
break;
;


// tool.js
case 'ssweb': {
    if (!isPremium) return newReply(mess.premium);
    if (!args[0]) return newReply(
        `📸 *Cara Pakai Screenshot Web!*\n\n` +
        `Gunakan perintah: ${prefix + command} <tipe> <url web>\n\n` +
        `📌 *Tipe yang tersedia:*\n` +
        ` ⌬ 📱 hp → Tampilan mobile\n` +
        ` ⌬ 💻 pc → Tampilan desktop\n` +
        ` ⌬ 📟 tab → Tampilan tablet\n\n` +
        `🔍 *Contoh penggunaan:*\n` +
        `${prefix + command} hp https://www.ryzenoffc.my.id`
    );
    if (!args[1]) return newReply(
        `⚠️ *URL tidak boleh kosong!*\n\n` +
        `Gunakan format: ${prefix + command} <tipe> <url web>\n\n` +
        `💡 *Contoh:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
    );
    const key = await pickRandom(["1b484c", "965abb", "731a82", "194174"]);
    let deviceType, dimension, deviceName;
    if (args[0] === 'hp') {
        deviceType = "phone";
        dimension = "480x800";
        deviceName = "📱 Mobile View";
    } else if (args[0] === 'pc') {
        deviceType = "desktop";
        dimension = "1024x768";
        deviceName = "💻 Desktop View";
    } else if (args[0] === 'tab') {
        deviceType = "tablet";
        dimension = "800x1280";
        deviceName = "📟 Tablet View";
    } else {
        return newReply(
            `❌ *Tipe tidak dikenali!*\n\n` +
            `Gunakan salah satu tipe berikut:\n` +
            ` ⌬ 📱 hp\n ⌬ 💻 pc\n ⌬ 📟 tab\n\n` +
            `💡 *Contoh:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
        );
    }
    if (db.data.users[m.sender].limit < 1) {
        return newReply(
            `⛔ *Limit habis!*\n` +
            `Silakan hubungi pemilik bot untuk mendapatkan limit tambahan.\n\n` +
            `📞 *Owner:* ${ownnomor}`
        );
    }
    try {
        await wbk.sendMessage(m.chat, {
            image: {
                url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=${deviceType}&dimension=${dimension}&format=png&cacheLimit=0&delay=1000`
            },
            caption: `✅ *Screenshot Berhasil!*\n\n` +
                `🔗 *URL:* ${args[1]}\n` +
                `📌 *Tipe:* ${deviceName}\n` +
                `⏳ *Waktu proses:* ${latensi.toFixed(4)}s\n\n` +
                `🚀 Screenshot siap digunakan!`
        }, { quoted: m });
        await m.react('📸');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case "ipwhois": {
    if (!text) return newReply(`Kirim perintah:\n\n${prefix + command} <IP Address>\n\n📌 Contoh:\n${prefix + command} 114.5.213.103`);
    const ip = text.trim();
    const apiUrl = `https://ipwho.is/${ip}`;
    try {
        newReply("🔍 Sedang mencari informasi, mohon tunggu...");
        const data = await fetchJson(apiUrl);
        if (data.success) {
            const flagEmoji = data.flag?.emoji || "🏳️";
            let messageText = "📍 *IP Whois Information*\n";
            messageText += `🌐 *IP Address*: ${data.ip}\n`;
            messageText += `🗺️ *Tipe*: ${data.type}\n`;
            messageText += `🌍 *Benua*: ${data.continent} (${data.continent_code})\n`;
            messageText += `🇨🇺 *Negara*: ${data.country} (${data.country_code}) ${flagEmoji}\n`;
            messageText += `🏙️ *Kota*: ${data.city}, ${data.region} (${data.region_code})\n`;
            messageText += `📞 *Kode Panggilan*: +${data.calling_code}\n`;
            messageText += `📫 *Kode Pos*: ${data.postal}\n`;
            messageText += `🏛️ *Ibu Kota*: ${data.capital}\n\n`;
            messageText += "📡 *Provider Informasi*\n";
            messageText += `🏢 *ISP*: ${data.connection?.isp || "Tidak tersedia"}\n`;
            messageText += `🔗 *Domain*: ${data.connection?.domain || "Tidak tersedia"}\n`;
            messageText += `🔢 *ASN*: ${data.connection?.asn || "Tidak tersedia"}\n\n`;
            messageText += "🕰️ *Zona Waktu*\n";
            messageText += `🕒 *ID*: ${data.timezone?.id || "Tidak tersedia"}\n`;
            messageText += `🕒 *UTC*: ${data.timezone?.utc || "Tidak tersedia"}\n`;
            messageText += `🕒 *Waktu Sekarang*: ${data.timezone?.current_time || "Tidak tersedia"}\n`;
            newReply(messageText);
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`❌ IP Address tidak valid atau informasi tidak ditemukan.`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'createmail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const namePrefix = args[0];
    if (!namePrefix) return newReply('Silakan berikan prefix nama untuk email Anda.');
    try {
        const account = await createAccountMail(namePrefix);
        let teks = `「 *EMAIL CREATED* 」\n\n`;
        teks += ` · *Email :* ${account.email}\n`;
        teks += ` · *Password :* ${account.password}\n`;
        teks += ` · *ID :* ${account.id}\n`;
        teks += ` · *Token :* ${account.token}\n\n`;
        teks += `> Cek email? Ketik #cekemail <token>`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                                "display_text": "COPY TOKEN",
                                "id": "$${account.token}",
                                "copy_code": "${account.token}"
                            }`
        }];
        sendButton(m.chat, '', teks, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cekmail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit)
    const token = args[0];
    if (!token) {
        return newReply('Silakan berikan token untuk memeriksa pesan.');
    }
    try {
        const messages = await cekPesanMail(token);
        if (messages.length === 0) {
            return newReply('Tidak ada pesan baru.');
        }
        let messageList = '📬 *Pesan Baru:*\n\n';
        messages.forEach((msg, index) => {
            messageList += `${index + 1}. Dari: ${msg.from}\n- Subjek: ${msg.subject}\n\n`;
        });
        newReply(messageList);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cekredirect': {
    if (args.length < 1) return newReply('Harap masukkan URL yang ingin diperiksa! 🧐\nContoh: ' + prefix + 'cekredirect <url>');
    const url = args[0];
    const follow = args[1] === 'true';
    try {
        const result = await redirectDetective(url, follow);
        if (result.status) {
            const lastRedirect = result.result.redirects;
            if (lastRedirect) {
                newReply(`Redirect terakhir untuk URL: ${url}\n\nLink: ${lastRedirect}`);
                await limitReduction(m, prefix, wm);
            } else {
                newReply(`Tidak ada redirects ditemukan untuk URL: ${url}`);
            }
        } else {
            newReply(`Error: ${result.message}`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'vcc':
case 'vccgenerator': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit)
    const type = args[0] || 'MasterCard';
    const count = args[1] || 1;
    const apiUrl = `https://api.awan-attack.my.id/vcc-generator?type=${type}&count=${count}`;
    try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.data && response.data.data.length > 0) {
            let vccList = response.data.data.map((vcc, index) => {
                return `Data VCC ke *${index + 1}*:

*Nama Pemilik:* ${vcc.cardholderName}
*Nomor:* ${vcc.cardNumber}
*CVC:* ${vcc.cvv}
*Exp:* ${vcc.expirationDate}`;
            }).join('\n\n');
            newReply(`${vccList}
        
Contoh cara membuat VCC:
1.Kunjungi situs web resmi bank atau penyedia layanan VCC.
2.Pilih jenis VCC yang diinginkan(misal: MasterCard, Visa).
3.Isi formulir pendaftaran dengan data yang benar.
4.Tunggu proses verifikasi dan aktivasi VCC.

Setelah berhasil aktivasi VCC, pastikan untuk:
- Simpan data VCC dengan aman.
- Gunakan VCC hanya untuk transaksi yang sah.
- Periksa saldo VCC secara berkala.`);
            await limitReduction(m, prefix, wm);
        } else {
            reply('Maaf, gagal mengambil data VCC atau data tidak ditemukan.');
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'toimage':
case 'toimg': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply('Reply Image')
    if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
    await m.react('⏱️');
    let media = await wbk.downloadAndSaveMediaMessage(quoted)
    let ran = await getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) throw err
        let buffer = fs.readFileSync(ran)
        wbk.sendMessage(m.chat, {
            image: buffer
        }, { quoted: m })
        fs.unlinkSync(ran)
        m.react('✅');
        limitReduction(m, prefix, wm);
    })
}
break;

case 'tomp3':
case 'toaudio': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let audioBuffer = await toAudio(media, 'mp4');
        await wbk.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg'
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'tovn': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let audioBuffer = await toAudio(media, 'mp4');
        await wbk.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case "cetakqr":
case "qrtext":
case "toqr": {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply("Masukan Link Untuk Dijadikan QR");
    await m.react('⏱️');
    const apiUrl = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        await wbk.sendMessage(m.chat, {
            image: Buffer.from(response.data),
            caption: 'Sudah Dijadikan QR✨'
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'togithub': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    const userName = githubCDN.user;
    const repoName = githubCDN.repo; 
    const token = githubCDN.token; 
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const ext = path.extname(media);
        const newFileName = `wbk_${Date.now()}${ext}`;
        const newFilePath = path.join(path.dirname(media), newFileName);
        fs.renameSync(media, newFilePath);
        const base64File = fs.readFileSync(newFilePath).toString('base64');
        const payload = {
            message: `Upload wbk_${Date.now()}${ext}`,
            content: base64File,
            branch: 'main', // Ganti sesuai branch Github yg dipakai
            path: `${newFileName}`
        };
        const response = await axios.put(`https://api.github.com/repos/${userName}/${repoName}/contents/${payload.path}`, payload, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const fileUrl = response.data.content.download_url;
        const fileSize = (fs.statSync(newFilePath).size / 1024).toFixed(2);
        const uploadDate = new Date().toLocaleString();
        const uploader = m.pushName;
        const caption = `🔗 *Link File* : ${fileUrl}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${fileUrl}",
                "copy_code": "${fileUrl}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(newFilePath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'tourl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const url = await toUrlUpload(media);
        let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;        

case 'tocatbox': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const ext = path.extname(media);
        const newFileName = `wbk_${Date.now()}${ext}`;
        const newFilePath = path.join(path.dirname(media), newFileName);
        fs.renameSync(media, newFilePath);
        let response = await catbox(newFilePath);
        let fileSize = (fs.statSync(newFilePath).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${response}",
                "copy_code": "${response}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(newFilePath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'tocloudmini': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let response = await cloudmini(media);
        let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        const expiry_time = response.expiry_time;
        const downloadLink = response.URL;
        let caption = `🔗 *Link Media* : ${downloadLink}\n🕛 *Expired* : ${expiry_time}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${downloadLink}",
                "copy_code": "${downloadLink}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'toanonfile': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await anonfile(buffer);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'togofile': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const urlResponse = await gofile(media);
        if (!urlResponse || !urlResponse.data || !urlResponse.data.downloadPage) {
            throw new Error('Gagal mendapatkan URL dari Gofile');
        }
        const url = urlResponse.data.downloadPage;
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'topxpic': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await pxpicCDN(media);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'toquax': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const url = await quax(media);
        const buffer = fs.readFileSync(media);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'tovidey': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Video Dengan Caption ${prefix + command}`);
    await m.react('⏳');
    try {
        if (/video/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            const response = await uploadVidey(media);
            console.log(response)
            if (!response || !response.id) {
                throw new Error("Gagal mengunggah video ke Videy.");
            }
            let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
            let uploadDate = new Date().toLocaleString();
            let uploader = m.pushName;
            let caption = `🎥 *Video Berhasil Diupload!*\n\n🔗 *Link Video* : https://videy.co/v?id=${response.id}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB`;
            let button = [{
                "name": "cta_copy",
                "buttonParamsJson": `{
                    "display_text": "COPY LINK",
                    "id": "https://videy.co/v?id=${response.id}",
                    "copy_code": "https://videy.co/v?id=${response.id}"
                }`
            }];
            sendButton(m.chat, '', caption, button, m);
            await fs.unlinkSync(media);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            return newReply("❌ Hanya bisa mengunggah video!");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'safelink': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Penggunaan: ${prefix + command} urlnya`);
    try {
        await m.react('⏳');
        const apiToken = 'fe867ff34f506286472202109bea748c696ee9a4';
        let response = await fetch('https://safelinku.com/api/v1/links', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: text })
        });
        let result = await response.json();
        if (response.status === 201 && result.url) {
            return newReply(`🔗 *Safelink berhasil dibuat!*\n\n${result.url}`);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } 
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;


case 'tr':
case 'translate': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) {
        return newReply("Kak, cara pakainya gini ya:\n\n" +
            "1. Memasukkan pesan\n" +
            "- *Kirim perintah*: " + (prefix + command) + " *kode bahasa* *message*\n" +
            "- *Contoh*: " + (prefix + command) + " id Hello\n\n" +
            "2. Reply/balas pesan\n" + 
            "- *Kirim perintah*: " + (prefix + command) + " *kode bahasa*\n" +
            "- *Contoh*: " + (prefix + command) + " en\n\n" +
            "Daftar bahasa lengkap bisa cek di sini kak: https://cloud.google.com/translate/docs/languages");
    }
    try {
        await m.react('🕛');
        let translationText = m.quoted ? m.quoted.text : text.split(args[0])[1];
        if (!translationText) return newReply("Hmm, kayaknya teksnya kurang lengkap deh kak. Coba dicek lagi ya! 🧐");
        const translationParams = {
            'to': args[0] 
        };
        const apiUrl = `https://api.siputzx.my.id/api/tools/translate?text=${encodeURIComponent(translationText)}&source=auto&target=${translationParams.to}`;
        const response = await fetch(apiUrl);
        const translationResult = await response.json();
        if (translationResult.success) {
            newReply("Hasil terjemahan:\n\n" + translationResult.translatedText);
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'say':
case 'tts': 
case 'texttosound': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium yuk! 🥺");
    if (!text) return newReply("Cara pakenya gini kak:\n" + (prefix + command) + " text\n\n*Kirim perintah*: " + (prefix + command) + " yaya 😁");
    let languageCode = text.split('--')[1];
    try {
        await m.react('🕛');
        if (!languageCode) { languageCode = 'id' };
        const defaultLanguage = 'id';
        function textToSpeech(textToConvert, lang = defaultLanguage) {
            return new Promise((resolve, reject) => {
                try {
                    const gttsInstance = gtts(lang);
                    const audioFilePath = path.join(__dirname, "./temp", Date.now() + ".wav");
                    gttsInstance.save(audioFilePath, textToConvert, () => {
                        resolve(fs.readFileSync(audioFilePath));
                        fs.unlinkSync(audioFilePath);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }
        let audioBuffer;
        try {
            audioBuffer = await textToSpeech(text, defaultLanguage);
        } catch (error) {
            newReply("Hmm, ada yang salah nih, coba lagi ya! 🥲");
            audioBuffer = await textToSpeech(text); 
        } finally {
            const audioMessage = {
                audio: audioBuffer,
                mimetype: "audio/mpeg"
            };
            if (/say/.test(command)) {
                audioMessage.ptt = true;
            }
            wbk.sendMessage(m.chat, audioMessage, { 'quoted': m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'removebg': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/image/.test(mime)) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await anonfile(buffer);
        const resultUrl = await removeBackground(url);
        const responseImage = await fetch(resultUrl);
        const imageBuffer = await responseImage.buffer();
        let caption = `🔗 *Link Gambar Tanpa Latar Belakang* : ${resultUrl}\n📅 *Created* : ${new Date().toLocaleString()}`;
        await wbk.sendMessage(m.chat, {
            document: imageBuffer,
            mimetype: 'image/png',
            caption: caption,
            fileName: 'WBK_RemoveBG.png',
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'removebg2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'removebg');
        await wbk.sendMessage(m.chat, {
            document: { url: data.resultImageUrl },
            mimetype: 'image/png',
            caption: mess.done,
            fileName: 'WBK_RemoveBG2.png',
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;

case 'remini':
case 'hdr':
case 'hd': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'enhance');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;
 
case 'upscale': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'upscale');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;
        
case 'colorize': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'colorize');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;

case 'fetch':
case 'get': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`No Query?\n\nExample : ${prefix + command} https://www.google.com`);
    try {
        await m.react('⏱️');
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const contentType = res.headers['content-type'] || '';
        const fileName = url.split('/').pop();
        const tempFilePath = path.join(__dirname, 'temp', `tempfile_${Date.now()}`);
        fs.writeFileSync(tempFilePath, res.data);
        if (/json|html|plain|javascript|python|php/.test(contentType)) {
            await wbk.sendMessage(m.chat, {
                document: { url: tempFilePath },
                mimetype: 'text/plain',
                fileName: fileName,
                caption: `${litespace("GET FILE")}\n> Filename: ${fileName}`,
            }, { quoted: m });
            await m.react('✅');
        await limitReduction(m, prefix, wm);
        } else {
            const { mime } = await fileType.fromFile(tempFilePath) || {};
            if (mime) {
                await wbk.sendMessage(m.chat, {
                    document: { url: tempFilePath },
                    mimetype: mime,
                    fileName: fileName,
                    caption: `${litespace(`GET ${mime.toUpperCase()}`)}\n> Filename: ${fileName}`,
                }, { quoted: m });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                return newReply('Tipe file tidak dapat dideteksi.');
            }
        }
        fs.unlinkSync(tempFilePath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'getpb':
case 'getpastebin': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/pastebin\.com\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply('Masukkan tautan Pastebin-!'); 
    const pasteId = url.trim().split('/').pop();
    try {
        await m.react('⏱️');
        const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
        if (!response.ok) return newReply('Gagal mengambil konten dari Pastebin.');
        const content = await response.text();
        if (!content) return newReply('Tidak ada konten yang ditemukan di Pastebin-!');
        let detectedExt = 'txt';
        let detectedMime = 'text/plain';
        if (/^\s*</.test(content)) { 
            detectedExt = 'html';
            detectedMime = 'text/html';
        } else if (/^(\s*{|\s*\[)/.test(content)) { 
            detectedExt = 'json';
            detectedMime = 'application/json';
        } else if (/^\s*function|\s*const|\s*let|\s*var/.test(content)) { 
            detectedExt = 'js';
            detectedMime = 'application/javascript';
        } else if (/^\s*import|^\s*from\s+['"]/.test(content)) { 
            detectedExt = 'py';
            detectedMime = 'text/x-python';
        } else if (/^\s*<\?php/.test(content)) { 
            detectedExt = 'php';
            detectedMime = 'application/x-php';
        } else if (/^\s*SELECT|^\s*INSERT|^\s*UPDATE|^\s*DELETE/.test(content)) { 
            detectedExt = 'sql';
            detectedMime = 'application/sql';
        }
        const tempDir = path.join(__dirname, 'temp');
        const fileName = `pastebin_${pasteId}.${detectedExt}`;
        const filePath = path.join(tempDir, fileName);  
        fs.writeFileSync(filePath, content);
        await wbk.sendMessage(m.chat, {
            document: fs.readFileSync(filePath), 
            caption: `${litespace("GET PASTEBIN")}\n> File Terdeteksi: .${detectedExt}\n> Tipe MIME: ${detectedMime}`,
            fileName,
            mimetype: detectedMime,
        }, { quoted: m });
        fs.unlinkSync(filePath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'getgist': 
case 'getgists': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /https:\/\/gist\.github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9]+/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply('Masukkan tautan GitHub Gist-!');
    const gistId = url.trim().split('/').pop();
    try {
        await m.react('⏱️');
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        if (!response.ok) return newReply('Gagal mengambil konten dari GitHub Gist.');    
        const data = await response.json();
        if (!data.files) return newReply('Tidak ada file yang ditemukan di Gist-!');   
        let firstFile = Object.values(data.files)[0];
        let content = firstFile.content;
        let fileName = firstFile.filename;
        let detectedExt = path.extname(fileName).substring(1) || 'txt';
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, content);  
        await wbk.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            caption: `${litespace("GET GIST")}\n> File Terdeteksi: .${detectedExt}`,
            fileName,
            mimetype: 'text/plain',
        }, { quoted: m });    
        fs.unlinkSync(filePath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'getinfogc':
case 'getinfogrup':
case 'getgcid':
case 'getidgc':
case 'cekgcid':
case 'cekidgc': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`Kirim perintah ${prefix + command} _link group_`);
    try {
        await m.react('🕛');
        let result = url.split('https://chat.whatsapp.com/')[1];
        let data = await wbk.groupGetInviteInfo(result);
        let teks = `「 *GROUP METADATA* 」\n\n`;
        teks += ` · *ID :* ${data.id}\n`;
        teks += ` · *Name :* ${data.subject}\n`;
        teks += ` · *Owner :* ${data.owner}\n`;
        teks += ` · *Kirim Pesan :* ${data.announce ? 'Hanya Admin' : "Semua Orang"}\n`;
        teks += ` · *Persetujuan Admin :* ${data.joinApprovalMode ? 'Yes' : "No"}\n`;
        teks += ` · *Member Add Mode :* ${data.memberAddMode ? 'Yes' : "No"}\n`;
        teks += ` · *Desk :*\n${data.desc}\n\n`;
        teks += ` · *Anggota Teratas :*\n`;
        for (let x of data.participants) {
            teks += ` · @${x.id.split('@')[0]}\n`;
        }
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY ID",
                "id": "${data.id}",
                "copy_code": "${data.id}"
            }`
        }];
        sendButton(m.chat, '', teks, button, m);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'nulis': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    if (!text) return newReply("Format salah! Gunakan format: *#nulis hai");
    const validInputPattern = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
    if (!validInputPattern.test(text)) return newReply("Teks mengandung simbol yang tidak diperbolehkan! Gunakan hanya huruf, angka, spasi, titik, koma, tanda seru, atau tanda tanya.");
    async function generateBook() {
        let payload = {
            color: "#000000",
            font: "arch",
            size: 20,
            text: text
        };
        let { data } = await axios.post("https://lemon-write.vercel.app/api/generate-book", payload, {
            responseType: "arraybuffer"
        });
        let filePath = "./temp/test.jpg";
        fs.writeFileSync(filePath, data);
        return filePath;
    }
    try {
        let imagePath = await generateBook();
        let imageBuffer = fs.readFileSync(imagePath);
        await wbk.sendMessage(m.chat, { image: imageBuffer, caption: "Berikut adalah hasil tulisan tanganmu!" });
        fs.unlinkSync(imagePath);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cekrekening': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Cara penggunaan: ${prefix + command} <kode bank> <no rekening\nContoh: ${prefix + command} bca 1234567890`);
    const args = text.split(' ');
    if (args.length < 2) return newReply('Format salah! Gunakan format: cekrekening <kode_bank> <nomor_rekening>');
    const bankCode = args[0].toUpperCase();
    const accountNumber = args[1];
    await m.react('⏱️');
    try {
        const bankList = await atlaListBank();
        console.log(bankList)
        const availableBanks = bankList.data.map(bank => bank.bank_code.toUpperCase());
        if (!availableBanks.includes(bankCode)) {
            const bankNames = bankList.data
                .sort((a, b) => a.bank_name.localeCompare(b.bank_name))
                .map(bank => `Bank: ${bank.bank_name}\n> Kode Bank: ${bank.bank_code}`)
                .join('\n\n');
            newReply(`❌ Kode bank tidak tersedia. Berikut adalah daftar kode bank yang tersedia:\n\n${bankNames}`);
        } else {
            const result = await atlaCekRekening(bankCode, accountNumber);
            console.log(result);
            if (result.status && result.data) {
                const { kode_bank, nomor_akun, nama_pemilik } = result.data;
                newReply(`✅ Informasi Rekening:\n\n🏦 Bank: ${kode_bank}\n🔢 No. Rekening: ${nomor_akun}\n👤 Nama: ${nama_pemilik}`);
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                newReply(`❌ Gagal mengecek rekening. Pesan: ${result.message || 'Tidak ada informasi yang ditemukan.'}`);
            }
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
// ============= CASE END ==============

default:
        
if (['bot', 'permisi', 'kak', 'test', 'tes'].some(keyword => budy.startsWith(keyword))) {
    try {
        newReplyBot("Online, Siap Membantu🤖")
    } catch (e) {
        newReplyBot(e)
    }
};
        
if (budy.includes('runtime')) {
    try {
        newReplyBot("🤖Runtime: " + runtime(process.uptime()))
    } catch (e) {
        newReplyBot(e)
    }
};
        
if (budy.includes('@6285117114846')) {
    try {
        await m.react('😒');
        newReplyBot("Tag aku? Kamu siapa? Aku cuma bot!!!");
    } catch (e) {
        newReplyBot(e);
    }
}

if (budy.startsWith('=>')) {
	if (!isCreator) return m.react('⚠️');
	if (isBot) return m.react('⚠️');
	await m.react('⏱️');
	function Return(sul) {
		sat = JSON.stringify(sul, null, 2)
		bang = util.format(sat)
		if (sat == undefined) {
			bang = util.format(sul)
		}
		m.react('✅');
		return newReply(bang)
	}
	try {
		newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
	} catch (e) {
		newReply(String(e))
	}
};

if (budy.startsWith('>')) {
	if (!isCreator) return m.react('⚠️');
	if (isBot) return m.react('⚠️');
	try {
		await m.react('⏱️');
		let evaled = await eval(budy.slice(2))
		if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		m.react('✅');
		await newReply(evaled)
	} catch (err) {
		await newReply(String(err))
	}
};

if (budy.startsWith('$')) {
	if (!isCreator) return m.react('⚠️');
	if (isBot) return m.react('⚠️');
	await m.react('⏱️');
	exec(budy.slice(2), (err, stdout) => {
		m.react('✅');
		if (err) return newReply(err)
		if (stdout) return newReply(stdout)
	})
};
        
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = db.data.database
    if (!(budy.toLowerCase() in msgs)) return
    wbk.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {
        quoted: m
    })
}
        
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
    try {
        this.menfes = this.menfes || {};
        let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING');
        if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return;
            if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;
            let find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
            let other = find.a === m.sender ? find.b : find.a;
            if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
                await wbk.sendMessage(other, {
                    text: m.text,
                    mentions: [other]
                }, {
                    quoted: fmen
                });
            }
            if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
                let media;
                try {
                    media = await m.download();
                } catch (err) {
                    console.error('Gagal mengunduh media:', err);
                    await wbk.sendMessage(m.sender, {
                        text: 'Gagal mengunduh media. Pastikan media masih valid dan coba lagi.'
                    });
                    return;
                }
                let options = {
                    caption: m.msg?.caption || '',
                    mentions: [other]
                };
                if (m.mtype === 'imageMessage') {
                    await wbk.sendMessage(other, {
                        image: media,
                        ...options
                    });
                } else if (m.mtype === 'videoMessage') {
                    await wbk.sendMessage(other, {
                        video: media,
                        ...options
                    });
                } else if (m.mtype === 'audioMessage') {
                    await wbk.sendMessage(other, {
                        audio: media,
                        mimetype: 'audio/mpeg',
                        ...options
                    });
                } else if (m.mtype === 'documentMessage') {
                    await wbk.sendMessage(other, {
                        document: media,
                        mimetype: m.msg?.mimetype,
                        fileName: m.msg?.fileName,
                        ...options
                    });
                } else if (m.mtype === 'stickerMessage') {
                    await wbk.sendMessage(other, {
                        sticker: media
                    });
                } else {
                    console.warn('Tipe media tidak dikenali:', m.mtype);
                }
            }
        }
    } catch (err) {
        console.error('Error di fitur Menfess:', err);
        await wbk.sendMessage(m.sender, {
            text: 'Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti.'
        });
    }
}
        

}
} catch (err) {
    console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    const borderTop = chalk.blue('╔═══════════════════════════════════════════════════════════════════════╗');
    const borderBottom = chalk.blue('╚═══════════════════════════════════════════════════════════════════════╝');
    console.log('\n\n' + borderTop);
    console.log(chalk.white(`Update Detected:`));
    console.log(chalk.yellow(`File: ${__filename}`));
    console.log(chalk.redBright(`Changes have been applied!`));
    console.log(borderBottom + '\n\n');
    delete require.cache[file];
    require(file);
});