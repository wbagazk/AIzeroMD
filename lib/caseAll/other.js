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