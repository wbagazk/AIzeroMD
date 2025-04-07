const Jimp = require('jimp');
const { Chess } = require('chess.js');

async function sendBoard(m, game) {
    const fen = game.fen();
    const boardUrl = `https://chessboardimage.com/${fen}.png`; // Ganti dengan URL yang sesuai
    const img = await Jimp.read(boardUrl);
    const buffer = await img.getBufferAsync(Jimp.MIME_PNG);
    
    const caption = `♟️ *Posisi Saat Ini* ♟️\n` +
                    `Giliran: ${game.turn() === 'w' ? '⚪ Putih' : '⚫ Hitam'}\n` +
                    `Langkah: ${Math.floor(game.moveNumber())}\n` +
                    (game.isCheck() ? '⚡ SKAK!' : '');

    await wbk.sendMessage(m.chat, {
        image: buffer,
        caption: caption
    });
}

async function handleMove(m, { from, to }) {
    const chessGames = {};
    const game = chessGames[m.chat];

    if (!game) return m.reply("❌ Tidak ada permainan yang berlangsung!");

    const move = game.move({ from, to });

    if (!move) {
        return m.reply("❌ Gerakan tidak valid!");
    }

    await sendBoard(m, game);
    
    if (game.isGameOver()) {
        let endText = `🎯 *Permainan Selesai!*\n\n`;
        if (game.isCheckmate()) {
            endText += `⭐ Skakmat! Pemain ${game.turn() === 'w' ? 'Hitam' : 'Putih'} Menang!\n`;
        } else {
            endText += `🤝 Seri!\n`;
        }
        return wbk.sendMessage(m.chat, { text: endText });
    }

    // Mengganti giliran
    const nextTurn = game.turn() === 'w' ? 'Hitam' : 'Putih';
    wbk.sendMessage(m.chat, { text: `⏳ Giliran: ${nextTurn}` });
}


module.exports = { sendBoard, handleMove };