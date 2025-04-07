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