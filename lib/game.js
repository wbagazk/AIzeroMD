require('../settings');
const { sleep, clockString } = require('./myfunc');

// Fungsi untuk memilih elemen acak dari daftar
function muatAcak(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

const gameSlot = async (wbk, m, db) => {
    if (db[m.sender].limit < 1) return m.reply(mess.limit);
    const icons = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🥥', '🥑'];
    const slot1 = muatAcak(icons);
    const slot2 = muatAcak(icons);
    const slot3 = muatAcak(icons);
    const listSlot = [
        `${muatAcak(icons)} : ${muatAcak(icons)} : ${muatAcak(icons)}`,
        `${slot1} : ${slot2} : ${slot3}`,
        `${muatAcak(icons)} : ${muatAcak(icons)} : ${muatAcak(icons)}`
    ];
    const randomLimit = Math.floor(Math.random() * 8);
    try {
        db[m.sender].limit -= 1;
        global.bot.limit += 1;
        if (slot1 === slot2 && slot2 === slot3) {
            db[m.sender].limit += randomLimit;
            wbk.sendMessage(m.chat, { text: `[ 🎰 SLOT GAME 🎰 ]\n\n${listSlot.join('\n')}\n\n🎉 Kamu Menang! 🎉\n+${randomLimit} Limit` }, { quoted: m });
        } else {
            wbk.sendMessage(m.chat, { text: `[ 🎰 SLOT GAME 🎰 ]\n\n${listSlot.join('\n')}\n\n😢 Kamu Kalah! 😢\n-1 Limit` }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat bermain slot!');
    }
};

const gameCasinoSolo = async (wbk, m, prefix, db) => {
    try {
        // Ambil jumlah taruhan dari argumen
        let args = m.text.split(' ').slice(1); // Mengambil argumen setelah perintah
        let bet = parseInt(args[0]); // Ambil argumen pertama sebagai taruhan

        // Validasi taruhan
        if (isNaN(bet) || bet < 8) { // Minimal limit bermain casino 8
            return m.reply(`⚠️ Masukkan jumlah taruhan yang benar!\nContoh: *${prefix}casino 10*\n\nMinimal limit bermain casino 8`);
        }

        // Periksa apakah pengguna memiliki cukup uang
        if (db[m.sender]?.limit >= bet) {
            db[m.sender].limit -= bet; // Kurangi uang pengguna
            global.bot.limit = (global.bot.limit || 0) + bet; // Tambahkan ke uang bot

            // Hasil acak untuk pengguna dan bot
            let randomUser  = Math.floor(Math.random() * 90); // Nilai pengguna (0-90)
            let randomBot = Math.floor(Math.random() * 100); // Nilai bot (0-100)

            if (randomUser  > randomBot) {
                db[m.sender].limit += bet * 2; // Tambahkan uang kemenangan
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser }\n🤖 *Bot:* ${randomBot}\n\n🎉 *Kamu Menang!*\n+${bet * 2} limit`);
            } else if (randomUser  < randomBot) {
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser }\n🤖 *Bot:* ${randomBot}\n\n😢 *Kamu Kalah!*\n-${bet} limit`);
            } else {
                db[m.sender].uang += bet; // Kembalikan uang jika seri
                m.reply(`🎲 *CASINO GAME* 🎲\n\n👤 *Kamu:* ${randomUser }\n🤖 *Bot:* ${randomBot}\n\n⚖️ *Seri!*\nUang dikembalikan.`);
            }
        } else {
            m.reply('❌ *Kamu tidak punya cukup uang untuk bermain Casino!*');
        }
    } catch (e) {
        console.error(e);
        m.reply('⚠️ *Terjadi kesalahan saat bermain Casino!*');
    }
};

const gameMerampok = async (m, db) => {
    let target = m.mentionedJid[0] || m.quoted?.sender;
    if (!target) return m.reply('Tag pengguna yang ingin kamu rampok!');
    let cooldown = 172800000; // 2 hari
    let remainingTime = cooldown - (new Date() - db[m.sender].lastrampok);
    if (remainingTime > 0) {
        return m.reply(`Kamu harus menunggu ${clockString(remainingTime)} sebelum merampok lagi.`);
    }
    let amount = Math.floor(Math.random() * 5000);
    if (db[target].uang < amount) {
        return m.reply('Target tidak memiliki cukup uang untuk dirampok!');
    }
    db[target].uang -= amount;
    db[m.sender].uang += amount;
    db[m.sender].lastrampok = new Date().getTime();
    m.reply(`💰 *BERHASIL MERAMPOK!* 💰\nKamu berhasil merampok ${amount} uang dari @${target.split('@')[0]}`);
};

const daily = async (wbk, m, db) => {
    let cooldown = 86400000; // 24 Jam
    let remainingTime = cooldown - (new Date() - db[m.sender].lastclaim);
    if (remainingTime > 0) {
        return wbk.sendMessage(m.chat, { text: `Kamu sudah klaim hari ini!\nTunggu ${clockString(remainingTime)} untuk klaim lagi.` }, { quoted: m });
    }
    db[m.sender].limit += 10;
    db[m.sender].uang += 5000;
    db[m.sender].lastclaim = new Date().getTime();
    wbk.sendMessage(m.chat, { text: `🎁 *KLAIM HARIAN!* 🎁\n+10 Limit\n+5.000 Uang` }, { quoted: m });
};

const transferLimit = async (wbk, m, args, db) => {
    let count = parseInt(args[0]);
    let target = m.mentionedJid[0] || m.quoted?.sender;
    if (!count || isNaN(count) || !target) return m.reply('Format salah! Contoh: transferlimit 10 @user');
    if (db[m.sender].limit < count) return m.reply('Limit kamu tidak mencukupi!');
    db[m.sender].limit -= count;
    db[target].limit += count;
    wbk.sendMessage(m.chat, { text: `✅ Berhasil mentransfer ${count} Limit ke @${target.split('@')[0]}`, mentions: [target] }, { quoted: m });
};

const transferUang = async (wbk, m, args, db) => {
    let count = parseInt(args[0]);
    let target = m.mentionedJid[0] || m.quoted?.sender;
    if (!count || isNaN(count) || !target) return m.reply('Format salah! Contoh: transferuang 10 @user');
    if (db[m.sender].uang < count) return m.reply('Uang kamu tidak mencukupi!');
    db[m.sender].uang -= count;
    db[target].uang += count;
    wbk.sendMessage(m.chat, { text: `✅ Berhasil mentransfer ${count} Uang ke @${target.split('@')[0]}`, mentions: [target] }, { quoted: m });
};

const buy = async (m, args, db) => {
    let item = args[0];
    let amount = parseInt(args[1]);
    if (!item || isNaN(amount)) {
        return m.reply(`Format salah!\nContoh: #change limit 10\nHarga: 1 Limit = 4000 Uang`);
    }
    if (item.toLowerCase() === 'limit') {
        let totalCost = amount * 2500;
        if (db[m.sender].uang >= totalCost) {
            db[m.sender].uang -= totalCost;
            db[m.sender].limit += amount;
            m.reply(`✅ *Pembelian Berhasil!*\nKamu berhasil membeli ${amount} Limit dengan harga ${totalCost} Uang.\n💰 Sisa Uang: ${db[m.sender].uang}\n📊 Total Limit: ${db[m.sender].limit}`);
        } else {
            m.reply(`❌ *Uang Tidak Cukup!*\nKamu butuh ${totalCost} Uang untuk membeli ${amount} Limit.\n💰 Uang Kamu: ${db[m.sender].uang}`);
        }
    } else {
        m.reply(`❌ Item yang tersedia hanya *limit*\nContoh: .buy limit 10`);
    }
};

const setUang = (m, db, amount) => {
    if (isNaN(amount)) {
        return m.reply('❌ *Jumlah tidak valid!*\nContoh: .setuang 1000');
    }
    db[m.sender].uang -= parseInt(amount);
    m.reply(`✅ *Uang Berkurang!*\n💰 Uang Kamu sekarang: ${db[m.sender].uang}`);
};

const setLimit = (m, db, amount) => {
    if (isNaN(amount)) {
        return m.reply('❌ *Jumlah tidak valid!*\nContoh: .setlimit 5');
    }
    db[m.sender].limit -= parseInt(amount);
    m.reply(`✅ *Limit Berkurang!*\n📊 Limit Kamu sekarang: ${db[m.sender].limit}`);
};

module.exports = { 
    gameSlot, 
    gameCasinoSolo, 
    gameMerampok, 
    daily, 
    transferLimit, 
    transferUang, 
    buy, 
    setUang, 
    setLimit 
};