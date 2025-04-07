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
