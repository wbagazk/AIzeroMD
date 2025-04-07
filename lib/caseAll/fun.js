case 'checkme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let namaTarget = args.join(" ");
    let idPengirim = `${m.sender}`;
    const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
    const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
    const tingkatBucin = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKeren = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
    const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
    const moralBaik = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const moralBuruk = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKepintaran = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKeberanian = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    const tingkatKetakutan = Array.from({
        length: 100
    }, (_, i) => (i + 1).toString());
    let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
    let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
    let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
    let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
    let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
    let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
    let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
    let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
    let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
    let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
    let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
    let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama:* ${pushname}\n✨ *Karakteristik:* ${sifatAcak}\n🎯 *Hobi:* ${hobiAcak}\n❤️ *Tingkat Bucin:* ${bucinAcak}%\n🌟 *Tingkat Keren:* ${kerenAcak}%\n😎 *Ketampanan:* ${tampanAcak}\n🧠 *Watak:* ${watakAcak}\n💎 *Moral Baik:* ${moralBaikAcak}%\n🔥 *Moral Buruk:* ${moralBurukAcak}%\n📊 *Kepintaran:* ${pintarAcak}%\n🛡️ *Keberanian:* ${beraniAcak}%\n👻 *Ketakutan:* ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
    try {
        ppuser = await wbk.profilePictureUrl(m.sender, 'image');
    } catch (err) {
        ppuser = thumbUrl
    }
    let fotoProfil = await getBuffer(ppuser);
    wbk.sendMessage(m.chat, {
            image: fotoProfil,
            caption: profil,
            mentions: [idPengirim],
    }, { quoted: m });
    await limitReduction(m, prefix, wm);
}
break;

case 'mitos': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const mitos = JSON.parse(fs.readFileSync('./src/datateks/fun/mitos.json', 'utf-8'));
    const randomMitos = mitos[Math.floor(Math.random() * mitos.length)];
    newReply(`🪄 *Mitos Menarik*\n\n${randomMitos}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'faktaunik': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const faktaunik = JSON.parse(fs.readFileSync('./src/datateks/fun/faktaunik.json', 'utf-8'));
    const randomFaktaUnik = faktaunik[Math.floor(Math.random() * faktaunik.length)];
    newReply(`🧠 *Fakta Unik*\n\n${randomFaktaUnik}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'faktakucing': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const faktakucing = JSON.parse(fs.readFileSync('./src/datateks/fun/faktakucing.json', 'utf-8'));
    const randomFaktaKucing = faktakucing[Math.floor(Math.random() * faktakucing.length)];
    newReply(`🐈 *Fakta Kucing*\n\n${randomFaktaKucing}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'joke': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const joke = JSON.parse(fs.readFileSync('./src/datateks/fun/joke.json', 'utf-8'));
    const randomJoke = joke[Math.floor(Math.random() * joke.length)];
    newReply(`🤣 *Joke*\n\n${randomJoke}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekganteng': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekganteng = JSON.parse(fs.readFileSync('./src/datateks/fun/cekganteng.json', 'utf-8'));
    let komentarCekGanteng;
    if (percentage > 80) {
        komentarCekGanteng = cekganteng.above_80[Math.floor(Math.random() * cekganteng.above_80.length)];
    } else if (percentage > 50) {
        komentarCekGanteng = cekganteng.between_51_and_80[Math.floor(Math.random() * cekganteng.between_51_and_80.length)];
    } else {
        komentarCekGanteng = cekganteng.below_50[Math.floor(Math.random() * cekganteng.below_50.length)];
    }
    newReply(`👑 *Cek Ganteng*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekGanteng}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekcantik': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekcantik = JSON.parse(fs.readFileSync('./src/datateks/fun/cekcantik.json', 'utf-8'));
    let komentarCekCantik;
    if (percentage > 80) {
        komentarCekCantik = cekcantik.above_80[Math.floor(Math.random() * cekcantik.above_80.length)];
    } else if (percentage > 50) {
        komentarCekCantik = cekcantik.between_51_and_80[Math.floor(Math.random() * cekcantik.between_51_and_80.length)];
    } else {
        komentarCekCantik = cekcantik.below_50[Math.floor(Math.random() * cekcantik.below_50.length)];
    }
    newReply(`👑 *Cek Cantik*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekCantik}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekimut': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekimut = JSON.parse(fs.readFileSync('./src/datateks/fun/cekimut.json', 'utf-8'));
    let komentarCekImut;
    if (percentage > 80) {
        komentarCekImut = cekimut.above_80[Math.floor(Math.random() * cekimut.above_80.length)];
    } else if (percentage > 50) {
        komentarCekImut = cekimut.between_51_and_80[Math.floor(Math.random() * cekimut.between_51_and_80.length)];
    } else {
        komentarCekImut = cekimut.below_50[Math.floor(Math.random() * cekimut.below_50.length)];
    }
    newReply(`☺️ *Cek Imut*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekImut}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekjomok': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekjomok = JSON.parse(fs.readFileSync('./src/datateks/fun/cekjomok.json', 'utf-8'));
    let komentarCekJomok;
    if (percentage > 80) {
        komentarCekJomok = cekjomok.above_80[Math.floor(Math.random() * cekjomok.above_80.length)];
    } else if (percentage > 50) {
        komentarCekJomok = cekjomok.between_51_and_80[Math.floor(Math.random() * cekjomok.between_51_and_80.length)];
    } else {
        komentarCekJomok = cekjomok.below_50[Math.floor(Math.random() * cekjomok.below_50.length)];
    }
    newReply(`😊 *Cek Imut*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentarCekJomok}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekwaifu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekwaifu = JSON.parse(fs.readFileSync('./src/datateks/cekwaifu.json', 'utf-8'));
    let komentarCekWaifu;
    if (percentage > 80) {
        komentarCekWaifu = cekwaifu.above_80[Math.floor(Math.random() * cekwaifu.above_80.length)];
    } else if (percentage > 50) {
        komentarCekWaifu = cekwaifu.between_51_and_80[Math.floor(Math.random() * cekwaifu.between_51_and_80.length)];
    } else {
        komentarCekWaifu = cekwaifu.below_50[Math.floor(Math.random() * cekwaifu.below_50.length)];
    }
    newReply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentarCekWaifu}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekhusbu': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
    const percentage = Math.floor(Math.random() * 100) + 1;
    const cekhusbu = JSON.parse(fs.readFileSync('./src/datateks/cekhusbu.json', 'utf-8'));
    let komentarCekHusbu;
    if (percentage > 80) {
        komentarCekHusbu = cekhusbu.above_80[Math.floor(Math.random() * cekhusbu.above_80.length)];
    } else if (percentage > 50) {
        komentarCekHusbu = cekhusbu.between_51_and_80[Math.floor(Math.random() * cekhusbu.between_51_and_80.length)];
    } else {
        komentarCekHusbu = cekhusbu.below_50[Math.floor(Math.random() * cekhusbu.below_50.length)];
    }
    newReply(`💖 *Cek Husbu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentarCekHusbu}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekkpribadian': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const cekkpribadian = JSON.parse(fs.readFileSync('./src/datateks/fun/joke.json', 'utf-8'));
    const randomCekKpribadian = cekkpribadian[Math.floor(Math.random() * cekkpribadian.length)];
    newReply(`😎 *Kpribadian*\n\n${randomCekKpribadian}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'cekmasadepan': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const masaDepan = [
        '💼 Akan jadi bos besar di perusahaan ternama!',
        '🏝️ Pensiun muda dan tinggal di pulau tropis.',
        '💖 Akan menemukan cinta sejati dalam waktu dekat.',
        '📚 Akan jadi orang yang sangat berilmu dan dihormati.',
        '💸 Kaya raya dengan bisnis sukses!',
        '🎭 Masa depan Kakak penuh misteri dan kejutan!',
        '😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
    ];
    const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
    newReply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'quotesgalau': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const quotes = [
        '💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
        '🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
        '😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
        '💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
        '🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    newReply(`💔 *Quotes Galau*\n\n${randomQuote}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'truth': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const truths = [
        '😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
        '🤭 Siapa orang yang diam-diam kamu suka saat ini?',
        '🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
        '👀 Hal paling memalukan yang pernah kamu alami?',
        '💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
    ];
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    newReply(`🤔 *Truth*\n\n${randomTruth}`);
    await limitReduction(m, prefix, wm);
}
break;

case 'dare': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const dares = [
        '🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
        '😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
        '🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
        '🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
        '📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
    ];
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    newReply(`😈 *Dare*\n\n${randomDare}`);
    await limitReduction(m, prefix, wm);
}
break;