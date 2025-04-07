process.on("uncaughtException", console.error);
//=========================================================

require('./settings');

//=========================================================
const {
	default: makeWASocket, makeCacheableSignalKeyStore, useMultiFileAuthState,
	DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent,
	generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent,
	generateMessageID, downloadContentFromMessage, makeInMemoryStore,
	jidDecode, proto, delay
} = require("@fizzxydev/baileys-pro");
const { pairings } = require("@wbagazk/wbk-security");
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require('pino');
const yargs = require('yargs/yargs');
const fs = require('fs');
const chalk = require('chalk');
const CFonts = require('cfonts')
const figlet = require('figlet');
const FileType = require('file-type');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const util = require('util');
const os = require('os');
const moment = require('moment-timezone');
const { Boom } = require('@hapi/boom');
const { connecting } = require("@wbagazk/wbk-security");
const { execSync } = require('child_process');
//=========================================================

//=========================================================
const folderCase = './case';
const folderTemp = path.join(__dirname, './temp');
const folderDB = path.join(__dirname, './src', databaseName);
const folderSession = path.join(__dirname, './session', sessionName);
const pkg = require("./package.json");
const { Low, JSONFile } = require('./lib/lowdb');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { 
    smsg, await, clockString, enumGetKey, fetchBuffer, fetchJson, format, formatDate, 
    formatp, generateProfilePicture, getBuffer, getGroupAdmins, getRandom, getSizeMedia, 
    isUrl, json, logic, msToDate, parseMention, sizeLimit, runtime, sleep, sort, toNumber 
} = require('./lib/myfunc');
//=========================================================
if (!fs.existsSync(folderTemp)) {
	fs.mkdirSync(folderTemp, { recursive: true });
}if (!fs.existsSync(folderDB)) {
	fs.mkdirSync(folderDB, { recursive: true });
}if (!fs.existsSync(folderSession)) {
	fs.mkdirSync(folderSession, { recursive: true });
}
//=========================================================
const question = (text) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve) => {
		rl.question(text, resolve)
	});
};
//=========================================================

//=========================================================
const store = makeInMemoryStore({
	logger: pino().child({
		level: 'silent',
		stream: 'store'
	})
});
//=========================================================

//=========================================================
function getRandomThumb() {
    const thumbs = global.image?.thumb || []
    if (!thumbs.length) return null
    return thumbs[Math.floor(Math.random() * thumbs.length)]
}
const nakanonino = getRandomThumb()
//=========================================================

//=========================================================
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.connecting = connecting;
global.db = new Low(new JSONFile(folderDB));
global.DATABASE = global.db;
global.muatDatabase = async function muatDatabase() {
	if (global.db.READ) {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (!global.db.READ) {
					clearInterval(interval);
					resolve(global.db.data == null ? global.muatDatabase() : global.db.data);
				}
			}, 1000);
		});
	}
	if (global.db.data !== null) return;
	global.db.READ = true;
	try {
		await global.db.read();
		global.db.data = {
			users: {},
			rpg: {},
			database: {},
			chats: {},
			game: {},
			settings: {},
			message: {},
			...(global.db.data || {})
		};
		global.db.chain = _.chain(global.db.data);
	} catch (err) {
		console.error('⚠️ Gagal membaca database:', err);
	} finally {
		global.db.READ = false;
	}
};
muatDatabase();
if (global.db) {
	setInterval(async () => {
		if (global.db.data && !global.db.READ) {
			try {
				await global.db.write();
			} catch (err) {
				console.error('⚠️ Gagal menyimpan database:', err);
			}
		}
	}, 30 * 1000);
}
//=========================================================

//=========================================================
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
let ucapanWaktu = "Selamat Malam 🌌";
if (time < "05:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
} else if (time < "11:00:00") {
    ucapanWaktu = "Selamat Pagi 🌄";
} else if (time < "15:00:00") {
    ucapanWaktu = "Selamat Siang 🌅";
} else if (time < "18:00:00") {
    ucapanWaktu = "Selamat Sore 🌇";
} else if (time < "19:00:00") {
    ucapanWaktu = "Selamat Petang 🌆";
}
//=========================================================

//=========================================================t
console.clear();
CFonts.say(`AIZEROMD`, {
    font: 'block',
    align: 'left',
    colors: ['red'],
});
//=========================================================

//=========================================================
const usePairingCode = true;
async function startWBK() {
	const { state, saveCreds } = await useMultiFileAuthState(folderSession);
	const sock = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000, 
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true, 
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!( message.buttonsMessage || message.templateMessage || message.listMessage );
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}
			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Windows", "Chrome", "20.0.04"],
		logger: pino({ level: 'fatal' }),
		auth: { 
			creds: state.creds, 
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({ 
				level: 'silent', 
				stream: 'store' 
			})), 
		}
	});
	if (!sock.authState.creds.registered) {
        await pairings(sock, question);
    }
//=========================================================
    
//=========================================================
	sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            console.log("Restart Required:", lastDisconnect?.error?.message);
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit();
            } else if (reason === DisconnectReason.badSession) {
                console.log("Bad Session File:", "Please Delete Session and Scan Again");
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed:", "Trying to reconnect....");
                startWBK();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server:", "Trying to reconnect....");
                startWBK();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced:", "Another New Session Opened, Please Restart Bot");
                process.exit();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log("Device Logged Out:", "Please Delete Folder Session and Scan Again.");
                startWBK();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required:", "Restarting....");
                startWBK();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut:", "Reconnecting....");
                startWBK();
            }
        } else if (connection === "connecting") {
            console.log("Connecting:", "Connecting....");
        } else if (connection === "open") {
            console.log(`\n🌟  SYSTEM LOG  🌟`);
            console.log(`🚀  CONNECTION SUCCESS  🚀`);
            console.log(`📅  ${"DATE".padEnd(15)} : ${new Date().toLocaleString("id-ID")}`);
            console.log(`📞  ${"CONNECTED TO".padEnd(15)} : ${sock.user.id.replace(/:[^@]+/, '')}`);
            console.log(`📝  ${"MESSAGE".padEnd(15)} : Nakano sudah siap, kak! Selamat menjalankan bot-nya ya~ 🥳🎈`);
            console.log("------------------------------------------");
            async function sendNotifToOwner() {
                const waktuSekarang = moment().tz("Asia/Jakarta").format("HH:mm:ss");
                const tanggalSekarang = moment().tz("Asia/Jakarta").format("DD MMMM YYYY");
                const uptime = process.uptime();
                const ipAddress = os.networkInterfaces()?.eth0?.[0]?.address || "Tidak diketahui";
                await connecting(sock);
                let captionText = "✅ *Bot Berhasil Terhubung!*\n\n";
                captionText += `📅 *Tanggal:* ${tanggalSekarang}\n`;
                captionText += `⏰ *Waktu:* ${waktuSekarang} WIB\n`;
                captionText += `📡 *Status:* Online\n`;
                captionText += `🌍 *IP Address:* ${ipAddress}\n`;
                captionText += `⏳ *Runtime:* ${runtime(uptime)}\n\n`;
                captionText += "🚀 Bot siap digunakan, silahkan ketik *.menu* untuk melihat daftar menu yang tersedia.";
                await sock.sendMessage(global.creator, {
                    text: captionText
                });
            }
            await sendNotifToOwner();
        }
    });
//=========================================================
    
//=========================================================
	sock.ev.on('messages.upsert', async chatUpdate => {
		try {
			mek = chatUpdate.messages[0]
			if (!mek.message) return
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return
			m = smsg(sock, mek, store)
			require(folderCase)(sock, m, chatUpdate, mek, store)
		} catch (err) {
			console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)))
		}
	})
	sock.ev.on('messages.upsert', async chatUpdate => {
		if (autoswview){
			mek = chatUpdate.messages[0];
			if (mek.key && mek.key.remoteJid === 'status@broadcast') {
				await sock.readMessages([mek.key]);
			}
		}
	});
//=========================================================

//=========================================================
	sock.ev.on('call', async (call) => {
		if (anticall) {
			for (let id of call) {
				if (id.status === 'offer') {
					await sock.sendMessage(id.from, { 
						text: `Maaf ya, kami nggak bisa menerima panggilan *${id.isVideo ? 'video' : 'suara'}* saat ini. 🙏\nKalau @${id.from.split('@')[0]} butuh bantuan, langsung hubungi owner aja ya! 😊`, 
						mentions: [id.from] 
					});
					await sock.rejectCall(id.id, id.from);
				}
			}
		}
	});
//=========================================================  
    
//=========================================================
	sock.ev.on('contacts.update', update => {
		for (let contact of update) {
			let id = sock.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = {
				id,
				name: contact.notify
			}
		}
	})
//=========================================================
    
//=========================================================
	sock.ev.on('group-participants.update', async (anu) => {
        const chatId = anu.id;
        if (!db.data.chats[chatId]?.welcome) return;
        try {
            let metadata = await sock.groupMetadata(chatId);
            let participants = anu.participants;
            for (let num of participants) {
                let ppuser, ppgroup;
                try {
                    ppuser = await sock.profilePictureUrl(num, 'image');
                } catch (err) {
                    ppuser = avatarContact;
                }
                try {
                    ppgroup = await sock.profilePictureUrl(chatId, 'image');
                } catch (err) {
                    ppgroup = avatarContact;
                }
                let participantName = `@${num.split('@')[0]}`;
                if (anu.action === 'add') {
                    let welcomeText = `✨ *Selamat Datang di Grup, Kak ${participantName}!* 👋\n\nHai Kak! Senang banget kamu bisa join di grup ini. Yuk, saling sapa dan kenalan sama member lainnya. Jangan lupa baca deskripsi grup ya~ 💬💕`;
                    await sock.sendMessage(chatId, {
                        contextInfo: {
                            mentionedJid: [num],
                            forwardingScore: 999,
                            isForwarded: true,
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `Welcome New Sensei! ✨`,
                                body: `Dari ${ownerName}`,
                                previewType: "PHOTO",
                                thumbnailUrl: ppuser,
                                sourceUrl: website,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        },
                        text: welcomeText,
                    });
                } else if (anu.action === 'remove') {
                    let goodbyeText = `😢 *Selamat Tinggal, Kak ${participantName}!* 👋\n\nTerima kasih sudah menjadi bagian dari grup ini. Semoga kita bisa bertemu lagi di lain kesempatan. Hati-hati di perjalanan ya~ 💐`;
                    await sock.sendMessage(chatId, {
                        contextInfo: {
                            mentionedJid: [num],
                            forwardingScore: 999,
                            isForwarded: true,
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `Goodbye from ${metadata.subject}! 🌟`,
                                body: `Dari ${ownerName}`,
                                previewType: "PHOTO",
                                thumbnailUrl: ppuser,
                                sourceUrl: website,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        },
                        text: goodbyeText,
                    });
                }
            }
        } catch (error) {
            console.error('❌ Terjadi kesalahan di fitur auto send join/leave:', error);
        }
    });
//=========================================================

//=========================================================
	sock.ev.on('group-participants.update', async (anu) => {
		if (adminevent) {
			console.log(anu);
			try {
				let participants = anu.participants;
				for (let num of participants) {
					try {
						ppuser = await sock.profilePictureUrl(num, 'image');
					} catch (err) {
						ppuser = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
					}
					try {
						ppgroup = await sock.profilePictureUrl(anu.id, 'image');
					} catch (err) {
						ppgroup = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
					}
					if (anu.action == 'promote') {
						const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
						const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
						body = `🎉 *Selamat @${num.split("@")[0]}!* Kamu baru saja dipromosikan menjadi *admin* 🥳\n\nWaktu: ${time}\nTanggal: ${date}`;
						sock.sendMessage(anu.id, {
							text: body,
							contextInfo: {
								mentionedJid: [num],
								"externalAdReply": {
									"showAdAttribution": true,
									"containsAutoReply": true,
									"title": botName,
									"body": ownerName,
									"previewType": "PHOTO",
									"thumbnailUrl": ppgroup,
									"sourceUrl": wagc
								}
							}
						});
					} else if (anu.action == 'demote') {
						const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
						const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
						body = `😬 *Ups, @${num.split("@")[0]}!* Kamu telah *di-demote* dari posisi *admin*.\n\nWaktu: ${time}\nTanggal: ${date}`;
						sock.sendMessage(anu.id, {
							text: body,
							contextInfo: {
								mentionedJid: [num],
								"externalAdReply": {
									"showAdAttribution": true,
									"containsAutoReply": true,
									"title": botName,
									"body": ownerName,
									"previewType": "PHOTO",
									"thumbnailUrl": ppgroup,
									"sourceUrl": wagc
								}
							}
						});
					}
				}
			} catch (err) {
				console.log(err);
			}
		}
	});
//=========================================================

//=========================================================
	sock.ev.on("groups.update", async (json) => {
		if (groupevent) {
			try {
				let ppgroup = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg';
				try {
					ppgroup = await sock.profilePictureUrl(json[0].id, 'image');
				} catch (err) {
					console.warn('⚠️ Gagal dapetin foto grup, pake gambar default aja ya.');
				}
				const res = json[0];
				if (res.announce === true) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🔒 *Oops, Gerbang Grup Ditutup!* 🔒\n\nSekarang cuma *admin* yang bisa ngobrol di sini. Jangan sedih ya, tunggu admin buka lagi! 🥺✨`,
					});
				} else if (res.announce === false) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🔓 *Yay, Gerbang Grup Terbuka!* 🔓\n\nSekarang semua anggota bebas ngobrol seru lagi di sini. Ayo ramein! 🎉😄`,
					});
				}
				if (res.restrict === true) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🔐 *Info Grup Dikunci!* 🔐\n\nHanya *admin* yang bisa edit info grup sekarang. Tetap tertib ya! 😇📚`,
					});
				} else if (res.restrict === false) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🔓 *Info Grup Dibuka!* 🔓\n\nSemua anggota bisa ikut edit info grup. Jangan lupa sopan dan bijak ya! 😊📢`,
					});
				}
				if (res.desc) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `📝 *Deskripsi Baru Nih!* 📝\n\nGrup ini punya deskripsi baru lho:\n\n${res.desc}\n\nKeren gak? 😍✨`,
					});
				}
				if (res.subject) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🖊️ *Nama Grup Baru!* 🖊️\n\nSekarang grup kita punya nama baru:\n\n*${res.subject}*\n\nGimana, kece kan? 😎🔥`,
					});
				}
				if (res.memberAddMode === true) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🛡️ *Tambah Anggota? Tertutup Dulu!* 🛡️\n\nSekarang cuma *admin* yang bisa nambah anggota baru. Yuk, patuhi aturan ya! 👀✨`,
					});
				} else if (res.memberAddMode === false) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `✅ *Tambah Anggota Bebas!* ✅\n\nSekarang semua anggota bisa ngajak teman-temannya masuk grup ini. Ayo tambah rame! 🥳🎈`,
					});
				}
				if (res.joinApprovalMode === true) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `🛡️ *Pintu Masuk Dijaga Ketat!* 🛡️\n\nCalon anggota baru harus dapet *persetujuan admin* dulu ya sebelum bisa gabung. Tetap aman dan tertib! 🤝🔒`,
					});
				} else if (res.joinApprovalMode === false) {
					await sleep(2000);
					sock.sendMessage(res.id, {
						text: `✅ *Pintu Masuk Terbuka Lebar!* ✅\n\nAnggota baru bisa langsung gabung tanpa nunggu persetujuan admin. Yuk, tambah rame di sini! 🎊😊`,
					});
				}
			} catch (error) {
				console.error('❌ Oops, ada yang error waktu proses pembaruan grup:', error);
			}
		}
	});
//=========================================================

//=========================================================
    function cleanTempFolder() {
        const tmpFolder = path.join(__dirname, "temp");
        fs.readdir(tmpFolder, (err, files) => {
            if (err) {
                console.error(chalk.red("Gagal membaca folder 'temp':"), err);
                return;
            }
            if (files.length === 0) {
                console.log(chalk.yellow("Folder 'temp' kosong, tidak ada yang perlu dibersihkan."));
                return;
            }
            console.log(chalk.blueBright(`Membersihkan folder 'temp', jumlah item: ${files.length}`));
            files.forEach(file => {
                const filePath = path.join(tmpFolder, file);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(chalk.red("Gagal membaca file:"), filePath, err);
                        return;
                    }
                    if (stats.isFile()) {
                        fs.unlink(filePath, err => {
                            if (err) {
                                console.error(chalk.red("Gagal menghapus file:"), filePath, err);
                            } else {
                                console.log(chalk.green("File dihapus:"), filePath);
                            }
                        });
                    } else if (stats.isDirectory()) {
                        fs.rmdir(filePath, {
                            recursive: true
                        }, err => {
                            if (err) {
                                console.error(chalk.red("Gagal menghapus folder:"), filePath, err);
                            } else {
                                console.log(chalk.green("Folder dihapus:"), filePath);
                            }
                        });
                    }
                });
            });
            console.log(chalk.greenBright("Pembersihan folder 'temp' selesai."));
        });
    }
    const autoClearTemp = true
    if (autoClearTemp) {
        setInterval(cleanTempFolder, 6 * 60 * 60 * 1000);
    };
//=========================================================

//=========================================================
    function clearSessionFolder() {
        const sessionFolder = path.join(__dirname, "session");
        const excludeFile = "creds.json";
        fs.readdir(sessionFolder, (err, files) => {
            if (err) {
                console.error(chalk.red("Gagal membaca folder 'session':"), err);
                return;
            }
            const filesToDelete = files.filter(file => file !== excludeFile);
            if (filesToDelete.length === 0) {
                console.log(chalk.yellow("Tidak ada file untuk dihapus di folder 'session'."));
                return;
            }
            console.log(chalk.blueBright(`Membersihkan folder 'session', jumlah file: ${filesToDelete.length}`));
            filesToDelete.forEach(file => {
                const filePath = path.join(sessionFolder, file);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(chalk.red("Gagal membaca file:"), filePath, err);
                        return;
                    }
                    if (stats.isFile()) {
                        fs.unlink(filePath, err => {
                            if (err) {
                                console.error(chalk.red("Gagal menghapus file:"), filePath, err);
                            } else {
                                console.log(chalk.green("File dihapus:"), filePath);
                            }
                        });
                    } else if (stats.isDirectory()) {
                        fs.rmdir(filePath, {
                            recursive: true
                        }, err => {
                            if (err) {
                                console.error(chalk.red("Gagal menghapus folder:"), filePath, err);
                            } else {
                                console.log(chalk.green("Folder dihapus:"), filePath);
                            }
                        });
                    }
                });
            });
            console.log(chalk.greenBright("Pembersihan folder 'session' selesai."));
        });
    }
    const autoClearSesi = true
    if (autoClearSesi) {
        setInterval(clearSessionFolder, 6 * 60 * 60 * 1000);
    };
//=========================================================

//=========================================================
    let isBackupSent = false;
    let lastBackupTime = 0;
    async function autoBackup() {
        try {
            let now = Date.now();
            let timeSinceLastBackup = now - lastBackupTime;
            let backupCooldown = 2 * 60 * 60 * 1000;
            if (isBackupSent && timeSinceLastBackup < backupCooldown) {
                console.log(`⚠️ Backup sudah dikirim! Tunggu ${Math.round((backupCooldown - timeSinceLastBackup) / 1000)} detik lagi.`);
                return;
            }
            console.log("🔄 Memulai proses auto backup...");
            const backupDir = "./temp";
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
                console.log(`📁 Folder ${backupDir} dibuat.`);
            }
            let randomHex = Math.random().toString(36).slice(2, 10);
            let filename = `BACKUP-${randomHex}.zip`;
            let filepath = `${backupDir}/${filename}`;
            const ls = execSync("ls")
                .toString()
                .split("\n")
                .filter(file => !["node_modules", "package-lock.json", "yarn.lock", "temp", "tmp"].includes(file) && file !== "");
            execSync(`zip -r ${filepath} ${ls.join(" ")}`);
            console.log(`✅ Backup ${filename} berhasil dibuat di ${backupDir}`);
            await sock.sendMessage("120363410701967881@g.us", {
                document: fs.readFileSync(filepath),
                mimetype: "application/zip",
                fileName: filename,
                caption: "🔹 Backup otomatis selesai! Simpan file ini dengan aman."
            });
            console.log("📤 Backup berhasil dikirim!");
            isBackupSent = true;
            lastBackupTime = now;
            setTimeout(() => {
                isBackupSent = false;
                console.log("🔄 Flag backup telah di-reset, siap untuk backup berikutnya.");
            }, backupCooldown);
            fs.unlinkSync(filepath);
            console.log(`🗑️ File ${filename} telah dihapus dari ${backupDir}`);
        } catch (error) {
            console.error("❌ Gagal melakukan auto backup:", error);
        }
    }
    const autoBackupCode = true;
    if (autoBackupCode) {
        setInterval(autoBackup, 2 * 60 * 60 * 1000);
    }
//=========================================================
    
//=========================================================
	const uploadFile = { upload: sock.waUploadToServer };
//=========================================================
    
//=========================================================
	sock.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						mentionedJid: parseMention(text),
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							hasMediaAttachment: false
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})
		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}
//=========================================================
    
//=========================================================
	sock.sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var imageMessage = await prepareWAMessageMedia({
				image: image,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: ""
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: text,
							subtitle: text,
							hasMediaAttachment: true,
							imageMessage: imageMessage.imageMessage
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})
		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}
//=========================================================
    
//=========================================================
	sock.sendButtonVideo = async (jid, video, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var videoMessage = await prepareWAMessageMedia({
				video: video,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: ""
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: text,
							subtitle: text,
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
			quoted: quoted
		})
		sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}
//=========================================================

//=========================================================
	sock.sendButtonDocument = async (jid, document = {}, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: parseMention(text),
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					'messageContextInfo': {
						'deviceListMetadata': {},
						'deviceListMetadataVersion': 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							hasMediaAttachment: true,
							...(await prepareWAMessageMedia(document, {
								upload: sock.waUploadToServer
							}))
						}),
						gifPlayback: true,
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})
		await sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
		return msg
	}
//=========================================================
    
//=========================================================
	sock.sendFromOwner = async (jid, text, quoted, options = {}) => {
		for (const a of jid) {
			await sock.sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
		}
	}

    sock.sendContact = async (jid, kontak, quoted = '', opts = {}) => {
		let list = []
		for (let i of kontak) {
			list.push({
				displayName: await sock.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(i)}\nFN:${await sock.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
			})
		}
		sock.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
	}
    
    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, {
		text: text, ...options
	}, { quoted, ...options })
    
    sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, {
		text: text,
		mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
		...options
	}, { quoted })
    
    sock.parseMention = (text = '') => {
		return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
	};
    
	sock.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
	}

    sock.sendImage = async (jid, path, caption = '', quoted = '', options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, {
			image: buffer,
			caption: caption,
			...options
		}, {
			quoted
		})
	}
    
	sock.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
	}
    
    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		.then( response => {
			fs.unlinkSync(buffer)
			return response
		})
	}
	sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		return buffer
	}

	sock.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
		return sock.sendMessage(jid, {
			poll: {
				name,
				values,
				selectableCount
			}
		})
	};
    
    sock.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await sock.getFile(path, true)
		let { mime, ext, res, data, filename } = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try { throw { json: JSON.parse(file.toString()) } }
			catch (e) { if (e.json) throw e.json }
		}
		let type = '', mimetype = mime, pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let { writeExif } = require('./lib/exif')
			let media = { mimetype: mime, data }
			pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		}
		else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await sock.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
		return fs.promises.unlink(pathFile)
	}
    
    sock.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
		let type = await sock.getFile(path, true);
		let { res, data: file, filename: pathFile } = type;
		if (res && res.status !== 200 || file.length <= 65536) {
		try {
			throw {
				json: JSON.parse(file.toString())
			};
		} catch (e) {
			if (e.json) throw e.json;
		}
	}
	let opt = { filename };
	if (quoted) opt.quoted = quoted;
	if (!type) options.asDocument = true;
	let mtype = '',
	mimetype = type.mime,
	convert;
	if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
	else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
	else if (/video/.test(type.mime)) mtype = 'video';
	else if (/audio/.test(type.mime)) {
		convert = await (ptt ? toPTT : toAudio)(file, type.ext);
		file = convert.data;
		pathFile = convert.filename;
		mtype = 'audio';
		mimetype = 'audio/ogg; codecs=opus';
	} else mtype = 'document';
		if (options.asDocument) mtype = 'document';
		delete options.asSticker;
		delete options.asLocation;
		delete options.asVideo;
		delete options.asDocument;
		delete options.asImage;
		let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
		let m;
		try {
			m = await sock.sendMessage(jid, message, { ...opt, ...options });
		} catch (e) {
			console.error(e)
			m = null;
		} finally {
			if (!m) m = await sock.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
			file = null;
			return m;
		}
	}
    
    sock.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		let mime = '';
		let res = await axios.head(url)
		mime = res.headers['content-type']
		if (mime.split("/")[1] === "gif") {
			 return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
		}
		let type = mime.split("/")[0]+"Message"
		if (mime === "application/pdf"){
			return sock.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "image"){
			return sock.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
		}
		if (mime.split("/")[0] === "video"){
			return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "audio"){
			return sock.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
		}
	}
    
    sock.getFile = async (PATH, save) => {
		let res
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
		//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}
		filename = path.join(__filename, folderTemp + new Date * 1 + '.' + type.ext)
		if (data && save) fs.promises.writeFile(filename, data)
		return {
			res,
			filename,
			size: await getSizeMedia(data),
			...type,
			data
		}
	}
//=========================================================
    
//=========================================================
	sock.decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}
//=========================================================
    
//=========================================================
	sock.getName = (jid, withoutContact = false) => {
		id = sock.decodeJid(jid)
		withoutContact = sock.withoutContact || withoutContact
		let v
		if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
			v = store.contacts[id] || {}
			if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {}
			resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
		})
		else v = id === '0@s.whatsapp.net' ? {
			id,
			name: 'WhatsApp'
		} : id === sock.decodeJid(sock.user.id) ? sock.user : (store.contacts[id] || {})
		return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
	}
//=========================================================
    
//=========================================================
	sock.cMod = (jid, copy, text = '', sender = sock.user.id, options = {}) => {
		//let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
		if (isEphemeral) {
			mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
		}
		let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
		if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
		}
		if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === sock.user.id
		return proto.WebMessageInfo.fromObject(copy)
	}
//=========================================================
    
//=========================================================
	sock.copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await sock.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
		return waMessage
	}
//=========================================================
    
//=========================================================
    sock.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		return buffer
	}
    
	sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		let trueFileName = attachExtension ? (folderTemp + filename + '.' + type.ext) : folderTemp + filename
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}
//=========================================================
    sock.public = true
	sock.serializeM = (m) => smsg(sock, m, store)
 	sock.ev.on('creds.update', saveCreds);
	return sock
};
startWBK();
//=========================================================

//=========================================================
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