case 'menfess':
case 'menfes': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!isCreator) return newReply('Dalam perbaikan');
	this.menfes = this.menfes || {};
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (session) return newReply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
	if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
	if (!text || !text.includes('|')) {
		return newReply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
	}
	let [namaNya, nomorNya, pesanNya] = text.split('|');
	if (!nomorNya || !pesanNya) {
		return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
	}
	if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
		return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
	}
	await reactionMessage('⏱️');
	let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
	const imageBuffer = await getBuffer('https://files.catbox.moe/qxw4j8.jpg');
	let id = m.sender;
	this.menfes[id] = {
		id,
		a: m.sender,
		b: nomorNya + '@s.whatsapp.net',
		state: 'WAITING'
	};
	const buttons = [{
		"name": "single_select",
		"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "💌 Menerima atau Menolak Menfess",
									"rows": [
										{
											"header": "🤗 Terima Menfess",
											"title": "🌟 Ya, Terima Menfess",
											"description": "Klik ini kalau mau menerima dan memproses menfess ini dengan baik! 🥰",
											"id": "${prefix}balasmenfes"
										},
										{
											"header": "😔 Tolak Menfess",
											"title": "❌ Tidak, Tolak Menfess",
											"description": "Klik ini kalau menfess ini nggak mau diterima. 😢",
											"id": "${prefix}tolakmenfes"
										}
									]
								}
							]
						}`
	}];
	await sendButtonImage(`${nomorNya}@s.whatsapp.net`, '', pesanTemplate, imageBuffer, buttons)
	newReply(`Yay! Pesan menfess berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
    await limitReduction(m, prefix, wm);
}
break;;

case 'balasmenfess':
case 'balasmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
	let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
	if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
	let otherUser = [room.a, room.b].find(user => user !== m.sender);
	room.state = 'CHATTING';
	this.menfes[room.id] = {
		...room
	};
	await wbk.sendMessage(otherUser, {
		text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`,
		mentions: [m.sender]
	});
	wbk.sendMessage(m.chat, {
		text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗`
	});
}
break;;

case 'tolakmenfess':
case 'tolakmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
	let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
	if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
	let otherUser = [room.a, room.b].find(user => user !== m.sender);
	await wbk.sendMessage(otherUser, {
		text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`,
		mentions: [m.sender]
	});
	newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
	delete this.menfes[room.id];
}
break;;

case 'stopmenfess':
case 'stopmenfes': {
	let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
	if (!session) return newReply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
	let otherUser = session.a === m.sender ? session.b : session.a;
	await wbk.sendMessage(otherUser, {
		text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`,
		mentions: [m.sender]
	});
	newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
	delete this.menfes[session.id];
}
break;;