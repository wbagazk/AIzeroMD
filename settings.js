const fs = require('fs');
const chalk = require('chalk');

// BOT
global.botName = 'AIzeroMD';
global.version = '2.0.0';
global.desc = 'Artificial Intelligence, The Rise of the Robotic Area';
global.ownerName = 'WBK';
global.ownerNumber = '628123456789';
global.creator = '628123456789@s.whatsapp.net';
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang';

// SOCIAL MEDIA
global.ytName = '-';
global.ttName = '-';
global.igName = '-';
global.githubName = '-';
global.website = 'https://wbk.co.id/';

// NEWSLATTER WHATSAPP
global.saluranName = 'AIzeroMD | WBK';
global.saluran = '0@newsletter';

// GROUP WHATSAPP
global.wagc = 'https://chat.whatsapp.com/';
global.wagcid = '0@g.us'

// STICKER & WATERMARK
global.packname = 'AIzeroMD';
global.author = 'WBK';
global.wm = 'AIzeroMD by WBK V1.0.0 Official';
global.footer = 'AIzeroMD by WBK V1.0.0 Official';

// PREFIX, DB, DLL
global.prefa = '#', '.', '!';
global.databaseName = 'database.json';
global.sessionName = 'session';
global.hituet = 0;

// BOT SETTING
global.autoblocknumber = '60';
global.antiforeignnumber = '60';
global.anticall = true;
global.autoswview = true;
global.adminevent = true;
global.groupevent = true;

// THUMBNAIL
global.thumb = fs.readFileSync('./media/thumb.jpg');
global.thumbUrl = 'https://files.catbox.moe/oc5b25.png';
global.thumbrpg = fs.readFileSync('./media/thumb-rpg.jpg');
global.thumbmusic = fs.readFileSync('./media/thumb-music.jpg');
global.avatarContact = fs.readFileSync('./media/avatar_contact.png')

// LIMIT DAN UANG
global.limit = {
	free: 20, // Limit User Non-premium
	premium: 9999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};
global.uang = {
	free: 10000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 10000000 // Uang User VIP 👑
};
global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

// REPLY/BALASAN PESAN
global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'AIzero harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nKetik #change untuk menukarkan limit🌟\nKetik #daily untuk mengambil limit harian ✨',
	nocmd: 'Hmm... perintahnya gak ada di daftar AIzero nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Aizero lagi proses nih! ⏳🤗'
};

global.reply = {
	error: '‼️ERROR HUBUNGI OWNER‼️\n\n_Ada kesalahan saat menghubungi penyedia API/Server_',
	minusLimit: 'Limit kamu telah dikurangi sebanyak *1*\n┏ Limit kamu tersisa',
	noMinusLimit: 'Dikarenakan error maka limit kamu tidak dikurangi\n┏ Limit kamu tersisa',
};

// SETTING GITHUB CDN
global.githubCDN = {
    user: "-", // Ganti dengan username GitHub
    repo: "-", // Ganti dengan nama repositori
    token: "-" // Ganti dengan token, ambil di > https://github.com/settings/tokens/new
}

// SETTING ORDER KUOTA >>> CEK OKECONNECT
global.orderkuota = {
    merchant: "-",
    member: "-",
    pin: "-",
    password: "-",
    apikey: "-",
    qrcode: "-"
}

// SETTING ALL APIKEY
global.apikey = {
    atlantic: "-",
    groqapi: "-",
    openaiapi: "-",
    mistral: "-"
};

// NOTif CONSOLE LOG
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