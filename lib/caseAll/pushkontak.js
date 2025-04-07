case 'post':
case 'jpm': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Reply gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda:* 1000 = 1 detik\n\n*Contoh:* ${prefix + command} Halo semuanya!|9000`);
	await newReply(`⏳ *Sedang diproses...*`);
	let getGroups = await wbk.groupFetchAllParticipating();
	let groups = Object.entries(getGroups).map((entry) => entry[1]);
	let anu = groups.map((v) => v.id);
	for (let member of anu) {
		let metadata = await wbk.groupMetadata(member);
		let participants = metadata.participants;
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted);
			let mem = await quax(media);
			await wbk.sendMessage(member, {
				image: { url: mem },
				caption: text.split('|')[0],
				mentions: participants.map(a => a.id)
			});
			await sleep(text.split('|')[1]);
		} else {
			await wbk.sendMessage(member, {
				text: text.split('|')[0],
				mentions: participants.map(a => a.id)
			});
			await sleep(text.split('|')[1]);
		}
	}
	newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'pushkontak': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.private);
	var name = text.split('/')[0];
	var chet = text.split('/')[1];
	if (!name) return newReply(`Contoh: ${prefix + command} nama/pesan`);
	if (!chet) return newReply(`Contoh: ${prefix + command} nama/pesan`);
	let kontak = {
		displayName: "Contact",
		contacts: [{
			displayName: name,
			vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
		}]
	}
	let push = await wbk.groupMetadata(m.chat)
	if (push.participants.length > 300) return newReply('Batas member maksimal: *300*')
	await reactionMessage('⏱️');
	for (let a of push.participants) {
		const repf = await wbk.sendMessage(a.id, {
			contacts: kontak
		})
		wbk.sendMessage(a.id, {
			text: chet
		}, {
			quoted: repf
		})
		await sleep(3000);
	}
	await newReply(mess.done);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);
	let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
	newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
	for (let pler of mem) {
		await wbk.sendMessage(pler, {
			text: text
		});
	}
	newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact2': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
	try {
		const metadata = await wbk.groupMetadata(text.split("|")[0]);
		const participants = metadata.participants;
		for (let mem of participants) {
			await wbk.sendMessage(
				`${mem.id.split('@')[0]}@s.whatsapp.net`, {
					text: text.split("|")[1]
				}
			);
			await sleep(5000);
		}
		newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
	} catch {
		newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'pushcontact3': {
	if (!isCreator) return newReply(mess.owner);
	if (!m.isGroup) return newReply(mess.group);
	if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
	try {
		let jeda = text.split("|")[0];
		let caption = text.split("|")[1];
		let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
		for (let men of participants) {
			if (/image/.test(mime)) {
				let media = await wbk.downloadAndSaveMediaMessage(quoted);
				let mem = await catbox(media);
				await wbk.sendMessage(men, {
					image: {
						url: mem
					},
					caption: caption
				}, {
					quoted: m
				});
				await sleep(jeda);
			} else {
				await wbk.sendMessage(men, {
					text: caption
				}, {
					quoted: m
				});
				await sleep(jeda);
			}
		}
		newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
	} catch {
		newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'getcontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	bigpp = await wbk.sendMessage(m.chat, {
		text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
	}, {
		quoted: m,
		ephemeralExpiration: 86400
	});
	await sleep(1000);
	wbk.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'savecontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	let cmiggc = await wbk.groupMetadata(m.chat);
	let orgiggc = participants.map(a => a.id);
	vcard = '';
	noPort = 0;
	for (let a of cmiggc.participants) {
		vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
	}
	let nmfilect = './contacts.vcf';
	newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
	require('fs').writeFileSync(nmfilect, vcard.trim());
	await sleep(2000);
	wbk.sendMessage(m.chat, {
		document: require('fs').readFileSync(nmfilect),
		mimetype: 'text/vcard',
		fileName: 'Contact.vcf',
		caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
	}, {
		ephemeralExpiration: 86400,
		quoted: m
	});
	require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'sendcontact': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
	let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
	let snContact = {
		displayName: "Contact",
		contacts: [{
			displayName: snTak,
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
		}]
	};
	wbk.sendMessage(m.chat, {
		contacts: snContact
	}, {
		ephemeralExpiration: 86400
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;

case 'contacttag': {
	if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
	if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
	if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
	let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
	let sngContact = {
		displayName: "Contact",
		contacts: [{
			displayName: sngTak,
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
		}]
	};
	wbk.sendMessage(m.chat, {
		contacts: sngContact,
		mentions: participants.map(a => a.id)
	}, {
		ephemeralExpiration: 86400
	});
}
db.data.settings[botNumber].totalhit += 1;
break;;