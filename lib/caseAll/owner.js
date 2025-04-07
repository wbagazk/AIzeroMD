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

case 'mentiongc': {
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
