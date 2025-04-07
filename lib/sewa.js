const fs = require('fs');
const toMs = require('ms');
const { sleep } = require("./myfunc");

const sewaFile = './src/data/role/sewa.json';

// Membaca data sewa dari file JSON
const readSewaData = () => {
	try {
		if (!fs.existsSync(sewaFile)) return [];
		const data = fs.readFileSync(sewaFile, 'utf-8');
		return data ? JSON.parse(data) : [];
	} catch (error) {
		console.error("Error membaca file sewa.json:", error);
		return [];
	}
}

// Menyimpan data sewa ke file JSON
const saveSewaData = (data) => {
	try {
		fs.writeFileSync(sewaFile, JSON.stringify(data, null, 2));
	} catch (error) {
		console.error("Error menyimpan data sewa:", error);
	}
}

// Menambahkan grup ke daftar sewa
const addSewaGroup = (groupId, duration) => {
	let sewaData = readSewaData();
	const newSewa = {
		id: groupId,
		expired: Date.now() + toMs(duration),
		status: true
	};
	sewaData.push(newSewa);
	saveSewaData(sewaData);
}

// Mendapatkan posisi sewa grup dalam array
const getSewaPosition = (groupId) => {
	let sewaData = readSewaData();
	return sewaData.findIndex(sewa => sewa.id === groupId);
}

// Mendapatkan waktu expired sewa grup
const getSewaExpired = (groupId) => {
	let sewaData = readSewaData();
	const sewa = sewaData.find(sewa => sewa.id === groupId);
	return sewa ? sewa.expired : null;
}

// Mengecek apakah grup sedang dalam status sewa
const checkSewaGroup = (groupId) => {
	let sewaData = readSewaData();
	return Array.isArray(sewaData) && sewaData.some(sewa => sewa.id === groupId);
}

// Mengecek dan menghapus sewa yang sudah expired
const checkSewaExpired = (sock) => {
	setInterval(() => {
		try {
			let sewaData = readSewaData();
			let expiredGroups = sewaData.filter(sewa => Date.now() >= sewa.expired);

			expiredGroups.forEach(async (sewa) => {
				let captionText = `*⏳ SEWA GRUP HABIS ⏳*\n\n`;
				captionText += `⚠️ Masa sewa untuk grup ini sudah berakhir.\n`;
				captionText += `🤖 Bot akan otomatis keluar dalam beberapa saat.\n\n`;
				captionText += `_Perpanjang sewa sekarang agar bot tetap di grup!_`;

				const contentText = {
					text: captionText,
					contextInfo: {
						forwardingScore: 999999, 
						isForwarded: true,
						externalAdReply: {
							title: `🚨 SEWA HABIS! 🚨`,
							previewType: "PHOTO",
							thumbnailUrl: imageUrl,
							sourceUrl: wagc
						}
					}
				};

				await sock.sendMessage(sewa.id, contentText);
				await sock.groupLeave(sewa.id);

				// Hapus grup dari daftar sewa
				sewaData = sewaData.filter(item => item.id !== sewa.id);
				saveSewaData(sewaData);
			});

		} catch (error) {
			console.error("Error saat memeriksa sewa yang expired:", error);
		}
	}, 1000);
}

// Mendapatkan semua grup yang sedang dalam masa sewa
const getAllSewaGroups = () => {
	let sewaData = readSewaData();
	return Array.isArray(sewaData) ? sewaData.map(sewa => sewa.id) : [];
}

module.exports = {
	addSewaGroup,
	getSewaExpired,
	getSewaPosition,
	checkSewaExpired,
	checkSewaGroup,
	getAllSewaGroups
};
