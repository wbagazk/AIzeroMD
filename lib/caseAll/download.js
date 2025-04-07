case 'aio':
case 'aiodl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://your-url.com/...`);
    try {
        await m.react('⏱️');
        let result = await getindevice(text);
        console.log(result);
        if (!result || !result.medias || result.medias.length === 0) throw 'Video tidak ditemukan atau tidak dapat diunduh.';
        let media = result.medias[0];
        let mediaUrl = media.url || null;
        let extension = media.extension || null;
        let caption = `${litespace("AIO DOWNLOADER")}`;
        if (extension === 'jpg') {
            let images = result.medias.filter(m => m.extension === 'jpg');
            for (let img of images) {
                await wbk.sendMessage(m.chat, { image: { url: img.url }, caption }, { quoted: m });
            }
        } else if (extension === 'mp4') {
            await wbk.sendMessage(m.chat, { video: { url: mediaUrl }, caption }, { quoted: m });
        } else {
            await newReply('Format media tidak didukung.');
        }
        let audioMedia = result.medias.find(m => m.extension === 'mp3');
        if (audioMedia) {
            let audioUrl = audioMedia.url;
            await wbk.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'aio2':
case 'aiodl2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://your-url.com/...`);
    try {
        await m.react('⏱️');
        let result = await anydownloader(text);
        console.log(result);
        if (!result || !result.medias || result.medias.length === 0) {
            throw new Error('Video tidak ditemukan atau tidak dapat diunduh.');
        }
        let media = result.medias[0];
        let mediaUrl = media.url || null;
        let extension = media.extension || null;
        let caption = `${litespace("AIO DOWNLOADER")}`;
        if (extension === 'jpg') {
            await wbk.sendMessage(m.chat, { image: { url: mediaUrl }, caption }, { quoted: m });
        } else if (extension === 'mp4') {
            await wbk.sendMessage(m.chat, { video: { url: mediaUrl }, caption }, { quoted: m });
        } else {
            await newReply('Format media tidak didukung.');
        }
        let audioMedia = result.medias.find(m => m.extension === 'mp3');
        if (audioMedia) {
            let audioUrl = audioMedia.url;
            await wbk.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        }
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'yt':
case 'play':
case 'ytplay': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} Lagu favorit`);
    try {
        await m.react('⏱️');
        const search = await ytsearch(`${text}`);
        if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
        const { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
        let caption = `*${title}*\n\n`;
            caption += `*⏱️ Durasi*: ${duration}\n`;
            caption += `*🕒 Diunggah*: ${ago}\n`;
            caption += `*🔗 Link*: ${url}\n\n`;
            caption += `_Pilih jenis media yang akan didownload_`;
        let buttonMessage = {
            image: { url: image }, 
            caption: caption,
            footer: wm,
            buttons: [
                {
                    buttonId: `.ytaudio ${url}`, 
                    buttonText: { 
                        displayText: 'AUDIO' 
                    },
                    type: 1
                },
                {
                    buttonId: `.ytvideo ${url}`, 
                    buttonText: { 
                        displayText: 'VIDEO' 
                    },
                    type: 1
                },
                {
                    buttonId: `.lyrics ${text}`, 
                    buttonText: { 
                        displayText: 'LIRIK' 
                    },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true,
            contextInfo: {
                forwardingScore: 99999,
                isForwarded: false,
                externalAdReply: {
                    mediaUrl: image,
                    mediaType: 1,
                    previewType: 0,
                    title: `${title}`,
                    body: `Durasi: ${duration}`, 
                    thumbnail: await getBuffer(image),  
                    sourceUrl: url,
                    showAdAttribution: false,
                    renderLargerThumbnail: true,
                },
            },
        };
        await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
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
        
case 'ytmp3': 
case 'ytaudio': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/ 192`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    const args = text.split(' ');
    const url = args[0];
    let quality = args[1] || '192';
    const format = 'mp3';
    const validQualities = ['64', '128', '192', '256', '320'];
    if (!validQualities.includes(quality)) {
        return newReply(`Contoh: ${prefix + command} https://youtu.be/ 192\nFormat audio tidak valid. Silakan pilih kualitas yang benar: 64, 128, 192, 256, 320.`);
    }
    if (!url) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await ytdl(url, format);
        const downloadUrl = await downloadAudioYT(url);
        await wbk.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    title: result.title,
                    body: ``,
                    thumbnail: await getBuffer(result.image),
                    sourceUrl: url,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            },
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytaudio2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytaudio2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await cliptoai.ytdl(text);
        console.log(result)
        if (!result.success) {
            return newReply("Gagal mengunduh video. Silakan coba lagi.");
        }
        const downloadUrl = result.medias.find(media => media.extension === `m4a`)?.url;
        if (!downloadUrl) {
            return newReply(`Sepertinya link download tidak tersedia.`);
        }
        const durationInSeconds = result.duration;
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const thumbnail = result.thumbnail || "https://files.catbox.moe/15mcfd.jpg";
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Duration:* ${formattedDuration}\n> *Url:* ${text}`;
        await wbk.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu,
                    newsletterJid: saluran
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: wm,
                    thumbnail: await getBuffer(result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytaudio3";
        const server = "SERVER 3"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytaudio3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    try {
        await m.react('⏱️');
        const data = await savetube.download(text, "mp3");
        if (!data.status) {
            return newReply(`❌ Gagal mengunduh audio. Error: ${data.error}`);
        } 
        await wbk.sendMessage(m.chat, {
            audio: { url: data.result.download },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: wm,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    title: data.result.title,
                    body: `${data.result.duration} detik`,
                    thumbnail: await getBuffer(data.result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            },
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

case 'ytmp4': 
case 'ytvideo': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} 480 https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    const args = text.split(' ');
    const url = args[0];
    let quality = args[1] || '480';
    const format = '480';
    const validQualities = ['144', '240', '360', '480', '720', '1080'];
    if (!validQualities.includes(quality)) {
        return newReply(`Contoh: ${prefix + command} https://youtu.be/ 480\nFormat video tidak valid. Silakan pilih resolusi yang benar: 144, 240, 360, 480, 720, 1080.`);
    }
    if (!url) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await ytdl(url, format);
        const downloadUrl = await downloadVideoYT(url, quality);
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Url:* ${url}`;
        await wbk.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: 'video/mp4',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                externalAdReply: {
                    title: result.title,
                    body: '',
                    thumbnail: await getBuffer(result.image),
                    sourceUrl: url,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: false
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytvideo2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytvideo2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text) return newReply(`Link yang kakak masukkan tidak valid! 😅`);
    try {
        await m.react('⏱️');
        const result = await cliptoai.ytdl(text);
        console.log(result)
        if (!result.success) {
            return newReply("Gagal mengunduh video. Silakan coba lagi.");
        }
        const downloadUrl = result.medias.find(media => media.quality === `360p`)?.url;
        if (!downloadUrl) {
            return newReply(`epertinya link download tidak tersedia.`);
        }
        const durationInSeconds = result.duration;
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const thumbnail = result.thumbnail || "https://files.catbox.moe/15mcfd.jpg";
        const caption = `🎥 ${litespace("YOUTUBE DOWNLOADER")}\n\n> *Title:* ${result.title}\n> *Duration:* ${formattedDuration}\n> *Url:* ${text}`;
        await wbk.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: 'video/mp4',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu || "Newsletter",
                    newsletterJid: saluran || ""
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: wm,
                    thumbnailUrl: `${result.thumbnail}`,
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "ytvideo3";
        const server = "SERVER 3"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ytvideo3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    try {
        await m.react('⏱️');
        const data = await savetube.download(text, "360");
        if (!data.status) {
            return newReply(`❌ Gagal mengunduh audio. Error: ${data.error}`);
        } 
        const caption = `🎬 *YouTube Video Downloaded* 🎬

📌 *Judul:* ${data.result.title}
⏳ *Durasi:* ${data.result.duration} detik
🔰 *Kualitas:* 360p
🔗 *Link:* ${text}

🔥 Download berhasil! Nikmati videonya 😉`;
        await wbk.sendMessage(m.chat, {
            video: { url: data.result.download },
            caption: caption,
            mimetype: 'video/mp4',
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: wm,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: data.result.title,
                    body: `${data.result.duration} detik`,
                    thumbnail: await getBuffer(data.result.thumbnail),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
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

case 'ttaudio':
case 'tiktokmp3':
case 'ttmp3':
case 'tiktokaudio':
case 'ttslide':
case 'tiktokfoto':
case 'tiktokmp4':
case 'ttdl':
case 'tt':
case 'ttnowm':
case 'tiktoknowm':
case 'tiktok':
case 'tiktokdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: ${prefix + command} https://vt.tiktok.com/xxxxxxx/`);
    if (!text.includes('tiktok.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        let anu = await tiktokDownloaderVideo(text);
        let audio = anu.music_info.url;
        let item = 0;
        for (let imgs of anu.data) {
            if (imgs.type == "nowatermark") {
                await wbk.sendMessage(m.chat, {
                    video: { url: imgs.url },
                    caption: `🎥 ${litespace("Video Information :")}
📍 Region: ${anu.region}
⏳ Duration: ${anu.duration}
📅 Taken: ${anu.taken_at}

📊 ${litespace("Statistik Info :")}
👁️ Views: ${anu.stats.views}
❤️ Likes: ${anu.stats.likes}
💬 Comment: ${anu.stats.comment}
🔄 Share: ${anu.stats.share}
📥 Download: ${anu.stats.download}

👤 ${litespace("Author Info :")}
📝 Fullname: ${anu.author.fullname}
🏷️ Nickname: ${anu.author.nickname}

🎵 ${litespace("Music Info :")}
🎼 Title: ${anu.music_info.title}
🎤 Author: ${anu.music_info.author}
💿 Album: ${anu.music_info.album}

📝 ${litespace("Caption :")}
${anu.title || '-'}`}, { quoted: m });
            }
            if (imgs.type == "photo") {
                if (item == 0) {
                    await wbk.sendMessage(m.chat, {
                        image: { url: imgs.url },
                        caption: `🖼️ ${litespace("Photo Information :")}
📍 Region: ${anu.region}
📅 Taken: ${anu.taken_at}

📊 ${litespace("Statistik Info :")}
👁️ Views: ${anu.stats.views}
❤️ Likes: ${anu.stats.likes}
💬 Comment: ${anu.stats.comment}
🔄 Share: ${anu.stats.share}
📥 Download: ${anu.stats.download}

👤 ${litespace("Author Info :")}
📝 Fullname: ${anu.author.fullname}
🏷️ Nickname: ${anu.author.nickname}

🎵 ${litespace("Music Info :")}
🎼 Title: ${anu.music_info.title}
🎤 Author: ${anu.music_info.author}
💿 Album: ${anu.music_info.album}

📝 ${litespace("Caption :")}
${anu.title || '-'}

${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`,
                    }, { quoted: m });
                } else {
                    await wbk.sendMessage(m.sender, {
                        image: { url: imgs.url },
                        quoted: m
                    });
                }
                item += 1;
                await sleep(2000);
            }
        }
        await wbk.sendMessage(m.chat, {
            audio: { url: audio },
            mimetype: 'audio/mpeg',
            fileName: `${anu.music_info.title || 'audio'}.mp3`,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'igstory':
case 'igs':
case 'instagramstory':
case 'instastory':
case 'igslide':
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case 'instatv':
case 'ig':
case 'igdl':
case 'igvideo':
case 'instavideo':
case 'instavid':
case 'igreels':
case 'instareels':
case 'instareel':
case 'igtv':
case 'instagram':
case 'instagramdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contohnya:*\n\n${prefix + command} https://www.instagram.com/reel/xxxxx`);
    if (!text.includes('instagram.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        let result = await instagram(text);
        if (result.msg) return newReply(result.msg);
        let item = 0;
        for (let url of result.url) {
            if (result.metadata.isVideo) {
                await wbk.sendMessage(m.chat, {
                    video: { url: url },
                    caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`,
                }, { quoted: m });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                if (item === 0) {
                    await wbk.sendMessage( m.chat, {
                        image: { url: url },
                        caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})\n\n${m.isGroup ? '_📥 Sisa foto akan dikirim di private chat_' : ''}`,
                    }, { quoted: m });
                    await m.react('✅');
                    await limitReduction(m, prefix, wm);
                } else {
                    await wbk.sendMessage(m.sender, {
                        image: { url: url },
                    }, { quoted: m });
                    await m.react('✅');
                    await limitReduction(m, prefix, wm);
                }
                item += 1;
                await sleep(2000); // Delay antara pengiriman gambar
            }
        }
        if (result.url.length === 0) {
            await newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'fbdl':
case 'facebook':
case 'facebookdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.facebook.com/share/v/xxxxxxxx`);
    if (!text.includes('facebook.com')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        const result = await facebookdl(text);
        console.log(result)
        if (!result || !result.videos || result.videos.length === 0) {
            return newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
        }
        const { thumbnail, videos } = result;
        const responseMessage = `${litespace("[FACEBOOK DOWNLOADER]")}`;
        const videoUrl = (videos.find(videos => videos.quality === 'hd') || medias.find(videos => videos.quality === 'sd'))?.url;
        if (videoUrl) {
            await wbk.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: responseMessage,
                thumbnail: thumbnail,
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply(`❌ Tidak ada video yang tersedia dalam kualitas HD atau SD.`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'twdl':
case 'xdl':
case 'twitter':
case 'twitterdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} https://x.com/`);
    if (!text.includes('x.com')) return newReply('Link tidak valid');
    try {
        await m.react('⏱️');
        const videoData = await twitterdl(text);
        if (videoData.status === 200) {
            let caption = `${litespace("[TWITTER DOWNLOADER]")}\n\n📌${videoData.data.description}`;
            await wbk.sendMessage(m.chat, { 
                video: { url: videoData.data.video_hd || videoData.data.video_sd }, // Menggunakan video HD atau SD
                caption: caption,
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply(`❌ Tidak ada video yang tersedia.`);
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ccdl': 
case 'capcut':
case 'capcutdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.capcut.com/t/xxxxxxx`)
    if (!text.includes('capcut.com')) return newReply(`Link Invalid!!`)
    try {
        await m.react('⏱️');
        const result = await capcutdl(text);
        if (!result) return newReply(`❌ Terjadi kesalahan saat mengambil data dari CapCut. Pastikan URL yang Anda berikan benar.`);
        const { title, date, pengguna, likes, author, videoUrl, posterUrl } = result;
        const responseMessage = `
        🎥 *Judul:* ${title}
        📅 *Tanggal:* ${date}
        👤 *Pengguna:* ${pengguna}
        ❤️ *Likes:* ${likes}
        ✍️ *Author:* ${author.name}
        `;
        await wbk.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: responseMessage,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'dydl':
case 'douyin':
case 'douyindl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.douyin.com/`)
    if (!text.includes('douyin.com')) return newReply(`Link Invalid!!`)
    try {
        await m.react('🕛');
        const result = await douyindl(text);
        if (result.error) return newReply(result.error);
        const { title, downloadUrls } = result;
        if (downloadUrls.length > 0) {
            const videoUrl = downloadUrls[0];
            const musicUrl = downloadUrls[downloadUrls.length - 1];
            const video = await axios.get(videoUrl, {
                responseType: "arraybuffer"
            });
            const videoBuffer = Buffer.from(video.data);
            await wbk.sendMessage(m.chat, {
                video: videoBuffer,
                caption: `*Judul:* ${title}`,
                mimetype: 'video/mp4',
            }, { quoted: m });
            const music = await axios.get(musicUrl, {
                responseType: "arraybuffer"
            });
            const musicBuffer = Buffer.from(music.data);
            await wbk.sendMessage(m.chat, {
                audio: musicBuffer,
                mimetype: 'audio/mpeg',
                ptt: true,
                filename: 'music.mp3',
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply("Gagal mendapatkan media. Silakan coba lagi.");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mf':
case 'mfdl':
case 'mediafire':
case 'mediafiredl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} mediafire.com`);
    if (!text.includes('mediafire.com')) return newReply('Harus berupa link MediaFire!');
    try {
        await m.react('🕛');
        const result = await mediafiredlV1(text);
        const { filename, size, mimetype, link } = result;
        let message = `📥 ${litespace("MEDIAFIRE DOWNLOADER")}\n\n` +
                      `◦ File Name: ${filename}\n` +
                      `◦ File Size: ${size}\n` +
                      `◦ File Type: ${mimetype}\n`;
        await wbk.sendMessage(m.chat, { 
            document: { url: link }, 
            fileName: filename, 
            caption: message, 
            mimetype: mimetype,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        const backupCMD = "mediafiredl2";
        const server = "SERVER 2"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'mf2':
case 'mfdl2':
case 'mediafire2':
case 'mediafiredl2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} mediafire.com`);
    if (!text.includes('mediafire.com')) return newReply('Harus berupa link MediaFire!');
    try {
        await m.react('🕛');
        const result = await mediafiredlV2(text);
        if (!result || result.success === false) {
            return newReply(`Gagal mendapatkan data dari MediaFire: ${result.message || 'Unknown error'}`);
        }
        const { fileName, fileSize, fileType, urlDownload, urlSource, uploaded } = result;
        let message = `📥 ${litespace("MEDIAFIRE DOWNLOADER")}\n\n` +
                      `◦ File Name: ${fileName}\n` +
                      `◦ File Size: ${fileSize}\n` +
                      `◦ File Type: ${fileType}\n`;
        await wbk.sendMessage(m.chat, { 
            document: { url: urlDownload }, 
            fileName: fileName, 
            caption: message, 
            mimetype: fileType,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'spotify':
case 'spotifydl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
    if (!text.includes('spotify.com') && !text.includes('open.spotify')) return newReply('Harus berupa link Spotify!')
    try {
        await m.react('🕛');
        const spotifyData = await spotifydl(text)
        const formatDuration = (ms) => new Date(ms).toISOString().substr(14, 5);
        console.log(spotifyData)
        if (!spotifyData) return m.reply('Gagal mendapatkan data dari Spotify.')
        const durasi = `${(spotifyData.duration_ms / 1000).toFixed(2)} detik`
        await wbk.sendMessage(m.chat, {
            audio: { url: spotifyData.download },
            mimetype: 'audio/mpeg',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: ucapanWaktu,
                    newsletterJid: saluran
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: spotifyData.title,
                    body: formatDuration(spotifyData.duration_ms),
                    thumbnail: await getBuffer(spotifyData.image),
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
            }, 
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
break

case 'gddl':
case 'gdrive':
case 'gdrivedl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
    if (!text.includes('drive')) return newReply('Link nggak valid')
    try {
        const res = await GDrive(text);
        if (res.error) return newReply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
        wbk.sendMessage(m.chat, {
            document: { url: res.downloadUrl },
            mimetype: res.mimetype,
            fileName: res.fileName,
            caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`,
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

case 'pindl':
case 'pinterestdl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
    if (!text.includes('pin')) return newReply(`Link Invalid!!`)
    try {
        await m.react('⏱️');
        const res = await savePin(text);
        const { title, results } = res
        let media = results[0]
        let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
        if (media.format === 'MP4') {
            await wbk.sendMessage(m.chat, {
                caption,
                video: { url: media.downloadLink },
            }, { quoted: m });
            await m.react('✅');
        await limitReduction(m, prefix, wm);
        } else if (media.format === 'JPG') {
            await wbk.sendMessage(m.chat, {
                caption,
                image: { url: media.downloadLink },
            }, { quoted: m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            return newReply('Format media tidak didukung.')
        }
    } catch (error) {
        console.log(error);
        const backupCMD = "aiodl";
        const server = "AIO DOWNLOADER"
        await errorMessage(m, error, text, prefix, backupCMD, server, wm);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'rndl':
case 'rednote':
case 'rednotedl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply("Masukkan link nya, Contoh: " + (prefix + command) + " http://xhslink.com/a/eyX9A3tMU3u4");
    try {
        await m.react('⏱️');
        const response = await axios.get(`http://kinchan.sytes.net/rednote/downloader`, {
            params: { url: text }
        });
        const { metadata, media } = response.data;
        if (!media.videoUrl) {
            return newReply("⚠ Video tidak ditemukan atau tidak tersedia.");
        }
        await wbk.sendMessage(m.chat, {
            video: { url: media.videoUrl },
            caption: `*乂 Red Note Downloader*\n\n📌 *Judul*: ${metadata.title || '❌'}\n👤 *Author*: ${metadata.nickname || '❌'}\n📝 *Description*: ${metadata.description || '❌'}\n\n❤ *Like*: ${metadata.likes || '0'} | 💬 *Komentar*: ${metadata.comments || '0'} | ⭐ *Save*: ${metadata.collects || '0'}`,
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
break

case 'videy':
case 'videydl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Example: ${prefix + command} https://www.videy.co/videolink?id=xxxxxxx`);
    if (!text.includes('videy')) return newReply(`Link Invalid!!`);
    try {
        await m.react('⏱️');
        const videoUrl = await videydl(text);
        if (!videoUrl) return newReply(`❌ Terjadi kesalahan saat mengambil data dari Videy. Pastikan URL yang Anda berikan benar.`);
        const responseMessage = `🎥 *Video berhasil diunduh!*\n🔗 *Link Video:* ${videoUrl}`;
        await wbk.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: responseMessage,
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

case 'gitclone': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!args[0]) return newReply(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
    if (!isUrl(args[0]) || !args[0].includes('github.com'))
        return newReply(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
    try {
        await m.react('⏳');
        let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = args[0].match(regex) || [];
        if (!user || !repo) return newReply(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
        repo = repo.replace(/.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let response = await fetch(url, {
            method: 'HEAD'
        });
        let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
        await wbk.sendMessage(m.chat, {
            document: { url: url },
            fileName: filename,
            mimetype: 'application/zip',
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

case 'stickerly': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!args[0]) return newReply(`Example: ${prefix + command} https://sticker.ly/s/xyz123`);
    const stickers = await stickerLy(args[0]);
    if (!stickers || stickers.length === 0) {
        m.reply("Failed to fetch stickers. Please try again later!");
        break;
    }
    for (const stickerUrl of stickers) {
        try {
            await m.react('⏳');
            const stickerData = await axios.get(stickerUrl, { responseType: "arraybuffer" });
            const sticker = new Sticker(stickerData.data, {
                pack: "",
                author: wm
            });
            const stickerBuffer = await sticker.toBuffer();
            await wbk.sendMessage(m.chat, { 
                sticker: stickerBuffer,
            }, { quoted: m });
            await sleep(3500);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } catch (error) {
            console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
        }
    }
}
break;