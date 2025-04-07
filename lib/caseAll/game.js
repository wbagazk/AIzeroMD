case 'suit': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	const userChoice = text.toLowerCase();
	const choices = ['batu', 'gunting', 'kertas'];
	const botChoice = choices[Math.floor(Math.random() * choices.length)];
	if (!choices.includes(userChoice)) {
		return newReply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
	}
	let hasil = '';
	if (userChoice === botChoice) {
		hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
	} else if (
		(userChoice === 'batu' && botChoice === 'gunting') ||
		(userChoice === 'gunting' && botChoice === 'kertas') ||
		(userChoice === 'kertas' && botChoice === 'batu')
	) {
		hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
	} else {
		hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
	}
	newReply(hasil);
}
break;

case 'tebakgambar': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakgambar[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakgambar[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakgambar[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakgame': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakgame[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakgame[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakgame[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkata': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakkata[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkata[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakkata[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakbendera': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.name)
		tebakbendera[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: {
					url: result.img
				},
				caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
			}, {
				quoted: m
			}), result, 250,
			setTimeout(() => {
				if (tebakbendera[m.chat]) {
					waktuHabis(result.name)
					delete tebakbendera[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkalimat': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebakkalimat[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkalimat[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebakkalimat[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaksiapa': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		siapaaku[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (siapaaku[m.chat]) {
					waktuHabis(result.jawaban)
					delete siapaaku[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebakkimia': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.unsur)
		tebakkimia[m.chat] = [
			await wbk.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebakkimia[m.chat]) {
					waktuHabis(result.unsur)
					delete tebakkimia[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaklirik': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebaklirik[m.chat] = [
			await wbk.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebaklirik[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebaklirik[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tebaktebakan': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tebaktebakan[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tebaktebakan[m.chat]) {
					waktuHabis(result.jawaban)
					delete tebaktebakan[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'susunkata': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		susunkata[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (susunkata[m.chat]) {
					waktuHabis(result.jawaban)
					delete susunkata[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'caklontong': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		caklontong[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (caklontong[m.chat]) {
					waktuHabis(result.jawaban)
					delete caklontong[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'tekateki': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		tekateki[m.chat] = [
			await wbk.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (tekateki[m.chat]) {
					waktuHabis(result.jawaban)
					delete tekateki[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'asahotak': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/NzrlAfndi/Databasee/raw/refs/heads/main/games/asahotak.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		asahotak[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (asahotak[m.chat]) {
					waktuHabis(result.jawaban)
					delete asahotak[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break
        
case 'butawarna': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/siputzx/Databasee/raw/refs/heads/main/games/butawarna.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.correct)
		butawarna[m.chat] = [
			await wbk.sendMessage(m.chat, {
				image: { url: result.image }, caption: `Angka berapa yang ada pada gambar?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
			setTimeout(() => {
				if (butawarna[m.chat]) {
					waktuHabis(result.correct)
					delete butawarna[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'lengkapikalimat': {
	const gamecek = await cekgame(m.chat)
	if (gamecek) return
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let anu = await fetchJson('https://github.com/NzrlAfndi/Databasee/raw/refs/heads/main/games/lengkapikalimat.json')
		let result = await pickRandom(anu)
		console.log("Jawaban: " + result.jawaban)
		lengkapikalimat[m.chat] = [
			await wbk.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.pertanyaan}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
			setTimeout(() => {
				if (lengkapikalimat[m.chat]) {
					waktuHabis(result.jawaban)
					delete lengkapikalimat[m.chat]
				}
			}, 120000)
		]
	} catch (error) {
		console.log(error);
	}
}
break

case 'chess': {
    if (!m.isGroup) return newReply('❌ Fitur ini hanya tersedia di grup.');
    const key = m.chat;
    wbk.chess = wbk.chess || {};
    let chessData = wbk.chess[key] || {
        gameData: null,
        fen: null,
        currentTurn: null,
        players: [],
        hasJoined: []
    };
    wbk.chess[key] = chessData;
    const { gameData, fen, currentTurn, players, hasJoined } = chessData;
    const feature = args[0]?.toLowerCase();
    const senderId = m.sender;
    if (feature === 'delete') {
        delete wbk.chess[key];
        return await wbk.sendMessage(m.chat, { text: '🏳 *Permainan catur dihentikan.*' }, { quoted: m });
    }
    if (feature === 'create') {
        if (gameData) 
            return await wbk.sendMessage(m.chat, { text: '⚠ *Permainan sudah dimulai.*' }, { quoted: m });
        chessData.gameData = {
            status: 'waiting',
            black: null,
            white: null
        };
        return await wbk.sendMessage(m.chat, { text: `🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.\n> Ketik *${prefix}chess join* untuk bergabung` }, { quoted: m });
    }
    if (feature === 'join') {
        if (!gameData || gameData.status !== 'waiting') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Tidak ada permainan catur yang sedang menunggu.*' 
            }, { quoted: m });
        }
        if (players.includes(senderId)) {
            return await wbk.sendMessage(m.chat, { 
                text: '🙅‍♂ *Anda sudah bergabung dalam permainan ini.*' 
            }, { quoted: m });
        }
        if (players.length >= 2) {
            return await wbk.sendMessage(m.chat, { 
                text: '👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.' 
            }, { quoted: m });
        }
        players.push(senderId);
        hasJoined.push(senderId);
        if (players.length === 2) {
            gameData.status = 'ready';
            const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
            gameData.black = black;
            gameData.white = white;
            chessData.currentTurn = white;
            return await wbk.sendMessage(m.chat, { 
                text: `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `@${playerId.split('@')[0]}`).join('\n')}\n\n⚫ *Hitam:* @${black.split('@')[0]}\n⚪ *Putih:* @${white.split('@')[0]}\n\n🕹 Silakan gunakan *${prefix}chess start* untuk memulai permainan.`,
                mentions: hasJoined 
            }, { quoted: m });
        } else {
            return await wbk.sendMessage(m.chat, { 
                text: '🙋‍♂ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.' 
            }, { quoted: m });
        }
    }
    if (feature === 'start') {
        if (!gameData || gameData.status !== 'ready') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Tidak dapat memulai permainan.*\nTunggu hingga dua pemain bergabung.' 
            }, { quoted: m });
        }
        gameData.status = 'playing';
        const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        chessData.fen = fen;
        const encodedFen = encodeURIComponent(fen);
        const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
        const flipParam = senderId === gameData.black ? '' : '&flip=true';
        const flipParam2 = senderId === gameData.black ? '' : '-flip';
        const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        try {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl }, 
                caption: giliran,
                mentions: [gameData.white]
            }, { quoted: m });
        } catch (error) {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl2 }, 
                caption: giliran,
                mentions: [gameData.white]
            }, { quoted: m });
        }
    }
    if (args.length === 2) {
        if (!gameData || gameData.status !== 'playing') {
            return await wbk.sendMessage(m.chat, { 
                text: '⚠ *Permainan belum dimulai.*' 
            }, { quoted: m });
        }
        if (currentTurn !== senderId) {
            return await wbk.sendMessage(m.chat, { 
                text: `⏳ *Sekarang giliran ${currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`, 
                mentions: [currentTurn]
            }, { quoted: m });
        }
        const chess = new Chess(fen);
        if (chess.isCheckmate()) {
            delete wbk.chess[key];
            return await wbk.sendMessage(m.chat, { 
                text: `🏆 *Checkmate! Pemenang:* @${m.sender.split('@')[0]}`, 
                mentions: [m.sender]
            }, { quoted: m });
        }
        if (chess.isDraw()) {
            delete wbk.chess[key];
            return await wbk.sendMessage(m.chat, { 
                text: '🤝 *Permainan berakhir seri.*' 
            }, { quoted: m });
        }
        const [from, to] = args;
        try {
            chess.move({ from, to, promotion: 'q' });
        } catch (e) {
            return await wbk.sendMessage(m.chat, { 
                text: '❌ *Langkah tidak valid.*' 
            }, { quoted: m });
        }
        chessData.fen = chess.fen();
        chessData.currentTurn = players.find(p => p !== senderId);
        const encodedFen = encodeURIComponent(chess.fen());
        const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
        const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}`;
        const flipParam = senderId === gameData.black ? '' : '&flip=true';
        const flipParam2 = senderId === gameData.black ? '' : '-flip';
        const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        try {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl }, 
                caption: giliran,
                mentions: [chessData.currentTurn]
            }, { quoted: m });
        } catch (error) {
            return await wbk.sendMessage(m.chat, { 
                image: { url: boardUrl2 }, 
                caption: giliran,
                mentions: [chessData.currentTurn]
            }, { quoted: m });
        }
    }
    if (feature === 'help') {
        return await wbk.sendMessage(m.chat, { 
            text: `🌟 *Perintah Permainan Catur:*\n\n` +
                  `🏁 *chess create* - Mulai permainan catur\n` +
                  `👥 *chess join* - Bergabung dalam permainan catur yang sedang menunggu\n` +
                  `🎲 *chess start* - Memulai permainan jika ada dua pemain yang sudah bergabung\n` +
                  `🚫 *chess delete* - Menghentikan permainan catur\n` +
                  `🔄 *chess [dari] [ke]* - Melakukan langkah dalam permainan catur\n\n` +
                  `📌 *Contoh:*\n` +
                  `- _chess create_ → Memulai permainan catur.\n` +
                  `- _chess join_ → Bergabung dalam permainan.\n` +
                  `- _chess e2 e4_ → Melakukan langkah e2 ke e4.` 
        }, { quoted: m });
    }
    return wbk.sendMessage(m.chat, '❓ Perintah tidak valid. Gunakan "chess help" untuk melihat bantuan.', m);
};
break;

case 'bantuan': { //
	try {
		if (m.chat in tebakgambar) {
			let json = tebakgambar[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakgame) {
			let json = tebakgame[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkata) {
			let json = tebakkata[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakbendera) {
			let json = tebakbendera[m.chat][1]
			m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkalimat) {
			let json = tebakkalimat[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in siapaaku) {
			let json = siapaaku[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebakkimia) {
			let json = tebakkimia[m.chat][1]
			m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebaklirik) {
			let json = tebaklirik[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tebaktebakan) {
			let json = tebaktebakan[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in susunkata) {
			let json = susunkata[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in caklontong) {
			let json = caklontong[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in tekateki) {
			let json = tekateki[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
        if (m.chat in asahotak) {
			let json = asahotak[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
		if (m.chat in butawarna) {
			let json = butawarna[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
        if (m.chat in lengkapikalimat) {
			let json = lengkapikalimat[m.chat][1]
			m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
		}
	} catch (error) {
		console.log(error);
	}
}
break

case 'nyerah': { //
	try {
        if (m.chat in tebakgambar) {
			clearTimeout(tebakgambar[m.chat][3])
			delete tebakgambar[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakgame) {
			clearTimeout(tebakgame[m.chat][3])
			delete tebakgame[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkata) {
			clearTimeout(tebakkata[m.chat][3])
			delete tebakkata[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakbendera) {
			clearTimeout(tebakbendera[m.chat][3])
			delete tebakbendera[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkalimat) {
			clearTimeout(tebakkalimat[m.chat][3])
			delete tebakkalimat[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in siapaaku) {
			clearTimeout(siapaaku[m.chat][3])
			delete siapaaku[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in tebakkimia) {
			clearTimeout(tebakkimia[m.chat][3])
			delete tebakkimia[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tebaklirik) {
			clearTimeout(tebaklirik[m.chat][3])
			delete tebaklirik[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tebaktebakan) {
			clearTimeout(tebaktebakan[m.chat][3])
			delete tebaktebakan[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in susunkata) {
			clearTimeout(susunkata[m.chat][3])
			delete susunkata[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in caklontong) {
			clearTimeout(caklontong[m.chat][3])
			delete caklontong[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in tekateki) {
			clearTimeout(tekateki[m.chat][3])
			delete tekateki[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in asahotak) {
			clearTimeout(asahotak[m.chat][3])
			delete asahotak[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
		if (m.chat in butawarna) {
			clearTimeout(butawarna[m.chat][3])
			delete butawarna[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
        if (m.chat in lengkapikalimat) {
			clearTimeout(lengkapikalimat[m.chat][3])
			delete lengkapikalimat[m.chat]
			return wbk.sendMessage(m.chat, {
				text: `_Lemahhh_ 😏`
			}, {
				quoted: m
			})
		}
	} catch (error) {
		console.log(error);
	}
}
break