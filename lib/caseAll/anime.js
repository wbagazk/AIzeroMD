case 'quoteanime':
case 'animequote':
case 'quotesanime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let quotes = await quotesanime();
        if (!quotes || quotes.length === 0) return newReply(`⚠️ Wah, Mora gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        await wbk.sendMessage(m.chat, {
                image: { url: randomQuote.gambar },
                caption: `🎌 *Quote Anime* 🎌\n\n` +
                    `🗣️ *Karakter:* ${randomQuote.karakter || '-'}\n` +
                    `📺 *Anime:* ${randomQuote.anime || '-'}\n` +
                    `🎬 *Episode:* ${randomQuote.episode || '-'}\n` +
                    `📅 *Diunggah:* ${randomQuote.up_at || '-'}\n\n` +
                    `💬 *Quote:* "${randomQuote.quotes || '-'}"\n\n` +
                    `🔗 *Sumber:* ${randomQuote.link}`
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'anime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
    const malScraper = require('mal-scraper');
    try {
        await m.react('⏱️');
        const anime = await malScraper.getInfoFromName(text).catch(() => null);
        if (!anime) {
            return newReply('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
        }
        let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
        await wbk.sendMessage(m.chat, {
            image: { url: anime.picture },
            caption: animeInfo,
        }, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'loli': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://www.loliapi.com/acg/pe/?type=url`).catch(() => null);
        if (!data) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'neko':
case 'waifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/sfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
            footer: botName,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
};
break;

case 'hwaifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'hneko': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'trap': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'blowjob': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`).catch(() => null);
        if (!data || !data.url) {
            throw new Error("Gagal mengambil gambar, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            image: { url: data.url },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
            footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'hentai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    try {
        await m.react('⏱️');
        const result = await hentai().catch(() => null);
        if (!result || !result[0] || !result[0].video_1) {
            throw new Error("Gagal mengambil video, coba lagi nanti!");
        }
        await wbk.sendMessage(m.chat, {
            video: { url: result[0].video_1 },
            caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟`,
            footer: `${botName} • Gunakan fitur ini dengan bijak dan bertanggung jawab!`,
            buttons: [
                {
                    buttonId: prefix + command,
                    buttonText: { displayText: "🔄 Lanjut Lagi" }
                },
                {
                    buttonId: `${prefix}menu`,
                    buttonText: { displayText: "📜 Kembali ke Menu" }
                }
            ],
            viewOnce: true,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'traceanime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏱️');
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || "";
        if (!mime.startsWith('image')) return newReply("*Tolong kirim gambar terlebih dahulu* 📸");
        let data = await wbk.downloadAndSaveMediaMessage(q);
        let images = await quax(data);
        let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
        console.log("API URL:", apiUrl);
        let response = await fetch(apiUrl);
        let result = await response.json();
        console.log("API Response:", result);
        if (!result || result.error || result.result.length === 0) return newReply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
        let { anilist, from, to, similarity, video, image, episode } = result.result[0];
        let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
        let message = `✨ *Anime yang Terdeteksi:* ${animeTitle}\n`;
        if (anilist.synonyms && anilist.synonyms.length > 0) {
            message += `✨ *Sinonim:* ${anilist.synonyms.join(", ")}\n`;
        }
        message += `✨ *Tingkat Kesesuaian:* ${similarity.toFixed(2)}%\n`;
        message += `✨ *Durasi Waktu:* ${formatDuration(from * 1000)} · ${formatDuration(to * 1000)}\n`;
        if (episode) {
            message += `✨ *Episode:* ${episode}\n`;
        }
        await wbk.sendMessage(m.chat, {
            video: { url: video },
            caption: message,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mangainfo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const mangaName = args.join(' ');
    if (!mangaName) return newReply('⚠️ Mohon masukkan nama manga yang ingin dicari.');
    try {
        await m.react('⏱️');
        const mangaList = await mangainfo("manga", mangaName);
        if (mangaList.length === 0) {
            return newReply('⚠️ Manga tidak ditemukan. Coba cari dengan nama lain.');
        }
        let response = `📚 *Hasil Pencarian Manga - ${mangaName}* 📚\n\n`;
        mangaList.slice(0, 5).forEach((manga, index) => {
            response += `📖 *${index + 1}. ${manga.title}*\n`;
            response += `🗂️ *Genre:* ${manga.genre}\n`;
            response += `🔗 *URL:* ${manga.url}\n`;
            response += `🖼️ *Thumbnail:* ${manga.img}\n`;
            response += `📖 *Deskripsi:* ${manga.description}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mangadetail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const url = args[0];
    if (!url) return newReply('⚠️ Mohon masukkan URL manga yang ingin dilihat detailnya.');
    try {
        await m.react('⏱️');
        const mangaDetail = await mangadetail(url);
        let response = `📚 *Detail Manga* 📚\n\n`;
        response += `📖 *Judul:* ${mangaDetail.title}\n`;
        response += `🖼️ *Thumbnail:* ${mangaDetail.coverImage}\n`;
        response += `🗂️ *Genre:* ${mangaDetail.genres.join(', ')}\n`;
        response += `📖 *Deskripsi:* ${mangaDetail.description}\n`;
        response += `📅 *Chapter Awal:* ${mangaDetail.awalChapter}\n`;
        response += `📅 *Chapter Terbaru:* ${mangaDetail.newChapter}\n`;
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'kusonimeinfo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await m.react('⏱️');
        const animeList = await Kusonime.info();
        if (animeList.length === 0) return newReply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
        let response = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
        animeList.slice(0, 5).forEach((anime, index) => {
            response += `📺 *${index + 1}. ${anime.title}*\n`;
            response += `🔗 *URL:* ${anime.url}\n`;
            response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
            response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
            response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    };
}
break

case 'kusonimesearch': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
    try {
        await m.react('⏱️');
        const searchResults = await Kusonime.search(text);
        if (typeof searchResults === 'string') return newReply(`⚠️ ${searchResults}`);
        let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
        searchResults.slice(0, 5).forEach((anime, index) => {
            response += `📺 *${index + 1}. ${anime.title}*\n`;
            response += `🔗 *URL:* ${anime.url}\n`;
            response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
            response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
            response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
        });
        newReply(response);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;