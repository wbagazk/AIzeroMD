const { 
	proto, 
	delay, 
	downloadContentFromMessage, 
	generateWAMessage, 
	areJidsSameUser, 
	getContentType 
} = require('@fizzxydev/baileys-pro');
const axios = require('axios');
const moment = require('moment-timezone');
const { sizeFormatter } = require('human-readable');
const util = require('util');
const Jimp = require('jimp');

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000);

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
	let tag = (0, exports.unixTimestampSeconds)().toString();
	if (epoch)
	tag += '.--' + epoch;
	return tag;
};

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
};

exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
};

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
};

exports.getImg = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
};

exports.fetchJson = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: 'GET',
			url: url,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
			},
			...options
		})
		return res.data
	} catch (err) {
		return err
	}
};

exports.fetchUrl = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: 'GET',
			url: url,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
			},
			...options
		})
		return res.data
	} catch (err) {
		return err
	}
};

exports.WAVersion = async () => {
	let get = await exports.fetchUrl("https://web.whatsapp.com/check-update?version=1&platform=web")
	let version = [get.currentVersion.replace(/[.]/g, ", ")]
	return version
};

exports.isNumber = (number) => {
	const int = parseInt(number)
	return typeof int === 'number' && !isNaN(int)
};

exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
};

exports.sizeLimit = async (str, max) => {
	let unitRank = {
		B: 1,
		MB: 1024 * 1024,
		GB: 1024 * 1024 * 1024,
		TB: 1024 * 1024 * 1024 * 1024,
	};
	str = str.trim().toUpperCase();
	let match = str.match(/(\d+\.?\d*)([B|MB|GB|TB]*)/);
	if (!match) {
		return { oversize: true };
	}
	let size = parseFloat(match[1]);
	let unit = match[2];
	if (!unit || !(unit in unitRank)) {
		unit = "B";
	}
	let totalSizeInBytes = size * unitRank[unit];
	let maxMatch = max.match(/(\d+\.?\d*)([B|MB|GB|TB]*)/);
	let maxSize;
	if (maxMatch) {
		let maxValue = parseFloat(maxMatch[1]);
		let maxUnit = maxMatch[2] || "B";
		maxSize = maxValue * unitRank[maxUnit];
	} else {
		return { oversize: true };
	}
	if (totalSizeInBytes > maxSize) {
		return { oversize: true };
	}
	return { oversize: false };
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = (ms) => {
	let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
	let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
	let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
};

exports.sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
};

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
};

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
};

exports.formatp = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: 2,
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
});

exports.json = (string) => {
	return JSON.stringify(string, null, 2)
};

function format(...args) {
	return util.format(...args)
};

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
	if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
};

exports.generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
};

exports.bytesToSize = (bytes, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';
	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

exports.getSizeMedia = (path) => {
	return new Promise((resolve, reject) => {
		if (/http/.test(path)) {
			axios.get(path)
			.then((res) => {
				let length = parseInt(res.headers['content-length'])
				let size = exports.bytesToSize(length, 3)
				if (!isNaN(length)) resolve(size)
			})
		} else if (Buffer.isBuffer(path)) {
			let length = Buffer.byteLength(path)
			let size = exports.bytesToSize(length, 3)
			if (!isNaN(length)) resolve(size)
		} else {
			reject('undefined');
		}
	})
};

exports.parseMention = (text = '') => {
	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
};

exports.getGroupAdmins = (participants) => {
	let admins = []
	for (let i of participants) {
		i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ''
	}
	return admins || []
};

function getTypeMessage(message) {
	const type = Object.keys(message)
	var restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) ||
		(type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) ||
		type[type.length - 1] || Object.keys(message)[0]
	return restype
};

exports.smsg = (sock, m, store) => {
	if (!m) return m;
	let M = proto.WebMessageInfo;
	if (m.key) {
		m.id = m.key.id;
		m.isBaileys = 
			m.id.endsWith("WBSF") || 
				m.id.startsWith("AKIRA") || 
					m.id.startsWith("VRDN") || 
						m.id.startsWith("FELZ") ||
							m.id.startsWith("HSK") ||
            					m.id.length === 32 ||
                                    m.id.startsWith("FizzxyTheGreat") ||
                                        (m.id.startsWith("B1EY") && m.id.length === 20) || 
                                            (m.id.startsWith("BAE5") && m.id.length === 16) || 
                                                (m.id.startsWith("3EB0") && (m.id.length === 22 || m.id.length === 40));
		m.device = /^3A/.test(m.id)
			? "ios"
			: /^3E/.test(m.id)
				? "web"
				: /^.{21}/.test(m.id)
					? "android"
					: /^.{18}/.test(m.id)
						? "desktop"
						: "unknown";
		m.chat = m.key.remoteJid;
		m.fromMe = m.key.fromMe;
		m.isGroup = m.chat.endsWith('@g.us');
		m.isNewsletter = m.chat.endsWith('@newsletter');
		m.sender = sock.decodeJid(m.fromMe && sock.user.id || m.participant || m.key.participant || m.chat || '');
		if (m.isGroup) m.participant = sock.decodeJid(m.key.participant) || '';
	}
	if (m.message) {
		m.mtype = getContentType(m.message);
		m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype]);
		m.body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.mtype === "viewOnceMessageV2") ? (m.msg.message.imageMessage?.caption || m.msg.message.videoMessage?.caption || "") : "";
		let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
		m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
		if (m.quoted) {
			let type = Object.keys(m.quoted)[0];
			m.quoted = m.quoted[type];
			if (['productMessage'].includes(type)) {
				type = Object.keys(m.quoted)[0];
				m.quoted = m.quoted[type];
			}
			if (typeof m.quoted === 'string') m.quoted = {
				text: m.quoted
			};
			m.quoted.mtype = type;
			m.quoted.id = m.msg.contextInfo.stanzaId;
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
			m.quoted.isBaileys = 
                m.quoted?.id?.endsWith("WBSF") ||
                m.quoted?.id?.startsWith("AKIRA") ||
                m.quoted?.id?.startsWith("VRDN") || 
                m.quoted?.id?.startsWith("FELZ") ||
                m.quoted?.id?.startsWith("HSK") ||
                m.quoted?.id?.startsWith("FizzxyTheGreat") ||
                m.quoted?.id?.length === 32 ||
                (m.quoted?.id?.startsWith("B1EY") && m.quoted?.id?.length === 20) || 
                (m.quoted?.id?.startsWith("BAE5") && m.quoted?.id?.length === 16) || 
                (m.quoted?.id?.startsWith("3EB0") && (m.quoted?.id?.length === 22 || m.quoted?.id?.length === 40));
			m.quoted.device = /^3A/.test(m.quoted.id)
				? "ios"
				: /^3E/.test(m.quoted.id)
					? "web"
					: /^.{21}/.test(m.quoted.id)
						? "android"
						: /^.{18}/.test(m.quoted.id)
							? "desktop"
							: "unknown";
			m.quoted.sender = sock.decodeJid(m.msg.contextInfo.participant);
			m.quoted.fromMe = m.quoted.sender === sock.decodeJid(sock.user.id);
			m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || '';
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
			m.getQuotedObj = m.getQuotedMessage = async () => {
				if (!m.quoted.id) return false;
				let q = await store.loadMessage(m.chat, m.quoted.id, sock);
				return exports.smsg(sock, q, store);
			};
			let vM = m.quoted.fakeObj = M.fromObject({
				key: {
					remoteJid: m.quoted.chat,
					fromMe: m.quoted.fromMe,
					id: m.quoted.id
				},
				message: quoted,
				...(m.isGroup ? {
					participant: m.quoted.sender
				} : {})
			});
			m.quoted.delete = () => sock.sendMessage(m.quoted.chat, {
				delete: vM.key
			});
			m.quoted.copyNForward = (jid, forceForward = false, options = {}) => sock.copyNForward(jid, vM, forceForward, options);
			m.quoted.download = () => sock.downloadMediaMessage(m.quoted);
		}
	}
	if (m.msg.url) m.download = () => sock.downloadMediaMessage(m.msg);
	m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || m.msg.body?.text || m.msg.name || m.msg.message?.imageMessage?.caption || m.msg.message?.videoMessage?.caption || ""
	m.reply = async (text, options = {}) => {
		if (typeof text === "string") {
			await sock.sendMessage(
				m.chat,
				{
					text,
					mentions: [...sock.parseMention(text)],
					...options,
				},
				{
					quoted: m,
					...options,
				},
			);
		} else if (typeof text === "object" && typeof text !== "string") {
			await sock.sendMessage(
				m.chat,
				{
					...text,
					...options,
				},
				{
					quoted: m,
					...options,
				},
			);
		}
	};
	m.react = async (emoji) => {
		await sock.sendMessage(m.chat, {
			react: {
				text: emoji,
				key: m.key,
			},
		});
	};
	m.copy = () => exports.smsg(sock, M.fromObject(M.toObject(m)));
	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => sock.copyNForward(jid, m, forceForward, options);
	sock.appenTextMessage = async (text, chatUpdate) => {
		let messages = await generateWAMessage(m.chat, {
			text: text,
			mentions: m.mentionedJid
		}, {
			userJid: sock.user.id,
			quoted: m.quoted && m.quoted.fakeObj
		});
		messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id);
		messages.key.id = m.key.id;
		messages.pushName = m.pushName;
		if (m.isGroup) messages.participant = m.sender;
		let msg = {
			...chatUpdate,
			messages: [proto.WebMessageInfo.fromObject(messages)],
			type: 'append'
		};
		sock.ev.emit('messages.upsert', msg);
	};
	return m;
};

exports.reSize = (buffer, ukur1, ukur2) => {
	return new Promise(async (resolve, reject) => {
		var baper = await Jimp.read(buffer);
		var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
		resolve(ab)
	})
};

function monospace(string) {
    return '```' + string + '```';
}
exports.monospace = monospace;

function litespace(string) {
    return '*`' + string + '`*';
}
exports.litespace = litespace;

function toRupiah(angka) {
    var saldo = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
    return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
exports.toRupiah = toRupiah;