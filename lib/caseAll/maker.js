case 'logogenerator': {
    if (!isPremium && db.data.users[m.sender].limit < 1) { return newReply(mess.limit)};
    if (!text) return newReply(`⚙️ *Penggunaan yang benar:* ${prefix + command} title|slogan|idea\n📌 *Contoh:* ${prefix + command} MyBrand|Best Quality|Creative Design`);
    let [title, slogan, idea] = text.split('|');
    if (!title || !slogan || !idea) return newReply(`⚠️ Format tidak valid! Gunakan format: ${prefix + command} title|slogan|idea`);
    await reactionMessage('⏳');
    try {
        let logoUrls = await sologoGenerator({ title, slogan, idea });
        if (!logoUrls || logoUrls.length === 0) return newReply('❌ Tidak ada logo yang ditemukan!');
        if (m.device === 'ios') {
            let images = logoUrls.map((url, index) => ({
                image: { url },
                caption: `🎨 *Logo Generator*\n\n📛 *Title:* ${title}\n📝 *Slogan:* ${slogan}\n💡 *Idea:* ${idea}\n\n💾 *Download logo:* ${url}`
            }));
            await wbk.sendAlbumMessage(m.chat, images, { quoted: m, delay: 2000 });
            await limitReduction(m, prefix, wm);
        } else if (m.device === 'android') {
            async function createImage(url) {
                const { imageMessage } = await generateWAMessageContent({
                    image: { url }
                }, { upload: wbk.waUploadToServer });
                return imageMessage;
            }
            let push = [];
            for (let i = 0; i < logoUrls.length; i++) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `📛 *Title:* ${title}\n📝 *Slogan:* ${slogan}\n💡 *Idea:* ${idea}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `🎨 Logo - ${i + 1}`,
                        hasMediaAttachment: true,
                        imageMessage: await createImage(logoUrls[i])
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Download Logo 🔽",
                                "url": "${logoUrls[i]}"
                            }`
                        }]
                    })
                });
            }
            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({ text: mess.done }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: wm }),
                            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [...push]
                            })
                        })
                    }
                }
            }, { quoted: m });
            await wbk.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
            await limitReduction(m, prefix, wm);
        } else {
            await newReply("💡 Gunakan WhatsApp Android atau iOS untuk melihat hasil logo!");
        }
    } catch (error) {
        console.error("Error generating logo:", error);
        return newReply("❌ Terjadi kesalahan saat membuat logo! Coba lagi nanti.");
    }
}
break;

case 'testttttt': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) { return newReply(mess.limit)};
    if (!text) { return newReply("Contoh : " + (prefix + command) + " Hai kak")};
    if (text.length > 101) { return newReply("Karakter terbatas, max 100!")};
    const buttbratgambar = { displayText: "Gambar" };
    const butt1 = {
        buttonId: prefix + "bratgambar " + text,
        buttonText: buttbratgambar
    };
    const buttbratvideo = { displayText: "Video" };
    const butt2 = {
        buttonId: prefix + "bratvideo " + text,
        buttonText: buttbratvideo
    };
    const button = {
        header: "hai kak",
        text: "Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! Klik *tombol* di bawah ini ya, kak! 😋👇",
        footer: wm,
        buttons: [butt1, butt2],
        viewOnce: true
    };
}
break;   

case 'brat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    const apis = [
        `https://api-ghostx.biz.id/api/imagecreator/bratgenerator?text=${encodeURIComponent(text)}`,
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`,
        `https://aqul-brat.hf.space/api/brat?text=${encodeURIComponent(text)}`,
        `https://velyn.vercel.app/api/maker/brat?text=${encodeURIComponent(text)}&apikey=free`,
        `https://api.suraweb.online/tools/brat?text=${encodeURIComponent(text)}`,
        `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`,
        `https://fastrestapis.fasturl.cloud/maker/brat/simple?text=${encodeURIComponent(text)}&theme=white`
    ];
    let success = false;
    for (let i = 0; i < apis.length; i++) {
        try {
            console.log(`🔄 Mencoba API ${i + 1}: ${apis[i]}`);
            const buffer = await getBuffer(apis[i]);
            if (buffer) {
                await wbk.sendImageAsSticker(m.chat, buffer, m, {
                    packname: botName,
                    author: ownerName,
                    ai: !m.isGroup
                });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
                console.log(`✅ API ${i + 1} Berhasil!`);
                success = true;
                break;
            }
        } catch (error) {
            console.log(`❌ API ${i + 1} gagal: ${apis[i]}\nError: ${error.message}`);
            db.data.settings[botNumber].totalError += 1;
        }
    }
    if (!success) {
        await newReply(`‼️ ERROR HUBUNGI OWNER ‼️\n_Ada kesalahan saat menghubungi penyedia API/Server._`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'brattes':
case 'brat2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
    const TEMP_DIR = './temp/';
    try {
        if (!fs.existsSync(TEMP_DIR)) {
            fs.mkdirSync(TEMP_DIR, { recursive: true });
        }
        const size = 512;
        const padding = 20;
        const maxFontSize = 120;
        const minFontSize = 30;
        const lineSpacing = 10;
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        function wrapText(ctx, text, maxWidth) {
            const words = text.split(' ');
            let lines = [];
            let line = '';
            for (let word of words) {
                let testLine = line + word + ' ';
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth && line.length > 0) {
                    lines.push(line);
                    line = word + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line.trim());
            return lines;
        }
        function getOptimalFontSize(ctx, text, maxWidth, maxHeight) {
            let fontSize = maxFontSize;
            let lines;
            do {
                ctx.font = `bold ${fontSize}px Helvetica, sans-serif`;
                lines = wrapText(ctx, text, maxWidth);
                let totalHeight = lines.length * (fontSize + lineSpacing);
                if (totalHeight > maxHeight) {
                    fontSize -= 5;
                } else {
                    break;
                }
            } while (fontSize > minFontSize);
            return { fontSize, lines };
        }
        const maxWidth = size - 2 * padding;
        const maxHeight = size - 2 * padding;
        const { fontSize, lines } = getOptimalFontSize(ctx, text, maxWidth, maxHeight);
        ctx.font = `bold ${fontSize}px Helvetica, sans-serif`;
        let lineHeight = fontSize + lineSpacing;
        let totalHeight = lines.length * lineHeight;
        let startY = (size - totalHeight) / 2 + fontSize / 2;
        for (let i = 0; i < lines.length; i++) {
            await fillTextWithTwemoji(ctx, lines[i], size / 2, startY + i * lineHeight);
        }
        const buffer = canvas.toBuffer('image/png');
        const outputPath = path.join(TEMP_DIR, `${Date.now()}_brat.png`);
        fs.writeFileSync(outputPath, buffer);
        await wbk.sendImageAsSticker(m.chat, fs.readFileSync(outputPath), m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        fs.unlinkSync(outputPath);
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

case 'bratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    await m.react('⏱️');
    const tempDir = path.resolve('temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const framePaths = [];
    const apis = [
        `https://api-ghostx.biz.id/api/imagecreator/bratgenerator?text=`,
        `https://brat.caliphdev.com/api/brat?text=`,
        `https://aqul-brat.hf.space/api/brat?text=`,
        `https://velyn.vercel.app/api/maker/brat?text=&apikey=free`,
        `https://api.suraweb.online/tools/brat?text=`,
        `https://api.siputzx.my.id/api/m/brat?text=`,
        `https://fastrestapis.fasturl.cloud/maker/brat/simple?text=&theme=white`
    ];
    let workingApi = null;
    for (let i = 0; i < apis.length; i++) {
        try {
            console.log(`🔄 Mencoba API ${i + 1}: ${apis[i]}`);
            const testUrl = apis[i].replace('text=', `text=${encodeURIComponent(text)}`);
            const testRes = await axios.get(testUrl, { responseType: "arraybuffer", timeout: 5000 });
            if (testRes.status === 200) {
                console.log(`✅ API ${i + 1} Berhasil!`);
                workingApi = apis[i];
                break;
            }
        } catch (error) {
            console.log(`❌ API ${i + 1} gagal: ${apis[i]}
Error: ${error.message}`);
        }
    }
    if (!workingApi) {
        return newReply("❌ Semua API tidak bisa diakses. Silakan coba lagi nanti.");
    }
    try {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            const textSegment = words.slice(0, i + 1).join(" ");
            const apiUrl = workingApi.replace('text=', `text=${encodeURIComponent(textSegment)}`);
            const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
        }
        const fileListPath = path.join(tempDir, "wbk.txt");
        let fileListContent = "";
        for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
        }
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
        fileListContent += `duration 2\n`;
        fs.writeFileSync(fileListPath, fileListContent);
        const outputVideoPath = path.join(tempDir, "output.mp4");
        execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`,
            { stdio: 'ignore' }
        );
        const buffer = fs.readFileSync(outputVideoPath);
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
        framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
        });
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cwkbrat':
case 'cwebrat':
case 'cewekbrat':
case 'cewebrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await cewebrat(text);
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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

case 'cwkbratvid':        
case 'cwebratvid':
case 'cewekbratvid':
case 'cewebratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    await m.react('⏱️');
    const tempDir = path.resolve('temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const framePaths = [];
    try {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            const textSegment = words.slice(0, i + 1).join(" ");
            const buffer = await cewebrat(textSegment);
            const framePath = path.join(tempDir, `frame${i}.png`);
            fs.writeFileSync(framePath, buffer);
            framePaths.push(framePath);
        }
        const fileListPath = path.join(tempDir, "wbk.txt");
        let fileListContent = "";
        for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
        }
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
        fileListContent += `duration 2\n`;
        fs.writeFileSync(fileListPath, fileListContent);

        const outputVideoPath = path.join(tempDir, "output.mp4");
        execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`,
            { stdio: 'ignore' }
        );
        const options = {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        };
        await wbk.sendImageAsSticker(m.chat, outputVideoPath, m, options);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
        framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
        });
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'furbrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/furbrat?text=${encodeURIComponent(text)}&style=4&position=center&mode=image`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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
        
case 'furbratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/furbrat?text=${encodeURIComponent(text)}&style=4&position=center&mode=animated`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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

case 'animbrat': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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

case 'animbratvid': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=animated`);
        wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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

case 'emojimix': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let [emoji1, emoji2] = text.split('+');
    if (!emoji1 || !emoji2) return m.reply(`Contoh: ${prefix + command} 😂+😭`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`);
        if (!buffer || buffer.length === 0) {
            return newReply('Gagal mendapatkan gambar, coba emoji yang berbeda!');
        }
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            ai: !m.isGroup
        });
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

case 'qc': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('⚠️ *Input teksnya!* Coba masukkan teks untuk membuat quote.');
    try {
        await m.react('⏱️');
        const nn = await wbk.getName(m.sender);
        let pp = await wbk.profilePictureUrl(m.sender, 'image').catch(() => 
            'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg'
        );
        let gtww;
        if (m.quoted) {
            const nq = await wbk.getName(m.quoted.sender);
            let pq = await wbk.profilePictureUrl(m.quoted.sender, 'image').catch(() => 
                'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg'
            );
            let quotedText = m.quoted.text.length > 4 ? m.quoted.text.substring(4) : m.quoted.text;
            let uq = {
                avatar: true,
                from: {
                    id: 1,
                    name: nq,
                    photo: { url: pq }
                },
                text: quotedText
            };
            gtww = await quotedLyo(text, nn, pp, { quoted: uq }).catch(() => null);
        } else {
            gtww = await quotedLyo(text, nn, pp).catch(() => null);
        }
        if (!gtww || !gtww.result || !gtww.result.image) {
            throw new Error("Gagal membuat gambar quote, coba lagi nanti.");
        }
        const buffer = Buffer.from(gtww.result.image, 'base64');
        await wbk.sendImageAsSticker(m.chat, buffer, m, {
            packname: botName,
            author: ownerName,
            quality: 100,
            background: 'transparent',
            ai: !m.isGroup
        });
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

case 's':
case 'stiker':
case 'sticker': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    await m.react('⏱️');
    try {
        if (/image/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            await wbk.sendImageAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
                ai: !m.isGroup
            });
            await m.react('✅');
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 9) return newReply(`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            await wbk.sendVideoAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
                ai: !m.isGroup
            });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'take':
case 'steal':
case 'stickerwm':
case 'swm': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted || !mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
    await m.react('⏱️');
    try {
        const swn = args.join(" ");
        const pcknm = swn.split("|")[0] || botName;
        const atnm = swn.split("|")[1] || ownerName;
        if (m.quoted.isAnimated === true) {
            let mediaPath = await wbk.downloadAndSaveMediaMessage(quoted, "gifee").catch(() => null);
            if (!mediaPath) throw new Error("Gagal mengunduh GIF, coba lagi.");
            await wbk.sendMessage(m.chat, {
                sticker: fs.readFileSync("gifee.webp")
            }, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else if (/image/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted).catch(() => null);
            if (!media) throw new Error("Gagal mengunduh gambar, coba lagi.");
            await wbk.sendImageAsSticker(m.chat, media, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 9) 
                return newReply('Video terlalu panjang, maksimal 9 detik ya! ⏳');
            let media = await wbk.downloadAndSaveMediaMessage(quoted).catch(() => null);
            if (!media) throw new Error("Gagal mengunduh video, coba lagi.");
            await wbk.sendVideoAsSticker(m.chat, media, m, {
                packname: pcknm,
                author: atnm,
                ai: !m.isGroup
            });
        } else {
            return newReply(`⚠️ Kirim foto/video untuk dipakai ya, kak!`);
        }
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

case 'stickmeme':
case 'stickermeme':
case 'smeme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    await reactionMessage('⏱️');
    try {
        if (!/webp/.test(mime) && /image/.test(mime)) {
            if (!text) return newReply(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
            atas = text.split('|')[0] ? text.split('|')[0] : '';
            bawah = text.split('|')[1] ? text.split('|')[1] : '';
            let mee = await wbk.downloadAndSaveMediaMessage(quoted);
            let mem = await toUrlUpload(mee);
            let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
            await wbk.sendImageAsSticker(m.chat, meme, m, {
                packname: packname,
                author: author,
                ai: !m.isGroup
            });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'carbon': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh : ${prefix + command} console.log('Hello, world!');`);
    await m.react('⏱️');
    try {
        const buffer = await getBuffer(`https://fastrestapis.fasturl.cloud/maker/carbon/simple?code=${encodeURIComponent(text)}`);
        await wbk.sendMessage(m.chat, { 
            image: buffer, 
            caption: mess.success, 
            ai: !m.isGroup
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