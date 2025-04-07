case 'daftar': {
    if (db.data.users[m.sender].daftar) return newReply("Kamu sudah terdaftar! AIzero senang bisa membantu Kamu. 😜");
    let [name, age, province, city] = text.split(',');
    if (!name || !age || !province || !city) {
        return newReply("Format pendaftaran salah. Gunakan: " + (prefix + command) + " nama,umur,provinsi,kota\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
    }
    if (isNaN(age)) return newReply("Umur tidak valid. Silakan periksa kembali! 🤔");
    if (age < 10) return newReply("Maaf, AIzero hanya bisa membantu yang berumur di atas 10 tahun. Tunggu besar dulu ya! 😄");
    if (age > 50) return newReply("Wah, sepertinya lebih baik istirahat. Jaga kesehatan ya! 🥰");
    let provinceCode = null;
    let verifiedProvince = province;
    try {
        const response = await axios.get('https://wilayah.id/api/provinces.json');
        const provinces = response.data.data;
        const foundProvince = provinces.find(prov => prov.name.toLowerCase() === province.toLowerCase());
        if (foundProvince) {
            provinceCode = foundProvince.code;
        } else {
            let bestMatch = provinces.reduce((prev, curr) => {
                return similarity(province.toLowerCase(), curr.name.toLowerCase()) > similarity(province.toLowerCase(), prev.name.toLowerCase()) ? curr : prev;
            });
            if (similarity(province.toLowerCase(), bestMatch.name.toLowerCase()) >= 0.65) {
                provinceCode = bestMatch.code;
                verifiedProvince = bestMatch.name;
                return newReply(`Provinsi tidak terdaftar. Mungkin provinsi yang kamu maksud adalah *${verifiedProvince}* atau coba masukkan provinsi lain! 🌍\n\nContoh: ` + (prefix + command) + "," + name + "," + age + "," + verifiedProvince + "," + city );
            } else {
                return newReply("Provinsi tidak terdaftar. Coba masukkan provinsi lain! 🌍\n\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
            }
        }
    } catch (error) {
        console.error("Error saat memverifikasi provinsi:", error);
        return newReply("Kesalahan saat memverifikasi provinsi. Coba lagi nanti. 🙏");
    }
    let isCityValid = false;
    let verifiedCity = city;
    try {
        const response = await axios.get(`https://wilayah.id/api/regencies/${provinceCode}.json`);
        const regencies = response.data.data;
        const foundCity = regencies.find(reg => reg.name.toLowerCase() === city.toLowerCase());
        if (foundCity) {
            isCityValid = true;
        } else {
            let bestCityMatch = regencies.reduce((prev, curr) => {
                return similarity(city.toLowerCase(), curr.name.toLowerCase()) > similarity(city.toLowerCase(), prev.name.toLowerCase()) ? curr : prev;
            });
            if (similarity(city.toLowerCase(), bestCityMatch.name.toLowerCase()) >= 0.5) {
                isCityValid = true;
                verifiedCity = bestCityMatch.name;
            } else {
                return newReply("Kota tidak valid. Coba masukkan kota lain! 🌍\n\nContoh: " + (prefix + command) + " AIzero,16,Jawa Barat,Bandung");
            }
        }
    } catch (error) {
        console.error("Error saat memverifikasi kota:", error);
        return newReply("Kesalahan saat memverifikasi kota. Coba lagi nanti. 🙏");
    }
    if (isCityValid) {
        try {
            db.data.users[m.sender].nama = name;
            db.data.users[m.sender].umur = Number(age);
            db.data.users[m.sender].askot = verifiedCity;
            db.data.users[m.sender].daftar = true;
            db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + 5000;
            db.data.users[m.sender].limit = (db.data.users[m.sender].limit || 0) + 20;
            let successMessage = "Yeay, Kamu berhasil daftar! 🎉\n\n";
            successMessage += "📦 *Info User*:\n";
            successMessage += "- *Nama*: " + name + "\n";
            successMessage += "- *Nomor*: " + m.sender.split('@')[0] + "\n";
            successMessage += "- *Umur*: " + age + "\n";
            successMessage += "- *Asal Provinsi*: " + verifiedProvince + "\n";
            successMessage += "- *Asal Kota*: " + verifiedCity + "\n\n";
            successMessage += "🎁 *Bonus Daftar:*\n";
            successMessage += "- Rp. 5000 uang\n";
            successMessage += "- 20 Limit tambahan\n\n";
            successMessage += "Terima kasih sudah daftar! Semoga AIzero bisa bantu Kamu terus. 🥰";
            newReply(successMessage);
        } catch (error) {
            return newReply("Kesalahan saat menyimpan data pengguna. Coba lagi nanti. 🙏");
        }
        const notifRegister = true;
        if (notifRegister) {
            try {
                let profilePictureUrl;
                try {
                    profilePictureUrl = await wbk.profilePictureUrl(m.sender, "image");
                } catch {
                    profilePictureUrl = imageUrl;
                }
                let notificationMessage = "Ada user baru yang daftar nih! 🎉\n\n";
                notificationMessage += "- *Nama*: " + name + "\n";
                notificationMessage += "- *Umur*: " + age + "\n";
                notificationMessage += "- *Tag*: @" + m.sender.split('@')[0] + "\n\n";
                notificationMessage += "Selamat bergabung di sistem AIzero! 🥳";
                wbk.sendMessage(ownerNumber + "@s.whatsapp.net", {
                    'text': notificationMessage,
                    'contextInfo': {
                        'mentionedJid': [m.sender],
                    }
                });
            } catch (notificationError) {
                console.log("Gagal mengirim notifikasi pendaftaran:", notificationError);
            }
        }
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'unreg':
case 'hapusakun':
case 'unregister': { //
    let responseMessage = '';
    if (!args[0]) {
        responseMessage += "Kamu perlu masukin nomor telepon yang mau dihapus ya! 😊\n\n";
        responseMessage += "*Contoh:*\n";
        responseMessage += prefix + command + " 6281234567890";
        return newReply(responseMessage);
    }
    let phoneNumber = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!db.data.users[phoneNumber]?.["daftar"]) {
        responseMessage += "Hmm, nomor *" + args[0] + "* belum terdaftar kok, kak. 😊";
        return newReply(responseMessage);
    }
    try {
        delete db.data.users[phoneNumber];
        responseMessage += "Data pengguna dengan nomor *" + args[0] + "* berhasil dihapus! 😊";
        newReply(responseMessage);
    } catch (deleteError) {
        console.error(deleteError);
        responseMessage += "Duh, AIzero gagal hapus data pengguna ini. Coba lagi nanti ya, kak. 😔";
        newReply(responseMessage);
    }
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'report':
case 'request': {
	if (!text) return newReply(`Contoh: ${prefix + command} hi dev, perintah ini gak jalan`);
	textt = `*| REQUEST/BUG |*`;
	teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`;
	teks2 = `\n\n*Hii ${pushname}, permintaan kamu sudah dikirim ke pemilik aku, tunggu sebentar ya...*`;
	for (let i of owner) {
		wbk.sendMessage(i + "@s.whatsapp.net", {
			text: textt + teks1,
			mentions: [m.sender],
		}, {
			quoted: m,
		});
	}
	wbk.sendMessage(m.chat, {
		text: textt + teks2 + teks1,
		mentions: [m.sender],
	}, {
		quoted: m,
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'slot': { //
    if (!m.isGroup) return newReply(mess.group);
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await gameSlot(wbk, m, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'casino': { //
    if (!m.isGroup) return newReply(mess.group);
	if (!db.data.users[m.sender]) return m.reply('⚠️ Data pengguna tidak ditemukan di database!');
	await gameCasinoSolo(wbk, m, prefix, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'transferlimit': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await transferLimit(wbk, m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'transferuang': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await transferUang(wbk, m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'buy':
case 'change': {
	if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
	await buy(m, args, db.data.users);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'limit':
case 'checklimit':
case 'ceklimit':
case 'me':
case "account": {
    if (!db.data.users[m.sender]) return newReply("⚠️ Data pengguna tidak ditemukan di database!");
    let userData = db.data.users[m.sender];
    let userInfo = '';
    userInfo += "*📋 Informasi User*\n";
    userInfo += "- *Nomor*: " + m.sender + "\n";
    userInfo += "- *Nama*: " + (userData.nama || "Belum diatur") + "\n";
    userInfo += "- *Umur*: " + (userData.umur || "Belum diatur") + "\n";
    userInfo += "- *Asal Kota*: " + (userData.askot || "Belum diatur") + "\n";
    userInfo += "- *Limit*: " + (userData.limit || 0) + "\n";
    userInfo += "- *Uang*: Rp. " + (userData.uang || 0) + "\n";
    userInfo += "- *Level*: " + (userData.level || 0) + "\n";
    userInfo += "- *Exp*: " + (userData.exp || 0) + "\n";
    userInfo += "- *Coins*: " + (userData.coins || 0) + "\n";
    userInfo += "- *Status Premium*: " + (userData.premium ? 'Ya' : "Tidak") + "\n";
    userInfo += "- *Status VIP*: " + (userData.vip ? 'Ya' : "Tidak") + "\n";
    userInfo += "- *Rank*: " + (userData.rank || 0) + "\n";
    userInfo += "- *Pacar*: " + (userData.pacar ? '@' + userData.pacar.replace("@s.whatsapp.net", '') : "Belum ada") + "\n";
    userInfo += "- *Gelar*: " + (userData.title || "Tidak ada");
    const buttonParams = {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Buy Limit",
            sections: [
                {
                    title: "Buy Limit",
                    rows: [
                        { header: "Buy Limit 🟣", title: "1 Limit - Rp. 2.500", id: prefix + "buy limit 1" },
                        { header: "Buy Limit 🟠", title: "10 Limit - Rp. 25.000", id: prefix + "buy limit 10" }
                    ]
                }
            ]
        })
    };
    let buttonArray = [buttonParams];
    wbk.sendButtonText(m.chat, buttonArray, userInfo, footer, m);
}
break;

case "cekuser":
case "infouser": {
    if (!isCreator) return newReply(mess.owner);
    if (!db.data.users[m.sender]) return newReply("⚠️ Data pengguna tidak ditemukan di database!");
    let responseMessage = '';
    if (!args[0]) {
        responseMessage += "Kamu perlu masukin nomor telepon user yang mau dicek ya! 😊\n\n";
        responseMessage += "*Contoh:*\n";
        responseMessage += prefix + command + " 6281234567890";
        return newReply(responseMessage);
    }
    let userPhoneNumber = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!db.data.users[userPhoneNumber]) {
        responseMessage += "Nomor *" + args[0] + "* belum terdaftar di database, kak. 😊";
        return newReply(responseMessage);
    }
    let checkedUser = db.data.users[userPhoneNumber];
    responseMessage += "*📋 Informasi User*\n";
    responseMessage += "- *Nomor*: " + args[0] + "\n";
    responseMessage += "- *Nama*: " + (checkedUser.nama || "Belum diatur") + "\n";
    responseMessage += "- *Umur*: " + (checkedUser.umur || "Belum diatur") + "\n";
    responseMessage += "- *Asal Kota*: " + (checkedUser.askot || "Belum diatur") + "\n";
    responseMessage += "- *Limit*: " + (checkedUser.limit || 0) + "\n";
    responseMessage += "- *Uang*: Rp. " + (checkedUser.level || 0) + "\n";
    responseMessage += "- *Level*: " + (checkedUser.level || 0) + "\n";
    responseMessage += "- *Exp*: " + (checkedUser.exp || 0) + "\n";
    responseMessage += "- *Coins*: " + (checkedUser.coins || 0) + "\n";
    responseMessage += "- *Status Premium*: " + (checkedUser.premium ? 'Ya' : "Tidak") + "\n";
    responseMessage += "- *Status VIP*: " + (checkedUser.vip ? 'Ya' : "Tidak") + "\n";
    responseMessage += "- *Rank*: " + (checkedUser.rank || 0) + "\n";
    responseMessage += "- *Pacar*: " + (checkedUser.pacar || "Belum ada") + "\n";
    responseMessage += "- *Gelar*: " + (checkedUser.title || "Tidak ada") + "\n";
    return newReply(responseMessage);
}
break;

case 'jadian': {
    if (!m.isGroup) return newReply(mess.group);
    wbk.jadian = wbk.jadian ? wbk.jadian : {};
    let mentionedUserId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '');
    if (!mentionedUserId) return newReply("Kak, tag atau reply seseorang dulu dong biar Mora tahu siapa yang Kamu maksud! 😉\n\n*Kirim perintah*: " + (prefix + command) + " @0");
    if (mentionedUserId === m.sender) return newReply("Hadehhh... masa Kamu mau jadian sama diri sendiri? 😏");
    if (mentionedUserId === botNumber) return newReply("Eh, maaf ya kak, aku cuma bot. Aku nggak bisa jadian sama Kamu 😣");
    let mentionedUserPartner = db.data.users[mentionedUserId].pacar;
    let senderPartner = db.data.users[m.sender].pacar;
    if (senderPartner === mentionedUserId) {
        newReply("Lah, Kamu udah jadian sama dia kok masih ngajak lagi? 🙄");
    } else {
        if (mentionedUserPartner) {
            newReply("Duh, kak... dia udah punya pacar nih 🥲\nCoba tanya dulu ke @" + mentionedUserPartner.split('@')[0] + ", setuju nggak? 🫣");
        } else {
            if (senderPartner) {
                newReply("Eitsss, jangan selingkuh ya, kak! 😱\n@" + senderPartner.split('@')[0] + " liat nih kelakuan ayangmu 🤭");
            } else {
                let loveMessages = [
                    "Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya Kamu yang kumau.",
                    "Aku baru sadar ternyata selama ini Kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?",
                    "Aku boleh kirim CV ke Kamu nggak? Soalnya aku mau ngelamar jadi pacar."
                ];
                let randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
                let loveMessage = "💌 *Love Message...* 💌\n\n@" + m.sender.split('@')[0] + " ❤️ @" + mentionedUserId.split('@')[0] + "\n\n\"" + randomMessage + "\n\nBot telah mengirimkan permintaan ke @" + mentionedUserId.split('@')[0] + " dibalas yaa";
                wbk.jadian[mentionedUserId] = [newReply(loveMessage), m.sender];
                const buttterima = { displayText: "Terima" };
                const butt1 = {
                    buttonId: prefix + "terima ",
                    buttonText: buttterima
                };
                const butttolak = { displayText: "Tolak" };
                const butt2 = {
                    buttonId: prefix + "tolak ",
                    buttonText: butttolak
                };
                const button = {
                    text: "@" + m.sender.split('@')[0] + " baru saja menembak kamu nih 🥰\n\n silahkan pilih ya~\n\nKetik:\n#terima\n#tolak",
                    footer: wm,
                    buttons: [butt1, butt2],
                    viewOnce: true
                };
                m.reply(button);
            }
        }
    }
}
break;

case 'terima': { //
    if (!m.isGroup) return newReply(mess.group);
    if (wbk.jadian[m.sender]) {
        let proposingUserId = wbk.jadian[m.sender][1];
        db.data.users[proposingUserId].pacar = m.sender;
        db.data.users[m.sender].pacar = proposingUserId;
        newReply("Wiiihhh 🎉🎉\n\n@" + m.sender.split('@')[0] + " sekarang resmi jadian sama\n❤️ @" + proposingUserId.split('@')[0] + "!\n\nSemoga langgeng yaaa, jangan lupa Mora diundang kalo nikahan nanti 🙈💕");
        delete wbk.jadian[m.sender];
    } else {
        newReply("Hmm... nggak ada yang nembak Kamu, sabar ya 😅");
    }
}
break;

case 'tolak': { //
    if (!m.isGroup) return newReply(mess.group);
    if (wbk.jadian[m.sender]) {
        let proposingUserId = wbk.jadian[m.sender][1];
        newReply("Aduhh, kasian banget @" + proposingUserId.split('@')[0] + " ditolak sama Kamu 😓\nSemangat terus ya, siapa tahu besok ada yang lebih baik! 🫣");
        delete wbk.jadian[m.sender];
    } else {
        newReply("Eh kak, nggak ada yang nembak Kamu kok. Jangan halu ya 🤭");
    }
}
break;

case 'putus': {
    if (!m.isGroup) return newReply(mess.group);
    let currentPartnerId = db.data.users[m.sender].pacar;
    if (currentPartnerId) {
        db.data.users[m.sender].pacar = '';
        db.data.users[currentPartnerId].pacar = '';
        newReply("Huhuhu... @" + m.sender.split('@')[0] + " dan @" + currentPartnerId.split('@')[0] + " udah resmi putus 😢\nSemoga tetap berteman yaaa 🤗");
    } else {
        newReply("Eh kak, Kamu tuh jomblo kok mau putus? Ada-ada aja deh! 🤨");
    }
}
break;

case 'cekpacar': {
    if (!m.isGroup) return newReply(mess.group);
    try {
        let mentionedUserId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '');
        if (!mentionedUserId) return newReply("Tag atau reply orang dulu dong, kak! 😅\n\n*Kirim perintah*: " + (prefix + command) + " @0");
        let partnerId = db.data.users[mentionedUserId].pacar;
        if (partnerId) {
            newReply("Wihhh, @" + mentionedUserId.split('@')[0] + " udah punya pacar nih!\n❤️ Sama @" + partnerId.split('@')[0] + " 😍");
        } else {
            newReply("Ehh, @" + mentionedUserId.split('@')[0] + " masih jomblo kok. Hayoo, siapa mau daftar jadi pacarnya? 🤭");
        }
    } catch (error) {
        newReply("Kayaknya @" + user.split('@')[0] + " nggak ada di database, deh 😥");
    }
}
break;