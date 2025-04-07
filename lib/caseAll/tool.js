case 'ssweb': {
    if (!isPremium) return newReply(mess.premium);
    if (!args[0]) return newReply(
        `📸 *Cara Pakai Screenshot Web!*\n\n` +
        `Gunakan perintah: ${prefix + command} <tipe> <url web>\n\n` +
        `📌 *Tipe yang tersedia:*\n` +
        ` ⌬ 📱 hp → Tampilan mobile\n` +
        ` ⌬ 💻 pc → Tampilan desktop\n` +
        ` ⌬ 📟 tab → Tampilan tablet\n\n` +
        `🔍 *Contoh penggunaan:*\n` +
        `${prefix + command} hp https://www.ryzenoffc.my.id`
    );
    if (!args[1]) return newReply(
        `⚠️ *URL tidak boleh kosong!*\n\n` +
        `Gunakan format: ${prefix + command} <tipe> <url web>\n\n` +
        `💡 *Contoh:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
    );
    const key = await pickRandom(["1b484c", "965abb", "731a82", "194174"]);
    let deviceType, dimension, deviceName;
    if (args[0] === 'hp') {
        deviceType = "phone";
        dimension = "480x800";
        deviceName = "📱 Mobile View";
    } else if (args[0] === 'pc') {
        deviceType = "desktop";
        dimension = "1024x768";
        deviceName = "💻 Desktop View";
    } else if (args[0] === 'tab') {
        deviceType = "tablet";
        dimension = "800x1280";
        deviceName = "📟 Tablet View";
    } else {
        return newReply(
            `❌ *Tipe tidak dikenali!*\n\n` +
            `Gunakan salah satu tipe berikut:\n` +
            ` ⌬ 📱 hp\n ⌬ 💻 pc\n ⌬ 📟 tab\n\n` +
            `💡 *Contoh:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
        );
    }
    if (db.data.users[m.sender].limit < 1) {
        return newReply(
            `⛔ *Limit habis!*\n` +
            `Silakan hubungi pemilik bot untuk mendapatkan limit tambahan.\n\n` +
            `📞 *Owner:* ${ownnomor}`
        );
    }
    try {
        await wbk.sendMessage(m.chat, {
            image: {
                url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=${deviceType}&dimension=${dimension}&format=png&cacheLimit=0&delay=1000`
            },
            caption: `✅ *Screenshot Berhasil!*\n\n` +
                `🔗 *URL:* ${args[1]}\n` +
                `📌 *Tipe:* ${deviceName}\n` +
                `⏳ *Waktu proses:* ${latensi.toFixed(4)}s\n\n` +
                `🚀 Screenshot siap digunakan!`
        }, { quoted: m });
        await m.react('📸');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case "ipwhois": {
    if (!text) return newReply(`Kirim perintah:\n\n${prefix + command} <IP Address>\n\n📌 Contoh:\n${prefix + command} 114.5.213.103`);
    const ip = text.trim();
    const apiUrl = `https://ipwho.is/${ip}`;
    try {
        newReply("🔍 Sedang mencari informasi, mohon tunggu...");
        const data = await fetchJson(apiUrl);
        if (data.success) {
            const flagEmoji = data.flag?.emoji || "🏳️";
            let messageText = "📍 *IP Whois Information*\n";
            messageText += `🌐 *IP Address*: ${data.ip}\n`;
            messageText += `🗺️ *Tipe*: ${data.type}\n`;
            messageText += `🌍 *Benua*: ${data.continent} (${data.continent_code})\n`;
            messageText += `🇨🇺 *Negara*: ${data.country} (${data.country_code}) ${flagEmoji}\n`;
            messageText += `🏙️ *Kota*: ${data.city}, ${data.region} (${data.region_code})\n`;
            messageText += `📞 *Kode Panggilan*: +${data.calling_code}\n`;
            messageText += `📫 *Kode Pos*: ${data.postal}\n`;
            messageText += `🏛️ *Ibu Kota*: ${data.capital}\n\n`;
            messageText += "📡 *Provider Informasi*\n";
            messageText += `🏢 *ISP*: ${data.connection?.isp || "Tidak tersedia"}\n`;
            messageText += `🔗 *Domain*: ${data.connection?.domain || "Tidak tersedia"}\n`;
            messageText += `🔢 *ASN*: ${data.connection?.asn || "Tidak tersedia"}\n\n`;
            messageText += "🕰️ *Zona Waktu*\n";
            messageText += `🕒 *ID*: ${data.timezone?.id || "Tidak tersedia"}\n`;
            messageText += `🕒 *UTC*: ${data.timezone?.utc || "Tidak tersedia"}\n`;
            messageText += `🕒 *Waktu Sekarang*: ${data.timezone?.current_time || "Tidak tersedia"}\n`;
            newReply(messageText);
            await limitReduction(m, prefix, wm);
        } else {
            newReply(`❌ IP Address tidak valid atau informasi tidak ditemukan.`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'createmail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const namePrefix = args[0];
    if (!namePrefix) return newReply('Silakan berikan prefix nama untuk email Anda.');
    try {
        const account = await createAccountMail(namePrefix);
        let teks = `「 *EMAIL CREATED* 」\n\n`;
        teks += ` · *Email :* ${account.email}\n`;
        teks += ` · *Password :* ${account.password}\n`;
        teks += ` · *ID :* ${account.id}\n`;
        teks += ` · *Token :* ${account.token}\n\n`;
        teks += `> Cek email? Ketik #cekemail <token>`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                                "display_text": "COPY TOKEN",
                                "id": "$${account.token}",
                                "copy_code": "${account.token}"
                            }`
        }];
        sendButton(m.chat, '', teks, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cekmail': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit)
    const token = args[0];
    if (!token) {
        return newReply('Silakan berikan token untuk memeriksa pesan.');
    }
    try {
        const messages = await cekPesanMail(token);
        if (messages.length === 0) {
            return newReply('Tidak ada pesan baru.');
        }
        let messageList = '📬 *Pesan Baru:*\n\n';
        messages.forEach((msg, index) => {
            messageList += `${index + 1}. Dari: ${msg.from}\n- Subjek: ${msg.subject}\n\n`;
        });
        newReply(messageList);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'cekredirect': {
    if (args.length < 1) return newReply('Harap masukkan URL yang ingin diperiksa! 🧐\nContoh: ' + prefix + 'cekredirect <url>');
    const url = args[0];
    const follow = args[1] === 'true';
    try {
        const result = await redirectDetective(url, follow);
        if (result.status) {
            const lastRedirect = result.result.redirects;
            if (lastRedirect) {
                newReply(`Redirect terakhir untuk URL: ${url}\n\nLink: ${lastRedirect}`);
                await limitReduction(m, prefix, wm);
            } else {
                newReply(`Tidak ada redirects ditemukan untuk URL: ${url}`);
            }
        } else {
            newReply(`Error: ${result.message}`);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'vcc':
case 'vccgenerator': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit)
    const type = args[0] || 'MasterCard';
    const count = args[1] || 1;
    const apiUrl = `https://api.awan-attack.my.id/vcc-generator?type=${type}&count=${count}`;
    try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.data && response.data.data.length > 0) {
            let vccList = response.data.data.map((vcc, index) => {
                return `Data VCC ke *${index + 1}*:

*Nama Pemilik:* ${vcc.cardholderName}
*Nomor:* ${vcc.cardNumber}
*CVC:* ${vcc.cvv}
*Exp:* ${vcc.expirationDate}`;
            }).join('\n\n');
            newReply(`${vccList}
        
Contoh cara membuat VCC:
1.Kunjungi situs web resmi bank atau penyedia layanan VCC.
2.Pilih jenis VCC yang diinginkan(misal: MasterCard, Visa).
3.Isi formulir pendaftaran dengan data yang benar.
4.Tunggu proses verifikasi dan aktivasi VCC.

Setelah berhasil aktivasi VCC, pastikan untuk:
- Simpan data VCC dengan aman.
- Gunakan VCC hanya untuk transaksi yang sah.
- Periksa saldo VCC secara berkala.`);
            await limitReduction(m, prefix, wm);
        } else {
            reply('Maaf, gagal mengambil data VCC atau data tidak ditemukan.');
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'toimage':
case 'toimg': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply('Reply Image')
    if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
    await m.react('⏱️');
    let media = await wbk.downloadAndSaveMediaMessage(quoted)
    let ran = await getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) throw err
        let buffer = fs.readFileSync(ran)
        wbk.sendMessage(m.chat, {
            image: buffer
        }, { quoted: m })
        fs.unlinkSync(ran)
        m.react('✅');
        limitReduction(m, prefix, wm);
    })
}
break;

case 'tomp3':
case 'toaudio': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let audioBuffer = await toAudio(media, 'mp4');
        await wbk.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg'
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

case 'tovn': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let audioBuffer = await toAudio(media, 'mp4');
        await wbk.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: true
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

case "cetakqr":
case "qrtext":
case "toqr": {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply("Masukan Link Untuk Dijadikan QR");
    await m.react('⏱️');
    const apiUrl = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        await wbk.sendMessage(m.chat, {
            image: Buffer.from(response.data),
            caption: 'Sudah Dijadikan QR✨'
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

case 'togithub': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    const userName = githubCDN.user;
    const repoName = githubCDN.repo; 
    const token = githubCDN.token; 
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const ext = path.extname(media);
        const newFileName = `wbk_${Date.now()}${ext}`;
        const newFilePath = path.join(path.dirname(media), newFileName);
        fs.renameSync(media, newFilePath);
        const base64File = fs.readFileSync(newFilePath).toString('base64');
        const payload = {
            message: `Upload wbk_${Date.now()}${ext}`,
            content: base64File,
            branch: 'main', // Ganti sesuai branch Github yg dipakai
            path: `${newFileName}`
        };
        const response = await axios.put(`https://api.github.com/repos/${userName}/${repoName}/contents/${payload.path}`, payload, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const fileUrl = response.data.content.download_url;
        const fileSize = (fs.statSync(newFilePath).size / 1024).toFixed(2);
        const uploadDate = new Date().toLocaleString();
        const uploader = m.pushName;
        const caption = `🔗 *Link File* : ${fileUrl}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${fileUrl}",
                "copy_code": "${fileUrl}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(newFilePath);
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

case 'tourl': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const url = await toUrlUpload(media);
        let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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

case 'tocatbox': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const ext = path.extname(media);
        const newFileName = `wbk_${Date.now()}${ext}`;
        const newFilePath = path.join(path.dirname(media), newFileName);
        fs.renameSync(media, newFilePath);
        let response = await catbox(newFilePath);
        let fileSize = (fs.statSync(newFilePath).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${response}",
                "copy_code": "${response}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(newFilePath);
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

case 'tocloudmini': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        let response = await cloudmini(media);
        let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        const expiry_time = response.expiry_time;
        const downloadLink = response.URL;
        let caption = `🔗 *Link Media* : ${downloadLink}\n🕛 *Expired* : ${expiry_time}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${downloadLink}",
                "copy_code": "${downloadLink}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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

case 'toanonfile': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await anonfile(buffer);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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
        
case 'togofile': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const urlResponse = await gofile(media);
        if (!urlResponse || !urlResponse.data || !urlResponse.data.downloadPage) {
            throw new Error('Gagal mendapatkan URL dari Gofile');
        }
        const url = urlResponse.data.downloadPage;
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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
        
case 'topxpic': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await pxpicCDN(media);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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

case 'toquax': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const url = await quax(media);
        const buffer = fs.readFileSync(media);
        let fileSize = (buffer.length / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;
        let caption = `🔗 *Link Media* : ${url}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY LINK",
                "id": "${url}",
                "copy_code": "${url}"
            }`
        }];
        sendButton(m.chat, '', caption, button, m);
        await fs.unlinkSync(media);
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

case 'tovidey': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!mime) return newReply(`Kirim/Reply File Video Dengan Caption ${prefix + command}`);
    await m.react('⏳');
    try {
        if (/video/.test(mime)) {
            let media = await wbk.downloadAndSaveMediaMessage(quoted);
            const response = await uploadVidey(media);
            console.log(response)
            if (!response || !response.id) {
                throw new Error("Gagal mengunggah video ke Videy.");
            }
            let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
            let uploadDate = new Date().toLocaleString();
            let uploader = m.pushName;
            let caption = `🎥 *Video Berhasil Diupload!*\n\n🔗 *Link Video* : https://videy.co/v?id=${response.id}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB`;
            let button = [{
                "name": "cta_copy",
                "buttonParamsJson": `{
                    "display_text": "COPY LINK",
                    "id": "https://videy.co/v?id=${response.id}",
                    "copy_code": "https://videy.co/v?id=${response.id}"
                }`
            }];
            sendButton(m.chat, '', caption, button, m);
            await fs.unlinkSync(media);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } else {
            return newReply("❌ Hanya bisa mengunggah video!");
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'safelink': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Penggunaan: ${prefix + command} urlnya`);
    try {
        await m.react('⏳');
        const apiToken = 'fe867ff34f506286472202109bea748c696ee9a4';
        let response = await fetch('https://safelinku.com/api/v1/links', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: text })
        });
        let result = await response.json();
        if (response.status === 201 && result.url) {
            return newReply(`🔗 *Safelink berhasil dibuat!*\n\n${result.url}`);
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        } 
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;


case 'tr':
case 'translate': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) {
        return newReply("Kak, cara pakainya gini ya:\n\n" +
            "1. Memasukkan pesan\n" +
            "- *Kirim perintah*: " + (prefix + command) + " *kode bahasa* *message*\n" +
            "- *Contoh*: " + (prefix + command) + " id Hello\n\n" +
            "2. Reply/balas pesan\n" + 
            "- *Kirim perintah*: " + (prefix + command) + " *kode bahasa*\n" +
            "- *Contoh*: " + (prefix + command) + " en\n\n" +
            "Daftar bahasa lengkap bisa cek di sini kak: https://cloud.google.com/translate/docs/languages");
    }
    try {
        await m.react('🕛');
        let translationText = m.quoted ? m.quoted.text : text.split(args[0])[1];
        if (!translationText) return newReply("Hmm, kayaknya teksnya kurang lengkap deh kak. Coba dicek lagi ya! 🧐");
        const translationParams = {
            'to': args[0] 
        };
        const apiUrl = `https://api.siputzx.my.id/api/tools/translate?text=${encodeURIComponent(translationText)}&source=auto&target=${translationParams.to}`;
        const response = await fetch(apiUrl);
        const translationResult = await response.json();
        if (translationResult.success) {
            newReply("Hasil terjemahan:\n\n" + translationResult.translatedText);
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

case 'say':
case 'tts': 
case 'texttosound': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium yuk! 🥺");
    if (!text) return newReply("Cara pakenya gini kak:\n" + (prefix + command) + " text\n\n*Kirim perintah*: " + (prefix + command) + " yaya 😁");
    let languageCode = text.split('--')[1];
    try {
        await m.react('🕛');
        if (!languageCode) { languageCode = 'id' };
        const defaultLanguage = 'id';
        function textToSpeech(textToConvert, lang = defaultLanguage) {
            return new Promise((resolve, reject) => {
                try {
                    const gttsInstance = gtts(lang);
                    const audioFilePath = path.join(__dirname, "./temp", Date.now() + ".wav");
                    gttsInstance.save(audioFilePath, textToConvert, () => {
                        resolve(fs.readFileSync(audioFilePath));
                        fs.unlinkSync(audioFilePath);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }
        let audioBuffer;
        try {
            audioBuffer = await textToSpeech(text, defaultLanguage);
        } catch (error) {
            newReply("Hmm, ada yang salah nih, coba lagi ya! 🥲");
            audioBuffer = await textToSpeech(text); 
        } finally {
            const audioMessage = {
                audio: audioBuffer,
                mimetype: "audio/mpeg"
            };
            if (/say/.test(command)) {
                audioMessage.ptt = true;
            }
            wbk.sendMessage(m.chat, audioMessage, { 'quoted': m });
            await m.react('✅');
            await limitReduction(m, prefix, wm);
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'removebg': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!/image/.test(mime)) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    await m.react('⏱️');
    try {
        let media = await wbk.downloadAndSaveMediaMessage(quoted);
        const buffer = fs.readFileSync(media);
        const url = await anonfile(buffer);
        const resultUrl = await removeBackground(url);
        const responseImage = await fetch(resultUrl);
        const imageBuffer = await responseImage.buffer();
        let caption = `🔗 *Link Gambar Tanpa Latar Belakang* : ${resultUrl}\n📅 *Created* : ${new Date().toLocaleString()}`;
        await wbk.sendMessage(m.chat, {
            document: imageBuffer,
            mimetype: 'image/png',
            caption: caption,
            fileName: 'WBK_RemoveBG.png',
        }, { quoted: m });
        await fs.unlinkSync(media);
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

case 'removebg2': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'removebg');
        await wbk.sendMessage(m.chat, {
            document: { url: data.resultImageUrl },
            mimetype: 'image/png',
            caption: mess.done,
            fileName: 'WBK_RemoveBG2.png',
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;

case 'remini':
case 'hdr':
case 'hd': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'enhance');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;
 
case 'upscale': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'upscale');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;
        
case 'colorize': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    wbk.enhancer = wbk.enhancer ? wbk.enhancer : {};
    if (m.sender in wbk.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
    let query = m.quoted ? m.quoted : m;
    let mime = (query.msg || query).mimetype || query.mediaType || "";
    if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
    wbk.enhancer[m.sender] = true;
    try {
        await m.react('⏱️');
        let media = await wbk.downloadAndSaveMediaMessage(query);
        let data = await pxpicTool(media, 'colorize');
        wbk.sendMessage(m.chat, {
            image: { url: data.resultImageUrl },
            caption: mess.done,
        }, { quoted: m });
        await fs.unlinkSync(media);
        await m.react('✅');
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
    delete wbk.enhancer[m.sender];
}
break;

case 'fetch':
case 'get': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`No Query?\n\nExample : ${prefix + command} https://www.google.com`);
    try {
        await m.react('⏱️');
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const contentType = res.headers['content-type'] || '';
        const fileName = url.split('/').pop();
        const tempFilePath = path.join(__dirname, 'temp', `tempfile_${Date.now()}`);
        fs.writeFileSync(tempFilePath, res.data);
        if (/json|html|plain|javascript|python|php/.test(contentType)) {
            await wbk.sendMessage(m.chat, {
                document: { url: tempFilePath },
                mimetype: 'text/plain',
                fileName: fileName,
                caption: `${litespace("GET FILE")}\n> Filename: ${fileName}`,
            }, { quoted: m });
            await m.react('✅');
        await limitReduction(m, prefix, wm);
        } else {
            const { mime } = await fileType.fromFile(tempFilePath) || {};
            if (mime) {
                await wbk.sendMessage(m.chat, {
                    document: { url: tempFilePath },
                    mimetype: mime,
                    fileName: fileName,
                    caption: `${litespace(`GET ${mime.toUpperCase()}`)}\n> Filename: ${fileName}`,
                }, { quoted: m });
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                return newReply('Tipe file tidak dapat dideteksi.');
            }
        }
        fs.unlinkSync(tempFilePath);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'getpb':
case 'getpastebin': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/pastebin\.com\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply('Masukkan tautan Pastebin-!'); 
    const pasteId = url.trim().split('/').pop();
    try {
        await m.react('⏱️');
        const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
        if (!response.ok) return newReply('Gagal mengambil konten dari Pastebin.');
        const content = await response.text();
        if (!content) return newReply('Tidak ada konten yang ditemukan di Pastebin-!');
        let detectedExt = 'txt';
        let detectedMime = 'text/plain';
        if (/^\s*</.test(content)) { 
            detectedExt = 'html';
            detectedMime = 'text/html';
        } else if (/^(\s*{|\s*\[)/.test(content)) { 
            detectedExt = 'json';
            detectedMime = 'application/json';
        } else if (/^\s*function|\s*const|\s*let|\s*var/.test(content)) { 
            detectedExt = 'js';
            detectedMime = 'application/javascript';
        } else if (/^\s*import|^\s*from\s+['"]/.test(content)) { 
            detectedExt = 'py';
            detectedMime = 'text/x-python';
        } else if (/^\s*<\?php/.test(content)) { 
            detectedExt = 'php';
            detectedMime = 'application/x-php';
        } else if (/^\s*SELECT|^\s*INSERT|^\s*UPDATE|^\s*DELETE/.test(content)) { 
            detectedExt = 'sql';
            detectedMime = 'application/sql';
        }
        const tempDir = path.join(__dirname, 'temp');
        const fileName = `pastebin_${pasteId}.${detectedExt}`;
        const filePath = path.join(tempDir, fileName);  
        fs.writeFileSync(filePath, content);
        await wbk.sendMessage(m.chat, {
            document: fs.readFileSync(filePath), 
            caption: `${litespace("GET PASTEBIN")}\n> File Terdeteksi: .${detectedExt}\n> Tipe MIME: ${detectedMime}`,
            fileName,
            mimetype: detectedMime,
        }, { quoted: m });
        fs.unlinkSync(filePath);
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

case 'getgist': 
case 'getgists': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /https:\/\/gist\.github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9]+/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply('Masukkan tautan GitHub Gist-!');
    const gistId = url.trim().split('/').pop();
    try {
        await m.react('⏱️');
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        if (!response.ok) return newReply('Gagal mengambil konten dari GitHub Gist.');    
        const data = await response.json();
        if (!data.files) return newReply('Tidak ada file yang ditemukan di Gist-!');   
        let firstFile = Object.values(data.files)[0];
        let content = firstFile.content;
        let fileName = firstFile.filename;
        let detectedExt = path.extname(fileName).substring(1) || 'txt';
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, content);  
        await wbk.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            caption: `${litespace("GET GIST")}\n> File Terdeteksi: .${detectedExt}`,
            fileName,
            mimetype: 'text/plain',
        }, { quoted: m });    
        fs.unlinkSync(filePath);
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

case 'getinfogc':
case 'getinfogrup':
case 'getgcid':
case 'getidgc':
case 'cekgcid':
case 'cekidgc': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`Kirim perintah ${prefix + command} _link group_`);
    try {
        await m.react('🕛');
        let result = url.split('https://chat.whatsapp.com/')[1];
        let data = await wbk.groupGetInviteInfo(result);
        let teks = `「 *GROUP METADATA* 」\n\n`;
        teks += ` · *ID :* ${data.id}\n`;
        teks += ` · *Name :* ${data.subject}\n`;
        teks += ` · *Owner :* ${data.owner}\n`;
        teks += ` · *Kirim Pesan :* ${data.announce ? 'Hanya Admin' : "Semua Orang"}\n`;
        teks += ` · *Persetujuan Admin :* ${data.joinApprovalMode ? 'Yes' : "No"}\n`;
        teks += ` · *Member Add Mode :* ${data.memberAddMode ? 'Yes' : "No"}\n`;
        teks += ` · *Desk :*\n${data.desc}\n\n`;
        teks += ` · *Anggota Teratas :*\n`;
        for (let x of data.participants) {
            teks += ` · @${x.id.split('@')[0]}\n`;
        }
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY ID",
                "id": "${data.id}",
                "copy_code": "${data.id}"
            }`
        }];
        sendButton(m.chat, '', teks, button, m);
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

case 'nulis': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isPremium) return newReply(mess.premium);
    if (!text) return newReply("Format salah! Gunakan format: *#nulis hai");
    const validInputPattern = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
    if (!validInputPattern.test(text)) return newReply("Teks mengandung simbol yang tidak diperbolehkan! Gunakan hanya huruf, angka, spasi, titik, koma, tanda seru, atau tanda tanya.");
    async function generateBook() {
        let payload = {
            color: "#000000",
            font: "arch",
            size: 20,
            text: text
        };
        let { data } = await axios.post("https://lemon-write.vercel.app/api/generate-book", payload, {
            responseType: "arraybuffer"
        });
        let filePath = "./temp/test.jpg";
        fs.writeFileSync(filePath, data);
        return filePath;
    }
    try {
        let imagePath = await generateBook();
        let imageBuffer = fs.readFileSync(imagePath);
        await wbk.sendMessage(m.chat, { image: imageBuffer, caption: "Berikut adalah hasil tulisan tanganmu!" });
        fs.unlinkSync(imagePath);
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

case 'cekrekening': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Cara penggunaan: ${prefix + command} <kode bank> <no rekening\nContoh: ${prefix + command} bca 1234567890`);
    const args = text.split(' ');
    if (args.length < 2) return newReply('Format salah! Gunakan format: cekrekening <kode_bank> <nomor_rekening>');
    const bankCode = args[0].toUpperCase();
    const accountNumber = args[1];
    await m.react('⏱️');
    try {
        const bankList = await atlaListBank();
        const availableBanks = bankList.data.map(bank => bank.bank_code.toUpperCase());
        if (!availableBanks.includes(bankCode)) {
            const bankNames = bankList.data
                .sort((a, b) => a.bank_name.localeCompare(b.bank_name))
                .map(bank => `Bank: ${bank.bank_name}\n> Kode Bank: ${bank.bank_code}`)
                .join('\n\n');
            newReply(`❌ Kode bank tidak tersedia. Berikut adalah daftar kode bank yang tersedia:\n\n${bankNames}`);
        } else {
            const result = await atlaCekRekening(bankCode, accountNumber);
            console.log(result);
            if (result.status && result.data) {
                const { kode_bank, nomor_akun, nama_pemilik } = result.data;
                newReply(`✅ Informasi Rekening:\n\n🏦 Bank: ${kode_bank}\n🔢 No. Rekening: ${nomor_akun}\n👤 Nama: ${nama_pemilik}`);
                await m.react('✅');
                await limitReduction(m, prefix, wm);
            } else {
                newReply(`❌ Gagal mengecek rekening. Pesan: ${result.message || 'Tidak ada informasi yang ditemukan.'}`);
            }
        }
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;