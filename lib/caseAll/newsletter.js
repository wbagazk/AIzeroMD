case 'setnewsletterdesc': {
	if (!isCreator) return newReply(mess.owner);
	if (!args.join(" ")) return newReply(`Penggunaan: ${prefix + command} <deskripsi>\n\nContoh:\nsetnewsletterdesc Ini deskripsi baru.`);
	const teks = args.join(" ");
	try {
		await wbk.newsletterUpdateDescription(saluran, teks);
		newReply("Berhasil mengubah deskripsi newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah deskripsi.");
	}
}
break;

case 'setnewslettername': {
	if (!isCreator) return newReply(mess.owner);
	if (!args.join(" ")) return newReply(`Penggunaan: ${prefix + command} <nama>\n\nContoh:\n${prefix + command} Nama Baru Newsletter.`);
	const teks = args.join(" ");
	try {
		await wbk.newsletterUpdateName(saluran, teks);
		newReply("Berhasil mengubah nama newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah nama.");
	}
}
break;

case 'setnewsletterpic': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.quoted || !m.quoted.isMedia) return newReply("Balas sebuah gambar untuk dijadikan foto profil newsletter.");
	try {
		const pp = await m.quoted.download();
		await wbk.newsletterUpdatePicture(saluran, pp);
		newReply("Berhasil mengubah foto profil newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengubah foto profil.");
	}
}
break;

case 'removenewsletterpic': {
	if (!isCreator) return newReply(mess.owner);
	try {
		await wbk.newsletterRemovePicture(saluran);
		newReply("Berhasil menghapus foto profil newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat menghapus foto profil.");
	}
}
break;

case 'followch':
case 'follownewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply("Kirim perintah " + (prefix + command) + " <link>");
	if (!isUrl(args[0]) && !args[0].includes("whatsapp.com/channel")) return newReply(mess.error);
	try {
		let link = args[0].split("https://whatsapp.com/channel/")[1];
		let newsletter = await wbk.newsletterMetadata("invite", link);
		await wbk.newsletterFollow(newsletter.id);
		newReply("Berhasil mengikuti newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat mengikuti newsletter.");
	}
}
break;

case 'unfollowch':
case 'unfollownewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply("Kirim perintah " + (prefix + command) + " <link>");
	if (!isUrl(args[0]) && !args[0].includes("whatsapp.com/channel")) return newReply(mess.error);
	try {
		let link = args[0].split("https://whatsapp.com/channel/")[1];
		let newsletter = await wbk.newsletterMetadata("invite", link);
		await wbk.newsletterUnfollow(newsletter.id);
		newReply("Berhasil berhenti mengikuti newsletter.");
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat berhenti mengikuti newsletter.");
	}
}
break;

case 'createnewsletter': {
	if (!isCreator) return newReply(mess.owner);
	if (!args[0] || !args[1]) return newReply("Penggunaan: " + (prefix + command) + " <nama> | <deskripsi>\n\nContoh:\n " + (prefix + command) + " Newsletter Baru | Ini deskripsi newsletter.");
	const [name, desc] = args.join(" ").split('|').map(_0x5e0457 => _0x5e0457.trim());
	if (!name || !desc) {
		return newReply("Format salah. Gunakan \"|\" untuk memisahkan nama dan deskripsi.");
	}
	try {
		const newsletter = await wbk.newsletterCreate(name, desc);
		newReply("Newsletter berhasil dibuat.\n\nNama: " + newsletter.name + "\nDeskripsi: " + newsletter.description);
	} catch (error) {
		console.error(error);
		newReply("Terjadi kesalahan saat membuat newsletter.");
	}
}
break;

case 'getinfoch':
case 'getinfochannel':
case 'getchid':
case 'getidch':
case 'cekchid':
case 'cekidch':
case 'infonewsletter': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+)/;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    };
    let url = extractUrl(text) || (m.quoted && extractUrl(m.quoted.text));
    if (!url) return newReply(`Kirim perintah ${prefix + command} _link channel_`);  
    if (!isUrl(url) && !url.includes('whatsapp.com/channel')) return newReply(mess.error);
    function formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    try {
        let result = url.split('https://whatsapp.com/channel/')[1];
        let data = await wbk.newsletterMetadata("invite", result);
        let teks = `「 *NEWSLETTER METADATA* 」\n\n`;
        teks += ` · *Name :* ${data.name}\n`;
        teks += ` · *ID :* ${data.id}\n`;
        teks += ` · *Status :* ${data.state}\n`;
        teks += ` · *Dibuat Pada :* ${formatDate(data.creation_time)}\n`;
        teks += ` · *Subscribers :* ${data.subscribers}\n`;
        teks += ` · *Meta Verify :* ${data.verification}\n`;
        teks += ` · *React Emoji :* ${data.reaction_codes}\n`;
        teks += ` · *Description :*\n${data.description}\n`;
        let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{
                "display_text": "COPY ID",
                "id": "${data.id}",
                "copy_code": "${data.id}"
            }`
        }];
        sendButton(m.chat, '', teks, button, m);
    } catch (error) {
        newReply('*Data tidak ditemukan!* ☹️');
    }
    await limitReduction(m, prefix, wm);
}
break;

case 'chatch':
case 'chatnewsletter': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!m.isGroup) return newReply("Command ini cuma bisa dipakai di grup!");
	const teks = m.text.split(" ").slice(1).join(" ").trim();
	try {
		const groupMetadata = await wbk.groupMetadata(m.chat);
		const groupName = groupMetadata.subject || "Grup ini";
		const senderName = m.pushName || m.sender.split('@')[0];
		let ppuser;
		try {
			ppuser = await wbk.profilePictureUrl(m.sender, "image");
		} catch (err) {
			ppuser = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
		}
		let media = m.quoted ? await m.quoted.download() : null;
		if (media) {
			const mimeType = m.quoted.mimetype;
			const caption = `${teks}\n\nDari: ${senderName}`;
			if (/image/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					image: media,
					caption
				});
				newReply("📸 Gambar berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/video/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					video: media,
					caption
				});
				newReply("🎥 Video berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/audio/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					audio: media,
					mimetype,
					ptt: true,
					caption
				});
				newReply("🎵 Audio berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else if (/application/.test(mimeType)) {
				await wbk.sendMessage(saluran, {
					document: media,
					mimetype,
					fileName: "Dokumen dari grup",
					caption
				});
				newReply("📄 Dokumen berhasil dikirim ke channel!");
                await limitReduction(m, prefix, wm);
			} else {
				newReply("Format media tidak didukung.");
			}
		} else {
			if (!teks) return newReply("Pesan tidak boleh kosong! Silakan masukkan teks.");
			await wbk.sendMessage(saluran, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `From: ${senderName}`,
						body: `Group: ${groupName}`,
						thumbnail: await getBuffer(ppuser),
						sourceUrl: "https://wbkcloudx.web.id/",
					},
				},
			});
            await limitReduction(m, prefix, wm);
			newReply("💬 Pesan teks berhasil dikirim ke channel!");
		}
	} catch (error) {
		console.error(`Gagal mengirim ke saluran ${saluran}:`, error);
		newReply("Gagal mengirim pesan ke saluran.");
	}
}
break;

case 'upch':
case 'upnewsletter': {
	if (!isCreator) return newReply(mess.owner)
	try {
		await reactionMessage('⏱️');
		if (!mime && !text) {
			return newReply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
		}
		let q = args.join(" ");
		let parts = q.split(",");
		let title = parts[0]
		let text = parts[1]
		media = mime ? await quoted.download() : null
		let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis WBK! ✨"
		if (/image/.test(mime)) {
			wbk.sendMessage(saluran, {
				image: media,
				caption: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else if (/video/.test(mime)) {
			wbk.sendMessage(saluran, {
				video: media,
				caption: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else if (/audio/.test(mime)) {
			wbk.sendMessage(saluran, {
				audio: media,
				mimetype: mime,
				ptt: true,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: title,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
			await reactionMessage('✅');
		} else if (/text/.test(mime) || text) {
			wbk.sendMessage(saluran, {
				text: text ? text : defaultCaption,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: `WBK`,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: wm,
						body: ucapanWaktu,
						thumbnail: thumb,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			})
			newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
			await reactionMessage('✅');
		} else {
			newReply(`Hmm... WBK gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
		}
	} catch (error) {
		console.error(error)
		newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
	}
}
break;