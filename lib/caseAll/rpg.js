case 'joinrpg': {
    if (db.data.users[m.sender].rpg) return newReplyRPG("Kamu Telah Join Sebelumnya");
    db.data.users[m.sender].rpg = true;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://files.catbox.moe/ggoqql.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang Kamu dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'leaverpg': {
    const buttyakin = { displayText: "Yakin" };
    const butt1 = {
        buttonId: prefix + "yaleaverpg",
        buttonText: buttyakin
    };
    const butttidakyakin = { displayText: "Lanjut RPG" };
    const butt2 = {
        buttonId: prefix + "tidakleaverpg",
        buttonText: butttidakyakin
    };
    let buttonMessage = {
        document: { url: "https://www.youtube.com/" },
        mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        fileName: wm,
        fileLength: 999,
        pageCount: 999,
        contextInfo: {
            forwardingScore: 555,
            isForwarded: true,
            externalAdReply: {
                mediaUrl: website,
                mediaType: 1,
                previewType: 1,
                title: "RPG-GAME (Pirate Adventure)",
                body: "Pirate adventure in search of riches",
                thumbnailUrl: "https://files.catbox.moe/avmsjk.jpg",
                sourceUrl: website,
                renderLargerThumbnail: true
            },
        },
        caption: "Yakin mau logout dari RPG-Game? Progress kamu saat ini akan terhapus apabila kamu logout dari RPG-Game",
        footer: wm,
        buttons: [butt1, butt2],
        viewOnce: true,
        headerType: 6,
    };
    return await wbk.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
        
case 'yaleaverpg': { //
    if (!db.data.users[m.sender].rpg) return newReplyRPG("Kamu Telah Out Sebelumnya");
    delete db.data.rpg[m.sender];
    db.data.users[m.sender].rpg = false;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG ENDED*\n\nKamu telah logout RPG-Game, sekarang Kamu tidak dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'tidakleaverpg': { //
    if (db.data.users[m.sender].rpg) return newReplyRPG("Terimakasih Telah Kembali");
    db.data.users[m.sender].rpg = true;
    const saluranId = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const messages = {
        title: "RPG-GAME (Pirate Adventure)",
        body: "Pirate adventure in search of riches",
        thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
        sourceUrl: website,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        'text': "*GAME RPG STARTED*\n\nKamu telah kembali ke RPG-Game, sekarang Kamu dapat menggunakan command RPG ✅",
        'contextInfo': {
            'mentionedJid': [m.sender],
            'forwardingScore': 9999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': saluranId,
            'externalAdReply': messages
        },
        'quoted': m
    });
}
break;
        
case 'inforpg': {
    const rpgUser  = db.data.rpg[m.sender];
    if (!rpgUser ) {
        return newReplyRPG("*Data RPG tidak ditemukan. Silakan bergabung terlebih dahulu dengan mengetik _.joinrpg_*");
    }
    let message = `*Informasi RPG untuk ${m.sender}*\n\n` +
                  `◦ Kapal: ${rpgUser.kapal ? 'Ada' : 'Tidak Ada'}${rpgUser.kapal ? `\n◦ Darah Kapal: ${rpgUser.darahkapal}` : ''}\n` +
                  `◦ Pickaxe: ${rpgUser.pickaxe ? 'Ada' : 'Tidak Ada'}${rpgUser.pickaxe ? `\n◦ Darah Pickaxe: ${rpgUser.darahpickaxe}` : ''}\n` +
                  `◦ Kapak: ${rpgUser.kapak ? 'Ada' : 'Tidak Ada'}${rpgUser.kapak ? `\n◦ Darah Kapak: ${rpgUser.darahkapak}` : ''}\n` +
                  `◦ Baju Zirah: ${rpgUser.bzirah ? 'Ada' : 'Tidak Ada'}${rpgUser.bzirah ? `\n◦ Darah Baju Zirah: ${rpgUser.darahbzirah}` : ''}\n` +
                  `◦ Pedang: ${rpgUser.pedang ? 'Ada' : 'Tidak Ada'}${rpgUser.pedang ? `\n◦ Darah Pedang: ${rpgUser.darahpedang}` : ''}\n` +
                  `◦ Darah User: ${rpgUser.darahuser}\n` +
                  `◦ Rumah: ${rpgUser.rumah}\n` +
                  `◦ Besi: ${rpgUser.besi}\n` +
                  `◦ Kayu: ${rpgUser.kayu}\n` +
                  `◦ Emas: ${rpgUser.emas}\n` +
                  `◦ Perak: ${rpgUser.perak}\n` +
                  `◦ Batubara: ${rpgUser.batubara}\n` +
                  `◦ Bulu: ${rpgUser.bulu}\n` +
                  `◦ Kain: ${rpgUser.kain}\n` +
                  `◦ Wilayah: ${rpgUser.wilayah}\n` +
                  `◦ Wilayah Rumah: ${rpgUser.wilayahrumah}\n` +
                  `◦ Musuh: ${rpgUser.musuh}\n` +
                  `◦ Ikan: ${rpgUser.ikan}\n` +
                  `◦ Domba: ${rpgUser.domba}\n` +
                  `◦ Sapi: ${rpgUser.sapi}\n` +
                  `◦ Ayam: ${rpgUser.ayam}\n` +
                  `◦ Bank: ${rpgUser.bank}\n` +
                  `◦ Burutime: ${rpgUser.burutime}\n` +
                  `◦ Last Claim: ${rpgUser.lastclaim}\n` +
                  `◦ Last Dagang: ${rpgUser.lastdagang}\n` +
                  `◦ Last Bansos: ${rpgUser.lastbansos}\n` +
                  `◦ Last Kerja: ${rpgUser.lastkerja}\n` +
                  `◦ Last Rampok: ${rpgUser.lastrampok}\n`;
    await newReplyRPG(message);
}
break;
        
case 'inventory': {
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
	if (!db.data.users[users].rpg) return newReply("*⚠️ Kamu belum join RPG!*\n\nKetik _.joinrpg_ untuk memulai petualanganmu! 🏹");
	let nomorHP = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international');
	let teks = `*⚔️ RPG - PROFILE ⚔️*\n\n`;
	teks += `👤 *User Info*\n`;
	teks += `- 📞 Nomor: ${nomorHP}\n`;
	teks += `- ❤️ Kesehatan: ${db.data.rpg[users].darahuser}/100\n`;
	teks += `- 🌍 Lokasi: ${db.data.rpg[users].wilayah}\n\n`;
	teks += `🛠️ *Crafting Items*\n`;
	teks += `- ⛵ Kapal: ${db.data.rpg[users].kapal ? `(${db.data.rpg[users].darahkapal}% HP)` : 'Belum punya' }\n`;
	teks += `- 🏠 Rumah: ${db.data.rpg[users].rumah} Unit\n`;
	teks += `- 🪓 Kapak: ${db.data.rpg[users].kapak ? `(${db.data.rpg[users].darahkapak}% HP)` : 'Belum punya' }\n`;
	teks += `- ⛏️ Pickaxe: ${db.data.rpg[users].pickaxe ? `(${db.data.rpg[users].darahpickaxe}% HP)` : 'Belum punya' }\n`;
	teks += `- 🛡️ Baju Zirah: ${db.data.rpg[users].bzirah ? `(${db.data.rpg[users].darahbzirah}% HP)` : 'Belum punya' }\n`;
	teks += `- ⚔️ Pedang: ${db.data.rpg[users].pedang ? `(${db.data.rpg[users].darahpedang}% HP)` : 'Belum punya' }\n`;
	teks += `- 🏴 Kain: ${db.data.rpg[users].kain} Lembar\n\n`;
	teks += `🔨 *Sumber Daya*\n`;
	teks += `- 🪵 Kayu: ${db.data.rpg[users].kayu} Batang\n`;
	teks += `- ⛓️ Besi: ${db.data.rpg[users].besi} Biji\n`;
	teks += `- 💰 Emas: ${db.data.rpg[users].emas} Biji\n`;
	teks += `- 🥈 Perak: ${db.data.rpg[users].perak} Biji\n`;
	teks += `- 🪨 Batu Bara: ${db.data.rpg[users].batubara} Biji\n\n`;
	teks += `🐾 *Hewan & Ternak*\n`;
	teks += `- 🐔 Ayam: ${db.data.rpg[users].ayam} Ekor\n`;
	teks += `- 🐄 Sapi: ${db.data.rpg[users].sapi} Ekor\n`;
	teks += `- 🐑 Domba: ${db.data.rpg[users].domba} Ekor\n`;
	teks += `- 🐟 Ikan: ${db.data.rpg[users].ikan} Ekor\n\n`;
	teks += `🔥 *Semangat terus berburu & bertualang! Jangan lupa upgrade peralatanmu! 🚀*`;
	await wbk.sendMessage(m.chat, {
		image: thumb,
		caption: teks,
		contextInfo: {
			mentionedJid: [users],
			forwardingScore: 9999,
			isForwarded: true,
			forwardedNewsletterMessageInfo: {
				newsletterJid: saluran,
				serverMessageId: null,
				newsletterName: saluranName
			},
			externalAdReply: {
				title: "RPG-GAME (Inventory)",
				body: "Jelajahi dunia dan tingkatkan perlengkapanmu! ⚒️",
				thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
				sourceUrl: website,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	}, { quoted: m });
}
break;
        
case 'craft': {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  const itemRequirements = {
    kain: { bulu: 2 },
    kapal: { besi: 20, kayu: 50, kain: 2 },
    kapak: { besi: 2, kayu: 1 },
    rumah: { besi: 6, kayu: 20 },
    pickaxe: { besi: 2, kayu: 1 },
    bajuzirah: { besi: 6, kayu: 2, kain: 10 },
    pedang: { besi: 3, kayu: 1 }
  };
  const item = args[0];
  const quantity = parseInt(args[1]) || 1;
  if (item === "kain") {
    if (!args[1] || isNaN(args[1])) {
      return newReplyRPG("*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!");
    }
    const requiredWool = quantity * itemRequirements.kain.bulu;
    if (db.data.rpg[m.sender].bulu < requiredWool) {
      return newReplyRPG(`*Bulu Wol Kamu (${db.data.rpg[m.sender].bulu}) Tidak Cukup Untuk Membuat ${quantity} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`);
    }
    db.data.rpg[m.sender].kain += quantity;
    db.data.rpg[m.sender].bulu -= requiredWool;
    return newReplyRPG(`Berhasil Membuat ${quantity} Lembar Kain, Kamu Mempunyai ${db.data.rpg[m.sender].bulu} Bulu Lagi`);
  }
  if (!itemRequirements[item]) {
    let helpMessage = "*Apa yang ingin Kamu buat?*\n\n";
    helpMessage += Object.keys(itemRequirements).map(i => `- ${i}`).join("\n");
    helpMessage += "\n\n*Contoh:*\n.craft kapak";
    return newReplyRPG(helpMessage);
  }
  const requirements = itemRequirements[item];
  for (const resource in requirements) {
    const requiredAmount = requirements[resource] * quantity;
    if (db.data.rpg[m.sender][resource] < requiredAmount) {
      return newReplyRPG(`*${resource.charAt(0).toUpperCase() + resource.slice(1)} Kamu (${db.data.rpg[m.sender][resource]}) Tidak Cukup Untuk Membuat ${quantity} ${item.charAt(0).toUpperCase() + item.slice(1)}*\n\nUntuk Membuat ${item.charAt(0).toUpperCase() + item.slice(1)} Diperlukan *${requiredAmount} ${resource}*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`);
    }
    db.data.rpg[m.sender][resource] -= requiredAmount;
  }
  db.data.rpg[m.sender][item] = true;
  let successMessage = `*Berhasil Membuat ${item.charAt(0).toUpperCase() + item.slice(1)}!*\n\nSisa Sumberdaya:\n`;
  for (const resource in requirements) {
    successMessage += `- ${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${db.data.rpg[m.sender][resource]}\n`;
  }
  return newReplyRPG(successMessage);
}
db.data.users[m.sender].limit -= 1;
break;
        
case "heal": {
    if (!db.data.users[m.sender].rpg) {
        return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    }
    if (!db.data.rpg[m.sender].darahuser < 0) {
        return newReplyRPG("*😑 Kamu Masih Sehat!*");
    }
    db.data.rpg[m.sender].darahuser += 100;
    sendEditMessage("*Mengistirahatkan Tubuh...*", "*Memulihkan...*", "*Darah Kamu Sudah Terisi...*");
}
db.data.users[m.sender].limit -= 1;
break;
        
case "repair":
case "rawat": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Silakan bergabung dalam RPG terlebih dahulu dengan mengetik _.joinrpg_*");
  }
  let itemToRepair = args[0];
  const repairItem = (item, requiredIron, requiredWood = 0) => {
    if (!db.data.rpg[m.sender][item]) {
      return newReplyRPG(`*🙃 Kamu tidak punya ${item}*\n\nUntuk menggunakan fitur ini, kamu harus mempunyai ${item}.`);
    }
    if (db.data.rpg[m.sender][`darah${item}`] >= 100) {
      return newReplyRPG(`*😑 ${item.charAt(0).toUpperCase() + item.slice(1)} kamu masih bagus*`);
    }
    if (db.data.rpg[m.sender].besi < requiredIron) {
      return newReplyRPG(`*Besi kamu (${db.data.rpg[m.sender].besi}) tidak cukup untuk perbaikan ${item}*\n\nDiperlukan *${requiredIron} Besi*.\nSilakan mining/adventure terlebih dahulu!`);
    }
    if (requiredWood > 0 && db.data.rpg[m.sender].kayu < requiredWood) {
      return newReplyRPG(`*Kayu kamu (${db.data.rpg[m.sender].kayu}) tidak cukup untuk perbaikan ${item}*\n\nDiperlukan *${requiredWood} Kayu*.\nSilakan menebang/adventure terlebih dahulu!`);
    }
    db.data.rpg[m.sender].besi -= requiredIron;
    if (requiredWood > 0) db.data.rpg[m.sender].kayu -= requiredWood;
    db.data.rpg[m.sender][`darah${item}`] = 100;
    sendEditMessage("Memperbaiki, Mohon Tunggu😘", "Tahap Finishing 🥳", "Done Perbaikan 😄");
  };
  switch (itemToRepair) {
    case "kapal":
      repairItem("kapal", 5, 10);
      break;
    case "pickaxe":
      repairItem("pickaxe", 1);
      break;
    case "kapak":
      repairItem("kapak", 1);
      break;
    case "armor":
      repairItem("bzirah", 2);
      break;
    case "pedang":
      repairItem("pedang", 1);
      break;
    default:
      let repairOptions = "「\t*🛠️ PERBAIKAN 🛠️*\t」\n\n*Pilih Barang Yang Akan Diperbaiki*\n";
      const items = ["kapal", "pickaxe", "kapak", "armor", "pedang"];
      repairOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " kapak";
      newReplyRPG(repairOptions);
  }
}
db.data.users[m.sender].limit -= 1;
break;
        
case "sell":
case "jual": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  let itemToSell = args[0];
  const sellItem = (item, pricePerUnit) => {
    if (!args[1]) {
      return newReplyRPG(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    if (isNaN(args[1])) {
      return newReplyRPG(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    let quantity = Number(args[1]);
    let totalPrice = quantity * pricePerUnit;
    if (db.data.rpg[m.sender][item] < quantity) {
      return newReplyRPG(`*${item.charAt(0).toUpperCase() + item.slice(1)} Kamu Tidak Cukup*`);
    }
    db.data.users[m.sender].uang += totalPrice;
    db.data.rpg[m.sender][item] -= quantity;
    let replyMessage = `*MARKET - JUAL🛍️*\n\n*Item Terjual:*\n- ${item.charAt(0).toUpperCase() + item.slice(1)}: ${quantity}\n\n*Penghasilan:*\n- Saldo: ${totalPrice}\n\n*Sisa Uang:*\n- Saldo Total: ${db.data.users[m.sender].uang}\n`;
    newReplyRPG(replyMessage);
  };
  switch (itemToSell) {
    case "emas":
      sellItem("emas", 1000);
      break;
    case "besi":
      sellItem("besi", 700);
      break;
    case "batubara":
      sellItem("batubara", 900);
      break;
    case "perak":
      sellItem("perak", 800);
      break;
    case "kayu":
      sellItem("kayu", 300);
      break;
    case "ayam":
      sellItem("ayam", 100);
      break;
    case "sapi":
      sellItem("sapi", 500);
      break;
    case "domba":
      sellItem("domba", 350);
      break;
    case "ikan":
      sellItem("ikan", 50);
      break;
    case "bulu":
      sellItem("ikan", 30);
      break;
    default:
      let marketOptions = "「\t*🛍️ MARKET 🛍️*\t」\n\n*Pilih Barang Yang Akan Dijual*\n";
      const items = ["emas", "besi", "batubara", "perak", "kayu", "ayam", "sapi", "domba", "ikan", "bulu"];
      marketOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " ikan";
      newReplyRPG(marketOptions);
  }
}
break;
        
case "buy":
case "belanja": {
  if (!db.data.users[m.sender].rpg) {
    return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  }
  let itemToBuy = args[0];
  const buyItem = (item, pricePerUnit) => {
    if (!args[1]) {
      return newReplyRPG(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    if (isNaN(args[1])) {
      return newReplyRPG(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${item} 2`);
    }
    let quantity = Number(args[1]);
    let totalPrice = quantity * pricePerUnit;
    if (db.data.users[m.sender].uang < totalPrice) {
      return newReplyRPG("*Uang Kamu Tidak Cukup*");
    }
    db.data.users[m.sender].uang -= totalPrice;
    db.data.rpg[m.sender][item] += quantity;
    let replyMessage = `*MARKET - BELI🛍️*\n\n*Item Dibeli:*\n- ${item.charAt(0).toUpperCase() + item.slice(1)}: ${quantity}\n\n*Dibayarkan:*\n- Saldo: ${totalPrice}\n\n*Sisa Uang:*\n- Saldo Total: ${db.data.users[m.sender].uang}\n`;
    newReplyRPG(replyMessage);
  };
  switch (itemToBuy) {
    case "emas":
      buyItem("emas", 1300);
      break;
    case "besi":
      buyItem("besi", 900);
      break;
    case "batubara":
      buyItem("batubara", 1200);
      break;
    case "perak":
      buyItem("perak", 1000);
      break;
    case "kayu":
      buyItem("kayu", 450);
      break;
    case "ayam":
      buyItem("ayam", 150);
      break;
    case "sapi":
      buyItem("sapi", 650);
      break;
    case "domba":
      buyItem("domba", 400);
      break;
    case "ikan":
      buyItem("ikan", 100);
      break;
    case "bulu":
      buyItem("ikan", 60);
      break;
    default:
      let marketOptions = "「\t*🛍️ MARKET 🛍️*\t」\n\n*Pilih Barang Yang Akan Dibeli*\n";
      const items = ["emas", "besi", "batubara", "perak", "kayu", "ayam", "sapi", "domba", "ikan"];
      marketOptions += items.map(item => `- ${item}`).join("\n") + "\n\n*Contoh:*\n" + prefix + command + " ikan";
      newReplyRPG(marketOptions);
  }
}
break;
        
case 'mining': {
    if (!db.data.users[m.sender].rpg) {
        return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nKetik _.joinrpg_");
    }
    if (!db.data.rpg[m.sender].pickaxe) {
        return newReplyRPG("Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_");
    }
    if (db.data.rpg[m.sender].darahpickaxe < 1) {
        return newReplyRPG("☹️ Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_");
    }
    if (db.data.rpg[m.sender].darahuser < 1) {
        return newReplyRPG("☹️ Darah Kamu Habis\nTambah Darah Dulu\n\nKetik _.heal_");
    }
    let ironAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let coalAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let goldAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let silverAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const ironFound = ironAmounts[Math.floor(Math.random() * ironAmounts.length)];
    const coalFound = coalAmounts[Math.floor(Math.random() * coalAmounts.length)];
    const goldFound = goldAmounts[Math.floor(Math.random() * goldAmounts.length)];
    const silverFound = silverAmounts[Math.floor(Math.random() * silverAmounts.length)];
    let miningMessage = "*MINING ADVENTURE*\n\nItem Yang Didapat :\n" +
        `- Besi: ${ironFound}\n` +
        `- Emas: ${goldFound}\n` +
        `- Perak: ${silverFound}\n` +
        `- Batu Bara: ${coalFound}\n\n` +
        "_🧰 Disimpan Dalam Inventory..._\n" +
        `_❤️ Darah Berkurang 10_\n` +
        `_⛏️ Ketahanan Pickaxe ${db.data.rpg[m.sender].darahpickaxe}%_\n\n`;
    const newsletterInfo = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: saluranName
    };
    const externalAdInfo = {
        title: "RPG-GAME (Mining Resource)",
        body: "Mining natural resources",
        thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
        sourceUrl: wagc,
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        text: miningMessage,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: newsletterInfo,
            externalAdReply: externalAdInfo
        },
        quoted: m
    });
    db.data.rpg[m.sender].darahuser -= 10;
    db.data.rpg[m.sender].darahpickaxe -= 20;
    db.data.rpg[m.sender].besi += ironFound;
    db.data.rpg[m.sender].emas += goldFound;
    db.data.rpg[m.sender].perak += silverFound;
    db.data.rpg[m.sender].batubara += coalFound;
    db.data.users[m.sender].limit -= 1;
}
break;

case 'menebang':
case 'nebang': {
  if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  if (!db.data.rpg[m.sender].kapak) return newReplyRPG("Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_");
  if (db.data.rpg[m.sender].darahkapak < 1) return newReplyRPG("☹️ Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_");
  let kayuDidapat = await getRandomInt(0, 20);
  db.data.rpg[m.sender].kayu += kayuDidapat;
  db.data.rpg[m.sender].darahkapak -= 20;
  let hasilNebang = '';
  hasilNebang += "*🌳 MENEBANG POHON 🌳*\n\n";
  hasilNebang += "Item Yang Didapat:\n";
  hasilNebang += "- Kayu: " + kayuDidapat + " (Hasil Tebang)\n";
  hasilNebang += "- Kapak: -20 Kesehatan (Digunakan)\n";
  newReplyRPG(hasilNebang);
}
db.data.users[m.sender].limit -= 1;
break;
        
case 'berburu': {
  if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
  let dombaDidapat = await getRandomInt(0, 10);
  let sapiDidapat = await getRandomInt(0, 10);
  let ayamDidapat = await getRandomInt(0, 10);
  let totalItems = dombaDidapat + sapiDidapat + ayamDidapat;
  let buluDidapat = totalItems / 2;
  let terakhirBerburu = await clockString(new Date() - db.data.rpg[m.sender].burutime);
  if (new Date() - db.data.rpg[m.sender].burutime < 7200000) return newReplyRPG("Kamu Baru Saja Berburu " + terakhirBerburu + " Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Berburu");
  db.data.rpg[m.sender].burutime = new Date() * 1;
  db.data.rpg[m.sender].domba += dombaDidapat;
  db.data.rpg[m.sender].sapi += sapiDidapat;
  db.data.rpg[m.sender].ayam += ayamDidapat;
  db.data.rpg[m.sender].bulu += buluDidapat;
  let hasilBerburu = '';
  hasilBerburu += "*🏹 BERBURU 🏹*\n\n";
  hasilBerburu += "Item Yang Didapat:\n";
  hasilBerburu += "- Domba: " + dombaDidapat + "\n";
  hasilBerburu += "- Sapi: " + sapiDidapat + "\n";
  hasilBerburu += "- Ayam: " + ayamDidapat + "\n";
  hasilBerburu += "- Bulu: " + buluDidapat + " (Hasil Pencabutan)\n\n";
  hasilBerburu += "_Tunggu 2 jam untuk berburu berikutnya_\n";
  newReplyRPG(hasilBerburu);
}
db.data.users[m.sender].limit -= 1;
break;
        
case 'adventure': {
    if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    if (db.data.rpg[m.sender].darahuser < 1) return newReplyRPG("Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_");
    let lokasiAdventure = args.join(" ");
    let musuh = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"];
    let musuhAcak = await musuh[Math.floor(Math.random() * musuh.length)];
    let kayuDidapat = await getRandomInt(15);
    let besiDidapat = await getRandomInt(10);
    let rankDidapat = await getRandomInt(100);
    let uangDidapat = await getRandomInt(2000);
    const kirimPesanPetualangan = async (pesan, editKey) => {
        await wbk.sendMessage(m.chat, pesan, { edit: editKey });
        await sleep(3000);
    };
    if (["savanah", "dessert", "boreal forest", "tropical forest"].includes(lokasiAdventure)) {
        db.data.rpg[m.sender].darahuser -= 20;
        const loadingMessage = { text: "Berpetualang, Mohon Tunggu..." };
        let { key: loadingKey } = await wbk.sendMessage(m.chat, loadingMessage, { quoted: m });
        await sleep(3000);
        const bertemuPesan = { text: "Kamu bertemu dengan " + musuhAcak, edit: loadingKey };
        await kirimPesanPetualangan(bertemuPesan, loadingKey);
        const menjelajahPesan = { text: "Menjelajah...", edit: loadingKey };
        await kirimPesanPetualangan(menjelajahPesan, loadingKey);
        let hasilAdventure = `-「 *ADVENTURE* 」-\n\n`;
        hasilAdventure += `*📍 ${lokasiAdventure}*\n`;
        hasilAdventure += `- Kayu: ${kayuDidapat}\n`;
        hasilAdventure += `- Besi: ${besiDidapat}\n`;
        hasilAdventure += `- Rank: ${rankDidapat}\n`;
        hasilAdventure += `- Uang: Rp ${uangDidapat}\n\n`;
        hasilAdventure += `*Stamina berkurang -20*\n`;
        const newsletterInfo = {
            newsletterJid: saluran,
            serverMessageId: null,
            newsletterName: saluranName
        };
        const externalAdReply = {
            title: "RPG - ADVENTURE",
            body: "Petualangan menjelajahi dunia",
            thumbnailUrl: "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg",
            sourceUrl: "tes",
            mediaType: 1,
            renderLargerThumbnail: true
        };
        await wbk.sendMessage(m.chat, {
            text: hasilAdventure,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: newsletterInfo,
                externalAdReply: externalAdReply
            }
        }, { quoted: m });
        db.data.rpg[m.sender].kayu += kayuDidapat;
        db.data.rpg[m.sender].besi += besiDidapat;
        db.data.rpg[m.sender].rank += rankDidapat;
        db.data.rpg[m.sender].uang += uangDidapat;
    } else {
        let messageAdventure = `-「 *ADVENTURE* 」-\n\n`;
        messageAdventure += `*Pilih Lokasi Jelajahmu📍*\n`;
        messageAdventure += `- savanah\n`;
        messageAdventure += `- dessert\n`;
        messageAdventure += `- boreal forest\n`;
        messageAdventure += `- tropical forest\n\n`;
        messageAdventure += `*Contoh:*\n`;
        messageAdventure += `.adventure savanah`;
        const adReply = {
            title: "RPG - ADVENTURE",
            body: "Petualangan menjelajahi dunia",
            thumbnailUrl: "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg",
            sourceUrl: "tes",
            mediaType: 1,
            renderLargerThumbnail: true
        };
        await wbk.sendMessage(m.chat, {
            text: messageAdventure,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: adReply
            }
        }, { quoted: m });
    }
    db.data.users[m.sender].limit -= 1;
}
break;
        
case 'memancing':
case 'mancing': {
    if (!db.data.users[m.sender].rpg) return newReplyRPG("*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_");
    if (db.data.rpg[m.sender].darahuser < 1) return newReplyRPG("Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_");
    let jumlahIkan = await getRandomInt(0, 20);
    db.data.rpg[m.sender].ikan += jumlahIkan;
    db.data.rpg[m.sender].darahuser -= 20;
    let gambarHasil = [
        "https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg",
        "https://telegra.ph/file/2e772e9732c88e153e812.jpg",
        "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg",
        "https://telegra.ph/file/562adf3d43cde4d355e76.jpg",
        "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"
    ];
    let gambarAcak = await gambarHasil[Math.floor(Math.random() * gambarHasil.length)];
    const pesanMemancing = {
        text: "Sedang Memancing..."
    };
    let { key: loadingKey } = await wbk.sendMessage(m.chat, pesanMemancing, { quoted: m });
    await sleep(5000);
    const pesanHasil = {
        text: "Memperoleh Hasil...",
        edit: loadingKey
    };
    await wbk.sendMessage(m.chat, pesanHasil);
    await sleep(5000);
    let hasilMemancing = '';
    hasilMemancing += "「 *MEMANCING* 」\n\n";
    hasilMemancing += "Berhasil mendapatkan " + jumlahIkan + " ikan\n\n";
    hasilMemancing += "_Stamina berkurang -20_\n";
    const newsletterInfo = {
        newsletterJid: saluran,
        serverMessageId: null,
        newsletterName: wm
    };
    const externalAdReply = {
        title: "RPG - FISHING",
        body: "Mencari hasil tangkapan ikan",
        thumbnailUrl: gambarAcak,
        sourceUrl: "tes",
        mediaType: 1,
        renderLargerThumbnail: true
    };
    await wbk.sendMessage(m.chat, {
        text: hasilMemancing,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: newsletterInfo,
            externalAdReply: externalAdReply
        }
    }, { quoted: m });
    db.data.users[m.sender].limit -= 1;
}
break;
        
case 'bekerja':
case 'kerja': {
    let jenisPekerjaan = (args[0] || '').toLowerCase();
    let waktuKerjaSelanjutnya = db.data.rpg[m.sender].lastkerja + 600000;
    let karakter = ["mas mas", "bapak bapak", "cewe sma", "bocil epep", "emak emak"];
    let karakterAcak = await karakter[Math.floor(Math.random() * karakter.length)];
    let hasilPertanian = ["wortel", "sawi", "selada", "tomat", "seledri", "cabai", "daging", "ikan", "ayam"];
    let hasilAcak = await hasilPertanian[Math.floor(Math.random() * hasilPertanian.length)];
    let cedera = ["sakit kepala", "cedera", "luka bakar", "patah tulang"];
    let cederaAcak = await cedera[Math.floor(Math.random() * cedera.length)];
    let hasilPanen = ["Wortel", "Kubis", "strawberry", "teh", "padi", "jeruk", "pisang", "semangka", "durian", "rambutan"];
    let panenAcak = await hasilPanen[Math.floor(Math.random() * hasilPanen.length)];
    let kendaraan = ["mobil", "motor", "becak", "bajai", "bus", "angkot", "becak", "sepeda"];
    let kendaraanAcak = await kendaraan[Math.floor(Math.random() * kendaraan.length)];
    let aktivitasKuli = ["Membangun Rumah", "Membangun Gedung", "Memperbaiki Rumah", "Memperbaiki Gedung", "Membangun Fasilitas Umum", "Memperbaiki Fasilitas Umum"];
    let aktivitasAcak = await aktivitasKuli[Math.floor(Math.random() * aktivitasKuli.length)];
    switch (jenisPekerjaan) {
        case "ojek":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangOjek = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu Sudah Mengantarkan *" + karakterAcak + "* 🚗\nDan mendapatkan uang senilai *Rp " + uangOjek + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangOjek;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "pedagang":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangPedagang = Math.floor(Math.random() * 7000);
            newReplyRPG("Ada pembeli yang membeli *" + hasilAcak + "* 🛒\nDan mendapatkan uang senilai *Rp " + uangPedagang + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangPedagang;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "dokter":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangDokter = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu menyembuhkan pasien *" + cederaAcak + "* 💉\nDan mendapatkan uang senilai *Rp " + uangDokter + "* 💰").then(() => {
                db.data.users[m.sender].uang += uangDokter;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "petani":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangPetani = Math.floor(Math.random() * 7000);
            newReplyRPG(panenAcak + " Sudah Panen! 🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai *Rp " + uangPetani + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangPetani;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "montir":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangMontir = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu baru saja mendapatkan pelanggan dan memperbaiki *" + kendaraanAcak + " 🔧*\nDan Kamu mendapatkan uang senilai *Rp " + uangMontir + "* 💰").then(() => {
                db.data.users[m.sender].uang += uangMontir;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        case "kuli":
            if (new Date() - db.data.rpg[m.sender].lastkerja < 600000) return newReplyRPG("Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 " + clockString(waktuKerjaSelanjutnya - new Date()));
            let uangKuli = Math.floor(Math.random() * 7000);
            newReplyRPG("Kamu baru saja selesai " + aktivitasAcak + " 🔨\nDan mendapatkan uang senilai *Rp " + uangKuli + " 💰*").then(() => {
                db.data.users[m.sender].uang += uangKuli;
                db.data.rpg[m.sender].lastkerja = new Date() * 1;
            });
            break;
        default:
            let messageKerja = '';
            messageKerja += "*💼 RPG - KERJA 💼*\n\n";
            messageKerja += "*Pilih pekerjaanmu*:\n";
            messageKerja += "- montir\n";
            messageKerja += "- kuli\n";
            messageKerja += "- petani\n";
            messageKerja += "- dokter\n";
            messageKerja += "- pedagang\n";
            messageKerja += "- ojek\n\n";
            messageKerja += "*Contoh*:\n";
            messageKerja += prefix + command + " kuli\n";
            const newsletterInfo = {
                newsletterJid: saluran,
                serverMessageId: null,
                newsletterName: wm
            };
            const externalAdReply = {
                title: "RPG - JOB SIMULATOR",
                body: "Pilih pekerjaan dan nikmati hasilnya",
                thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
                sourceUrl: "tes",
                mediaType: 1,
                renderLargerThumbnail: true
            };
            await wbk.sendMessage(m.chat, {
                'text': messageKerja,
                'contextInfo': {
                    'mentionedJid': [m.sender],
                    'forwardingScore': 999,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': newsletterInfo,
                    'externalAdReply': externalAdReply
                }
            }, { quoted: m });
    }
}
break;
        
case 'merampok':
case 'rampok': {
    let jumlahRampokan = Math.floor(Math.random() * 15000);
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReplyRPG("*Tag/Reply Target!*\n\nContoh :\n" + (prefix + command) + " @0");
    if (target == m.sender) return newReplyRPG("Gak bisa ngerampok diri sendiri😑");
    let waktuTerakhirRampok = new Date() - db.data.rpg[m.sender].lastrampok;
    let waktuTunggu = 3600000 - waktuTerakhirRampok; // 1 jam
    let waktuTungguString = clockString(waktuTunggu);
    if (new Date() - db.data.rpg[m.sender].lastrampok > 3600000) {
        if (db.data.users[target].uang < 15000) return newReply("Target kismin🙀");
        db.data.users[target].uang -= jumlahRampokan;
        db.data.users[m.sender].uang += jumlahRampokan;
        db.data.rpg[m.sender].lastrampok = new Date() * 1;
        newReplyRPG("😈 Target Berhasil Dirampok Dan Mendapatkan Rp " + jumlahRampokan);
    } else {
        newReplyRPG("Loe udah ngerampok ngabb😑\ntunggu " + waktuTungguString + " untuk merampok lagi");
    }
}
break;
        
case 'daily': {
    if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
    const cooldown = 86400000; // 24 Jam
    let remainingTime = cooldown - (new Date() - db.data.rpg[m.sender].lastclaim);
    if (remainingTime > 0) return wbk.sendMessage(m.chat, { text: `Kamu sudah klaim hari ini!\nTunggu ${clockString(remainingTime)} untuk klaim lagi.` }, { quoted: m });
    db.data.users[m.sender].limit += 5;
    db.data.users[m.sender].uang += 5000;
    db.data.rpg[m.sender].lastclaim = new Date().getTime();
    wbk.sendMessage(m.chat, { text: `🎁 *KLAIM HARIAN!* 🎁\n+5 Limit\n+5.000 Uang` }, { quoted: m });
    db.data.settings[botNumber].totalhit += 1;
}
break;