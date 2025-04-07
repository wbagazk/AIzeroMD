case 'flux':
case 'text2img': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    let [teks, size] = text.split("--");
    let dimensions;
    if (size === "16:9") {
        dimensions = { width: 680, height: 360 };
    } else if (size === "1:1") {
        dimensions = { width: 512, height: 512 };
    } else if (size === "9:16") {
        dimensions = { width: 360, height: 680 };
    } else {
        dimensions = {};
    }
    try {
        await m.react('💬');
        let data = await flux({ prompt: teks.trim(), ...dimensions });
        for (let i of data.data.images) {
            await wbk.sendMessage(m.chat, { 
                image: { url: i },
                caption: `*Prompt:* ${teks.trim()}`,
                ai: !m.isGroup,
            }, { quoted: fevent });
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
        
case 'magichour': 
case 'text2img2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    let [teks, size] = text.split("--");
    let dimensions;
    if (size === "16:9") {
        dimensions = { orientation: 'landscape' };
    } else if (size === "1:1") {
        dimensions = { orientation: 'square' };
    } else if (size === "9:16") {
        dimensions = { orientation: 'portrait' };
    } else {
        dimensions = { orientation: 'square' };
    }
    try {
        await m.react('💬');
        let imageUrls = await magichour(teks.trim(), dimensions.orientation);
        for (let url of imageUrls) {
            await wbk.sendMessage(m.chat, { 
                image: { url: url },
                caption: `*Prompt:* ${teks.trim()}`,
                ai: !m.isGroup,
            }, { quoted: fevent });
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

case 'flatai': 
case 'text2img3': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    let ratio = size ? size.trim() : "1:1";
    const validRatios = ["1:1", "9:16", "16:9"];
    if (!validRatios.includes(ratio)) {
        return newReply(`Rasio tidak valid. Pilih dari: ${validRatios.join(", ")}`);
    }
    const fs = require('fs').promises;
    try {
        await m.react('💬');
        let imageUrls = await flatAi(prompt.trim(), "", ratio);
        for (let url of imageUrls) {
            if (url.startsWith('data:image/jpeg;base64,')) {
                const base64Data = url.split(',')[1];
                const buffer = Buffer.from(base64Data, 'base64');
                const fileName = `${Date.now()}.jpg`;
                const filePath = path.join(__dirname, 'temp', fileName);
                await fs.writeFile(filePath, buffer);
                await wbk.sendMessage(m.chat, { 
                    image: { url: filePath },
                    caption: `*Prompt:* ${prompt.trim()}`,
                    ai: !m.isGroup,
                }, { quoted: fevent });
                await fs.unlink(filePath);
            } else {
                console.error(`URL tidak valid: ${url}`);
            }
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

case 'ai4chatimg':
case 'text2img4': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    let ratio = (size || "1:1").trim();
    const validRatios = ["1:1", "16:9", "2:3", "3:2", "4:5", "5:4", "9:16", "21:9", "9:21"];
    if (!validRatios.includes(ratio)) {
        return newReply(`❌ Rasio tidak valid. Pilih dari: ${validRatios.join(", ")}`);
    }
    try {
        await m.react('🎨');
        let response = await ai4chatImage(prompt.trim(), ratio);
        if (!response?.image_link) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.image_link },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt:* ${prompt.trim()}\n🖼 *Rasio:* ${ratio}`,
            ai: !m.isGroup,
        }, { quoted: fevent });
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

case 'text2img5': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt]*`);
    try {
        await m.react('🎨');
        const translatedText = await translate(text, { from: 'id', to: 'en' });
        let response = await texttoimage(translatedText.text);
        if (!response?.status || !response?.result) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.result },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt (ID):* ${text.trim()}\n🌍 *Prompt (EN):* ${translatedText.text}`,
            ai: !m.isGroup,
        }, { quoted: fevent })
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

case 'aiimagegenerator': 
case 'text2anime': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`*Contoh: ${prefix + command} [prompt] --[aspect ratio]*`);
    let [prompt, size] = text.split("--");
    prompt = prompt.trim();
    let ratio = (size || "1:1").trim();
    const validRatios = {
        "1:1": [512, 512], 
        "2:3": [512, 768],
        "3:2": [768, 512]
    };
    const [width, height] = validRatios[ratio] || validRatios["1:1"];
    try {
        await m.react('🎨');
        let response = await aiimagegenerator(prompt, width, height);
        if (!response?.image) throw new Error("Gagal mendapatkan gambar dari AI.");
        await wbk.sendMessage(m.chat, {
            image: { url: response.image },
            caption: `✨ *Gambar AI Generated*\n📌 *Prompt:* ${prompt}\n🖼 *Rasio:* ${ratio} (${width}x${height})`,
            ai: !m.isGroup,
        }, { quoted: fevent });
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