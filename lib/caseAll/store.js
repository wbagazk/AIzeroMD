case 'list':
case 'store': {
	try {
		const keys = Object.keys(db.data.chats[m.chat].liststore);
		if (keys.length === 0) return newReply(`Belum ada list message di grup`)
		let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
		const result = [];
		const list = [];
		keys.forEach(key => {
			result.push({
				key: key
			});
			list.push({
				header: capitalizeWords(key) + " 🛒",
				title: "klik to show product",
				id: key
			})
		});
		for (let i of result) {
			teks += ` · ${i.key.toUpperCase()}\n`
		}
		teks += `\n_Klik untuk melihat_\n_store produknya_`
		let button = [{
			"name": "single_select",
			"buttonParamsJson": `{\n\"title\": \"Store List 🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
		}]
		await sendButtonImage(m.chat, '', teks, {
			url: thumbUrl
		}, button, m)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'dellist': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	try {
		const keys = Object.keys(db.data.chats[m.chat].liststore);
		if (keys.length === 0) return newReply(`Belum ada list message di database`)
		if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
		if (!db.data.chats[m.chat].liststore[text]) return newReply(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
		delete db.data.chats[m.chat].liststore[text]
		m.reply(`Sukses delete list message dengan key *${q}*`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'addlist': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	var args1 = q.split("|")[0].toLowerCase()
	var args2 = q.split("|")[1]
	if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
	if (db.data.chats[m.chat].liststore[args1]) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
	try {
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: url,
				video: ""
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		} else if (/video/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: url
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		} else {
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: ""
			}
			m.reply(`Sukses set list message dengan key : *${args1}*`)
		}
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'updatelist':
case 'update': {
	if (!m.isGroup) return newReply(mess.group)
	if (!isAdmins && !isCreator) return newReply(mess.admin)
	var args1 = q.split("|")[0].toLowerCase()
	var args2 = q.split("|")[1]
	if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
	if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
	try {
		if (/image/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: url,
				video: ""
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		} else if (/video/.test(mime)) {
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			const url = await catbox(media)
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: url
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		} else {
			db.data.chats[m.chat].liststore[args1] = {
				key: args1,
				response: args2,
				img: "",
				video: ""
			}
			m.reply(`Sukses update respon list dengan key *${args1}*`)
		}
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'tambah': {
	if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
	try {
		arg = args.join(' ')
		atas = arg.split('+')[0]
		bawah = arg.split('+')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one + nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'kurang': {
	if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* · *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
	try {
		arg = args.join(' ')
		atas = arg.split('-')[0]
		bawah = arg.split('-')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one - nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'kali': {
	if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
	try {
		arg = args.join(' ')
		atas = arg.split('*')[0]
		bawah = arg.split('*')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one * nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;

case 'bagi': {
	if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
	try {
		arg = args.join(' ')
		atas = arg.split('/')[0]
		bawah = arg.split('/')[1]
		var nilai_one = Number(atas)
		var nilai_two = Number(bawah)
		m.reply(`${nilai_one / nilai_two}`)
	} catch (error) {
		console.log(error);
	}
}
db.data.settings[botNumber].totalhit += 1;
break;


db.data.settings[botNumber].totalhit += 1;
db.data.settings[botNumber].totalhit += 1;
break;
;
