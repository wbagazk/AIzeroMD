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