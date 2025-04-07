case 'speed': case 'ping': {
    try {
        const used = process.memoryUsage();
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
            return cpu;
        });
        const cpu = cpus.reduce((last, cpu, _, {
            length
        }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
        }, {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            }
        });
        let start = performance.now();
        let end = performance.now();
        let latensi = end - start;
        let osInfo = await nou.os.oos();
        let storage = await nou.drive.info();
        let respon = `✨ *Informasi Bot WhatsApp* ✨

📡 *Jaringan Server*
 · *Ping:* ${latensi.toFixed(4)} Detik
🖥️ *Informasi Server*
 · *OS:* ${osInfo}
 · *IP Address:* ${nou.os.ip()}
 · *Tipe OS:* ${nou.os.type()}

 💾 *RAM:*
 · *Total:* ${formatp(os.totalmem())}
 · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}

 📂 *Penyimpanan:*
 · *Total:* ${storage.totalGb} GB
 · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)
 · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)

 ⏳ *Waktu Aktif Server:*
${runtime(process.uptime())}
 ⚙️ *CPU (${cpus.length} Core)*
 · *Model:* ${cpus[0].model.trim()}
 · *Kecepatan:* ${cpu.speed} MHz
${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

Tetap semangat ya kak! WBK selalu siap membantu 🥰`;
        await wbk.sendMessage(m.chat, {
            text: respon,
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
                    title: wm,
                    body: ownerName,
                    thumbnail: thumb,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        });
    } catch (err) {
        console.error(err);
    }
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'sendlocation': case 'sendloc': {
    let latitude = -8.168696; // Latitude (contoh Jakarta)
    let longitude = 113.702120; // Longitude (contoh Jakarta)
    let caption = "Lokasi Bot ini berada di Jember"; // Deskripsi opsional
    let whatsappNumber = m.chat; // Nomor penerima
    await wbk.sendMessage(whatsappNumber, {
        location: {
            degreesLatitude: latitude,
            degreesLongitude: longitude,
            caption: caption // Jika ada deskripsi, bisa ditambahkan di sini
        }
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'p':
case 'tes':
case 'test': {
    const caption = `Haii, Kak! ✨ AIzero udah aktif nih dan siap nemenin Kakak kapan aja! 🤗💕\nKalau ada yang mau Kakak mulai atau mau cek seberapa cepat respons AIzero, langsung aja klik tombol di bawah ya! 👇✨`;
    wbk.sendMessage(m.chat, {
        image: thumb,
        caption: caption,
        footer: `${botName} • AIzero siap sedia buat Kakak! 💬`,
        buttons: [{
                buttonId: `${prefix}menu`,
                buttonText: {
                    displayText: "🚀 Start"
                }
            },
            {
                buttonId: `${prefix}ping`,
                buttonText: {
                    displayText: "📶 Cek Status"
                }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, {
        quoted: fconver
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'owner':
case 'creator': {
    const caption = `Haii Kak ${pushname}, ${ucapanWaktu}! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
    wbk.sendMessage(m.chat, {
        image: thumb,
        caption: caption,
        footer: botName,
        buttons: [{
                buttonId: `${prefix}about`,
                buttonText: {
                    displayText: "About Owner 👤"
                }
            },
            {
                buttonId: `${prefix}contact`,
                buttonText: {
                    displayText: "Contact Owner ✨"
                }
            },
            {
                buttonId: `${prefix}menu`,
                buttonText: {
                    displayText: "View Menu 👀"
                }
            }
        ],
        viewOnce: true,
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
                title: wm,
                body: ownerName,
                thumbnail: thumb,
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'contact': {
    await wbk.sendMessage( m.chat, { 
        contacts: { 
            displayName: ownerName, 
            contacts: contacts 
        }
    }, { quoted: m });
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'about': {
    newReply('OWNER ALWAYS WIN');
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'totalfeature':
case 'totalcmd':
case 'totalcommand':
case 'totalcase':
case 'totalfitur': {
    const { commands: allCaseCommands, caseCount: allCaseCount } = getAllCaseCommands();
    const { commands: aiCommands, caseCount: aiCount } = getAICommands();
    const { commands: animeCommands, caseCount: animeCount } = getAnimeCommands();
    const { commands: downloadCommands, caseCount: downloadCount } = getDownloadCommands();
    const { commands: funCommands, caseCount: funCount } = getFunCommands();
    const { commands: gameCommands, caseCount: gameCount } = getGameCommands();
    const { commands: groupCommands, caseCount: groupCount } = getGroupCommands();
    const { commands: infoBotCommands, caseCount: infoBotCount } = getInfoBotCommands();
    const { commands: infoMeCommands, caseCount: infoMeCount } = getInfoMeCommands();
    const { commands: informationCommands, caseCount: informationCount } = getInformationCommands();
    const { commands: jkt48Commands, caseCount: jkt48Count } = getJKT48Commands();
    const { commands: makerCommands, caseCount: makerCount } = getMakerCommands();
    const { commands: menfessCommands, caseCount: menfessCount } = getMenfessCommands();
    const { commands: newsletterCommands, caseCount: newsletterCount } = getNewsletterCommands();
    const { commands: otherCommands, caseCount: otherCount } = getOtherCommands();
    const { commands: ownerCommands, caseCount: ownerCount } = getOwnerCommands();
    const { commands: ppobCommands, caseCount: ppobCount } = getPPOBCommands();
    const { commands: pushkontakCommands, caseCount: pushkontakCount } = getPushKontakCommands();
    const { commands: rpgCommands, caseCount: rpgCount } = getRPGCommands();
    const { commands: searchCommands, caseCount: searchCount } = getSearchCommands();
    const { commands: soundEffectCommands, caseCount: soundEffectCount } = getSoundEffectCommands();
    const { commands: soundTiktokCommands, caseCount: soundTiktokCount } = getSoundTiktokCommands();
    const { commands: stalkCommands, caseCount: stalkCount } = getStalkCommands();
    const { commands: stickerpackCommands, caseCount: stickerpackCount } = getStickerPackCommands();
    const { commands: storeCommands, caseCount: storeCount } = getStoreCommands();
    const { commands: toolCommands, caseCount: toolCount } = getToolCommands();
    
    let total = `✨ *Total Fitur yang Tersedia di ${botName}:* ${allCaseCount} Fitur
- Bot ini menggunakan type case

> Kategori AI = ${aiCount} Fitur
> Kategori Anime = ${animeCount} Fitur
> Kategori Download = ${downloadCount} Fitur
> Kategori Fun = ${funCount} Fitur
> Kategori Game = ${gameCount} Fitur
> Kategori Group = ${groupCount} Fitur
> Kategori Info Bot = ${infoBotCount} Fitur
> Kategori Info Me = ${infoMeCount} Fitur
> Kategori Information = ${informationCount} Fitur
> Kategori JKT48 = ${jkt48Count} Fitur
> Kategori Maker = ${makerCount} Fitur
> Kategori Menfess = ${menfessCount} Fitur
> Kategori Newsletter = ${newsletterCount} Fitur
> Kategori Other = ${otherCount} Fitur
> Kategori Owner = ${ownerCount} Fitur
> Kategori PPOB = ${ppobCount} Fitur
> Kategori Push Kontak = ${pushkontakCount} Fitur
> Kategori RPG = ${rpgCount} Fitur
> Kategori Search = ${searchCount} Fitur
> Kategori Sound Effect = ${soundEffectCount} Fitur
> Kategori Sound Tiktok = ${soundTiktokCount} Fitur
> Kategori Stalk = ${stalkCount} Fitur
> Kategori Sticker Pack = ${stickerpackCount} Fitur
> Kategori Store = ${storeCount} Fitur 
> Kategori Tool = ${toolCount} Fitur`;
    
    newReplyBot(total);
}
db.data.settings[botNumber].totalhit += 1;
break;