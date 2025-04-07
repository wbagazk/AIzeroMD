case 'male-ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let args = text.trim().split(",");
    let voiceName = args[0] ? args[0].toLowerCase().trim() : null;
    let languageInput = args[1] ? args[1].toLowerCase().trim() : null;
    let promptText = args[2] ? args.slice(2).join(",").trim() : null;
    const male = [
        { name: "Bradley Marshall", id: "waveltts_3786e470-7129-4f01-a263-0801b302acf1" },
        { name: "Rowan Flynn", id: "waveltts_7a16488d-eba0-4fa3-876a-97fbd57551ca" },
        { name: "Atlas", id: "waveltts_f5066419-beae-43c6-bf67-d8ad0cec52a5" }
    ];
    if (!voiceName) {
        let listNames = male.map(v => `- ${v.name}`).join("\n");
        return newReply(`📢 *List Suara Pria*\n\n${listNames}\n\nGunakan contoh: *${prefix + command} nama_suara, bahasa, teks*`);
    }
    let selectedVoice = male.find(v => v.name.toLowerCase() === voiceName);
    if (!selectedVoice) {
        return newReply(`❌ Suara tidak ditemukan! Pilih dari daftar berikut:\n${male.map(v => `- ${v.name}`).join("\n")}`);
    }
    let languageMap = {
        "indonesia": "id-ID",
        "inggris": "en-US",
        "spanyol": "es-ES",
        "jepang": "ja-JP",
        "korea": "ko-KR",
        "rusia": "ru-RU",
        "malayalam": "ml-IN"
    };
    let selectedLanguage = languageMap[languageInput];
    if (!selectedLanguage) {
        return newReply(`❌ Bahasa tidak valid! Pilih dari daftar berikut:\n${Object.keys(languageMap).map(l => `- ${l.charAt(0).toUpperCase() + l.slice(1)}`).join("\n")}`);
    }
    if (!promptText) {
        return newReply(`📝 *Masukkan teks yang ingin diubah menjadi suara!*\n\nContoh: *${prefix + command} ${selectedVoice.name.toLowerCase()}, ${languageInput}, Halo semua!*`);
    }
    try {
        await m.react('🎙️');
        let response = await wavelai(promptText, selectedLanguage, selectedVoice.name);
        if (!response || !response.output) throw new Error("Gagal mendapatkan audio dari AI.");
        let filePath = path.resolve(__dirname, "output.mp3");
        fs.writeFileSync(filePath, response.output);
        await wbk.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: fevent });
        await m.react('✅');
        fs.unlinkSync(filePath);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'female-ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let args = text.trim().split(",");
    let voiceName = args[0] ? args[0].toLowerCase().trim() : null;
    let languageInput = args[1] ? args[1].toLowerCase().trim() : null;
    let promptText = args[2] ? args.slice(2).join(",").trim() : null;
    const female = [
        { name: "Calista", id: "waveltts_aaf98444-e4e9-4bd6-9921-b307bbd2689e" },
        { name: "Serene Loh", id: "waveltts_297d3749-2394-4396-8324-e6fdb26846f0" },
        { name: "Sofía Mariposa", id: "waveltts_e51e20fb-4e89-41a0-9fbe-0f22f73c9557" }
    ];
    if (!voiceName) {
        let listNames = female.map(v => `- ${v.name}`).join("\n");
        return newReply(`📢 *List Suara Wanita*\n\n${listNames}\n\nGunakan contoh: *${prefix + command} nama_suara, bahasa, teks*`);
    }
    let selectedVoice = female.find(v => v.name.toLowerCase() === voiceName);
    if (!selectedVoice) {
        return newReply(`❌ Suara tidak ditemukan! Pilih dari daftar berikut:\n${female.map(v => `- ${v.name}`).join("\n")}`);
    }
    let languageMap = {
        "indonesia": "id-ID",
        "inggris": "en-US",
        "spanyol": "es-ES",
        "jepang": "ja-JP",
        "korea": "ko-KR",
        "rusia": "ru-RU",
        "malayalam": "ml-IN"
    };
    let selectedLanguage = languageMap[languageInput];
    if (!selectedLanguage) {
        return newReply(`❌ Bahasa tidak valid! Pilih dari daftar berikut:\n${Object.keys(languageMap).map(l => `- ${l.charAt(0).toUpperCase() + l.slice(1)}`).join("\n")}`);
    }
    if (!promptText) {
        return newReply(`📝 *Masukkan teks yang ingin diubah menjadi suara!*\n\nContoh: *${prefix + command} ${selectedVoice.name.toLowerCase()}, ${languageInput}, Halo semua!*`);
    }
    try {
        await m.react('🎙️');
        let response = await wavelai(promptText, selectedLanguage, selectedVoice.name);
        if (!response || !response.output) throw new Error("Gagal mendapatkan audio dari AI.");
        let filePath = path.resolve(__dirname, "output.mp3");
        fs.writeFileSync(filePath, response.output);
        await wbk.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: fevent });
        await m.react('✅');
        fs.unlinkSync(filePath);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'dimas': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Dimas yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-DimasNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true,
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'siti': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Siti yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-SitiNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true, 
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'tuti': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Medan serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Tuti yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-TutiNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true,
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break

case 'jajang': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} hai`);
    try {
        await reactionMessage('💬');
        const prompt = `Cara bicara kamu seperti orang Sunda serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Jajang yang diciptakan oleh WBK.`;
        const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        let result = await response.json();
        const gpt = result.data.result;
        wbk.sendMessage(m.chat, {  
            audio: { url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-JajangNeural&rate=0%&pitch=0Hz&volume=0%` },
            mimetype: 'audio/mpeg',
            ptt: true, 
        }, { quoted: fevent });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break 