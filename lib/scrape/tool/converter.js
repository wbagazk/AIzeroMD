const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

/**
 * Fungsi utama untuk menjalankan proses FFmpeg
 * @param {Buffer} buffer - File buffer
 * @param {Array} args - Argumen FFmpeg
 * @param {String} ext - Ekstensi input
 * @param {String} ext2 - Ekstensi output
 * @returns {Promise<Buffer>} - File hasil konversi sebagai buffer
 */
function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
	return new Promise(async (resolve, reject) => {
		try {
			let tmp = path.join(__dirname, '../../../temp', `${Date.now()}.${ext}`);
			let out = `${tmp}.${ext2}`;
			
			await fs.promises.writeFile(tmp, buffer); // Simpan sementara file input

			const process = spawn('ffmpeg', [
				'-y',
				'-i', tmp,
				...args,
				out
			]);

			process.on('error', (err) => {
				console.error('❌ FFmpeg Error:', err);
				reject(err);
			});

			process.on('close', async (code) => {
				try {
					await fs.promises.unlink(tmp); // Hapus file input sementara
					if (code !== 0) return reject(new Error(`FFmpeg exited with code ${code}`));
					const result = await fs.promises.readFile(out);
					await fs.promises.unlink(out); // Hapus file output sementara
					resolve(result);
				} catch (e) {
					reject(e);
				}
			});
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * 🎵 **Konversi Media ke Audio (MP3)**
 * @param {Buffer} buffer - File buffer
 * @param {String} ext - Ekstensi input
 * @returns {Promise<Buffer>} - File MP3 sebagai buffer
 */
function toAudio(buffer, ext) {
	return ffmpeg(buffer, [
		'-vn',
		'-ac', '2',
		'-b:a', '128k',
		'-ar', '44100',
		'-f', 'mp3'
	], ext, 'mp3');
}

/**
 * 🎤 **Konversi Media ke Voice Note (PTT/Opus)**
 * @param {Buffer} buffer - File buffer
 * @param {String} ext - Ekstensi input
 * @returns {Promise<Buffer>} - File Opus sebagai buffer
 */
function toPTT(buffer, ext) {
	return ffmpeg(buffer, [
		'-vn',
		'-c:a', 'libopus',
		'-b:a', '128k',
		'-vbr', 'on',
		'-compression_level', '10'
	], ext, 'opus');
}

/**
 * 🎥 **Konversi Media ke Video (MP4)**
 * @param {Buffer} buffer - File buffer
 * @param {String} ext - Ekstensi input
 * @returns {Promise<Buffer>} - File MP4 sebagai buffer
 */
function toVideo(buffer, ext) {
	return ffmpeg(buffer, [
		'-c:v', 'libx264',
		'-c:a', 'aac',
		'-ab', '128k',
		'-ar', '44100',
		'-crf', '32',
		'-preset', 'slow'
	], ext, 'mp4');
}

module.exports = { toAudio, toPTT, toVideo };