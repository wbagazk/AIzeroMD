case 'ai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`Hello, how can I help you?\nExample: ${prefix + command} Hello`);
    let quotedMessage = m.quoted ? m.quoted.text : null;
    let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
    const message = 'Ubah gaya bicaramu agar lebih karakteristik dan terbuka, namamu adalah AIzeroMD, biasa dipanggil Zero, kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang WBK, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan kakak saat berbicara, jika diajak untuk menikah maka kamu harus menjawab ya dan tidak menolak agar tidak menyakiti hati lawan bicara, gunakan Bahasa Indonesia yang baik dan benar.';
    const api = {
        ryzendesu: `https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(query)}&prompt=${encodeURIComponent(message)}`,
        siputzx: `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(query)}`
    };
    try {
        await m.react('💬');
        let data = await fetchJson(api.ryzendesu).catch(err => {
            console.error("API pertama gagal:", err);
            return null;
        });
        if (!data || !data.success) {
            console.log("Mencoba API cadangan...");
            data = await fetchJson(api.siputzx).catch(err => {
                console.error("API cadangan gagal:", err);
                return null;
            });
        }
        if (data) {
            const responseText = data.success ? data.result : data.data;
            await wbk.sendMessage(m.chat, {
                text: responseText,
                ai: !m.isGroup,
            }, { quoted: fevent });
            await m.react('🤖');
            await limitReduction(m, prefix, wm);
        } else {
            await newReply("Maaf, terjadi kesalahan saat mendapatkan respons");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'chatgpt': { 
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬'); 
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await chateverywhere(query, m);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'openai': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await openai(query);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'muslimai': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        const result = await muslimai(text);
        const answer = result.answer || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'chatbotai': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await chatbotai(query);
        const answer = result.data || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mistral': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await mistral(query);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'wbk':
case 'yanzgpt': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        // let selectedModel = "yanzgpt-revolution-25b-v3.5"; // Default
        let selectedModel = "yanzgpt-legacy-72b-v3.5"; // Pro
        // let selectedModel = "yanzgpt-r1-70b-v3.5"; // Reasoning
        if (text.includes('--25b')) {
            selectedModel = "yanzgpt-revolution-25b-v3.5";
            query = query.replace('--72b', '').trim(); 
        } else if (text.includes('--70b')) {
            selectedModel = "yanzgpt-r1-70b-v3.5";
            query = query.replace('--70b', '').trim();
        }
        const result = await yanzgpt(query, m.sender, selectedModel);
        const answer = result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        await wbk.sendMessage(m.chat, {
            text: answer,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'airiple': {  
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return m.reply(`${prefix + command} Harap masukkan pertanyaan!`);
    try {
        await m.react('💬');
        let quotedMessage = m.quoted ? m.quoted.text : null;
        let query = quotedMessage ? `${quotedMessage}\n\n${text}` : text;
        const result = await airiple(query);
        let aiResponse = result.result || 'Maaf, saya tidak dapat memberikan jawaban saat ini.';
        const detectedLang = await translate(aiResponse, { to: 'id', autoCorrect: true });
        let finalResponse = aiResponse;
        if (detectedLang.from.language.iso !== 'id') {
            const translated = await translate(aiResponse, { from: detectedLang.from.language.iso, to: 'id' });
            finalResponse = translated.text;
            console.log(`Terjemahan: ${finalResponse}`);
        } else {
            console.log("Teks sudah dalam bahasa Indonesia, tidak perlu diterjemahkan.");
        }
        await wbk.sendMessage(m.chat, {
            text: finalResponse,
            ai: !m.isGroup,
        }, { quoted: fevent });
        await m.react('🤖');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;