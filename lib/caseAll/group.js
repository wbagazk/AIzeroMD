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